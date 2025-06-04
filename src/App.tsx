import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Home';
import AnimationDemo from './AnimationDemo';
import WebsiteDevelopment from './WebsiteDevelopment';
import ECommerceInfo from './ECommerceinfo';
import LandingPages from './LandingPages';
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/animation" element={<AnimationDemo />} />
          <Route path="/ecommerce" element={<ECommerceInfo />} />
          <Route path="/WebsiteDevelopment" element={<WebsiteDevelopment />} />
          <Route path="/LandingPages" element={<LandingPages />} />


        </Routes>
      </Router>
    </div>
  );
};

export default App;
