import Discord from './discord'
import Database from './database'
import Server from './web'

const artemisClient = new Discord(process.env.DISCORD_BOT_TOKEN)
const artemisDatabase = new Database(process.env.DATABASE_MONGODB_URL)
const artemisServer = new Server(process.env.SERVER_PORT)

artemisClient.init()
artemisDatabase.init()
artemisServer.init()
