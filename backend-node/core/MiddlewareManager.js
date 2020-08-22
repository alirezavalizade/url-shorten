import { EventEmitter } from 'events';
import { validationResult } from 'express-validator';
import bodyParser from 'body-parser';
import cors from 'cors';

export default class MiddlewareManager extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    this.bodyParser();
    this.postMiddlewares();
  }

  bodyParser() {
    global.app.use(bodyParser.urlencoded({ extended: true }));
    global.app.use(bodyParser.json());
    global.app.use(cors());
  }

  postMiddlewares() {
    global.app.post('*', (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      return next();
    });
  }
}
