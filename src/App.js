import './index.css';
// import Page1 from './pages/page1';
// import Page2 from './pages/page2';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Page3 from './pages/pages3';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Page2/>} />
          <Route path="/dentist" element={<Page1/>} /> */}
          <Route path="/pt" element={<Page3/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
