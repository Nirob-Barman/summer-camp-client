// import { Outlet } from "react-router-dom"
// import Footer from "./pages/Shared/Footer/Footer"
// import NavBar from "./pages/Shared/NavBar/NavBar"
// // import SummerCampSection from "./pages/Home/Home/SummerCampSection/SummerCampSection"

// const Main = () => {
//   return (
//     <div>
//       <NavBar />


//       {/* <div className="pt-20">
//         <SummerCampSection />
//       </div> */}

//       <h1
//       // className="text-center pt-20"
//       >
//         {/* Welcome TO Summer Camp School */}
//       </h1>

//       <Outlet />
//       <Footer />
//     </div>
//   )
// }

// export default Main;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Shared/Footer/Footer";
import NavBar from "./pages/Shared/NavBar/NavBar";

const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div toggleTheme={toggleTheme} className={isDarkTheme ? "dark-theme" : "light-theme"}>

      <NavBar />

      <div className="text-center">
        <button onClick={toggleTheme} className="pt-20 theme-toggle-btn">
          {/* Toggle Theme */}
        </button>
      </div>

      {/* Rest of your code */}
      <Outlet />



      <Footer />



    </div>
  );
};

export default Main;




