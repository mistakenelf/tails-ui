import DangerAlert from './DangerAlert'
import DefaultAlert from './DefaultAlert'
import InfoAlert from './InfoAlert'
import PrimaryAlert from './PrimaryAlert'
import PropTypes from 'prop-types'
import React from 'react'
import SecondaryAlert from './SecondaryAlert'
import SuccessAlert from './SuccessAlert'

const Alert = ({
  primary,
  secondary,
  success,
  info,
  danger,
  heading,
  content
}) => {
  if (primary) {
    return <PrimaryAlert heading={heading} content={content} />
  }
  if (secondary) {
    return <SecondaryAlert heading={heading} content={content} />
  }
  if (success) {
    return <SuccessAlert heading={heading} content={content} />
  }
  if (info) {
    return <InfoAlert heading={heading} content={content} />
  }
  if (danger) {
    return <DangerAlert heading={heading} content={content} />
  }
  return <DefaultAlert heading={heading} content={content} />
}

Alert.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool,
  heading: PropTypes.string,
  content: PropTypes.string
}

export default Alert
