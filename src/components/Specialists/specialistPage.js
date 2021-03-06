import React, { Component } from "react";
import axios from "axios";

import Menu from "../Menu";
import Image from "../Image";
import Preloader from "../Preloader";
import { HOST } from "../../constans";

class SpecialistPage extends Component {
  state = {
    specialists: [],
    isLoaded: false
  };
  componentDidMount() {
    const { match } = this.props;
    const url = {
      url: match.params.id
    };
    axios
      .post(`${HOST}/api/specialists/specialist`, url)
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
    const { specialists, isLoaded } = this.state;
    console.log(specialists);

    return (
      <>
        <main>
          <Menu />
          {isLoaded ? (
            <article className="specialist">
              <div className="container">
                <div className="wrapper-specialist">
                  <Image
                    className="specialist-photo"
                    src={specialists.photo}
                    width={270}
                    height={390}
                  />
                  <div className="specialist-info">
                    <h1 className="specialist-name">{specialists.fullname}</h1>
                    <p className="specialist-speciality">
                      Специальность: {specialists.speciality}
                    </p>
                    <p className="specialist-bio">
                      Образование: {specialists.bio}
                    </p>
                    <p className="education">Сертификаты:</p>
                    <ul className="specialist-licenses">
                      {specialists.licenses.map(item => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <Preloader />
          )}
        </main>
      </>
    );
  }
}

export default SpecialistPage;
