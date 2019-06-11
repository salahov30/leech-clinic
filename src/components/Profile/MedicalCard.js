import React from "react";

import Icon from "../Icon";

const PersonalInfo = props => {
  return (
    <>
      <div className="profile__heading">
        <h2>Медицинская карта</h2>
      </div>
      <div className="profile__info">
        <div className="profile__info-empty">
          <Icon name="fas fa-notes-medical" size={10} />
          <p>Пока нет записей в медкарте</p>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
