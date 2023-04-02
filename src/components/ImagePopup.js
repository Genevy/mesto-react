import React from 'react';
import imagePopupPlaceholder from '../images/placeholder.svg';

function ImagePopup(props) {
  const {card, onClose} = props;
  
  /* Заглушка на картинку с битой ссылкой */
  function imageOnError(event)  { 
    event.currentTarget.src = imagePopupPlaceholder;
    event.currentTarget.alt = "Картика не загружена";
  }

  return (
    <div className={`popup popup_type_image ${card ? "popup_opened" : ""}`}>
      <div className="popup__container-image">
        <button className="popup__close" aria-label="Закрыть" onClick={onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src={card ? card.link : "#"} alt={card ? card.name : ""} onError={imageOnError} />
          <figcaption className="popup__image-caption">
            <h2 className="popup__image-title">{card ? card.name : ""}</h2>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;