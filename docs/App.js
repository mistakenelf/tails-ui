import { AppBar, Icon } from 'stylized'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <AppBar
        title="AppBar"
        fixed
        backgroundColor="palevioletred"
        fontColor="white"
        mobileMenuHeaderTextColor="blue"
        mobileMenuHeaderColor="black"
        mobileMenuHeaderText="Test Title"
        mobileMenuOpenIcon={
          <Icon icon="menu" color="white" size={25} />
        }
        mobileMenuCloseIcon={<Icon icon="cross" color="white" size={25} />}
        menuItems={[
          { text: "Home", link: <a href="/">Home</a> },
          { text: "Home", link: <a href="/">Home</a> },
          { text: "Home", link: <a href="/">Home</a> },
          { text: "Home", link: <a href="/">Home</a> }
        ]}
      />
    )
  }
}