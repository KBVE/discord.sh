require('@sapphire/plugin-logger/register');                                    //  Plugin Register
const { Listener } = require('@sapphire/framework');                            //  Event Listener
const { env } = require('.././config');                                         //  env file
const colors = require('colorette');                                            //  colors
const { VoiceConnection, joinVoiceChannel } = require('@discordjs/voice');      //  Discord voice

// Env Vars
//  env.DISCORD_VOICE_CHANNEL_ID, env.GUILD_ID

class VoiceEvent extends Listener {
    
                constructor(context, options) {
                            super(context, { ...options, once: true, event: `ready` }); }   // Get Events Information from https://github.com/KBVE/archive/blob/main/txt/app/discord/discord_events_2022.txt
                    async run() {
                                const { client } = this.container;
                                try {
                                        const connection = joinVoiceChannel({   channelId:  env.DISCORD_VOICE_CHANNEL_ID,   guildId: env.GUILD_ID,  selfDeaf: false,    selfMute: false,    adapterCreator: client.channels.cache.get(env.DISCORD_VOICE_CHANNEL_ID).guild.voiceAdapterCreator,  });
                                        client.logger.info(colors.bold(colors.green('Voice Event executed ...')));
                                    } catch (error) { 
                                        console.log(error);
                                        client.logger.error(colors.bold(colors.red(`Voice Event failed ... \n ${error}`)));}


                    }

                }


module.exports = {
    VoiceEvent
};


                