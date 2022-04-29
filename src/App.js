import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Nav from './Components/Pages/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import Footer from './Components/Pages/Footer/Footer';
import ResetPass from './Components/Pages/ResetPass/ResetPass';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App " >
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/resetpass' element={<ResetPass></ResetPass>}></Route>
    </Routes>
    <ToastContainer></ToastContainer>
    <Footer></Footer>
    </div>
  );
}

export default App;
