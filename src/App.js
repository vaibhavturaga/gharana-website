// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">Gharana Ventures</div>
          <div className="navbar-menu">
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#team">Team</a>
<a href="mailto:vaibhav@gharana.vc" className="nav-button">Get in Touch</a>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section className="hero">
  <div className="container">
    <div className="hero-flex">
      <div className="hero-content">
        <h1>Partnering with <span className="highlight">Visionary Founders</span></h1>
        <p className="hero-subtitle">Gharana Ventures is an early-stage investment firm that invests $5,000 to $30,000 checks across sectors.</p>
        <div className="hero-buttons">
          <a href="#team" className="primary-button">Our Team</a> 
          <a href="#approach" className="secondary-button">Our Approach</a> 
        </div>
      </div>
      <div className="logo-showcase">
        <div className="logo-container">
          <img src={require('./assets/images/Gharana.jpeg')} alt="Gharana Ventures Logo" className="hero-logo" />
        </div>
      </div>
    </div>
  </div>
  <div className="hero-backdrop"></div>
</section>


      {/* Stats Section
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">$500M+</span>
              <span className="stat-label">Assets Under Management</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">75+</span>
              <span className="stat-label">Portfolio Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Successful Exits</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2014</span>
              <span className="stat-label">Founded</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2>Building the Next Generation of Market Leaders</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                At Gharana Ventures, we partner with exceptional founders at the early stages 
                of their journey. We believe in empowering visionaries who are solving complex 
                challenges across various industries through innovation and bold thinking.
              </p>
              <p>
                Our team brings operational experience, technical expertise, and 
                a vast network to help portfolio companies scale and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="approach">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2>How We Partner With Founders</h2>
          </div>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon">
                <span>01</span>
              </div>
              <h3>Capital</h3>
              <p>We provide the financial resources needed to scale, investing $5k - $30k checks across sectors.</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">
                <span>02</span>
              </div>
              <h3>Expertise</h3>
              <p>Our partners have built multiple companies, offering first-hand operational guidance on your journey.</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">
                <span>03</span>
              </div>
              <h3>Network</h3>
              <p>Access our extensive network of industry experts, potential customers, and strategic partners to accelerate growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2>Companies We've Backed</h2>
          </div>
          <div className="portfolio-filter">
            <button className="filter-button active">All</button>
            <button className="filter-button">Technology</button>
            <button className="filter-button">Healthcare</button>
            <button className="filter-button">Sustainability</button>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <h3>NeuralTech</h3>
                <p className="portfolio-category">AI & Machine Learning</p>
                <p>Revolutionizing enterprise decision-making through advanced predictive analytics.</p>
                <a href="#" className="portfolio-link">Learn More →</a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <h3>MedGenomics</h3>
                <p className="portfolio-category">Healthcare</p>
                <p>Pioneering personalized medicine through genomic sequencing technology.</p>
                <a href="#" className="portfolio-link">Learn More →</a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <h3>GreenScale</h3>
                <p className="portfolio-category">Sustainability</p>
                <p>Building scalable solutions for carbon capture and sustainable energy storage.</p>
                <a href="#" className="portfolio-link">Learn More →</a>
              </div>
            </div>
          </div>
          <div className="portfolio-cta">
            <button className="primary-button">View All Portfolio Companies</button>
          </div>
        </div>
      </section> */}

<section id="team" className="team">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Our Team</span>
      <h2>Meet the team</h2>
    </div>
    <div className="team-grid">
      <div className="team-member">
        <div className="team-image-container">
          <img src={require('./assets/images/vish.jpeg')} alt="Vish Turaga" className="team-image" />
        </div>
        <h3>Vish Turaga</h3>
        <p className="team-title">Investor</p>
        <p className="team-bio">Vish is a seasoned technology leader with over 20 years of experience in the semiconductor and AI/ML industries at companies like Google and Intel.</p>
      </div>
      <div className="team-member">
        <div className="team-image-container">
          <img src={require('./assets/images/vaibhav.jpeg')} alt="Vaibhav Turaga" className="team-image" />
        </div>
        <h3>Vaibhav Turaga</h3>
        <p className="team-title">Investor</p>
        <p className="team-bio">Vaibhav is a former founder, and has a background in Software and GTM.</p>
      </div>
      <div className="team-member">
        <div className="team-image-container">
          <img src={require('./assets/images/gaurav.jpeg')} alt="Gaurav Turaga" className="team-image" />
        </div>
        <h3>Gaurav Turaga</h3>
        <p className="team-title">Investor</p>
        <p className="team-bio">Gaurav has a background in Finance, with experience at Coinbase and multiple venture backed startups.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials
      <section className="testimonials">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-quote">"Gharana Ventures has been more than just an investor. Their strategic guidance and network access have been instrumental in helping us scale from an idea to market leader."</div>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-details">
                <h4>Priya Mehta</h4>
                <p>Founder & CEO, NeuralTech</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header">
                <span className="section-tag">Contact</span>
                <h2>Get In Touch</h2>
              </div>
              <p>Ready to partner with us? We're always looking for ambitious founders building the next generation of transformative companies.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:team@gharana.vc">team@gharana.vc</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your venture"></textarea>
                </div>
                <button type="submit" className="primary-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Gharana Ventures</h3>
              <p>Investing in the Future of Innovation</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigate</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#approach">Approach</a></li>
                  <li><a href="#team">Team</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Social</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/gharana-ventures/" className="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Gharana Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;