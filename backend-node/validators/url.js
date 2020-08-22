import { body } from 'express-validator';

const start = body('url').custom((value, { req }) => {
  if (value.includes('http') || value.includes('https')) {
    return true;
  }
  throw new Error('a url should start with a valid protol.');
});

const validators = [body('url').isURL(), start];

export default validators;
