import PropTypes from 'prop-types'
import React from 'react'

const SecondaryButton = ({ children }) => (
  <button className="bg-pink hover:bg-pink-dark text-white font-bold py-2 px-4 rounded">
    {children}
  </button>
)

SecondaryButton.propTypes = {
  children: PropTypes.node
}

export default SecondaryButton
