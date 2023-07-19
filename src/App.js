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

function App() {
  return (
    <>
      <Header />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<RecipeIndex />} />
          <Route path='/recipe/:id' element={<RecipeShow />} />
          <Route path='/editrecipe/:id' element={<RecipeEdit />} />
          <Route path='/newrecipe' element={<RecipeNew />} />
          <Route path='/myrecipes' element={<ProtectedIndex />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
       </Routes>
      <Footer />
    </>
  );
}

export default App;
