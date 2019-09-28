const Command = require('../handler/Command')
const { inspect } = require('util')

class EvalCommand extends Command {

    constructor() {
        super({
            name: 'eval',
            ownerOnly: true,
            hidden: true
        })
    }

    async run(client, message, args) {
        try {
            const code = args.join(' ')
            let evaled = eval(code)
            if (typeof evaled !== 'string') {
                evaled = inspect(evaled)
            }
            await message.channel.send(evaled, {
                code: 'js',
                split: true
            })
        } catch (e) {
            await message.channel.send(e, {
                code: 'xl',
                split: true
            })
        }
    }

}

module.exports = EvalCommand