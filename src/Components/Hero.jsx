import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
            <div className="hero-header">
                <h1>Reclaim What's Yours With <span>Confidence And Security</span></h1>
                <p>Losing assets can be overwhelming, but recovery doesn't have to be.<span><br />
                At AssetHaven, we provide expert-driven solutions to help you reclaim, <br />secure, and protect what's rightfully yours.Let's turn your setbacks into sucess.
                </span>
                </p>
            </div>
            <div className="hero-buttons">
            <Link to ="/reviews" className="hero-button">Reviews</Link>
                <Link to ="/contact" className="hero-button">Contact An Expert</Link>
            </div>
        </div>
        <div className="hero-image"></div>

    </div>
  )
}

export default Hero