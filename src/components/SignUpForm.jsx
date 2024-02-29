import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../Schemas';

const initialValues = {
	name: '',
	email: '',
	password: '',
};

const SignUpForm = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues,
		validationSchema: signUpSchema,
		onSubmit: async values => {
			try {
				console.log('Form values:', values);

				let result = await fetch('http://localhost:5000/register', {
					method: 'POST',
					body: JSON.stringify(values),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (!result.ok) {
					throw new Error(`HTTP error! Status: ${result.status}`);
				}

				result = await result.json();
				console.log('API response:', result);

				localStorage.setItem('user', JSON.stringify(result));

				navigate('/');
			} catch (error) {
				console.error('Fetch error:', error);
			}
		},
	});

	useEffect(() => {
		const auth = localStorage.getItem('user');
		if (auth) {
			navigate('/');
		}
	});

	return (
		<div style={{ marginLeft: '35%', marginTop: 60 }}>
			<h1 style={{ marginLeft: 90, color: 'orange' }}>Registration</h1>
			<input
				className='input-box'
				type='text'
				placeholder='Enter a name'
				name='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			{formik.errors.name && formik.touched.name ? (
				<p className='form-error'>{formik.errors.name}</p>
			) : null}

			<input
				className='input-box'
				type='text'
				placeholder='Enter an email'
				name='email'
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			{formik.errors.email && formik.touched.email ? (
				<p className='form-error'>{formik.errors.email}</p>
			) : null}
			<input
				className='input-box'
				type='password'
				placeholder='Enter a password'
				name='password'
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			{formik.errors.password && formik.touched.password ? (
				<p className='form-error'>{formik.errors.password}</p>
			) : null}
			<button
				type='button'
				onClick={formik.handleSubmit}
				className='signup-button'>
				Sign Up
			</button>
		</div>
	);
};

export default SignUpForm;
