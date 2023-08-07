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
  // Store Data
  const folderIndex = resultProjectsView.getCurProject();
  if (folderIndex >= 0) model.storeTask(data, folderIndex);
  else model.storeTask(data);

  // Render Data
  resultTasksView.render(model.state.allTasks.at(-1));
};

const controlFilterView = function (dataTypeIndex) {
  addTaskView.hideModal();
  addProjectTaskView.hideModal();
  editTaskView.hideModal();

  resultProjectsView.resetCurProject();

  const dataSet = Object.values(model.state)[dataTypeIndex];

  // Clear display
  resultTasksView.clear();

  // Render display
  if (dataSet.length !== 0)
    dataSet.forEach(data => resultTasksView.render(data));
  console.log(filterView.getCurFilter());

  // Allow user to add list only 'all' filter
  if (dataTypeIndex === 0) addTaskView.unHideAddTaskView();
  else addTaskView.hideAddTaskView();
};

const controlFavourite = function (dataIndex) {
  addTaskView.hideModal();
  addProjectTaskView.hideModal();
  editTaskView.hideModal();

  // Type
  const type = filterView.getCurFilter() >= 0 ? 'filter' : 'folder';

  // Store Type Index
  const typeIndex =
    type === 'filter'
      ? filterView.getCurFilter()
      : resultProjectsView.getCurProject();

  // Check favourite boolean value
  const result =
    type === 'filter'
      ? Object.values(model.state)[typeIndex][dataIndex].favourite
      : model.state.folders[typeIndex].tasks[dataIndex].favourite;

  // Toggle favourite
  if (!result) model.addFavourite(dataIndex, type, typeIndex);
  else model.deleteFavourite(dataIndex, type, typeIndex);

  // Get data array
  const dataSet =
    type === 'filter'
      ? Object.values(model.state)[typeIndex]
      : model.state.folders[typeIndex].tasks;

  // Render
  if (type === 'filter' && typeIndex === 3) {
    resultTasksView.clear();
    dataSet.length > 0
      ? dataSet.forEach(data => resultTasksView.render(data))
      : '';
  } else {
    resultTasksView.update(dataSet);
  }
};

const controlDelete = function (dataIndex) {
  addTaskView.hideModal();
  addProjectTaskView.hideModal();
  editTaskView.hideModal();

  const type = filterView.getCurFilter() >= 0 ? 'filter' : 'folder';

  const typeIndex =
    type === 'filter'
      ? filterView.getCurFilter()
      : resultProjectsView.getCurProject();

  model.deleteTask(dataIndex, type, typeIndex);

  const dataSet =
    type === 'filter'
      ? Object.values(model.state)[typeIndex]
      : model.state.folders[typeIndex].tasks;

  resultTasksView.clear();
  if (dataSet.length > 0) dataSet.forEach(data => resultTasksView.render(data));
};

const controlEdit = function (dataIndex) {
  addProjectTaskView.hideModal();
  addTaskView.hideAddTaskView();

  editTaskView.getForm(model.state.allTasks[dataIndex], dataIndex); // FIXME
};

const controlEditTask = function (newData, curDataIndex) {
  model.editData(newData, curDataIndex);
  // const folderIndex = resultProjectsView.getCurProject();

  // const dataSet =
  //   folderIndex >= 0
  //     ? model.state.folders[folderIndex].tasks
  //     : Object.values(model.state)[filterView.getCurFilter()];
  const dataSet = Object.values(model.state)[filterView.getCurFilter()]; // FIXME
  resultTasksView.update(dataSet);
  addTaskView.unHideAddTaskView(); // FIXME
};

const controlAddProject = function (folder) {
  model.storeFolder(folder);
  resultProjectsView.render(model.state.folders.at(-1));
};

const controlClickFolder = function (folderIndex) {
  addTaskView.hideModal();
  addProjectTaskView.hideModal();

  filterView.resetCurFilter();

  const dataSet = model.state.folders[folderIndex].tasks;
  resultTasksView.clear();
  if (dataSet.length > 0) dataSet.forEach(data => resultTasksView.render(data));
  addTaskView.unHideAddTaskView();
  // TODO
  // delete folder
  // delete task in filter
  // re-render
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

  // Hide form when click other places
  addTaskView.clickAddTaskBtn(
    addProjectTaskView.hideModal.bind(addProjectTaskView)
  );
  addProjectTaskView.clickAddProjectBtn(
    addTaskView.hideModal.bind(addTaskView)
  );

  // Default
  filterView.getDefaultClick();
};
init();
