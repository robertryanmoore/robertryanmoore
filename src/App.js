import Navbar from './components/NavBar'; // Adjust the path to the Navbar component file as needed
import AboutMe from './components/AboutMe';
import DigitalCV from './components/DigitalCV';

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
