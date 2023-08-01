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
import { useState, useEffect } from 'react';

function App() {

  const [recipes, setRecipes] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [protectedRecipes, setProtectedRecipes] = useState([])
  
  const url = "https://eureka-grub.onrender.com"

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
        if (!response.ok) {
        throw Error(response.statusText)
      }
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  
  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      method: "DELETE"
    })
    .then(() => {
      localStorage.removeItem("token")
      setCurrentUser(null)
    })
    .catch(error => console.log("log out errors: ", error))
  }

  const readRecipe = () => {
    fetch(`${url}/recipes`)
      .then((response) => response.json())
      .then((payload) => {
        setRecipes(payload)
      })
      .catch((error) => console.log(error))
  }

  const createRecipe = (recipes) => {
    fetch(`${url}/recipes`, {
      body: JSON.stringify(recipes),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readRecipe())
    .catch((errors) => console.log("Recipe create errors:", errors))
  }
  
  const updateRecipe = (recipe, id) => {
    fetch(`${url}/recipes/${id}`, {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then(() => readRecipe())
      .catch((errors) => console.log("Recipe update errors:", errors))
  }

  const deleteRecipe = (id) => {
    fetch(`${url}/recipes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readRecipe())
      .catch((errors) => console.log("delete errors:", errors))
  }

  const deleteRecipeProtectedIndex = (id) => {
    console.log("Recipe id to delete:", id);
    const updatedProtectedRecipes = protectedRecipes.filter(
      (recipe) => recipe.id !== id
    )
    console.log("Updated protected recipes after deletion:", updatedProtectedRecipes)
    setProtectedRecipes(updatedProtectedRecipes)
    alert('Removed from List')
  }

  const addToProtectedIndex = (recipe) => {
    if (!protectedRecipes.some((recipes) => recipes.id === recipe.id)) {
      const recipeWithUserId = { ...recipe, user_id: currentUser.id }
      setProtectedRecipes((prevRecipes) => [...prevRecipes, recipeWithUserId])
      alert('Recipe added!')
    } else {
      alert('Recipe already exists!')
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    if (loggedInUser) {
      setCurrentUser(loggedInUser)
    }
    readRecipe()
  }, [])

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<RecipeIndex recipes={recipes} addToProtectedIndex={addToProtectedIndex} currentUser={currentUser}/>} />
          <Route path='/recipe/:id' element={<RecipeShow recipes={recipes} deleteRecipe={deleteRecipe}/>} />
          <Route path='/editrecipe/:id' element={<RecipeEdit recipes={recipes} updateRecipe={updateRecipe}/>} />
          <Route path='/newrecipe' element={<RecipeNew createRecipe={createRecipe} currentUser={currentUser}/>} />
          <Route path='/myrecipes' element={<ProtectedIndex currentUser={currentUser}
              protectedRecipes={protectedRecipes}
              deleteRecipeProtectedIndex={deleteRecipeProtectedIndex} />} />
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
