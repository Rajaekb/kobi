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
		<form class="sm:p-6 mt-5 flex flex-col justify-center">
			<div class="flex flex-col">
				<label for="name" class="hidden">Full Name</label>
				<input type="name" name="name" id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
			</div>

			<div class="flex flex-col mt-2">
				<label for="email" class="hidden">Email</label>
				<input type="email" name="email" id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
			</div>

			<div class="flex flex-col mt-2">
				<label for="tel" class="hidden">Number</label>
				<input type="tel" name="tel" id="tel"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
			</div>

			<button type="submit" className="w-full bg-purple-900 p-2 w-24 mt-4 rounded-md text-white flex justify-center hover:font-bold duration-300 transition ease-in-out ">
				Submit
			</button>
		</form>


	);
};

export default ContactForm2;