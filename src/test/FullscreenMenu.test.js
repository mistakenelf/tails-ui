import FullscreenMenu from '../components/FullscreenMenu'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<FullscreenMenu />, div)
})

test('fullscreen menu snapshot', () => {
  const tree = renderer.create(<FullscreenMenu />).toJSON()
  expect(tree).toMatchSnapshot()
})
