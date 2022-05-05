const { Listener } = require('@sapphire/framework');                            // Event Listener
const Filter = require('bad-words');                                            // Filter 
const { env } = require('.././config');                                         // env file
const axios = require('axios');                                             // Axios HTTP
const tmi = require('tmi.js');                                                                      //  TMI.js
const Koa = require('koa');                                                                         //  Koa
const router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const colors = require('colorette');

class TwitchEvent extends Listener {
    constructor(context, options) {     super(context, { ...options, once: true, event: `ready` });     }


    //https://github.com/KBVE/archive/blob/main/nodejs/_function/_discord_sapphire_ilogger.js
    async _good(_log)               {   const { client } = this.container;  client.logger.info(colors.bold(colors.green(`${_log}`)));}
    async _bad(_log)                {   const { client } = this.container;  client.logger.error(colors.bold(colors.red(`${_log}`)));}


    async _valid(vr_message)    { let clean_message;    try {   clean_message = new Filter().clean((vr_message));  } catch (error) {  this._bad(error) }     return clean_message;   }

    async _post(url,data) {     let resp;   try {   resp = await axios.post(url,data);  } catch (err) {     return Promise.reject(err);   }     return Promise.resolve(resp);    };

    async run() {
        
                const twitchClient = new tmi.Client({   options: { debug: true },   connection: { reconnect: true, secure: true },  identity: { username: env.TWITCH_USERNAME, password: env.TWITCH_BOT_TOKEN },    channels: [env.TWITCH_CHANNEL]  });

                try {   await twitchClient.connect();     } catch (error) {   this._bad(error); }    // Boot up Twitch , which will be connect and on connected
                try {   twitchClient.on('connected', () =>{   this._good('Twitch started.'); });   } catch (error) {   this._bad(error); }

                // Upon the connection, start Express   const app = express();          const router = express.Router();        app.use(bodyParser.urlencoded({ extended: true }));     app.use(bodyParser.json()); router.get('/twitch_api', function(req, res) {  res.json({ message: 'hooray! welcome to our api!' });   }); app.use('/api', router); app.listen(twitch_port);
                
                
                twitchClient.on('message', async (channel, user, message, self) => {
                    if(!self) {
                        let _m; try { _m = await this._valid(message);  }   catch (error)   {  console.log(error) }
                        if(_m.includes("◈"))    // Command
                            {  
                                let _c; _c = _m.split('◈').pop(); _c = _c.replace(/[^A-Za-z0-9 _.$]/,'');
                                let _c_Object = {   username: `<twitch>${user.username}</twitch>`,      avatar_url: ``,         content: _c,    };
                                console.log(_c_Object); 
                                //let _c_response; try {  _c_response = await this._post();    }   catch (error)   {  this._bad(error) }
                               
                            } else {         
                                let _j_Object = {   username: `[Twitch] ${user.username}`,      avatar_url: ``,         content: _m,    };
                                this._post(env.TWITCH_DISCORD_WEBHOOK,_j_Object);
                            }
                    }
                });

                const app = new Koa();     let app_router = new router();   app.use(bodyParser());
                
                app_router.post('/api/twitch_api', (ctx, next) => {   
                    ctx.body = ctx.request.body;    twitchClient.say(env.TWITCH_CHANNEL, `[Discord@${ctx.body.username}] ${ctx.body.message}`);   
                });
                app.use(app_router.routes()).use(app_router.allowedMethods());
                const http_app = app.listen(env.TWITCH_HTTP_API_PORT,   ()  =>  {           this._good(`Twitch API Server listening on port: ${env.TWITCH_HTTP_API_PORT}`);        });
        }
}

module.exports = {  TwitchEvent };
 