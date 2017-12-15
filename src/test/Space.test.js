import React from 'react'
import Space from '../components/Space'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Space>some space</Space>, div)
})

test('space snapshot', () => {
  const tree = renderer.create(<Space>some space</Space>).toJSON()
  expect(tree).toMatchSnapshot()
})
