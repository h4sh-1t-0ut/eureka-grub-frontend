import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';

const renderShow = () => {
  const mockSignUp = jest.fn()
    render(
        <BrowserRouter>
            <SignUp signup={mockSignUp}/>
        </BrowserRouter>
    ) 
    return {mockSignUp}
}

describe("<SignUp />", () => {
  it("renders email, password, and confirm password text", () => {
    renderShow()
    const screenText = screen.getByText(/email: password: confirm password:/i)
    expect(screenText).toBeInTheDocument()
  }),

  it("renders all password placeholders", () => {
    renderShow()
    const passwordInputs = screen.getAllByPlaceholderText(/password/i)
    expect(passwordInputs).toHaveLength(2)
  }),

  it("renders email placeholder", () => {
    renderShow()
    const emailInput = screen.getAllByPlaceholderText(/ex@example.com/i)
    expect(emailInput).toHaveLength(1)
  }),

  it("submits the form email and password values with a mock function for signup", () => {
    const { mockSignUp } = renderShow()
    const formElement = screen.getByRole('form')
    fireEvent.change(screen.getByPlaceholderText(/ex@example.com/i))
    fireEvent.change(screen.getByLabelText('password'))
    fireEvent.change(screen.getByLabelText('confirm_password'))
    fireEvent.submit(formElement)
    expect(mockSignUp).toHaveBeenCalled()
  })
})