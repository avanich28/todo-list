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

const filterCategories = function (data) {
  if (data.date === filterDate(new Date())) state.todayTasks.push(data);
  if (getWeekDate().includes(data.date)) state.weekTasks.push(data);
};

export const storeTask = function (data, folderIndex = false) {
  data.favourite = false;
  state.allTasks.push(data);
  filterCategories(data);

  if (folderIndex >= 0) state.folders[folderIndex]?.tasks.push(data);
};

const findData = function (dataIndex, type, typeIndex) {
  const data =
    type === 'filter'
      ? Object.values(state)[typeIndex][dataIndex]
      : state.folders[typeIndex].tasks[dataIndex];
  return data;
};

export const addFavourite = function (dataIndex, type, typeIndex) {
  const data = findData(dataIndex, type, typeIndex);
  data.favourite = true;
  state.favouriteTasks.push(data);
};

export const deleteFavourite = function (dataIndex, type, typeIndex) {
  const data = findData(dataIndex, type, typeIndex);
  const index = state.favouriteTasks.findIndex(obj => obj === data);
  data.favourite = false;
  state.favouriteTasks.splice(index, 1);
  console.log(state.favouriteTasks);
};

const findAndDeleteIndex = function (start, end, data) {
  for (let i = start; i < end; i++) {
    const index = Object.values(state)[i].findIndex(obj => obj === data);
    if (index === -1) continue;
    else Object.values(state)[i].splice(index, 1);
  }
};

export const deleteTask = function (dataIndex) {
  const data = state.allTasks[dataIndex];
  data.splice(dataIndex, 1);
  findAndDeleteIndex(0, 4, data);
};

const resetCategories = function (curDataIndex) {
  const data = state.allTasks[curDataIndex];
  findAndDeleteIndex(1, 3, data);
  filterCategories(state.allTasks[curDataIndex]);
};

export const editData = function (newData, curDataIndex) {
  state.allTasks[curDataIndex].todo = newData.todo;
  state.allTasks[curDataIndex].date = newData.date;
  resetCategories(curDataIndex);
};

export const storeFolder = function (folder) {
  folder.tasks = [];
  state.folders.push(folder);
  console.log(state.folders);
};
