import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 10px 10px;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${props => props.fontColor || 'black'};
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  background: ${props =>
    props.hollow ? 'transparent' : props.backgroundColor || 'palevioletred'};
  border: ${props =>
    props.hollow ? `2px solid ${props.borderColor}` : 'none'};
  box-shadow: ${props => (props.shadowed ? '0 3px dimgrey' : null)};
  width: ${props => (props.fullWidth ? '100%' : null)};

  &:active {
    box-shadow: 0;
    transform: translateY(2px);
    filter: brightness(85%);
  }
`

export default ({
  children,
  onClick,
  type,
  fullWidth,
  backgroundColor,
  fontColor,
  shadowed,
  rounded,
  hollow,
  borderColor,
}) =>
  <Button
    type={type}
    fullWidth={fullWidth}
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    onClick={onClick}
    shadowed={shadowed}
    rounded={rounded}
    hollow={hollow}
    borderColor={borderColor}
  >
    {children}
  </Button>
