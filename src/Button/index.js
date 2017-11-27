import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  background: olive;
  font-weight: bolder;
  padding: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

const Button = () => (
  <ButtonContainer>
    Button
  </ButtonContainer>
)

export default Button