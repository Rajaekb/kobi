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
		<form class="p-6 flex flex-col justify-center">
			<div class="flex flex-col">
				<label for="name" class="hidden">Full Name</label>
				<input type="name" name="name" id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
			</div>

			<div class="flex flex-col mt-2">
				<label for="email" class="hidden">Email</label>
				<input type="email" name="email" id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
			</div>

			<div class="flex flex-col mt-2">
				<label for="tel" class="hidden">Number</label>
				<input type="tel" name="tel" id="tel"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
			</div>

			<button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
				Submit
			</button>
		</form>


	);
};

export default ContactForm2;