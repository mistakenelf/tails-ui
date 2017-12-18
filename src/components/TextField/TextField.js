import PropTypes from 'prop-types'
import React from 'react'

const TextField = ({
  label,
  value,
  type,
  name,
  placeholder,
  color,
  hasError,
  ...props
}) => (
  <div>
    {label && (
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        {label}
      </label>
    )}
    <input
      className={`bg-grey-lighter appearance-none border-2 ${
        hasError ? 'border-red' : 'border-grey-lighter'
      } ${
        hasError ? 'red' : `hover:border-${color}`
      } rounded w-full py-2 px-4 text-grey-darker`}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  </div>
)

TextField.defaultProps = {
  color: 'teal'
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  hasError: PropTypes.bool
}

export default TextField
