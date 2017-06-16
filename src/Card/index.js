import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  padding: 5px;
  border: 1px solid silver;
  border-radius: 3px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const CardHeader = styled.div`
  font-weight: bolder;
  display: flex;
  align-items: center;
  font-size: 2em;
  color: darkslategrey;
  border-bottom: 1px solid silver;
  margin-bottom: 5px;
  padding: 5px;
`

const CardContent = styled.div`
  padding: 5px;
  font-size: 1em;
`

export default ({ children, headerText }) =>
  <Card>
    {headerText && <CardHeader>{headerText}</CardHeader>}
    <CardContent>
      {children}
    </CardContent>
  </Card>
