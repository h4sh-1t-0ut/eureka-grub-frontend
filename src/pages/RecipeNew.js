import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const RecipeNew = ({createRecipe}) => {

  const navigate = useNavigate()

  const [newRecipe, setNewRecipe] = useState ({
    name: "", 
    instructions: "",
    cook_time: "",
    ingredients: "",
    course: "",
    servings: "",
    allergies: "",
    tutorial_link: "",
    recipe_image: "",
  })

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value})
  } 

  const handleSubmit = () => {
    createRecipe(newRecipe)
    navigate("/recipeindex")
  }

  return (
    <>
      <h2>New Recipe</h2>
      
      <Button onClick={handleSubmit}>
          Submit
        </Button>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input name="name" type="text" placeholder='Enter name here' onChange={handleChange} value={newRecipe.name}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="instructions">Instructions</Label>
          <Input name="instructions" type="text" placeholder='Enter instructions here' onChange={handleChange} value={newRecipe.instructions}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="cook_time">Cook Time</Label>
          <Input name="cook_time" type="text" placeholder='Enter Cook Time here' onChange={handleChange} value={RecipeNew.cook_time}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="ingredients">Ingredients</Label>
          <Input name="ingredients" type="url" placeholder='Enter required ingredients' onChange={handleChange} value={RecipeNew.image}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="course">Course of the Day</Label>
          <Input name="course" type="url" placeholder='What type of course is this' onChange={handleChange} value={RecipeNew.cook_time}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="servings">Servings</Label>
          <Input name="servings" type="url" placeholder='Enter serving amount' onChange={handleChange} value={RecipeNew.servings}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="allergies">Allegries</Label>
          <Input name="allegries" type="url" placeholder='Enter any allergies' onChange={handleChange} value={RecipeNew.allergies}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="tutorial_link">Tutorial Link</Label>
          <Input name="tutorial_link" type="url" placeholder='Enter a url instructional video' onChange={handleChange} value={RecipeNew.tutorial_link}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="recipe_image">Recipe Image</Label>
          <Input name="recipe_image" type="url" placeholder='Enter an image for the recipe' onChange={handleChange} value={RecipeNew.recipe_image}></Input>
        </FormGroup>


      </Form>
    </>
    
  )
}

export default RecipeNew