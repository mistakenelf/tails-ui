import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  &:focus {
    outline: none;
  }
`

const TextArea = ({ label, value, type, name, placeholder, color, rows }) => (
  <div>
    {label && (
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        {label}
      </label>
    )}
    <StyledTextArea
      className={`bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-${color}  rounded w-full py-2 px-4 text-grey-darker`}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      rows={rows}
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
  rows: PropTypes.number
}

export default TextArea
