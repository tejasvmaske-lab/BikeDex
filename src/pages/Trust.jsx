import "./Trust.css";
import CardFlip from "../components/CardFlip/CardFlip";
import CountUp from "../components/CountUp/CountUp";

const trust = [
{
    title: ``,
    text: ``,
    description: ``,
    color: "blue"
}
]

function Trust() {
    return(
        <section className="trust">
            <div className="trust-heading">
                <h1>Built With Data, Designed For Riders</h1>
            </div>
            <div className="trust-subheading">
                <p>
                    BikeDex combines real motorcycle specifications with rider-focused 
                    insights to deliver recommendations that go beyond simple filters.
                </p>
            </div>

            <div className="cardflip">
                <CardFlip cards={trust}/>
            </div>
        </section>
    );
}

export default Trust;