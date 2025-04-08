const axios = require('axios');
const { info, error } = require('./modules/logs');

const token = ""; 
const switchInterval = 5; 
const presences = ["online", "idle", "dnd", "invisible"];

console.clear();
info("Time-based status updates");

async function changeStatus(token, statusText, emoji, presence) {
    try {
        const headers = { authorization: token };

        const customStatus = {
            text: `${emoji} ${statusText}`,
            emoji_name: emoji,
            emoji_id: null
        };

        const jsonData = {
            custom_status: customStatus,
            activities: [],
            status: presence
        };

        const response = await axios.patch("https://discord.com/api/v10/users/@me/settings", jsonData, { headers });
        if (response.status === 200) {
            info(`Status changed to: "${statusText}", Presence: "${presence}", Emoji: "${emoji}"`);
        } else {
            error(`Failed to update status. Response code: ${response.status}`);
        }
    } catch (err) {
        error("Failed to update status:", err.message);
    }
}

function determineStatus() {
    const currentTime = new Date();
    const hours = currentTime.getUTCHours() + 3; 

    let status = { presence: 'online', text: '', emoji: '' };

    if (hours === 23) { 
        status = { text: 'Possibly Sleeping', presence: 'idle', emoji: '💤' };
    } else if (hours === 7) { 
        status = { text: 'Home, Online', presence: 'online', emoji: '🏠' };
    } else if (hours === 13) { 
        status = { text: 'Home, Online', presence: 'online', emoji: '🏠' };
    } else {
        status = { text: 'Online', presence: 'online', emoji: '💻' };
    }

    return status;
}

(async () => {
    while (true) {
        const timeBasedStatus = determineStatus();
        const statusText = timeBasedStatus.text;
        const presence = timeBasedStatus.presence;
        const emoji = timeBasedStatus.emoji;

        await changeStatus(token, statusText, emoji, presence);

        await new Promise(resolve => setTimeout(resolve, switchInterval * 1000));
    }
})();
