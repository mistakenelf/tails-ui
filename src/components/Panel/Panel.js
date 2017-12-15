import PropTypes from 'prop-types'
import React from 'react'

const Panel = ({ color, title, children }) => (
  <div className={`border-2 border-${color}-light rounded`}>
    <div className={`border-b-2 border-${color}-light p-2 text-2xl`}>
      {title}
    </div>
    <div className="p-2">{children}</div>
  </div>
)

Panel.defaultProps = {
  color: 'grey'
}

Panel.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Panel
