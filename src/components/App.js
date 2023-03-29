import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {
  /* Переменные состояния попапов */
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  /* Переменные состояния попапа открытия карточки */
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closePopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null)
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm 
          name="edit"
          title="Редактировать профиль"
          textsubmit="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closePopups}
          children={
            <fieldset className="form__set">
              <label className="form__field">
                <input className="form__input form__input_type_user-name" type="text" name="name" id="username" placeholder="Укажите своё имя" 
                  minLength="2" maxLength="40" required />
                <span className="form__input-error username-error"></span>
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_vocation" type="text" name="about" id="vocation" placeholder="Укажите род деятельности"
                  minLength="2" maxLength="200" required />
                <span className="form__input-error vocation-error"></span>
              </label>
            </fieldset>
          }
        />
        <PopupWithForm 
          name="new-card"
          title="Новое место"
          textsubmit="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closePopups}
          children={
            <fieldset className="form__set">
              <label className="form__field">
                <input className="form__input form__input_type_image-name" type="text" name="name" id="imagename" placeholder="Название"
                  minLength="2" maxLength="30" required />
                <span className="form__input-error imagename-error"></span>
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_image-link" type="url" name="link" id="imagelink" placeholder="Ссылка на картинку" required />
                <span className="form__input-error imagelink-error"></span>
              </label>
            </fieldset>
          }
        />
        <ImagePopup 
          card={selectedCard}
          onClose={closePopups}
        />
        <PopupWithForm 
          name="confirm"
          title="Вы уверены?"
          textsubmit="Да"
        />
        <PopupWithForm 
          name="avatar"
          title="Обновить аватар"
          textsubmit="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closePopups}
          children={
            <fieldset className="form__set">
              <label className="form__field">
                <input className="form__input form__input_type_avatar" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
                <span className="form__input-error avatar-error"></span>
              </label>    
            </fieldset>
          }
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
