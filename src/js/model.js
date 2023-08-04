import { WEEK } from './config.js';
import { filterDate, getNextDay } from './helpers.js';

export const state = {
  allTasks: [],
  todayTasks: [],
  weekTasks: [],
  favouriteTasks: [],
  folders: [],
  search: {},
};

const getWeekDate = function () {
  let dateArr = [];
  for (let i = 1; i < WEEK + 1; i++) {
    dateArr.push(filterDate(getNextDay(i)));
  }
  return dateArr;
};

export const storeTask = function (task) {
  state.allTasks.push(task);
};

export const filterCategories = function (task) {
  if (task.date === filterDate(new Date())) state.todayTasks.push(task);
  if (getWeekDate().includes(task.date)) state.weekTasks.push(task);
};

export const addFavourite = function (dataIndex) {
  const data = state.allTasks[dataIndex];
  data.favourite = true;
  state.favouriteTasks.push(data);
};

export const deleteFavourite = function (dataIndex) {
  const data = state.allTasks[dataIndex];
  const index = state.favouriteTasks.findIndex(obj => obj === data);
  data.favourite = false;
  state.favouriteTasks.splice(index, 1);
};
