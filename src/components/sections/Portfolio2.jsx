"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from '../utils/CustomText';
import ReactLogo from '../../../public/React-icon.svg.png';
import NextLogo from '../../../public/next-logo.png';
import Link from 'next/link';


const myworks = [
    {
        id: 1,
        ImgUrl: '/appilab-v2.png',
        title: "Appilab Website V2 ",
        feature1: "Tailwind css and Framermotion for design , Rest Api and graphcms/graphql for the blog , Next-intl for internationalisation , Next-cloudinary for video integration.",

        link: "https://kobiappilab.vercel.app",
        codelink: ''
    },
    {
        id: 2,
        ImgUrl: '/p1.png',
        title: "Tribeup ",
        feature1: "Tailwind css and Framermotion for design , Rest Api and graphcms/graphql for the blog , Next-intl for internationalisation .",

        link: "https://tribeup.vercel.app",
        codelink: ''
    },

    {
        id: 3,
        ImgUrl: '/p2.png',
        title: "Appilab Website V1 ",
        feature1: "Next js 13 , Tailwind css and Framermotion for design ",
        link: "https://appilab.vercel.app",
        codelink: ''
    },

]
export default function Portfolio2() {
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            id="portfolio" className=' sm:mx-44 my-52  flex flex-col gap-12 justify-center items-center font-light text-gray-400  '>

            <TypingText title="My Works" />

            <motion.p
                variants={textVariant(0.5)}

                className='max-w-5xl text-md md:text-2xl font-light text-gray-400 mt-1  md:mt-5 '>
                As a passionate and dedicated developer, I specialize in creating dynamic and immersive web experiences using cutting-edge technologies. With a focus on React, Next.js, Tailwind CSS, and Framer Motion, I bring life to digital creations and build user interfaces that leave a lasting impression.
                <br />
                I'm thrilled to present my latest web project for Appilab website that seamlessly combines an engaging homepage with a dynamic blog. This project, meticulously crafted using Next.js and enriched with Tailwind CSS, embodies a commitment to modern web technologies and exceptional digital solutions.

            </motion.p>
            {myworks.map((item, index) => (
                <motion.div
                    key={item.id}
                    variants={fadeIn('up', 'spring', index * 0.8, 0.8)}
                    className='flex flex-col md:flex-row gap-5 justify-between  items-center'>
                    <div className='flex-1'>

                        <Image src={item.ImgUrl} width={500} height={500} className=' w-full rounded-xl' />
                    </div>

                    <div className=' px-2 text-sm sm:px-9 flex-1 border border-sky-500 rounded-xl py-[5%]'>
                        <h3 className='font-bold' >{item.title}</h3>
                        {item.description}
                        <p className='list-disc	'>
                            {item.feature1}

                        </p>
                        <a href={item.link} target='_blank' >
                            <h3 className='  bg-purple-900 p-2 w-24 mt-2 rounded-md text-white flex justify-center hover:scale-125 hover:font-bold duration-300 ease-in-out '>Visit</h3>
                        </a>





                    </div>




                </motion.div>
            ))}



        </motion.div>
    )
}
