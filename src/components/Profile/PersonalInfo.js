import React from "react";

import { formatDate } from "../../helpers/formateDate";
import Input from "../Input";

const PersonalInfo = props => {
  const { user } = props;
  const { surname, city, date } = user;
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
              <span className="profile-info__personal">
                <Input
                  id="name"
                  disabled
                  value={
                    !surname ? 'Заполните поле в "Настройках профиля"' : surname
                  }
                />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="city">
              <h3>Город</h3>
              <span className="profile-info__personal">
                <Input
                  id="name"
                  disabled
                  value={!city ? 'Заполните поле в "Настройках профиля"' : city}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__info">
        <div className="row">
          <div className="col-lg-6">
            <div className="date">
              <h3>Дата рождения</h3>
              <span className="profile-info__personal">
                <Input
                  id="name"
                  disabled
                  value={
                    !date
                      ? 'Заполните поле в "Настройках профиля"'
                      : formatDate(user.date)
                  }
                />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-profile">
              <h3>Телефон</h3>
              <span className="profile-info__personal">
                <Input id="name" disabled value={user.phone} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
