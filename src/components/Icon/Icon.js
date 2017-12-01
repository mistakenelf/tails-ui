import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.i`
  color: ${props => (props.color ? props.color : '#000000')};
`

const Icon = ({ name, color }) => (
  <StyledIcon color={color} className={`icono-${name}`} />
)

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

export default Icon
