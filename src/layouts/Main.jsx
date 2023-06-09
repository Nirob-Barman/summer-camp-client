import { Outlet } from "react-router-dom"
import Footer from "./pages/Shared/Footer/Footer"
import NavBar from "./pages/Shared/NavBar/NavBar"

const Main = () => {
  return (
    <div>
      <NavBar />

      <h1>Welcome TO Summer Camp School</h1>

      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
