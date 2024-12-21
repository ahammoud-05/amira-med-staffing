import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import WhereService from './pages/WhereService';
import Footer from './components/Footer';
import { useState } from 'react';
import Modal from './components/Modal';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
      function toggleModal() {
          setIsModalOpen(!isModalOpen);
      }

  return (
    <div className="App">
      <Nav toggleModal={toggleModal} />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <Home />
      <AboutUs />
      <Services />
      <WhereService />
      <Footer />
    </div>
  );
}

export default App;
