import './App.css'
import heroImg from './assets/products/hero.jpg'
import image1 from './assets/products/image1.jpg'
import image2 from './assets/products/image2.jpg'
import image3 from './assets/products/image3.jpg'

const products = [
  {
    name: 'Eid Embroidered Suit',
    image: image1,
    category: 'Festive Collection',
    price: 'Request price',
    description: 'Elegant embroidered Pakistani outfit for Eid dinners, family events, and celebrations.',
  },
  {
    name: 'Velvet Formal Dress',
    image: image2,
    category: 'Formal Wear',
    price: 'Request price',
    description: 'Rich velvet styling with a boutique finish for weddings, parties, and special evenings.',
  },
  {
    name: 'Casual Printed Outfit',
    image: image3,
    category: 'Everyday Style',
    price: 'Request price',
    description: 'Comfortable, feminine casual wear for brunches, visits, and polished day-to-day looks.',
  },
]

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <h2>Zarah Stylez</h2>
        <div>
          <a href="#collection">Collection</a>
          <a href="#products">Products</a>
          <a href="#ordering">Order Request</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">New shopping layout is live</p>
            <h1>Shop Boutique Product Cards & Request Your Order</h1>
            <p className="hero-description">
              Browse real product cards for Pakistani outfits, pick the style you love,
              and send an order request so Zarah Stylez can confirm availability,
              sizing, pricing, and pickup or delivery details.
            </p>
            <div className="hero-actions">
              <a className="button-link" href="#products">View Product Cards</a>
              <a className="button-link ghost-link" href="#order-form">Open Order Form</a>
            </div>
            <div className="hero-highlights" aria-label="Ordering highlights">
              <span>No cart yet</span>
              <span>No online payment</span>
              <span>Inquiry only</span>
            </div>
          </div>

          <aside className="hero-feature-card" aria-label="Product and order preview">
            <div className="hero-card-header">
              <span>Product preview</span>
              <strong>3 styles ready to request</strong>
            </div>
            <div className="hero-mini-products">
              {products.map((product) => (
                <a className="hero-mini-product" href="#order-form" key={product.name}>
                  <img src={product.image} alt="" />
                  <div>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </div>
                </a>
              ))}
            </div>
            <p className="hero-form-preview">Choose a product, size, contact method, and notes in the new order request form.</p>
          </aside>
        </div>
      </section>

      <section id="collection" className="section collection-section">
        <p className="eyebrow">Fresh arrivals</p>
        <h2>Featured Collection</h2>
        <div className="cards">
          <div className="card">
            <span>Eid Collection</span>
            <p>Formal and festive outfits for special occasions.</p>
          </div>
          <div className="card">
            <span>Velvet Dresses</span>
            <p>Rich seasonal looks with soft texture and elegant detail.</p>
          </div>
          <div className="card">
            <span>Casual Wear</span>
            <p>Comfortable outfits for casual occasions and everyday style.</p>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <p className="eyebrow">Browse styles</p>
        <h2>Shop Product Cards</h2>
        <p className="section-intro">
          Choose a style you love, then send an order request so we can confirm
          availability, sizing, pricing, and pickup or delivery details.
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.category}</span>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span>{product.price}</span>
                  <a href="#order-form">Request Order</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="ordering" className="section ordering">
        <p className="eyebrow">Simple ordering</p>
        <h2>Request an Order</h2>
        <p className="section-intro">
          This form is for order inquiries only. No payment is collected online;
          we will contact you to confirm availability and next steps.
        </p>

        <div className="order-layout">
          <div className="steps">
            <div className="step">
              <h3>1. Pick a style</h3>
              <p>Browse the product cards and note the outfit you are interested in.</p>
            </div>

            <div className="step">
              <h3>2. Send details</h3>
              <p>Share your size, color preference, date needed, and contact information.</p>
            </div>

            <div className="step">
              <h3>3. Confirm</h3>
              <p>We will confirm availability, pricing, and order details before payment.</p>
            </div>
          </div>

          <form id="order-form" className="order-form">
            <div className="form-row">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />
            </div>

            <div className="form-row">
              <label htmlFor="contact-method">Contact method</label>
              <select id="contact-method" name="contact-method" defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>Facebook Messenger</option>
                <option>Phone call</option>
                <option>Text message</option>
                <option>Email</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="contact-info">Contact details</label>
              <input id="contact-info" name="contact-info" type="text" placeholder="Phone, email, or profile name" />
            </div>

            <div className="form-row">
              <label htmlFor="product">Product interested in</label>
              <select id="product" name="product" defaultValue="">
                <option value="" disabled>Select a product</option>
                {products.map((product) => (
                  <option key={product.name}>{product.name}</option>
                ))}
              </select>
            </div>

            <div className="form-row two-columns">
              <div>
                <label htmlFor="size">Preferred size</label>
                <input id="size" name="size" type="text" placeholder="S, M, L, XL, custom" />
              </div>
              <div>
                <label htmlFor="needed-by">Needed by</label>
                <input id="needed-by" name="needed-by" type="date" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="notes">Order notes</label>
              <textarea id="notes" name="notes" rows="5" placeholder="Color preference, occasion, delivery/pickup questions, or other details" />
            </div>

            <button type="button">Submit Request</button>
            <p className="form-note">
              Form submission is not connected yet. Please use it to prepare your
              details, then message us to complete the request.
            </p>
          </form>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="eyebrow">Questions?</p>
        <h2>Contact / Orders</h2>
        <p>Message us on Facebook to place an order or ask about availability.</p>

        <a className="button-link" href="https://www.facebook.com/zarastylez/" target="_blank" rel="noreferrer">
          Message us on Facebook
        </a>
      </section>
    </div>
  )
}

export default App
