import styled, { keyframes } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
  animation: ${spinAnimation} 1s linear infinite;
`

const Loader = ({ color }) => (
  <StyledLoader
    className={`border-6 border-${color} bg-grey-light rounded-full w-8 h-8 border-t-4 shadow`}
  />
)

Loader.propTypes = {
  color: PropTypes.string
}

Loader.defaultProps = {
  color: 'teal'
}

export default Loader
