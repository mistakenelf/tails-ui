import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: blue;
  color: white;
  border: none;
`

export const Button: React.SFC<any> = () => <StyledButton>Buttton</StyledButton>
