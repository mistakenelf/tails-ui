import styled, { keyframes } from 'styled-components'

import React from 'react'

const flip = keyframes`
  0% {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
`

const Alert = styled.div`
  background: ${props => props.backgroundColor || 'red'};
  color: ${props => props.fontColor || 'white'};
  font-weight: ${props => (props.boldText ? 'bold' : 'normal')};
  padding: 20px;
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  animation: ${flip} 1.2s;
`

export default ({ children, backgroundColor, fontColor, rounded, boldText }) =>
  <Alert
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    rounded={rounded}
  >
    {children}
  </Alert>
