import { EventEmitter } from 'events';

import urlApi from '../apis/url';

export default class ApiManager extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    global.app.use('/api/url', urlApi);
  }
}
