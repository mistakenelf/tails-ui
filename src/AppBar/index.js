import {
  AppBar,
  Close,
  DesktopMenu,
  DesktopMenuItem,
  Hamburger,
  MobileMenu,
  MobileMenuItem,
  Title,
} from './styles'
import React, { Component } from 'react'

import Clear from 'react-icons/lib/md/clear'
import Reorder from 'react-icons/lib/md/reorder'

export default class extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const { title, menuItems, color } = this.props

    return (
      <AppBar color={color}>
        <Title>{title}</Title>
        <DesktopMenu>
          {menuItems.map((link, index) => {
            return (
              <span key={index}>
                {link.click
                  ? <DesktopMenuItem onClick={link.click}>
                      {link.text}
                    </DesktopMenuItem>
                  : <DesktopMenuItem>
                      {link.link}
                    </DesktopMenuItem>}
              </span>
            )
          })}
        </DesktopMenu>
        <Hamburger onClick={this.toggleMenu}>
          <Reorder />
        </Hamburger>
        <MobileMenu
          showMenu={this.state.showMenu}
          style={{ display: this.state.showMenu ? 'initial' : 'none' }}
        >
          <Close onClick={this.toggleMenu}>
            <Clear />
          </Close>
          {menuItems.map((link, index) => {
            return (
              <span key={index}>
                {link.click
                  ? <MobileMenuItem onClick={link.click}>
                      {link.text}
                    </MobileMenuItem>
                  : <MobileMenuItem key={index} onClick={this.toggleMenu}>
                      {link.link}
                    </MobileMenuItem>}
              </span>
            )
          })}
        </MobileMenu>
      </AppBar>
    )
  }
}
