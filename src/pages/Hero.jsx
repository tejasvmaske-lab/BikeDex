import LiquidEther from "../components/LiquidEther/LiquidEther.jsx";
import TextType from "../components/TextType/TextType.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Navbar_Button from "../components/Navbar_Button/Navbar_Button.jsx";
import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
        <Navbar />
        <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            color0="#5227FF"
            color1="#FF9FFC"
            color2="#B497CF"
        />
        </div>

        <div className="hero-content">
            <h1>Find Your Perfect</h1>
                <div className="hero-typing">
                    <TextType 
                        text={["Sport Bike", "Cruiser", 
                            "Commuter", "Street Bike",
                            "Cafe Racer", "Scrambler",
                            "Adventure", "Tourer"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={50}
                    />
                </div>
                <div className="description">
                    <h2>
                        Discover bikes that fit your body, budget, and riding
                    </h2>
                    <h2>
                        style not just the bikes everyone else recommends.
                    </h2>
                </div>
        </div>
    </section>
  );
}

export default Hero;