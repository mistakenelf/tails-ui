import React from 'react'
import { spinAnimation } from '../../utils/animations'
import styled from 'styled-components'

const StyledLoader = styled.div`
  animation: ${spinAnimation} 1s linear infinite;
`

const Loader = () => (
  <StyledLoader className="border-6 bg-grey-light border-blue rounded-full w-8 h-8 border-t-4 shadow" />
)

export default Loader
