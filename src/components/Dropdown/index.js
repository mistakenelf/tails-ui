import React from 'react'
import styled from 'styled-components'

const DropdownButton = styled.button`
  background: #3490dc;
  color: #fff;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const Dropdown = () => (
  <StyledDropdown>
    <DropdownButton>Dropdown</DropdownButton>
    <DropdownContent>
      <a href="#!">Link 1</a>
    </DropdownContent>
  </StyledDropdown>
)

export default Dropdown
