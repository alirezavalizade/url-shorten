import { EventEmitter } from 'events';

import config from '../configs/database';
import mongoose from 'mongoose';

export default class DatabaseManager extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    mongoose
      .connect(config.uri, config.options)
      .then(() => {
        this.emit('connected');
      })
      .catch((err) => {
        console.log(err);

        throw new Error(err);
      });
  }
}
