import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { Certifications } from "./components/portfolio/Certifications";
import { Education } from "./components/portfolio/Education";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
