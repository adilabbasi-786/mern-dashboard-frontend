import React from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm.jsx';
import PrivateComponent from './components/PrivateComponent.jsx';
import Login from './components/Login.jsx';
import AddProduct from './components/AddProduct.jsx';
import ProductList from './components/ProductList.jsx';
import UpdateProduct from './components/updateProduct.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route element={<PrivateComponent />}>
						<Route path='/' element={<ProductList />} />
						<Route path='/add' element={<AddProduct />} />
						<Route path='/update/:id' element={<UpdateProduct />} />
						<Route path='/logout' element={<h1>Logout Prodcut component</h1>} />
						<Route
							path='/profile'
							element={<h1>Profile Prodcut component</h1>}
						/>
					</Route>

					<Route path='/signupform' element={<SignUpForm />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
