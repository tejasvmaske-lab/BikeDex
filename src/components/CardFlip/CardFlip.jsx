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

            <p>
                BikeDex starts by understanding you, not just the motorcycle. 
                Your height, budget, experience level, riding style, and daily 
                usage help us create a profile that reflects how and where you actually ride.
            </p>

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

            <p>
                BikeDex looks beyond horsepower and top speed. It analyzes ergonomics, comfort, 
                accessibility, maintenance costs, touring capability, and real-world usability 
                to find motorcycles that truly fit your needs.
            </p>

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

            <p>
                Receive personalized recommendations tailored to your lifestyle, confidence level, 
                and riding habits. Explore multiple categories, compare alternatives, and discover 
                motorcycles that suit you—not just the bikes everyone else recommends.
            </p>

            <span>Find bikes that fit YOU.</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HowItWorksCards;