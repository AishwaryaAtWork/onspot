import Contact from "@/components/contact/Contact";
import Feature from "@/components/feature/Feature";
import Footer from "@/components/footer/Footer";
import Memories from "@/components/memories/Memories";

import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";
import Tour from "@/components/tour/Tour";
export default function Home() {
  return (
   <main className=" flex flex-col ">
    <Feature/>
    <Services/>
    <Tour/>
    <Memories/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </main>
  )
}
