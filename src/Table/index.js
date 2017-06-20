import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  border: 1px solid #ccc;
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;

   @media(max-width: 600px) {
    border: none;
  }
`

const TableHead = styled.thead`
  @media(max-width: 600px) {
    display: none;
  }
`

const TableBody = styled.tbody`
  padding: 0;
`

const TableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 5px;

   @media(max-width: 600px) {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #ddd;
  }
`

const TableHeading = styled.th`
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
`

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

export default () =>
  <Table>
    <TableHead>
      <TableRow>
        <TableHeading>Payment</TableHeading>
        <TableHeading>Amount</TableHeading>
        <TableHeading>Total</TableHeading>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableData data-label="payment">Payment</TableData>
        <TableData data-label="amount">Amount</TableData>
        <TableData data-label="total">Total</TableData>
      </TableRow>
      <TableRow>
        <TableData data-label="payment">Payment</TableData>
        <TableData data-label="amount">Amount</TableData>
        <TableData data-label="total">Total</TableData>
      </TableRow>
      <TableRow>
        <TableData data-label="payment">Payment</TableData>
        <TableData data-label="amount">Amount</TableData>
        <TableData data-label="total">Total</TableData>
      </TableRow>
      <TableRow>
        <TableData data-label="payment">Payment</TableData>
        <TableData data-label="amount">Amount</TableData>
        <TableData data-label="total">Total</TableData>
      </TableRow>
    </TableBody>
  </Table>
