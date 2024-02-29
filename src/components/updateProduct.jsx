import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [company, setCompany] = useState('');

	const params = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		getProductDetails();
	}, []);

	const getProductDetails = async () => {
		try {
			console.warn(params);
			let result = await fetch(`http://localhost:5000/product/${params.id}`);
			result = await result.json();
			console.warn(result);

			// Set the state with the retrieved data
			setName(result.name || '');
			setPrice(result.price || '');
			setCategory(result.category || '');
			setCompany(result.company || '');
		} catch (error) {
			console.error('Error fetching product details:', error);
		}
	};

	const updateProduct = async () => {
		console.log(name, price, category, company);
		let result = await fetch(`http://localhost:5000/product/${params.id}`, {
			method: 'Put',
			body: JSON.stringify({ name, price, category, company }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		result = await result.json();
		console.warn(result);
		navigate('/');
	};

	// const updateProduct = async () => {
	// 	console.log(name, price, category, company);

	// 	try {
	// 		let result = await fetch(`http://localhost:5000/product/${params.id}`, {
	// 			method: 'PUT', // Corrected to 'PUT'
	// 			body: JSON.stringify({ name, price, category, company }),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});

	// 		if (result.ok) {
	// 			result = await result.json();
	// 			console.warn(result);
	// 			navigate('/');
	// 		} else {
	// 			// Handle error response
	// 			console.error('Failed to update product. HTTP Status:', result.status);
	// 		}
	// 	} catch (error) {
	// 		console.error('An error occurred while updating the product:', error);
	// 	}
	// };

	return (
		<div className='product'>
			<h1 className='product1'>Update Product</h1>
			<input
				type='text'
				name=''
				placeholder='Enter product name'
				className='input-box'
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<input
				type='text'
				name=''
				placeholder='Enter product price'
				className='input-box'
				value={price}
				onChange={e => {
					setPrice(e.target.value);
				}}
			/>

			<input
				type='text'
				name=''
				placeholder='Enter product category'
				className='input-box'
				value={category}
				onChange={e => {
					setCategory(e.target.value);
				}}
			/>

			<input
				type='text'
				name=''
				placeholder='Enter product company'
				className='input-box'
				value={company}
				onChange={e => {
					setCompany(e.target.value);
				}}
			/>

			<button onClick={updateProduct} className='signup-button'>
				Update Product
			</button>
		</div>
	);
};

export default UpdateProduct;
