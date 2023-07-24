import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedIndex from '../pages/RecipeIndex';


const renderShow = () => {
  render(
      <BrowserRouter>
          <ProtectedIndex />
      </BrowserRouter>  
  ) 
}

describe("<ProtectedIndex />", () => {
  it("renders a header", () => {
    renderShow()
    screen.logTestingPlaygroundURL()
    const header = screen.getByRole('heading', {
      name: /disaster recipes/i
    })
    expect(header).toBeInTheDocument()
  })
})