import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Home';
import AnimationDemo from './AnimationDemo';
import ECommerceInfo from './ECommerceinfo';
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/animation" element={<AnimationDemo />} />
          <Route path="/ecommerce" element={<ECommerceInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
