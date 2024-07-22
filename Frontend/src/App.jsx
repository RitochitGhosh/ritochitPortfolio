import Topbar from "./components/Topbar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Topbar />
      <div className="relative top-[60px] lg:top-[100px] bg-[#f4f3f0] snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-100px)] scroll-smooth">
        <Intro className="snap-start h-screen-minus-70" />
        <Portfolio className="snap-start h-screen-minus-70" />
        <Work className="snap-start h-screen-minus-70" />
        <Testimonials className="snap-start h-screen-minus-70" />
        <Contact className="snap-start h-screen-minus-70" />
        <Footer className="snap-start h-screen-minus-70" />
      </div>
    </div>
  );
}
