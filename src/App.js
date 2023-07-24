import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeIndex from './pages/RecipeIndex';
import RecipeShow from './pages/RecipeShow';
import RecipeEdit from './pages/RecipeEdit';
import RecipeNew from './pages/RecipeNew';
import ProtectedIndex from './pages/ProtectedIndex';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Developers from './pages/Developers';
import ContactUs from './pages/ContactUs';
import { useState } from 'react';
import mockRecipes from './mockRecipes';
import mockUsers from './mockUsers'

function App() {

  const [recipes, setRecipes] = useState(mockRecipes)
  const [currentUser, setCurrentUser] = useState(mockUsers[0])

  const signup = () => {
    alert("signed up")
  }
  
  const login = () => {
    alert("logged in")
  }

  const logout = () => {
    alert("logged out")
    return setCurrentUser(null)
  }

  const deleteRecipeProtectedIndex = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id)
    setRecipes(updatedRecipes)
    alert("deleted")
  }

  const createRecipe = (recipe) => {
    console.log(recipe)
  }


  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<RecipeIndex recipes={recipes} />} />
          <Route path='/recipe/:id' element={<RecipeShow recipes={recipes}/>} />
          <Route path='/editrecipe/:id' element={<RecipeEdit />} />
          <Route path='/newrecipe' element={<RecipeNew createRecipe={createRecipe} />} />
          <Route path='/myrecipes' element={<ProtectedIndex currentUser={currentUser} recipes={recipes} deleteRecipeProtectedIndex={deleteRecipeProtectedIndex}/>} />
          <Route path='/signup' element={<SignUp signup={signup} />} />
          <Route path='/login' element={<SignIn login={login} />} />
          <Route path='/meetus' element={<Developers />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
       </Routes>
      <Footer />
    </>
  );
}

export default App;
