import { Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './routes/HomePage';
import DirectoriesPage from './routes/DirectoriesPage.js';
import DirectoriePage from './routes/DirectoriePage.js';



// import ContactUs from './routes/ContactUs';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:courseID" element={<DirectoriesPage />} />
        <Route path="/:courseID/:directorieID" element={<DirectoriePage />} />

        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
