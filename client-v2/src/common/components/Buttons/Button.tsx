import React from 'react';
import styled, { css } from 'styled-components';

// Define button sizes
const sizes = {
  small: {
    minWidth: '100px',
    minHeight: '40px',
    fontSize: '14px'
  },
  medium: {
    minWidth: '200px',
    minHeight: '48px',
    fontSize: '16px'
  },
};

// Define button colors
const colors = {
  primary: {
    default: '#000080',
    hover: '#333399',
    active: '#000066',
    text: '#FFFFFF',
  },
  secondary: {
    default: '#E5E5F9',
    hover: '#D6D6F9',
    active: '#CCCCF9',
    text: '#000080',
  },
};

// Button size styles
const sizeStyles = css<{ size: keyof typeof sizes }>`
  ${({ size }) => css`
    min-width: ${sizes[size].minWidth};
    min-height: ${sizes[size].minHeight};
    font-size:  ${sizes[size].fontSize};
  `}
`;

// Button variant styles
const variantStyles = css<{ variant: keyof typeof colors }>`
  ${({ variant }) => css`
    background-color: ${colors[variant].default};
    color: ${colors[variant].text};

    &:hover {
      background-color: ${colors[variant].hover};
    }

    &:active {
      background-color: ${colors[variant].active};
    }
  `}
`;

// Styled button component
const StyledButton = styled.button<{ size: keyof typeof sizes; variant: keyof typeof colors, disabled:boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${sizeStyles}
  ${variantStyles}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

// Button component props
interface ButtonProps {
  size: keyof typeof sizes;
  variant: keyof typeof colors;
  children: React.ReactNode;
  style?: any; //React.CSSProperties; 
  disabled: boolean;
}

// Button component
const Button: React.FC<ButtonProps> = ({ size, variant, children, style, disabled, ...props }) => {
  return (
    <StyledButton size={size} variant={variant} style={style} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
