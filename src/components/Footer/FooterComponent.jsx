import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <p>
          I dati sono di proprietà di{" "}
          <a
            href=" https://global-warming.org"
            target="_blank"
            className="redirect"
          >
            global-warming.org
          </a>
        </p>
        <p>
          Per altri progetti come questo{" "}
          <a
            href="cristian-piovani-portfolio.netlify.app"
            target="_blank"
            className="redirect"
          >
            visita il mio portfolio personale
          </a>
        </p>
      </div>
    </>
  );
}
