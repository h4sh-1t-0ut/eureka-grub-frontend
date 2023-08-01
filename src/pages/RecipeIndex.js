import {React, useState}from 'react';
import "../styles/RecipeIndex.css"
import SearchBar from '../components/SearchBar';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';

const RecipeIndex = ({ recipes, addToProtectedIndex, currentUser }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  const handleAddToProtectedIndex = (recipe) => {
    addToProtectedIndex(recipe)
  }
  

  const handleSearchChange = (filteredResults) => {
    setFilteredRecipes(filteredResults)
  }
  
  return (
    <>
    <div id="indexBody">
    <SearchBar recipes={recipes} onSearchChange={handleSearchChange} classname='searchbar'/>
    <div>
     <div className="indexHeading">
        <h2>All Recipes</h2>
        <p>List of All disaster recipes</p>
      </div>
      <br/>
      <div className="indexCards">
        {filteredRecipes.map((recipe, index) => {
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
                   {currentUser && (
                  <Button aria-label='Add to Protected Index' onClick={() => handleAddToProtectedIndex(recipe)}>
                    Add to list
                  </Button>
                )}
                 </CardBody>
               </Card>
            )
        })}

      </div>
    </div>
    </div>
    </>
  )
}

export default RecipeIndex;