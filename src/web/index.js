import express from 'express'

export default class Server {

    constructor(port) {
        this.port = port
        this.app = express()
    }

    init() {
        this.app.listen(this.port)
    }
}