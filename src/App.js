import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <Skills />
        <Services />
        <HireMe />
        <Contact />
      </main>
    </>
  );
}

export default App;
