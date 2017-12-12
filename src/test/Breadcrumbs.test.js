import Breadcrumbs from '../components/Breadcrumbs'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Breadcrumbs
      crumbs={[
        { key: 'home', value: <a href="#!">Home</a>, hasSeparator: true },
        { key: 'about', value: <a href="#!">About</a> }
      ]}
    />,
    div
  )
})

test('breadcrumbs snapshot', () => {
  const tree = renderer
    .create(
      <Breadcrumbs
        crumbs={[
          { key: 'home', value: <a href="#!">Home</a>, hasSeparator: true },
          { key: 'about', value: <a href="#!">About</a> }
        ]}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
