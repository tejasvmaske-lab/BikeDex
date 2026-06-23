import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h1>BIKEDEX</h1>
        <p>
          Discover motorcycles that fit your body, budget,
          and riding style—not just the bikes everyone else recommends.
        </p>
      </div>

      <div className="footer-links">

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="">Find Your Bike</a>
          <a href="">Support BikeDex ❤️</a>
          <a href="">GitHub</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          Made with ❤️ in India • Designed and developed by
          <span> Tejas Vinay Maske</span>
        </p>

        <p className="disclaimer">
          BikeDex is an independent project. Specifications,
          prices and features may change over time. Always verify
          information with official sources before making a purchase.
        </p>

        <p className="copyright">
          © 2026 BikeDex
        </p>

      </div>

    </footer>
  );
}

export default Footer;