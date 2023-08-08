import { WEEK } from './config.js';
import { filterDate, getNextDay } from './helpers.js';

export const state = {
  allTasks: [],
  todayTasks: [],
  weekTasks: [],
  favouriteTasks: [],
  folders: [],
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
  if (data.favourite) state.favouriteTasks.push(data);
};

export const storeTask = function (data, folderIndex = false) {
  data.favourite = false;
  state.allTasks.push(data);
  filterCategories(data);

  if (folderIndex >= 0) state.folders[folderIndex]?.tasks.push(data);

  persistTasksAndFolders();
};

export const checkTaskDetail = function (data) {
  const allTodo = state.allTasks.map(obj => obj.todo);
  const allDate = state.allTasks.map(obj => obj.date);
  if (allTodo.includes(data.todo) && allDate.includes(data.date)) return true;
  else false;
};

const findData = function (dataIndex, type, typeIndex) {
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

  persistTasksAndFolders();
};

export const deleteFavourite = function (dataIndex, type, typeIndex) {
  const data = findData(dataIndex, type, typeIndex);
  const index = state.favouriteTasks.findIndex(obj => obj === data);
  data.favourite = false;
  state.favouriteTasks.splice(index, 1);

  persistTasksAndFolders();
};

export const deleteTask = function (dataIndex, type, typeIndex) {
  const data = findData(dataIndex, type, typeIndex);
  findAndDeleteIndex(0, 4, data);

  persistTasksAndFolders();
};

const resetCategories = function (data) {
  findAndDeleteIndex(1, 3, data, true); // true = Don't want to remove tasks in the folder
  filterCategories(data);
};

export const editData = function (newData, curDataIndex, type, typeIndex) {
  const data = findData(curDataIndex, type, typeIndex);
  data.todo = newData.todo;
  data.date = newData.date;
  resetCategories(data);

  persistTasksAndFolders();
};

export const checkFolderName = function (folder) {
  return state.folders.map(obj => obj.name).includes(folder.name);
};

export const storeFolder = function (folder) {
  folder.tasks = [];
  state.folders.push(folder);

  persistTasksAndFolders();
};

export const deleteFolder = function (folderIndex) {
  const dataArr = state.folders[folderIndex].tasks;
  state.folders.splice(folderIndex, 1);
  dataArr.forEach(data => findAndDeleteIndex(0, 4, data));

  persistTasksAndFolders();
};

const persistTasksAndFolders = function () {
  localStorage.setItem('allTasks', JSON.stringify(state.allTasks));
  localStorage.setItem('folders', JSON.stringify(state.folders));
};

// Need to check as the value!
// If data is checked as an obj, it will return -1 bcs it isn't the same obj in the heap.
const convertFolderDataInStorage = function () {
  if (state.folders.length === 0) return;

  const tasksArr = state.folders.map(obj => obj.tasks); // [[{}, {}], ...]

  // Find Index
  let allIndexArr = [];
  for (let i = 0; i < tasksArr.length; i++) {
    const indexArr = tasksArr[i].map(obj =>
      state.allTasks.findIndex(
        (data, i) =>
          data.todo === obj.todo &&
          data.date === obj.date &&
          data.favourite === obj.favourite &&
          !allIndexArr.flat().includes(i)
      )
    );
    allIndexArr.push(indexArr);
  }

  // Store new data
  for (let i = 0; i < state.folders.length; i++) {
    const indexArr = allIndexArr[i];
    for (let j = 0; j < state.folders[i].tasks.length; j++) {
      state.folders[i].tasks[j] = state.allTasks[indexArr[j]];
    }
  }
};

export const getTasksAndFolders = function () {
  const allTasksStorage = localStorage.getItem('allTasks');
  const foldersStorage = localStorage.getItem('folders');
  if (allTasksStorage) state.allTasks = JSON.parse(allTasksStorage);
  if (foldersStorage) state.folders = JSON.parse(foldersStorage);

  // Change 'tasks' property in folder referring to allTasks data or to be the same obj in the heap
  if (state.allTasks.length === 0) return;
  convertFolderDataInStorage();

  // Filter
  state.allTasks.forEach(data => filterCategories(data));
};
getTasksAndFolders();

const clearTasksAndFolders = function () {
  localStorage.clear('allTasks');
  localStorage.clear('folders');
};
// clearTasksAndFolders();
