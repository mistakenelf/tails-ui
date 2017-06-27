import React from 'react'
import styled from 'styled-components'

const FieldContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
`

const TextField = styled.input`
  padding: 10px 10px;
  box-sizing: border-box;
  border: 1px solid silver;
  font-size: 1em;
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 1px solid dimgray;
  }

  &:invalid {
    border: 1px solid indianred;
  }
`

export default ({ type, placeholder, labelText, rounded, fullWidth }) =>
  <FieldContainer fullWidth={fullWidth}>
    {labelText &&
      <label>
        {labelText}
      </label>}
    <TextField
      type={type}
      rounded={rounded}
      placeholder={placeholder || null}
    />
  </FieldContainer>
