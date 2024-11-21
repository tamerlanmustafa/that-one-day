import Home from './components/home/Home'
import NavBar from "./components/navbar/Navbar";
import About from './components/About/About';
import Contact from './Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import './styles/variables.scss'


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        {/* add props to home */}
        <Route path={"/"} element={ <Home/> } />
        <Route path="/about" element={<About />} />
        <Route path={"/contact"} element={ <Contact/> } />
      </Routes>
    </>
  )
}

export default App
 