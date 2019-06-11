import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { withRouter, Link } from "react-router-dom";

import Menu from "../Menu";
import Preloader from "../PreloaderButton";
import ServiceItem from "./ServicesItem";

import "./services.css";

class Services extends Component {
  state = {
    service: [],
    isLoaded: false
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

  render() {
    const { service, isLoaded } = this.state;

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
                        <Link to={`/services/${item.url}`}>
                          <ServiceItem
                            key={index}
                            url={item.url}
                            name={item.name}
                            price={item.price}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Preloader />
                )}
              </article>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default withRouter(Services);
