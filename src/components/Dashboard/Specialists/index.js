import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import "./specialists.css";
import Preloader from "../../PreloaderButton";
import Input from "../../Input";
import SpecicalistCard from "../../SpecialistCard";
import Edit from "./Edit";
import Button from "../../Button";

export default class Specialists extends Component {
  state = {
    isLoaded: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/specialists")
      .then(res => {
        this.setState({
          specialists: res.data,
          isLoaded: true
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoaded: false
        });
      });
  }

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
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  onSubmit = e => {
    e.preventDefault();
    const Specialists = {
      fullname: this.state.fullname,
      speciality: this.state.speciality,
      bio: this.state.bio,
      photo: this.state.photo,
      licenses: this.state.licenses,
      url: this.state.url
    };

    axios
      .put("http://localhost:5000/api/specialists", Specialists)
      .then(res => {
        console.log(res);
        this.setState({
          approved: "Специалист добавлен"
        });
        window.location.reload();
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  onEditSpecialist = data => {
    const isOpen = document.querySelector(".section-edit");
    isOpen.style.display = "grid";
    this.setState({
      editData: data
    });
  };

  render() {
    const {
      isLoaded,
      specialists,
      fullname,
      photo,
      speciality,
      editData
    } = this.state;

    return (
      <>
        <article>
          <header className="specialists-header">
            <h2>Добавить специалиста</h2>
          </header>

          <section className="specialist-section section-add-specialist">
            <form className="specialist-from">
              <Input
                id="fullname"
                label="ФИО"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="speciality"
                label="Специальность"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="bio"
                label="Биография"
                onChange={this.handleInputChange}
              />
              <Input
                id="licenses"
                label="Лицензии"
                onChange={this.handleInputChange}
              />
              <Input
                id="photo"
                type="file"
                label="Фотография"
                onChange={this.handleImageChange}
                required
              />
              <Input
                id="url"
                type="text"
                label="Ссылка на профиль"
                onChange={this.handleInputChange}
                required
              />
              <Button className="secondary-btn" onClick={this.onSubmit}>
                Добавить
              </Button>
            </form>
            <div className="specialist-card-wrapper">
              <SpecicalistCard
                className="specicalist-card__form-add "
                name={fullname}
                speciality={speciality}
                image={photo}
                textLink="Подробнее"
                linkUrl={`/specialists/${this.state.url}`}
              />
            </div>
          </section>
        </article>
        <article className="specialists">
          <header className="specialists-header">
            <h2>Специалисты</h2>
          </header>
          <section className="specialist-section">
            {isLoaded ? (
              <ul className="tile-list dashboard-specialist-list">
                {specialists.map((item, index) => (
                  <li key={index} className="tile-list__item">
                    <Button
                      className="tile-list__button"
                      onClick={() => this.onEditSpecialist(item)}
                    >
                      <h3 className="dasboard-specialist-title">
                        {item.fullname}
                      </h3>
                      <div className="dasboard-specialists">
                        <span className="dasboard-specialists-info">
                          Фотография:
                          {item.photo ? (
                            <span className="dashboard-approved">Есть</span>
                          ) : (
                            <span className="dashboard-waring">Нет</span>
                          )}
                        </span>
                        <span className="dasboard-specialists-info">
                          Специальность:
                          {item.speciality ? (
                            <span className="dashboard-approved">Есть</span>
                          ) : (
                            <span className="dashboard-error">Нет</span>
                          )}
                        </span>
                        <span className="dasboard-specialists-info">
                          Биография:
                          {item.bio ? (
                            <span className="dashboard-approved">Есть</span>
                          ) : (
                            <span className="dashboard-waring">Нет</span>
                          )}
                        </span>
                        <span className="dasboard-specialists-info">
                          Лицензии:
                          {item.licenses.length}
                        </span>
                        <span className="dasboard-specialists-info">
                          Ссылка на профиль:
                          {item.url ? (
                            <span className="dashboard-approved">Есть</span>
                          ) : (
                            <span className="dashboard-error">Нет</span>
                          )}
                        </span>
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <Preloader />
            )}
          </section>
          <Edit title="Изменить информацию о специалисте" editData={editData} />
        </article>
      </>
    );
  }
}
