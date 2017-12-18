import React from 'react'
import Table from '../components/Table'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Table
      cols={[
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
        { key: 'age', label: 'Age' },
        { key: 'weight', label: 'weight' },
        { key: 'dog', label: 'Dog' }
      ]}
      data={[
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          age: 123,
          weight: 1234,
          dog: 234234
        },
        {
          id: 2,
          firstName: 'John',
          lastName: 'Doe',
          age: 123,
          weight: 1234,
          dog: 234234
        },
        {
          id: 3,
          firstName: 'John',
          lastName: 'Doe',
          age: 123,
          weight: 1234,
          dog: 234234
        },
        {
          id: 4,
          firstName: 'John',
          lastName: 'Doe',
          age: 123,
          weight: 1234,
          dog: 234234
        },
        {
          id: 5,
          firstName: 'Clark',
          lastName: 'Kent',
          age: 12938,
          weight: 1345235,
          dog: 1231230980980089080890809080898123
        }
      ]}
    />,
    div
  )
})

test('table snapshot', () => {
  const tree = renderer
    .create(
      <Table
        cols={[
          { key: 'firstName', label: 'First Name' },
          { key: 'lastName', label: 'Last Name' },
          { key: 'age', label: 'Age' },
          { key: 'weight', label: 'weight' },
          { key: 'dog', label: 'Dog' }
        ]}
        data={[
          {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 123,
            weight: 1234,
            dog: 234234
          },
          {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            age: 123,
            weight: 1234,
            dog: 234234
          },
          {
            id: 3,
            firstName: 'John',
            lastName: 'Doe',
            age: 123,
            weight: 1234,
            dog: 234234
          },
          {
            id: 4,
            firstName: 'John',
            lastName: 'Doe',
            age: 123,
            weight: 1234,
            dog: 234234
          },
          {
            id: 5,
            firstName: 'Clark',
            lastName: 'Kent',
            age: 12938,
            weight: 1345235,
            dog: 1231230980980089080890809080898123
          }
        ]}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
