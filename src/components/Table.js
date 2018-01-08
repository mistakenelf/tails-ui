import React, { PureComponent } from 'react'

export default class Table extends PureComponent {
  generateHeaders = () => {
    const cols = this.props.cols
    return cols.map(colData => {
      return (
        <th className="text-left p-2" key={colData.key}>
          {colData.label}
        </th>
      )
    })
  }

  generateRows = () => {
    const cols = this.props.cols
    const data = this.props.data
    return data.map(item => {
      var cells = cols.map((colData, index) => {
        return (
          <td className="text-left p-2" key={index}>
            {item[colData.key]}
          </td>
        )
      })
      return (
        <tr className="border-b-2" key={item.id}>
          {cells}
        </tr>
      )
    })
  }

  render() {
    const headers = this.generateHeaders()
    const rows = this.generateRows()
    return (
      <div className="overflow-x-scroll">
        <table className="w-full border-2 border-grey-light">
          <thead>
            <tr className="border-b-2">{headers}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}
