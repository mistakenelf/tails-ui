import { keyframes } from 'styled-components'

const flipIn = keyframes`
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
`

export default flipIn
