import PropTypes from 'prop-types'
import React from 'react'

const Tab = ({ onClick, tabIndex, title, isActive }) => (
  <li className="-mb-px mr-1">
    <a
      onClick={event => {
        event.preventDefault()
        onClick(tabIndex)
      }}
      className={`inline-block no-underline ${
        isActive ? 'border-blue' : 'border-white'
      } ${!isActive &&
        'hover:border-grey hover:bg-grey-lighter'} rounded py-1 px-3 ${isActive &&
        'bg-blue'} ${!isActive && 'text-blue'} text-white`}
      href="#"
    >
      {title}
    </a>
  </li>
)

Tab.propTypes = {
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  isActive: PropTypes.bool
}

export default Tab
