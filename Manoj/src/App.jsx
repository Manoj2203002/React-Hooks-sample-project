// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Movies/Movieproject/Header';
import Footer from './Movies/Movieproject/Footer';
import Home from './Movies/Movieproject/Home';
import MovieDetail from './Movies/Movieproject/MovieDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
