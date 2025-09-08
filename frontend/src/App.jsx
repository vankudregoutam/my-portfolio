import './App.css';
import About from './components/About.jsx';
// import AnimCursor from './components/AnimCursor';
import Contact from './components/Contact.jsx';
import HireMe from './components/HireMe.jsx';
import NavBar from './components/NavBar.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      <NavBar />
      {/* <AnimCursor /> */}
      <main>
        <About />
        <Skills />
        <Services />
        <Projects />
        <HireMe />
        <Contact />
      </main>
    </>
  );
}

export default App;
