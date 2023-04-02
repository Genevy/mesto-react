import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import avatarPlaceholder from '../images/avatar_placeholder.svg';

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  /* Переменные состояния пользователя */
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  /* Переменные состояния карточек */
  const [cards, setCards] = React.useState([]);

  /* Получить данные пользователя с сервера */
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getAllCards()])
      .then(([data, items]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(items);
      })
      .catch((err) => { console.log(err) })
  }, [])

   /* Заглушка на изображение профиля с битой ссылкой */
   function avatarOnError(event)  { 
    event.currentTarget.src = avatarPlaceholder;
    event.currentTarget.alt = "Изображение профиля не загружено";
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img src={userAvatar} className="profile__image" alt="Изображение профиля" onError={avatarOnError} />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
      </section>
      <section className="photo">
        <ul className="photo__list">
          {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick} />))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
