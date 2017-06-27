import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
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

const FieldContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
`

export default ({ placeholder, labelText, fullWidth, rounded }) =>
  <FieldContainer fullWidth={fullWidth}>
    {labelText && <label>{labelText}</label>}
    <TextArea
      placeholder={placeholder || null}
      rounded={rounded}
      labelText={labelText}
    />
  </FieldContainer>
