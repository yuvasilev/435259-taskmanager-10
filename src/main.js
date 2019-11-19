//функция шаблона
const creatMenuTopTemplate = () => {
  return (
//    шаблонные строки
  `
    <section class="control__btn-wrap">
      <input
        type="radio"
        name="control"
        id="control__new-task"
        class="control__input visually-hidden"
      />
      <label for="control__new-task" class="control__label control__label--new-task"
        >+ ADD NEW TASK</label
      >
      <input
        type="radio"
        name="control"
        id="control__task"
        class="control__input visually-hidden"
        checked
      />
      <label for="control__task" class="control__label">TASKS</label>
      <input
        type="radio"
        name="control"
        id="control__statistic"
        class="control__input visually-hidden"
      />
      <label for="control__statistic" class="control__label"
        >STATISTICS</label
      >
    </section>
  `
  );
};

//вставляем разметку в блок
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

//находим классы куда вставлять разметку
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

//вставляем разметку из функций render в нужные места 
render(siteHeaderElement, creatMenuTopTemplate(), `beforeEnd`);

