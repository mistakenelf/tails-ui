import styled, { keyframes } from 'styled-components'

import React from 'react'

const spin = keyframes`
	 0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    background: palevioletred;
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    background: royalblue;
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    background: papayawhip;
  }
`

const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: #333;
  animation: ${spin} 1.2s infinite ease-in-out;
`

export default () => <Loader />
