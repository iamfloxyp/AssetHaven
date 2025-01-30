import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
            <div className="hero-header">
                <h1>Reclaim What's Yours With Confidence And Security</h1>
                <p>Losing assets can be overwhelming, but recovery doesn't have to be . <br />
                At AssetHaven, we provide expert-driven solutions to help you reclaim,secure, and protect what's rightfully yours.Let's turn your setbacks into sucess.
                </p>
            </div>
            <div className="hero-button">
                <button><Link to ="/contact" className="cta-button">Contact an Expert</Link></button>
            </div>
        </div>

    </div>
  )
}

export default Hero