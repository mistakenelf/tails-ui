import slideFromRight from '../../animations/slideFromRight'
import styled from 'styled-components'

// Main app bar component
export const AppBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${props => props.backgroundColor || 'royalblue'};
  color: ${props => props.fontColor || 'black'};
  height: ${props => props.height || '3em'};
  box-shadow: ${props => (props.shadowed ? '1px 1px 1px #999' : null)};
  position: ${props => (props.fixed ? 'fixed' : 'initial')};
`

// Title Component
export const Title = styled.div`
  font-size: 1.5em;
  color: ${props => props.fontColor || 'black'};
  padding-left: 0.5em;
`

// Hamburger icon
export const Hamburger = styled.div`
  padding-right: 0.5em;
  font-size: 2em;
  margin-left: auto;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`

// Close icon for mobile menu
export const Close = styled.div`
  margin-left: auto;
  padding-right: 10px;

  @media (min-width: 700px) {
    display: none;
  }
`

// Main mobile menu panel
export const MobileMenu = styled.div`
  height: 100vh;
  background: #fafafa;
  color: black;
  z-index: 10000000;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  animation: 0.3s alternate ${slideFromRight};

  @media (min-width: 700px) {
    display: none;
  }
`

export const MobileMenuHeader = styled.div`
  background: ${props => props.mobileMenuHeaderColor || 'royalblue'};
  height: 3em;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
`

export const MobileHeaderText = styled.div`
  color: ${props => props.mobileMenuHeaderTextColor || 'white'};
  padding-left: 10px;
  font-size: 1.5em;
`

// Mobile meu items
export const MobileMenuItem = styled.div`
  text-transform: uppercase;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  color: #424242;
  font-size: 1.1em;

  > a {
    text-decoration: none;
    color: #424242;
    font-size: 1.1em;
  }
`

export const RemoveDecoration = styled.span`
  text-transform: uppercase;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  color: #424242;
  font-size: 1.1em;

  > a {
    text-decoration: none;
    color: #424242;
    font-size: 1.1em;
  }
`

export const DesktopMenu = styled.div`
  font-weight: bolder;
  margin-left: auto;
  color: ${props => props.fontColor || 'black'};

  @media (max-width: 700px) {
    display: none;
  }
`

export const DesktopMenuItem = styled.span`
  padding-right: 15px;
  cursor: pointer;
  color: ${props => props.fontColor || 'black'};

  > a {
    text-decoration: none;
    color: ${props => props.fontColor || 'black'};
  }
`

export const MenuItemIcon = styled.span`margin-right: 10px;`

export const MobileMenuContainer = styled.div`
  background: white;
  margin: 20px;
  text-align: center;
`
