import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  &:focus {
    outline: none;
  }
`

const Select = ({
  children,
  label,
  value,
  name,
  placeholder,
  color,
  ...props
}) => (
  <div className="relative">
    {label && (
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        {label}
      </label>
    )}
    <StyledSelect
      className={`bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-${color} rounded w-full py-2 px-4 mr-4 text-grey-darker`}
      value={value}
      name={name}
      placeholder={placeholder}
      {...props}
    >
      {children}
    </StyledSelect>
    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
)

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string
}

export default Select
