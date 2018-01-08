import React from 'react'

const Tab = ({ onClick, tabIndex, title, isActive, color }) => (
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
        `bg-${color}`} ${!isActive && `text-${color}`} text-white`}
      href="#"
    >
      {title}
    </a>
  </li>
)

Tab.defaultProps = {
  color: 'teal'
}

export default Tab
