import '../style.css';
import checkMark from '../img/checkmark.png';
import * as model from './model.js';
import mode from './views/modeView.js';
import addTaskView from './views/addTaskView.js';
import filterView from './views/filterView.js';
import resultsView from './views/resultsView.js';
import favouriteView from './views/favouriteView.js';

const controlAddTaskView = function (data) {
  model.storeTask(data);
  model.filterCategories(data);
  resultsView.render(data);
};

const controlFilterView = function (dataTypeIndex) {
  const dataSet = Object.values(model.state)[dataTypeIndex];

  // Clear display
  resultsView.clear();

  // Render display
  if (dataSet.length === 0) resultsView.render(null);
  else dataSet.forEach(data => resultsView.render(data));

  // Allow user to add list only 'all' filter
  if (dataTypeIndex !== 0) addTaskView.hideAddTaskView();
  else addTaskView.unHideAddTaskView();
};

const controlFavouriteView = function (dataIndex) {
  if (!model.state.allTasks[dataIndex].favourite) model.addFavourite(dataIndex);
  else model.deleteFavourite(dataIndex);

  const dataSet = Object.values(model.state)[filterView.getCurFilter()];

  // const newMarkUp = dataSet
  //   .map(data => resultsView.render(data, false))
  //   .join('');

  resultsView.update(dataSet);

  // resultsView.render(model.state.allTasks[dataIndex]);
};

const init = function () {
  addTaskView.addHandlerUpload(controlAddTaskView);
  filterView.addHandlerClick(controlFilterView);
  favouriteView.addHandlerFavouriteView(controlFavouriteView);

  // Default
  filterView.getDefaultClick();
};
init();
