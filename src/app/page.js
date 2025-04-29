import Image from "next/image";
import ParticlesJS from "../app/particuleback/particles";
import Header from "../components/Header";
import styles from "../app/animation/animation.css";
import About from "../components/Card";
import DerniersProjets from "../components/Procard";
import Footer from "../components/Footer";
import Parallax from "../app/para/para";
import Slider from "../app/carouselle/Carou";
import WavyText from "../components/waywe";
import WavyText2 from "../components/waywe2";
import WavyText3 from "../components/waywe3";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesJS />
      <Header />
      <div>
        <Parallax />
      </div>
      <div className="z-10">
        <h1 className="flex flex-col items-center text-6xl font-bold mt-5">
          <WavyText />
        </h1>
        <div className="flex justify-center mt-10">
          <About />
        </div>
        <section>
          <h1 className="flex flex-col items-center text-6xl font-bold mt-20">
            <WavyText2 />
          </h1>
          <Slider />
        </section>
        <div className="mt-30">
          <h1 className="flex flex-col items-center text-6xl font-bold mt-20">
            <WavyText3 />
          </h1>
          <DerniersProjets />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
