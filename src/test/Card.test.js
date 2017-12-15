import Card from '../components/Card'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Card title="Card" footer={<a href="#!">footer link</a>}>
      This is a card
    </Card>,
    div
  )
})

test('card snapshot', () => {
  const tree = renderer
    .create(
      <Card title="Card" footer={<a href="#!">footer link</a>}>
        This is a card
      </Card>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
