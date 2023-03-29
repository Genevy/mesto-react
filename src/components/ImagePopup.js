import React from 'react';

function ImagePopup(props) {
  const {card, onClose} = props;
  return (
    <div className={`popup popup_type_image ${card ? "popup_opened" : ""}`}>
      <div className="popup__container-image">
        <button className="popup__close" aria-label="Закрыть" onClick={onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src={card ? card.link : "#"} alt={card ? card.name : ""} />
          <figcaption className="popup__image-caption">
            <h2 className="popup__image-title">{card ? card.name : ""}</h2>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;