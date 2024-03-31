// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = ({ isSidebarOpen, children }) => {

//     const location = useLocation(); //To avoid the sidebar to show on Login/Register pages
//     const showSideBar = location.pathname !== '/login' && location.pathname !== '/register';

//   return showSideBar ? (
//     <div className="container-fluid border border-primary bg-danger">
//       <div className="row">
//         <div className="col-md-3 col-lg-2 sidebar">
//           {/* <ul className="nav flex-column"> */}
//             <li className="nav-item"><Link className="nav-link" to="/characters">Characters</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/planets">Planets</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/films">Films</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/starships">Vehicles</Link></li>
//           </ul>
//         </div>
//         <div className="col-md-9 col-lg-10 main-content">
//           {children}
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default Sidebar;
