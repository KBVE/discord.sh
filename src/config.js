const { cleanEnv, str } = require('envalid');
const env = cleanEnv(process.env, {
    DISCORD_BOT_TOKEN: str({
        desc: 'The Discord bot token (https://discord.com/developers/applications)'
    }),
    OWNER_ID: str({
        desc: "The ID of the bot's owner (used for eval & reload)"
    }),
    GUILD_ID: str({
        desc: 'The ID of the guild to use for development (slash commands are updated instantly for this guild)'
    }),
    DISCORD_HTTP_PORT: str({
        desc: 'The PORT of the Base Command to use for abstract commands'
    }),
    DISCORD_HTTP_API: str({
        desc: 'The API location of the Base Command to use for anstract commands ()'
    }),
    DISCORD_VOICE_CHANNEL_ID: str({
        desc: 'The ID of the Voice Channel to use for music and voice commands ()'
    }),
    DISCORD_BOTSPAM_ID: str({
        desc: 'The ID of the Voice Channel to use for music and voice commands ()'
    }),
    DISCORD_TWITCH_RELAY_CHANNEL: str({
        desc: 'The Discord <-> Twitch Relay Channel'
    }),
    ROBINHOOD_HTTP_PORT: str({
        desc: 'The PORT of the Base Command to use for abstract commands'
    }),
    ROBINHOOD_HTTP_API: str({
        desc: 'The API location of the Base Command to use for anstract commands ()'
    }),
    ROBINHOOD_TOKEN: str({
        desc: 'The Token of the Robinhood Account'
    }),
    TWITCH_USERNAME: str({
        desc: 'The Username of the Twitch Bot'
    }),
    TWITCH_BOT_TOKEN: str({
        desc: 'The Token of the Twitch Bot'
    }),
    TWITCH_HTTP_API: str({
        desc: 'The API Location for the Twitch Bot'
    }),
    TWITCH_HTTP_API_PORT: str({
        desc: 'The API Port for the REST API'
    }),
    TWITCH_CHANNEL: str({
        desc: 'The Twtich Channel location'
    }),
    TWITCH_DISCORD_WEBHOOK: str({
        desc: 'The Twtich to Discord WebHook'
    })


});

module.exports = { env };
