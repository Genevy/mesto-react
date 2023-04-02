import React from "react";
import cardPlaceholder from '../images/placeholder.svg';


function Card({ card, onCardClick }) { 
  
  function handleCardClick() {
    onCardClick(card);
  }
  
  /* Добавляем заглушку на картинку с битой ссылкой */
  function handlerImageOnError(event)  { 
    event.currentTarget.src = cardPlaceholder;
    event.currentTarget.alt = "Картика не загружена";

    event.currentTarget.name = card.name;
    card.name = "Не загружена"; 
  }

  return (
    <li className="card" aria-label={card.name}>
      <img loading="lazy" className="card__photo" src={card.link} alt={card.name} onClick={handleCardClick} onError={handlerImageOnError} />
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