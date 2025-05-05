import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import { Works } from './pages/works';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
