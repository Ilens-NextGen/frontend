function startUp(){
    const intro = document.getElementById("splash");
    const main = document.getElementById("main");
    const mainLogo = document.getElementById("mainLogo");
    const mantra = document.getElementById("mantra");
  
    mainLogo.classList.add("translate-y-[65vh]");
    mantra.classList.remove("opacity-0");
  
      setTimeout(() =>{
          intro.classList.add("hidden");
          main.classList.remove("hidden");
      }, 2000);
  }