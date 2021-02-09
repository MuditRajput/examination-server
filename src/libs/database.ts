import * as mongoose from 'mongoose';
import { default as seedData } from './seedData';

export default class Database {
    public static open(mongoUrl) {
        return new Promise<void>((resolve, reject) => {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
            mongoose.connect(mongoUrl, options, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                seedData();
                resolve();
                console.log('App is successfully connected to MongoDB');
            });
        });
    }
    public static disconnect() {
        console.log('disconnected');
    }
}
