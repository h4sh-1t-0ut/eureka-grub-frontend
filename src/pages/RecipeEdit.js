import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const RecipeEdit = ({recipes, updateRecipe}) => {
	const { id } = useParams()

	const navigate = useNavigate()

	let currentRecipe = recipes?.find(recipe => recipe.id === +id)

  const [editRecipe, setEditRecipe] = useState({
  name: currentRecipe.name,
  instructions: currentRecipe.instructions,
  cook_time: currentRecipe.cook_time,
  ingredients: currentRecipe.ingredients,
  course: currentRecipe.course,
  servings: currentRecipe.servings,
  allergies: currentRecipe.allergies,
  tutorial_link: currentRecipe.tutorial_link,
  recipe_image: currentRecipe.recipe_image
})

	const handleChange = (e) => {
		setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value })
	}

	const handleSubmit = () => {
		updateRecipe(editRecipe, currentRecipe.id)
		navigate(`/recipe/${currentRecipe.id}`)
	}

	return (
		<Form>
			<FormGroup>
					<Label for="name">Name</Label>
				<		Input name="name" type="text" placeholder="Change recipe name" onChange={handleChange} value={editRecipe.name}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="instructions">Instructions</Label>
				<Input name="instructions" type="text" placeholder="Change the instructions to the recipe" onChange={handleChange} value={editRecipe.instructions}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="cook_time">Cook Time</Label>
				<Input name="cook_time" type="text" placeholder="Change the cook time to recipe" onChange={handleChange} value={editRecipe.cook_time}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="ingredients">Ingredients</Label>
				<Input name="ingredients" type="text" placeholder="Change the ingredients to the recipe" onChange={handleChange} value={editRecipe.ingredients}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="course">Course</Label>
				<Input name="course" type="text" placeholder="Change the course meal" onChange={handleChange} value={editRecipe.course}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="servings">Servings</Label>
				<Input name="servings" type="number" placeholder="Change the servings amount" onChange={handleChange} value={editRecipe.servings}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="allergies">Allergies</Label>
				<Input name="allergies" type="text" placeholder="Change the possible allergies from recipe" onChange={handleChange} value={editRecipe.allergies}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="tutorial_link">Tutorial Link</Label>
				<Input name="tutorial_link" type="url" placeholder="Change the cooking tutorial link for the recipe" onChange={handleChange} value={editRecipe.tutorial_link}></Input>
			</FormGroup>

			<FormGroup>
				<Label for="recipe_image">Recipe Image</Label>
				<Input name="recipe_image" type="url" placeholder="Change recipe picture" onChange={handleChange} value={editRecipe.recipe_image}></Input>
			</FormGroup>

			<Button onClick={handleSubmit}>
				Submit updated recipe
			</Button>
		</Form>
	)
}
export default RecipeEdit