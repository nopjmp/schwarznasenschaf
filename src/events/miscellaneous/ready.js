import Config from 'config'

export default class ReadyEvent {
  constructor(client) {
    this.name = 'ready'
    this.client = client
  }

  handle() {
    this.client.user.setActivity(`${Config.prefix}help`, { type: 'LISTENING' })
    console.log('Ready!')
  }
}
