import { quoteSection } from "./QuoteData";
import "./quote.css";

function Quote() {
  const { text, emphasis, by } = quoteSection;

  return (
    <div className="band">
      <section className="quote-wrap" id="quote" aria-label="Founder quote">
        <p className="quote-mark serif" aria-hidden="true">
          &ldquo;
        </p>
        <blockquote className="quote serif">
          {text.map((line, index) => (
            <span key={line}>
              {index === emphasis ? <em>{line}</em> : line}
              {index < text.length - 1 && <br />}
            </span>
          ))}
        </blockquote>
        <p className="quote-by">{by}</p>
      </section>
    </div>
  );
}

export default Quote;
