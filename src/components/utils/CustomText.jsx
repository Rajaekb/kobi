
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from './motion';


export const TypingText = ({ title }) => (
  <motion.h1
    variants={textContainer}
    className='flex justify-center px-10  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-bold text-transparent  text-lg md:text-5xl'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.h1>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold sm:text-[64px]  text-[30px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);