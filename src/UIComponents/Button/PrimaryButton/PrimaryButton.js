import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const PrimaryButton = ({ children, outline, fullWidth }) => (
  <Button
    className={
      outline
        ? `${fullWidth &&
            'w-full'} bg-transparent hover:bg-teal text-teal-dark font-semibold hover:text-white py-2 px-4 border-2 border-teal hover:border-transparent rounded inline-flex items-center`
        : `${fullWidth &&
            'w-full'} bg-teal hover:bg-teal-dark text-white font-sans font-bold py-2 px-4 shadow rounded inline-flex items-center`
    }
  >
    {children}
  </Button>
)

PrimaryButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default PrimaryButton
