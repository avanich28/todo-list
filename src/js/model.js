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
  console.log(state.folders, typeIndex, type);
  const data =
    type === 'filter'
      ? Object.values(state)[typeIndex][dataIndex]
      : state.folders[typeIndex].tasks[dataIndex];
  return data;
};

// Delete data in each filter and folder
const findAndDeleteIndex = function (start, end, data, edit = false) {
  for (let i = start; i < end; i++) {
    const index = Object.values(state)[i].findIndex(obj => obj === data);
    if (index === -1) continue;
    else Object.values(state)[i].splice(index, 1);
  }

  if (!edit) {
    for (let i = 0; i < state.folders.length; i++) {
      const index = state.folders[i].tasks.findIndex(obj => obj === data);
      if (index === -1) continue;
      else state.folders[i].tasks.splice(index, 1);
    }
  }
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
};

export const deleteTask = function (dataIndex, type, typeIndex) {
  const data = findData(dataIndex, type, typeIndex);
  findAndDeleteIndex(0, 4, data);
};

const resetCategories = function (data) {
  findAndDeleteIndex(1, 3, data, true);
  filterCategories(data);
};

export const editData = function (newData, curDataIndex, type, typeIndex) {
  const data = findData(curDataIndex, type, typeIndex);
  data.todo = newData.todo;
  data.date = newData.date;
  resetCategories(data);
};

export const checkFolderName = function (folder) {
  return state.folders.map(obj => obj.name).includes(folder.name);
};

export const storeFolder = function (folder) {
  folder.tasks = [];
  state.folders.push(folder);
};

export const deleteFolder = function (folderIndex) {
  const dataArr = state.folders[folderIndex].tasks;
  state.folders.splice(folderIndex, 1);
  dataArr.forEach(data => findAndDeleteIndex(0, 4, data));
};
