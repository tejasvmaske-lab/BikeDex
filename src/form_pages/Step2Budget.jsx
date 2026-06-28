import "./Step2Budget.css";
import Counter from "../components/Counter/Counter";
import ElasticSlider from "../components/ElasticSlider/ElasticSlider";

function Step2Budget({ formData, setFormData }) {

    const getBudgetInfo = (budget) => {
    if (budget < 150000) {
        return {
            tier: "Mass Tier",
            description:
                "Affordable, fuel-efficient motorcycles built for everyday commuting and easy ownership.",
            bikes: ["TVS Raider", "Honda Shine", "Pulsar N125"]
        };
    }

    if (budget < 250000) {
        return {
            tier: "Executive Tier",
            description:
                "More power, better comfort, and premium features while staying practical.",
            bikes: ["Hunter 350", "TVS Ronin", "Apache RTR 200"]
        };
    }

    if (budget < 500000) {
        return {
            tier: "Mid Tier",
            description:
                "Performance-oriented motorcycles ideal for enthusiasts, touring, and weekend rides.",
            bikes: ["Duke 390", "Himalayan 450", "BMW G310 GS"]
        };
    }

    return {
        tier: "Super Tier",
        description:
            "High-performance and luxury motorcycles for experienced riders seeking the ultimate machines.",
        bikes: ["Hayabusa", "Street Triple", "Ninja ZX-10R"]
    };
};

const budgetInfo = getBudgetInfo(formData.budget_inr);

    return (
        <div className="budget">
            <div className="slider-group">
                <label>
                    Budget: ₹
                    {formData.budget_inr >= 2000000
                        ? "20,00,000+"
                        : formData.budget_inr.toLocaleString("en-IN")}
                </label>
                <ElasticSlider 
                    leftIcon={<></>}
                    rightIcon={<></>}
                    startingValue={40000}
                    maxValue={2000000}
                    value={formData.budget_inr}
                    onChange={(value)=>
                        setFormData({
                            ...formData,
                            budget_inr: Math.round(value / 1000) * 1000
                        })
                    }
                />
                <div className="budget-tier">
                    <h3>{budgetInfo.tier}</h3>

                    <p className="budget-description">
                        {budgetInfo.description}
                    </p>

                    <p className="budget-examples">
                        <span>Examples:</span>{" "}
                        {budgetInfo.bikes.join(" • ")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Step2Budget;