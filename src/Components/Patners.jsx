import Binance from "../images/Binance.png";
import TrustWallet from "../images/TrustWallet.png";
import Blockchain from "../images/Blockchain.jpg";
import Coinbase from "../images/Coinbase.avif";
import Kraken from "../images/Kraken.png";
import Ledger from "../images/Ledger.png";
import Gemini from "../images/Gemini.png";

const Partners = () => {
  return (
    <section className="partners-container">
      <h2>Trusted by Leading Financial & Security Platforms</h2>
      <p>
        We collaborate with top-tier financial institutions and security platforms to 
        ensure a seamless and protected experience. Your trust is our priority.
      </p>
      <div className="partners-logos">
        <img src={Binance} alt="Binance" />
        <img src={TrustWallet} alt="Trust Wallet" />
        <img src={Blockchain} alt="Blockchain" />
        <img src={Coinbase} alt="Coinbase" />
        <img src={Kraken} alt="Kraken" />
        <img src={Ledger} alt="Ledger" />
        <img src={Gemini} alt="Gemini" />
      </div>
    </section>
  );
};

export default Partners;