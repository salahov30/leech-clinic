import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

import Menu from "../Menu";
import Button from "../Button";
import Input from "../Input";
import Icon from "../Icon";
import PreloaderButton from "../PreloaderButton";
import "./registration.css";

export class Registration extends Component {
  _isMounted = false;

  state = {
    name: "",
    phone: "",
    password: "",
    error: "",
    isLoaded: false
  };

  componentDidMount() {
    this._isMounted = true;
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      name: value
    });
  };

  handlePhoneChange = ({ target: { value } }) => {
    this.setState({
      phone: value
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      isLoaded: true
    });

    const User = {
      name: this.state.name,
      phone: this.state.phone,
      password: this.state.password
    };
    axios
      .put("http://localhost:5000/api/user/register", User)
      .then(res => {
        this.props.history.push("/login");
        if (this._isMounted) {
          this.setState({
            user: res.data
          });
        }
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoaded: false
        });
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { error, isLoaded } = this.state;

    return (
      <>
        <Helmet>
          <title>Регистрация</title>
        </Helmet>
        <Menu />
        <main>
          <section className="auth">
            <div className="container">
              <div className="auth-wrapper">
                <h1>Регистрация</h1>
                <div className="col-lg-6">
                  <div className="auth-wrapper__agreement">
                    <span>
                      Нажимая кнопку «Зарегистрироваться» я подтверждаю своё
                      согласие на сбор, хранение, использование, номера телефона
                      и других персональных данных для регистрации в Leech
                      clinic в соответствии с ФЗ “О персональных данных” от
                      27.07.2006 №152-ФЗ.”
                    </span>
                  </div>
                </div>
                <form className="auth-form">
                  <div className="error">
                    {error ? error.request.response : ""}
                  </div>
                  <Input
                    className="auth-input"
                    id="name"
                    label="Имя"
                    type="name"
                    placeholder="Введите ваше имя"
                    onChange={this.handleNameChange}
                    required
                  />
                  <Input
                    className="auth-input"
                    id="phone"
                    label="Телефон"
                    type="phone"
                    mask="+7 (999) 999-99-99"
                    placeholder="Введите номер телефона"
                    onChange={this.handlePhoneChange}
                    required
                  />
                  <Input
                    className="auth-input"
                    id="password"
                    label="Пароль"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={this.handlePasswordChange}
                    required
                  />
                  {!isLoaded ? (
                    <Button
                      type="submit"
                      className="btn-signup"
                      onClick={this.onSubmit}
                    >
                      Зарегистрироваться
                    </Button>
                  ) : (
                    <PreloaderButton />
                  )}
                  <Link to="/login" className="auth-link">
                    Войти
                    <Icon className="auth-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        />
                      </svg>
                    </Icon>
                  </Link>
                </form>
              </div>
              <div className="auth-privacy">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-offset-3 col-lg-6">
                      <p>
                        Не сообщайте пароль и код подтверждения, чтобы этим не
                        воспользовались мошенники. Сотрудник клиники никогда их
                        не спросит. Проверяйте сайт клиники в адресной строке:
                        leech-clinic.ru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Registration;
