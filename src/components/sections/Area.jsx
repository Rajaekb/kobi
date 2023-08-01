"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from '../utils/CustomText';
import ReactLogo from '../../../public/React-icon.svg.png';
import NextLogo from '../../../public/next-logo.png';
import tailwind from '../../../public/tailwind.png';
import framermotion from '../../../public/framermotion.png';


const technologies = [
    {
        id: 1,
        logoUrl: ReactLogo,
        title: "React js",
        description: "React is my go-to JavaScript library for building interactive user interfaces. Whether it's crafting single-page applications or complex front-end solutions, I thrive on leveraging React's component-based architecture to deliver efficient and maintainable code."
    },
    {
        id: 2,
        logoUrl: NextLogo,
        title: "Next js",
        description: "Next.js is the framework I trust to build powerful and performant React applications. Its server-side rendering capabilities and static site generation open up possibilities for lightning-fast loading times and improved SEO, making it an integral part of my workflow."
    },
    {
        id: 3,
        logoUrl: tailwind,
        title: "Tailwind CSS",
        description: "With Tailwind CSS, I embrace a utility-first approach to crafting visually stunning designs. Its highly customizable and low-level utility classes enable me to create pixel-perfect layouts while maintaining a streamlined and intuitive development process."
    },
    {
        id: 4,
        logoUrl: framermotion,

        title: "Framer Motion",
        description: "Bringing motion and animations to life is where Framer Motion excels. I utilize this animation library to add delightful transitions and engaging user interactions, creating an enjoyable and seamless browsing experience."
    },

]
export default function Area() {
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='my-52 h-screen flex flex-col gap-12 justify-center items-center font-light text-gray-400  '>

            <TypingText title="My Area Of Expertise" />

            <motion.p
                variants={textVariant(0.5)}

                className='max-w-5xl text-2xl  '>
                As a passionate and dedicated developer, I specialize in creating dynamic and immersive web experiences using cutting-edge technologies. With a focus on React, Next.js, Tailwind CSS, and Framer Motion, I bring life to digital creations and build user interfaces that leave a lasting impression.

            </motion.p>

            <div className='grid grid-cols-2 gap-7  max-w-5xl'>
                {technologies.map((item, index) => (

                    <motion.div variants={fadeIn('up', 'spring', index * 0.8, 0.8)}
                        key={item.id} className='flex flex-col gap-5 border-b border-sky-500 justify-center  bg-transparent'>


                        <Image src={item.logoUrl} width={70} height={50} className='object-contain mx-auto z-10' />
                        <h3 className='mx-auto'>{item.title}</h3>
                        <p className='mx-5 z-10 mb-10 '>
                            {item.description}
                        </p>
                    </motion.div>
                ))}


            </div>




        </motion.div>
    )
}
