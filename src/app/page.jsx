import Image from 'next/image'
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero"
import Aboutme from "../components/sections/Aboutme"
import Portfolio from "../components/sections/Portfolio"


export default function Home() {
  return (

    <div>
      <Hero />
      <Aboutme />
      <Portfolio />
    </div>




  )
}
