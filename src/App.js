import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ProgressBar from 'react-progressbar-on-scroll'

function App() {

  return (
    <>
      <ProgressBar height={10} color='#4A2FBD' position='bottom' gradient={true} gradientColor="violet" />
      <div id='App' className="App">
        <NavBar/>
        <Banner/>
        <Projects/>
        <Skills/>
        {/* <AboutMe/> */}
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
