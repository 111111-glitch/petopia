import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/client/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/client/Products';
import Services from './components/client/Services';
import ProductPage from './components/client/ProductPage';
import ServicePage from './components/client/ServicePage';

import AdminNavBar from './components/admin/AdminNavBar';
import ProductPost from './components/admin/ProductPost';
import ServicePost from './components/admin/ServicePost';
import DeleteProduct from './components/admin/DeleteProduct';
import DeleteService from './components/admin/DeleteService';
import PatchProduct from './components/admin/PatchProduct';
import PatchService from './components/admin/PatchService';
import History from './components/admin/History';
import Cart from './components/client/Cart';
import AdminHome from './components/admin/AdminHome';

function App() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    console.log('Role from localStorage:', storedRole);
    setRole(storedRole || ''); // Set to '' if null
  }, []);

  return (
    <Router>
      {role === 'admin' ? <AdminNavBar /> : <Navbar />}
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:id' element={<ServicePage />} />
        <Route path='/adminHome' element={<AdminHome />} />
        <Route path='/productPost' element={<ProductPost />} />
        <Route path='/ServicePost' element={<ServicePost />} />
        <Route path='/deleteProduct' element={<DeleteProduct />} />
        <Route path='/deleteService' element={<DeleteService />} />
        <Route path='/history' element={<History />} />
        <Route path='/patchProduct' element={<PatchProduct />} />
        <Route path='/patchService' element={<PatchService />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
