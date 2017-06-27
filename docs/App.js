import { Alert, AppBar, Button, Carousel, CircleButton, Icon } from 'stylized'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
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
        <br />
        <CircleButton shadowed><Icon icon="cross" color="white" size={15} /></CircleButton>
        <Button shadowed>Test</Button>
        <Alert shadowed>Test</Alert>
        <Carousel>
          <div style={{ background: 'blue', height: 400}}>test</div>
          <div style={{ background: 'blue', height: 400}}>test</div>
        </Carousel>
      </div>
    )
  }
}