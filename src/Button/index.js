import React from 'react'
import { invert } from 'polished'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 10px 10px;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${props => props.fontColor || 'white'};
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  background: ${props => props.backgroundColor || 'palevioletred'};
  border: none;
  box-shadow: ${props => (props.hasShadow ? '0 3px dimgrey' : null)};
  width: ${props => (props.fullWidth ? '100%' : null)};

  &:active {
    background: ${props =>
      props.backgroundColor
        ? invert(props.backgroundColor)
        : invert('palevioletred')};
  }
`

export default ({
  children,
  onClick,
  type,
  fullWidth,
  backgroundColor,
  fontColor,
  hasShadow,
  rounded,
}) =>
  <Button
    type={type}
    fullWidth={fullWidth}
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    onClick={onClick}
    hasShadow={hasShadow}
    rounded={rounded}
  >
    {children}
  </Button>
