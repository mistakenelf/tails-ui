import DefaultButton from './DefaultButton'
import PrimaryButton from './PrimaryButton'
import PropTypes from 'prop-types'
import React from 'react'
import SecondaryButton from './SecondaryButton'

const Button = ({
  children,
  primary,
  secondary,
  success,
  info,
  danger,
  loading
}) => {
  if (primary) {
    return <PrimaryButton>{loading ? 'loading...' : children}</PrimaryButton>
  }
  if (secondary) {
    return (
      <SecondaryButton>{loading ? 'loading...' : children}</SecondaryButton>
    )
  }
  return <DefaultButton>{loading ? 'loading...' : children}</DefaultButton>
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool,
  loading: PropTypes.bool
}

export default Button
