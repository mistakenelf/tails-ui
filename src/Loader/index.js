import styled, { keyframes } from 'styled-components'

import React from 'react'

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const Loader = styled.div`
  border: 8px solid white;
  border-radius: 50%;
  border-top: 8px solid royalblue;
  border-right: 8px solid mediumseagreen;
  border-bottom: 8px solid mediumpurple;
  border-left: 8px solid khaki;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`

export default () => <Loader />
