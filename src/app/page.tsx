import Carousel from "@/components/Carousel";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <Welcome/>
      <Services/>
      <Clients/>
      <Contact/>
    </div>
  );
}
