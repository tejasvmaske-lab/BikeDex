import "./HowItWorks.css";
import CardFlip from "../components/CardFlip/CardFlip";

const howItWorksCards = [
{
  title: "Tell Us",
  icon: "👤",
  keywords: ["Height","Budget","Experience"],
  backTitle: "Tell Us About Yourself",
  description: `BikeDex starts by understanding you, not just the motorcycle. Your height, 
  budget, experience level, riding style, and daily usage help us create a profile that 
  reflects how and where you actually ride.`,
  spanText:`Your profile matters more than specs.`,
  color: "blue"
},
{
  title: "BikeDex AI",
  icon: "🧠",
  keywords: ["Analysis","Filtering","Matching"],
  backTitle: "Smart Recommendations",
  description: `BikeDex looks beyond horsepower and top speed. It analyzes ergonomics, comfort, 
  accessibility, maintenance costs, touring capability, and real-world usability to find motorcycles
  that truly fit your needs.`,
  spanText:`Beyond horsepower and top speed.`,
  color: "purple"
},
{
  title: "Discover",
  icon: "🏍️",
  keywords: ["Comfort","Budget","Style"],
  backTitle: "Find Your Bike",
  description: `Receive personalized recommendations tailored to your lifestyle, confidence level,
  and riding habits. Explore multiple categories, compare alternatives, and discover motorcycles 
  that suit you—not just the bikes everyone else recommends.`,
  spanText:`Find bikes that fit YOU.`,
  color: "orange"
}
];

function HowItWorks() {
  return (
    <section className="howitworks">

      <div className="howitworks-heading">
        <h1>How BikeDex Works</h1>

        <p>
          Finding the right motorcycle shouldn't be complicated.
          Tell us about yourself, and BikeDex does the rest.
        </p>
      </div>

      <div className="cardflip">
        
        <CardFlip cards={howItWorksCards}/>
      </div>
    </section>
  );
}

export default HowItWorks;