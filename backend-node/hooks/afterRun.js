import chalk from 'chalk';
import { say } from 'cfonts';

import config from '../configs/app';

export default function afterRun() {
  const cols = process.stdout.columns;
  let text = '';

  if (cols > 104) {
    text = 'Url Shorten';
  } else if (cols > 76) {
    text = 'url shorten';
  } else {
    text = false;
  }

  if (text) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false
    });
  } else {
    console.log(chalk.yellow.bold('\n  Url Shorten'));
  }
  console.log(
    chalk.blue(`  getting ready on http://localhost:${config.port}... 🔥 `) +
      '\n'
  );
}
