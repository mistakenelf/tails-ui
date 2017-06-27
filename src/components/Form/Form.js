import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`padding: 0px;`

export default ({ children, label, bordered, onSubmit }) =>
  <Form onSubmit={onSubmit}>
    {bordered
      ? <fieldset>
          <legend>
            {label}
          </legend>
          {children}
        </fieldset>
      : <div>
          {children}
        </div>}
  </Form>
