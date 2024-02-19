import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './components/Home.jsx';
import { useEffect, useState } from 'react';
import { socket } from './socket';

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
      <SocketSetup />
      <RouterProvider router={router} />
    </div>
  );
};

export default App
