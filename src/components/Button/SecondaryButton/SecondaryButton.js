import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const SecondaryButton = ({ children, outline }) => (
  <Button
    className={
      outline
        ? 'bg-transparent hover:bg-pink text-pink-dark font-semibold hover:text-white py-2 px-4 border-2 border-pink hover:border-transparent rounded'
        : 'bg-pink hover:bg-pink-dark text-white font-sans font-bold py-2 px-4 shadow rounded'
    }
  >
    {children}
  </Button>
)

SecondaryButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool
}

export default SecondaryButton
