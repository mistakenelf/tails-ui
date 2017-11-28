import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const DefaultButton = ({ children, outline }) => (
  <Button
    className={
      outline
        ? 'bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border-2 border-grey hover:border-transparent rounded'
        : 'bg-grey hover:bg-grey-dark text-white font-sans font-bold py-2 px-4 shadow rounded'
    }
  >
    {children}
  </Button>
)

DefaultButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool
}

export default DefaultButton
