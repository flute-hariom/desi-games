import Navbar from "../components/Navbar"
import HomeScreen from "../components/HomeScreen"
import AboutUs from "../components/AboutUs"
import Features from "../components/Features"
import Contact from "../components/Contact"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeScreen/>
      <AboutUs/>
      <Features/>

      <Contact/>
      <main className="pt-16"> {/* padding-top to prevent content hiding under navbar */}
        {/* Your other components will go here */}
      </main>
    </>
  );
}