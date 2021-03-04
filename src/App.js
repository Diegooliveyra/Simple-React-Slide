import Slide from './Slide';
import './App.css';
import foto1 from './img/1.jpg';
import foto2 from './img/2.jpg';
import foto3 from './img/3.jpg';

function App() {
  const slides = [
    { id: 1, url: foto1 },
    { id: 2, url: foto2 },
    { id: 3, url: foto3 },
  ];

  return <Slide slides={slides} />;
}

export default App;
