import {
  AppBar,
  Button,
  Card,
  Form,
  Icon,
  Loader,
  Modal,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeading,
  TableRow,
  TextArea,
  TextField,
} from "stylized";
import React, { Component } from "react";

export default class extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  submit = e => {
    e.preventDefault();
    console.log("test");
  };

  render() {
    return (
      <div>
        <AppBar
          title="AppBar"
          backgroundColor="papayawhip"
          fontColor="palevioletred"
          mobileMenuOpenIcon={
            <Icon icon="menu" color="palevioletred" size={25} />
          }
          mobileMenuCloseIcon={<Icon icon="close" color="black" size={25} />}
          menuItems={[
            { text: "Home", link: <a href="/">Home</a> },
            { text: "Home", link: <a href="/">Home</a> },
            { text: "Home", link: <a href="/">Home</a> },
            { text: "Home", link: <a href="/">Home</a> }
          ]}
        />
        <Button backgroundColor="royalblue" onClick={this.toggle}>
          Toggle
        </Button>
        {this.state.open &&
          <Modal handleClose={this.toggle}>
            <Form onSubmit={this.submit}>
              <TextField
                fullWidth
                type="text"
                placeholder="Enter some text"
                labelText="Product"
              />
              <br />
              <br />
              <TextArea
                fullWidth
                placeholder="Enter some long text"
                labelText="Description"
              />
              <br />
              <br />
              <Button fullWidth type="submit">Test</Button>
            </Form>
          </Modal>}
        <Loader />
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>Payment</TableHeading>
              <TableHeading>Amount</TableHeading>
              <TableHeading>Total</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableData data-label="payment">Payment</TableData>
              <TableData data-label="amount">Amount</TableData>
              <TableData data-label="total">Total</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="payment">Payment</TableData>
              <TableData data-label="amount">Amount</TableData>
              <TableData data-label="total">Total</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="payment">Payment</TableData>
              <TableData data-label="amount">Amount</TableData>
              <TableData data-label="total">Total</TableData>
            </TableRow>
            <TableRow>
              <TableData data-label="payment">Payment</TableData>
              <TableData data-label="amount">Amount</TableData>
              <TableData data-label="total">Total</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
