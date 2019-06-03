import React from "react";
import { Helmet } from "react-helmet";

import Menu from "../Menu";
import Calandar from "../Calendar";
import SpecialistCard from "../SpecialistCard";
import "./appointment.css";

const Appointment = () => {
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
              <div className="services-list__wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <ul className="services-list">
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="services-list">
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="services-list">
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                      <li className="services-list__item">
                        <button className="list-services__button">
                          Услуга
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
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
              <Calandar />
            </div>
          </div>
        </section>
        <section className="selected-specialist">
          <div className="container">
            <div className="selected-specialist-wrapper">
              <div className="selected-specialist__heading">
                <h2>Выберите специалиста</h2>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <SpecialistCard
                    image={""}
                    name="Климов Илья Сергеевич"
                    specialty="Доктор"
                    textBtn="Записаться"
                  />
                </div>
                <div className="col-lg-3">
                  <SpecialistCard
                    image={""}
                    name="Климов Илья Сергеевич"
                    specialty="Доктор"
                    textBtn="Записаться"
                  />
                </div>
                <div className="col-lg-3">
                  <SpecialistCard
                    image={""}
                    name="Климов Илья Сергеевич"
                    specialty="Доктор"
                    textBtn="Записаться"
                  />
                </div>
                <div className="col-lg-3">
                  <SpecialistCard
                    image={""}
                    name="Климов Илья Сергеевич"
                    specialty="Доктор"
                    textBtn="Записаться"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Appointment;
