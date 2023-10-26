"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../components/utils/motion";
import { TypingText } from '../../components/utils/CustomText';
import Link from 'next/link';

export default function Services() {

    const services = [
        { id: 1, title: "Customised Web Application & plateform", url: "/webapps" },
        { id: 2, title: "Wordpress Website", url: "/wpsite" },
        { id: 3, title: "E-commerce Website", url: "/ecom" },
        { id: 4, title: "Booking Website", url: "/booking" },
        { id: 5, title: "Social Media Application", url: "/socialmedia" },
        { id: 6, title: "Education web application", url: "/education" },
        { id: 7, title: "Blog", url: "/blogwebsite" },



    ]
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            id="container" className='my-24 mx-auto border '>

            <TypingText title="Discover My Services" />


            <div className='grid grid-cols-4 gap-4 border'>
                {services.map((item) => (
                    <div className="flex justify-center border">
                        {item.title}
                    </div>

                ))}

            </div>








        </motion.div>
    )
}
