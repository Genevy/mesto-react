import React from "react";

function Card(props) {
  const { card, onCardClick } = props;
  
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card" aria-label={card.name}>
      <img className="card__photo" src={card.link} alt={card.name}  onClick={handleCardClick} />
      <div className="card__container-area">
        <div className="card__container">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button className="card__button-like" type="button" aria-label="Нравится"></button>
            <span className="card__like-counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
      <button className="card__recycle-bin" type="button" aria-label="Удалить"></button>
    </li>
  );
}

export default Card;