import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import profilePlaceholderImage from '../images/avatar_placeholder.svg';

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards } = props;

  const currentUser = React.useContext(CurrentUserContext);

  /* Обработка ошибки загрузки изображения профиля: onError */
  function handleProfileImageOnError(e)  { 
    e.currentTarget.src = profilePlaceholderImage;
    e.currentTarget.alt = 'Картика профиля не загружена';
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img loading="lazy" className="profile__image" src={currentUser.avatar} alt="Изображение профиля" onError={handleProfileImageOnError} />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
      </section>
      <section className="photo">
        <ul className="photo__list">
          {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />))}
        </ul>
      </section>
    </main>
  );
}

export default Main;