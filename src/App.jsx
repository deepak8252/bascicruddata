import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './component/Header';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Notfound from './pages/Notfound';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import User from './users/User';
function App() {
  

 return(
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={ <About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/adduser' element={<AddUser/>}/>
    <Route path="/edituser/:edit" element={<EditUser />} />
    <Route exact path='/user/:id' element={<User/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  </BrowserRouter>
  
     
  </>
 )
}

export default App
