import PropTypes from 'prop-types'
import React from 'react'

const TableHeading = ({ children }) => (
  <th className="p-2 text-center uppercase text-lg tracking-wide">
    {children}
  </th>
)

TableHeading.propTypes = {
  children: PropTypes.node
}

export default TableHeading
