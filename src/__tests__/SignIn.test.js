import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const renderShow = () => {
  const mockLogin = jest.fn()
    render(
        <BrowserRouter>
            <SignIn login={mockLogin}/>
        </BrowserRouter>
    ) 
    return {mockLogin}
}

describe("<Signin />", () => {
  it("renders email, password, and confirm password text", () => {
    renderShow()
    const screenText = screen.getByText(/email: password:/i)
    expect(screenText).toBeInTheDocument()
  }),

  it("renders all password placeholders", () => {
    renderShow()
    const passwordInputs = screen.getAllByPlaceholderText(/password/i)
    expect(passwordInputs).toHaveLength(1)
  }),

  it("renders email placeholder", () => {
    renderShow()
    const emailInput = screen.getAllByPlaceholderText(/ex@example.com/i)
    expect(emailInput).toHaveLength(1)
  }),

  it("submits the form with email and password values with a mock function for signin/login", () => {
    const {mockLogin} = renderShow()
    const formElement = screen.getByRole('form')
    fireEvent.change(screen.getByPlaceholderText(/ex@example.com/i))
    fireEvent.change(screen.getByPlaceholderText(/password/i))
    fireEvent.submit(formElement)
    expect(mockLogin).toHaveBeenCalled()
  })
})