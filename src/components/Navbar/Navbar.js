import React, { Children, PureComponent } from 'react'

import PropTypes from 'prop-types'

export default class Navbar extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    brand: PropTypes.string.isRequired,
    color: PropTypes.string
  }

  static defaultProps = {
    color: 'teal'
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
    const { children, brand, color } = this.props
    return (
      <div>
        <nav
          className={`flex w-full items-center justify-between flex-wrap bg-${color} p-3 shadow`}
        >
          <div className="flex items-center flex-no-shrink text-white mr-8">
            <span className="font-semibold text-2xl tracking-tight">
              {brand}
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={this.toggleOpen}
              className={`flex items-center px-3 py-2 border-2 rounded text-${color}-lighter border-${color}-lighter hover:text-white hover:border-white`}
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow hidden sm:hidden md:hidden lg:flex xl:flex">
              {Children.map(children, child => {
                return React.cloneElement(child, {
                  className:
                    'no-underline text-white uppercase tracking-wide font-bold text-sm py-3 mr-8'
                })
              })}
            </div>
          </div>
        </nav>
        <div
          className={`${open ? 'flex' : 'hidden'} flex-col bg-${color} fixed w-full pl-4`}
        >
          {Children.map(children, child => {
            return React.cloneElement(child, {
              className:
                'no-underline text-white tracking-wide font-bold text-sm py-3 mr-8'
            })
          })}
        </div>
      </div>
    )
  }
}
