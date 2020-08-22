import { EventEmitter } from 'events';
import express from 'express';

import ExceptionHandler from './core/ExceptionHandler';
import Application from './Application';

import afterRun from './hooks/afterRun';
import config from './configs/app';

export default class Launcher extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    this.exceptionHandler = new ExceptionHandler();

    global.app = express();
    this.initApplication();
  }

  initApplication() {
    this.application = new Application();
    this.application.on('database-connected', () => {
      this.runServer();
    });
  }

  runServer() {
    global.app.listen(config.port, afterRun);
  }
}
