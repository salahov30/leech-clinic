import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import Image from '../Image';
import Icon from '../Icon';
import './specialists.css';

function Specialists() {
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
              <div className="col-lg-7">
                <h1>Специалисты</h1>
                <p>
                  От профессионализма и квалификации сотрудников клиники зависит
                  качество оказания услуг. Клиника “Leech clinic” постоянно
                  повышает квалификацию своего персонала, отправляя сотрудников
                  в города, где более развиты данные виды медицины. Заказывая
                  услуги гирудотерапии, можно быть уверенным, что клиент получит
                  квалифицированную и исчерпывающую консультацию специалиста по
                  вопросам обслуживания клиентов, стоимости и время выполнения
                  процедур. Клиника предоставляет письменную ответственность за
                  выполнение услуг.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="icon-wrapper">
                  <Icon
                    name="fas fa-user-md"
                    size={13}
                    className="specialist-icon"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="specialist-card">
                  <div className="card-header">
                    <Image
                      className="card-image"
                      width={400}
                      height={500}
                      alt="Специалист клиники"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Голиков Валерий Геннадьевич</h3>
                    <span>Кандидат медицинских наук</span>
                    <Link to="/">Подробнее</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="specialist-card">
                  <div className="card-header">
                    <Image className="card-image" width={400} height={500} />
                  </div>
                  <div className="card-content">
                    <h3>Голиков Валерий Геннадьевич</h3>
                    <span>Врач</span>
                    <Link to="/">Подробнее</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="specialist-card">
                  <div className="card-header">
                    <Image className="card-image" width={400} height={500} />
                  </div>
                  <div className="card-content">
                    <h3>Абдулаева Разия Хайрулаевна</h3>
                    <span>Медсестра</span>
                    <Link to="/">Подробнее</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specialists;
