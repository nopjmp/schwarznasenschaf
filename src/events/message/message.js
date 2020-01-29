import Jimp from 'jimp'
import jsQR from 'jsqr'

import Config from 'config'

export default class messageEvent {
  constructor() {
    this.name = 'message'
  }

  async handle(message) {
    // ignore DMs
    if (!message.channel.guild) return

    var attachments = message.attachments.filter(e => {
      const width = e.width || 0
      const height = e.height || 0
      return width > 0 && height > 0
    })

    for (const image of attachments) {
      try {
        const imageData = await Jimp.read(image.url)
        const result = jsQR(imageData.bitmap, imageData.getWidth(), imageData.getHeight(), { inversionAttempts: "dontInvert" })

        if (result != null && result.data.startsWith("https://discordapp.com/ra/")) {
          const channel = message.channel.guild.channels.get(Config.loggingChannels.messages)
          channel.send(`${message.author.tag}, with id \`${message.author.id}\`, has sent malicious login url qr code  `)
          
          message.delete()
        }
      } catch (e) {
        console.warn(e)
      }
    }
  }
}