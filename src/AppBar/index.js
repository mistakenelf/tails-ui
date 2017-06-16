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
      backgroundColor,
      fontColor,
      mobileMenuOpenIcon,
      mobileMenuCloseIcon,
      hasShadow,
      fixed,
      height,
    } = this.props

    return (
      <AppBar
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        hasShadow={hasShadow}
        fixed={fixed}
        height={height}
      >
        <Title fontColor={fontColor}>{title}</Title>
        <DesktopMenu fontColor={fontColor}>
          {menuItems.map((link, index) => {
            return (
              <span key={index}>
                {link.click
                  ? <DesktopMenuItem fontColor={fontColor} onClick={link.click}>
                      {link.text}
                    </DesktopMenuItem>
                  : <DesktopMenuItem fontColor={fontColor}>
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
          style={{ display: this.state.showMenu ? 'flex' : 'none' }}
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
