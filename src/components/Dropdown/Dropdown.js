import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

export default class Dropdown extends PureComponent {
  static propTypes = {
    dropdownLinks: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.node,
        hasSeparator: PropTypes.bool
      })
    )
  }

  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  close = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { open } = this.state
    const { dropdownLinks } = this.props
    return (
      <div
        className="relative inline-block cursor-pointer"
        onClick={this.toggleOpen}
        onBlur={this.close}
      >
        <button className="bg-blue p-3 rounded text-white shadow-inner flex items-center justify-between">
          <span className="pr-2">Show options</span>

          <svg
            className="h-4"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 129 129"
            enableBackground="new 0 0 129 129"
          >
            <g>
              <path
                fill="white"
                d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
              />
            </g>
          </svg>
        </button>
        {open && (
          <div className={`absolute bg-white rounded z-10 p-4 min-w-full`}>
            <ul className="list-reset">
              {dropdownLinks.map(link => (
                <span key={link.key}>
                  <li className="mb-4">
                    {React.cloneElement(link.value, {
                      className:
                        'font-bold no-underline uppercase text-md text-black'
                    })}
                  </li>
                  {link.hasSeparator && (
                    <li>
                      <hr className="border-b" />
                    </li>
                  )}
                </span>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
