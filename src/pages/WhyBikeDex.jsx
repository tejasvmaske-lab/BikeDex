import MagicBento from "../components/Magic_Bento/MagicBento.jsx";
import "./WhyBikeDex.css";

function WhyBikeDex() {
    return (
        <section className="whybikedex">
            <div className="heading">
                <h1>Why BikeDex Looks Beyond Specifications</h1>
            </div>

            <div className="subheading">
                <h2>
                    Choosing a motorcycle is more than comparing power, torque, and top speed. 
                    BikeDex considers the factors that actually affect your riding experience.
                </h2>

            <div className="magic-bento">
                <MagicBento 
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </div>
            </div>
        </section>
    )
}

export default WhyBikeDex;