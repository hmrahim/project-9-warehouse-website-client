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
import UpdateCategorie from './Components/Pages/UpdateCategorie/UpdateCategorie';
import NotFound from './Components/Pages/NotFound/NotFound';
import Banner from './Components/Pages/Banner/Banner';
import MyOrder from './Components/Pages/MyOrder/MyOrder';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Blog from './Components/Pages/Blog/Blog';
import AddBlog from './Components/Pages/Blog/AddBlog';
import AllBlogs from './Components/Pages/Blog/AllBlogs';
import UpdateBlog from './Components/Pages/Blog/UpdateBlog';

function App() {
  return (
    <div className="App " >
    <Nav></Nav>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/resetpass' element={<ResetPass></ResetPass>}></Route>
      <Route path='/myitems' element={<MyOrder></MyOrder>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/details/:id' element={<ProductDetails></ProductDetails>}></Route>
      <Route path='/managestock' element={ <RequireAuth> <ManageStock></ManageStock> </RequireAuth>}>
        <Route path='products' element={<AllProducts></AllProducts>}></Route>
        <Route path='addproducts' element={<AddNewProduct></AddNewProduct>}></Route>
        <Route path='categories' element={<Categories></Categories>}></Route>
        <Route path='addcategorie' element={<AddNewCategorie></AddNewCategorie>}></Route>
        <Route path='updateproduct/:id' element={<UpdataProduct></UpdataProduct>}></Route>
        <Route path='updatecategorie/:id' element={<UpdateCategorie></UpdateCategorie>}></Route>
        <Route path='addblog' element={<AddBlog></AddBlog>}></Route>
        <Route path='allblogs' element={<AllBlogs></AllBlogs>}></Route>
        <Route path='updateblog/:id' element={<UpdateBlog></UpdateBlog>}></Route>
        
         </Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <ToastContainer></ToastContainer>
    <Footer></Footer>
    </div>
  );
}

export default App;
