import React from "react";

import Menu from "../Menu";
import "./about.css";

const SpecialistPage = () => {
  return (
    <>
      <main>
        <Menu />
        <section className="about">
          <div className="container">
            <h1>О клинике</h1>
            <p>
              Клиника “Leech clinic” была открыта в 2006 году. За этот
              значительный промежуток времени в нашей клинике сформировался
              опытный, высококвалифицированный коллектив, состоящий из врачей,
              готовых каждый день оказывать помощь пациентам в решении их
              проблем, связанных со здоровьем и красотой тела.
            </p>
            <p>
              В клинике “Leech clinic” приемлемые цены за предоставляемые
              услуги. Это позволяет компании поддерживать свою популярность
              клиники среди пациентов. Для всех пациентов предоставляются те
              услуги, которые они выбрали, и все пациенты обслуживаются
              независимо от статуса и положения. Среди многообразия современных
              медицинских услуг непросто найти клинику, в которой пациента
              устраивало бы все, начиная от качества медицинского обслуживания,
              цены на услуги и заканчивая транспортной доступностью.
            </p>
            <p>
              От профессионализма и квалификации сотрудников клиники зависит
              качество оказания услуг. Клиника “Leech clinic” постоянно повышает
              квалификацию своего персонала, отправляя сотрудников в города, где
              более развиты данные виды медицины. Заказывая услуги
              гирудотерапии, можно быть уверенным, что клиент получит
              квалифицированную и исчерпывающую консультацию специалиста по
              вопросам обслуживания клиентов, стоимости и время выполнения
              процедур. Клиника предоставляет письменную ответственность за
              выполнение услуг.
            </p>
            <p>
              Клиника “Leech clinic” отвечает самым взыскательным требованиям.
              Прием ведут высококвалифицированные специалисты, находится в самом
              сердце города, оказывает широкий спектр медицинской помощи по
              доступным ценам и, что важно,оснащен новейшим оборудованием.
            </p>
            <p>
              Клиника “Leech clinic” – это сочетание ряда преимуществ, которые
              позволяют обеспечить высококвалифицированную медицинскую помощь.
              Во всем, что касается Вашего здоровья, - медицинский персонал,
              оснащение, технологии, сервис – мы ориентируемся на лучшее.
            </p>
            <div>
              <h2>
                Перечень болезней и состояний, при которых клиника “Leech
                clinic” окажет помощь, обширен:
              </h2>
              <ul>
                <li>
                  проблемы с сердцем. Слюна кольчатого червя уменьшает
                  свертываемость крови, насыщает ее кислородом, уменьшает отеки
                </li>
                <li>
                  заболевания ЖКТ. Пиявки улучшают состояние при гастрите,
                  панкреатите, холецистите и пр.
                </li>
                <li>неврологические проблемы</li>
                <li>урологические заболевания</li>
                <li>
                  болезни дыхательной системы (от тонзиллита до пневмонии)
                </li>
                <li>гинекологические проблемы</li>
                <li>
                  заболевания кожи, среди которых — бородавки, угри, псориаз,
                  экземы
                </li>
                <li>
                  эндокринологические проблемы — например, сахарный диабет и
                  (или) ожирение
                </li>
              </ul>
              <p>
                Медицинский центр лечения пиявкой осуществляет деятельность в
                соответствии с нормами и требованиями законодательства РФ. Он
                может предоставить имеющиеся разрешения на все виды оказываемых
                услуг.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpecialistPage;
