import React from 'react'
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';


const RecipeIndex = ({ recipes }) => {
  return (
    <>
    <h1>Disaster Recipes</h1>
    <div>
      {recipes?.map((recipe, index) => {
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
          </CardBody>
        </Card>
      )
      })}
    </div>
    </>
  )
}

export default RecipeIndex