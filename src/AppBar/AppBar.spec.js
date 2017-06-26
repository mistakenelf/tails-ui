import AppBar from './AppBar'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <AppBar
      menuItems={[
        { text: 'Home', link: <a href="/">Home</a> },
        { text: 'Home', link: <a href="/">Home</a> },
        { text: 'Home', link: <a href="/">Home</a> },
        { text: 'Home', link: <a href="/">Home</a> },
      ]}
    />,
    div
  )
})

it('generate AppBar snapshot', () => {
  const component = renderer.create(
    <AppBar
      menuItems={[
        { text: 'Home', link: <a href="/">Home</a> },
        { text: 'Home', link: <a href="/">Home</a> },
        { text: 'Home', link: <a href="/">Home</a> },
        { text: 'Home', link: <a href="/">Home</a> },
      ]}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
