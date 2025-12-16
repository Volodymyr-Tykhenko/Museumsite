import './MuseumCard.css'

function MuseumCard({ museum }) {
  return (
    <div className="museum-card">
      <div className="museum-image-container">
        <img 
          src={museum.image} 
          alt={museum.name}
          className="museum-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/667eea/ffffff?text=' + encodeURIComponent(museum.name)
          }}
        />
        <div className="museum-category-badge">{museum.category}</div>
      </div>
      <div className="museum-card-content">
        <h2 className="museum-name">{museum.name}</h2>
        <p className="museum-location">📍 {museum.location}</p>
        <p className="museum-description">{museum.description}</p>
        <div className="museum-card-footer">
          <div className="museum-rating">
            <span className="star">⭐</span>
            <span>{museum.rating}</span>
          </div>
          <div className="museum-price">{museum.price}</div>
        </div>
      </div>
    </div>
  )
}

export default MuseumCard

