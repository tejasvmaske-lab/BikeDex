import "./Trust.css";
import CardFlip from "../components/CardFlip/CardFlip";
import CountUp from "../components/CountUp/CountUp";
import BlurText from "../components/BlurText/BlurText";

const trust = [
{
    title: (
        <>
            <CountUp
                from={0}
                to={300}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text"
                delay={0}
            /><br></br>
            Bikes
        </>
    ),
    text: (
        <>
            Motorcycles Across 
            <br></br>
            Every Segment
        </>
    ),
    description: `From daily commuters and adventure tourers to cruisers, sports bikes, 
    and superbikes, BikeDex covers motorcycles across every segment to help riders
    find the perfect machine for their needs.`,
    color: "blue"
},
{
    title: (
        <>
            <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text"
                delay={0}
            /><br></br>
            Categories
        </>
    ),
    text: (
        <>
            Built for Every
            <br></br>
            kind of Rider
        </>
    ),
    description: `Adventure, cruiser, commuter, sports, touring, scrambler, and more. 
    BikeDex organizes motorcycles into meaningful categories that reflect how riders actually 
    use their machines.`,
    color: "orange"
},
{
    title: (
        <>
            Height
            <br></br>
            Aware
        </>
    ),
    text: (
        <>
            Comfort beyond 
            <br></br>
            seat height
        </>
    ),
    description: `Choosing the right motorcycle is more than comparing numbers. 
    BikeDex considers accessibility, ergonomics, and rider confidence to recommend
    bikes that feel right in the real world.`,
    color: "purple"
},
{
    title: (
        <section className="blurtext">
            <BlurText
            text="Built for India"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
            />
        </section>
    ),
    text: (
        <>
            Designed around 
            <br></br>
            Indian Drivers
        </>
    ),
    description: `BikeDex focuses on the Indian market with locally available motorcycles, ownership 
    costs, service networks, and riding conditions to provide recommendations that truly make sense.`,
    color: "green"
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