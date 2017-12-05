import PropTypes from 'prop-types'
import React from 'react'

const DangerousHTML = ({ children }) => (
  <div className="font-sans" dangerouslySetInnerHTML={{ __html: children }} />
)

DangerousHTML.propTypes = {
  children: PropTypes.string
}

export default DangerousHTML
