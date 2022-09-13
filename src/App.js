import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Greeting } from './components/Greeting';

function App() {
  return (
    <>
      <nav>
        <Link to="/"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
