import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>  
    ) 
}


describe("<Home />", () => {
    it("renders a header", () => {
        renderShow()
        screen.logTestingPlaygroundURL()
        const header = screen.getByRole('heading', {
            name: /eurekagrub/i
          })
        expect(header).toBeInTheDocument()
    }),

    it("renders a video", () => {
        renderShow()
        const video = screen.getByText(/video here/i)
        expect(video).toBeInTheDocument()
    }),

    it("renders a solgan", () => {
        renderShow()
        const solgan = screen.getByText(/we gots the meats/i)
        expect(solgan).toBeInTheDocument()
    }),

    it("renders all carousel buttons", () => {
        renderShow()
        const carouselButtons = screen.getAllByRole('button')
        expect(carouselButtons).toHaveLength(6)
    }),
    
    it("renders all lorem ipsums", () =>{
        renderShow()
        const loremIpsum = screen.getAllByText(/lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\./i)
        expect(loremIpsum).toHaveLength(3)
    })
})
