import { keyframes } from 'styled-components'

const flipX = keyframes`
  0% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
`

export default flipX
