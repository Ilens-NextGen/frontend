import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { useEffect, useState } from 'react';

import Welcome from "./pages/Welcome";
import Home from './pages/Home.jsx';
import Terms from './pages/Terms.jsx'
import Review from './pages/Review.jsx'
import Settings from './pages/Settings.jsx'
import Lost from "./component/Lost.jsx";


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
    const [homeScreenHeight, setHomeScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
      const updateHeight = () => {
        setHomeScreenHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', updateHeight);
  
      setHomeScreenHeight(window.innerHeight);

      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }, []);
  return (
    <div style={{ height: homeScreenHeight }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
