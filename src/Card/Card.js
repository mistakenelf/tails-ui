import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  padding: 5px;
  border: ${props => (props.bordered ? '1px solid silver' : 'none')};
  border-radius: ${props => (props.rounded ? '3px' : '0px')};
  background: ${props => props.backgroundColor || 'white'};
  box-shadow: ${props =>
    props.shadowed ? '0 4px 8px 0 rgba(0,0,0,0.2)' : null};
  color: ${props => props.fontColor || 'black'};
`

const CardHeader = styled.div`
  font-weight: bolder;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: ${props => props.headerColor || 'black'};
  border-bottom: 1px solid silver;
  margin-bottom: 5px;
  padding: 5px;
`

const CardContent = styled.div`
  padding: 5px;
  font-size: 1em;
`

export default ({
  children,
  headerText,
  shadowed,
  bordered,
  rounded,
  backgroundColor,
  fontColor,
  headerColor,
}) =>
  <Card
    shadowed={shadowed}
    bordered={bordered}
    rounded={rounded}
    backgroundColor={backgroundColor}
    fontColor={fontColor}
  >
    {headerText &&
      <CardHeader headerColor={headerColor}>{headerText}</CardHeader>}
    <CardContent>
      {children}
    </CardContent>
  </Card>
