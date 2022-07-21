const { Listener } = require('@sapphire/framework');                                            //  Event Listener
const { env } = require('.././config');                                                         //  env file
const axios = require('axios');                                                                 //  Axios HTTP
const Koa = require('koa');                                                                     //  Koa
const router = require('@koa/router');                                                          //  Koa Router
const bodyParser = require('koa-bodyparser');                                                   //  Koa Bodyparser
const colors = require('colorette');                                                            //  Colorette
const rh  = require('robinhood');                                                               //  Robinhood


class HFEvent extends Listener {
    constructor(context, options) {     super(context, { ...options, once: true, event: `ready` });     }   // HedgeFund Event Listener for the IoT Bot!

    //  https://github.com/KBVE/archive/blob/main/nodejs/_function/_discord_sapphire_ilogger.js
    async _good(_log)               {   const { client } = this.container;  client.logger.info(colors.bold(colors.green(`${_log}`)));}
    async _bad(_log)                {   const { client } = this.container;  client.logger.error(colors.bold(colors.red(`${_log}`)));}
    //  https://github.com/KBVE/archive/blob/main/nodejs/_function/_axios_post.js   
    async _post(url,data) {     let resp;   try {   resp = await axios.post(url,data);  } catch (err) {     return Promise.reject(err);   }     return Promise.resolve(resp);    };


    async _pre_balance(data)
    {
        let _j_Object = {   username: data.vr_author,    message: data.vr_message,    user_id: data.vr_author_id,  message_id: data.vr_message_id,  channel_id: data.vr_channel, credit: data.vr_credit   };
        let body;   let credit_restful = data.vr_credit;     try { body = await this._post(credit_restful, _j_Object);    }   catch (err) {     this._bad(err);    return Promise.reject(err);      }  
        return Promise.resolve(body);            
    };


    robinhood_fund_data()
    {   
                 return new Promise(function (res, rej) {
                             var _RH = rh({token : env.ROBINHOOD_TOKEN }, function(){}); 
                                 _RH.accounts(function(error, response, body) { if (error) { rej(error); } var _data = body; res(_data); }) });           
    }
 
    async _rh_fund_data() {         let _rh = await this.robinhood_fund_data();             return await _rh;   } // Async Pass Through Function

    //async _rh_fund_data2() {        let _rh; try { _rh = await this.robinhood_fund_data();  return _rh;  } catch(error) { this._bad(error)   }   }
 
    robinhood_data(_ticker)
    {
                 return new Promise(function (res, rej) {
                                 if(!_ticker) rej('Missing Ticker');              
                                 const _RH = rh({token : env.ROBINHOOD_TOKEN }, function(){}); _RH.quote_data(_ticker, function(error, response, body) 
                                     { if (error) { this._bad(error); rej(error); } var _data = body; res(_data);  })     });           
     
    }
    async _rh_data(_ticker) {                               let _rh = await this.robinhood_data(_ticker);                                      return await _rh;   } // Async Pass Through


    robinhood_buy_data(_ticker, _url, _price , _shares)
    {
             return new Promise(function (res, rej) {
                    if(!_ticker) rej('Missing Ticker');          
                    const _RH = rh({token : env.ROBINHOOD_TOKEN }, function(){
                        let options = {
                                type: 'market',
                                quantity: _shares,
                                bid_price: _price,
                                instrument: {
                                    url: _url,
                                    symbol: _ticker
                                }
                        }
                        _RH.place_buy_order(options, function(error, response, body){
                            if (error) { rej(error); }     var _data = body;      res(_data);      })
                    })     
             });           
    }
    
    async _rh_buy(_ticker, _url, _price , _shares) {        let _rh = await this.robinhood_buy_data(_ticker, _url, _price , _shares);       return await _rh;   }

    async run() 
    {   
        const app = new Koa();     let app_router = new router();   app.use(bodyParser());
                
        app_router.all('/api/rh/account', (ctx, next) => {   
           
            ctx.body = ctx.request.body;   console.log(ctx.body);
            let data;  try {    data    =   await this._rh_fund_data();   }  catch (error) {     this._bad(error);   };


                    //twitchClient.say(env.TWITCH_CHANNEL, `[Discord@${ctx.body.username}] ${ctx.body.message}`);   
        });
        app.use(app_router.routes()).use(app_router.allowedMethods());
        const http_app = app.listen(env.ROBINHOOD_HTTP_PORT,   ()  =>  {           this._good(`RH API Server listening on port: ${env.ROBINHOOD_HTTP_PORT}`);        });

    }



}

module.exports = {  HFEvent };
 