import PropTypes from 'prop-types'
import React from 'react'

const PrimaryButton = ({ children }) => (
  <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
    {children}
  </button>
)

PrimaryButton.propTypes = {
  children: PropTypes.node
}

export default PrimaryButton
