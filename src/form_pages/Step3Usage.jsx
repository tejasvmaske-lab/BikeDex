import "./Step3Usage.css";
import Counter from "../components/Counter/Counter";

function Step3Usage({ formData, setFormData }) {
    const usageOptions = [
        {
            label: "Daily Commuting",
            value: "daily_commuting",
            icon: "🚦"
        },
        {
            label: "Weekend Rides",
            value: "weekend_rides",
            icon: "🏍️"
        },
        {
            label: "Touring",
            value: "touring",
            icon: "🏕️"
        },
        {
            label: "Off-Road",
            value: "offroad",
            icon: "🌄"
        },
        {
            label: "City Traffic",
            value: "city",
            icon: "🏙️"
        },
        {
            label: "Highway Cruising",
            value: "highway",
            icon: "🛣️"
        },
        {
            label: "College / Office",
            value: "college_office",
            icon: "🎒"
        },
        {
            label: "Ride with Pillion",
            value: "pillion",
            icon: "👥"
        }
    ];

    return (
        <>
            <h2>How will you mostly use your motorcycle?</h2>

            <p className="usage-helper">
                Select all that apply.
            </p>

            <div className="usage-grid">

                {usageOptions.map((option) => (

                    <button
                        key={option.value}
                        type="button"
                        className={`usage-card ${
                            formData.usage.includes(option.value)
                                ? "active"
                                : ""
                        }`}
                        onClick={() => {

                            if (formData.usage.includes(option.value)) {

                                setFormData({
                                    ...formData,
                                    usage: formData.usage.filter(
                                        item => item !== option.value
                                    )
                                });

                            } else {

                                setFormData({
                                    ...formData,
                                    usage: [
                                        ...formData.usage,
                                        option.value
                                    ]
                                });

                            }

                        }}
                    >

                        {/* <div className="usage-icon">
                            {option.icon}
                        </div> */}

                        <span>{option.label}</span>

                    </button>

                ))}

            </div>

            <div className="usage-info">

                <h3>💡 Why do we ask this?</h3>

                <p>
                    Your riding habits help BikeDex recommend motorcycles
                    that perform best where you'll actually ride—whether
                    that's city streets, highways, touring, or carrying a
                    passenger.
                </p>

            </div>
        </>
    );
}

export default Step3Usage;