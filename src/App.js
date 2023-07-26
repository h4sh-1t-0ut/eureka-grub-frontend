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

function App() {

  const [recipes, setRecipes] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  
  const url = "https://eureka-grub.onrender.com/"

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
    fetch(`${url}`)
      .then((response) => response.json())
      .then((payload) => {
        setRecipes(payload)
      })
      .catch((error) => console.log(error))
  }

  const deleteRecipeProtectedIndex = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id)
    setRecipes(updatedRecipes)
    alert("deleted")
  }

  const createRecipe = (recipe) => {
    console.log(recipe)
  }

  const updateRecipe = (recipe, id) => {
    console.log(recipe)
    console.log(id)
    alert("updated")
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
          <Route path='/recipes' element={<RecipeIndex recipes={recipes} />} />
          <Route path='/recipe/:id' element={<RecipeShow recipes={recipes}/>} />
          <Route path='/editrecipe/:id' element={<RecipeEdit recipes={recipes} updateRecipe={updateRecipe}/>} />
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
