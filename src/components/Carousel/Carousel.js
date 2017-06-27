import React, { Component } from 'react'

import SwipeableViews from 'react-swipeable-views'

class Carousel extends Component {
  render() {
    return (
      <SwipeableViews enableMouseEvents resistance>
        {this.props.children.map((elem, index) => {
          return (
            <div key={index}>
              {elem}
            </div>
          )
        })}
      </SwipeableViews>
    )
  }
}

export default Carousel
