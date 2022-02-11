import mongoose from 'mongoose';
import 'dotenv/config';

class Db {
  private readonly url: string | unknown = process.env.MONGODBCONNECTION;

  public createConnection() {
    mongoose.connect(`${this.url}}`, () => console.log('Db Connected'));
  }
}

export default new Db().createConnection();
