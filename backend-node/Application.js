import { EventEmitter } from 'events';

import DatabaseManager from './core/DatabaseManager';
import MiddlewareManager from './core/MiddlewareManager';
import ApiManager from './core/ApiManager';

export default class Application extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    this.initDatabase();
  }

  initDatabase() {
    this.databaseManager = new DatabaseManager();

    this.databaseManager.on('connected', () => {
      this.middlewareManager = new MiddlewareManager();
      this.apiManager = new ApiManager();

      this.emit('database-connected');
    });
  }
}
