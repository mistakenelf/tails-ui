import Article from '../components/Article'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Article />, div)
})

test('article snapshot', () => {
  const tree = renderer.create(<Article />).toJSON()
  expect(tree).toMatchSnapshot()
})
