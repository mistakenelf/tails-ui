import PropTypes from 'prop-types'
import React from 'react'

const TableBody = ({ children }) => <tbody className="p-0">{children}</tbody>

TableBody.propTypes = {
  children: PropTypes.node
}

export default TableBody
