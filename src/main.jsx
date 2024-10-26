import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './index.css';
import App from './App.jsx';
import NewPage from './NewPage.jsx'; // Import the new page component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={<App />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
