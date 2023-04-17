import React from 'react';
import imagePopupPlaceholder from '../images/placeholder.svg'; 

function ImagePopup(props) {
  const {card, isOpen, onClose} = props;

  /* Обработка ошибки загрузки изображения попапа: onError */
  function handlePopupImageOnError(e)  { 
    e.currentTarget.src = imagePopupPlaceholder;
    e.currentTarget.alt = 'Картика не загружена';
  }
  
  return (
    <div className={isOpen ? 'popup popup_type_image popup_opened' : 'popup popup_type_image'}>
      <div className="popup__container-image">
        <button className="popup__close" aria-label="Закрыть" onClick={onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} onError={handlePopupImageOnError} />
          <figcaption className="popup__image-caption">
            <h2 className="popup__image-title">{card.name}</h2>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;