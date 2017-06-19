import React from 'react'
import styled from 'styled-components'

const TextField = styled.input`
  width: ${props => (props.fullWidth ? '100%' : null)};
  padding: 10px 10px;
  box-sizing: border-box;
  border: 1px solid silver;
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  font-size: 1em;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 1px solid grey;
  }

  &:invalid {
    border: 1px solid indianred;
  }
`

export default ({ type, placeholder, labelText, rounded, fullWidth }) =>
  <div>
    {labelText && <label>{labelText}</label>}
    <TextField
      type={type}
      rounded={rounded}
      fullWidth={fullWidth}
      placeholder={placeholder || null}
    />
  </div>
