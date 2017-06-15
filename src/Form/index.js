import React from 'react'
import styled from 'styled-components'

export const Form = styled.fieldset`
  padding: 20px;
`

export default ({ children, label }) =>
  <Form>
    <legend>{label}</legend>
    {children}
  </Form>
