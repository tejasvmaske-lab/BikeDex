import "./Step1AboutYou.css";
import Counter from "../components/Counter/Counter";

function Step1AboutYou({ formData, setFormData }) {

    return (
        <div className="about-you">

            <div className="slider-group">

                <label>
                    Height: {formData.height} cm
                </label>

                <input
                    type="range"
                    min="140"
                    max="210"
                    value={formData.height}
                    onChange={(e)=>
                        setFormData({
                            ...formData,
                            height:Number(e.target.value)
                        })
                    }
                />

            </div>


            <div className="slider-group">

                <label>
                    Weight: {formData.weight} kg
                </label>

                <input
                    type="range"
                    min="40"
                    max="140"
                    value={formData.weight}
                    onChange={(e)=>
                        setFormData({
                            ...formData,
                            weight:Number(e.target.value)
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