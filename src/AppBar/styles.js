import styled, { keyframes } from 'styled-components'

// Slide in animation for mobile menu
const slideIn = keyframes`
  from {
	  margin-left: 100%;
    width: 100%;
	}

	to {
	  margin-left: 0%;
    width: 100%;
	}
`

// Main app bar component
export const AppBar = styled.div`
  display: flex;
  align-items: center;
	width: 100%;
  background: ${props => props.backgroundColor || 'royalblue'};
  color: ${props => props.fontColor || 'black'};
  height: ${props => props.height || '3em'};
  box-shadow: ${props => (props.hasShadow ? '1px 1px 1px #999' : null)};
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
  position: absolute;
  padding-right: 15px;
  padding-top: 5px;
  top: 0;
  right: 0;

  @media(min-width: 700px) {
    display: none;
  }
`

// Main mobile menu panel
export const MobileMenu = styled.div`
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  color: black;
  z-index: 100;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  text-align: center;
  animation: 0.3s alternate ${slideIn};

  @media (min-width: 700px) {
		display: none;
	}
`

// Mobile meu items
export const MobileMenuItem = styled.div`
  text-transform: uppercase;
  padding-bottom: 15px;
  color: black;

  > a {
    text-decoration: none;
    color: black;
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
