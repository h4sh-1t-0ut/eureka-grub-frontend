import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';


const ProtectedIndex = ({ protectedRecipes, currentUser, deleteRecipeProtectedIndex }) => {


  const myRecipes = protectedRecipes?.filter(recipe => currentUser.id === recipe.user_id)


  useEffect(() => {
  }, [protectedRecipes])

  return (
    <>
    <div id="indexBody">
    <div className="indexHeading">
        <h2>All Recipes</h2>
        <p>List of All disaster recipes</p>
      </div>
      <div className="indexCards">
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
              <Button onClick={() => deleteRecipeProtectedIndex(recipe.id)} aria-label='Disaster delete'>
                  Remove Disaster
              </Button>
          </CardBody>
        </Card>
      )
    })}
    </div>
    </div>
    </>
  )
}

export default ProtectedIndex