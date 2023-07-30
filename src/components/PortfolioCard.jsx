'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from './utils/motion';



const PortfolioCard = ({ id, imgUrl, title, description, index, active, handleClick }) => (

  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[50px] h-[700px] transition-[flex] 
      duration-[0.7s] ease-out-flex cursor-pointer
      `}
    onHoverStart={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-contain object-cover  "
      width={700}
      height={1500}
    />

    {active !== id ? (

      <div>
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-gray-400  absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] ">

        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-gray-400">
          {title}
        </h2>
        <p className="font-light text-gray-400">
          {description}
        </p>


      </div>
    )}
  </motion.div>
);

export default PortfolioCard;
