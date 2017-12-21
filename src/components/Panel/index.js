import PropTypes from 'prop-types'
import React from 'react'

const Panel = ({ color, title, extra, children }) => (
  <div className={`border-2 border-${color}-light rounded`}>
    <div
      className={`flex flex-row items-center justify-between w-full border-b-2 border-${color}-light p-4 `}
    >
      <div className="text-2xl text-grey-darker">{title}</div>
      <div>{extra}</div>
    </div>
    <div className="p-4">{children}</div>
  </div>
)

Panel.defaultProps = {
  color: 'grey'
}

Panel.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  extra: PropTypes.node,
  children: PropTypes.node.isRequired
}

export default Panel
