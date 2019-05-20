import React, { Component } from "react";
import axios from "axios";

import "./style.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    this.onFav = this.onFav.bind(this);
  }

  onFav() {
    axios
      .post("/card", {
        productID: this.props.id,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const item = this.props.item;

    return (
      <div className={"card"}>
        <div className={"card__article"}>{item.article}</div>
        <img src={item.img} alt="preview image" className={"card__preview"} />
        <div className={"card__availability card__availability_true"}>
          В наличии
        </div>
        <h2 className={"card__title"}>{item.title}</h2>
        <div className={"card__description-list"}>
          <p className={"card__description-item"}>
            <span className={"card__description-name"}>Физический размер </span>
            {item.size}
          </p>
          <p className={"card__description-item"}>
            <span className={"card__description-name"}>Диафрагма </span>
            {item.aperture}
          </p>
          <p className={"card__description-item"}>
            <span className={"card__description-name"}>Формат записи </span>
            {item.format}
          </p>
          <p className={"card__description-item"}>
            <span className={"card__description-name"}>
              Фокусное расстояние
            </span>{" "}
            {item.focal_length}
          </p>
        </div>
        <div className={"card__controls"}>
          <button className={"card__button"}>Купить</button>
          <button
            className={"card__icon-button card__icon-button_favorite"}
            onClick={this.onFav}
          />
          <button className={"card__icon-button card__icon-button_scales"} />
        </div>
      </div>
    );
  }
}

export default Card;
