import { Outlet } from "react-router-dom"
import Footer from "./pages/Shared/Footer/Footer"
import NavBar from "./pages/Shared/NavBar/NavBar"
// import SummerCampSection from "./pages/Home/Home/SummerCampSection/SummerCampSection"

const Main = () => {
  return (
    <div>
      <NavBar />

      {/* <div className="pt-20">
        <SummerCampSection />
      </div> */}

      <h1
      // className="text-center pt-20"
      >
        {/* Welcome TO Summer Camp School */}
      </h1>

      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
