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
  )
};

export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, index) => createFilterMarkup(it, index === 0)).join(``);

  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}  
    </section>`
  );
};

