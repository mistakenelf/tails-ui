import PropTypes from 'prop-types'
import React from 'react'

const Flex = ({
  display,
  direction,
  wrapping,
  justify,
  align,
  children,
  smHeight,
  mdHeight,
  lgHeight,
  xlHeight,
  smWidth,
  mdWidth,
  lgWidth,
  xlWidth
}) => (
  <div
    className={`h-${smHeight} sm:h-${smHeight} md:h-${mdHeight} lg:h-${lgHeight} xl:h-${xlHeight} w-${smWidth} sm:w-${smWidth} md:w-${mdWidth} lg:w-${lgWidth} xl:w-${xlWidth} ${display} flex-${direction} flex-${wrapping} justify-${justify} items-${align}`}
  >
    {children}
  </div>
)

Flex.defaultProps = {
  display: 'flex',
  direction: 'col',
  wrapping: 'wrap',
  justify: 'start',
  align: 'start'
}

Flex.propTypes = {
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
  wrapping: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  align: PropTypes.oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  children: PropTypes.node.isRequired,
  smHeight: PropTypes.string,
  mdHeight: PropTypes.string,
  lgHeight: PropTypes.string,
  xlHeight: PropTypes.string,
  smWidth: PropTypes.string,
  mdWidth: PropTypes.string,
  lgWidth: PropTypes.string,
  xlWidth: PropTypes.string
}

export default Flex
