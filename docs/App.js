import { AppBar, Icon } from 'stylized'
import React, { Component } from 'react'

export default class extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: 'palevioletred', height: '100vh'}}>
      <AppBar
        title="Tyler & Mariah"
        fixed
        backgroundColor="transparent"
        fontColor="black"
        mobileMenuOpenIcon={<Icon icon="menu" color="black" size={25} />}
        mobileMenuCloseIcon={<Icon icon="close" color="black" size={25} />}
        menuItems={[{ text: 'Home', link: <a href="/">Home</a> },{ text: 'Home', link: <a href="/">Home</a> },{ text: 'Home', link: <a href="/">Home</a> },{ text: 'Home', link: <a href="/">Home</a> }]}
      />
      <div style={{height: 700, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        this is some content
      </div>
      </div>
    )
  }
}