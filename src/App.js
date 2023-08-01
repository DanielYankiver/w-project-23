import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Experience from './pages/Experience';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='nav'>
            <Link to="/">
              Home
            </Link>
            <Link to="/experience">
              Experience
            </Link>
            <Link to="/contact">
              Contact
            </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
