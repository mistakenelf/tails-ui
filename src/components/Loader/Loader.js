import React from 'react'
import flipAround from '../../animations/flipAround'
import styled from 'styled-components'

const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: #333;
  animation: ${flipAround} 1.2s infinite ease-in-out;
`

export default () => <Loader />
