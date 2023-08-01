import Image from 'next/image'
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero"
import Aboutme from "../components/sections/Aboutme"
import Portfolio2 from "../components/sections/Portfolio2"
import Area from "../components/sections/Area"
import Contact from "../components/sections/Contact"


export default function Home() {
  return (

    <div>
      <Hero />
      <Aboutme />
      <Portfolio2 />
      <Area />
      <Contact />
    </div>




  )
}
