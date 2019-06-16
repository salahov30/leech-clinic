import React from "react";
import classnames from "classnames";

import * as calendar from "./calendar";

import "./calendar.css";

class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2024,
      2026,
      2027,
      2028,
      2029,
      2030,
      2031
    ],
    month: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    weekDay: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectDate: null
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMouthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);
    this.setState({ date });
  };

  handleNextMouthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);
    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;
    const date = new Date(year, month);
    this.setState({ date });
  };

  handleDayClick = date => {
    this.setState({ selectDate: date });
    this.props.onChange(date);
  };

  render() {
    const { years, month, weekDay, updateData } = this.props;
    const { currentDate, selectDate } = this.state;

    const monthData = calendar.getMonthDate(this.year, this.month);

    return (
      <div className="calendar-container">
        <div className="calendar">
          <div className="calendar-control">
            <button onClick={this.handlePrevMouthButtonClick}>{"<"}</button>

            <select
              onChange={this.handleSelectChange}
              ref={element => (this.monthSelect = element)}
              value={this.month}
            >
              {month.map((name, index) => (
                <option key={name} value={index}>
                  {name}
                </option>
              ))}
            </select>

            <select
              onChange={this.handleSelectChange}
              ref={element => (this.yearSelect = element)}
              value={this.year}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <button onClick={this.handleNextMouthButtonClick}>{">"}</button>
          </div>

          <div className="calendar-grid-container">
            <table className="calendar-grid">
              <thead className="calendar-grid__week-day">
                <tr>
                  {weekDay.map((name, index) => (
                    <th key={index}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="calendar-grid__month-day">
                {monthData.map((week, index) => (
                  <tr key={index}>
                    {week.map((date, index) =>
                      date ? (
                        <td
                          key={index}
                          onClick={() => this.handleDayClick(date)}
                          className={classnames("day", {
                            today: calendar.areEqual(date, currentDate),
                            selected: calendar.areEqual(date, selectDate)
                          })}
                        >
                          <button
                            className="calendar-btn"
                            onClick={e => {
                              e.preventDefault();
                              const output = document.querySelector(
                                ".output-price"
                              );
                              output.style.display = "inline-block";
                              updateData(this.state.selectDate);
                            }}
                          >
                            {date.getDate()}
                          </button>
                        </td>
                      ) : (
                        <td key={index} />
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
