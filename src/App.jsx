// import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import { useEffect, useState } from 'react';
import { socket } from './socket';

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

  useEffect(() => {
    function onConnect() {
      console.log('Connected to server');
    }

    function onServerID(serverID) {
      console.log(`Connected to server ${serverID}`);
    }

    function onDisconnect() {
      console.log('Disconnected from server');
    }

    function onError(err) {
      console.error(err);
    }


    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('server-id', onServerID);
    socket.on('error', onError);
    socket.on('connect_error', onError);
    socket.on('connect_timeout', onError);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('server-id', onServerID);
      socket.off('error', onError);
      socket.off('connect_error', onError);
      socket.off('connect_timeout', onError);
    };
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
