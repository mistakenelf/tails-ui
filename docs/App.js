import { AppBar, Carousel, Icon } from 'stylized'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    index: 0
  }

  handleChangeIndex = (index) => {
    this.setState({
      index,
    })
  }

  render() {
    const { index } = this.state

    return (
      <div>
        <AppBar
          title="AppBar"
          fontColor="white"
          shadowed
          mobileMenuHeaderTextColor="white"
          mobileMenuHeaderColor="palevioletred"
          mobileMenuHeaderText="Test Title"
          mobileMenuOpenIcon={
            <Icon icon="menu" color="white" size={25} />
          }
          mobileMenuCloseIcon={<Icon icon="cross" color="white" size={25} />}
          menuItems={[
            { text: "Home", link: <a href="/">Home</a>},
            { text: "Home", link: <a href="/">Home</a> },
            { text: "Home", link: <a href="/">Home</a> },
            { text: "Home", link: <a href="/">Home</a> }
          ]}
        />
        <Carousel index={index} onChangeIndex={this.handleChangeIndex} dots={2}>
          <div style={{ background: 'grey', height: 400 }}>test</div>
          <div style={{ background: 'grey', height: 400 }}>test</div>
        </Carousel>
      </div>
    )
  }
}