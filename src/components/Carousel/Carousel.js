import React, { Component } from 'react'

import Pagination from './Pagination'
import SwipeableViews from 'react-swipeable-views'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
`

class Carousel extends Component {
  render() {
    const { index, onChangeIndex, dots } = this.props

    return (
      <CarouselContainer>
        <SwipeableViews
          index={index}
          onChangeIndex={onChangeIndex}
          enableMouseEvents
          resistance
        >
          {this.props.children.map((elem, index) => {
            return (
              <div key={index}>
                {elem}
              </div>
            )
          })}
        </SwipeableViews>
        <Pagination dots={dots} index={index} onChangeIndex={onChangeIndex} />
      </CarouselContainer>
    )
  }
}

export default Carousel
