import React from "react";
import { Helmet } from "react-helmet";

import Menu from "../Menu";
import Icon from "../Icon";
import "./specialists.css";
import SpecialistCard from "../SpecialistCard";

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
              <div className="col-lg-3">
                <SpecialistCard
                  image={""}
                  name="Симоненко Алексей Юзва"
                  specialty="Медбрат"
                  textLink="Подробнее"
                  linkUrl="/specialist/2"
                />
              </div>
              <div className="col-lg-3">
                <SpecialistCard
                  image={""}
                  name="Климов Илья Сергеевич"
                  specialty="Доктор"
                  textLink="Подробнее"
                  linkUrl="/specialist/2"
                />
              </div>
              <div className="col-lg-3">
                <SpecialistCard
                  image={""}
                  name="Смирнова Анастасия Евгеньевна"
                  specialty="Медсестра"
                  textLink="Подробнее"
                  linkUrl="/specialist/2"
                />
              </div>
              <div className="col-lg-3">
                <SpecialistCard
                  image={""}
                  name="Климов Илья Сергеевич"
                  specialty="Доктор"
                  textLink="Подробнее"
                  linkUrl="/specialist/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specialists;
