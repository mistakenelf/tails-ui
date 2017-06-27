import React from 'react'
import flipX from '../../animations/flipX'
import styled from 'styled-components'

const Alert = styled.div`
  background: ${props => props.backgroundColor || 'red'};
  color: ${props => props.fontColor || 'white'};
  font-weight: ${props => (props.boldText ? 'bold' : 'normal')};
  padding: 20px;
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  box-shadow: ${props =>
    props.shadowed
      ? 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
      : 'none'};
  animation: ${flipX} 0.5s;
`

export default ({
  children,
  backgroundColor,
  fontColor,
  rounded,
  boldText,
  shadowed,
}) =>
  <Alert
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    rounded={rounded}
    boldText={boldText}
    shadowed={shadowed}
  >
    {children}
  </Alert>
