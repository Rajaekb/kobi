import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from './utils/motion';


const ContactForm2 = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [form, setForm] = useState('')


	const handleSubmit = async (e) => {
		e.preventDefault();
		if (name && email && message) {
			setForm({ state: 'loading' })
			try {
				await axios.post('/api/contactapi', { name, email, message });
				//alert('Message sent successfully!');
				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setName('');
				setEmail('');
				setMessage('');
			} catch (error) {
				console.error(error);
				alert('An error occurred. Please try again later.');
				setForm({
					state: 'error',
					message: error.message,
				})
			}
		}
	};

	return (
		<form className="mt-10" onSubmit={handleSubmit}>

			<div className="grid gap-6 sm:grid-cols-2">
				<div className="relative z-0">
					<input required autoComplete="none"
						type="text"
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
					<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
				</div>
				<div className="relative z-0">
					<input required autoComplete="none"
						type="email"
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
					<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
				</div>
				<div className="relative z-0 col-span-2">
					<textarea
						required autoComplete="none"
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows="5"
						className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
					<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
				</div>
			</div>
			<motion.div
				variants={textVariant(1.1)}
				className='flex gap-5'>
				<div className='mt-5 border-[3px] border-white opacity-75 hover:opacity-100'>

					<input
						className="py-2 px-6 font-bold tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit" />

				</div>
				{form.state === 'loading' ? (
					<div className="mt-8">Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div className="mt-8"> Your Message Sent successfully</div>
				)}

			</motion.div>
		</form>

	);
};

export default ContactForm2;