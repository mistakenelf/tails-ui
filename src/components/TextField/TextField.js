import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }
`

const TextField = ({ label, value, type, name, placeholder }) => (
  <div>
    {label && (
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        {label}
      </label>
    )}
    <StyledInput
      className="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-grey rounded w-full py-2 px-4 text-grey-darker"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  </div>
)

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextField
