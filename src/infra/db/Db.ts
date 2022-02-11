import mongoose from 'mongoose';
import 'dotenv/config';

class Db {
  public async createConnection() {
    await mongoose.connect(`${process.env.MONGODBCONNECTION}`);
  }
}

export default new Db().createConnection();
