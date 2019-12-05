import {createSiteMenuTemplate} from './components/site-menu';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskTemplate} from './components/create-task';
import {createTaskEditTemplate} from './components/task-edit';
import {createLoadMoreBtnTemplate} from './components/load-more-btn';

const render = (container, template) => {
  container.insertAdjacentHTML(`beforeend`, template);
};

const siteMainElevent = document.querySelector(`.main`);
const siteHeaderElement = siteMainElevent.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElevent, createFilterTemplate());
render(siteMainElevent, createBoardTemplate());

const boardElement = siteMainElevent.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(boardElement, createLoadMoreBtnTemplate());
render(taskListElement, createTaskEditTemplate());

[``, ``, ``].map(() => render(taskListElement, createTaskTemplate()));
