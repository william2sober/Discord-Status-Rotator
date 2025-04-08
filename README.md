# Undesync Status Rotator

A Discord status rotator that automatically updates your status based on the time of day (GMT+3). The bot changes your status to different predefined messages and emojis at specific times, including Idle, Online, and Custom Statuses.

## Features

- **Time-based Status Updates**: Automatically changes your Discord status based on the time of day.
- **Custom Statuses and Emojis**: Supports custom status text and emoji combinations.
- **Easy to Configure**: Minimal setup required to get started.
- **GMT+3 Support**: Adjusts the time-based logic for GMT+3 timezone.
- **Continuous Updates**: Status updates every few seconds as defined in the code.

## Setup

1. **Clone the Repository**:
   `git clone https://github.com/your-username/undesync-status-rotator.git`
   `cd undesync-status-rotator`

2. **Install Dependencies**:
   Make sure you have Node.js installed. If not, download it from [here](https://nodejs.org/).

   Then install the required packages:
   `npm install axios`

3. **Edit the Code**:
   Open `index.js` and replace the `token` variable with your own Discord token.

4. **Run the Bot**:
   After configuring the bot, run it using:
   `node index.js`

## Customization

- **Switch Interval**: Modify the `switchInterval` in the code to adjust how frequently the status changes (in seconds).
- **Custom Statuses and Emojis**: The status and emoji are dynamically set based on the time of day. You can modify these directly in the `determineStatus` function.

## Support

If you need help or have any questions, feel free to join the support community on Discord:

[Discord Support Server](https://discord.gg/G8hJGkZMqD) 
