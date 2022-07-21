
require('@sapphire/plugin-logger/register');                                    //  Plugin Register
const { Listener } = require('@sapphire/framework');                            //  Event Listener
const { Collection  }  = require('discord.js')                              //  Discord.js
const { env } = require('.././config');                                         //  env file
const colors = require('colorette');                                            //  colors
const axios = require("axios");                                                 //  Axios
// Env Vars
//  env.DISCORD_VOICE_CHANNEL_ID, env.GUILD_ID

class BaseEvent extends Listener {
    
                constructor(context, options)               {
                            super(context, { ...options, once: true, event: `ready` }); }   // Get Events Information from https://github.com/KBVE/archive/blob/main/txt/app/discord/discord_events_2022.txt
                        
                            //  https://github.com/KBVE/archive/blob/main/nodejs/_function/_discord_sapphire_ilogger.js
                            async _good(_log)               {   const { client } = this.container;  client.logger.info(colors.bold(colors.green(`${_log}`)));}
                            async _bad(_log)                {   const { client } = this.container;  client.logger.error(colors.bold(colors.red(`${_log}`)));}

                            async btc_price()               {   const btc_url = "https://blockchain.info/ticker";   let body;   try {   await axios.get(btc_url).then((response) => {   body = response.data.USD.last;  });     } catch (error) {   this._bad(error); return error;    }   return body; }

                            async discord_title(_title)     {   const { client } = this.container;  client.guilds.cache.get(env.GUILD_ID).setName(`${_title}`); }

                            async btc_title()               {   let price;  try {   price = await this.btc_price(); } catch (error) {   this._bad(`[BTC Event]->[Grab Price] failed ... \n ${error}`);   }        this.discord_title(` KBVE | BTC $${price} USD`);  }
                    
                            async run()                     {
                                            //try {   this.btc_title();  this._good('[Ticker]  executed ...');  } catch (error) {       this._bad(`[BTC Event failed] ... \n ${error}`);    }
                                            //
                                            //this.run();
                                            //let __date; __date = +new Date;
                                            //try {   this.discord_title(`KBVE.com | v${__date}`);  this._good('[Title]  executed ...');  } catch (error) {       this._bad(`[Title] failed ... \n ${error}`);    }
                                            //let _command; 
                                            //let _command_mod;
                                            try {
                                                    //_command_mod = new Collection().concat(...this.container.stores.values()).filter((piece => !piece.location.full.includes('node_modules')) && (piece => piece.location.full.includes('fund.js')));
                                                    //let _command_base = new Collection().concat(...this.container.stores.values()).filter((piece => !piece.location.full.includes('node_modules')) && (piece => piece.location.full.includes('fund.js')) );
                                                    //let _command_mod =  JSON.parse(JSON.stringify(_command_base))[0].location.full;
                                                    //console.log(_c);
                                                    //await new Promise(r => setTimeout(r, 10000));
                                                    //this._good(`Command was found!`);
                                                    //console.log(_command_mod);
                                                } catch (error) {   this._bad(`[Base Event] Failed \n ${error}`);   }          
                                            // 
                                        }

                
                }


module.exports = {      BaseEvent   };  











