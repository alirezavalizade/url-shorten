import { EventEmitter } from 'events';

export default class ExceptionHandler extends EventEmitter {
  constructor() {
    super();

    this.setup();
  }

  setup() {
    process.on('uncaughtException', (err) => {
      this.emit('uncaughtException');
      const { message, stack } = err;
      console.log(`[Application] Uncaught exception: ${message}`);
      console.log(stack);
    });
  }
}
