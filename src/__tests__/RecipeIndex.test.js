import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeIndex from '../pages/RecipeIndex';
import mockRecipes from '../mockRecipes';

const renderShow = () => {
  render(
      <BrowserRouter>
          <RecipeIndex recipes={mockRecipes} />
      </BrowserRouter>  
  ) 
}

describe("<RecipeIndex />", () => {
  it("renders a header", () => {
    renderShow()
    const header = screen.getByRole('heading', {
      name: /disaster recipes/i
    })
    expect(header).toBeInTheDocument()
  }),

  it("renders all recipe names", () => {
    renderShow()
    mockRecipes.forEach(recipe => {
      const recipeNames = screen.getByText(recipe.name)
      expect(recipeNames).toBeInTheDocument()
    })
  }),

  it("renders all recipe courses", () => {
   renderShow()
   mockRecipes.forEach(recipe => {
      const recipeCourses = screen.getByText(`Courses: ${recipe.course}`)
      expect(recipeCourses).toBeInTheDocument()
    })
  }),

  it("renders all recipe cook time and servings", () => {
    renderShow()
    mockRecipes.forEach(recipe => {
      const recipeCookServe = screen.getByText(`Cook Time: ${recipe.cook_time}, Servings: ${recipe.servings}`)
      expect(recipeCookServe).toBeInTheDocument()
    })
  }),

  it("renders a all buttons for disaster info", () => {
    renderShow()
    const disasterButton = screen.getAllByRole('button', { 
      name: /disaster info/i 
    })
    expect(disasterButton).toHaveLength(3)
  }),

  it("renders all disaster images", () => {
    renderShow()
    mockRecipes.forEach(recipe => {
      const recipeImage = screen.getByRole('img', {
        name: recipe.name
    })
      expect(recipeImage).toBeInTheDocument()
      expect(recipeImage).toHaveAttribute('src', recipe.recipe_image)
      expect(recipeImage).toHaveAttribute('alt', recipe.name)
    })
  })
})
