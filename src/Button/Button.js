import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  &:focus {
    outline: none;
  }
`

const Button = ({ children, color, loading, outline, fullWidth, ...props }) => (
  <StyledButton
    className={
      outline
        ? `${fullWidth &&
            'w-full'} bg-transparent hover:bg-${color} text-${color}-dark font-semibold hover:text-white py-2 px-4 border-2 border-${color} hover:border-transparent rounded inline-flex items-center`
        : `${fullWidth &&
            'w-full'} bg-${color} hover:bg-${color}-dark text-white font-sans font-bold py-2 px-4 shadow rounded inline-flex items-center`
    }
    {...props}
  >
    {loading ? 'loading...' : children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default Button
