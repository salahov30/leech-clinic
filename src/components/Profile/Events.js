import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "../Button";
import Icon from "../Icon";
import { formatDate } from "../../helpers/formateDate";
import { HOST } from "../../constans";
import "./profile.css";
import axios from "axios";

class PersonalInfo extends Component {
  state = {
    events: this.props.user,
    status: null
  };

  onDismiss = id => {
    this.setState(prevState => ({
      events: prevState.events.filter(el => el._id !== id)
    }));

    axios
      .delete(`${HOST}/api/user/events/${id}`)
      .then(() => {
        this.setState({
          status: 200
        });
      })
      .catch(
        this.setState({
          status: 400
        })
      );
  };

  render() {
    const { events, status } = this.state;
    return (
      <>
        <div className="profile__heading">
          <h2>События</h2>
        </div>
        <div className="profile__info">
          <div className="events">
            {events.length === 0 ? (
              <div className="profile__info-empty">
                <Icon name="fas fa-calendar-alt" size={10} />
                <p>Пока нет никаких событий</p>
              </div>
            ) : (
              <div>
                <ul className="events-header">
                  <li>Услуга</li>
                  <li />
                  <li>Дата</li>
                  <li>Отказ от услуги</li>
                </ul>
                <ul className="event-list">
                  {events.map((event, i) => (
                    <div className="events-item" key={i}>
                      <li>
                        {event.service.join(", ")}
                        <br />
                      </li>
                      <li>{event.time}</li>
                      <li>{formatDate(event.date)}</li>
                      <li>
                        <Button
                          className="secondary-btn"
                          onClick={() => {
                            this.onDismiss(event._id);
                          }}
                        >
                          Отказаться
                        </Button>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {status === 200 ? (
          <div className="successfully">Запись отменена</div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default withRouter(PersonalInfo);
