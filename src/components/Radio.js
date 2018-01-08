import React from 'react'

const Radio = ({ checked, disabled, handleChange, label, ...props }) => (
  <div className="flex items-center">
    <input
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      {...props}
    />
    {label && <label className="ml-2 text-sm">{label}</label>}
  </div>
)

export default Radio
