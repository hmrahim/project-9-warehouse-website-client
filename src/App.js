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
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import ManageStock from './Components/Pages/ManageStock/ManageStock';
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import AddNewProduct from './Components/Pages/AllProducts/AddNewProduct';
import Categories from './Components/Pages/Categories/Categories';
import AddNewCategorie from './Components/Pages/Categories/AddNewCategorie';
import UpdataProduct from './Components/Pages/UpdataProduct/UpdataProduct';
function App() {
  return (
    <div className="App " style={{height:"100vh"}} >
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/resetpass' element={<ResetPass></ResetPass>}></Route>
      <Route path='/managestock' element={ <RequireAuth> <ManageStock></ManageStock> </RequireAuth>}>
        <Route path='products' element={<AllProducts></AllProducts>}></Route>
        <Route path='addproducts' element={<AddNewProduct></AddNewProduct>}></Route>
        <Route path='categories' element={<Categories></Categories>}></Route>
        <Route path='addcategorie' element={<AddNewCategorie></AddNewCategorie>}></Route>
        <Route path='updateproduct/:id' element={<UpdataProduct></UpdataProduct>}></Route>
        
         </Route>
    </Routes>
    <ToastContainer></ToastContainer>
    <Footer></Footer>
    </div>
  );
}

export default App;
