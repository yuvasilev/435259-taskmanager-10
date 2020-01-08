import SiteMenuComponent from './components/site-menu';
import FilterComponent from './components/filter';
import BoardComponent from './components/board';
import TaskComponent from './components/task';
import TaskEditComponent from './components/task-edit';
import LoadMoreBtnComponent from './components/load-more-btn';

import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task";
import {render, RenderPosition} from './utils.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditComponent(task);

  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  });

  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  });

  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(generateFilters()).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();

render(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);

const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(0, showingTasksCount)
  .forEach((task) => renderTask(task));

const loadMoreBtnComponent = new LoadMoreBtnComponent();
render(boardComponent.getElement(), loadMoreBtnComponent.getElement(), RenderPosition.BEFOREEND);

loadMoreBtnComponent.getElement().addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTask(task));

  if (showingTasksCount >= tasks.length) {
    loadMoreBtnComponent.getElement().remove();
    loadMoreBtnComponent.removeElement();
  }
});

