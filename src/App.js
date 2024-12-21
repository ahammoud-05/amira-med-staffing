import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import WhereService from './pages/WhereService';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutUs />
      <Services />
      <WhereService />
      <Footer />
    </div>
  );
}

export default App;
