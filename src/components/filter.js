import {createElement} from "../utils";

const createFilterMarkup = (filter, isChecked) => {
  return (
    `<input
        type="radio"
        id="filter__${filter.name}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
    />
    <label for="filter__${filter.name}" class="filter__label">
      ${filter.name} 
      <span class="filter__archive-count">${filter.count}</span>
    </label>`
  );
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, index) => createFilterMarkup(it, index === 0)).join(``);

  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}  
    </section>`
  );
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
