import About from "./components/about";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Service from './components/service';

import Contact from "./components/contact";
import Skills from "./components/skill";


export default function Home() {
  return (
   <div>
 <Hero/>
 <About/>
 <Service/>
 <Skills/>
 <Portfolio/>
 <Contact/>
   </div>
  );
}