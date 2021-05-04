import React from 'react'
import { render, screen, fireEvent,waitFor, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Welcome from './Fetch'


test('has correct input value', () => {
    render(<Welcome firstName="John" lastName="Doe" />)
    expect(screen.getByRole('form')).toHaveFormValues({
      firstName: 'John',
      lastName: 'Doe',
    })
  })
 
    test('has correct placeholder value', () => {
      render(<Welcome placeholder="firstName" />)
      expect(screen.getByPlaceholderText('firstName'))
      })
  
   
    test("check Button click", ()=>{
      const {getByTestId} = render(<Welcome />);
      // const button = getByTestId("button");
      fireEvent.click(screen.getByTestId("button"))
      expect(screen.getByRole("dialog", { pressed: true }))
    })
  
    test('calls await when clicked',  async () => {
    const handleSubmit = jest.fn()
    render(<button onClick={handleSubmit}>Submit</button>)
    fireEvent.click(screen.getByText(/Submit/i))
    await waitFor(() => {
      expect(screen.findByText('Clicked once'))
    })
    fireEvent.click(screen.getByText(/Submit/i))
    await waitFor(() => {
      expect(screen.findByText('Clicked twice'))
    })
    })
 

