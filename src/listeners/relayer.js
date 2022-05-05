const { Listener } = require('@sapphire/framework');                            // Event Listener
const Filter = require('bad-words');                                            // Filter 
const { env } = require('.././config');                                         // env file
const axios = require('axios');                                             // Axios HTTP

class RelayerEvent extends Listener {
    
    constructor(context, options) {
        super(context, { ...options, event: `messageCreate` }); }   // Get Events Information from https://github.com/KBVE/archive/blob/main/txt/app/discord/discord_events_2022.txt

    async _valid(vr_message)    { let clean_message;    try {   clean_message = new Filter().clean((vr_message));  } catch (error) {  console.log(error) }     return clean_message;   }

    
    // https://github.com/KBVE/archive/blob/main/nodejs/_function/_axios_post.js   
    async _post(url,data) {     let resp;   try {   resp = await axios.post(url,data);  } catch (err) {     return Promise.reject(err);   }     return Promise.resolve(resp);    };


    async _twitch(vr_author,vr_author_id, vr_message, vr_message_id, vr_channel)   {  
                let _j_Object = {   username: vr_author,    message: vr_message,    user_id: vr_author_id,  message_id: vr_message_id,  channel_id: vr_channel  };
                try {   await this._post(env.TWITCH_HTTP_API, _j_Object);    }   catch (err) {     console.error(err);     return err;     }     
        }       

    async run(message) {

        //console.log(message);
        let twitch_relay = true;

        if(!message.author.id)                              {                                   return;     }   //  Null Check
        if(this.container.client.id == message.author.id)   {                                   return;     }   //  Ignore Messages from the bot.
        if(!message.content)                                {                                   return;     }   //  Empty Content Message
        if(!message.channelId)                              {                                   return;     }   //  Empty Channel ID

        
        //_[START] WebHook Handling - Avoiding double messages.
        if(message.webhookId)                               {   

            let web_hook = message.webhookId;   
            let twitch_web_hook = env.TWITCH_DISCORD_WEBHOOK.substring(env.TWITCH_DISCORD_WEBHOOK.indexOf("webhooks/")+9,env.TWITCH_DISCORD_WEBHOOK.lastIndexOf("/")); 
                if(web_hook == twitch_web_hook) { twitch_relay = false; }     
                      
            } 
        //_[END]
        
        // Currently structuring the listener

            let _c = message.channelId;
            let _a_id = message.author.id;
            let _a = message.author.username;
            let _m_id = message.id;
            let _m; try { _m = await this._valid(message.content);  }   catch (error)   {  console.log(error) }
               // Debug if Relay Channel   
            if((_c == env.DISCORD_TWITCH_RELAY_CHANNEL) && (twitch_relay)) {
                let _final; try { _final = await this._twitch(_a, _a_id,  _m, _m_id, _c);   }   catch (error)   {  console.log(error)  }
            }
            /*
            console.log('-------------------');
            console.log('-------------------');
            console.log(`Message :  ${_m}   `);
            console.log(`Author  :  ${_a}   `);
            console.log(`M ID    :  ${_m_id}`);
            console.log(`A ID    :  ${_a_id}`);
            console.log(`Channel :  ${_c}   `);
            console.log('-------------------');
            console.log('-------------------');

            */
        // Relayer Completed 

    }
}

module.exports = {
    RelayerEvent
};
