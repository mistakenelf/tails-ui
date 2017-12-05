import PropTypes from 'prop-types'
import React from 'react'

const TableRow = ({ children }) => (
  <tr className="border p-2 sm:mb-5 md:mb-1 lg:mb-1 xl:mb-1 sm:block md:table-row lg:table-row xl:table-row sm:border-b-2 md:border-b-2 lg:border-b-4 xl:border-b-4 sm:border-grey md:border-grey-light lg:border-grey-light xl:border-grey-light">
    {children}
  </tr>
)

TableRow.propTypes = {
  children: PropTypes.node
}

export default TableRow
