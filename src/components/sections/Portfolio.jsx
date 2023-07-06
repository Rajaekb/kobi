"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from '../utils/CustomText';

export default function Portfolio() {

    const works = [
        { id: 1, title: "Home", img: "", url: "/" },
        { id: 2, title: "About", img: "", url: "/about" },
        { id: 3, title: "Portfolio", img: "", url: "/portfolio" },
        { id: 4, title: "Blog", img: "", url: "/blog" },
        { id: 5, title: "Contact", img: "", url: "/contact" },
        { id: 6, title: "Dashboard", img: "", url: "/dashboard" },
    ]

    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='h-screen flex flex-col gap-5 justify-center items-center'>

            <TypingText title="Portfolio" />

            <motion.p
                variants={textVariant(0.5)}

                className='max-w-5xl text-2xl font-light text-gray-400  '>
                Welcome to my portfolio! Here, you will find a showcase of some of the projects I have worked on as a Full Stack and Front End Developer. These projects reflect my passion for creating exceptional user experiences and my dedication to delivering high-quality web applications.  </motion.p>






        </motion.div>
    )
}
