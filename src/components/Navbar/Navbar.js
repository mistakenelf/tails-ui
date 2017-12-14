import React, { Children } from 'react'

import PropTypes from 'prop-types'

const Navbar = ({ children, brand, color, navRight }) => (
  <div className={`bg-${color} text-white h-24 flex flex-col`}>
    <div className="flex items-center justify-between">
      <div className="mt-4 ml-4 flex flex flex-col w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="text-3xl">{brand}</div>
        <div className="mt-4 overflow-x-scroll">
          {Children.map(children, child => {
            return React.cloneElement(child, {
              className: 'text-white p-1 text-lg'
            })
          })}
        </div>
      </div>
      <div className="mr-4">{navRight}</div>
    </div>
  </div>
)

Navbar.defaultProps = {
  color: 'blue'
}

Navbar.propTypes = {
  children: PropTypes.node,
  brand: PropTypes.string,
  color: PropTypes.string,
  navRight: PropTypes.node
}

export default Navbar
