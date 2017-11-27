import PropTypes from 'prop-types'
import React from 'react'

const DefaultButton = ({ children }) => (
  <button className="bg-grey hover:bg-grey-dark text-white font-bold py-2 px-4 rounded">
    {children}
  </button>
)

DefaultButton.propTypes = {
  children: PropTypes.node
}

export default DefaultButton
