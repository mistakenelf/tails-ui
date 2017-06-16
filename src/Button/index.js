import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 10px 10px;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  border-radius: 3px;
  background: palevioletred;
  border: none;
  width: 100%;
  box-shadow: 0 3px dimgrey;
`

export default ({ children, onClick, type }) =>
  <Button type={type} onClick={onClick}>{children}</Button>
