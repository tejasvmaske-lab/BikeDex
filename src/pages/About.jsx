import RotatingText from "../components/RotatingText/RotatingText";
import Carousel from "../components/Carousel/Carousel";
import "./About.css";

function About() {
    return(
        <section className="about">
            <div className="about-content">

                <h1 className="about-heading">
                    Built for Every kind of
                </h1>

                <div className="about-rotating">
                    <RotatingText
                        texts={[
                            'City Riders', 
                            'Weekend Tourers',
                            'First-Time Buyers', 
                            'Daily Commuters', 
                            'Adventure Riders'
                        ]}
                        mainClassName="rotating-text"
                    />
            </div>

        <p className="about-description">
            BikeDex helps riders discover motorcycles based on
            their height, riding style, experience, comfort and
            real-world usage — not just horsepower and specifications.
        </p>

        <section className="carousel">
            <div className="carousel-wrapper">
                <Carousel
                    // baseWidth={1100}
                    autoplay={true}
                    autoplayDelay={5000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </section>
    </div>
</section>
    );
}

export default About;