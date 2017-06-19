import { AppBar, Button, Form, Icon, TextField } from 'stylized'
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

  submit = (e) => {
    e.preventDefault()
    console.log('test')
  }

  render() {
    return (
      <div>
        <AppBar
          title="AppBar"
          backgroundColor="royalblue"
          fontColor="white"
          mobileMenuOpenIcon={<Icon icon="menu" color="white" size={25} />}
          mobileMenuCloseIcon={<Icon icon="close" color="black" size={25} />}
          menuItems={[{ text: 'Home', link: <a href="/">Home</a> },{ text: 'Home', link: <a href="/">Home</a> },{ text: 'Home', link: <a href="/">Home</a> },{ text: 'Home', link: <a href="/">Home</a> }]}
        />
        <Form hasBorder onSubmit={(this.submit)}>
          <TextField type="text" placeholder="Enter some text" />
          <br />
          <Button type="submit">Test</Button>
        </Form>
      </div>
    )
  }
}