import {Navbar} from "./Navbar"
import { useLocation } from "react-router";
import { Footer } from "../pages/Footer";


export const Layout = ( {children} ) => {

  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);
  const showFooter = location.pathname === '/register' || location.pathname === '/login' || location.pathname === '/profile' || location.pathname === '/favorites';

  return (
      <div>
        {showNavbar && <Navbar />}

        <div className="container">
            {children}
        </div>
        {!showFooter && <Footer />}
    </div>
  )
}
