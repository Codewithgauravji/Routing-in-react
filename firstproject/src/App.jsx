
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from './Components/login'
import Header from './Components/Header'
import Aboutus from './Components/Aboutus'
import Home from "./Components/Home"


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
