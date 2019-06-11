import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Menu from "../Menu";
import Image from "../Image";
import Preloader from "../PreloaderButton";
import SpecialistCard from "../SpecialistCard";
import "./specialists.css";

class Specialists extends Component {
  state = {
    specialists: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/specialists")
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

  render() {
    const { isLoaded, specialists } = this.state;

    return (
      <>
        <Helmet>
          <title>Специалисты</title>
        </Helmet>
        <Menu />
        <section className="specialists-wrapper">
          <div className="container">
            <div className="specialists-content">
              <div className="row">
                <div className="col-lg-7 first-sm first-md first-lg">
                  <div className="specialist-heading">
                    <h1>
                      Наши доктора<span>Лучшие специалисты</span>
                    </h1>
                  </div>
                  <p>
                    От профессионализма и квалификации сотрудников клиники
                    зависит качество оказания услуг. Клиника “Leech clinic”
                    постоянно повышает квалификацию своего персонала, отправляя
                    сотрудников в города, где более развиты данные виды
                    медицины. Заказывая услуги гирудотерапии, можно быть
                    уверенным, что клиент получит квалифицированную и
                    исчерпывающую консультацию специалиста по вопросам
                    обслуживания клиентов, стоимости и время выполнения
                    процедур. Клиника предоставляет письменную ответственность
                    за выполнение услуг.
                  </p>
                </div>
                <div className="col-sm-12 first-xs col-lg-5">
                  <div className="icon-wrapper">
                    <Image
                      className="specialist-image"
                      src={
                        process.env.PUBLIC_URL + "/image/cover-specialist.jpg"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="card-wrapper">
                {isLoaded ? (
                  specialists.map((specialist, index) => (
                    <SpecialistCard
                      key={index}
                      name={specialist.fullname}
                      specialty={specialist.speciality}
                      textLink="Подробнее"
                      linkUrl={`/specialists/${specialist.url}`}
                      image={specialist.photo}
                    />
                  ))
                ) : (
                  <Preloader />
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Specialists;
