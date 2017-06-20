import styled from 'styled-components'

const TableData = styled.td`
  padding: 10px;
  text-align: center;

  @media(max-width: 600px) {
    display: block;
    text-align: right;
    font-size: 13px;
    border-bottom: 1px dotted #ccc;

    &:last-child {
      border-bottom: 0;
    }

    &:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`

export default TableData
