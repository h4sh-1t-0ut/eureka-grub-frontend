import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        
    ) 
}

describe("<Header />", () => {
    it("renders a home link", () => {
        renderShow()
        const headerhome = screen.getByRole('link', {
            name: /home/i
          })
        expect(headerhome).toBeInTheDocument()
    }),
    
    it("renders a recipe link", () => {
        renderShow()
        const headerRecipe = screen.getByRole('link', {
            name: /recipes/i
          })
        expect(headerRecipe).toBeInTheDocument()
    }),

    it("renders a login link", () => {
        renderShow()
        const headerLogin = screen.getByRole('link', {
            name: /login/i
          })
        expect(headerLogin).toBeInTheDocument()
    }),

    it("renders a signup link", () => {
        renderShow()
        const headerSignup = screen.getByRole('link', {
            name: /sign up/i
          })
        expect(headerSignup).toBeInTheDocument()
    })
})

