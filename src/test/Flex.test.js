import Flex from '../components/Flex'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Flex>A flex box</Flex>, div)
})

test('flex snapshot', () => {
  const tree = renderer.create(<Flex>A flex box</Flex>).toJSON()
  expect(tree).toMatchSnapshot()
})
