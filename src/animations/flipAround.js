import { keyframes } from 'styled-components'

const flipAround = keyframes`
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

export default flipAround
