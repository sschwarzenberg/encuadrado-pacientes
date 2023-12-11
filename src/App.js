import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import Navbar from './structure/Navbar';
import Sidebar from './structure/Sidebar';
import GlobalStyles from './GlobalStyles';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Professionals from './pages/Professionals';
import Documents from './pages/Documents';
import Professional from './pages/Professional/Professional';

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <div className="content" >
          <h1>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/professionals" element={<Professionals />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/professional" element={<Professional />} />
            </Routes>
          </h1>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;