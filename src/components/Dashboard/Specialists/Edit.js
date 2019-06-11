import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Input from "../../Input";
import SpecicalistCard from "../../SpecialistCard";
import Button from "../../Button";

class Edit extends Component {
  state = {
    isLoaded: true
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  onUpdate = e => {
    e.preventDefault();
    const id = this.props.editData._id;
    const Specialist = {
      id: id,
      fullname: this.state.fullname,
      url: this.state.url,
      photo: this.state.photo,
      speciality: this.state.speciality,
      bio: this.state.bio,
      license: this.state.license
    };
    console.log(Specialist);

    axios
      .put("http://localhost:5000/api/specialists/update", Specialist)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.request.response);
        this.setState({
          error: err
        });
      });
  };

  render() {
    const { editData, title } = this.props;

    return (
      <>
        <section className="specialist-section section-edit">
          <header className="specialists-header">
            <h2>{title}</h2>
          </header>
          <form className="specialist-from">
            <Input
              id="fullname"
              label="ФИО"
              type="text"
              onChange={this.handleInputChange}
              required
            />
            <Input
              id="speciality"
              label="Специальность"
              type="text"
              onChange={this.handleInputChange}
              required
            />
            <Input
              id="bio"
              label="Биография"
              onChange={this.handleInputChange}
            />
            <Input
              id="licenses"
              label="Лицензии"
              onChange={this.handleInputChange}
            />
            <Input
              id="photo"
              type="file"
              label="Фотография"
              onChange={this.handleImageChange}
              required
            />
            <Input
              id="url"
              type="text"
              label="Ссылка на профиль"
              onChange={this.handleInputChange}
              required
            />
            <Button
              className="secondary-btn dashboard-edit-btn"
              onClick={this.onUpdate}
            >
              Добавить
            </Button>
          </form>
          <div className="specialist-card-wrapper__edit">
            <SpecicalistCard
              className="specicalist-card__form-add "
              name={
                !this.state.fullname ? editData.fullname : this.state.fullname
              }
              speciality={
                !this.state.speciality
                  ? editData.speciality
                  : this.state.speciality
              }
              image={!this.state.photo ? editData.photo : this.state.photo}
              textLink="Подробнее"
              linkUrl={`/specialists/${
                !this.state.url ? editData.url : this.state.url
              }`}
            />
          </div>
        </section>
      </>
    );
  }
}

Edit.propTypes = {
  fullname: PropTypes.string,
  speciality: PropTypes.string,
  photo: PropTypes.string,
  url: PropTypes.string
};

Edit.defaultProps = {
  fullname: "ФИО",
  speciality: "Специальность",
  photo: "",
  editData: {},
  url: "#"
};

export default Edit;
