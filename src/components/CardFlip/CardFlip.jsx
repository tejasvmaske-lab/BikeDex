import "./CardFlip.css";

function HowItWorksCards() {
  return (
    <div className="cards-container">

      {/* Tell Us */}
      <div className="flip-card blue">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <div className="emoji">👤</div>
            <h2>Tell Us</h2>

            <div className="keywords">
              <p>Height</p>
              <p>Budget</p>
              <p>Experience</p>
            </div>
          </div>

          <div className="flip-card-back">
            <h2>Tell Us About Yourself</h2>

            <ul>
              <li>✓ Rider Height</li>
              <li>✓ Budget</li>
              <li>✓ Experience Level</li>
              <li>✓ Riding Style</li>
              <li>✓ Usage Pattern</li>
              <li>✓ Ownership Preference</li>
            </ul>

            <span>Your profile matters more than specs.</span>
          </div>

        </div>
      </div>

      {/* BikeDex AI */}
      <div className="flip-card purple">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <div className="emoji">🧠</div>
            <h2>BikeDex AI</h2>

            <div className="keywords">
              <p>Comfort</p>
              <p>Ownership</p>
              <p>Accessibility</p>
            </div>
          </div>

          <div className="flip-card-back">
            <h2>BikeDex AI</h2>

            <ul>
              <li>✓ Ergonomics</li>
              <li>✓ Comfort</li>
              <li>✓ Accessibility</li>
              <li>✓ Maintenance Cost</li>
              <li>✓ Touring Capability</li>
              <li>✓ Real-world Usage</li>
            </ul>

            <span>Beyond horsepower and top speed.</span>
          </div>

        </div>
      </div>

      {/* Discover */}
      <div className="flip-card orange">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <div className="emoji">🏍</div>
            <h2>Discover</h2>

            <div className="keywords">
              <p>Personalized</p>
              <p>Built For India</p>
              <p>Results</p>
            </div>
          </div>

          <div className="flip-card-back">
            <h2>Discover</h2>

            <ul>
              <li>✓ Personalized Matches</li>
              <li>✓ Similar Alternatives</li>
              <li>✓ Height-Friendly Options</li>
              <li>✓ Ownership Insights</li>
              <li>✓ Multiple Categories</li>
            </ul>

            <span>Find bikes that fit YOU.</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HowItWorksCards;