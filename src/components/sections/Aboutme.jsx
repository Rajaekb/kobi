"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from '../utils/CustomText';

export default function AboutMe() {
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='h-screen flex flex-col gap-5 justify-center items-center'>

            <TypingText title="About Me" />

            <motion.p
                variants={textVariant(0.5)}

                className='max-w-5xl text-2xl font-light text-gray-400  '>
                I'm <span className='font-bold'>Kobi Rajae</span>, a Full Stack and Front End Developer with 2 years of experience specializing in <span className='font-bold'>React.js</span> and <span className='font-bold'>Next.js</span>. I excel at creating seamless user experiences and building robust web applications. I thrive in collaborative environments and adapt quickly to changing requirements. Continuous learning is important to me, and I stay updated with the latest web development advancements. I take pride in my attention to detail and creating clean, efficient code. Let's collaborate and create something remarkable together!
            </motion.p>






        </motion.div>
    )
}
