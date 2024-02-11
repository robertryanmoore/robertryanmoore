import Navbar from './components/NavBar'; // Adjust the path to the Navbar component file as needed
import AboutMe from './components/AboutMe';
import DigitalCV from './components/DigitalCV';
import Freelance from './components/Freelance';

function App() {

  let Component

  switch (window.location.pathname) {
    case "/":
      Component = <AboutMe />
      break
    case "/aboutme":
      Component = <AboutMe />
      break
    case "/digitalcv":
      Component = <DigitalCV />
      break
    case "/freelance":
      Component = <Freelance />
     break
      
  }

  return (
    <div id="wrapper" className="fade-in">
      <header id="header"></header>
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
