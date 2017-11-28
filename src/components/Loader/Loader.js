import PropTypes from 'prop-types'
import React from 'react'
import { spinAnimation } from '../../utils/animations'
import styled from 'styled-components'

const StyledLoader = styled.div`
  animation: ${spinAnimation} 1s linear infinite;
`

const Loader = ({ primary, secondary, success, info, danger }) => {
  let loaderColor
  if (primary) {
    loaderColor = 'border-blue'
  } else if (secondary) {
    loaderColor = 'border-pink-light'
  } else if (success) {
    loaderColor = 'border-green-light'
  } else if (info) {
    loaderColor = 'border-indigo-light'
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
