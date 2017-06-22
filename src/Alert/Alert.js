import styled, { keyframes } from 'styled-components'

import React from 'react'

const flip = keyframes`
  0% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
`

const Alert = styled.div`
  background: ${props => props.backgroundColor || 'red'};
  color: ${props => props.fontColor || 'white'};
  font-weight: ${props => (props.boldText ? 'bold' : 'normal')};
  padding: 20px;
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  animation: ${flip} 0.5s;
`

export default ({ children, backgroundColor, fontColor, rounded, boldText }) =>
  <Alert
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    rounded={rounded}
  >
    {children}
  </Alert>
