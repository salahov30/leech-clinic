import React from "react";
import { Helmet } from "react-helmet";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Link } from "react-router-dom";

import Menu from "../Menu";
import Imgae from "../Image";
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
      <section
        aria-label="Представление клиники"
        className="descktop-banner-wrapper"
      >
        <div className="container">
          <div className="wrapper">
            <div className="left-column">
              <h1>Каждый достоин лучшего</h1>
              <p>
                <strong>Leech clinic</strong> - отвечает самым взыскательным
                требованиям. Прием ведут высококвалифицированные специалисты,
                находится в самом сердце города, оказывает широкий спектр
                медицинской помощи по доступным ценам и, что важно,оснащен
                новейшим оборудованием.
              </p>
              <Link className="secondary-btn " to="/about">
                О клинике
              </Link>
            </div>
            <div className="right-column">
              <h2>Cпециалисты </h2>
              <p>
                От профессионализма и квалификации сотрудников клиники зависит
                качество оказания услуг. Клиника “Leech clinic” постоянно
                повышает квалификацию своего персонала, отправляя сотрудников в
                города, где более развиты данные виды медицины.
              </p>
              <a
                href="https://www.youtube.com/watch?v=pYlsAH8C5bY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Посмотреть видео
                <Icon name="far fa-play-circle" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-label="Краткое описание клиники"
        className="section-about-wrapper"
      >
        <div className="container">
          <article
            aria-label="Краткое описание клиники"
            className="about-content"
          >
            <header className="about-heading">
              <h2>
                О клинике<span>Принципы работы</span>
              </h2>
              <p className="about-description">
                Клиника “Leech clinic” – это сочетание ряда преимуществ, которые
                позволяют обеспечить высококвалифицированную медицинскую помощь.
                Во всем, что касается Вашего здоровья, - медицинский персонал,
                оснащение, технологии, сервис – мы ориентируемся на лучшее.
              </p>
            </header>
            <section
              aria-label="Список преимуществ"
              className="advantages-list"
            >
              <article
                aria-label="Карточка преимущества"
                className="adventages-card"
              >
                <header className="adventages-card__heading">
                  <div className="image-wrapper">
                    <Imgae
                      src={process.env.PUBLIC_URL + "/image/med-list.png"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3>С чем мы можем помочь</h3>
                </header>
                <section
                  aria-label="Список проблем, с которыми клиника может помочь"
                  className="card-list__section"
                >
                  <ul className="card-list">
                    <li>
                      <span>Проблемы с сердцем</span>
                    </li>
                    <li>
                      <span>Заболевания ЖК</span>
                    </li>
                    <li>
                      <span>Неврологические проблемы</span>
                    </li>
                    <li>
                      <span>Урологические заболевания</span>
                    </li>
                    <li>
                      <span>Болезни дыхательной системы</span>
                    </li>
                    <li>
                      <span>Гинекологические проблемы</span>
                    </li>
                    <li>
                      <span>Заболевания кожи, среди которых</span>
                    </li>
                    <li>
                      <span>Эндокринологические проблемы</span>
                    </li>
                  </ul>
                </section>
              </article>
              <article
                aria-label="Карточка оборудования"
                className="adventages-card"
              >
                <header className="adventages-card__heading">
                  <div className="image-wrapper">
                    <Imgae
                      src={process.env.PUBLIC_URL + "/image/doctor.png"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3>Наше оборудование</h3>
                </header>
                <section
                  aria-label="Оборудование в клинике"
                  className="card-list__section"
                >
                  <ul className="card-list">
                    <li>
                      <span>Проблемы с сердцем</span>
                    </li>
                    <li>
                      <span>Заболевания ЖК</span>
                    </li>
                    <li>
                      <span>Неврологические проблемы</span>
                    </li>
                    <li>
                      <span>Урологические заболевания</span>
                    </li>
                    <li>
                      <span>Болезни дыхательной системы</span>
                    </li>
                  </ul>
                </section>
              </article>
              <article
                aria-label="Карточка условий прибывания"
                className="adventages-card"
              >
                <header className="adventages-card__heading">
                  <div className="image-wrapper">
                    <Imgae
                      src={process.env.PUBLIC_URL + "/image/room.png"}
                      width={100}
                      height={100}
                      alt="Иконка. Крвоать в больнице"
                    />
                  </div>
                  <h3>Условия прибывания</h3>
                </header>
                <section
                  aria-label="Список условий прибывания"
                  className="card-list__section"
                >
                  <ul className="card-list">
                    <li>
                      <span>Проблемы с сердцем</span>
                    </li>
                    <li>
                      <span>Заболевания ЖК</span>
                    </li>
                    <li>
                      <span>Неврологические проблемы</span>
                    </li>
                  </ul>
                </section>
              </article>
            </section>
          </article>
        </div>
      </section>
      <section
        aria-label="Предложение записаться на прием"
        className="call-to-action--wrapper"
      >
        <div className="container">
          <article
            aria-label="Предложение записаться на прием"
            className="call-to-action__banner"
          >
            <div className="call-to-action__text">
              <h3>Запишитесь на прием</h3>
              <p>Зарегистрируйтесь на прием не выходя из дома</p>
            </div>
            <Link to="/appointment">Записаться</Link>
          </article>
        </div>
      </section>
      <section
        aria-label="Контактные данные"
        className="section-location-wrapper"
      >
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
