import React from 'react'
import './index.css'

function AdGrid({ads}) {
  const handleShopNowClick = link => {
    window.open(link, '_blank')
  }

  return (
    <div className="ads-details">
      {ads.map(ad => (
        <div className="ads-card-container" key={ad.id}>
          <img className="image" src={ad.imageUrl} alt={ad.headline} />
          <p className="company-name">{ad.companyName}</p>
          <button onClick={() => handleShopNowClick(ad.shopLink)} type="button">
            {ad.CTA}
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdGrid
