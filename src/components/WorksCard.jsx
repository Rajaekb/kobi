import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motion'
import Image from 'next/image'

const WorksCard = ({ id, img, title, index, active, handleClick }) => {

    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
    flex item-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer
}`}
        >
            <Image
                src={img}
                alt={title}
                className=" w-full h-full object-cover rounded-xl"
            />
            {
                active !== id ? (
                    <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
                        {title}
                    </h3>
                ) : (
                    <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
                        <div>
                            <p>
                                test
                            </p>
                        </div>

                    </div>
                )
            }
        </motion.div>
    )
}

export default WorksCard