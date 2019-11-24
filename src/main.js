import {creatMenuTopTemplate} from './components/menuTop.js';

import {creatFilterTamplate} from './components/filter.js';

import {createBoardTemplate} from './components/board.js';

import {createTascEditTemplate} from './components/tascEdit.js';

import {creatTasckTemplate} from './components/tasck.js';

import {createMoreButtonTamplatenn} from './components/moreButton.js';

//вставляем разметку в блок
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

//находим классы куда вставлять разметку
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

//вставляем разметку из функций render в нужные места 
render(siteHeaderElement, creatMenuTopTemplate(), `beforeEnd`);
render(siteMainElement, creatFilterTamplate(), `beforeEnd`);
render(siteMainElement, createBoardTemplate(), `beforeEnd`);

const taskTasksElement = document.querySelector(`.board__tasks`);
render(taskTasksElement, createTascEditTemplate(), `beforeEnd`);


const tasksArray = ['', '', ''];

const mapTasksCount = tasksArray.map((tasksArray) => {
  render(taskTasksElement, creatTasckTemplate(),`beforeEnd`);
});


const boardElement = document.querySelector(`.board`);
render(boardElement, createMoreButtonTamplate(), `beforeEnd`);




