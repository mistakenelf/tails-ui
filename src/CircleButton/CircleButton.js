import React from 'react'
import styled from 'styled-components'

const CircleButton = styled.button`
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 50%;
  outline: none;
  color: ${props => props.fontColor || 'white'};
  background: ${props =>
    props.hollow ? 'transparent' : props.backgroundColor || 'palevioletred'};
  border: ${props =>
    props.hollow ? `2px solid ${props.borderColor}` : 'none'};
  box-shadow: ${props =>
    props.shadowed
      ? 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
      : null};
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
  hollow,
  borderColor,
}) =>
  <CircleButton
    type={type}
    fullWidth={fullWidth}
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    onClick={onClick}
    shadowed={shadowed}
    hollow={hollow}
    borderColor={borderColor}
  >
    {children}
  </CircleButton>
