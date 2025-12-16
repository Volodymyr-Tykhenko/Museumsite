import { useParams, Link } from 'react-router-dom'
import { museums } from '../data/museums'
import './MuseumDetail.css'

function MuseumDetail() {
  const { id } = useParams()
  const museum = museums.find(m => m.id === parseInt(id))

  if (!museum) {
    return (
      <div className="museum-detail-container">
        <div className="not-found">
          <h2>Museum not found</h2>
          <Link to="/" className="back-link">← Back to all museums</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="museum-detail-container">
      <Link to="/" className="back-link">← Back to all museums</Link>
      
      <div className="museum-detail">
        <div className="museum-detail-image-container">
          <img 
            src={museum.image} 
            alt={museum.name}
            className="museum-detail-image"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x500/667eea/ffffff?text=' + encodeURIComponent(museum.name)
            }}
          />
          <div className="museum-detail-category-badge">{museum.category}</div>
        </div>

        <div className="museum-detail-content">
          <h1 className="museum-detail-name">{museum.name}</h1>
          <p className="museum-detail-location">📍 {museum.location}</p>
          
          <div className="museum-detail-info">
            <div className="info-item">
              <span className="info-label">Rating:</span>
              <span className="info-value">
                <span className="star">⭐</span> {museum.rating}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Hours:</span>
              <span className="info-value">{museum.hours}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Price:</span>
              <span className="info-value price">{museum.price}</span>
            </div>
          </div>

          <div className="museum-detail-description">
            <h2>About</h2>
            <p>{museum.description}</p>
          </div>

          <div className="museum-detail-actions">
            <button className="visit-btn">Plan Your Visit</button>
            <button className="share-btn">Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuseumDetail

