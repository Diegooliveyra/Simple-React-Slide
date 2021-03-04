import Slide from './Slide';
import './App.css';

function App() {
  const slides = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ];

  return <Slide slides={slides} />;
}

export default App;
