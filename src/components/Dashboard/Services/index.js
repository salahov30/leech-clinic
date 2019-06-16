import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Preloader from "../../PreloaderButton";
import Input from "../../Input";
import ServiceItem from "../../Services/ServicesItem";
import Button from "../../Button";
import Form from "../../Form";
import "./services.css";
import Textarea from "../../Textarea";
import { HOST } from "../../../constans";

export default class Specialists extends Component {
  state = {
    isLoaded: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get(`${HOST}/api/service`)
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
      url: this.state.url,
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    };

    axios
      .put(`${HOST}/api/service`, Specialists)
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
    const isOpen = document.querySelector(".section-edit");
    isOpen.style.display = "grid";

    this.setState({
      editId: data.id,
      editName: data.name,
      editPrice: data.price,
      editUrl: data.url,
      editDescription: data.description
    });
  };

  onEdit = e => {
    e.preventDefault();
    console.log(this.state.data.id);

    const Specialists = {
      id: this.state.editId,
      url: this.state.url,
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    };

    axios
      .put(`${HOST}/api/service/update`, Specialists)
      .then(res => {
        console.log(res);
        this.setState({
          approved: "Услуга обновлена"
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  render() {
    const {
      isLoaded,
      services,
      url,
      name,
      price,
      editName,
      editPrice,
      editUrl,
      editDescription
    } = this.state;

    return (
      <>
        <article>
          <section className="services-section section-add-services">
            <header className="specialists-header">
              <h2>Добавить услугу</h2>
            </header>
            <Form>
              <Input
                id="name"
                label="Название"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="price"
                label="Цена"
                onChange={this.handleInputChange}
              />
              <Textarea
                id="description"
                label="Описание"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="url"
                label="Ссылка"
                onChange={this.handleInputChange}
              />
              <Button className="secondary-btn" onClick={this.onSubmit}>
                Добавить
              </Button>
            </Form>
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
              <ul className="tile-list dashboard-specialist-list">
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
                        description={item.description}
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
            <Form className="specialist-from">
              <Input
                id="name"
                label="Название"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="price"
                label="Цена"
                type="number"
                onChange={this.handleInputChange}
              />
              <Textarea
                id="description"
                label="Описание"
                type="text"
                onChange={this.handleInputChange}
                required
              />
              <Input
                id="url"
                label="Ссылка"
                onChange={this.handleInputChange}
              />
              <Button className="secondary-btn" onClick={this.onEdit}>
                Изменить
              </Button>
            </Form>
            <div className="service-item">
              <ul className="tile-list">
                <li className="tile-list__item">
                  <Link to={`${editUrl}`} className="service-item__button">
                    <ServiceItem
                      url={editUrl}
                      name={editName}
                      price={editPrice}
                      description={editDescription}
                    />
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
