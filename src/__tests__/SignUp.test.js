import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';

const renderShow = () => {
    render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    ) 
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
  })
})