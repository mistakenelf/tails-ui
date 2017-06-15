import { Button, Card, Loader, Modal, TextArea, TextField } from 'stylized'
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
      <div>
        <Button onClick={this.toggle}>Test</Button>
        <Card>
          Some content here
        </Card>
        <TextField placeholder="Enter some text" />
        <TextArea placeholder="Enter some long text" />
        <Loader />
        {this.state.open && 
          <Modal>
            <TextField placeholder="Test" />
            <TextField placeholder="Test" />
            <TextField placeholder="Test" />
            <Button onClick={this.toggle}>Test</Button>
          </Modal>
        }
      </div>
    )
  }
}