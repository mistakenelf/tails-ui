import styled, { keyframes } from 'styled-components'

export const AppBar = styled.div`
  display: flex;
  align-items: center;
	width: 100%;
  background: ${props => props.color || 'royalblue'};
  height: 3em;
  box-shadow: 1px 1px 1px #999;
  position: fixed;
`

export const Title = styled.div`
  font-size: 1.5em;
  color: white;
  padding-left: 0.5em;
`

export const Hamburger = styled.div`
  padding-right: 0.5em;
  font-size: 2em;
  color: white;
  margin-left: auto;
  cursor: pointer;

  @media (min-width: 700px) {
		display: none;
	}
`

export const Close = styled.div`
  color: black;
  position: absolute;
  padding-right: 15px;
  padding-top: 5px;
  top: 0;
  right: 0;

  @media(min-width: 700px) {
    display: none;
  }
`

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

export const MobileMenu = styled.div`
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  color: dimgrey;
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

export const MobileMenuItem = styled.div`
  padding-top: 30px;
  text-transform: uppercase;

  > a {
    text-decoration: none;
    color: dimgrey;
  }
`

export const DesktopMenu = styled.div`
  font-weight: bolder;
  padding-left: 1em;
  color: white;

  @media (max-width: 700px) {
		display: none;
	}
`

export const DesktopMenuItem = styled.span`
  padding-right: 15px;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: white;
  }
`
