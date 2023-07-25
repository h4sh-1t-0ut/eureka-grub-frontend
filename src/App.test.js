import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const renderShow = () => {
  render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
  ) 
}

describe("<App />", () => {
  it("renders links on header", () => {
    renderShow()
    const homeLink = screen.getByRole('link', {
      name: /home/i
    })
    expect(homeLink).toBeInTheDocument()
  })
})