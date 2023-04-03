
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/Navbar/NavBar';
import { Banner } from './Components/Banner/Banner';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import Contact from './Components/Contacts/Contacts';



function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <Skills/>
      <Projects />
      <Contact/>

    </div>
  );
}

export default App;
