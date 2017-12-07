import React, { Children } from 'react'

import PropTypes from 'prop-types'

const Navbar = ({ children }) => (
  <nav className="bg-white px-8 pt-2 shadow-md w-full">
    <div className="-mb-px flex justify-center">
      {Children.map(children, child => {
        return React.cloneElement(child, {
          className:
            'no-underline text-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8'
        })
      })}
    </div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.node
}

export default Navbar
