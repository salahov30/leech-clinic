import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, withRouter, Link } from "react-router-dom";

import Icon from "../Icon";
import Specialists from "./Specialists";
import Services from "./Services/index";
import Rewies from "./Rewies";
import Users from "./Users";
import Information from "./Information";
import Button from "../Button";

import "./dashboard.css";

export class Dashboard extends Component {
  onLogOut = e => {
    e.preventDefault();
    localStorage.removeItem("auth-token");
    this.props.history.push("/login");
  };

  render() {
    const { match } = this.props;
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <BrowserRouter>
          <main className="dashboard">
            <header className="dashboard-header">
              <a href="/dashboard">
                <span className="dashboard-logo">
                  <Icon name="fas fa-columns" />
                  Админпанель
                </span>
              </a>
            </header>
            <aside className="dashboard-aside">
              <nav className="dashboard-navigation">
                <ul className="navigation-list">
                  <li className="navigation-item">
                    <Link
                      to={`${match.url}/specialists`}
                      className="navigation-item__link"
                    >
                      <Icon name="fas fa-user-tag" />
                      <span className="navigation-item__link-url">
                        Cпециалисты
                      </span>
                    </Link>
                  </li>
                  <li className="navigation-item">
                    <Link
                      to={`${match.url}/services`}
                      className="navigation-item__link"
                    >
                      <Icon name="fas fa-list-ul" />
                      <span className="navigation-item__link-url">Услуги</span>
                    </Link>
                  </li>

                  <li className="navigation-item">
                    <Link
                      to={`${match.url}/rewies`}
                      className="navigation-item__link"
                    >
                      <Icon name="far fa-comment-dots" />
                      <span className="navigation-item__link-url">Отзывы</span>
                    </Link>
                  </li>
                  <li className="navigation-item">
                    <Link
                      to={`${match.url}/users`}
                      className="navigation-item__link"
                    >
                      <Icon name="fas fa-users" />
                      <span className="navigation-item__link-url">
                        Пользователи
                      </span>
                    </Link>
                  </li>
                  <li className="navigation-item">
                    <Link to={`${match.url}`} className="navigation-item__link">
                      <Icon name="fas fa-info-circle" />
                      <span className="navigation-item__link-url">
                        Информация
                      </span>
                    </Link>
                  </li>
                  <li className="navigation-item">
                    <a href="/" className="navigation-item__link">
                      <Icon name="far fa-window-maximize" />
                      <span className="navigation-item__link-url">На сайт</span>
                    </a>
                  </li>
                  <li className="navigation-item">
                    <Button
                      onClick={this.onLogOut}
                      className="navigation-item__button"
                    >
                      <Icon name="fas fa-sign-out-alt" />
                      <span className="navigation-item__link-url">Выход</span>
                    </Button>
                  </li>
                </ul>
              </nav>
            </aside>
            <section className="dashboard-section">
              <Route
                exact
                path={`${match.url}/specialists`}
                render={() => <Specialists />}
              />
              <Route
                exact
                path={`${match.url}/services`}
                render={() => <Services />}
              />
              <Route
                exact
                path={`${match.url}/rewies`}
                render={() => <Rewies />}
              />
              <Route
                exact
                path={`${match.url}/users`}
                render={() => <Users />}
              />
              <Route
                exact
                path={`${match.url}`}
                render={() => <Information />}
              />
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default withRouter(Dashboard);
