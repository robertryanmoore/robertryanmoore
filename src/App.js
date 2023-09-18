import Navbar from './components/NavBar'; // Adjust the path to the Navbar component file as needed
import AboutMe from './components/AboutMe';


function App() {
  return (
      <div id="wrapper" className="fade-in">
        <header id="header"></header>
        <Navbar />
        <AboutMe />
      </div>
  );
}

export default App;
