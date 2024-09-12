import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <Welcome/>
      <Services/>
    </div>
  );
}
