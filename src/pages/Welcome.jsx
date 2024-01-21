import React from 'react'
import { useEffect, useState } from 'react';
import Splash from '../component/Splash';
import Landing from '../component/Landing';

const Welcome=() => {
    const [showSplash, setShowSplash] = useState(true);
  
    useEffect(() => {
      const startUp = () => {
  
      const mainLogo = document.getElementById("mainLogo");
      const mantra = document.getElementById("mantra");
  
      mainLogo.classList.add("translate-y-[65vh]");
      mantra.classList.remove("opacity-0");
  
        setTimeout(() => {
          setShowSplash(false);
        }, 3000);
      };
      startUp();
    }, []);
  
    return (
      <>
        {showSplash ? (
          <Splash />
        ) : (
          <Landing />
        )}
      </>
    );
  };

export default Welcome