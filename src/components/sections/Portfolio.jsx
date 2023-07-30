'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from '../utils/motion';
import PortfolioCard from "../PortfolioCard";
import { TypingText } from "../utils/CustomText";

export const exploreWorlds = [
    {
        id: "world-1",
        imgUrl: '/p1.png',
        title: "Tribeup",
        description: "description of the project"
    },
    {
        id: "world-2",
        imgUrl: '/p2.png',
        title: "Appilab",
        description: "description of the project"
    },
    {
        id: "world-3",
        imgUrl: "/p1.png",
        title: "Bridge to Success",
        description: "description of the project"
    },
    {
        id: "world-4",
        imgUrl: "/p2.png",
        title: "Paradise Island",
        description: "description of the project"
    },
];
const Portfolio = () => {

    const [active, setActive] = useState('world-2');

    return (

        <section className="mx-8" id="Portfolio">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}

            >
                <div className='flex sm:mx-8 items-center justify-center'>

                    <TypingText title=" My Portfolio" />
                </div>

                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] mt-16 gap-5 ">
                    {exploreWorlds.map((world, index) => (
                        <PortfolioCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}

                        />

                    ))}

                </div>
            </motion.div>
        </section>
    )
}
    ;

export default Portfolio;
