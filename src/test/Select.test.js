import React from 'react'
import Select from '../components/Select'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Select>
      <option>test</option>
    </Select>,
    div
  )
})

test('select snapshot', () => {
  const tree = renderer
    .create(
      <Select>
        <option>test</option>
      </Select>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
