const { MessageEmbed } = require('discord.js');
const { Command, RegisterBehavior } = require('@sapphire/framework');
// Slash Command Builder
const { SlashCommandBuilder } = require('@discordjs/builders');
// Python Script Integration
//const { PythonShell } = require('python-shell').PythonShell;
//import {py, PyClass, python} from 'pythonia'    
//const { py, PyClass, python } = require('pythonia');
// Going from Javascript, to Python, back to Javascript then to TypeScript. Why? Migration to TypeScript would be easier! :C
//import { PythonShell } from 'python-shell';
// Axios to Python Restful || Before we add in gRPC
const axios = require('axios');

class LightsCommand extends Command {

    // Constructor for the command.
    // START [Constructor]
    // information: "lights" {Name of the command}
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'lights',
            description: 'Control the Lights within the home',
            chatInputCommand: {
                register: true,
                behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
                guildIds: [process.env.GUILD_ID],
                idHints: ['']
            }
        });
    }
    // END [Constructor]


    // START [RESTful Request]
    async _post(url,data) {
        try {
            const resp = await axios.post(url,data);
            console.log(resp.data);
            return resp.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    // END [RESTful Request] Dummy Code

    async chatInputRun(interaction) {
        const embed = new MessageEmbed()
            .setColor(0xfee75c)
            .setDescription('**Processing Lights.py** Please wait...')

        const message = await interaction.reply({
            embeds: [embed],
            fetchReply: true
        });

        var reg=/^#([0-9a-f]{3}){1,2}$/i;
        const type = interaction.options.getSubcommand(true);
        const hex = interaction.options.getString('hex');

        if(!reg.test(hex))
        {
            embed
            .setColor(0xff0000)
            .setDescription(`Not a valid Hex Code`);

            await interaction.editReply({ embeds: [embed] });
        }
        else{
            // Test if hex passes through. We want to make sure that we check the safety of the string as well.
            // Sanitizing the string again, just to ensure that we are operating at a safe level. 
            console.log(hex);
            const ping = interaction.client.ws.ping;
            const latency = Date.now() - message.createdTimestamp;
            
            //                                                          [Dead Code] const tk = await python('tkinter')
            //                                                          [Dead Code] const root = await tk.Tk()
            
            //      const _discovery = await python('pywizlight.discovery');
            //      (Returns -> <module 'pywizlight.discovery' from 'C:\\Python\\lib\\site-packages\\pywizlight\\discovery.py'>)

            //      const bulbs = await _discovery.discover_lights(`broadcast_space="192.168.1.255"`);
            //      (Returns -> <coroutine object discover_lights at 0x0000023F99F4F1B0>)
            
            //                                                          [Dead Code] const script = await python('./../home/lights/wiz/_lights.py');

            //const _discovery = await python(`pywizlight.discovery.discover_lights(broadcast_space="192.168.1.255")`);
            //console.log(_discovery);
            // gRPC vs RESTFul

            // RESTFul via Axios (NodeJS) and Flask (Python)
            const _lights_data = {
                room: 1,
                hex: hex,
                command: 'all_light',
                body: 'Change all the light colors to this hex'
            };

            this._post('http://localhost:9000',_lights_data);

            // Make sure to kill Python, to avoid memory usage.
            //python.exit();
            
            embed
                .setColor(0x57f287)
                .setDescription(`💡 Light Color: ${hex}\n⌛ Latency: ${latency}ms`);

            await interaction.editReply({ embeds: [embed] });
        }
    }

    // Auto Complete Function

    autocompleteRun(interaction) {
        const type = interaction.options.getSubcommand(true);
        const query = interaction.options.getFocused();

        const options =
            type === 'lights_ex'
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
                    .setName('hex')
                    .setDescription('Hex Color of the Lights')
                    .addStringOption(option =>
                        option
                            .setName('hex')
                            .setDescription('The name of the hex color to use') 
                            .setRequired(true)
                    )
            );
          

        registry.registerChatInputCommand(command, {
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
            guildIds: [process.env.GUILD_ID]
        });
    }



}

module.exports = {
    LightsCommand
};
