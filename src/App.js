
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import About from './Components/About/About';
import Developer from './Components/Developer/Developer';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <Developer/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
