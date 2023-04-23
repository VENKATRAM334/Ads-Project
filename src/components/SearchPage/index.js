import React, {useState} from 'react'
import AdGrid from '../AdGrid'
import './index.css'

const ads = [
  {
    id: 1,
    companyName: "Levi's",
    primaryText: 'We like where you’re going with this.',
    headline: "Relaxed Fit Men's Jeans",
    description: '',
    CTA: 'Shop Now',
    imageUrl:
      'https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing',
    shopLink: 'http://levis.com/',
  },
  {
    id: 2,
    companyName: 'Puma',
    primaryText: 'We like where you’re going with this.',
    headline: "Relaxed Fit Men's Jeans",
    description: '',
    CTA: 'Shop Now',
    imageUrl:
      'https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing',
    shopLink: 'http://puma.com/',
  },
  {
    id: 3,
    companyName: 'Salesforce',
    primaryText:
      'The world’s leading CRM is ready to help you simplify the business part of your small business.',
    headline: 'Salesforce for Small Business',
    description: '',
    CTA: 'Sign Up',
    imageUrl:
      'https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing',
    shopLink: 'http://salesforce.com/',
  },
  {
    id: 4,
    companyName: 'Adidas',
    primaryText: 'We like where you’re going with this.',
    headline: "Relaxed Fit Men's Jeans",
    description: '',
    CTA: 'Shop Now',
    imageUrl:
      'https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing',
    shopLink: 'http://adidas.com/',
  },
  {
    id: 5,
    companyName: 'Nike',
    primaryText: 'We like where you’re going with this.',
    headline: "Relaxed Fit Men's Jeans",
    description: '',
    CTA: 'Shop Now',
    imageUrl:
      'https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing',
    shopLink: 'http://nike.com/',
  },

  {
    id: 6,
    companyName: 'Cotopaxi',
    primaryText:
      'Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.',
    headline: 'Made With Recycled Plastic',
    description: 'Shop Back to School',
    CTA: 'Shop Now',
    imageUrl:
      'https://drive.google.com/open?id=17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq&authuser=rohit103%40gmail.com&usp=drive_fs',
    shopLink: 'http://cotopaxi.com/',
  },
  {
    id: 7,
    companyName: 'Netflix',
    primaryText:
      'The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.',
    headline:
      "Norm Macdonald's Nothing Special gives one last dose of the late comic",
    description: '',
    CTA: 'Learn More',
    imageUrl:
      'https://drive.google.com/file/d/17o3sgN_A6GKPwgZsEpneBYODhRs9tKga/view?usp=sharing',
    shopLink: 'http://netflix.com/',
  },
  {
    id: 8,
    companyName: 'Colgate',
    primaryText: 'Visit Colgate.com, discover the new products and shop now!',
    headline: 'Colgate Hexagonal Metal Frame With Crystal Studs',
    description: '',
    CTA: 'Order Now',
    imageUrl:
      'https://drive.google.com/file/d/17sz2UuPNcoHXz-U27EYcwmhkI1ZQUmPZ/view?usp=sharing',
    shopLink: 'http://colgate.com/',
  },

  {
    id: 9,
    companyName: 'Valentino',
    primaryText: 'Visit Valentino.com, discover the new products and shop now!',
    headline: 'Valentino Hexagonal Metal Frame With Crystal Studs',
    description: '',
    CTA: 'Order Now',
    imageUrl:
      'https://drive.google.com/file/d/17sz2UuPNcoHXz-U27EYcwmhkI1ZQUmPZ/view?usp=sharing',
    shopLink: 'http://valentino.com/',
  },
  {
    id: 10,
    companyName: 'Curology',
    primaryText:
      'Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.',
    headline: '',
    description: 'Start your free trial today.',
    CTA: 'Get Started',
    imageUrl:
      'https://drive.google.com/file/d/17w7PlW8JvU2Qz9b9rgdS81KjrnulvFQx/view?usp=sharing',
    shopLink: 'http://curology.com/',
  },
  {
    id: 11,
    companyName: 'Purple',
    primaryText:
      'Say ‘goodnight’ to sleeping hot with Purple products—designed to dissipate heat.',
    headline: 'Cooler Summers Start Here',
    description: 'Shop Purple products, designed to help you sleep cool.',
    CTA: 'Order Now',
    imageUrl:
      'https://drive.google.com/file/d/17vrlQMchymHqlN35p4os23jYqQjFiUNq/view?usp=sharing',
    shopLink: 'http://purple.com/',
  },
]

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
    const filteredAds = ads.filter(
      ad =>
        ad.companyName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        ad.primaryText
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        ad.headline.toLowerCase().includes(event.target.value.toLowerCase()) ||
        ad.description.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    setSearchResults(filteredAds)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for ads..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="adgrid-conatiner">
        <AdGrid ads={searchResults} />
      </div>
    </div>
  )
}

export default SearchPage
