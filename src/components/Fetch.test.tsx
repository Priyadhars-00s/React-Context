import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Welcome from './Fetch'


test('has correct input value', () => {
    render(<Welcome firstName="John" lastName="Doe" />)
    expect(screen.getByRole('form')).toHaveFormValues({
      firstName: 'John',
      lastName: 'Doe',
    })
  })