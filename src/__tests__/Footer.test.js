import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
        
    ) 
}

describe("<Footer />", () => {
    it("renders names", () => {
        renderShow()
        const footerNames = screen.getByText(/copyright: brandon shinzato, ricky espinoza, michael ortega/i)
        expect(footerNames).toBeInTheDocument()
    }),

    it("renders a contact us link", () => {
        renderShow()
        const footerContactUs = screen.getByRole('link', {
            name: /contact us/i
          })
        expect(footerContactUs).toBeInTheDocument()
    }),
    
    it("renders a about us link", () => {
        renderShow()
        const footerContactUs = screen.getByRole('link', {
            name: /about us/i
          })
        expect(footerContactUs).toBeInTheDocument()
    })
})