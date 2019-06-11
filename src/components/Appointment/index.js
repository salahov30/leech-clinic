import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Menu from "../Menu";
import Calandar from "../Calendar";
import Button from "../Button";
import SpecialistCard from "../SpecialistCard";
import ServiceItem from "../Services/ServicesItem";
import Preloader from "../PreloaderButton";
import "./appointment.css";

class Appointment extends Component {
  state = {
    service: [],
    date: "",
    data: "",
    specialist: "",
    user: "",
    isLoaded: true
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  updateData = value => {
    this.setState({ date: value });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/service")
      .then(res => {
        this.setState({
          service: res.data,
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

  onRecord = e => {
    e.preventDefault();

    const event = {
      service: this.state.service,
      date: this.state.date,
      specialist: this.state.specialist
    };
    console.log(event);

    axios
      .put("http://localhost:5000/api/user/events", event)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.request);

        this.setState({
          error: err
        });
      });
  };

  render() {
    const { service, isLoaded } = this.state;

    return (
      <>
        <Helmet>
          <title>Запись на прием</title>
        </Helmet>
        <Menu />
        <main>
          <section className="heading">
            <div className="container">
              <div className="heading-wrapper">
                <h1>Записаться на прием</h1>
              </div>
            </div>
          </section>

          <section className="services">
            <div className="container">
              {/* <form method="PUT">
                <Input id="service" onChange={this.handleInputChange} />
                <Input id="specialist" onChange={this.handleInputChange} />
                <Input
                  id="date"
                  type="date"
                  onChange={this.handleInputChange}
                />
                <Button onClick={this.onRecord}>Записаться</Button>
              </form> */}
              <div className="services-wrapper">
                <h2>Выберите услугу</h2>
                {isLoaded ? (
                  <ul className="tile-list">
                    {service.map((item, index) => (
                      <li key={index} className="tile-list__item">
                        <Button className="service-item__button">
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
              </div>
            </div>
          </section>
          <section className="selected-date">
            <div className="container">
              <div className="selected-date-wrapper">
                <div className="selected-date__heading">
                  <h2>Выберите дату</h2>
                </div>
                <Calandar updateData={this.updateData} />
              </div>
            </div>
          </section>
          <section className="selected-specialist">
            <div className="container">
              <div className="card-wrapper">
                <SpecialistCard
                  image={
                    process.env.PUBLIC_URL + "/image/avatar-specialist-1.jpg"
                  }
                  name="Симоненко Алексей Юзва"
                  specialty="Медбрат"
                  textBtn="Выбрать"
                />
                <SpecialistCard
                  image={
                    process.env.PUBLIC_URL + "/image/avatar-specialist-2.jpg"
                  }
                  name="Климов Илья Сергеевич"
                  specialty="Доктор"
                  textBtn="Выбрать"
                />
                <SpecialistCard
                  image={
                    process.env.PUBLIC_URL + "/image/avatar-specialist-4.jpg"
                  }
                  name="Смирнова Анастасия Евгеньевна"
                  specialty="Медсестра"
                  textBtn="Выбрать"
                />
                <SpecialistCard
                  image={
                    process.env.PUBLIC_URL + "/image/avatar-specialist-3.jpg"
                  }
                  name="Климов Илья Сергеевич"
                  specialty="Доктор"
                  textBtn="Выбрать"
                />
              </div>
              <Button onClick={this.onRecord}>Записаться</Button>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Appointment;
