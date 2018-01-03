import PropTypes from 'prop-types'
import React from 'react'

const Padding = ({
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  children
}) => (
  <div
    className={`p-${padding} pl-${paddingLeft} pr-${paddingRight} pb-${paddingBottom} pt-${paddingTop}`}
  >
    {children}
  </div>
)

Padding.propTypes = {
  padding: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingLeft: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingRight: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingBottom: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingTop: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  children: PropTypes.node
}

export default Padding
