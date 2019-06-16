import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Menu from "../Menu";
import Calandar from "../Calendar";
import Button from "../Button";
import ServiceItem from "../Services/ServicesItem";
import Preloader from "../PreloaderButton";
import Image from "../Image";
import { formatDate } from "../../helpers/formateDate";
import { getJwt } from "../../helpers/jwt";
import { HOST } from "../../constans";

import "./appointment.css";

class Appointment extends Component {
  state = {
    services: [],
    constServices: [],
    priceSelectServices: 0,
    isLoaded: true,
    onRecord: false,
    date: ""
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

  onRecord = e => {
    e.preventDefault();
    const jwt = getJwt();
    if (!jwt) {
      return this.props.history.push("/login");
    }

    const Event = {
      service: this.state.constServices,
      date: this.state.selectDate,
      time: this.state.selectTime
    };

    if (
      Event.service.length === 0 ||
      Event.date === undefined ||
      Event.time === undefined
    ) {
      this.setState({
        err: "Сделайте выбор"
      });
    } else {
      axios({
        method: "PUT",
        url: `${HOST}/api/user/events`,
        mode: "cors",
        headers: {
          "auth-token": `${jwt}`,
          "Access-Control-Allow-Origin": true
        },
        data: Event
      })
        .then(() => {
          this.props.history.push("/profile/events");
          this.setState({
            onRecord: true
          });
        })
        .catch(err => {
          console.log(err.request);
          this.setState({
            error: err
          });
        });
    }
  };

  onSelectService = (service, index, value) => {
    const priceValue = service.price;
    const output = document.querySelector(".output-price");
    const servicesBtn = document.getElementById(`${index}`);
    output.style.display = "inline-block";
    servicesBtn.disabled = true;
    this.setState({
      priceSelectServices: this.state.priceSelectServices + priceValue,
      selectServices: this.state.constServices.push(service.name)
    });
  };

  onSelectTime = value => {
    const output = document.querySelector(".output-price");
    output.style.display = "inline-block";
    this.setState({
      selectTime: value
    });
  };

  onClearSelected = () => {
    const output = document.querySelector(".output-price");
    const servicesBtn = document.querySelectorAll(".service-item__button");
    console.log(servicesBtn);

    output.style.display = "none";
    servicesBtn.forEach(item => (item.disabled = false));

    this.setState({
      selectTime: null,
      priceSelectServices: null,
      selectServices: null,
      date: null
    });
  };

  render() {
    const {
      services,
      priceSelectServices,
      selectDate,
      selectSpecialist,
      isLoaded,
      onRecord,
      selectTime,
      err
    } = this.state;

    const dataTime = [
      "8:00",
      "9:00",
      "11:00",
      "12:00",
      "14:30",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00"
    ];

    return (
      <>
        <Helmet>
          <title>Запись на прием</title>
        </Helmet>
        <Menu />
        <button onClick={this.onClearSelected}>clear</button>
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
                          id={index}
                          className="service-item__button"
                          onClick={() => this.onSelectService(item, index)}
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
                    <span>{selectTime}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="selected-date">
            <div className="container">
              <div className="selected-date-wrapper">
                <div className="selected-date__heading">
                  <h2>Выберите дату и время</h2>
                </div>
                <Calandar updateData={this.updateData} />
                <div className="time-wrapper select-wrapper">
                  {dataTime.map((time, index) => (
                    <Button
                      key={index}
                      className="time-btn"
                      onClick={() => {
                        this.onSelectTime(time);
                      }}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="selected-specialist">
            <div className="container">
              {onRecord ? (
                <Preloader />
              ) : (
                <Button onClick={this.onRecord}>Записаться</Button>
              )}
              {err ? (
                <span className="error-appointment">
                  <Image
                    src={process.env.PUBLIC_URL + "./image/cancel.svg"}
                    width={20}
                    height={20}
                  />
                  {err}
                </span>
              ) : (
                ""
              )}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Appointment;
