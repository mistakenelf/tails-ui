# Tails-UI
React UI components using **tailwindcss**

## Components:
- Alert
- Article
- Box
- Breadcrumbs
- Button
- Card
- CodeBlock
- DangerousHTML
- Dropdown
- Flex
- ImageCarousel
- Loader
- MegaFooter
- Modal
- Navbar
- Panel
- Portal
- ProgressBar
- RenderIf
- Select
- Space
- Tab
- Table
- Tabs
- Text
- TextArea
- TextField
- TruncateText

## Installation:
`npm i tails-ui`

## Usage:
- Make sure to import the tails-ui css file `import 'tails-ui/dist/index.css'`
- Documentation site is coming soon with all the component api's
``` js
import React from 'react'
import { Button } from 'tails-ui'

const Button = () => (
  <Button
    color="blue"
    type="submit"
    fullWidth
    outline
  >
    Submit
  </Button>
)

export default Button

```

## Running Locally:
- You can run `npm link` inside **tails-ui** and then `npm link tails-ui` inside a project you have created to test the components locally.
- You can run `npm start` to start **tails-ui** in watch mode and it will compile any new components you add.
- `npm test` will run jest

