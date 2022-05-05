    const { Command, RegisterBehavior } = require('@sapphire/framework');                                       //  Command / Register Behavior from Sapphire Framework
    const { SlashCommandBuilder } = require('@discordjs/builders');                                             //  Slash Command Builder
    const { Stopwatch } = require('@sapphire/stopwatch');                                                       //  Stopwatch
    const { Collection , MessageEmbed, MessageAttachment } = require('discord.js');                             //  Message
    const { env } = require('../.././config');                                                                  //  Env Config
    const { Body } = require('node-fetch');                                                                     //  Node-Fetch
    const nodeHtmlToImage = require('node-html-to-image');                                                      //  Node HTML to Image
    const axios = require('axios');                                                                             //  Axios


        // Glue Code Warning - 
        // Most of these commands are only meant for test cases, do not use in production! :)
        class KBVECommand extends Command {
            
        //  Constructor - KBVE Concept 
        constructor(context, options) {   super(context, {    ...options,     name: 'kbve',   description: 'KBVE Bot Library',   chatInputCommand: {     register: true,     behaviorWhenNotIdentical: RegisterBehavior.Overwrite,   guildIds: [process.env.GUILD_ID],   idHints: ['']   }   });     }

        //  https://github.com/KBVE/archive/blob/main/nodejs/_function/_axios_post.js   
        async _post(url,data) {     let resp;   try {   resp = await axios.post(url,data);  } catch (err) {     return Promise.reject(err);   }     return Promise.resolve(resp);    };
    
        async chatInputRun(interaction) {
            //_[START]
            //Init Message
            const embed = new MessageEmbed().setColor(0xfee75c).setDescription(`**KBVE Command** Please wait...`);
            const bonus = new MessageEmbed().setColor(0xfee75c).setDescription(`**Bonus Message!** Please wait...`);
            //_[END]

            const message = await interaction.reply({       embeds: [embed,bonus],      fetchReply: true    });

            
            const type = interaction.options.getSubcommand(true);
        
            switch (type) {
                
                case 'nfc': 
                    embed.setColor(0x57f287).setDescription(`NFC`);
                    const _nfc_command = interaction.options.getString('location');    let _nfc = _nfc_command.replace(/[^A-Za-z0-9]/g, '');
                    const image = await nodeHtmlToImage({   quality: 100,   type: 'png',    waitUntil: 'load',  html: `<iframe src="https://kbve.com/nfc/discord/${_nfc}/" style="border:none;" title=""></iframe>`   });
                    const _chart = new MessageAttachment(image, 'meme.png');
                    await interaction.editReply({   embeds: [embed,bonus],  files: [_chart]     });    
                break;
                
    
            
                default:    embed.setColor(0x57f287).setDescription(`- Use Slash Commands / type -`);       await interaction.editReply({ embeds: [embed] });   break;
            }
        }

        }

    module.exports = {      KBVECommand     };      // Export the Final KBVE Module