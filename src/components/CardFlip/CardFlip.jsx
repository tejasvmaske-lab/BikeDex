import "./CardFlip.css";

function CardFlip({ cards }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className={`flip-card ${card.color}`} key={index}>
          <div className="flip-card-inner">

            <div className="flip-card-front">
              <div className="emoji">{card.icon}</div>
              <h2>{card.title}</h2>

              <div className="keywords">
                {card.keywords.map((word, i) =>
                  <p key={i}>{word}</p>
                )}
              </div>
            </div>

            <div className="flip-card-back">
              <h2>{card.backTitle}</h2>
              <p>{card.description}</p>
              <span>{card.spanText}</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default CardFlip;