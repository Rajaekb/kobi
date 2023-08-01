"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from '../utils/CustomText';
import ReactLogo from '../../../public/React-icon.svg.png';
import NextLogo from '../../../public/next-logo.png';


const myworks = [
    {
        id: 1,
        ImgUrl: '/p1.png',
        title: "TribeUp Mobile Appication ",
        description: "React is my go-to JavaScript library for building interactive user interfaces. Whether it's crafting single-page applications or complex front-end solutions, I thrive on leveraging React's component-based architecture to deliver efficient and maintainable code."
    },
    {
        id: 2,
        ImgUrl: '/p2.png',
        title: "Appilab Web Site",
        description: "Next.js is the framework I trust to build powerful and performant React applications. Its server-side rendering capabilities and static site generation open up possibilities for lightning-fast loading times and improved SEO, making it an integral part of my workflow."
    },
    {
        id: 3,
        ImgUrl: '/p3.png',
        title: "Appilab Web Site",
        description: "With Tailwind CSS, I embrace a utility-first approach to crafting visually stunning designs. Its highly customizable and low-level utility classes enable me to create pixel-perfect layouts while maintaining a streamlined and intuitive development process."
    },
    {
        id: 4,
        ImgUrl: '/p4.png',
        title: "Framer Motion",
        description: "Bringing motion and animations to life is where Framer Motion excels. I utilize this animation library to add delightful transitions and engaging user interactions, creating an enjoyable and seamless browsing experience."
    },

]
export default function Portfolio2() {
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='my-52  flex flex-col gap-12 justify-center items-center font-light text-gray-400  '>

            <TypingText title="My Works" />

            <motion.p
                variants={textVariant(0.5)}

                className='max-w-5xl text-2xl  '>
                As a passionate and dedicated developer, I specialize in creating dynamic and immersive web experiences using cutting-edge technologies. With a focus on React, Next.js, Tailwind CSS, and Framer Motion, I bring life to digital creations and build user interfaces that leave a lasting impression.

            </motion.p>
            {myworks.map((item, index) => (
                <motion.div
                    key={item.id}
                    variants={fadeIn('up', 'spring', index * 0.8, 0.8)}
                    className='flex gap-5 justify-between  items-center max-w-5xl'>
                    <div className='flex-1'>

                        <Image src={item.ImgUrl} width={500} height={500} className=' w-full rounded-xl' />
                    </div>

                    <div className='flex-1 border border-sky-500 rounded-xl py-[5%]'>
                        <h3 className='mx-5' >{item.title}</h3>
                        <p className='mx-5'>{item.description}</p>
                    </div>




                </motion.div>
            ))}



        </motion.div>
    )
}
