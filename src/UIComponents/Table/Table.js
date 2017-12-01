import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`
const Table = ({ children }) => (
  <StyledTable className="sm:border-0 md:border-0 lg:border-4 xl:border-4 border-grey-light w-full m-0 p-0">
    {children}
  </StyledTable>
)

Table.propTypes = {
  children: PropTypes.node
}

export default Table
