import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedIndex from '../pages/ProtectedIndex';
import mockRecipes from '../mockRecipes';
import mockUsers from '../mockUsers';

const renderShow = () => {
  const mockDelete = jest.fn()
  render(
      <BrowserRouter>
          <ProtectedIndex recipes={mockRecipes} currentUser={mockUsers[0]} deleteRecipeProtectedIndex={mockDelete}/>
      </BrowserRouter>  
  )
  return {mockDelete} 
}

describe("<ProtectedIndex />", () => {
  it("renders a header", () => {
    renderShow()
    const head = screen.getByRole('heading', {
      name: /your disaster recipes/i
    })
    expect(head).toBeInTheDocument()
  }),

  it("renders a img", () => {
    renderShow()
      const img = screen.getByRole('img', {
        name: /lumpia/i
      })
      expect(img).toBeInTheDocument()
  }),

  it("renders a name header for recipe", () => {
    renderShow()
    const headerName = screen.getByRole('heading', {
      name: /lumpia/i
    })
    expect(headerName).toBeInTheDocument()
  }),

  it("renders the course for recipe", () => {
    renderShow()
    const course = screen.getByRole('heading', {
      name: /courses: dessert/i
    })
    expect(course).toBeInTheDocument()
  }),

  it("renders text for Cook time and servings", () => {
    renderShow()
    const cookTimeServings = screen.getByText(/cook time: 30m, servings: 1/i)
    expect(cookTimeServings).toBeInTheDocument()
  }),

  it("renders a button for disaster info", () => {
    renderShow()
    const disasterInfoButton = screen.getByRole('button', {
      name: /disaster info/i
    })
    expect(disasterInfoButton).toBeInTheDocument()
  }),

  it("renders a button for delete", () => {
    renderShow()
    const deleteButton = screen.getByRole('button', {
      name: /disaster delete/i
    })
    expect(deleteButton).toBeInTheDocument()
  }),

  it("submit button works with mockdelete function", () => {
    const {mockDelete} = renderShow()
    const deleteButton = screen.getByRole('button', {
      name: /disaster delete/i
    })
    fireEvent.click(deleteButton)
    expect(mockDelete).toHaveBeenCalled()
  })
})