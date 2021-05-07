
import { render, screen, fireEvent,waitFor, getByRole, getByPlaceholderText, queryByPlaceholderText} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Function} from './Functions'


test('has correct input value', () => {
    render(<Function  />)
    expect(screen.getByTestId("Test")).toBeInTheDocument()
    });

 
    describe('my-app component', () => {
      it('should focus the input', async () => {
    
        const { getByTestId } = render(<Function />)
        const button = (await getByTestId("Test", { exact: true })) as HTMLInputElement
    
        // fireEvent.blur(button)
        fireEvent.blur(button) 
        
    
        //console.log(" --------- Button -----",button)
      })
    
    })

    test('has correct placeholder value', () => {
      render(<Function />)
      expect(screen.queryByPlaceholderText("Type C"))
      })

      // describe('Check label ', () => {
      //   it('should be label', async () => {
      //      const { findByText } = render(<Function />)
      //       const label = await findByText('Type C')
      //       expect(label).toBeInTheDocument()
      //   })
      // });