import Feature from "@/components/feature/Feature";
import Services from "@/components/services/Services";


export default function Home() {
  return (
   <main className=" flex flex-col  gap-24">
    <Feature/>
    <Services/>
   </main>
  )
}
