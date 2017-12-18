import ImageCarousel from '../components/ImageCarousel'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <ImageCarousel
      images={[
        { alt: 'placeholder', src: 'https://via.placeholder.com/350x150' },
        { alt: 'placeholder', src: 'https://placeimg.com/640/480/any' },
        { alt: 'placeholder', src: 'https://via.placeholder.com/350x150' }
      ]}
    />,
    div
  )
})

test('image carousel snapshot', () => {
  const tree = renderer
    .create(
      <ImageCarousel
        images={[
          { alt: 'placeholder', src: 'https://via.placeholder.com/350x150' },
          { alt: 'placeholder', src: 'https://placeimg.com/640/480/any' },
          { alt: 'placeholder', src: 'https://via.placeholder.com/350x150' }
        ]}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
