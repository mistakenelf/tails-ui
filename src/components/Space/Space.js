import PropTypes from 'prop-types'
import React from 'react'

const Space = ({
  margin,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  children
}) => (
  <div
    className={`m-${margin} ml-${marginLeft} mr-${marginRight} mb-${marginBottom} mt-${marginTop} p-${padding} pl-${paddingLeft} pr-${paddingRight} pb-${paddingBottom} pt-${paddingTop}`}
  >
    {children}
  </div>
)

Space.propTypes = {
  margin: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginLeft: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginRight: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginBottom: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginTop: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  padding: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingLeft: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingRight: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingBottom: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingTop: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  children: PropTypes.node
}

export default Space
