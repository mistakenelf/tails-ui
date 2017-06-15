import React from 'react'
import styled from 'styled-components'

const TextField = styled.input`
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  border: 1px solid silver;
  border-radius: 3px;
  font-size: 1em;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 1px solid royalblue;
  }

  &:invalid {
    border: 1px solid indianred;
  }
`

export default ({ type, placeholder, labelText }) =>
  <div>
    {labelText && <label>{labelText}</label>}
    <TextField type={type} placeholder={placeholder || null} />
  </div>
