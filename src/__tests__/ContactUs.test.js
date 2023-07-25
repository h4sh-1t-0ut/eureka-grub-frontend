import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';


const renderShow = () => {
    render(
        <BrowserRouter>
            <ContactUs />
        </BrowserRouter>  
    ) 
}

describe("<Home />", () => {
    it("renders a contact form header for Conact Us page", () => {
        renderShow()
        const contactFormHeader = screen.getByRole('heading', {
            name: /contact me/i
        })
        expect(contactFormHeader).toBeInTheDocument()
    })

    it("renders a Full Name label", () => {
        renderShow()
        screen.logTestingPlaygroundURL()
        const fullnameLabel = screen.getByText(/full name/i)
        expect(fullnameLabel).toBeInTheDocument()
    })
    
    it("renders a text box for full name", () => {
        renderShow()
        const fullNameTextBox = screen.getByPlaceholderText(/enter full name\.\.\./i)
        expect(fullNameTextBox).toBeInTheDocument()
    })

    it("renders a Email label", () => {
        renderShow()
        const emailLabel = screen.getByText(/email/i)
        expect(emailLabel).toBeInTheDocument()
    })

    it("renders a text box for email", () => {
        renderShow()
        const emailTextBox = screen.getByPlaceholderText(/enter email\.\.\./i)
        expect(emailTextBox).toBeInTheDocument()
    })    

    it("renders a Message label", () => {
        renderShow()
        const messageLabel = screen.getByText(/message/i)
        expect(messageLabel).toBeInTheDocument()
    })

    it("renders a text box for message", () => {
        renderShow()
        const messageTextBox = screen.getByPlaceholderText(/enter message\.\.\./i)
        expect(messageTextBox).toBeInTheDocument()
    })
})