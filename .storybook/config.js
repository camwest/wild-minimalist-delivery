import { configure, addDecorator } from '@kadira/storybook';

import WithExample from './addons/example-addon';
import '../src/index.css';

function loadStories() {
  require('../src/stories');
}

addDecorator(WithExample);

configure(loadStories, module);
