import Home from './components/home/Home'
import NavBar from "./components/navbar/Navbar";
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        {/* add props to home */}
        <Route path={"/"} element={ <Home/> } />
      </Routes>
    </>
  )
}

export default App
