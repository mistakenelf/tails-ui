import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const InfoButton = ({ children, outline }) => (
  <Button
    className={
      outline
        ? 'bg-transparent hover:bg-indigo text-indigo-dark font-semibold hover:text-white py-2 px-4 border-2 border-indigo hover:border-transparent rounded'
        : 'bg-indigo hover:bg-indigo-dark text-white font-sans font-bold py-2 px-4 shadow rounded'
    }
  >
    {children}
  </Button>
)

InfoButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool
}

export default InfoButton
