import { Button, Card, Loader, TextArea, TextField } from 'stylized'

import React from 'react'

export default () => 
  <div>
    <Button>Test</Button>
    <Card>
      Some content here
    </Card>
    <TextField placeholder="Enter some text" />
    <TextArea placeholder="Enter some long text" />
    <Loader />
  </div>