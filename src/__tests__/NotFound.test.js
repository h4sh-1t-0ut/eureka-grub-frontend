import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const renderShow = () => {
    render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>  
    ) 
}

describe("<NotFound />", () => {
    it("renders a header", () => {
        renderShow()
        const NotFoundHeader = screen.getByRole('heading', {
            name: /uh oh, you are on fire!/i
          })
        expect(NotFoundHeader).toBeInTheDocument()   
    })
})