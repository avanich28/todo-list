import '../style.css';
import checkMark from '../img/checkmark.png';
import * as model from './model.js';
import mode from './views/modeView.js';
import addTaskView from './views/addTaskView.js';
import editTaskView from './views/editTaskView.js';
import addProjectTaskView from './views/addProjectTaskView.js';
import filterView from './views/filterView.js';
import resultTasksView from './views/resultTasksView.js';
import resultProjectsView from './views/resultProjectsView.js';

const controlAddTaskView = function (data) {
  model.storeTask(data);
  resultTasksView.render(model.state.allTasks.at(-1)); // FIXME mode.state.allTasks, project folder
};

const controlFilterView = function (dataTypeIndex) {
  const dataSet = Object.values(model.state)[dataTypeIndex]; // FIXME

  // Clear display
  resultTasksView.clear();

  // Render display
  if (dataSet.length !== 0)
    dataSet.forEach(data => resultTasksView.render(data));

  // Allow user to add list only 'all' filter
  if (dataTypeIndex === 0) addTaskView.unHideAddTaskView();
  else addTaskView.hideAddTaskView();
};

const controlFavourite = function (dataIndex) {
  if (!model.state.allTasks[dataIndex].favourite) model.addFavourite(dataIndex);
  else model.deleteFavourite(dataIndex);

  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME

  resultTasksView.update(dataSet);
};

const controlDelete = function (dataIndex) {
  model.deleteTask(dataIndex);
  resultTasksView.clear();

  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME

  if (dataSet.length !== 0)
    dataSet.forEach(data => resultTasksView.render(data));
};

const controlEdit = function (dataIndex) {
  addTaskView.hideAddTaskView();

  editTaskView.getForm(model.state.allTasks[dataIndex], dataIndex);
};

const controlEditTask = function (newData, curDataIndex) {
  model.editData(newData, curDataIndex);
  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME
  resultTasksView.update(dataSet);
  addTaskView.unHideAddTaskView();
};

const controlAddProject = function (folder) {
  model.storeFolder(folder);
  resultProjectsView.render(model.state.folders.at(-1));
};

const controlClickFolder = function (folderIndex) {
  const dataSet = model.state.folders[folderIndex].tasks;
  resultTasksView.clear();
  if (dataSet.length !== 0)
    dataSet.forEach(data => resultTasksView.render(data));
  addTaskView.unHideAddTaskView();
};

const init = function () {
  addTaskView.addHandlerUpload(controlAddTaskView);
  filterView.addHandlerClick(controlFilterView);
  editTaskView.addHandlerUploadEdit(controlEditTask);
  addProjectTaskView.addHandlerUploadFolder(controlAddProject);
  resultTasksView.addHandlerFavourite(controlFavourite);
  resultTasksView.addHandlerDelete(controlDelete);
  resultTasksView.addHandlerEdit(controlEdit);
  resultProjectsView.addHandlerClickFolder(controlClickFolder);

  // Default
  filterView.getDefaultClick();
};
init();
