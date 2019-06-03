import React from "react";
import { Helmet } from "react-helmet";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Link } from "react-router-dom";

import Menu from "../Menu";
import Icon from "../Icon";

import "./home.css";

const coordinates = [[54.988667, 73.376405]];

const mapData = {
  center: [54.988667, 73.376405],
  zoom: 17,
  controls: ["zoomControl", "fullscreenControl"]
};

const Home = () => (
  <>
    <Helmet>
      <title>Главная страница</title>
    </Helmet>
    <Menu />
    <main>
      <section className="descktop-banner-wrapper">
        <div className="container">
          <div className="descktop-banner">
            <div className="left-column">
              <h1>Записаться на прием</h1>
              <p>Запишитесь на прием не выходя из дома</p>
              <Link to="/appointment">Записаться</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about-wrapper">
        <div className="container">
          <div className="about">
            <div className="about-content">
              <h2>О нас</h2>
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-7">
                    <p>
                      Клиника “Leech clinic” была открыта в 2006 году. За этот
                      значительный промежуток времени в нашей клинике
                      сформировался опытный, высококвалифицированный коллектив,
                      состоящий из врачей, готовых каждый день оказывать помощь
                      пациентам в решении их проблем, связанных со здоровьем и
                      красотой тела.
                    </p>
                    <p>
                      В клинике “Leech clinic” приемлемые цены за
                      предоставляемые услуги. Это позволяет компании
                      поддерживать свою популярность клиники среди пациентов.
                      Для всех пациентов предоставляются те услуги, которые они
                      выбрали, и все пациенты обслуживаются независимо от
                      статуса и положения.
                    </p>
                    <p>
                      Среди многообразия современных медицинских услуг непросто
                      найти клинику, в которой пациента устраивало бы все,
                      начиная от качества медицинского обслуживания, цены на
                      услуги и заканчивая транспортной доступностью.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="about-image">
                      <Icon size={20} name="fas fa-info-circle" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="advantages-list">
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <Icon
                          size={2}
                          name="fas fa-user-md"
                          className="about-icons"
                        />
                        Квалифицированные врачи
                      </li>
                      <li>
                        <Icon
                          size={2}
                          name="fas fa-bed"
                          className="about-icons"
                        />
                        Комфортные комнаты отдыха
                      </li>
                      <li>
                        <Icon
                          size={2}
                          name="fas fa-bus-alt"
                          className="about-icons"
                        />
                        Удобное расположение клиники
                      </li>
                      <li>
                        <Icon
                          size={2}
                          name="fas fa-american-sign-language-interpreting"
                          className="about-icons"
                        />
                        Доступно всем категориям граждан
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <Icon
                          size={2}
                          name="far fa-comment-dots"
                          className="about-icons"
                        />
                        Отзывчивая администрация
                      </li>
                      <li>
                        <Icon
                          size={2}
                          name="fas fa-baby"
                          className="about-icons"
                        />
                        Наличие детских комнат
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-location-wrapper">
        <div className="container">
          <h2>Как нас найти</h2>
          <ul>
            <li>
              <a
                href="https://yandex.ru/maps/66/omsk/?from=api-maps&l=map&ll=73.376408%2C54.988645&mode=poi&origin=jsapi_2_1_73&poi%5Bpoint%5D=73.376505%2C54.988545&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D208960083506&pt=39.738521%2C57.684758&z=19"
                target="blank_"
              >
                <Icon
                  name="fas fa-map-marker-alt"
                  size={1}
                  className="location-icons"
                />
                ул.Гагарина, 24
              </a>
            </li>
            <li>
              <a href="tel:+7 956 452 78 96">
                <Icon name="fas fa-phone" size={1} className="location-icons" />
                +7 956 452 78 96
              </a>
            </li>
          </ul>
          <div className="map-wrapper">
            <YMaps>
              <Map
                state={mapData}
                width={"100%"}
                height={"550px"}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {coordinates.map((coordinate, i) => (
                  <Placemark key={i} geometry={coordinate} />
                ))}
              </Map>
            </YMaps>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Home;
