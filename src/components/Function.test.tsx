
import { render, screen, fireEvent,waitFor, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Function from './Functions'


test('has correct input value', () => {
    render(<Function  />)
    expect(screen.getByTestId("Test")).toBeInTheDocument()
    })

 
    describe('my-app component', () => {
        it('should focus the input', async () => {
      
          const { getByTestId } = render(<Function />)
          const button = (getByTestId("Test", { exact: true })) as HTMLInputElement
      
        expect(
            button
        ).toBe(true)
        })
      })  