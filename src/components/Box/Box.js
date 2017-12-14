import PropTypes from 'prop-types'
import React from 'react'

const Box = ({ children, sm, md, lg, xl, padding, margin }) => (
  <div
    className={`w-full sm:w-${sm} md:w-${md} lg:w-${lg} xl:w-${xl} p-${padding} m-${margin}`}
  >
    {children}
  </div>
)

Box.defaultProps = {
  sm: 'full',
  padding: '0',
  margin: '0'
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  padding: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  margin: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8'])
}

export default Box
