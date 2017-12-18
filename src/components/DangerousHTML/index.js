import PropTypes from 'prop-types'
import React from 'react'

const DangerousHTML = ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} />
)

DangerousHTML.propTypes = {
  children: PropTypes.string.isRequired
}

export default DangerousHTML
