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
    const {
      title,
      menuItems,
      color,
      mobileMenuOpenIcon,
      mobileMenuCloseIcon,
    } = this.props

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
          {mobileMenuOpenIcon || 'menu'}
        </Hamburger>
        <MobileMenu
          showMenu={this.state.showMenu}
          style={{ display: this.state.showMenu ? 'initial' : 'none' }}
        >
          <Close onClick={this.toggleMenu}>
            {mobileMenuCloseIcon || 'close'}
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
