import express from 'express'

class App{
    public app : express.Application

    constructor(){
        this.app = express()
        this.routes()
    }

    routes(){
        this.app.route('/').get((req, res) => {
            res.send({versao: '0.0.1'})
        })
    }
}

export default new App().app