import styled from 'styled-components'

const TableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 5px;
  @media (max-width: 600px) {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #ddd;
  }
`

export default TableRow
