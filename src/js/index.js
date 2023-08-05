import '../style.css';
import checkMark from '../img/checkmark.png';
import * as model from './model.js';
import mode from './views/modeView.js';
import addTaskView from './views/addTaskView.js';
import editTaskView from './views/editTaskView.js';
import filterView from './views/filterView.js';
import resultsView from './views/resultsView.js';

const controlAddTaskView = function (data) {
  model.storeTask(data);
  model.filterCategories(data);
  resultsView.render(data);
};

const controlFilterView = function (dataTypeIndex) {
  const dataSet = Object.values(model.state)[dataTypeIndex]; // FIXME

  // Clear display
  resultsView.clear();

  // Render display
  if (dataSet.length !== 0) dataSet.forEach(data => resultsView.render(data));

  // Allow user to add list only 'all' filter
  if (dataTypeIndex === 0) addTaskView.unHideAddTaskView();
  else addTaskView.hideAddTaskView();
};

const controlFavourite = function (dataIndex) {
  if (!model.state.allTasks[dataIndex].favourite) model.addFavourite(dataIndex);
  else model.deleteFavourite(dataIndex);

  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME

  resultsView.update(dataSet);
};

const controlDelete = function (dataIndex) {
  model.deleteTask(dataIndex);
  resultsView.clear();

  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME

  if (dataSet.length !== 0) dataSet.forEach(data => resultsView.render(data));
};

const controlEdit = function (dataIndex) {
  addTaskView.hideAddTaskView();

  editTaskView.getForm(model.state.allTasks[dataIndex], dataIndex);
};

const controlEditTask = function (newData, curDataIndex) {
  model.editData(newData, curDataIndex);
  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME
  resultsView.update(dataSet);
  addTaskView.unHideAddTaskView();
};

const init = function () {
  addTaskView.addHandlerUpload(controlAddTaskView);
  filterView.addHandlerClick(controlFilterView);
  editTaskView.addHandlerUploadEdit(controlEditTask);
  resultsView.addHandlerFavourite(controlFavourite);
  resultsView.addHandlerDelete(controlDelete);
  resultsView.addHandlerEdit(controlEdit);

  // Default
  filterView.getDefaultClick();
};
init();
