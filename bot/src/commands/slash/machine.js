//Command / Register Behavior from Sapphire Framework
const { Command, RegisterBehavior } = require('@sapphire/framework');
// Slash Command Builder
const { SlashCommandBuilder } = require('@discordjs/builders');
// Stopwatch
const { Stopwatch } = require('@sapphire/stopwatch');
// Message
const { Collection , MessageEmbed, MessageAttachment } = require('discord.js');
// Env
const { env } = require('../../config');




class MachineCommand extends Command {

        //  Constructor - Machine Concept 
        constructor(context, options) {     super(context, { ...options,     name: 'machine',   description: 'KBVE Machine Bot',    chatInputCommand: {     register: true,     behaviorWhenNotIdentical: RegisterBehavior.Overwrite,   guildIds: [process.env.GUILD_ID],   idHints: ['']   }   }); }    
    
        // https://github.com/KBVE/archive/blob/main/nodejs/_function/_axios_post.js   
        async _post(url,data) {     let resp;   try {   resp = await axios.post(url,data);  } catch (err) {     return Promise.reject(err);   }     return Promise.resolve(resp);    };

        async messageRun(message) {
            console.log(message);
        }
} 

module.exports = {  MachineCommand  };
