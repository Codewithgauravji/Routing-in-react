import React from 'react'
import Header from './Header'
import './About.css'

function Aboutus() {
  return (
    <div>
      <Header />
      <div className='about'>
      <div class="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to our company! We are dedicated to delivering the best products and services in the industry.
          Our team is passionate, innovative, and committed to excellence.
        </p>
        <p>
          Since our founding, we have worked tirelessly to build a reputation based on trust and quality.
          We value our customers, our team, and our commitment to making a positive impact on the community.
        </p>
      </div>

      <div class="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-notch solutions that exceed customer expectations. We strive to innovate,
          inspire, and lead in our field, ensuring that every interaction with our company leaves a lasting impression.
        </p>
      </div>

      <div class="about-section">
        <h2>Meet Our Team</h2>
        <div class="team">
          <div class="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div class="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 3" />
            <h3>Emily Brown</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Our Company. All Rights Reserved.</p>
      </footer>
    </div>
    </div>
  )
}

export default Aboutus