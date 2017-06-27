import { keyframes } from 'styled-components'

// Slide in from the right
const slideFromRight = keyframes`
  from {
	  margin-left: 100%;
    width: 100%;
	}
	to {
	  margin-left: 0%;
    width: 100%;
	}
`

export default slideFromRight
