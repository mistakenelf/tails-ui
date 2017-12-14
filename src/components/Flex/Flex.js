import PropTypes from 'prop-types'
import React from 'react'

const Flex = ({
  children,
  display,
  direction,
  wrapping,
  justify,
  align,
  padding,
  margin
}) => (
  <div
    className={`${display} flex-${direction} flex-${wrapping} justify-${justify} items-${align} p-${padding} m-${margin}`}
  >
    {children}
  </div>
)

Flex.defaultProps = {
  display: 'flex',
  direction: 'col',
  wrapping: 'wrap',
  justify: 'start',
  align: 'start',
  padding: '0',
  margin: '0'
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
  wrapping: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  align: PropTypes.oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  padding: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  margin: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8'])
}

export default Flex
