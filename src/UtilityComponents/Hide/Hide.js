import PropTypes from 'prop-types'
import React from 'react'

const Hide = ({ children, small, medium, large, xlarge }) => (
  <div
    className={`${small && 'sm:hidden'} ${medium && 'md:hidden'} ${large &&
      'lg:hidden'} ${xlarge && 'xl:hidden'}`}
  >
    {children}
  </div>
)

Hide.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool
}

export default Hide
