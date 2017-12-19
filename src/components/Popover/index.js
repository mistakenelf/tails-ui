import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Popover extends PureComponent {
  static propTypes = {
    trigger: PropTypes.node,
    children: PropTypes.node,
    position: PropTypes.string
  }

  static defaultProps = {
    trigger: 'Click Me',
    position: 'left'
  }

  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    const { trigger, children, position } = this.props
    return (
      <div
        className="relative inline-block cursor-pointer"
        onClick={this.toggleOpen}
      >
        {trigger}
        {open && (
          <div
            className={`absolute bg-grey-lightest rounded z-10 p-4 ${
              position === 'left' ? 'pin-l top-pin' : 'pin-r top-pin'
            }`}
          >
            {children}
          </div>
        )}
      </div>
    )
  }
}
