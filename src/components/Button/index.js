import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'

const StyledButton = styled.button`
  /* Default Button Styles */
  background: #9babb4;
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  padding: 8px 20px 8px 20px;
  border: none;
  &:focus {
    outline: none;
  }

  /* Primary Button Styles */
  ${props =>
    props.primary &&
    css`
      background: #3490dc;
      color: #fff;
    `} ${props =>
      props.secondary &&
      css`
        background: #f66d9b;
        color: #fff;
      `} ${props =>
      props.success &&
      css`
        background: #38c172;
        color: #fff;
      `} ${props =>
      props.info &&
      css`
        background: #6574cd;
        color: #fff;
      `} ${props =>
      props.danger &&
      css`
        background: #e3342f;
        color: #fff;
      `};
`

const Button = ({ children, primary, secondary, success, info, danger }) => (
  <StyledButton
    primary={primary}
    secondary={secondary}
    success={success}
    info={info}
    danger={danger}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool
}

export default Button
