import React, { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Star, ChevronLeft, ChevronRight, Mail, BadgeCheck, X, Moon, Sun } from 'lucide-react'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import './product.css'

const product = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      {/* Announcement bar */}
      <div className="flyer">
        <div className="signup">signup and get 20%off to you first order. <a href="#">Sign Up Now</a></div>
        <X size={16} className="close" />
      </div>

      {/* Navbar */}
      <div className='navbar'>
        <div className="logo"><h1>SHOP.CO</h1></div>

        <div className="nav-links">
          <ul>
            <li><a href="#">Shop <span className="arrow">▾</span></a></li>
            <li><a href="#">On Sale</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Brands</a></li>
          </ul>
        </div>

        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <form><input type="text" placeholder="Search for products..." /></form>
        </div>

        <div className="icons">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <ShoppingCart size={22} />
          <User size={22} />
        </div>
      </div>

      {/* Hero */}
      <div className="hero">
        <div className="hero-text">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="shop-now">Shop Now</button>

          <div className="stats">
            <div><h2>200+</h2><p>International Brands</p></div>
            <div><h2>2,000+</h2><p>High-Quality Products</p></div>
            <div><h2>30,000+</h2><p>Happy Customers</p></div>
          </div>
        </div>
        <div className="hero-image"><img src='../../assets/hoodie.png' rel="image1"/></div>
      </div>

      {/* Brands strip */}
      <div className="brands">
        <span>VERSACE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>Calvin Klein</span>
      </div>

      {/* New Arrivals */}
      <section className="products-section">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <div className="product-grid">
          {[1, 2, 3, 4].map((_, i) => (
            <div className="product-card" key={i}>
              <div className="product-image"></div>
              <h3>Product Name</h3>
              <div className="rating">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span>4.5/5</span>
              </div>
              <div className="price">
                <span className="current">$000</span>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all">View All</button>
      </section>

      <hr className="divider" />

      {/* Top Selling */}
      <section className="products-section">
        <h2 className="section-title">TOP SELLING</h2>
        <div className="product-grid">
          {[1, 2, 3, 4].map((_, i) => (
            <div className="product-card" key={i}>
              <div className="product-image"></div>
              <h3>Product Name</h3>
              <div className="rating">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span>4.0/5</span>
              </div>
              <div className="price">
                <span className="current">$000</span>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all">View All</button>
      </section>

      {/* Browse by Dress Style */}
      <section className="dress-style">
        <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
        <div className="dress-grid">
          <div className="dress-box large"><h3>Casual</h3></div>
          <div className="dress-box large"><h3>Formal</h3></div>
          <div className="dress-box wide"><h3>Party</h3></div>
          <div className="dress-box wide"><h3>Gym</h3></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials-header">
          <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
          <div className="carousel-arrows">
            <ChevronLeft size={20} />
            <ChevronRight size={20} />
          </div>
        </div>
        <div className="testimonial-grid">
          {['Sarah M.', 'Alex K.', 'James L.'].map((name, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <div className="name"><span>{name}</span><BadgeCheck size={16} className="verified" /></div>
              <p>"Placeholder testimonial text goes here describing the customer's experience."</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS</h2>
        <div className="newsletter-form">
          <div className="email-input">
            <Mail size={16} />
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button>Subscribe to Newsletter</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <h1>SHOP.CO</h1>
          <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
          <div className="social-icons">
            <FaTwitter size={16} />
            <FaFacebook size={16} />
            <FaInstagram size={16} />
            <FaGithub size={16} />
          </div>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>FAQ</h4>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul>
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to - Blog</a></li>
            <li><a href="#">Youtube Playlist</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default product