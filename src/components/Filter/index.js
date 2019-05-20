import React, { Component } from "react";
import { map, cloneDeep, filter } from "lodash";
import axios from "axios";

import "./style.scss";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.onToggle = this.onToggle.bind(this);
    this.onClean = this.onClean.bind(this);
    this.onFilter = this.onFilter.bind(this);

    const brands = cloneDeep(this.props.brands);

    this.state = {
      brands: brands,
      filterQuery: {
        brands: [],
      },
    };
  }

  getCards() {
    axios
      .post("/cards", {
        brands: this.state.filterQuery.brands,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onToggle(id) {
    const brands = map(this.state.brands, i => {
      if (i.id === id) {
        i.select = !i.select;
      }
      return i;
    });

    this.setState({
      brands: brands,
    });
  }

  onClean() {
    this.setState(
      {
        brands: this.props.brands,
        filterQuery: {
          brands: [],
        },
      },
      this.getCards
    );
  }

  onFilter() {
    const filterBrands = filter(
      this.state.brands,
      item => item.select === true
    );
    const filterQuery = cloneDeep(this.state.filterQuery);

    filterQuery.brands = map(filterBrands, item => {
      return item.id;
    });

    this.setState(
      {
        filterQuery,
      },
      this.getCards
    );
  }

  render() {
    return (
      <div className={"filter"}>
        <button className={"filter__button"} onClick={this.onFilter}>
          Показать результат
        </button>
        <button
          className={"filter__button filter__button_gray"}
          onClick={this.onClean}>
          Очистить фильтр
        </button>
        <div className={"filter__option-block"}>
          <h3 className={"filter__option-name"}>Производитель</h3>
          <ul className={"filter__option-list"}>
            {map(this.state.brands, (item, id) => {
              return (
                <li className={"filter__option-item"} key={id}>
                  <div
                    className={
                      item.select
                        ? "filter__checkbox_selected filter__checkbox"
                        : "filter__checkbox"
                    }
                    onClick={this.onToggle.bind(this, id)}>
                    {item.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
