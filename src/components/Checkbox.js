import React from 'react'

const Checkbox = ({ checked, disabled, handleChange, label }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
    />
    {label && <label className="ml-2 text-sm">{label}</label>}
  </div>
)

export default Checkbox
