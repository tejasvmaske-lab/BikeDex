import "./HowItWorks.css";
import CardFlip from "../components/CardFlip/CardFlip";

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
        <CardFlip />
      </div>
    </section>
  );
}

export default HowItWorks;