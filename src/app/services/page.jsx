"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../components/utils/motion";
import { TypingText } from '../../components/utils/CustomText';
import Services from './services';

export default function Page() {
    return (

        <>
            <Services />
        </>
    )
}
