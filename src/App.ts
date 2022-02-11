import express from 'express';
import './infra/db/Db';
import cors from 'cors';
import router from './routes';
import options from './utils/corsOptions';

class App {
  public app : express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(options));
    this.app.use(express.json());
  }

  routes() {
    router(this.app);
  }
}

export default new App().app;
