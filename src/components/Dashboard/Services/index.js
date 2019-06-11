import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Preloader from "../../PreloaderButton";
import Input from "../../Input";
import ServiceItem from "../../Services/ServicesItem";
import Button from "../../Button";
import "./services.css";

export default class Specialists extends Component {
  state = {
    isLoaded: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/service")
      .then(res => {
        this.setState({
          services: res.data,
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

  onEditServices = data => {
    console.log(data);

    const isOpen = document.querySelector(".section-edit");
    isOpen.style.display = "grid";
    this.setState({
      editData: data
    });
  };

  render() {
    const { isLoaded, services, url, name, price, editData } = this.state;
    console.log(editData);

    return (
      <>
        <article>
          <section className="services-section section-add-services">
            <header className="specialists-header">
              <h2>Добавить услугу</h2>
            </header>
            <form className="specialist-from">
              <Input
                id="name"
                label="Название"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="description"
                label="Описание"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="price"
                label="Цена"
                onChange={this.handleInputChange}
              />
              <Input
                id="url"
                label="Ссылка"
                onChange={this.handleInputChange}
              />
              <Button className="secondary-btn" onClick={this.onSubmit}>
                Добавить
              </Button>
            </form>
            <div className="service-item">
              <ul className="tile-list">
                <li className="tile-list__item">
                  <Link to={`${url}`} className="service-item__button">
                    <ServiceItem url={url} name={name} price={price} />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </article>
        <article className="specialists">
          <header className="specialists-header">
            <h2>Услуги</h2>
          </header>
          <section className="specialist-section">
            {isLoaded ? (
              <ul className="tile-list">
                {services.map((item, index) => (
                  <li key={index} className="tile-list__item">
                    <Button
                      className="service-item__button"
                      onClick={() => this.onEditServices(item)}
                    >
                      <ServiceItem
                        key={index}
                        url={item.url}
                        name={item.name}
                        price={item.price}
                      />
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <Preloader />
            )}
          </section>
          <section className="section-edit service-edit">
            <header className="specialists-header">
              <h2>Изменить информацию об услуге</h2>
            </header>
            <form className="specialist-from">
              <Input
                id="name"
                label="Название"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="description"
                label="Описание"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="price"
                label="Цена"
                onChange={this.handleInputChange}
              />
              <Input
                id="url"
                label="Ссылка"
                onChange={this.handleInputChange}
              />
              <Button className="secondary-btn" onClick={this.onSubmit}>
                Добавить
              </Button>
            </form>
            <div className="service-item">
              <ul className="tile-list">
                <li className="tile-list__item">
                  <Link to={`${url}`} className="service-item__button">
                    <ServiceItem url={url} name={name} price={price} />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </>
    );
  }
}
