import React, { Component } from 'react';
import { getJwt } from '../../helpers/jwt';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import Menu from '../Menu';
import Image from '../Image';
import Button from '../Button';
import Settings from './Settings';
import Personal from './PersonalInfo';
import MedicalCard from './MedicalCard';
import Events from './Events';
import Preloader from '../Preloader';
import './profile.css';

class Profile extends Component {
  state = {
    user: '',
    error: '',
  };

  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push('/login');
    }

    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/user/',
      mode: 'cors',
      headers: { 'auth-token': `${jwt}`, 'Access-Control-Allow-Origin': true },
    })
      .then(res => {
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        localStorage.removeItem('auth-token');
        this.props.history.push('/login');
        console.log(err);
      });
  }

  onLogOut = e => {
    e.preventDefault();
    localStorage.removeItem('auth-token');
    this.props.history.push('/login');
  };

  render() {
    const { user } = this.state;

    if (!user) {
      return (
        <div>
          <Menu />
          <Preloader />
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>{user.name}</title>
        </Helmet>
        <Menu />
        <Router>
          <main>
            <section className="profile">
              <div className="container">
                <div className="profile-heading">
                  <h1>Профиль</h1>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <aside className="profile-info">
                      <Link to={`/profile`}>
                        <Image
                          className="profile-info__image"
                          src={user.photo}
                          circle
                          width={150}
                          height={150}
                          alt="Фотография пользователя"
                        />
                      </Link>
                      <h2 className="profile-info__name">{user.name}</h2>
                      <nav className="aside-menu">
                        <ul className="aside-menu__list">
                          <li>
                            <Link to={`/profile`}>Информация</Link>
                          </li>
                          <li>
                            <Link to={`/profile/settings`}>
                              Настройки профиля
                            </Link>
                          </li>
                          <li>
                            <Link to={`/profile/medical-card`}>
                              Медицинаская карта
                            </Link>
                          </li>
                          <li>
                            <Link to={`/profile/events`}>События</Link>
                          </li>
                        </ul>
                      </nav>
                      <Button onClick={this.onLogOut}>Выход</Button>
                    </aside>
                  </div>
                  <div className="col-lg-9">
                    <section className="profile-content">
                      <Route
                        exact
                        path="/profile"
                        render={() => <Personal user={user} />}
                      />
                      <Route
                        exact
                        path="/profile/settings"
                        component={Settings}
                      />
                      <Route
                        exact
                        path="/profile/medical-card"
                        component={MedicalCard}
                      />
                      <Route exact path="/profile/events" component={Events} />
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Router>
      </>
    );
  }
}

export default withRouter(Profile);
