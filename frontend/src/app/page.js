import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
 import Skills from "../components/Skill";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certificates from "../components/Certificates";




export default function Home() {
  return (
    <div >
     <Header/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Certificates/>
     <Contact/>
     <Footer/>

    </div>
  );
}
