import PropTypes from 'prop-types'
import React from 'react'

const Button = ({
  children,
  color,
  loading,
  outline,
  fullWidth,
  rounded,
  ...props
}) => (
  <button
    className={
      outline
        ? `${fullWidth &&
            'w-full'} cursor-pointer bg-transparent hover:bg-${color} text-${color}-dark font-semibold hover:text-white py-2 px-4 border border-${color} hover:border-transparent ${
            rounded ? 'rounded-full' : 'rounded'
          } inline-flex items-center justify-center`
        : `${fullWidth &&
            'w-full'} cursor-pointer bg-${color} hover:bg-${color}-dark text-white font-sans font-bold py-2 px-4 shadow ${
            rounded ? 'rounded-full' : 'rounded'
          } inline-flex items-center justify-center`
    }
    {...props}
  >
    {loading ? 'loading...' : children}
  </button>
)

Button.defaultProps = {
  color: 'teal'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool
}

export default Button
