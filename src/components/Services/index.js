import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

import Menu from "../Menu";
import Preloader from "../PreloaderButton";
import ServiceItem from "./ServicesItem";
import Button from "../Button";
import Image from "../Image";
import "./services.css";

class Services extends Component {
  state = {
    service: [],
    isLoaded: false,
    calcPrice: 0
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

  onColculation = price => {
    const output = document.querySelector(".output-price");
    output.style.display = "inline-block";
    this.setState({
      calcPrice: this.state.calcPrice + price
    });
  };

  render() {
    const { service, isLoaded, calcPrice } = this.state;

    return (
      <>
        <Helmet>
          <title>Услуги</title>
        </Helmet>
        <Menu />
        <main>
          <section className="services">
            <div className="container">
              <header className="services-heading">
                <h1>
                  Услуги
                  <span>Чем мы можем помочь</span>
                </h1>
              </header>
              <article className="services-list-wrapper">
                {isLoaded ? (
                  <ul className="tile-list">
                    {service.map((item, index) => (
                      <li key={index} className="tile-list__item">
                        <Button
                          className="service-item__button"
                          onClick={() => this.onColculation(item.price)}
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
                  <span className="calc-price">
                    Итог: <span className="calc-price-number">{calcPrice}</span>
                    <Image
                      width={25}
                      height={25}
                      alt="Знак рубля"
                      src={process.env.PUBLIC_URL + "/image/ruble.png"}
                    />
                  </span>
                  <div className="button-wrapper">
                    <Button>Записаться на прием</Button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default withRouter(Services);
