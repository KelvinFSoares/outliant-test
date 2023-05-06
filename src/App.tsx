import { Home } from './pages/Home';
import { Products } from './pages/Products';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
