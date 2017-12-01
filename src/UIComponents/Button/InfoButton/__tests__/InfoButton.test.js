import InfoButton from '../InfoButton'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<InfoButton />, div)
})

test('info button snapshot', () => {
  const tree = renderer.create(<InfoButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
