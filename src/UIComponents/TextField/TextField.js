import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }
`

const TextField = ({
  label,
  value,
  type,
  name,
  placeholder,
  primary,
  secondary,
  success,
  info,
  danger
}) => {
  let borderColor
  if (primary) {
    borderColor = 'hover:border-teal'
  } else if (secondary) {
    borderColor = 'hover:border-pink-light'
  } else if (success) {
    borderColor = 'hover:border-green-light'
  } else if (info) {
    borderColor = 'hover:border-blue-light'
  } else if (danger) {
    borderColor = 'hover:border-red-lighter'
  } else {
    borderColor = 'hover:border-grey'
  }

  return (
    <div>
      {label && (
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          {label}
        </label>
      )}
      <StyledInput
        className={`bg-grey-lighter appearance-none border-2 border-grey-lighter ${
          borderColor
        } rounded w-full py-2 px-4 text-grey-darker`}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool
}

export default TextField
