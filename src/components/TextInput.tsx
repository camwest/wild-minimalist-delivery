import * as React from 'react';
import styled from 'styled-components';
import atoms from './atoms';

interface FocusProps extends React.HTMLAttributes<HTMLDivElement> {
  focus: boolean;
  children?: any;
}

const Focusable: React.SFC<FocusProps> = (props: any) => (
  <div {...props}>{props.children}</div>
);

const Wrapper = styled(Focusable) `
  box-sizing: border-box;
  color: ${atoms.colors.grey1};
  font-family: ${atoms.fonts.default};
  font-size: ${atoms.typeScale.size5};
  line-height: ${atoms.lineHeight.copy};
  padding: ${atoms.spacing.small} ${atoms.spacing.medium};
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  background: transparent;
  border-width: 0;
  display: block;
  color: ${atoms.colors.purple1};
  font-size: ${atoms.typeScale.size5};
  line-height: ${atoms.lineHeight.copy};
  padding: 0 ${atoms.spacing.small};
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`;

interface Props {
  children?: any;
  placeholder?: string;
  type?: string;

  /**
   * Shows 👌 to the right of the input
   */
  valid?: boolean;
}

interface State {
  focus: boolean;
}

class TextInput extends React.Component<Props, State> {
  static defaultProps = {
    type: 'text',
    valid: false
  };

  private input: HTMLInputElement;

  constructor(props: Props) {
    super(props);
    this.state = { focus: false };
  }

  handleFocus = () => {
    this.setState(() => {
      return { focus: true };
    });
  }

  handleBlur = () => {
    this.setState(() => {
      return { focus: false };
    });
  }

  handleClick = () => {
    this.input.focus();
  }

  render() {
    const { placeholder, type, valid } = this.props;

    return (
      <Wrapper focus={this.state.focus} onClick={this.handleClick}>
        <span style={{ width: 60 }}>{placeholder}</span>
        <Input innerRef={r => this.input = r} type={type} onFocus={this.handleFocus} onBlur={this.handleBlur} />
        {valid && '👌'}
      </Wrapper>
    );
  }
}

export default TextInput;