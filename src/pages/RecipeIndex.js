import {React, useState}from 'react';
import "../styles/RecipeIndex.css"
import SearchBar from '../components/SearchBar';
import { NavLink, Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';

const RecipeIndex = ({ recipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)

  const handleSearchChange = (filteredResults) => {
    setFilteredRecipes(filteredResults)
  }
  
  return (
    <>
    <div id="indexBody">
    <h1>Disaster Recipes</h1>
    <br/>
    <SearchBar recipes={recipes} onSearchChange={handleSearchChange}/>
    <br/>
   
    <div>
     <div className="indexHeading">
        <h2>Desserts</h2>
        <p>HMMMMM DIABETES</p>
      </div>
      <br/>
      <div className="indexCards">
        {filteredRecipes.map((recipe, index) => {
          if (recipe.course === 'Dessert') {
            return (
             
              <Card key={index} style={{ width: '16rem' }} outline color='dark'>
                <img alt={recipe.name} src={recipe.recipe_image} />
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
          }
          return null
        })}
      <br/>
      </div>
      <div className="indexHeading">
        <h2>Belly Fillers</h2>
        <p>Sensory indulgence unlocked</p>
      </div>
      <br/>

      <div className="indexCards">
        {filteredRecipes.map((recipe, index) => {
          if (recipe.course === 'Appetizer') {
            return (
              <Card key={index} style={{ width: '16rem' }} outline color='dark'>
                <img alt={recipe.name} src={recipe.recipe_image} />
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
          }
      
          return null
        })}
      <br/>
      </div>
      <div className="indexHeading">
        <h2>Drinkies</h2>
        <p>Boba? no boba?</p>
      </div>
      <br/>
      <div className="indexCards">
        {filteredRecipes.map((recipe, index) => {
          if (recipe.course === "Beverage") {
            return (
              <Card key={index} style={{ width: '16rem' }} outline color='dark'>
                <img alt={recipe.name} src={recipe.recipe_image} />
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
          }
          return null
        })}
        <br/>
        <br/>
    </div>
    </div>
    </div>
    </>
  )
}

export default RecipeIndex;