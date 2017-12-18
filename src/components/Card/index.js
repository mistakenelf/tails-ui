import PropTypes from 'prop-types'
import React from 'react'

const Card = ({ title, children, footer }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-4">{title}</div>
      {children}
    </div>
    <div className="px-6 py-4">{footer}</div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node
}

export default Card
