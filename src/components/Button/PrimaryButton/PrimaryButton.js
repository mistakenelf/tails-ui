import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const PrimaryButton = ({ children, outline }) => (
  <Button
    className={
      outline
        ? 'bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border-2 border-blue hover:border-transparent rounded'
        : 'bg-blue hover:bg-blue-dark text-white font-sans font-bold py-2 px-4 shadow rounded'
    }
  >
    {children}
  </Button>
)

PrimaryButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool
}

export default PrimaryButton
