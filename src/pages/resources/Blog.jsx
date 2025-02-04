import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Blog = () => {
  const articles = [
    {
      title: "Bitcoin Recovers Above $100,000 After Weekend Dip",
      date: "February 3, 2025",
      summary:
        "Bitcoin bounced back above $100,000 after a sharp decline over the weekend, showcasing its resilience amidst market volatility.",
      link: "https://www.forbes.com/sites/digital-assets/2025/02/03/bitcoin-recovers-above-100000-after-this-weekends-sharp-drop/",
    },
    {
      title: "Crypto Funds See $527 Million Inflows Despite Volatility",
      date: "February 3, 2025",
      summary:
        "Investors poured over $1 billion into crypto ETPs last week, with Bitcoin and XRP leading the inflows amid market turbulence.",
      link: "https://cryptoslate.com/bitcoin-xrp-leads-527-million-inflow-recovery-despite-volatility/",
    },
    {
      title: "Tokenized Real-World Assets Reach All-Time Highs",
      date: "February 4, 2025",
      summary:
        "The on-chain value for the real-world asset sector has increased by 94% since last year, adding nearly $4 billion in three months.",
      link: "https://cointelegraph.com/news/rwa-value-locked-returns-to-ath-tokens-lead-market-recovery",
    },
    {
      title: "SEC Cryptocurrency Enforcement 2024 Update",
      date: "January 20, 2025",
      summary:
        "The SEC has intensified its enforcement actions, focusing on market manipulation and unregistered broker activities in the crypto space.",
      link: "https://www.cornerstone.com/insights/reports/sec-cryptocurrency-enforcement-2024-update/",
    },
    {
      title: "Crypto Hacks Result in $2.2 Billion Losses in 2024",
      date: "December 19, 2024",
      summary:
        "Cryptocurrency hacks have led to $2.2 billion in losses in 2024, marking a 21% increase from the previous year.",
      link: "https://www.reuters.com/technology/losses-crypto-hacks-jump-22-bln-2024-report-says-2024-12-19/",
    },
  ];

  return (
    <section className="blog-page">
      <div className="blog-container">
        <Link to="/resources" className="blog-back-link">
          ← Back to Resources
        </Link>

        <h1 className="blog-title">Crypto Recovery Blog</h1>
        <p className="blog-subtitle">
          Stay informed with the latest updates, insights, and news on crypto recovery.
        </p>

        <div className="blog-content">
          {articles.map((article, index) => (
            <div key={index} className="blog-box">
              <h2>{article.title}</h2>
              <p className="blog-date">{article.date}</p>
              <p>{article.summary}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="blog-read-more">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog;