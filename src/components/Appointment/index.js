import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Menu from "../Menu";
import Calandar from "../Calendar";
import Button from "../Button";
import SpecialistCard from "../SpecialistCard";
import ServiceItem from "../Services/ServicesItem";
import Preloader from "../PreloaderButton";
import Image from "../Image";
import { formatDate } from "../../helpers/formateDate";
import "./appointment.css";

class Appointment extends Component {
  state = {
    services: [],
    date: "",
    specialists: [],
    isLoaded: true,
    priceSelectServices: 0,
    selectSpecialist: []
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  updateData = value => {
    this.setState({ selectDate: value });
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

    axios
      .get("http://localhost:5000/api/specialists/")
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

  onRecord = e => {
    e.preventDefault();
    const event = {
      services: this.state.service,
      date: this.state.selectDate,
      specialist: this.state.selectSpecialist
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

  onColculation = (price, spec) => {
    const priceValue = price.price;

    const output = document.querySelector(".output-price");
    output.style.display = "inline-block";

    this.setState({
      priceSelectServices: this.state.priceSelectServices + priceValue,
      selectServices: spec
    });
  };

  onSelectSpecialist = value => {
    this.setState({
      selectSpecialist: value
    });
  };

  render() {
    const {
      services,
      specialists,
      priceSelectServices,
      selectDate,
      selectSpecialist,
      isLoaded
    } = this.state;

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
              <div className="services-wrapper">
                <h2>Выберите услугу</h2>
                {isLoaded ? (
                  <ul className="tile-list">
                    {services.map((item, index) => (
                      <li key={index} className="tile-list__item">
                        <Button
                          className="service-item__button"
                          onClick={() => this.onColculation(item, item._id)}
                        >
                          <ServiceItem
                            key={index}
                            url={item.url}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                          />
                        </Button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Preloader />
                )}
                <div className="calc-price-wrapper output-price">
                  <span className="select-price">
                    Итог:
                    <span className="select-price-number">
                      {priceSelectServices}
                    </span>
                    <Image
                      width={25}
                      height={25}
                      alt="Знак рубля"
                      src={process.env.PUBLIC_URL + "/image/ruble.png"}
                    />
                    <span className="select-date">
                      {!selectDate ? "" : formatDate(selectDate)}
                    </span>
                    <span className="select-specialist">
                      {!selectSpecialist ? "" : selectSpecialist.fullname}
                    </span>
                  </span>
                </div>
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
              <div className="card-wrapper select-wrapper">
                {isLoaded ? (
                  specialists.map((specialist, index) => (
                    <SpecialistCard
                      key={index}
                      name={specialist.fullname}
                      specialty={specialist.speciality}
                      image={specialist.photo}
                      onClick={() => this.onSelectSpecialist(specialist)}
                      textBtn="Выбрать"
                    />
                  ))
                ) : (
                  <Preloader />
                )}
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
