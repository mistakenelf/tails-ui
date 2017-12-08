import PropTypes from 'prop-types'
import React from 'react'

const Text = ({ children, font, color, size, weight, align, fontStyle }) => (
  <div className={`text-${color} font-${font} text-${size} font-${weight} text-${align} ${fontStyle}`}>
    {children}
  </div>
)

Text.defaultProps = {
  font: 'sans',
  color: 'black',
  size: 'base',
  weight: 'normal',
  align: 'left',
  fontStyle: 'normal-case'
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  font: PropTypes.oneOf(['sans', 'serif', 'mono']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl' ]),
  weight: PropTypes.oneOf(['hairline', 'thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontStyle: PropTypes.oneOf(['italic', 'roman', 'uppercase', 'lowercase', 'capitalize', 'normal-case', 'underline', 'line-through', 'no-underline'])
}

export default Text
