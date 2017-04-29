import * as React from 'react';
import styled from 'styled-components';
import atoms from './atoms';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  focus: boolean;
  children?: any;
}

const Focusable: React.SFC<ContainerProps> = (props: any) => {
  const { focus, children, ...rest } = props;

  return (
    <div {...rest}>{children}</div>
  );
};

const Wrapper = styled(Focusable) `
  box-sizing: border-box;
  background: ${props => props.focus ? atoms.colors.white : 'transparent'}
  padding: ${atoms.spacing.small} ${atoms.spacing.medium};
  cursor: text;
  display: flex;
  flex-direction: row;
`;

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  valid: boolean;
  children?: any;
}

class ValidInput extends React.Component<InputProps, {}> {
  private input: HTMLInputElement;

  focus(): void {
    this.input.focus();
  }

  render() {
    const { valid, children, ...rest } = this.props;

    return (
      <input ref={r => this.input = r} {...rest}>{children}</input>
    );
  }
}

const Input = styled(ValidInput) `
  background: transparent;
  border-width: 0;
  display: block;
  color: ${atoms.colors.grey3};
  font-size: ${atoms.typeScale.size5};
  line-height: ${atoms.lineHeight.copy};
  padding: 0;
  padding-right: ${props => props.valid ? atoms.spacing.small : 0};
  flex-grow: 1;
  margin: 0;
  /* fix issue in safari where input has min-width */
  width: 100%;

  &::placeholder {
    color: ${atoms.colors.purple1};
  }

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

  /**
   * Changes the background color of the input
   */
  focus?: boolean;
}

interface State {
  focus: boolean;
}

class TextInput extends React.Component<Props, State> {
  static defaultProps = {
    type: 'text',
    valid: false
  };

  private input: any;

  constructor(props: Props) {
    super(props);
    this.state = { focus: false };
  }

  getFocus(): boolean {
    if (this.props.hasOwnProperty('focus')) {
      return this.props.focus || false;
    } else {
      return this.state.focus;
    }
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

    let defaultValue = (valid) ? valid : TextInput.defaultProps.valid;

    return (
      <Wrapper focus={this.getFocus()} onClick={this.handleClick}>
        <Input
          innerRef={r => this.input = r}
          placeholder={placeholder}
          type={type}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          valid={defaultValue}
        />
        {defaultValue && '👌'}
      </Wrapper>
    );
  }
}

export default TextInput;