import React from 'react'
import TruncateText from '../TruncateText'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <TruncateText wordCount={10}>
      This is some text that should be truncated because its too long to display
      with a word count of 10
    </TruncateText>,
    div
  )
})

test('t snapshot', () => {
  const tree = renderer
    .create(
      <TruncateText wordCount={10}>
        This is some text that should be truncated because its too long to
        display with a word count of 10
      </TruncateText>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
