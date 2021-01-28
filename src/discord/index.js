import DiscordJS from 'discord.js'
export default class Discord {
    constructor(token) {
        this.token = token
        this.client = new DiscordJS.Client()
    }

    init() {
        this.client.login(this.token)
    }
}