import "./Step1AboutYou.css";
import Counter from "../components/Counter/Counter";
import ElasticSlider from "../components/ElasticSlider/ElasticSlider";

function Step1AboutYou({ formData, setFormData }) {

    return (
        <div className="about-you">

            <div className="slider-group">

                <label>
                    Height: {formData.rider_height_cm} cm
                </label>

<ElasticSlider
    leftIcon={<></>}
    rightIcon={<></>}
    startingValue={140}
    maxValue={210}
    value={formData.rider_height_cm}
    onChange={(value)=>
        setFormData({
            ...formData,
            rider_height_cm: Math.round(value)
        })
    }
/>

            </div>


            <div className="slider-group">

                <label>
                    Weight: {formData.rider_weight_kg} kg
                </label>

<ElasticSlider
    leftIcon={<></>}
    rightIcon={<></>}
    startingValue={40}
    maxValue={140}
    value={formData.rider_weight_kg}
    onChange={(value)=>
        setFormData({
            ...formData,
            rider_weight_kg: Math.round(value)
        })
    }
/>

            </div>


            <div className="experience-cards">

                <button
                    className={formData.experience==="beginner" ? "active" : ""}
                    onClick={()=>
                        setFormData({
                            ...formData,
                            experience:"beginner"
                        })
                    }
                >
                    Beginner
                </button>

                <button
                    className={formData.experience==="intermediate" ? "active" : ""}
                    onClick={()=>
                        setFormData({
                            ...formData,
                            experience:"intermediate"
                        })
                    }
                >
                    Intermediate
                </button>

                <button
                    className={formData.experience==="experienced" ? "active" : ""}
                    onClick={()=>
                        setFormData({
                            ...formData,
                            experience:"experienced"
                        })
                    }
                >
                    Experienced
                </button>

            </div>

        </div>
    );
}

export default Step1AboutYou;