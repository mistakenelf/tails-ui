import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  &:focus {
    outline: none;
  }
`

const InfoButton = ({ children, outline, fullWidth }) => (
  <Button
    className={
      outline
        ? `${fullWidth &&
            'w-full'} bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border-2 border-blue hover:border-transparent rounded inline-flex items-center`
        : `${fullWidth &&
            'w-full'} bg-blue hover:bg-blue-dark text-white font-sans font-bold py-2 px-4 shadow rounded inline-flex items-center`
    }
  >
    {children}
  </Button>
)

InfoButton.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default InfoButton
