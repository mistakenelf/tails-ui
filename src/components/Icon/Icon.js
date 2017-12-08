import PropTypes from 'prop-types'
import React from 'react'

const Icon = ({ name }) => <i className={name} />

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon
