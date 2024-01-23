// import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

import Welcome from "./pages/Welcome";
import Home from './pages/Home.jsx';
import Terms from './pages/Terms.jsx'
import Review from './pages/Review.jsx'
import Settings from './pages/Settings.jsx'
import Lost from "./component/Lost.jsx";
import SocketSetup from "./component/Socket.jsx";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Welcome />
  },
  {
    path:"/home",
    element: <Home />
  },
  {
    path:"/settings",
    element: <Settings />
  },
  {
    path:"/t&c",
    element: <Terms />
  },
  {
    path:"/reviews",
    element: <Review />
  },
  {
    path:"*",
    element: <Lost />
  },
]);
const App=() => {
  return (
    <div>
      <SocketSetup />
      <RouterProvider router={router} />
    </div>
  );
};

export default App
