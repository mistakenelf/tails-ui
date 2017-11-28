import DangerButton from './DangerButton'
import DefaultButton from './DefaultButton'
import InfoButton from './InfoButton'
import PrimaryButton from './PrimaryButton'
import PropTypes from 'prop-types'
import React from 'react'
import SecondaryButton from './SecondaryButton'
import SuccessButton from './SuccessButton'

const Button = ({
  children,
  primary,
  secondary,
  success,
  info,
  danger,
  loading,
  outline
}) => {
  if (primary) {
    return (
      <PrimaryButton outline={outline}>
        {loading ? 'loading...' : children}
      </PrimaryButton>
    )
  }
  if (secondary) {
    return (
      <SecondaryButton outline={outline}>
        {loading ? 'loading...' : children}
      </SecondaryButton>
    )
  }
  if (success) {
    return (
      <SuccessButton outline={outline}>
        {loading ? 'loading...' : children}
      </SuccessButton>
    )
  }
  if (info) {
    return (
      <InfoButton outline={outline}>
        {loading ? 'loading...' : children}
      </InfoButton>
    )
  }
  if (danger) {
    return (
      <DangerButton outline={outline}>
        {loading ? 'loading...' : children}
      </DangerButton>
    )
  }
  return (
    <DefaultButton outline={outline}>
      {loading ? 'loading...' : children}
    </DefaultButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool,
  loading: PropTypes.bool,
  outline: PropTypes.bool
}

export default Button
