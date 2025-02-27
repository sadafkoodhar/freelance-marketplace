import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content animate-fade-in">
          <h1>Welcome to FreelanceHub</h1>
          <p>Find the perfect freelancer for your project or get hired for your skills</p>
          <div className="cta-buttons">
            <Link 
              to="/projects" 
              className="btn btn-primary animate-bounce"
              data-tooltip="Browse available projects and start working"
            >
              Browse Projects
            </Link>
            <Link 
              to="/register" 
              className="btn btn-secondary animate-pulse"
              data-tooltip="Create your free account now"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* Buyer/Seller Section */}
      <div className="roles-section">
        <div 
          className="role-card buyer-card" 
          data-tooltip="Perfect for businesses and entrepreneurs looking to hire"
        >
          <div className="role-content">
            <h2>I want to Hire</h2>
            <p>Post projects and hire top freelancers</p>
            <ul>
              <li>✓ Post your projects</li>
              <li>✓ Get competitive bids</li>
              <li>✓ Pay safely</li>
              <li>✓ Get quality work</li>
            </ul>
            <Link 
              to="/register?type=buyer" 
              className="btn btn-primary"
              data-tooltip="Post your project and find talented freelancers"
            >
              Hire Now
            </Link>
          </div>
        </div>
        
        <div 
          className="role-card seller-card"
          data-tooltip="Ideal for freelancers looking for quality projects"
        >
          <div className="role-content">
            <h2>I want to Work</h2>
            <p>Find projects and grow your business</p>
            <ul>
              <li>✓ Find relevant projects</li>
              <li>✓ Show your portfolio</li>
              <li>✓ Get paid securely</li>
              <li>✓ Build your reputation</li>
            </ul>
            <Link 
              to="/register?type=seller" 
              className="btn btn-primary"
              data-tooltip="Create your portfolio and start earning"
            >
              Start Working
            </Link>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature animate-slide-up" data-tooltip="Share detailed requirements to get accurate proposals">
          <img src="/images/post-project.svg" alt="Post Projects" />
          <h3>Post Projects</h3>
          <p>Share your project requirements and get proposals from skilled freelancers</p>
        </div>
        <div className="feature animate-slide-up delay-1">
          <img src="/images/find-work.svg" alt="Find Work" />
          <h3>Find Work</h3>
          <p>Browse projects that match your skills and start earning</p>
        </div>
        <div className="feature animate-slide-up delay-2">
          <img src="/images/payment.svg" alt="Secure Payments" />
          <h3>Secure Payments</h3>
          <p>Safe and secure payment system for both clients and freelancers</p>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="user-avatar">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            </div>
            <p className="testimonial-text">"Found amazing developers for my startup. The quality of work is outstanding!"</p>
            <h4>John Smith</h4>
            <p className="user-role">Tech Entrepreneur</p>
          </div>
          <div className="testimonial-card">
            <div className="user-avatar">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            </div>
            <p className="testimonial-text">"Made over $50k in my first year as a freelancer here. Great platform!"</p>
            <h4>Sarah Johnson</h4>
            <p className="user-role">Web Developer</p>
          </div>
          <div className="testimonial-card">
            <div className="user-avatar">
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="User" />
            </div>
            <p className="testimonial-text">"The escrow system makes payments safe and hassle-free."</p>
            <h4>Mike Brown</h4>
            <p className="user-role">Digital Marketer</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card" data-tooltip="Join our growing community of freelancers">
          <h3 className="stat-number">10K+</h3>
          <p>Active Freelancers</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">15K+</h3>
          <p>Completed Projects</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">$2M+</h3>
          <p>Paid to Freelancers</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">4.8/5</h3>
          <p>Client Satisfaction</p>
        </div>
      </div>

      <div className="categories-section">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          <div className="category-card" data-tooltip="Click to browse Web Development projects">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>1,234 Projects</p>
          </div>
          <div className="category-card">
            <i className="fas fa-paint-brush"></i>
            <h3>Design</h3>
            <p>890 Projects</p>
          </div>
          <div className="category-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile Apps</h3>
            <p>567 Projects</p>
          </div>
          <div className="category-card">
            <i className="fas fa-bullhorn"></i>
            <h3>Marketing</h3>
            <p>432 Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 