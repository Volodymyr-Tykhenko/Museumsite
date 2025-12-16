import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MuseumList from './components/MuseumList'
import MuseumDetail from './components/MuseumDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Link to="/" className="logo">
            <h1>🏛️ Museum Explorer</h1>
          </Link>
          <p className="tagline">Discover amazing museums around the world</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MuseumList />} />
            <Route path="/museum/:id" element={<MuseumDetail />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2024 Museum Explorer. Explore the world's greatest museums.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App

