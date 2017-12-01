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

const Loader = ({ primary, secondary, success, info, danger }) => {
  let loaderColor
  if (primary) {
    loaderColor = 'border-teal'
  } else if (secondary) {
    loaderColor = 'border-pink-light'
  } else if (success) {
    loaderColor = 'border-green-light'
  } else if (info) {
    loaderColor = 'border-blue-light'
  } else if (danger) {
    loaderColor = 'border-red-lighter'
  } else {
    loaderColor = 'border-grey'
  }
  return (
    <StyledLoader
      className={`border-6 ${
        loaderColor
      } bg-grey-light rounded-full w-8 h-8 border-t-4 shadow`}
    />
  )
}

Loader.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool
}

export default Loader
