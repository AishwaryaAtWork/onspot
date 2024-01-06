import Feature from "@/components/feature/Feature";
import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";


export default function Home() {
  return (
   <main className=" flex flex-col  gap-20">
    <Feature/>
    <Services/>
    <Testimonial/>
   </main>
  )
}
