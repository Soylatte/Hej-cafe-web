import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Menu from './components/Menu';
import Regulars from './components/Regulars';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
      <div className='App'>
        <Router>
        <Heading />
        <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/regulars/' element={<Regulars />}/>
        <Route path='/' element={<Home />} />
        </Routes>
        </Router>
        <Footer />
        </div>
  )
}
export default App;
