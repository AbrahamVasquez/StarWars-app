import React from 'react'
import ReactDOM from 'react-dom/client'
import Characters from './components/Characters'
import Planets from './components/Planets'
import Films from './components/Films'
import Vehicles from './components/Vehicles'
import App from './App'
import {Navbar} from './components/Navbar'
import { FavoritesProvider } from './context/FavoritesContext'
// import { Test } from './components/Test'
// import Sidebar from './components/Sidebar'
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </FavoritesProvider>
)
