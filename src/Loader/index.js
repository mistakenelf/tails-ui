import styled, { keyframes } from 'styled-components'

import React from 'react'

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`

const LoaderContainer = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`

const Loader = () => (
  <LoaderContainer />
)

export default Loader