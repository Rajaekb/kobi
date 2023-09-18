"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../components/utils/motion";
import { TypingText } from '../../components/utils/CustomText';

export default function Aboutme() {
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='my-24 mx-auto'>

            <TypingText title="About Me" />
            <br />
            <motion.p
                variants={textVariant(0.5)}

                className='max-w-4xl text-xl font-light text-gray-400 mx-auto '>
                Hello!   I'm <span className='font-bold'>Kobi Rajae</span>,  , a passionate and dedicated Full Stack and Front End Developer with two years of experience specializing in React.js and Next.js.I thrive on crafting seamless user experiences and creating robust web applications that push the boundaries of modern technology.<br /><br />

                Throughout my journey as a developer, I have honed my skills in developing scalable and efficient web solutions. My expertise lies in utilizing React.js and Next.js to build dynamic and interactive front-end interfaces, while seamlessly integrating them with powerful back-end systems. I possess a strong understanding of HTML, CSS, and JavaScript, and I'm proficient in utilizing various libraries and frameworks to expedite the development process and deliver high-quality products.<br /><br />

                In addition to my technical skills, I am a firm believer in the power of collaboration and teamwork. I thrive in an environment where I can actively contribute my ideas and work closely with cross-functional teams to bring projects to fruition. I am comfortable working in an agile development environment, where I can adapt quickly to changing requirements and deliver exceptional results within tight deadlines.<br /><br />

                One aspect that sets me apart is my commitment to continuously expanding my knowledge and staying up to date with the latest advancements in web development. I am always eager to explore new technologies, tools, and techniques that can enhance my skill set and allow me to tackle complex challenges with confidence.<br /><br />

                I take pride in my attention to detail and my ability to create clean, well-documented code that is both efficient and maintainable. I strive for excellence in every project I undertake, and I am constantly seeking opportunities to improve my skills and grow as a developer.<br /><br />


                Thank you for taking the time to learn a little bit about me. I am excited to contribute my skills and expertise to your next project. Let's collaborate and create something remarkable together!
            </motion.p>






        </motion.div>
    )
}
