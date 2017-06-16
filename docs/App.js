import { Button, Card, Form, Loader, Modal, TextArea, TextField } from 'stylized'
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
      <div style={{ margin: 20 }}>
        <Card hasShadow headerText="Test Card" hasBorder rounded backgroundColor="palevioletred" fontColor="white">
          Some content here
        </Card>
      </div>
    )
  }
}