import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextInput from '../components/TextInput';

storiesOf('TextInput', module)
  .add('default', () => (
    <div>
      <TextInput placeholder="Email" type="email" />
      <TextInput placeholder="Zipcode" />
    </div>
  ));
