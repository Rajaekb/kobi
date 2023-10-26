"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from '../utils/CustomText';

const Hero = () => {

    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='  h-screen flex justify-center items-center '>
            <div id="column" className=' flex flex-col justify-center gap-6  mt-16'>
                <Image src="/kobi.jfif" alt="kobi" width={150} height={150} className='rounded-full grayscale object-fit self-center ' />
                <TypingText title="I'm a FullStack / Front End Developer." />


                <motion.p
                    variants={textVariant(1.5)}
                    id="desc" className=' mx-14 px-5 self-center text-md md:text-2xl font-light text-gray-400'>
                    I'm Using The Latest Javascript Technologies to Turn Your Idea Into Reality

                </motion.p>
                <div className='border-t-2 border-sky-500 w-[300px]  md:w-[500px] self-center'></div>
                <div className='flex gap-4 justify-center  '>
                    <a className="cursor-pointer" href='https://www.linkedin.com/in/kobi-rajae-06b60a174/' target='_blank'>
                        <Image alt="kobilinkedin" src="/3.png" width={30} height={30} />
                    </a>
                    <a className="cursor-pointer" href='https://github.com/Rajaekb' target='_blank'>

                        <Image alt="kobigithub" src="/5.png" width={30} height={30} />
                    </a>
                    <a className="cursor-pointer" href='https://www.instagram.com/rajae_kobi' target='_blank'>

                        <Image alt="kobifacebook" src="/2.png" width={30} height={30} />
                    </a>
                    <Image alt="kobifacebook" src="/1.png" width={30} height={30} />
                </div>
                <div className='flex justify-center gap-5 font-light text-gray-300'>
                    <button id="btnseework" className='anim-circle btn w-[80px] md:w-[120px] h-[80px] md:h-[120px]' ><h4 className='z-10'> My Works</h4> </button>

                    <button id="btnhireme" className='anim-circle btn  w-[80px] md:w-[120px] h-[80px] md:h-[120px]'><h4 className='z-10'>My Resume</h4></button>
                    <button id="btnhireme" className='anim-circle btn  w-[80px] md:w-[120px] h-[80px] md:h-[120px]'> <h4 className='z-10'>Hire  Me</h4>x</button>
                </div>

            </div>



        </motion.div>
    )
}
export default Hero;