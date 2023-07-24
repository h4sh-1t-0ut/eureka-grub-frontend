import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';

const ProtectedIndex = ({ recipes, currentUser, deleteRecipeProtectedIndex }) => {
  const { id } = useParams()
  const myRecipes = recipes?.filter(recipe => currentUser.id === recipe.user_id)

  return (
    <>
    <h1>Your Disaster Recipes</h1>
    {myRecipes?.map((recipe, index) => {
      return (
        <Card key={index} style={{width: '16rem'}} outline color='dark'>
          <img alt={recipe.name} src={recipe.recipe_image}/>
          <CardBody>
            <CardTitle tag="h5">
              {recipe.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            Courses: {recipe.course}
            </CardSubtitle>
            <CardText>
              Cook Time: {recipe.cook_time}, 
              Servings: {recipe.servings}
            </CardText>
            <NavLink to={`/recipe/${recipe.id}`}>
              <Button aria-label='Disaster Info'>
                  Disaster Info
              </Button>
            </NavLink>
            <NavLink to="/myrecipes">
              <Button onClick={() => deleteRecipeProtectedIndex(id)}aria-label='Disaster delete'>
                  Remove Disaster
              </Button>
            </NavLink>
          </CardBody>
        </Card>
      )
    })}
    </>
  )
}

export default ProtectedIndex