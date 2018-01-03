import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

export default class Collapsible extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    color: 'grey'
  }

  state = {
    collapsed: false
  }

  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { color, title, children } = this.props
    const { collapsed } = this.state

    return (
      <div className={`border-2 border-${color}-light rounded`}>
        <div
          className={`flex flex-row items-center justify-between w-full border-b-2 border-${color}-light p-3 `}
        >
          <div className="text-2xl text-grey-darker">{title}</div>
          <div onClick={this.handleToggle} className="cursor-pointer">
            {!collapsed && (
              <svg width="16" height="16" viewBox="0 0 32 32" fill="#606f7b">
                <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z" />
                <path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z" />
              </svg>
            )}
            {collapsed && (
              <svg width="16" height="16" viewBox="0 0 32 32" fill="#606f7b">
                <path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z" />
                <path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z" />
              </svg>
            )}
          </div>
        </div>
        {!collapsed && <div className="p-3">{children}</div>}
      </div>
    )
  }
}
