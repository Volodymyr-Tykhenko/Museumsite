import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { museums, categories } from '../data/museums'
import MuseumCard from './MuseumCard'
import './MuseumList.css'

function MuseumList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredMuseums = useMemo(() => {
    return museums.filter(museum => {
      const matchesSearch = museum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           museum.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           museum.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || museum.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="museum-list-container">
      <div className="search-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search museums by name, location, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="results-info">
        <p>Found <strong>{filteredMuseums.length}</strong> {filteredMuseums.length === 1 ? 'museum' : 'museums'}</p>
      </div>

      {filteredMuseums.length === 0 ? (
        <div className="no-results">
          <p>No museums found matching your criteria.</p>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="museum-grid">
          {filteredMuseums.map(museum => (
            <Link key={museum.id} to={`/museum/${museum.id}`} className="museum-link">
              <MuseumCard museum={museum} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MuseumList

