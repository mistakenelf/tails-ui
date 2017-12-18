import PropTypes from 'prop-types'
import React from 'react'

const TextArea = ({
  label,
  value,
  type,
  name,
  placeholder,
  color,
  rows,
  hasError,
  ...props
}) => (
  <div>
    {label && (
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        {label}
      </label>
    )}
    <textarea
      className={`bg-grey-lighter appearance-none border-2 ${
        hasError ? 'border-red' : 'border-grey-lighter'
      } ${
        hasError ? 'hover:border-red' : `hover:border-${color}`
      }  rounded w-full py-2 px-4 text-grey-darker`}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  </div>
)

TextArea.defaultProps = {
  rows: 4,
  color: 'teal'
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  rows: PropTypes.number,
  hasError: PropTypes.bool
}

export default TextArea
