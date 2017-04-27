import * as React from 'react';
import styled from 'styled-components';

const atoms = {
  colors: {
    one: '#3F51B5'
  },

  fonts: {
    default: 'courier'
  }
};

interface FocusProps extends React.HTMLAttributes<HTMLDivElement> {
  focus: boolean;
  children?: any;
}

const Focusable: React.SFC<FocusProps> = (props: any) => (
  <div {...props}>{props.children}</div>
);

const Wrapper = styled(Focusable) `
  background: ${props => props.focus ? 'lightgrey' : 'transparent'};;
  box-sizing: border-box;
  color: ${atoms.colors.one};
  font-family: ${atoms.fonts.default};
  font-size: 14px;
  line-height: 36px;
  padding-left: 12.5px;
  padding-top: 8px;
  padding-bottom: 10px;
`;

const Input = styled.input`
  background: transparent;
  margin-left: 12.5px;
  font-size: 14px;
  line-height: 36px;
  border-width: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

interface Props {
  children?: any;
  placeholder?: string;
  type?: string;
}

interface State {
  focus: boolean;
}

class TextInput extends React.Component<Props, State> {
  static defaultProps = {
    type: 'text'
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
    const { placeholder, type } = this.props;

    return (
      <Wrapper focus={this.state.focus} onClick={this.handleClick}>
        {placeholder}
        <Input innerRef={r => this.input = r} type={type} onFocus={this.handleFocus} onBlur={this.handleBlur} />
      </Wrapper>
    );
  }
}

export default TextInput;