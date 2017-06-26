import {
  AppBar,
  Close,
  DesktopMenu,
  DesktopMenuItem,
  Hamburger,
  MenuItemIcon,
  MobileHeaderText,
  MobileMenu,
  MobileMenuContainer,
  MobileMenuHeader,
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
      shadowed,
      fixed,
      height,
      mobileMenuHeaderColor,
      mobileMenuHeaderTextColor,
      mobileMenuHeaderText,
    } = this.props

    return (
      <AppBar
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        shadowed={shadowed}
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
          <MobileMenuHeader mobileMenuHeaderColor={mobileMenuHeaderColor}>
            <MobileHeaderText
              mobileMenuHeaderTextColor={mobileMenuHeaderTextColor}
            >
              {mobileMenuHeaderText}
            </MobileHeaderText>
            <Close onClick={this.toggleMenu}>
              {mobileMenuCloseIcon || 'close'}
            </Close>
          </MobileMenuHeader>
          <MobileMenuContainer>
            {menuItems.map((link, index) => {
              return (
                <span key={index}>
                  <MobileMenuItem key={index} onClick={this.toggleMenu}>
                    <MenuItemIcon>{link.icon && link.icon}</MenuItemIcon>
                    {link.link}
                  </MobileMenuItem>
                </span>
              )
            })}
          </MobileMenuContainer>
        </MobileMenu>
      </AppBar>
    )
  }
}
