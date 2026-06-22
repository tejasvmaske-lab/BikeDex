import "./CardFlip.css";

function CardFlip({ cards }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className={`flip-card ${card.color}`} key={index}>
          <div className="flip-card-inner">

            <div className="flip-card-front">
              {card.icon && <div className="emoji">{card.icon}</div>}
              {card.title && <h2>{card.title}</h2>}
              <h3>{card.text}</h3>

              
              <div className="keywords">
                {card.keywords?.map((word, i) => (
                  <p key={i}>{word}</p>
                ))}
              </div>
            </div>

            <div className="flip-card-back">
              {card.backTitle && <h2>{card.backTitle}</h2>}
              {card.description && <p>{card.description}</p>}
              {card.spanText && <span>{card.spanText}</span>}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default CardFlip;