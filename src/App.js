import { useState } from "react";
import "./reset.css";
import "./App.css";
import "./style.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [cvw, setCvw] = useState("");

  const [numberBorder, setNumberBorder] = useState(false);
  const [nameBorder, setNameBorder] = useState(false);
  const [yearBorder, setYearBorder] = useState(false);
  const [monthBorder, setMonthBorder] = useState(false);
  const [cvwBorder, setCvwBorder] = useState(false);
  const [roteBack, setRoteBack] = useState(false);
  const [roteFront, setRoteFront] = useState(false);

  const handleFocusNumber = () => {
    setNumberBorder(!numberBorder);
  };

  const handleFocusName = () => {
    setNameBorder(!nameBorder);
  };
  const handleFocusYear = () => {
    setYearBorder(!yearBorder);
  };
  const handleFocusMonth = () => {
    setMonthBorder(!monthBorder);
  };
  const handleFocusCvw = () => {
    setCvwBorder(!cvwBorder);
    setRoteBack(!roteBack);
    setRoteFront(!roteFront);
  };

  const regexp = /^(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,4})?$/;
  const handleChangeNumber = (e) => {
    let number = e.target.value.replace(/[^0-9]/g, "");
    number = [...regexp.exec(number)]
      .slice(1)
      .filter((e) => e)
      .join(" ");

    setNumber(number);
  };
  //name
  const handleChangeName = (e) => {
    let name = e.target.value;
    if (!name.match(/^[a-zA-Z]+$/)) {
      name = name.slice(0, name.length - 1);
    }
    setName(name);
  };

  //year
  const handleChangeYear = (e) => {
    let year = e.target.value;
    if (!year.match(/^([0-9]|0[1-9]|[1-2][0-9]|3[0-1])$/)) {
      year = year.slice(0, year.length - 1);
    }
    setYear(year);
  };

  //month
  const handleChangeMonth = (e) => {
    let month = e.target.value;
    if (!month.match(/^([0-9]|1[0-2]|0[1-9])$/)) {
      month = month.slice(0, month.length - 1);
    }
    setMonth(month);
  };

  //cvw
  const handleChangeCVW = (e) => {
    let cvw = e.target.value;
    if (!cvw.match(/^[0-9]+$/)) {
      cvw = cvw.slice(0, cvw.length - 1);
    }
    setCvw(cvw);
  };

  return (
    <div className="App">
      <div className="p-card">
        <div className="p-card__output">
          <div className={`p-card__front ${roteFront ? "rote--front" : ""}`}>
            <div className="p-card__top">
              <p className="p-card__visa">VISA</p>
            </div>
            <div className="p-card__middle">
              <div className="p-card__text">Card Number</div>
              <div
                className={`p-card__item p-card__number ${
                  numberBorder ? "border" : ""
                }`}
              >
                {number}
              </div>
            </div>
            <div className="p-card__down">
              <div className="p-card__downleft">
                <div className="p-card__text">Name</div>
                <div
                  className={`p-card__item p-card__name ${
                    nameBorder ? "border" : ""
                  }`}
                >
                  {name}
                </div>
              </div>
              <div className="p-card__downright">
                <div className="p-card__text">Expiration Date</div>
                <div className="p-card__date">
                  <div
                    className={`p-card__item p-card__month ${
                      monthBorder ? "border" : ""
                    }`}
                  >
                    {month}
                  </div>
                  <div
                    className={`p-card__item p-card__year ${
                      yearBorder ? "border" : ""
                    }`}
                  >
                    {year}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-card__back ${roteBack ? "rote--back" : ""}`}>
            <div className="p-card__primary">
              <div className="p-card__text">CVW</div>
              <div
                className={`p-card__item p-card__cvw ${
                  cvwBorder ? "border" : ""
                } ${cvwBorder ? "border--cvw" : ""}`}
              >
                {cvw}
              </div>
            </div>
            <div className="p-card__secondary">
              <p className="p-card__visa">VISA</p>
            </div>
          </div>
        </div>
        <div className="p-card__input">
          <div className="p-card__text">Card Number</div>
          <input
            name="number"
            placeholder="Card Number"
            type="text"
            maxLength="19"
            value={number}
            onChange={handleChangeNumber}
            onFocus={handleFocusNumber}
            onBlur={handleFocusNumber}
          />
          <div className="p-card__text">Name</div>
          <input
            name="name"
            placeholder="Card Name"
            type="text"
            maxLength="19"
            value={name}
            onChange={handleChangeName}
            onFocus={handleFocusName}
            onBlur={handleFocusName}
          />
          <div className="p-card__text">Expiration Date</div>
          <div className="p-card__date">
            <input
              name="Month"
              placeholder="Month"
              type="text"
              maxLength="2"
              value={month}
              onChange={handleChangeMonth}
              onFocus={handleFocusMonth}
              onBlur={handleFocusMonth}
            />
            <input
              name="Year"
              placeholder="Year"
              type="text"
              maxLength="2"
              value={year}
              onChange={handleChangeYear}
              onFocus={handleFocusYear}
              onBlur={handleFocusYear}
            />
          </div>

          <div className="p-card__text">CVW</div>
          <input
            name="cvwr"
            placeholder="CVW"
            type="text"
            maxLength="3"
            value={cvw}
            onChange={handleChangeCVW}
            onFocus={handleFocusCvw}
            onBlur={handleFocusCvw}
          />
        </div>
        <button className="c-btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
