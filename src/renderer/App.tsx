import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Startup from './pages/startup';
import Main from './pages/main';
import HomeSeaction from './pages/homeSeaction';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/home" element={<Main />} >
        <Route  path="" element={<HomeSeaction/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
