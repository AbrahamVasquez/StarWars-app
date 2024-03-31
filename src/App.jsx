import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Profile } from './components/Profile';
import Characters from './components/Characters';
import Planets from './components/Planets';
import Films from './components/Films';
import { auth } from './firebase';
import Vehicles from './components/Vehicles';
import { Layout } from './components/Layout';
import { FavoritesList } from './components/FavoritesList';
// import Sidebar from './components/Sidebar'; 

const App = () => {
  const userAuthenticated = () => {
    return auth.currentUser !== null;
  };

  // const location = useLocation();
  // const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <BrowserRouter>
    
     <Layout>
      <Routes>
        <Route path="/" element={userAuthenticated() ? <Navigate to="/home" /> : null}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="characters" element={<Characters />} />
            <Route path="planets" element={<Planets />} />
            <Route path="films" element={<Films />} />
            <Route path="starships" element={<Vehicles />} />
            <Route path="favorites" element={<FavoritesList />} />
        </Route>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;