import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const DangerButton = ({ children, outline, fullWidth }) => (
  <Button
    className={
      outline
        ? `${fullWidth && 'w-full'}bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border-2 border-red hover:border-transparent rounded`
        : `${fullWidth && 'w-full'}bg-red hover:bg-red-dark text-white font-sans font-bold py-2 px-4 shadow rounded`
    }
  >
    {children}
  </Button>
)

DangerButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default DangerButton
