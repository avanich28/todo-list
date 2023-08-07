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

const checkAndGetDataType = function () {
  const type = filterView.getCurFilter() >= 0 ? 'filter' : 'folder';

  const typeIndex =
    type === 'filter'
      ? filterView.getCurFilter()
      : resultProjectsView.getCurProject();

  const dataSet =
    type === 'filter'
      ? Object.values(model.state)[typeIndex]
      : model.state.folders[typeIndex]?.tasks;

  return { type, typeIndex, dataSet };
};

const controlAddTaskView = function (data) {
  const { type, typeIndex } = checkAndGetDataType();

  // Store Data
  if (type === 'folder' && typeIndex >= 0) model.storeTask(data, typeIndex);
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

  // Allow user to add list only 'all' filter
  if (dataTypeIndex === 0) addTaskView.unHideAddTaskView();
  else addTaskView.hideAddTaskView();
};

const controlFavourite = function (dataIndex) {
  addTaskView.hideModal();
  addProjectTaskView.hideModal();
  editTaskView.hideModal();

  const { type, typeIndex, dataSet } = checkAndGetDataType();

  // Check favourite boolean value
  const result =
    type === 'filter'
      ? dataSet[dataIndex].favourite
      : dataSet[dataIndex].favourite;

  // Toggle favourite
  if (!result) model.addFavourite(dataIndex, type, typeIndex);
  else model.deleteFavourite(dataIndex, type, typeIndex);

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

  const { type, typeIndex, dataSet } = checkAndGetDataType();

  model.deleteTask(dataIndex, type, typeIndex);

  resultTasksView.clear();
  if (dataSet.length > 0) dataSet.forEach(data => resultTasksView.render(data));
};

const controlEdit = function (dataIndex) {
  addProjectTaskView.hideModal();
  addTaskView.hideAddTaskView();
  editTaskView.hideModal();

  const dataType = checkAndGetDataType();

  editTaskView.getForm(dataType.dataSet[dataIndex], dataIndex);
};

const controlEditTask = function (newData, curDataIndex) {
  const { type, typeIndex, dataSet } = checkAndGetDataType();

  model.editData(newData, curDataIndex, type, typeIndex);

  resultTasksView.update(dataSet);
  addTaskView.unHideAddTaskView();
};

const controlAddProject = function (folder) {
  if (model.checkFolderName(folder)) {
    alert('This name is already used. Please fill again : D');
  } else {
    model.storeFolder(folder);
    resultProjectsView.render(model.state.folders.at(-1));
  }
};

const controlClickFolder = function (folderIndex) {
  addTaskView.hideModal();
  addProjectTaskView.hideModal();
  editTaskView.hideModal();

  filterView.resetCurFilter();

  const dataSet = model.state.folders[folderIndex].tasks;
  resultTasksView.clear();
  if (dataSet.length > 0) dataSet.forEach(data => resultTasksView.render(data));
  addTaskView.unHideAddTaskView();
};

const controlDeleteFolder = function (folderIndex) {
  // Delete folder
  model.deleteFolder(folderIndex);

  // Re-render project folder
  resultProjectsView.clear();
  model.state.folders.forEach(folder => resultProjectsView.render(folder));

  // Re-render task
  const { type, dataSet } = checkAndGetDataType();
  resultTasksView.clear();
  if (type === 'folder') filterView.getDefaultClick();
  else dataSet.forEach(data => resultTasksView.render(data));
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
  resultProjectsView.addHandlerDeleteFolder(controlDeleteFolder);

  // Hide form when click other places
  addTaskView.clickAddTaskBtn(
    addProjectTaskView.hideModal.bind(addProjectTaskView)
  );
  addProjectTaskView.clickAddProjectBtn(
    addTaskView.hideModal.bind(addTaskView),
    editTaskView.hideModal.bind(editTaskView)
  );

  // Default
  filterView.getDefaultClick();
};
init();
