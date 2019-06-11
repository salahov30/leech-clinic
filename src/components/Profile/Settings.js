import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Input from "../Input";
import Button from "../Button";
import Image from "../Image";
import Preloader from "../Preloader";

class Settings extends Component {
  state = {
    file: "",
    imagePreviewUrl: "",
    name: "",
    city: "",
    surname: "",
    middlename: "",
    date: "",
    isLoaded: false
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  onSave = e => {
    e.preventDefault();

    const User = {
      photo: this.state.imagePreviewUrl,
      phone: this.state.phone,
      name: this.state.name,
      middlename: this.state.middlename,
      surname: this.state.surname,
      city: this.state.city,
      date: this.state.date
    };

    axios
      .post("http://localhost:5000/api/user/update", User)
      .then(() => {
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        });
      });

    this.setState({
      isLoaded: true
    });
  };

  render() {
    const { imagePreviewUrl, isLoaded, error } = this.state;
    if (!error && isLoaded) {
      return <Preloader />;
    }
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <Image circle width={100} height={100} src={imagePreviewUrl} />
      );
    } else {
      $imagePreview = <Image circle width={100} height={100} />;
    }

    return (
      <>
        <div className="profile__heading">
          <h2>Настройки профиля</h2>
        </div>
        <div className="profile-settings__form">
          <form method="post">
            <h3>Персональные данные</h3>
            <span className="error">{error ? "Заполните все поля" : ""}</span>
            <div className="row">
              <div className="col-lg-2">
                <div className="upload-image">
                  <label
                    className="upload-image__label"
                    htmlFor="imagePreviewUrl "
                  >
                    {$imagePreview}
                    <span>Выбрать</span>
                  </label>
                  <Input
                    className="upload-image__input"
                    id="imagePreviewUrl "
                    type="file"
                    onChange={e => this.handleImageChange(e)}
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <Input
                  className="auth-input"
                  id="name"
                  label="Имя"
                  type="text"
                  placeholder="Введите свое имя"
                  onChange={this.handleInputChange}
                />
                <Input
                  className="auth-input"
                  id="surname"
                  label="Фамилия"
                  type="text"
                  placeholder="Введите свою фамилию"
                  onChange={this.handleInputChange}
                />
                <Input
                  className="auth-input"
                  id="date"
                  label="Дата рождения"
                  type="date"
                  placeholder="Введите свою дату рождения"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-lg-5">
                <Input
                  className="auth-input"
                  id="middlename"
                  label="Отчество"
                  type="text"
                  placeholder="Введите свое отчество"
                  onChange={this.handleInputChange}
                />
                <Input
                  className="auth-input"
                  id="city"
                  label="Город"
                  type="text"
                  placeholder="Введите свой город"
                  onChange={this.handleInputChange}
                />
                <Input
                  className="auth-input"
                  id="phone"
                  label="Телефон"
                  type="text"
                  mask="+7 (999) 999-99-99"
                  placeholder="Введите свой телефон"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="btn-wrapper">
              <Button className="btn-save" onClick={this.onSave}>
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Settings);
