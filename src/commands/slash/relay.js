//Command / Register Behavior from Sapphire Framework
const { Command, RegisterBehavior, Listener } = require('@sapphire/framework');
// Slash Command Builder
const { SlashCommandBuilder } = require('@discordjs/builders');
// Message
const { MessageCollector, Collection , Message,  MessageEmbed, MessageAttachment } = require('discord.js');
// Env
const { env } = require('../.././config');

const { Body } = require('node-fetch');
// Node HTML to Image
const nodeHtmlToImage = require('node-html-to-image');
// Axios 
const axios = require('axios');



// Red Green Refactor :o



class RelayCommand extends Command {

//  Constructor - Fund Concept 
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'relay',
            description: 'Relay Messages',
            chatInputCommand: {
                register: true,
                behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
                guildIds: [process.env.GUILD_ID],
                idHints: ['']
            }
        });
    }

    

 // https://github.com/KBVE/archive/blob/main/nodejs/_function/_axios_post.js   
    async _post(url,data) {    try {   const resp = await axios.post(url,data);    return resp.data;   } catch (err) {     console.error(err);     return err;     }   };

    async run(message)
    {
        console.log(message)
    }


    async chatInputRun(interaction) {
        //_[START]
        //Init Message
        const embed = new MessageEmbed().setColor(0xff00ff).setDescription(`Relay`);
        const bonus = new MessageEmbed().setColor(0xff00ff).setDescription(`Init... Please Kill Me...`);
        //_[END]

        // Console Log
        console.log(`User: ${interaction.member.user.id}`);
        console.log(interaction.channelId);
        
        
        const message = await interaction.reply({
            embeds: [embed,bonus],
            fetchReply: true
        });

        const type = interaction.options.getSubcommand(true);
      

        


        switch (type) {
            case 'manage':
                    // TO-DO : Sanitize Input Parameters
                    // TO-DO : Convert Credits to USD
                    //const stock = interaction.options.getString('stock');
                    //const amount = interaction.options.getString('amount').replace('K','000').replace(',','');
                    //const _amount = amount;
                    //if(interaction.member.user.id != '121512134390579200') {                                 embed.setColor(0x0000FF).setDescription(`Only holy can ask me to buy!`);                        await interaction.editReply({ embeds: [embed] });       break; }
                    //if(isNaN(amount)) {                                 embed.setColor(0xFF0000).setDescription(`Amount is not a valid number`);                        await interaction.editReply({ embeds: [embed] });       break; }
                    //if(stock.length > 5) {                              embed.setColor(0xFF0000).setDescription(`Stock Ticker is too long`);                            await interaction.editReply({ embeds: [embed] });       break; }

                    // TO-DO: Executioner - interaction.member.user.id - has to have enough credits inside their account to execute the exchange.
                    // TO-DO: Executioner - interaction.member.user.id - start pending transaction and remove the credits from their account.
                    


                // Create a message collector

                const { client } = this.container;
                
                
                //const collector = client.createMessageCollector();
                //const collector =
                //collector.on('collect', m => console.log(`Collected ${m.content}`));
                
                //const collection = new Discord.MessageCollector(channel, options);

                // Patch Tega REMOVED.

                // The best way I think we 




                // Pre Final Step Message
                embed
                .setColor(0xff00ff)
                .setDescription(` Enabling the module || `);

                bonus
                .setColor(0xff0ff)
                .setDescription(`Microk8s will start to spin in the cloud`)
                await interaction.editReply({ embeds: [embed,bonus] });   
                
                
                // End of the management.
                break; 
           
             
            
            default:
                //_[DEAD]
                //timer.start();
                //await Promise.all(
                //    this.container.stores.map(store => store.loadAll())
                //);
                //[DEAD]_
                embed
                .setColor(0x57f287)
                .setDescription(`- No Type -`);
                await interaction.editReply({ embeds: [embed] });
                break;
                
        }



    }


    autocompleteRun(interaction) {
        const type = interaction.options.getSubcommand(true);
        const query = interaction.options.getFocused();

        const options =
            type === 'piece'
                ? new Collection()
                      .concat(...this.container.stores.values())
                      .filter(
                          piece => !piece.location.full.includes('node_modules')
                      )
                : this.container.stores;

        return interaction.respond(
            [...options.values()]
                .map(piece => ({
                    name: piece.name,
                    value: piece.name
                }))
                .filter(option => !query.trim() || option.name.includes(query))
        );
    }

    

    
    registerApplicationCommands(registry) {
        const command = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
            .addSubcommand(subcommand =>
                subcommand
                    .setName('manage')
                    .setDescription('Manage Relay')
                    .addStringOption(option =>
                        option
                            .setName('settings')
                            .setDescription('The settings for the relay') 
                            .setRequired(false)
                    )
                    .addStringOption(option =>
                        option
                            .setName('token')
                            .setDescription('The token if needed') 
                            .setRequired(false)
                    )
            )
            .addSubcommand(subcommand =>
                        subcommand
                            .setName('clear')
                            .setDescription('Clear relay messages')
                           
            )
            .addSubcommand(subcommand =>
                subcommand
                    .setName('restart')
                    .setDescription('Restart relay messages')
            );
            
          

        registry.registerChatInputCommand(command, {
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
            guildIds: [process.env.GUILD_ID]
        });
    }





}



// Export the Final Module

module.exports = {
    RelayCommand
};
