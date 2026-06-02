import './App.css'
import heroImg from './assets/products/hero.jpg'
import image1 from './assets/products/image1.jpg'
import image2 from './assets/products/image2.jpg'
import image3 from './assets/products/image3.jpg'

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <h2>Zarah Stylez</h2>
        <div>
          <a href="#collection">Collection</a>
          <a href="#gallery">Gallery</a>
          <a href="#ordering">Ordering</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section 
        className="hero"
        style={{ backgroundImage: `url(${heroImg})`}}
      >

        <div className="hero-overlay">
          <h1>Latest Pakistani Fashion for Women</h1>
        
        
        <p className="hero-description">
          Zarah Styles by Erum Mughal offers the very latest styles in clothing
          and accessories for women who stay on-trend and want affordability.
        </p>
        <button>Shop Now</button>
        </div>
      </section>

      <section id="collection" className="section">
        <h2>Featured Collection</h2>
        <div className="cards">
          <div className="card">Eid Collection
            <p>Formal and festive outfits for special occasions</p>
          
          </div>
          <div className="card">Velvet Dresses
            <p>Formal and festive outfits for special occasions.</p>
          
          </div>
          <div className="card">Casual Wear
            <p>Outfits for casual occasions.</p>
          </div>
          
        </div>
      </section>

      <section id="gallery" className="section">
        <h2>Gallery</h2>
        <p>Browse our latest styles and designs.</p>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={image1} alt="Pakistani outfit 1" />
            
          </div>

          <div className="gallery-item">
            <img src={image2} alt="Pakistani outfit 2" />

          </div>

          <div className="gallery-item">
            <img src={image3} alt="Pakistani outfit 3" />
          </div>
        </div>
      </section>

      <section id="ordering" className="section ordering">
        <h2>How Ordering Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Browse</h3>
            <p>Look through the collections and gallery to find styles you are interested in.</p>
          </div>

          <div className="step">
            <h3>2. Contact</h3>
            <p>Message the business about product availability and order details.</p>
          </div>

          <div className="step">
            <h3>3. Confirm</h3>
            <p>The business confirms availability, price, and order details.</p>
          </div>

          <div className="step">
            <h3>4. Payment</h3>
            <p>Payment details are shared after the order is confirmed.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact / Orders</h2>
        <p>Message us on Facebook to place an order or ask about availability.</p>
        
        <a href="https://www.facebook.com/zarastylez/" target="_blank" rel="noreferrer">
          <button>Message us on Facebook</button>
        </a>
      </section>
    </div>
  )
}

export default App