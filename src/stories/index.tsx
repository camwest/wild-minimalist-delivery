import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextInput from '../components/TextInput';
import InputList from '../components/InputList';
import MasterLayout from '../components/MasterLayout';

storiesOf('TextInput', module)
  .add('valid email address', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <TextInput placeholder="Email" type="email" value="camwest@gmail.com" required={true} />
    </MasterLayout>
  ))
  .add('invalid email address', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <TextInput placeholder="Email" type="email" value="camwest" />
    </MasterLayout>
  ))
  .add('focused TextInput', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <TextInput placeholder="Email" type="email" required={true} focus={true} />
    </MasterLayout>
  ))
  .add('InputList', () => (
    <MasterLayout style={{ width: 250, height: 250 }}>
      <InputList>
        <TextInput placeholder="Email" type="email" required={true} />
        <TextInput placeholder="Zipcode" required={true} />
      </InputList>
    </MasterLayout>
  ));