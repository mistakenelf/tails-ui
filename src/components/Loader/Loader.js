import PropTypes from 'prop-types'
import React from 'react'

const Loader = ({ color }) => (
  <div
    className={`loader border-6 border-${color} bg-grey-light rounded-full w-8 h-8 border-t-4 shadow`}
  />
)

Loader.defaultProps = {
  color: 'teal'
}

Loader.propTypes = {
  color: PropTypes.string
}

export default Loader
