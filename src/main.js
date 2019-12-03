import {createSiteMenuTemplate} from './components/site-menu';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';
import {createLoadMoreBtnTemplate} from './components/load-more-btn';

import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template) => {
  container.insertAdjacentHTML(`beforeend`, template);
};

const siteMainElevent = document.querySelector(`.main`);
const siteHeaderElement = siteMainElevent.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElevent, createFilterTemplate(generateFilters()));
render(siteMainElevent, createBoardTemplate());

const boardElement = siteMainElevent.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);

render(boardElement, createLoadMoreBtnTemplate());
render(taskListElement, createTaskEditTemplate());

tasks.slice(1, SHOWING_TASKS_COUNT_ON_START).forEach((task) => render(taskListElement, createTaskTemplate(task)));
