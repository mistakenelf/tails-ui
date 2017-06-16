import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  border: 1px solid silver;
  font-size: 1em;
  border-radius: 3px;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 1px solid dimgray;
  }
`
export default ({ placeholder, labelText }) =>
  <div>
    {labelText && <label>{labelText}</label>}
    <TextArea placeholder={placeholder || null} labelText={labelText} />
  </div>
