import React, { Children } from 'react'

import PropTypes from 'prop-types'

const Navbar = ({ color, brand, navRight, children }) => (
  <div className={`bg-${color} text-white h-24 flex flex-col`}>
    <div className="mt-4 pl-4 flex flex flex-row align-center w-full">
      <div className="text-3xl uppercase font-black">{brand}</div>
      <div className="ml-auto pr-4">{navRight}</div>
    </div>
    <div className="mt-4 pl-4 overflow-x-scroll whitespace-no-wrap">
      {Children.map(children, child => {
        return React.cloneElement(child, {
          className: `text-white p-1 text-sm no-underline uppercase hover:text-${color}-darker`
        })
      })}
    </div>
  </div>
)

Navbar.defaultProps = {
  color: 'blue'
}

Navbar.propTypes = {
  color: PropTypes.string,
  brand: PropTypes.string,
  navRight: PropTypes.node,
  children: PropTypes.node
}

export default Navbar
