import PropTypes from 'prop-types'
import React from 'react'

const ProgressBar = ({ color, percent }) => (
  <div className="w-full">
    <div className="shadow w-full bg-grey-light rounded">
      <div
        className={`bg-${color} rounded text-xs leading-none py-1 text-center text-white`}
        style={{ width: percent }}
      >
        {percent}
      </div>
    </div>
  </div>
)

ProgressBar.defaultProps = {
  color: 'teal'
}

ProgressBar.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.string.isRequired
}

export default ProgressBar
