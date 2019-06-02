import React from 'react';

const PersonalInfo = props => {
  const { user } = props;
  return (
    <>
      <div className="profile__heading">
        <h2>Персональные данные</h2>
      </div>
      <div className="profile__info">
        <div className="row">
          <div className="col-lg-6">
            <div className="full-name">
              <h3>ФИО</h3>
              <span className="profile-info__personal">{user.surname}</span>
              <span className="profile-info__personal">{user.name}</span>
              <span className="profile-info__personal">{user.middlename}</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="city">
              <h3>Город</h3>
              <span className="profile-info__personal">{user.city}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__info">
        <div className="row">
          <div className="col-lg-8">
            <div className="date">
              <h3>Дата рождения</h3>
              <span className="profile-info__personal">{user.date}</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="image-profile">
              <h3>Телефон</h3>
              <span className="profile-info__personal">{user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
