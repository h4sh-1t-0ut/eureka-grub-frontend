import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RecipeShow from '../pages/RecipeShow';
import mockRecipes from '../mockRecipes';

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/recipe/1"]}>
      <Routes>
      <Route path='/recipe/:id' element={<RecipeShow recipes={mockRecipes}/>} />
      </Routes>
    </MemoryRouter>
  ) 
}

describe("<RecipeShow />", () => {
  it("renders a header", () => {
    renderShow()
    const showHeader = screen.getByRole('heading', {
      name: /your recipe of disaster/i
    })
    expect(showHeader).toBeInTheDocument()
  }),

  it("renders the recipe picture and name", () => {
    renderShow()
    const recipeImage = screen.getByRole('img', {
      name: /lumpia/i
    })
    expect(recipeImage).toBeInTheDocument()
    expect(recipeImage).toHaveAttribute('src', mockRecipes[0].recipe_image)
    expect(recipeImage).toHaveAttribute('alt', mockRecipes[0].name)
  }),

  it("renders the recipe course", () => {
    renderShow()
    const recipeCourses = screen.getByText(`Courses: ${mockRecipes[0].course}`)
    expect(recipeCourses).toBeInTheDocument()
  }),

  it("renders the recipe cook time and servings", () => {
    renderShow()
    const recipeCookServe = screen.getByText(`Cook Time: ${mockRecipes[0].cook_time}, Servings: ${mockRecipes[0].servings}`)
    expect(recipeCookServe).toBeInTheDocument()
  }),

  it("renders a button to back to disaster list", () => {
    renderShow()
    const backToList = screen.getByRole('button', {
      name: /disaster list/i
    })
    expect(backToList).toBeInTheDocument()
  }),

  it("renders a button to show a modal of the instructions", () => {
    renderShow()
    const instructionButton = screen.getByRole('button', {
      name: /instructions/i
    })
    expect(instructionButton).toBeInTheDocument()
  }),

  it("renders a button to show a modal of the ingredients", () => {
    renderShow()
    const ingredientsButton = screen.getByRole('button', {
      name: /ingredients/i
    })
    expect(ingredientsButton).toBeInTheDocument()
  })
})