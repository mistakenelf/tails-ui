import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const DefaultButton = ({ children, outline, fullWidth }) => (
  <Button
    className={
      outline
        ? `${fullWidth && 'w-full'} bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border-2 border-grey hover:border-transparent rounded`
        : `${fullWidth && 'w-full'} bg-grey hover:bg-grey-dark text-white font-sans font-bold py-2 px-4 shadow rounded`
    }
  >
    {children}
  </Button>
)

DefaultButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default DefaultButton
