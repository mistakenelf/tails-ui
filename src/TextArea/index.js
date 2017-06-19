import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: ${props => (props.fullwidth ? '100%' : 'null')};
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
export default ({ placeholder, labelText, fullWidth, rounded }) =>
  <div>
    {labelText && <label>{labelText}</label>}
    <TextArea
      placeholder={placeholder || null}
      fullWidth={fullWidth}
      rounded={rounded}
      labelText={labelText}
    />
  </div>
