import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.25em;
  font-family: courier;
  padding: 0.5em;
  margin: 0.5em;
`;

export interface Props {
  children?: any;
  placeholder?: string;
  type?: string;
}

const TextInput: React.SFC<Props> = ({ children, placeholder, type }: Props) => (
  <Wrapper>
    {placeholder}
    <input type={type} />
  </Wrapper>
);

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;