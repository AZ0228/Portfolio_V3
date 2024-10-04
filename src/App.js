import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import './assets/Fonts/fonts.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
