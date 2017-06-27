import styled from 'styled-components'

const Table = styled.table`
  border: 1px solid #ccc;
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;

  @media (max-width: 600px) {
    border: none;
  }
`
export default Table
