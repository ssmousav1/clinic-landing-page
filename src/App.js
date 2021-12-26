import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './index.css';
import Sidebar from "./components/navbar";
const Page1 = lazy(() => import('./pages/page1'));
const Page2 = lazy(() => import('./pages/page2'));
const Page3 = lazy(() => import('./pages/pages3'));
const Page4 = lazy(() => import('./pages/page4'));

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Router>
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Page2 />} />
              <Route path="/dentist" element={<Page1 />} />
              <Route path="/pt" element={<Page3 />} />
              <Route path="/lab" element={<Page4 />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
