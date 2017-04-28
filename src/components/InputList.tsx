import * as React from 'react';
import styled from 'styled-components';
import atoms from './atoms';

interface Props {
  children?: any;
}

const Container = styled.div`
  border: solid 1px ${atoms.colors.grey1};

  > * {
    border-bottom: solid 1px ${atoms.colors.grey1};
  }

  > *:last-child {
    border-bottom: none;
  }
`;

const InputList: React.SFC<Props> = (props: Props) => (
  <Container>{props.children}</Container>
);

export default InputList;