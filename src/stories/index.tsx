import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextInput from '../components/TextInput';
import InputList from '../components/InputList';
import MasterLayout from '../components/MasterLayout';

storiesOf('TextInput', module)
  .add('Basic TextInput', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <TextInput placeholder="Email" type="email" />
    </MasterLayout>
  ))
  .add('valid TextInput', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <TextInput placeholder="Email" valid={true} />
    </MasterLayout>
  ))
  .add('InputList', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <InputList>
        <TextInput placeholder="Email" type="email" />
        <TextInput placeholder="Zipcode" valid={true} />
      </InputList>
    </MasterLayout>
  ));
