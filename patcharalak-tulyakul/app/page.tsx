import About from "./about/page";
import Projects from "./projects/page"
import Certificates from "./certificates/page"

export default function Home() {
  return (
     <div>
      <About /> 
      <Projects />
      <Certificates />
    </div>
  );
}
