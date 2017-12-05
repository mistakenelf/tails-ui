import React, { Children } from 'react'

import PropTypes from 'prop-types'

const FullscreenMenu = ({ children }) => (
  <div className="h-full bg-black w-full fixed pin-t pin-l z-10 overflow-hidden">
    <div className="relative text-center">
      {Children.map(children, child => {
        return React.cloneElement(child, {
          className: 'text-white p-4 no-underline block text-4xl'
        })
      })}
    </div>
  </div>
)

FullscreenMenu.propTypes = {
  children: PropTypes.node
}

export default FullscreenMenu
