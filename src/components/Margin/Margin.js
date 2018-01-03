import PropTypes from 'prop-types'
import React from 'react'

const Margin = ({
  margin,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  children
}) => (
  <div
    className={`m-${margin} ml-${marginLeft} mr-${marginRight} mb-${marginBottom} mt-${marginTop}`}
  >
    {children}
  </div>
)

Margin.propTypes = {
  margin: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginLeft: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginRight: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginBottom: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginTop: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  children: PropTypes.node
}

export default Margin
