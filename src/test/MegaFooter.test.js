import MegaFooter from '../components/MegaFooter'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MegaFooter
      copyrightText="Copyright 2017 Tyler Knipfer"
      columnOne={{
        header: 'Links',
        links: [
          { key: 'faq', value: <a href="#!">FAQ</a> },
          { key: 'about', value: <a href="#!">About</a> },
          { key: 'support', value: <a href="#!">Support</a> }
        ]
      }}
    />,
    div
  )
})

test('mega footer snapshot', () => {
  const tree = renderer
    .create(
      <MegaFooter
        copyrightText="Copyright 2017 Tyler Knipfer"
        columnOne={{
          header: 'Links',
          links: [
            { key: 'faq', value: <a href="#!">FAQ</a> },
            { key: 'about', value: <a href="#!">About</a> },
            { key: 'support', value: <a href="#!">Support</a> }
          ]
        }}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
