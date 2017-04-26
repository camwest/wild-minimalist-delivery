import * as React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
};

interface Props {
  children?: any;
  onClick?: any;
}

const Button = ({ children, onClick }: Props) => (
  <button style={buttonStyles} onClick={onClick}>
    {children}
  </button>
);

export default Button;
