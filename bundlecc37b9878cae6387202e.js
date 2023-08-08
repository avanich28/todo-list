/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WEEK: () => (/* binding */ WEEK)
/* harmony export */ });
var WEEK = 7;

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterDate: () => (/* binding */ filterDate),
/* harmony export */   getNextDay: () => (/* binding */ getNextDay)
/* harmony export */ });
var filterDate = function filterDate(strDate) {
  return strDate.toISOString().slice(0, 10);
};
var getNextDay = function getNextDay() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var curDate = new Date();
  return new Date(curDate.setDate(curDate.getDate() + i));
};

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFavourite: () => (/* binding */ addFavourite),
/* harmony export */   checkFolderName: () => (/* binding */ checkFolderName),
/* harmony export */   checkTaskDetail: () => (/* binding */ checkTaskDetail),
/* harmony export */   deleteFavourite: () => (/* binding */ deleteFavourite),
/* harmony export */   deleteFolder: () => (/* binding */ deleteFolder),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editData: () => (/* binding */ editData),
/* harmony export */   getTasksAndFolders: () => (/* binding */ getTasksAndFolders),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   storeFolder: () => (/* binding */ storeFolder),
/* harmony export */   storeTask: () => (/* binding */ storeTask)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/js/helpers.js");


var state = {
  allTasks: [],
  todayTasks: [],
  weekTasks: [],
  favouriteTasks: [],
  folders: []
};
var getWeekDate = function getWeekDate() {
  var dateArr = [];
  for (var i = 1; i < _config_js__WEBPACK_IMPORTED_MODULE_0__.WEEK + 1; i++) {
    dateArr.push((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.filterDate)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getNextDay)(i)));
  }
  return dateArr;
};
var filterCategories = function filterCategories(data) {
  if (data.date === (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.filterDate)(new Date())) state.todayTasks.push(data);
  if (getWeekDate().includes(data.date)) state.weekTasks.push(data);
  if (data.favourite) state.favouriteTasks.push(data);
};
var storeTask = function storeTask(data) {
  var _state$folders$folder;
  var folderIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  data.favourite = false;
  state.allTasks.push(data);
  filterCategories(data);
  if (folderIndex >= 0) (_state$folders$folder = state.folders[folderIndex]) === null || _state$folders$folder === void 0 ? void 0 : _state$folders$folder.tasks.push(data);
  persistTasksAndFolders();
};
var checkTaskDetail = function checkTaskDetail(data) {
  var allTodo = state.allTasks.map(function (obj) {
    return obj.todo;
  });
  var allDate = state.allTasks.map(function (obj) {
    return obj.date;
  });
  if (allTodo.includes(data.todo) && allDate.includes(data.date)) return true;else false;
};
var findData = function findData(dataIndex, type, typeIndex) {
  var data = type === 'filter' ? Object.values(state)[typeIndex][dataIndex] : state.folders[typeIndex].tasks[dataIndex];
  return data;
};

// Delete data in each filter and folder
var findAndDeleteIndex = function findAndDeleteIndex(start, end, data) {
  var edit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  for (var i = start; i < end; i++) {
    var index = Object.values(state)[i].findIndex(function (obj) {
      return obj === data;
    });
    if (index === -1) continue;else Object.values(state)[i].splice(index, 1);
  }
  if (!edit) {
    for (var _i = 0; _i < state.folders.length; _i++) {
      var _index = state.folders[_i].tasks.findIndex(function (obj) {
        return obj === data;
      });
      if (_index === -1) continue;else state.folders[_i].tasks.splice(_index, 1);
    }
  }
};
var addFavourite = function addFavourite(dataIndex, type, typeIndex) {
  var data = findData(dataIndex, type, typeIndex);
  data.favourite = true;
  state.favouriteTasks.push(data);
  persistTasksAndFolders();
};
var deleteFavourite = function deleteFavourite(dataIndex, type, typeIndex) {
  var data = findData(dataIndex, type, typeIndex);
  var index = state.favouriteTasks.findIndex(function (obj) {
    return obj === data;
  });
  data.favourite = false;
  state.favouriteTasks.splice(index, 1);
  persistTasksAndFolders();
};
var deleteTask = function deleteTask(dataIndex, type, typeIndex) {
  var data = findData(dataIndex, type, typeIndex);
  findAndDeleteIndex(0, 4, data);
  persistTasksAndFolders();
};
var resetCategories = function resetCategories(data) {
  findAndDeleteIndex(1, 3, data, true); // true = Don't want to remove tasks in the folder
  filterCategories(data);
};
var editData = function editData(newData, curDataIndex, type, typeIndex) {
  var data = findData(curDataIndex, type, typeIndex);
  data.todo = newData.todo;
  data.date = newData.date;
  resetCategories(data);
  persistTasksAndFolders();
};
var checkFolderName = function checkFolderName(folder) {
  return state.folders.map(function (obj) {
    return obj.name;
  }).includes(folder.name);
};
var storeFolder = function storeFolder(folder) {
  folder.tasks = [];
  state.folders.push(folder);
  persistTasksAndFolders();
};
var deleteFolder = function deleteFolder(folderIndex) {
  var dataArr = state.folders[folderIndex].tasks;
  state.folders.splice(folderIndex, 1);
  dataArr.forEach(function (data) {
    return findAndDeleteIndex(0, 4, data);
  });
  persistTasksAndFolders();
};
var persistTasksAndFolders = function persistTasksAndFolders() {
  localStorage.setItem('allTasks', JSON.stringify(state.allTasks));
  localStorage.setItem('folders', JSON.stringify(state.folders));
};

// Need to check as the value!
// If data is checked as an obj, it will return -1 bcs it isn't the same obj in the heap.
var convertFolderDataInStorage = function convertFolderDataInStorage() {
  if (state.folders.length === 0) return;
  var tasksArr = state.folders.map(function (obj) {
    return obj.tasks;
  }); // [[{}, {}], ...]

  // Find Index
  var allIndexArr = [];
  for (var i = 0; i < tasksArr.length; i++) {
    var indexArr = tasksArr[i].map(function (obj) {
      return state.allTasks.findIndex(function (data, i) {
        return data.todo === obj.todo && data.date === obj.date && data.favourite === obj.favourite && !allIndexArr.flat().includes(i);
      });
    });
    allIndexArr.push(indexArr);
  }

  // Store new data
  for (var _i2 = 0; _i2 < state.folders.length; _i2++) {
    var _indexArr = allIndexArr[_i2];
    for (var j = 0; j < state.folders[_i2].tasks.length; j++) {
      state.folders[_i2].tasks[j] = state.allTasks[_indexArr[j]];
    }
  }
};
var getTasksAndFolders = function getTasksAndFolders() {
  var allTasksStorage = localStorage.getItem('allTasks');
  var foldersStorage = localStorage.getItem('folders');
  if (allTasksStorage) state.allTasks = JSON.parse(allTasksStorage);
  if (foldersStorage) state.folders = JSON.parse(foldersStorage);

  // Change 'tasks' property in folder referring to allTasks data or to be the same obj in the heap
  if (state.allTasks.length === 0) return;
  convertFolderDataInStorage();

  // Filter
  state.allTasks.forEach(function (data) {
    return filterCategories(data);
  });
};
getTasksAndFolders();
var clearTasksAndFolders = function clearTasksAndFolders() {
  localStorage.clear('allTasks');
  localStorage.clear('folders');
};
// clearTasksAndFolders();

/***/ }),

/***/ "./src/js/views/View.js":
/*!******************************!*\
  !*** ./src/js/views/View.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
    _defineProperty(this, "_data", void 0);
    _defineProperty(this, "_dummyArr", []);
  }
  _createClass(View, [{
    key: "render",
    value: function render(data) {
      var _render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!data) return;
      this._data = data;
      var markup = this._generateMarkup(_render);
      if (!_render) return markup;
      this._parentElement.insertAdjacentHTML('beforeend', markup);
    }
  }, {
    key: "update",
    value: function update(dataSet) {
      var _this = this;
      this._data = dataSet;
      var newMarkUp = this._data.map(function (data) {
        var html = _this.render(data, false);
        _this._dummyArr.push(0);
        return html;
      }).join('');
      this._dummyArr = [];

      // In memory
      var newDOM = document.createRange().createContextualFragment(newMarkUp);
      // Convert to Array
      var newElements = Array.from(newDOM.querySelectorAll('*'));
      var curElements = Array.from(this._parentElement.querySelectorAll('*'));

      // Compare
      newElements.forEach(function (newEl, i) {
        var _newEl$firstChild;
        var curEl = curElements[i];

        // Update text
        if (!newEl.isEqualNode(curEl) && ((_newEl$firstChild = newEl.firstChild) === null || _newEl$firstChild === void 0 ? void 0 : _newEl$firstChild.nodeValue.trim()) !== '') {
          curEl.textContent = newEl.textContent;
        }

        // Update attribute
        if (!newEl.isEqualNode(curEl)) {
          Array.from(newEl.attributes).forEach(function (attr) {
            curEl.setAttribute(attr.name, attr.value);
          });
        }
      });
    }
  }, {
    key: "activeNav",
    value: function activeNav(el) {
      // Get latest update
      var allNav = document.querySelectorAll('.filter-btn, .project-folder-btn');
      allNav.forEach(function (el) {
        return el.classList.remove('active');
      });
      el.classList.add('active');
    }
  }, {
    key: "clear",
    value: function clear() {
      this._parentElement.innerHTML = '';
    }
  }, {
    key: "getCurNav",
    value: function getCurNav() {
      return this._navNum;
    }
  }, {
    key: "resetNav",
    value: function resetNav() {
      this._navNum = undefined;
    }
  }]);
  return View;
}();


/***/ }),

/***/ "./src/js/views/addProjectTaskView.js":
/*!********************************************!*\
  !*** ./src/js/views/addProjectTaskView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskView.js */ "./src/js/views/taskView.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var AddProjectTaskView = /*#__PURE__*/function (_TaskView) {
  _inherits(AddProjectTaskView, _TaskView);
  var _super = _createSuper(AddProjectTaskView);
  function AddProjectTaskView() {
    var _this;
    _classCallCheck(this, AddProjectTaskView);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector('.add-projects'));
    _defineProperty(_assertThisInitialized(_this), "_addBtn", document.querySelector('.add-btn--project'));
    _defineProperty(_assertThisInitialized(_this), "_form", document.querySelector('.form-project'));
    _this.clickCancelBtn();
    return _this;
  }
  _createClass(AddProjectTaskView, [{
    key: "addHandlerUploadFolder",
    value: function addHandlerUploadFolder(handler) {
      var _this2 = this;
      this._form.addEventListener('submit', function (e) {
        e.preventDefault();
        var dataArr = _toConsumableArray(new FormData(_this2._form));
        var folder = Object.fromEntries(dataArr);
        handler(folder);
        _this2.toggleModal();
        _this2.clearInput();
      });
    }
  }, {
    key: "clickAddProjectBtn",
    value: function clickAddProjectBtn(func, func2) {
      var _this3 = this;
      this._addBtn.addEventListener('click', function () {
        _this3.toggleModal();
        func();
        func2();
      });
    }
  }]);
  return AddProjectTaskView;
}(_taskView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddProjectTaskView());

/***/ }),

/***/ "./src/js/views/addTaskView.js":
/*!*************************************!*\
  !*** ./src/js/views/addTaskView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskView.js */ "./src/js/views/taskView.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var AddTaskView = /*#__PURE__*/function (_TaskView) {
  _inherits(AddTaskView, _TaskView);
  var _super = _createSuper(AddTaskView);
  function AddTaskView() {
    var _this;
    _classCallCheck(this, AddTaskView);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector('.add-lists'));
    _defineProperty(_assertThisInitialized(_this), "_addBtn", document.querySelector('.add-btn--task'));
    _defineProperty(_assertThisInitialized(_this), "_form", document.querySelector('.form-task'));
    _this.clickCancelBtn();
    return _this;
  }
  _createClass(AddTaskView, [{
    key: "addHandlerUpload",
    value: function addHandlerUpload(handler) {
      var _this2 = this;
      this._form.addEventListener('submit', function (e) {
        e.preventDefault();
        var dataArr = _toConsumableArray(new FormData(_this2._form));
        var data = Object.fromEntries(dataArr);
        handler(data);
        _this2.toggleModal();
        _this2.clearInput();
      });
    }
  }, {
    key: "hideAddTaskView",
    value: function hideAddTaskView() {
      this._parentEl.classList.add('hide');
    }
  }, {
    key: "unHideAddTaskView",
    value: function unHideAddTaskView() {
      this._parentEl.classList.remove('hide');
    }
  }, {
    key: "clickAddTaskBtn",
    value: function clickAddTaskBtn(func) {
      var _this3 = this;
      this._addBtn.addEventListener('click', function () {
        _this3.toggleModal();
        func();
      });
    }
  }]);
  return AddTaskView;
}(_taskView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddTaskView());

/***/ }),

/***/ "./src/js/views/editTaskView.js":
/*!**************************************!*\
  !*** ./src/js/views/editTaskView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskView.js */ "./src/js/views/taskView.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var EditTaskView = /*#__PURE__*/function (_TaskView) {
  _inherits(EditTaskView, _TaskView);
  var _super = _createSuper(EditTaskView);
  function EditTaskView() {
    var _this;
    _classCallCheck(this, EditTaskView);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "curDataIndex", void 0);
    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector('.edit-lists'));
    _defineProperty(_assertThisInitialized(_this), "_form", document.querySelector('.form-edit-task'));
    _this.clickCancelBtn(true);
    return _this;
  }
  _createClass(EditTaskView, [{
    key: "addHandlerUploadEdit",
    value: function addHandlerUploadEdit(handler) {
      var _this2 = this;
      this._form.addEventListener('submit', function (e) {
        e.preventDefault();
        var dataArr = _toConsumableArray(new FormData(_this2._form));
        var newData = Object.fromEntries(dataArr);
        handler(newData, _this2.curDataIndex);
        _this2.toggleModal(true);
        _this2.clearInput();
      });
    }
  }, {
    key: "getForm",
    value: function getForm(data, dataIndex) {
      this.curDataIndex = dataIndex;
      var inputs = Object.values(data);
      this._form.querySelectorAll('textarea, input').forEach(function (el, i) {
        return el.value = inputs[i];
      });
      this.toggleModal(true);
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.clearInput();
      this._parentEl.classList.add('hide');
    }
  }]);
  return EditTaskView;
}(_taskView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EditTaskView());

/***/ }),

/***/ "./src/js/views/filterView.js":
/*!************************************!*\
  !*** ./src/js/views/filterView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./src/js/views/View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var FilterView = /*#__PURE__*/function (_View) {
  _inherits(FilterView, _View);
  var _super = _createSuper(FilterView);
  function FilterView() {
    var _this;
    _classCallCheck(this, FilterView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_parentEl", document.querySelector('.filter-lists'));
    _defineProperty(_assertThisInitialized(_this), "_allNav", document.querySelectorAll('.filter-btn'));
    _defineProperty(_assertThisInitialized(_this), "_navNum", 0);
    return _this;
  }
  _createClass(FilterView, [{
    key: "getDefaultClick",
    value:
    // Default

    function getDefaultClick() {
      this._allNav[0].click();
    }
  }, {
    key: "addHandlerClick",
    value: function addHandlerClick(handler) {
      var self = this;
      this._parentEl.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        self.activeNav(btn);
        var dataTypeIndex = +btn.dataset.filter;
        // For adding favourite
        self._navNum = dataTypeIndex;
        handler(dataTypeIndex);
      });
    }
  }]);
  return FilterView;
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterView());

/***/ }),

/***/ "./src/js/views/modeView.js":
/*!**********************************!*\
  !*** ./src/js/views/modeView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Mode = /*#__PURE__*/function () {
  function Mode() {
    _classCallCheck(this, Mode);
    _defineProperty(this, "_parentEl", document.querySelector('.slider'));
    _defineProperty(this, "_root", document.documentElement);
    this._toggleMode();
  }
  _createClass(Mode, [{
    key: "_toggleMode",
    value: function _toggleMode() {
      var _this = this;
      this._parentEl.addEventListener('click', function () {
        _this._root.classList.toggle('dark');
        _this._root.classList.toggle('light');
      });
    }
  }]);
  return Mode;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Mode());

/***/ }),

/***/ "./src/js/views/resultProjectsView.js":
/*!********************************************!*\
  !*** ./src/js/views/resultProjectsView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./src/js/views/View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ResultProjectsView = /*#__PURE__*/function (_View) {
  _inherits(ResultProjectsView, _View);
  var _super = _createSuper(ResultProjectsView);
  function ResultProjectsView() {
    var _this;
    _classCallCheck(this, ResultProjectsView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_parentElement", document.querySelector('.project-folder-lists'));
    _defineProperty(_assertThisInitialized(_this), "_navNum", void 0);
    return _this;
  }
  _createClass(ResultProjectsView, [{
    key: "addHandlerClickFolder",
    value: function addHandlerClickFolder(handler) {
      var _this2 = this;
      this._parentElement.addEventListener('click', function (e) {
        var folder = e.target.closest('.project-folder-btn');
        var deleteMark = e.target.closest('.bi-x');
        if (!folder) return;
        if (deleteMark) return; // 🔥 prevent double click
        _this2.activeNav(folder);
        var folderIndex = +folder.dataset.folder;
        // For resultTasksView
        _this2._navNum = folderIndex;
        handler(folderIndex);
      });
    }
  }, {
    key: "addHandlerDeleteFolder",
    value: function addHandlerDeleteFolder(handler) {
      this._parentElement.addEventListener('click', function (e) {
        var deleteMark = e.target.closest('.bi-x');
        if (!deleteMark) return;
        var folderIndex = +e.target.closest('.project-folder-btn').dataset.folder;
        handler(folderIndex);
      });
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup() {
      return "\n      <li class=\"folder__item\">\n        <button class=\"project-folder-btn\" data-folder=\"".concat(this._parentElement.children.length, "\">\n          <i class=\"bi bi-folder\"></i>\n          <span>").concat(this._data.name, "</span>\n          <i class=\"bi bi-x\"></i>\n        </button>\n      </li>");
    }
  }]);
  return ResultProjectsView;
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ResultProjectsView());

/***/ }),

/***/ "./src/js/views/resultTasksView.js":
/*!*****************************************!*\
  !*** ./src/js/views/resultTasksView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./src/js/views/View.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.js */ "./src/js/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ResultTasksView = /*#__PURE__*/function (_View) {
  _inherits(ResultTasksView, _View);
  var _super = _createSuper(ResultTasksView);
  function ResultTasksView() {
    var _this;
    _classCallCheck(this, ResultTasksView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_parentElement", document.querySelector('.task-lists'));
    return _this;
  }
  _createClass(ResultTasksView, [{
    key: "addHandlerFavourite",
    value: function addHandlerFavourite(handler) {
      var _this2 = this;
      this._parentElement.addEventListener('click', function (e) {
        var star = e.target.closest('.bi-star-fill');
        if (!star) return;
        handler(_this2._getItemIndex(e.target));
      });
    }
  }, {
    key: "addHandlerDelete",
    value: function addHandlerDelete(handler) {
      var _this3 = this;
      this._parentElement.addEventListener('click', function (e) {
        var bin = e.target.closest('.bi-trash3-fill');
        if (!bin) return;
        handler(_this3._getItemIndex(e.target));
      });
    }
  }, {
    key: "addHandlerEdit",
    value: function addHandlerEdit(handler) {
      var _this4 = this;
      this._parentElement.addEventListener('click', function (e) {
        var pencil = e.target.closest('.bi-pencil-square');
        if (!pencil) return;
        handler(_this4._getItemIndex(e.target));
        document.querySelector('.edit-lists').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(target) {
      var data = target.closest('.task__item');
      var dataIndex = +data.dataset.index;
      return dataIndex;
    }
  }, {
    key: "_convertDate",
    value: function _convertDate(date) {
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      };
      if (date === (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.filterDate)(new Date())) return 'Today';else if (date === (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.filterDate)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getNextDay)())) return 'Tomorrow';else return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
    }
  }, {
    key: "_generateMarkup",
    value: function _generateMarkup() {
      var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return "\n    <li class=\"task__item\" data-index=\"".concat(render ? this._parentElement.children.length : this._dummyArr.length, "\">\n      <div class=\"task-box-1\">\n        <label for=\"check-task\" class=\"check-task-label\"\n          ><input type=\"checkbox\" name=\"task\" id=\"check-task\"\n        /></label>\n        <p class=\"para\">").concat(this._data.todo, "</p>\n      </div>\n      <div class=\"task-box-2\">\n        <p class=\"date\">").concat(this._convertDate(this._data.date), "</p>\n        <button class=\"favourite-btn\">\n          <i class=\"bi bi-star-fill ").concat(this._data.favourite ? 'favourite' : '', "\"></i>\n        </button>\n        <button class=\"edit-btn\">\n          <i class=\"bi bi-pencil-square\"></i>\n        </button>\n        <button class=\"bin-btn\"><i class=\"bi bi-trash3-fill\"></i></button>\n      </div>\n    </li>");
    }
  }]);
  return ResultTasksView;
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ResultTasksView());

/***/ }),

/***/ "./src/js/views/taskView.js":
/*!**********************************!*\
  !*** ./src/js/views/taskView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskView)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TaskView = /*#__PURE__*/function () {
  function TaskView() {
    _classCallCheck(this, TaskView);
  }
  _createClass(TaskView, [{
    key: "clickCancelBtn",
    value: function clickCancelBtn() {
      var _this = this;
      var edit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this._parentEl.querySelector('.cancel-btn').addEventListener('click', function (e) {
        e.preventDefault();
        if (edit) _this.toggleModal(edit);else _this.toggleModal();
        _this.clearInput();
      });
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      this._form.querySelectorAll('textarea, input').forEach(function (el) {
        return el.value = '';
      });
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this._addBtn.classList.remove('hide');
      this._form.classList.add('hide');
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      var edit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (edit) {
        this._parentEl.classList.toggle('hide');
      } else {
        this._addBtn.classList.toggle('hide');
        this._form.classList.toggle('hide');
      }
    }
  }]);
  return TaskView;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Klee+One:wght@600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  box-sizing: border-box;
  /* Default Font */
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --padding-body: 30px 50px;
  --padding-container: 20px;
  --border-radius: 20px;
  --margin-bottom-head: 20px;
  --padding-button: 10px 13px;
  --border-radius-button: 8px;
  --padding-button-page: 7px 10px;
  --padding-task-item: 10px 20px;
  --margin-bottom-task-item: 10px;
  --color-add-button: #02bc7d;
  --star-dark: rgb(154, 150, 150);
  --star-light: rgb(249, 202, 60);
  --bin-delete: rgb(220, 80, 52);
  --pencil-edit: rgb(103, 220, 249);
}

:root.light {
  --font-color: rgb(35, 34, 34);
  --background-color-body: rgb(232, 228, 228);
  --background-color-container: rgb(210, 209, 206);
  --background-color-hover: #e3e3e4;
  --background-color-task-item: #334155;
}

:root.dark {
  --font-color: white;
  --background-color-body: #111827;
  --background-color-container: #1e293b;
  --background-color-hover: #334155;
  --background-color-task-item: #334155;
}

body {
  color: var(--font-color);
  background-color: var(--background-color-body);
  padding: var(--padding-body);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'aside main';
  gap: 30px;
}

input[type='checkbox']#check-task,
input[type='text'],
input[type='date'],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.header-container {
  grid-area: header;
}

.first-o {
  color: var(--bin-delete);
}

.second-o {
  color: var(--color-add-button);
}

.header-container,
.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.logo-container {
  gap: 5px;
}

.logo-symbol {
  position: relative;
  top: 7px;
  width: 50px;
}

.logo-name {
  font-size: 2.8rem;
}

.toggle-switch {
  position: relative;
  top: -25px;
  width: 60px;
}

.mode-label {
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: var(--background-color-container);
  border-radius: 50px;
  cursor: pointer;
}

#mode {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: all 0.3s;
}

#mode:checked ~ .slider {
  background-color: var(--color-add-button);
}

.slider::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 6px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: inset 12px -1px 0px 0px var(--color-add-button);
  background-color: var(--background-color-container);
  transition: all 0.3s;
}

#mode:checked ~ .slider::before {
  transform: translateX(100%);
  box-shadow: none;
}

.aside-container {
  grid-area: aside;
  min-height: 480px;
  width: max(180px, 20vw);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
}

h2 {
  font-size: 1.5rem;
  color: var(--color-add-button);
}

.filter-btn.active,
.project-folder-btn.active {
  font-weight: bold;
  background-color: var(--background-color-hover);
}

.filter-btn,
.project-folder-btn {
  width: 100%;
  padding: var(--padding-button);
  text-align: left;
  display: flex;
  gap: 20px;
  border: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  border-radius: var(--border-radius-button);
}

.bi-x {
  margin-left: auto;
  margin-right: 10px;
}

.bi-x:hover {
  transform: scale(1.5);
  color: var(--bin-delete);
}

.filter-lists,
.project-folder-lists {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-project {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'project project'
    'submit cancel';
  gap: 5px;
}

input[type='text'] {
  grid-area: project;
  border-radius: var(--border-radius-button);
  padding: 5px;
  background-color: transparent;
  border: 1px solid grey;
  font-family: inherit;
  color: inherit;
}

.footer-1 {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

footer > a > i {
  font-size: 2rem;
  color: var(--font-color);
}

footer > a > i:hover {
  color: var(--color-add-button);
}

footer > p {
  font-size: 0.8rem;
}

.main-container {
  grid-area: main;
  display: flex;
  flex-direction: column;
}

.task-box-1,
.task-box-2 {
  display: flex;
  align-items: center;
}

.task-box-1 {
  gap: 18px;
}

.task-box-2 {
  gap: 13px;
  margin-left: auto;
}

.task__item {
  padding: var(--padding-task-item);
  border-radius: var(--border-radius-button);
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: var(--margin-bottom-task-item);
}

.para {
  font-family: 'Klee One', cursive;
  font-size: inherit;
}

.date {
  font-size: 0.9rem;
}

input[type='checkbox']#check-task {
  border: 2px solid var(--font-color);
  background-color: transparent;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  display: grid;
  place-content: center;
}

input[type='checkbox']::before {
  content: '';
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: all 0.3s ease-in-out;
  box-shadow: inset 1em 1em var(--color-add-button);
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type='checkbox']:checked::before {
  transform: scale(1);
}

.favourite-btn,
.bin-btn,
.edit-btn {
  border: none;
  background-color: transparent;
  padding: 0;
  color: var(--star-dark);
}

.favourite-btn:hover {
  color: var(--star-light);
  transform: scale(1.2);
}

.favourite {
  color: var(--star-light);
}

.bin-btn:hover {
  color: var(--bin-delete);
  transform: scale(1.2);
}

.edit-btn:hover {
  color: var(--pencil-edit);
  transform: scale(1.2);
}

.form-task,
.form-edit-task {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'task task task task'
    'date . submit cancel';
  gap: 8px;
}

textarea {
  grid-area: task;
  resize: none;
  width: 98%;
  height: 50px;
  padding: 5px;
  border-radius: var(--border-radius-button);
  font-family: 'Klee One', cursive;
  font-size: inherit;
  background-color: transparent;
  color: var(--font-color);
}

textarea:focus,
input[type='text']:focus {
  outline: 1px solid var(--color-add-button);
}

textarea:focus::placeholder,
input[type='text']:focus::placeholder {
  color: var(--color-add-button);
}

.form-date {
  grid-area: date;
}

input[type='date'] {
  border: none;
  padding: 2px;
  width: 115px;
  background-color: transparent;
  color: var(--color-add-button);
  font-family: inherit;
  font-size: 0.9rem;
}

input[type='date']::-webkit-calendar-picker-indicator {
  background-color: var(--color-add-button);
  cursor: pointer;
  border-radius: 20%;
}

input[type='date']::-webkit-calendar-picker-indicator:hover {
  transform: scale(1.2);
}

input[type='date']:focus {
  outline: none;
}

.submit-btn {
  grid-area: submit;
  background-color: var(--color-add-button);
}

.cancel-btn {
  grid-area: cancel;
  background-color: var(--bin-delete);
}

.submit-btn,
.cancel-btn {
  padding: 5px 10px;
  border: none;
  color: var(--font-color);
  border-radius: var(--border-radius-button);
  font-size: 0.8rem;
}

.submit-btn:hover,
.cancel-btn:hover {
  transform: scale(1.05);
}

h1,
h2 {
  font-family: 'Comfortaa', cursive;
  margin-bottom: var(--margin-bottom-head);
}

.aside-container,
.main-container {
  padding: var(--padding-container);
  border-radius: var(--border-radius);
  background-color: var(--background-color-container);
}

.add-btn {
  border: none;
  background-color: transparent;
  font-size: inherit;
  font-weight: bold;
  color: inherit;
  outline: inherit;
  padding: var(--padding-button);
}

.add-btn:hover {
  color: var(--color-add-button);
  transform: scale(1.08);
}

i {
  font-size: 1.08rem;
}

.add-btn:active,
.favourite-btn:active,
.bin-btn:active,
input[type='date']::-webkit-calendar-picker-indicator:active,
.submit-btn:active,
.cancel-btn:active,
.edit-btn:active,
.bi-x:active {
  transform: scale(1);
}

.filter-btn:hover,
.project-folder-btn:hover,
.task__item:hover {
  background-color: var(--background-color-hover);
  color: var(--color-add-button);
}

.task__item,
footer > a > i,
input[type='date']::-webkit-calendar-picker-indicator,
button,
.bi-x {
  transition: all 0.3s ease-in-out;
}

.footer-2 {
  display: none;
}

.hide {
  display: none;
}

@media only screen and (max-width: 550px) {
  body {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr auto;
    grid-template-areas:
      'header'
      'aside'
      'main';
    gap: 10px;
    padding: 30px 30px;
  }

  .aside-container {
    min-height: 0;
    width: auto;
    align-items: center;
    gap: 20px;
  }

  .aside-container h2 {
    text-align: center;
  }

  .filter-lists,
  .project-folder-lists {
    flex-direction: row;
    justify-content: center;
  }

  .footer-1 {
    display: none;
  }

  .footer-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');\n@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Klee+One:wght@600&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  box-sizing: border-box;\n  /* Default Font */\n  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n:root {\n  --padding-body: 30px 50px;\n  --padding-container: 20px;\n  --border-radius: 20px;\n  --margin-bottom-head: 20px;\n  --padding-button: 10px 13px;\n  --border-radius-button: 8px;\n  --padding-button-page: 7px 10px;\n  --padding-task-item: 10px 20px;\n  --margin-bottom-task-item: 10px;\n  --color-add-button: #02bc7d;\n  --star-dark: rgb(154, 150, 150);\n  --star-light: rgb(249, 202, 60);\n  --bin-delete: rgb(220, 80, 52);\n  --pencil-edit: rgb(103, 220, 249);\n}\n\n:root.light {\n  --font-color: rgb(35, 34, 34);\n  --background-color-body: rgb(232, 228, 228);\n  --background-color-container: rgb(210, 209, 206);\n  --background-color-hover: #e3e3e4;\n  --background-color-task-item: #334155;\n}\n\n:root.dark {\n  --font-color: white;\n  --background-color-body: #111827;\n  --background-color-container: #1e293b;\n  --background-color-hover: #334155;\n  --background-color-task-item: #334155;\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background-color-body);\n  padding: var(--padding-body);\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    'header header'\n    'aside main';\n  gap: 30px;\n}\n\ninput[type='checkbox']#check-task,\ninput[type='text'],\ninput[type='date'],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.header-container {\n  grid-area: header;\n}\n\n.first-o {\n  color: var(--bin-delete);\n}\n\n.second-o {\n  color: var(--color-add-button);\n}\n\n.header-container,\n.logo-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.logo-container {\n  gap: 5px;\n}\n\n.logo-symbol {\n  position: relative;\n  top: 7px;\n  width: 50px;\n}\n\n.logo-name {\n  font-size: 2.8rem;\n}\n\n.toggle-switch {\n  position: relative;\n  top: -25px;\n  width: 60px;\n}\n\n.mode-label {\n  position: absolute;\n  width: 100%;\n  height: 30px;\n  background-color: var(--background-color-container);\n  border-radius: 50px;\n  cursor: pointer;\n}\n\n#mode {\n  position: absolute;\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50px;\n  transition: all 0.3s;\n}\n\n#mode:checked ~ .slider {\n  background-color: var(--color-add-button);\n}\n\n.slider::before {\n  content: '';\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  box-shadow: inset 12px -1px 0px 0px var(--color-add-button);\n  background-color: var(--background-color-container);\n  transition: all 0.3s;\n}\n\n#mode:checked ~ .slider::before {\n  transform: translateX(100%);\n  box-shadow: none;\n}\n\n.aside-container {\n  grid-area: aside;\n  min-height: 480px;\n  width: max(180px, 20vw);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  color: var(--color-add-button);\n}\n\n.filter-btn.active,\n.project-folder-btn.active {\n  font-weight: bold;\n  background-color: var(--background-color-hover);\n}\n\n.filter-btn,\n.project-folder-btn {\n  width: 100%;\n  padding: var(--padding-button);\n  text-align: left;\n  display: flex;\n  gap: 20px;\n  border: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  border-radius: var(--border-radius-button);\n}\n\n.bi-x {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n.bi-x:hover {\n  transform: scale(1.5);\n  color: var(--bin-delete);\n}\n\n.filter-lists,\n.project-folder-lists {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.form-project {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, auto);\n  grid-template-areas:\n    'project project'\n    'submit cancel';\n  gap: 5px;\n}\n\ninput[type='text'] {\n  grid-area: project;\n  border-radius: var(--border-radius-button);\n  padding: 5px;\n  background-color: transparent;\n  border: 1px solid grey;\n  font-family: inherit;\n  color: inherit;\n}\n\n.footer-1 {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\nfooter > a > i {\n  font-size: 2rem;\n  color: var(--font-color);\n}\n\nfooter > a > i:hover {\n  color: var(--color-add-button);\n}\n\nfooter > p {\n  font-size: 0.8rem;\n}\n\n.main-container {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n}\n\n.task-box-1,\n.task-box-2 {\n  display: flex;\n  align-items: center;\n}\n\n.task-box-1 {\n  gap: 18px;\n}\n\n.task-box-2 {\n  gap: 13px;\n  margin-left: auto;\n}\n\n.task__item {\n  padding: var(--padding-task-item);\n  border-radius: var(--border-radius-button);\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex-wrap: wrap;\n  margin-bottom: var(--margin-bottom-task-item);\n}\n\n.para {\n  font-family: 'Klee One', cursive;\n  font-size: inherit;\n}\n\n.date {\n  font-size: 0.9rem;\n}\n\ninput[type='checkbox']#check-task {\n  border: 2px solid var(--font-color);\n  background-color: transparent;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 1em;\n  height: 1em;\n  transform: scale(0);\n  transition: all 0.3s ease-in-out;\n  box-shadow: inset 1em 1em var(--color-add-button);\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n}\n\n.favourite-btn,\n.bin-btn,\n.edit-btn {\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  color: var(--star-dark);\n}\n\n.favourite-btn:hover {\n  color: var(--star-light);\n  transform: scale(1.2);\n}\n\n.favourite {\n  color: var(--star-light);\n}\n\n.bin-btn:hover {\n  color: var(--bin-delete);\n  transform: scale(1.2);\n}\n\n.edit-btn:hover {\n  color: var(--pencil-edit);\n  transform: scale(1.2);\n}\n\n.form-task,\n.form-edit-task {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, auto);\n  grid-template-areas:\n    'task task task task'\n    'date . submit cancel';\n  gap: 8px;\n}\n\ntextarea {\n  grid-area: task;\n  resize: none;\n  width: 98%;\n  height: 50px;\n  padding: 5px;\n  border-radius: var(--border-radius-button);\n  font-family: 'Klee One', cursive;\n  font-size: inherit;\n  background-color: transparent;\n  color: var(--font-color);\n}\n\ntextarea:focus,\ninput[type='text']:focus {\n  outline: 1px solid var(--color-add-button);\n}\n\ntextarea:focus::placeholder,\ninput[type='text']:focus::placeholder {\n  color: var(--color-add-button);\n}\n\n.form-date {\n  grid-area: date;\n}\n\ninput[type='date'] {\n  border: none;\n  padding: 2px;\n  width: 115px;\n  background-color: transparent;\n  color: var(--color-add-button);\n  font-family: inherit;\n  font-size: 0.9rem;\n}\n\ninput[type='date']::-webkit-calendar-picker-indicator {\n  background-color: var(--color-add-button);\n  cursor: pointer;\n  border-radius: 20%;\n}\n\ninput[type='date']::-webkit-calendar-picker-indicator:hover {\n  transform: scale(1.2);\n}\n\ninput[type='date']:focus {\n  outline: none;\n}\n\n.submit-btn {\n  grid-area: submit;\n  background-color: var(--color-add-button);\n}\n\n.cancel-btn {\n  grid-area: cancel;\n  background-color: var(--bin-delete);\n}\n\n.submit-btn,\n.cancel-btn {\n  padding: 5px 10px;\n  border: none;\n  color: var(--font-color);\n  border-radius: var(--border-radius-button);\n  font-size: 0.8rem;\n}\n\n.submit-btn:hover,\n.cancel-btn:hover {\n  transform: scale(1.05);\n}\n\nh1,\nh2 {\n  font-family: 'Comfortaa', cursive;\n  margin-bottom: var(--margin-bottom-head);\n}\n\n.aside-container,\n.main-container {\n  padding: var(--padding-container);\n  border-radius: var(--border-radius);\n  background-color: var(--background-color-container);\n}\n\n.add-btn {\n  border: none;\n  background-color: transparent;\n  font-size: inherit;\n  font-weight: bold;\n  color: inherit;\n  outline: inherit;\n  padding: var(--padding-button);\n}\n\n.add-btn:hover {\n  color: var(--color-add-button);\n  transform: scale(1.08);\n}\n\ni {\n  font-size: 1.08rem;\n}\n\n.add-btn:active,\n.favourite-btn:active,\n.bin-btn:active,\ninput[type='date']::-webkit-calendar-picker-indicator:active,\n.submit-btn:active,\n.cancel-btn:active,\n.edit-btn:active,\n.bi-x:active {\n  transform: scale(1);\n}\n\n.filter-btn:hover,\n.project-folder-btn:hover,\n.task__item:hover {\n  background-color: var(--background-color-hover);\n  color: var(--color-add-button);\n}\n\n.task__item,\nfooter > a > i,\ninput[type='date']::-webkit-calendar-picker-indicator,\nbutton,\n.bi-x {\n  transition: all 0.3s ease-in-out;\n}\n\n.footer-2 {\n  display: none;\n}\n\n.hide {\n  display: none;\n}\n\n@media only screen and (max-width: 550px) {\n  body {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr 1fr auto;\n    grid-template-areas:\n      'header'\n      'aside'\n      'main';\n    gap: 10px;\n    padding: 30px 30px;\n  }\n\n  .aside-container {\n    min-height: 0;\n    width: auto;\n    align-items: center;\n    gap: 20px;\n  }\n\n  .aside-container h2 {\n    text-align: center;\n  }\n\n  .filter-lists,\n  .project-folder-lists {\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .footer-1 {\n    display: none;\n  }\n\n  .footer-2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/checkmark.png":
/*!*******************************!*\
  !*** ./src/img/checkmark.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checkmark.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _img_checkmark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/checkmark.png */ "./src/img/checkmark.png");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/js/model.js");
/* harmony import */ var _views_modeView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/modeView.js */ "./src/js/views/modeView.js");
/* harmony import */ var _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/addTaskView.js */ "./src/js/views/addTaskView.js");
/* harmony import */ var _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/editTaskView.js */ "./src/js/views/editTaskView.js");
/* harmony import */ var _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/addProjectTaskView.js */ "./src/js/views/addProjectTaskView.js");
/* harmony import */ var _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/filterView.js */ "./src/js/views/filterView.js");
/* harmony import */ var _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/resultTasksView.js */ "./src/js/views/resultTasksView.js");
/* harmony import */ var _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/resultProjectsView.js */ "./src/js/views/resultProjectsView.js");










var checkAndGetDataType = function checkAndGetDataType() {
  var _model$state$folders$;
  var type = _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__["default"].getCurNav() >= 0 ? 'filter' : 'folder';
  var typeIndex = type === 'filter' ? _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__["default"].getCurNav() : _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].getCurNav();
  var dataSet = type === 'filter' ? Object.values(_model_js__WEBPACK_IMPORTED_MODULE_2__.state)[typeIndex] : (_model$state$folders$ = _model_js__WEBPACK_IMPORTED_MODULE_2__.state.folders[typeIndex]) === null || _model$state$folders$ === void 0 ? void 0 : _model$state$folders$.tasks;
  return {
    type: type,
    typeIndex: typeIndex,
    dataSet: dataSet
  };
};
var controlAddTaskView = function controlAddTaskView(data) {
  if (_model_js__WEBPACK_IMPORTED_MODULE_2__.checkTaskDetail(data)) {
    alert('This detail is already noted : )\nPlease fill again');
  } else {
    var _checkAndGetDataType = checkAndGetDataType(),
      type = _checkAndGetDataType.type,
      typeIndex = _checkAndGetDataType.typeIndex;
    // Store Data
    if (type === 'folder' && typeIndex >= 0) _model_js__WEBPACK_IMPORTED_MODULE_2__.storeTask(data, typeIndex);else _model_js__WEBPACK_IMPORTED_MODULE_2__.storeTask(data);

    // Render Data
    _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(_model_js__WEBPACK_IMPORTED_MODULE_2__.state.allTasks.at(-1));
  }
};
var controlFilterView = function controlFilterView(dataTypeIndex) {
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideModal();
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideModal();
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal();
  _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].resetNav();
  var dataSet = Object.values(_model_js__WEBPACK_IMPORTED_MODULE_2__.state)[dataTypeIndex];

  // Clear display
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].clear();

  // Render display
  if (dataSet.length !== 0) dataSet.forEach(function (data) {
    return _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(data);
  });

  // Allow user to add list only 'all' filter
  if (dataTypeIndex === 0) _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].unHideAddTaskView();else _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideAddTaskView();
};
var controlFavourite = function controlFavourite(dataIndex) {
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideModal();
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideModal();
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal();
  var _checkAndGetDataType2 = checkAndGetDataType(),
    type = _checkAndGetDataType2.type,
    typeIndex = _checkAndGetDataType2.typeIndex,
    dataSet = _checkAndGetDataType2.dataSet;

  // Check favourite boolean value
  var result = type === 'filter' ? dataSet[dataIndex].favourite : dataSet[dataIndex].favourite;

  // Toggle favourite
  if (!result) _model_js__WEBPACK_IMPORTED_MODULE_2__.addFavourite(dataIndex, type, typeIndex);else _model_js__WEBPACK_IMPORTED_MODULE_2__.deleteFavourite(dataIndex, type, typeIndex);

  // Render
  if (type === 'filter' && typeIndex === 3) {
    _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].clear();
    dataSet.length > 0 ? dataSet.forEach(function (data) {
      return _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(data);
    }) : '';
  } else {
    _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].update(dataSet);
  }
};
var controlDelete = function controlDelete(dataIndex) {
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideModal();
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideModal();
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal();
  var _checkAndGetDataType3 = checkAndGetDataType(),
    type = _checkAndGetDataType3.type,
    typeIndex = _checkAndGetDataType3.typeIndex,
    dataSet = _checkAndGetDataType3.dataSet;
  _model_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask(dataIndex, type, typeIndex);
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].clear();
  if (dataSet.length > 0) dataSet.forEach(function (data) {
    return _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(data);
  });
};
var controlEdit = function controlEdit(dataIndex) {
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideModal();
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideAddTaskView();
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal();
  var dataType = checkAndGetDataType();
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].getForm(dataType.dataSet[dataIndex], dataIndex);
};
var controlEditTask = function controlEditTask(newData, curDataIndex) {
  var _checkAndGetDataType4 = checkAndGetDataType(),
    type = _checkAndGetDataType4.type,
    typeIndex = _checkAndGetDataType4.typeIndex,
    dataSet = _checkAndGetDataType4.dataSet;
  _model_js__WEBPACK_IMPORTED_MODULE_2__.editData(newData, curDataIndex, type, typeIndex);
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].update(dataSet);
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].unHideAddTaskView();
};
var controlAddProject = function controlAddProject(folder) {
  if (_model_js__WEBPACK_IMPORTED_MODULE_2__.checkFolderName(folder)) {
    alert('This name is already used. Please fill again : D');
  } else {
    _model_js__WEBPACK_IMPORTED_MODULE_2__.storeFolder(folder);
    _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].render(_model_js__WEBPACK_IMPORTED_MODULE_2__.state.folders.at(-1));
  }
};
var controlClickFolder = function controlClickFolder(folderIndex) {
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideModal();
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideModal();
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal();
  _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__["default"].resetNav();
  var dataSet = _model_js__WEBPACK_IMPORTED_MODULE_2__.state.folders[folderIndex].tasks;
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].clear();
  if (dataSet.length > 0) dataSet.forEach(function (data) {
    return _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(data);
  });
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].unHideAddTaskView();
};
var controlDeleteFolder = function controlDeleteFolder(folderIndex) {
  // Delete folder
  _model_js__WEBPACK_IMPORTED_MODULE_2__.deleteFolder(folderIndex);

  // Re-render project folder
  _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].clear();
  _model_js__WEBPACK_IMPORTED_MODULE_2__.state.folders.forEach(function (folder) {
    return _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].render(folder);
  });

  // Re-render task
  var _checkAndGetDataType5 = checkAndGetDataType(),
    type = _checkAndGetDataType5.type,
    dataSet = _checkAndGetDataType5.dataSet;
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].clear();
  if (type === 'folder') _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__["default"].getDefaultClick();else dataSet.forEach(function (data) {
    return _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(data);
  });
};
var controlLocalStorage = function controlLocalStorage() {
  // Render Projects
  _model_js__WEBPACK_IMPORTED_MODULE_2__.state.folders.forEach(function (folder) {
    return _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].render(folder);
  });
};
var init = function init() {
  controlLocalStorage();
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].addHandlerUpload(controlAddTaskView);
  _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__["default"].addHandlerClick(controlFilterView);
  _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].addHandlerUploadEdit(controlEditTask);
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerUploadFolder(controlAddProject);
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerFavourite(controlFavourite);
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerDelete(controlDelete);
  _views_resultTasksView_js__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerEdit(controlEdit);
  _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].addHandlerClickFolder(controlClickFolder);
  _views_resultProjectsView_js__WEBPACK_IMPORTED_MODULE_9__["default"].addHandlerDeleteFolder(controlDeleteFolder);

  // Hide form when click other places
  _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].clickAddTaskBtn(_views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideModal.bind(_views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
  _views_addProjectTaskView_js__WEBPACK_IMPORTED_MODULE_6__["default"].clickAddProjectBtn(_views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideModal.bind(_views_addTaskView_js__WEBPACK_IMPORTED_MODULE_4__["default"]), _views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal.bind(_views_editTaskView_js__WEBPACK_IMPORTED_MODULE_5__["default"]));

  // Default click
  _views_filterView_js__WEBPACK_IMPORTED_MODULE_7__["default"].getDefaultClick();
};
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLE1BQU0scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxRQUFRLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksWUFBWSxPQUFPLE9BQU8sWUFB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O0VBQ0RBLG9FQUFrQixDQUFDcEUsa0JBQWtCLENBQ25Da0UsNkRBQVcsQ0FBQ25ELFNBQVMsQ0FBQytFLElBQUksQ0FBQzVCLDZEQUFXLENBQUMsRUFDdkNDLDhEQUFZLENBQUNwRCxTQUFTLENBQUMrRSxJQUFJLENBQUMzQiw4REFBWSxDQUMxQyxDQUFDOztFQUVEO0VBQ0FFLDREQUFVLENBQUM5QyxlQUFlLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBQ0RzRSxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3ZpZXdzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3ZpZXdzL2FkZFByb2plY3RUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdmlld3MvYWRkVGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3ZpZXdzL2VkaXRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdmlld3MvZmlsdGVyVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdmlld3MvbW9kZVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3ZpZXdzL3Jlc3VsdFByb2plY3RzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdmlld3MvcmVzdWx0VGFza3NWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy92aWV3cy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgV0VFSyA9IDc7XG4iLCJleHBvcnQgY29uc3QgZmlsdGVyRGF0ZSA9IGZ1bmN0aW9uIChzdHJEYXRlKSB7XG4gIHJldHVybiBzdHJEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHREYXkgPSBmdW5jdGlvbiAoaSA9IDEpIHtcbiAgY29uc3QgY3VyRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBuZXcgRGF0ZShjdXJEYXRlLnNldERhdGUoY3VyRGF0ZS5nZXREYXRlKCkgKyBpKSk7XG59O1xuIiwiaW1wb3J0IHsgV0VFSyB9IGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCB7IGZpbHRlckRhdGUsIGdldE5leHREYXkgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gIGFsbFRhc2tzOiBbXSxcbiAgdG9kYXlUYXNrczogW10sXG4gIHdlZWtUYXNrczogW10sXG4gIGZhdm91cml0ZVRhc2tzOiBbXSxcbiAgZm9sZGVyczogW10sXG59O1xuXG5jb25zdCBnZXRXZWVrRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGRhdGVBcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBXRUVLICsgMTsgaSsrKSB7XG4gICAgZGF0ZUFyci5wdXNoKGZpbHRlckRhdGUoZ2V0TmV4dERheShpKSkpO1xuICB9XG4gIHJldHVybiBkYXRlQXJyO1xufTtcblxuY29uc3QgZmlsdGVyQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhLmRhdGUgPT09IGZpbHRlckRhdGUobmV3IERhdGUoKSkpIHN0YXRlLnRvZGF5VGFza3MucHVzaChkYXRhKTtcbiAgaWYgKGdldFdlZWtEYXRlKCkuaW5jbHVkZXMoZGF0YS5kYXRlKSkgc3RhdGUud2Vla1Rhc2tzLnB1c2goZGF0YSk7XG4gIGlmIChkYXRhLmZhdm91cml0ZSkgc3RhdGUuZmF2b3VyaXRlVGFza3MucHVzaChkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9yZVRhc2sgPSBmdW5jdGlvbiAoZGF0YSwgZm9sZGVySW5kZXggPSBmYWxzZSkge1xuICBkYXRhLmZhdm91cml0ZSA9IGZhbHNlO1xuICBzdGF0ZS5hbGxUYXNrcy5wdXNoKGRhdGEpO1xuICBmaWx0ZXJDYXRlZ29yaWVzKGRhdGEpO1xuXG4gIGlmIChmb2xkZXJJbmRleCA+PSAwKSBzdGF0ZS5mb2xkZXJzW2ZvbGRlckluZGV4XT8udGFza3MucHVzaChkYXRhKTtcblxuICBwZXJzaXN0VGFza3NBbmRGb2xkZXJzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tUYXNrRGV0YWlsID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgYWxsVG9kbyA9IHN0YXRlLmFsbFRhc2tzLm1hcChvYmogPT4gb2JqLnRvZG8pO1xuICBjb25zdCBhbGxEYXRlID0gc3RhdGUuYWxsVGFza3MubWFwKG9iaiA9PiBvYmouZGF0ZSk7XG4gIGlmIChhbGxUb2RvLmluY2x1ZGVzKGRhdGEudG9kbykgJiYgYWxsRGF0ZS5pbmNsdWRlcyhkYXRhLmRhdGUpKSByZXR1cm4gdHJ1ZTtcbiAgZWxzZSBmYWxzZTtcbn07XG5cbmNvbnN0IGZpbmREYXRhID0gZnVuY3Rpb24gKGRhdGFJbmRleCwgdHlwZSwgdHlwZUluZGV4KSB7XG4gIGNvbnN0IGRhdGEgPVxuICAgIHR5cGUgPT09ICdmaWx0ZXInXG4gICAgICA/IE9iamVjdC52YWx1ZXMoc3RhdGUpW3R5cGVJbmRleF1bZGF0YUluZGV4XVxuICAgICAgOiBzdGF0ZS5mb2xkZXJzW3R5cGVJbmRleF0udGFza3NbZGF0YUluZGV4XTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBEZWxldGUgZGF0YSBpbiBlYWNoIGZpbHRlciBhbmQgZm9sZGVyXG5jb25zdCBmaW5kQW5kRGVsZXRlSW5kZXggPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgZGF0YSwgZWRpdCA9IGZhbHNlKSB7XG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaW5kZXggPSBPYmplY3QudmFsdWVzKHN0YXRlKVtpXS5maW5kSW5kZXgob2JqID0+IG9iaiA9PT0gZGF0YSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgY29udGludWU7XG4gICAgZWxzZSBPYmplY3QudmFsdWVzKHN0YXRlKVtpXS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgaWYgKCFlZGl0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5mb2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmZvbGRlcnNbaV0udGFza3MuZmluZEluZGV4KG9iaiA9PiBvYmogPT09IGRhdGEpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkgY29udGludWU7XG4gICAgICBlbHNlIHN0YXRlLmZvbGRlcnNbaV0udGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRGYXZvdXJpdGUgPSBmdW5jdGlvbiAoZGF0YUluZGV4LCB0eXBlLCB0eXBlSW5kZXgpIHtcbiAgY29uc3QgZGF0YSA9IGZpbmREYXRhKGRhdGFJbmRleCwgdHlwZSwgdHlwZUluZGV4KTtcbiAgZGF0YS5mYXZvdXJpdGUgPSB0cnVlO1xuICBzdGF0ZS5mYXZvdXJpdGVUYXNrcy5wdXNoKGRhdGEpO1xuXG4gIHBlcnNpc3RUYXNrc0FuZEZvbGRlcnMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVGYXZvdXJpdGUgPSBmdW5jdGlvbiAoZGF0YUluZGV4LCB0eXBlLCB0eXBlSW5kZXgpIHtcbiAgY29uc3QgZGF0YSA9IGZpbmREYXRhKGRhdGFJbmRleCwgdHlwZSwgdHlwZUluZGV4KTtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5mYXZvdXJpdGVUYXNrcy5maW5kSW5kZXgob2JqID0+IG9iaiA9PT0gZGF0YSk7XG4gIGRhdGEuZmF2b3VyaXRlID0gZmFsc2U7XG4gIHN0YXRlLmZhdm91cml0ZVRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcGVyc2lzdFRhc2tzQW5kRm9sZGVycygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoZGF0YUluZGV4LCB0eXBlLCB0eXBlSW5kZXgpIHtcbiAgY29uc3QgZGF0YSA9IGZpbmREYXRhKGRhdGFJbmRleCwgdHlwZSwgdHlwZUluZGV4KTtcbiAgZmluZEFuZERlbGV0ZUluZGV4KDAsIDQsIGRhdGEpO1xuXG4gIHBlcnNpc3RUYXNrc0FuZEZvbGRlcnMoKTtcbn07XG5cbmNvbnN0IHJlc2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGZpbmRBbmREZWxldGVJbmRleCgxLCAzLCBkYXRhLCB0cnVlKTsgLy8gdHJ1ZSA9IERvbid0IHdhbnQgdG8gcmVtb3ZlIHRhc2tzIGluIHRoZSBmb2xkZXJcbiAgZmlsdGVyQ2F0ZWdvcmllcyhkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0RGF0YSA9IGZ1bmN0aW9uIChuZXdEYXRhLCBjdXJEYXRhSW5kZXgsIHR5cGUsIHR5cGVJbmRleCkge1xuICBjb25zdCBkYXRhID0gZmluZERhdGEoY3VyRGF0YUluZGV4LCB0eXBlLCB0eXBlSW5kZXgpO1xuICBkYXRhLnRvZG8gPSBuZXdEYXRhLnRvZG87XG4gIGRhdGEuZGF0ZSA9IG5ld0RhdGEuZGF0ZTtcbiAgcmVzZXRDYXRlZ29yaWVzKGRhdGEpO1xuXG4gIHBlcnNpc3RUYXNrc0FuZEZvbGRlcnMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0ZvbGRlck5hbWUgPSBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gIHJldHVybiBzdGF0ZS5mb2xkZXJzLm1hcChvYmogPT4gb2JqLm5hbWUpLmluY2x1ZGVzKGZvbGRlci5uYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9yZUZvbGRlciA9IGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgZm9sZGVyLnRhc2tzID0gW107XG4gIHN0YXRlLmZvbGRlcnMucHVzaChmb2xkZXIpO1xuXG4gIHBlcnNpc3RUYXNrc0FuZEZvbGRlcnMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVGb2xkZXIgPSBmdW5jdGlvbiAoZm9sZGVySW5kZXgpIHtcbiAgY29uc3QgZGF0YUFyciA9IHN0YXRlLmZvbGRlcnNbZm9sZGVySW5kZXhdLnRhc2tzO1xuICBzdGF0ZS5mb2xkZXJzLnNwbGljZShmb2xkZXJJbmRleCwgMSk7XG4gIGRhdGFBcnIuZm9yRWFjaChkYXRhID0+IGZpbmRBbmREZWxldGVJbmRleCgwLCA0LCBkYXRhKSk7XG5cbiAgcGVyc2lzdFRhc2tzQW5kRm9sZGVycygpO1xufTtcblxuY29uc3QgcGVyc2lzdFRhc2tzQW5kRm9sZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUuYWxsVGFza3MpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5mb2xkZXJzKSk7XG59O1xuXG4vLyBOZWVkIHRvIGNoZWNrIGFzIHRoZSB2YWx1ZSFcbi8vIElmIGRhdGEgaXMgY2hlY2tlZCBhcyBhbiBvYmosIGl0IHdpbGwgcmV0dXJuIC0xIGJjcyBpdCBpc24ndCB0aGUgc2FtZSBvYmogaW4gdGhlIGhlYXAuXG5jb25zdCBjb252ZXJ0Rm9sZGVyRGF0YUluU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHN0YXRlLmZvbGRlcnMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgdGFza3NBcnIgPSBzdGF0ZS5mb2xkZXJzLm1hcChvYmogPT4gb2JqLnRhc2tzKTsgLy8gW1t7fSwge31dLCAuLi5dXG5cbiAgLy8gRmluZCBJbmRleFxuICBsZXQgYWxsSW5kZXhBcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4QXJyID0gdGFza3NBcnJbaV0ubWFwKG9iaiA9PlxuICAgICAgc3RhdGUuYWxsVGFza3MuZmluZEluZGV4KFxuICAgICAgICAoZGF0YSwgaSkgPT5cbiAgICAgICAgICBkYXRhLnRvZG8gPT09IG9iai50b2RvICYmXG4gICAgICAgICAgZGF0YS5kYXRlID09PSBvYmouZGF0ZSAmJlxuICAgICAgICAgIGRhdGEuZmF2b3VyaXRlID09PSBvYmouZmF2b3VyaXRlICYmXG4gICAgICAgICAgIWFsbEluZGV4QXJyLmZsYXQoKS5pbmNsdWRlcyhpKVxuICAgICAgKVxuICAgICk7XG4gICAgYWxsSW5kZXhBcnIucHVzaChpbmRleEFycik7XG4gIH1cblxuICAvLyBTdG9yZSBuZXcgZGF0YVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmZvbGRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmRleEFyciA9IGFsbEluZGV4QXJyW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGUuZm9sZGVyc1tpXS50YXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgc3RhdGUuZm9sZGVyc1tpXS50YXNrc1tqXSA9IHN0YXRlLmFsbFRhc2tzW2luZGV4QXJyW2pdXTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrc0FuZEZvbGRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFsbFRhc2tzU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpO1xuICBjb25zdCBmb2xkZXJzU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJyk7XG4gIGlmIChhbGxUYXNrc1N0b3JhZ2UpIHN0YXRlLmFsbFRhc2tzID0gSlNPTi5wYXJzZShhbGxUYXNrc1N0b3JhZ2UpO1xuICBpZiAoZm9sZGVyc1N0b3JhZ2UpIHN0YXRlLmZvbGRlcnMgPSBKU09OLnBhcnNlKGZvbGRlcnNTdG9yYWdlKTtcblxuICAvLyBDaGFuZ2UgJ3Rhc2tzJyBwcm9wZXJ0eSBpbiBmb2xkZXIgcmVmZXJyaW5nIHRvIGFsbFRhc2tzIGRhdGEgb3IgdG8gYmUgdGhlIHNhbWUgb2JqIGluIHRoZSBoZWFwXG4gIGlmIChzdGF0ZS5hbGxUYXNrcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29udmVydEZvbGRlckRhdGFJblN0b3JhZ2UoKTtcblxuICAvLyBGaWx0ZXJcbiAgc3RhdGUuYWxsVGFza3MuZm9yRWFjaChkYXRhID0+IGZpbHRlckNhdGVnb3JpZXMoZGF0YSkpO1xufTtcbmdldFRhc2tzQW5kRm9sZGVycygpO1xuXG5jb25zdCBjbGVhclRhc2tzQW5kRm9sZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCdhbGxUYXNrcycpO1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoJ2ZvbGRlcnMnKTtcbn07XG4vLyBjbGVhclRhc2tzQW5kRm9sZGVycygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIF9kYXRhO1xuICBfZHVtbXlBcnIgPSBbXTtcblxuICByZW5kZXIoZGF0YSwgcmVuZGVyID0gdHJ1ZSkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2dlbmVyYXRlTWFya3VwKHJlbmRlcik7XG5cbiAgICBpZiAoIXJlbmRlcikgcmV0dXJuIG1hcmt1cDtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWFya3VwKTtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhU2V0KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGFTZXQ7XG4gICAgY29uc3QgbmV3TWFya1VwID0gdGhpcy5fZGF0YVxuICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMucmVuZGVyKGRhdGEsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZHVtbXlBcnIucHVzaCgwKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHRoaXMuX2R1bW15QXJyID0gW107XG5cbiAgICAvLyBJbiBtZW1vcnlcbiAgICBjb25zdCBuZXdET00gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChuZXdNYXJrVXApO1xuICAgIC8vIENvbnZlcnQgdG8gQXJyYXlcbiAgICBjb25zdCBuZXdFbGVtZW50cyA9IEFycmF5LmZyb20obmV3RE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG4gICAgY29uc3QgY3VyRWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcblxuICAgIC8vIENvbXBhcmVcbiAgICBuZXdFbGVtZW50cy5mb3JFYWNoKChuZXdFbCwgaSkgPT4ge1xuICAgICAgY29uc3QgY3VyRWwgPSBjdXJFbGVtZW50c1tpXTtcblxuICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgIGlmIChcbiAgICAgICAgIW5ld0VsLmlzRXF1YWxOb2RlKGN1ckVsKSAmJlxuICAgICAgICBuZXdFbC5maXJzdENoaWxkPy5ub2RlVmFsdWUudHJpbSgpICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIGN1ckVsLnRleHRDb250ZW50ID0gbmV3RWwudGV4dENvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBhdHRyaWJ1dGVcbiAgICAgIGlmICghbmV3RWwuaXNFcXVhbE5vZGUoY3VyRWwpKSB7XG4gICAgICAgIEFycmF5LmZyb20obmV3RWwuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICBjdXJFbC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmVOYXYoZWwpIHtcbiAgICAvLyBHZXQgbGF0ZXN0IHVwZGF0ZVxuICAgIGNvbnN0IGFsbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmZpbHRlci1idG4sIC5wcm9qZWN0LWZvbGRlci1idG4nXG4gICAgKTtcbiAgICBhbGxOYXYuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBnZXRDdXJOYXYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdk51bTtcbiAgfVxuXG4gIHJlc2V0TmF2KCkge1xuICAgIHRoaXMuX25hdk51bSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2tWaWV3IGZyb20gJy4vdGFza1ZpZXcuanMnO1xuXG5jbGFzcyBBZGRQcm9qZWN0VGFza1ZpZXcgZXh0ZW5kcyBUYXNrVmlldyB7XG4gIF9wYXJlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdHMnKTtcbiAgX2FkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuLS1wcm9qZWN0Jyk7XG4gIF9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGlja0NhbmNlbEJ0bigpO1xuICB9XG5cbiAgYWRkSGFuZGxlclVwbG9hZEZvbGRlcihoYW5kbGVyKSB7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGFBcnIgPSBbLi4ubmV3IEZvcm1EYXRhKHRoaXMuX2Zvcm0pXTtcbiAgICAgIGNvbnN0IGZvbGRlciA9IE9iamVjdC5mcm9tRW50cmllcyhkYXRhQXJyKTtcbiAgICAgIGhhbmRsZXIoZm9sZGVyKTtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tBZGRQcm9qZWN0QnRuKGZ1bmMsIGZ1bmMyKSB7XG4gICAgdGhpcy5fYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICAgICAgZnVuYygpO1xuICAgICAgZnVuYzIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkUHJvamVjdFRhc2tWaWV3KCk7XG4iLCJpbXBvcnQgVGFza1ZpZXcgZnJvbSAnLi90YXNrVmlldy5qcyc7XG5cbmNsYXNzIEFkZFRhc2tWaWV3IGV4dGVuZHMgVGFza1ZpZXcge1xuICBfcGFyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWxpc3RzJyk7XG4gIF9hZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi0tdGFzaycpO1xuICBfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRhc2snKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xpY2tDYW5jZWxCdG4oKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJVcGxvYWQoaGFuZGxlcikge1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXRhQXJyID0gWy4uLm5ldyBGb3JtRGF0YSh0aGlzLl9mb3JtKV07XG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGFBcnIpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZUFkZFRhc2tWaWV3KCkge1xuICAgIHRoaXMuX3BhcmVudEVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIHVuSGlkZUFkZFRhc2tWaWV3KCkge1xuICAgIHRoaXMuX3BhcmVudEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxuXG4gIGNsaWNrQWRkVGFza0J0bihmdW5jKSB7XG4gICAgdGhpcy5fYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICAgICAgZnVuYygpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGRUYXNrVmlldygpO1xuIiwiaW1wb3J0IFRhc2tWaWV3IGZyb20gJy4vdGFza1ZpZXcuanMnO1xuXG5jbGFzcyBFZGl0VGFza1ZpZXcgZXh0ZW5kcyBUYXNrVmlldyB7XG4gIGN1ckRhdGFJbmRleDtcbiAgX3BhcmVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbGlzdHMnKTtcbiAgX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lZGl0LXRhc2snKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xpY2tDYW5jZWxCdG4odHJ1ZSk7XG4gIH1cblxuICBhZGRIYW5kbGVyVXBsb2FkRWRpdChoYW5kbGVyKSB7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGFBcnIgPSBbLi4ubmV3IEZvcm1EYXRhKHRoaXMuX2Zvcm0pXTtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZGF0YUFycik7XG4gICAgICBoYW5kbGVyKG5ld0RhdGEsIHRoaXMuY3VyRGF0YUluZGV4KTtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwodHJ1ZSk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZvcm0oZGF0YSwgZGF0YUluZGV4KSB7XG4gICAgdGhpcy5jdXJEYXRhSW5kZXggPSBkYXRhSW5kZXg7XG4gICAgY29uc3QgaW5wdXRzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICB0aGlzLl9mb3JtXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEsIGlucHV0JylcbiAgICAgIC5mb3JFYWNoKChlbCwgaSkgPT4gKGVsLnZhbHVlID0gaW5wdXRzW2ldKSk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIGhpZGVNb2RhbCgpIHtcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICB0aGlzLl9wYXJlbnRFbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVkaXRUYXNrVmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuY2xhc3MgRmlsdGVyVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWxpc3RzJyk7XG4gIF9hbGxOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLWJ0bicpO1xuICBfbmF2TnVtID0gMDsgLy8gRGVmYXVsdFxuXG4gIGdldERlZmF1bHRDbGljaygpIHtcbiAgICB0aGlzLl9hbGxOYXZbMF0uY2xpY2soKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJDbGljayhoYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5fcGFyZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLmZpbHRlci1idG4nKTtcbiAgICAgIGlmICghYnRuKSByZXR1cm47XG4gICAgICBzZWxmLmFjdGl2ZU5hdihidG4pO1xuXG4gICAgICBjb25zdCBkYXRhVHlwZUluZGV4ID0gK2J0bi5kYXRhc2V0LmZpbHRlcjtcbiAgICAgIC8vIEZvciBhZGRpbmcgZmF2b3VyaXRlXG4gICAgICBzZWxmLl9uYXZOdW0gPSBkYXRhVHlwZUluZGV4O1xuXG4gICAgICBoYW5kbGVyKGRhdGFUeXBlSW5kZXgpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXJWaWV3KCk7XG4iLCJjbGFzcyBNb2RlIHtcbiAgX3BhcmVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpO1xuICBfcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl90b2dnbGVNb2RlKCk7XG4gIH1cblxuICBfdG9nZ2xlTW9kZSgpIHtcbiAgICB0aGlzLl9wYXJlbnRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX3Jvb3QuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgICAgdGhpcy5fcm9vdC5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodCcpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb2RlKCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5jbGFzcyBSZXN1bHRQcm9qZWN0c1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb2xkZXItbGlzdHMnKTtcbiAgX25hdk51bTtcblxuICBhZGRIYW5kbGVyQ2xpY2tGb2xkZXIoaGFuZGxlcikge1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGZvbGRlciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWZvbGRlci1idG4nKTtcbiAgICAgIGNvbnN0IGRlbGV0ZU1hcmsgPSBlLnRhcmdldC5jbG9zZXN0KCcuYmkteCcpO1xuICAgICAgaWYgKCFmb2xkZXIpIHJldHVybjtcbiAgICAgIGlmIChkZWxldGVNYXJrKSByZXR1cm47IC8vIPCflKUgcHJldmVudCBkb3VibGUgY2xpY2tcbiAgICAgIHRoaXMuYWN0aXZlTmF2KGZvbGRlcik7XG5cbiAgICAgIGNvbnN0IGZvbGRlckluZGV4ID0gK2ZvbGRlci5kYXRhc2V0LmZvbGRlcjtcbiAgICAgIC8vIEZvciByZXN1bHRUYXNrc1ZpZXdcbiAgICAgIHRoaXMuX25hdk51bSA9IGZvbGRlckluZGV4O1xuICAgICAgaGFuZGxlcihmb2xkZXJJbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlRm9sZGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVNYXJrID0gZS50YXJnZXQuY2xvc2VzdCgnLmJpLXgnKTtcbiAgICAgIGlmICghZGVsZXRlTWFyaykgcmV0dXJuO1xuXG4gICAgICBjb25zdCBmb2xkZXJJbmRleCA9ICtlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1mb2xkZXItYnRuJykuZGF0YXNldFxuICAgICAgICAuZm9sZGVyO1xuICAgICAgaGFuZGxlcihmb2xkZXJJbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxsaSBjbGFzcz1cImZvbGRlcl9faXRlbVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1mb2xkZXItYnRuXCIgZGF0YS1mb2xkZXI9XCIke3RoaXMuX3BhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RofVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktZm9sZGVyXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPiR7dGhpcy5fZGF0YS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXhcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXN1bHRQcm9qZWN0c1ZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5pbXBvcnQgeyBmaWx0ZXJEYXRlLCBnZXROZXh0RGF5IH0gZnJvbSAnLi4vaGVscGVycy5qcyc7XG5cbmNsYXNzIFJlc3VsdFRhc2tzVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3RzJyk7XG5cbiAgYWRkSGFuZGxlckZhdm91cml0ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5iaS1zdGFyLWZpbGwnKTtcbiAgICAgIGlmICghc3RhcikgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVyKHRoaXMuX2dldEl0ZW1JbmRleChlLnRhcmdldCkpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSGFuZGxlckRlbGV0ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgYmluID0gZS50YXJnZXQuY2xvc2VzdCgnLmJpLXRyYXNoMy1maWxsJyk7XG4gICAgICBpZiAoIWJpbikgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVyKHRoaXMuX2dldEl0ZW1JbmRleChlLnRhcmdldCkpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSGFuZGxlckVkaXQoaGFuZGxlcikge1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHBlbmNpbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5iaS1wZW5jaWwtc3F1YXJlJyk7XG4gICAgICBpZiAoIXBlbmNpbCkgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVyKHRoaXMuX2dldEl0ZW1JbmRleChlLnRhcmdldCkpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWxpc3RzJylcbiAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldEl0ZW1JbmRleCh0YXJnZXQpIHtcbiAgICBjb25zdCBkYXRhID0gdGFyZ2V0LmNsb3Nlc3QoJy50YXNrX19pdGVtJyk7XG4gICAgY29uc3QgZGF0YUluZGV4ID0gK2RhdGEuZGF0YXNldC5pbmRleDtcbiAgICByZXR1cm4gZGF0YUluZGV4O1xuICB9XG5cbiAgX2NvbnZlcnREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIHllYXI6ICcyLWRpZ2l0JyxcbiAgICB9O1xuXG4gICAgaWYgKGRhdGUgPT09IGZpbHRlckRhdGUobmV3IERhdGUoKSkpIHJldHVybiAnVG9kYXknO1xuICAgIGVsc2UgaWYgKGRhdGUgPT09IGZpbHRlckRhdGUoZ2V0TmV4dERheSgpKSkgcmV0dXJuICdUb21vcnJvdyc7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIG9wdGlvbnMpLmZvcm1hdChuZXcgRGF0ZShkYXRlKSk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAocmVuZGVyID0gdHJ1ZSkge1xuICAgIHJldHVybiBgXG4gICAgPGxpIGNsYXNzPVwidGFza19faXRlbVwiIGRhdGEtaW5kZXg9XCIke1xuICAgICAgcmVuZGVyID8gdGhpcy5fcGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggOiB0aGlzLl9kdW1teUFyci5sZW5ndGhcbiAgICB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3gtMVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stdGFza1wiIGNsYXNzPVwiY2hlY2stdGFzay1sYWJlbFwiXG4gICAgICAgICAgPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidGFza1wiIGlkPVwiY2hlY2stdGFza1wiXG4gICAgICAgIC8+PC9sYWJlbD5cbiAgICAgICAgPHAgY2xhc3M9XCJwYXJhXCI+JHt0aGlzLl9kYXRhLnRvZG99PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3gtMlwiPlxuICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke3RoaXMuX2NvbnZlcnREYXRlKHRoaXMuX2RhdGEuZGF0ZSl9PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmF2b3VyaXRlLWJ0blwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktc3Rhci1maWxsICR7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLmZhdm91cml0ZSA/ICdmYXZvdXJpdGUnIDogJydcbiAgICAgICAgICB9XCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnRuXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJpbi1idG5cIj48aSBjbGFzcz1cImJpIGJpLXRyYXNoMy1maWxsXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXN1bHRUYXNrc1ZpZXcoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IHtcbiAgY2xpY2tDYW5jZWxCdG4oZWRpdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5fcGFyZW50RWwucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGVkaXQpIHRoaXMudG9nZ2xlTW9kYWwoZWRpdCk7XG4gICAgICBlbHNlIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICB0aGlzLl9mb3JtXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEsIGlucHV0JylcbiAgICAgIC5mb3JFYWNoKGVsID0+IChlbC52YWx1ZSA9ICcnKSk7XG4gIH1cblxuICBoaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB0aGlzLl9mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKGVkaXQgPSBmYWxzZSkge1xuICAgIGlmIChlZGl0KSB7XG4gICAgICB0aGlzLl9wYXJlbnRFbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICB0aGlzLl9mb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMTAuNS9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEA3MDAmZmFtaWx5PUtsZWUrT25lOndnaHRANjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIERlZmF1bHQgRm9udCAqL1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsXG4gICAgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIC0tcGFkZGluZy1ib2R5OiAzMHB4IDUwcHg7XG4gIC0tcGFkZGluZy1jb250YWluZXI6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1tYXJnaW4tYm90dG9tLWhlYWQ6IDIwcHg7XG4gIC0tcGFkZGluZy1idXR0b246IDEwcHggMTNweDtcbiAgLS1ib3JkZXItcmFkaXVzLWJ1dHRvbjogOHB4O1xuICAtLXBhZGRpbmctYnV0dG9uLXBhZ2U6IDdweCAxMHB4O1xuICAtLXBhZGRpbmctdGFzay1pdGVtOiAxMHB4IDIwcHg7XG4gIC0tbWFyZ2luLWJvdHRvbS10YXNrLWl0ZW06IDEwcHg7XG4gIC0tY29sb3ItYWRkLWJ1dHRvbjogIzAyYmM3ZDtcbiAgLS1zdGFyLWRhcms6IHJnYigxNTQsIDE1MCwgMTUwKTtcbiAgLS1zdGFyLWxpZ2h0OiByZ2IoMjQ5LCAyMDIsIDYwKTtcbiAgLS1iaW4tZGVsZXRlOiByZ2IoMjIwLCA4MCwgNTIpO1xuICAtLXBlbmNpbC1lZGl0OiByZ2IoMTAzLCAyMjAsIDI0OSk7XG59XG5cbjpyb290LmxpZ2h0IHtcbiAgLS1mb250LWNvbG9yOiByZ2IoMzUsIDM0LCAzNCk7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1ib2R5OiByZ2IoMjMyLCAyMjgsIDIyOCk7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXI6IHJnYigyMTAsIDIwOSwgMjA2KTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjZTNlM2U0O1xuICAtLWJhY2tncm91bmQtY29sb3ItdGFzay1pdGVtOiAjMzM0MTU1O1xufVxuXG46cm9vdC5kYXJrIHtcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWJvZHk6ICMxMTE4Mjc7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXI6ICMxZTI5M2I7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogIzMzNDE1NTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRhc2staXRlbTogIzMzNDE1NTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1ib2R5KTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1ib2R5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnaGVhZGVyIGhlYWRlcidcbiAgICAnYXNpZGUgbWFpbic7XG4gIGdhcDogMzBweDtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSNjaGVjay10YXNrLFxuaW5wdXRbdHlwZT0ndGV4dCddLFxuaW5wdXRbdHlwZT0nZGF0ZSddLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuLmZpcnN0LW8ge1xuICBjb2xvcjogdmFyKC0tYmluLWRlbGV0ZSk7XG59XG5cbi5zZWNvbmQtbyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbn1cblxuLmhlYWRlci1jb250YWluZXIsXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZ2FwOiA1cHg7XG59XG5cbi5sb2dvLXN5bWJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubG9nby1uYW1lIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG59XG5cbi50b2dnbGUtc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yNXB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuLm1vZGUtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbW9kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNtb2RlOmNoZWNrZWQgfiAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbi5zbGlkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTJweCAtMXB4IDBweCAwcHggdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNtb2RlOmNoZWNrZWQgfiAuc2xpZGVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hc2lkZS1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGFzaWRlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgd2lkdGg6IG1heCgxODBweCwgMjB2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA0MHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbi5maWx0ZXItYnRuLmFjdGl2ZSxcbi5wcm9qZWN0LWZvbGRlci1idG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xufVxuXG4uZmlsdGVyLWJ0bixcbi5wcm9qZWN0LWZvbGRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1idXR0b24pO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtYnV0dG9uKTtcbn1cblxuLmJpLXgge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYmkteDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgY29sb3I6IHZhcigtLWJpbi1kZWxldGUpO1xufVxuXG4uZmlsdGVyLWxpc3RzLFxuLnByb2plY3QtZm9sZGVyLWxpc3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtLXByb2plY3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAncHJvamVjdCBwcm9qZWN0J1xuICAgICdzdWJtaXQgY2FuY2VsJztcbiAgZ2FwOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXSB7XG4gIGdyaWQtYXJlYTogcHJvamVjdDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mb290ZXItMSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuZm9vdGVyID4gYSA+IGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuZm9vdGVyID4gYSA+IGk6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbmZvb3RlciA+IHAge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFzay1ib3gtMSxcbi50YXNrLWJveC0yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stYm94LTEge1xuICBnYXA6IDE4cHg7XG59XG5cbi50YXNrLWJveC0yIHtcbiAgZ2FwOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRhc2tfX2l0ZW0ge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2staXRlbSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtYnV0dG9uKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20tdGFzay1pdGVtKTtcbn1cblxuLnBhcmEge1xuICBmb250LWZhbWlseTogJ0tsZWUgT25lJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddI2NoZWNrLXRhc2sge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uZmF2b3VyaXRlLWJ0bixcbi5iaW4tYnRuLFxuLmVkaXQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLXN0YXItZGFyayk7XG59XG5cbi5mYXZvdXJpdGUtYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXN0YXItbGlnaHQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5mYXZvdXJpdGUge1xuICBjb2xvcjogdmFyKC0tc3Rhci1saWdodCk7XG59XG5cbi5iaW4tYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJpbi1kZWxldGUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5lZGl0LWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wZW5jaWwtZWRpdCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLmZvcm0tdGFzayxcbi5mb3JtLWVkaXQtdGFzayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICd0YXNrIHRhc2sgdGFzayB0YXNrJ1xuICAgICdkYXRlIC4gc3VibWl0IGNhbmNlbCc7XG4gIGdhcDogOHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGdyaWQtYXJlYTogdGFzaztcbiAgcmVzaXplOiBub25lO1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xuICBmb250LWZhbWlseTogJ0tsZWUgT25lJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbn1cblxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbn1cblxuLmZvcm0tZGF0ZSB7XG4gIGdyaWQtYXJlYTogZGF0ZTtcbn1cblxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbmlucHV0W3R5cGU9J2RhdGUnXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIGdyaWQtYXJlYTogY2FuY2VsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaW4tZGVsZXRlKTtcbn1cblxuLnN1Ym1pdC1idG4sXG4uY2FuY2VsLWJ0biB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnN1Ym1pdC1idG46aG92ZXIsXG4uY2FuY2VsLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbmgxLFxuaDIge1xuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20taGVhZCk7XG59XG5cbi5hc2lkZS1jb250YWluZXIsXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWNvbnRhaW5lcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWNvbnRhaW5lcik7XG59XG5cbi5hZGQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG91dGxpbmU6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcbn1cblxuLmFkZC1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG5cbmkge1xuICBmb250LXNpemU6IDEuMDhyZW07XG59XG5cbi5hZGQtYnRuOmFjdGl2ZSxcbi5mYXZvdXJpdGUtYnRuOmFjdGl2ZSxcbi5iaW4tYnRuOmFjdGl2ZSxcbmlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmFjdGl2ZSxcbi5zdWJtaXQtYnRuOmFjdGl2ZSxcbi5jYW5jZWwtYnRuOmFjdGl2ZSxcbi5lZGl0LWJ0bjphY3RpdmUsXG4uYmkteDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uZmlsdGVyLWJ0bjpob3Zlcixcbi5wcm9qZWN0LWZvbGRlci1idG46aG92ZXIsXG4udGFza19faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbi50YXNrX19pdGVtLFxuZm9vdGVyID4gYSA+IGksXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbmJ1dHRvbixcbi5iaS14IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb290ZXItMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICBib2R5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDFmciBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnaGVhZGVyJ1xuICAgICAgJ2FzaWRlJ1xuICAgICAgJ21haW4nO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gIH1cblxuICAuYXNpZGUtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLmFzaWRlLWNvbnRhaW5lciBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZpbHRlci1saXN0cyxcbiAgLnByb2plY3QtZm9sZGVyLWxpc3RzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZvb3Rlci0xIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvb3Rlci0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7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RUFFRSxpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7O0VBUUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSwrQ0FBK0M7RUFDL0MsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLHFDQUFxQztJQUNyQzs7O1lBR1E7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMTAuNS9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEA3MDAmZmFtaWx5PUtsZWUrT25lOndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIERlZmF1bHQgRm9udCAqL1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLFxcbiAgICAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXBhZGRpbmctYm9keTogMzBweCA1MHB4O1xcbiAgLS1wYWRkaW5nLWNvbnRhaW5lcjogMjBweDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC0tbWFyZ2luLWJvdHRvbS1oZWFkOiAyMHB4O1xcbiAgLS1wYWRkaW5nLWJ1dHRvbjogMTBweCAxM3B4O1xcbiAgLS1ib3JkZXItcmFkaXVzLWJ1dHRvbjogOHB4O1xcbiAgLS1wYWRkaW5nLWJ1dHRvbi1wYWdlOiA3cHggMTBweDtcXG4gIC0tcGFkZGluZy10YXNrLWl0ZW06IDEwcHggMjBweDtcXG4gIC0tbWFyZ2luLWJvdHRvbS10YXNrLWl0ZW06IDEwcHg7XFxuICAtLWNvbG9yLWFkZC1idXR0b246ICMwMmJjN2Q7XFxuICAtLXN0YXItZGFyazogcmdiKDE1NCwgMTUwLCAxNTApO1xcbiAgLS1zdGFyLWxpZ2h0OiByZ2IoMjQ5LCAyMDIsIDYwKTtcXG4gIC0tYmluLWRlbGV0ZTogcmdiKDIyMCwgODAsIDUyKTtcXG4gIC0tcGVuY2lsLWVkaXQ6IHJnYigxMDMsIDIyMCwgMjQ5KTtcXG59XFxuXFxuOnJvb3QubGlnaHQge1xcbiAgLS1mb250LWNvbG9yOiByZ2IoMzUsIDM0LCAzNCk7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYm9keTogcmdiKDIzMiwgMjI4LCAyMjgpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWNvbnRhaW5lcjogcmdiKDIxMCwgMjA5LCAyMDYpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjZTNlM2U0O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRhc2staXRlbTogIzMzNDE1NTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWJvZHk6ICMxMTE4Mjc7XFxuICAtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyOiAjMWUyOTNiO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjMzM0MTU1O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRhc2staXRlbTogIzMzNDE1NTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJvZHkpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1ib2R5KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnYXNpZGUgbWFpbic7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10jY2hlY2stdGFzayxcXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZGF0ZSddLFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4uZmlyc3QtbyB7XFxuICBjb2xvcjogdmFyKC0tYmluLWRlbGV0ZSk7XFxufVxcblxcbi5zZWNvbmQtbyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyLFxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5sb2dvLXN5bWJvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4ubG9nby1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbn1cXG5cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0yNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5tb2RlLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuI21vZGU6Y2hlY2tlZCB+IC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogNnB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiBpbnNldCAxMnB4IC0xcHggMHB4IDBweCB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4jbW9kZTpjaGVja2VkIH4gLnNsaWRlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5hc2lkZS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xcbiAgd2lkdGg6IG1heCgxODBweCwgMjB2dyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxufVxcblxcbi5maWx0ZXItYnRuLmFjdGl2ZSxcXG4ucHJvamVjdC1mb2xkZXItYnRuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uZmlsdGVyLWJ0bixcXG4ucHJvamVjdC1mb2xkZXItYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1idXR0b24pO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbn1cXG5cXG4uYmkteCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmJpLXg6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgY29sb3I6IHZhcigtLWJpbi1kZWxldGUpO1xcbn1cXG5cXG4uZmlsdGVyLWxpc3RzLFxcbi5wcm9qZWN0LWZvbGRlci1saXN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAncHJvamVjdCBwcm9qZWN0J1xcbiAgICAnc3VibWl0IGNhbmNlbCc7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtYnV0dG9uKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5mb290ZXItMSB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIgPiBhID4gaSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbmZvb3RlciA+IGEgPiBpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuZm9vdGVyID4gcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1ib3gtMSxcXG4udGFzay1ib3gtMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stYm94LTEge1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4udGFzay1ib3gtMiB7XFxuICBnYXA6IDEzcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2tfX2l0ZW0ge1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10YXNrLWl0ZW0pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tLXRhc2staXRlbSk7XFxufVxcblxcbi5wYXJhIHtcXG4gIGZvbnQtZmFtaWx5OiAnS2xlZSBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSNjaGVjay10YXNrIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uZmF2b3VyaXRlLWJ0bixcXG4uYmluLWJ0bixcXG4uZWRpdC1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHZhcigtLXN0YXItZGFyayk7XFxufVxcblxcbi5mYXZvdXJpdGUtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zdGFyLWxpZ2h0KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmZhdm91cml0ZSB7XFxuICBjb2xvcjogdmFyKC0tc3Rhci1saWdodCk7XFxufVxcblxcbi5iaW4tYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iaW4tZGVsZXRlKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmVkaXQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wZW5jaWwtZWRpdCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mb3JtLXRhc2ssXFxuLmZvcm0tZWRpdC10YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAndGFzayB0YXNrIHRhc2sgdGFzaydcXG4gICAgJ2RhdGUgLiBzdWJtaXQgY2FuY2VsJztcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBncmlkLWFyZWE6IHRhc2s7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbiAgZm9udC1mYW1pbHk6ICdLbGVlIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyLFxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xcbn1cXG5cXG4uZm9ybS1kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiAxMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMCU7XFxufVxcblxcbmlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxufVxcblxcbi5jYW5jZWwtYnRuIHtcXG4gIGdyaWQtYXJlYTogY2FuY2VsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmluLWRlbGV0ZSk7XFxufVxcblxcbi5zdWJtaXQtYnRuLFxcbi5jYW5jZWwtYnRuIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyLFxcbi5jYW5jZWwtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20taGVhZCk7XFxufVxcblxcbi5hc2lkZS1jb250YWluZXIsXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctY29udGFpbmVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXIpO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1idXR0b24pO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xcbn1cXG5cXG5pIHtcXG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcXG59XFxuXFxuLmFkZC1idG46YWN0aXZlLFxcbi5mYXZvdXJpdGUtYnRuOmFjdGl2ZSxcXG4uYmluLWJ0bjphY3RpdmUsXFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6YWN0aXZlLFxcbi5zdWJtaXQtYnRuOmFjdGl2ZSxcXG4uY2FuY2VsLWJ0bjphY3RpdmUsXFxuLmVkaXQtYnRuOmFjdGl2ZSxcXG4uYmkteDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmZpbHRlci1idG46aG92ZXIsXFxuLnByb2plY3QtZm9sZGVyLWJ0bjpob3ZlcixcXG4udGFza19faXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuLnRhc2tfX2l0ZW0sXFxuZm9vdGVyID4gYSA+IGksXFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXFxuYnV0dG9uLFxcbi5iaS14IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9vdGVyLTIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICdoZWFkZXInXFxuICAgICAgJ2FzaWRlJ1xcbiAgICAgICdtYWluJztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XFxuICB9XFxuXFxuICAuYXNpZGUtY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5hc2lkZS1jb250YWluZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZmlsdGVyLWxpc3RzLFxcbiAgLnByb2plY3QtZm9sZGVyLWxpc3RzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9vdGVyLTEge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmZvb3Rlci0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgY2hlY2tNYXJrIGZyb20gJy4uL2ltZy9jaGVja21hcmsucG5nJztcbmltcG9ydCAqIGFzIG1vZGVsIGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IG1vZGUgZnJvbSAnLi92aWV3cy9tb2RlVmlldy5qcyc7XG5pbXBvcnQgYWRkVGFza1ZpZXcgZnJvbSAnLi92aWV3cy9hZGRUYXNrVmlldy5qcyc7XG5pbXBvcnQgZWRpdFRhc2tWaWV3IGZyb20gJy4vdmlld3MvZWRpdFRhc2tWaWV3LmpzJztcbmltcG9ydCBhZGRQcm9qZWN0VGFza1ZpZXcgZnJvbSAnLi92aWV3cy9hZGRQcm9qZWN0VGFza1ZpZXcuanMnO1xuaW1wb3J0IGZpbHRlclZpZXcgZnJvbSAnLi92aWV3cy9maWx0ZXJWaWV3LmpzJztcbmltcG9ydCByZXN1bHRUYXNrc1ZpZXcgZnJvbSAnLi92aWV3cy9yZXN1bHRUYXNrc1ZpZXcuanMnO1xuaW1wb3J0IHJlc3VsdFByb2plY3RzVmlldyBmcm9tICcuL3ZpZXdzL3Jlc3VsdFByb2plY3RzVmlldy5qcyc7XG5cbmNvbnN0IGNoZWNrQW5kR2V0RGF0YVR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHR5cGUgPSBmaWx0ZXJWaWV3LmdldEN1ck5hdigpID49IDAgPyAnZmlsdGVyJyA6ICdmb2xkZXInO1xuXG4gIGNvbnN0IHR5cGVJbmRleCA9XG4gICAgdHlwZSA9PT0gJ2ZpbHRlcicgPyBmaWx0ZXJWaWV3LmdldEN1ck5hdigpIDogcmVzdWx0UHJvamVjdHNWaWV3LmdldEN1ck5hdigpO1xuXG4gIGNvbnN0IGRhdGFTZXQgPVxuICAgIHR5cGUgPT09ICdmaWx0ZXInXG4gICAgICA/IE9iamVjdC52YWx1ZXMobW9kZWwuc3RhdGUpW3R5cGVJbmRleF1cbiAgICAgIDogbW9kZWwuc3RhdGUuZm9sZGVyc1t0eXBlSW5kZXhdPy50YXNrcztcblxuICByZXR1cm4geyB0eXBlLCB0eXBlSW5kZXgsIGRhdGFTZXQgfTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBZGRUYXNrVmlldyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChtb2RlbC5jaGVja1Rhc2tEZXRhaWwoZGF0YSkpIHtcbiAgICBhbGVydCgnVGhpcyBkZXRhaWwgaXMgYWxyZWFkeSBub3RlZCA6IClcXG5QbGVhc2UgZmlsbCBhZ2FpbicpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgdHlwZSwgdHlwZUluZGV4IH0gPSBjaGVja0FuZEdldERhdGFUeXBlKCk7XG4gICAgLy8gU3RvcmUgRGF0YVxuICAgIGlmICh0eXBlID09PSAnZm9sZGVyJyAmJiB0eXBlSW5kZXggPj0gMCkgbW9kZWwuc3RvcmVUYXNrKGRhdGEsIHR5cGVJbmRleCk7XG4gICAgZWxzZSBtb2RlbC5zdG9yZVRhc2soZGF0YSk7XG5cbiAgICAvLyBSZW5kZXIgRGF0YVxuICAgIHJlc3VsdFRhc2tzVmlldy5yZW5kZXIobW9kZWwuc3RhdGUuYWxsVGFza3MuYXQoLTEpKTtcbiAgfVxufTtcblxuY29uc3QgY29udHJvbEZpbHRlclZpZXcgPSBmdW5jdGlvbiAoZGF0YVR5cGVJbmRleCkge1xuICBhZGRUYXNrVmlldy5oaWRlTW9kYWwoKTtcbiAgYWRkUHJvamVjdFRhc2tWaWV3LmhpZGVNb2RhbCgpO1xuICBlZGl0VGFza1ZpZXcuaGlkZU1vZGFsKCk7XG5cbiAgcmVzdWx0UHJvamVjdHNWaWV3LnJlc2V0TmF2KCk7XG5cbiAgY29uc3QgZGF0YVNldCA9IE9iamVjdC52YWx1ZXMobW9kZWwuc3RhdGUpW2RhdGFUeXBlSW5kZXhdO1xuXG4gIC8vIENsZWFyIGRpc3BsYXlcbiAgcmVzdWx0VGFza3NWaWV3LmNsZWFyKCk7XG5cbiAgLy8gUmVuZGVyIGRpc3BsYXlcbiAgaWYgKGRhdGFTZXQubGVuZ3RoICE9PSAwKVxuICAgIGRhdGFTZXQuZm9yRWFjaChkYXRhID0+IHJlc3VsdFRhc2tzVmlldy5yZW5kZXIoZGF0YSkpO1xuXG4gIC8vIEFsbG93IHVzZXIgdG8gYWRkIGxpc3Qgb25seSAnYWxsJyBmaWx0ZXJcbiAgaWYgKGRhdGFUeXBlSW5kZXggPT09IDApIGFkZFRhc2tWaWV3LnVuSGlkZUFkZFRhc2tWaWV3KCk7XG4gIGVsc2UgYWRkVGFza1ZpZXcuaGlkZUFkZFRhc2tWaWV3KCk7XG59O1xuXG5jb25zdCBjb250cm9sRmF2b3VyaXRlID0gZnVuY3Rpb24gKGRhdGFJbmRleCkge1xuICBhZGRUYXNrVmlldy5oaWRlTW9kYWwoKTtcbiAgYWRkUHJvamVjdFRhc2tWaWV3LmhpZGVNb2RhbCgpO1xuICBlZGl0VGFza1ZpZXcuaGlkZU1vZGFsKCk7XG5cbiAgY29uc3QgeyB0eXBlLCB0eXBlSW5kZXgsIGRhdGFTZXQgfSA9IGNoZWNrQW5kR2V0RGF0YVR5cGUoKTtcblxuICAvLyBDaGVjayBmYXZvdXJpdGUgYm9vbGVhbiB2YWx1ZVxuICBjb25zdCByZXN1bHQgPVxuICAgIHR5cGUgPT09ICdmaWx0ZXInXG4gICAgICA/IGRhdGFTZXRbZGF0YUluZGV4XS5mYXZvdXJpdGVcbiAgICAgIDogZGF0YVNldFtkYXRhSW5kZXhdLmZhdm91cml0ZTtcblxuICAvLyBUb2dnbGUgZmF2b3VyaXRlXG4gIGlmICghcmVzdWx0KSBtb2RlbC5hZGRGYXZvdXJpdGUoZGF0YUluZGV4LCB0eXBlLCB0eXBlSW5kZXgpO1xuICBlbHNlIG1vZGVsLmRlbGV0ZUZhdm91cml0ZShkYXRhSW5kZXgsIHR5cGUsIHR5cGVJbmRleCk7XG5cbiAgLy8gUmVuZGVyXG4gIGlmICh0eXBlID09PSAnZmlsdGVyJyAmJiB0eXBlSW5kZXggPT09IDMpIHtcbiAgICByZXN1bHRUYXNrc1ZpZXcuY2xlYXIoKTtcbiAgICBkYXRhU2V0Lmxlbmd0aCA+IDBcbiAgICAgID8gZGF0YVNldC5mb3JFYWNoKGRhdGEgPT4gcmVzdWx0VGFza3NWaWV3LnJlbmRlcihkYXRhKSlcbiAgICAgIDogJyc7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0VGFza3NWaWV3LnVwZGF0ZShkYXRhU2V0KTtcbiAgfVxufTtcblxuY29uc3QgY29udHJvbERlbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSW5kZXgpIHtcbiAgYWRkVGFza1ZpZXcuaGlkZU1vZGFsKCk7XG4gIGFkZFByb2plY3RUYXNrVmlldy5oaWRlTW9kYWwoKTtcbiAgZWRpdFRhc2tWaWV3LmhpZGVNb2RhbCgpO1xuXG4gIGNvbnN0IHsgdHlwZSwgdHlwZUluZGV4LCBkYXRhU2V0IH0gPSBjaGVja0FuZEdldERhdGFUeXBlKCk7XG5cbiAgbW9kZWwuZGVsZXRlVGFzayhkYXRhSW5kZXgsIHR5cGUsIHR5cGVJbmRleCk7XG5cbiAgcmVzdWx0VGFza3NWaWV3LmNsZWFyKCk7XG4gIGlmIChkYXRhU2V0Lmxlbmd0aCA+IDApIGRhdGFTZXQuZm9yRWFjaChkYXRhID0+IHJlc3VsdFRhc2tzVmlldy5yZW5kZXIoZGF0YSkpO1xufTtcblxuY29uc3QgY29udHJvbEVkaXQgPSBmdW5jdGlvbiAoZGF0YUluZGV4KSB7XG4gIGFkZFByb2plY3RUYXNrVmlldy5oaWRlTW9kYWwoKTtcbiAgYWRkVGFza1ZpZXcuaGlkZUFkZFRhc2tWaWV3KCk7XG4gIGVkaXRUYXNrVmlldy5oaWRlTW9kYWwoKTtcblxuICBjb25zdCBkYXRhVHlwZSA9IGNoZWNrQW5kR2V0RGF0YVR5cGUoKTtcblxuICBlZGl0VGFza1ZpZXcuZ2V0Rm9ybShkYXRhVHlwZS5kYXRhU2V0W2RhdGFJbmRleF0sIGRhdGFJbmRleCk7XG59O1xuXG5jb25zdCBjb250cm9sRWRpdFRhc2sgPSBmdW5jdGlvbiAobmV3RGF0YSwgY3VyRGF0YUluZGV4KSB7XG4gIGNvbnN0IHsgdHlwZSwgdHlwZUluZGV4LCBkYXRhU2V0IH0gPSBjaGVja0FuZEdldERhdGFUeXBlKCk7XG5cbiAgbW9kZWwuZWRpdERhdGEobmV3RGF0YSwgY3VyRGF0YUluZGV4LCB0eXBlLCB0eXBlSW5kZXgpO1xuXG4gIHJlc3VsdFRhc2tzVmlldy51cGRhdGUoZGF0YVNldCk7XG4gIGFkZFRhc2tWaWV3LnVuSGlkZUFkZFRhc2tWaWV3KCk7XG59O1xuXG5jb25zdCBjb250cm9sQWRkUHJvamVjdCA9IGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgaWYgKG1vZGVsLmNoZWNrRm9sZGVyTmFtZShmb2xkZXIpKSB7XG4gICAgYWxlcnQoJ1RoaXMgbmFtZSBpcyBhbHJlYWR5IHVzZWQuIFBsZWFzZSBmaWxsIGFnYWluIDogRCcpO1xuICB9IGVsc2Uge1xuICAgIG1vZGVsLnN0b3JlRm9sZGVyKGZvbGRlcik7XG4gICAgcmVzdWx0UHJvamVjdHNWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5mb2xkZXJzLmF0KC0xKSk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnRyb2xDbGlja0ZvbGRlciA9IGZ1bmN0aW9uIChmb2xkZXJJbmRleCkge1xuICBhZGRUYXNrVmlldy5oaWRlTW9kYWwoKTtcbiAgYWRkUHJvamVjdFRhc2tWaWV3LmhpZGVNb2RhbCgpO1xuICBlZGl0VGFza1ZpZXcuaGlkZU1vZGFsKCk7XG5cbiAgZmlsdGVyVmlldy5yZXNldE5hdigpO1xuXG4gIGNvbnN0IGRhdGFTZXQgPSBtb2RlbC5zdGF0ZS5mb2xkZXJzW2ZvbGRlckluZGV4XS50YXNrcztcbiAgcmVzdWx0VGFza3NWaWV3LmNsZWFyKCk7XG4gIGlmIChkYXRhU2V0Lmxlbmd0aCA+IDApIGRhdGFTZXQuZm9yRWFjaChkYXRhID0+IHJlc3VsdFRhc2tzVmlldy5yZW5kZXIoZGF0YSkpO1xuICBhZGRUYXNrVmlldy51bkhpZGVBZGRUYXNrVmlldygpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZUZvbGRlciA9IGZ1bmN0aW9uIChmb2xkZXJJbmRleCkge1xuICAvLyBEZWxldGUgZm9sZGVyXG4gIG1vZGVsLmRlbGV0ZUZvbGRlcihmb2xkZXJJbmRleCk7XG5cbiAgLy8gUmUtcmVuZGVyIHByb2plY3QgZm9sZGVyXG4gIHJlc3VsdFByb2plY3RzVmlldy5jbGVhcigpO1xuICBtb2RlbC5zdGF0ZS5mb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHJlc3VsdFByb2plY3RzVmlldy5yZW5kZXIoZm9sZGVyKSk7XG5cbiAgLy8gUmUtcmVuZGVyIHRhc2tcbiAgY29uc3QgeyB0eXBlLCBkYXRhU2V0IH0gPSBjaGVja0FuZEdldERhdGFUeXBlKCk7XG4gIHJlc3VsdFRhc2tzVmlldy5jbGVhcigpO1xuICBpZiAodHlwZSA9PT0gJ2ZvbGRlcicpIGZpbHRlclZpZXcuZ2V0RGVmYXVsdENsaWNrKCk7XG4gIGVsc2UgZGF0YVNldC5mb3JFYWNoKGRhdGEgPT4gcmVzdWx0VGFza3NWaWV3LnJlbmRlcihkYXRhKSk7XG59O1xuXG5jb25zdCBjb250cm9sTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAvLyBSZW5kZXIgUHJvamVjdHNcbiAgbW9kZWwuc3RhdGUuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiByZXN1bHRQcm9qZWN0c1ZpZXcucmVuZGVyKGZvbGRlcikpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29udHJvbExvY2FsU3RvcmFnZSgpO1xuICBhZGRUYXNrVmlldy5hZGRIYW5kbGVyVXBsb2FkKGNvbnRyb2xBZGRUYXNrVmlldyk7XG4gIGZpbHRlclZpZXcuYWRkSGFuZGxlckNsaWNrKGNvbnRyb2xGaWx0ZXJWaWV3KTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJVcGxvYWRFZGl0KGNvbnRyb2xFZGl0VGFzayk7XG4gIGFkZFByb2plY3RUYXNrVmlldy5hZGRIYW5kbGVyVXBsb2FkRm9sZGVyKGNvbnRyb2xBZGRQcm9qZWN0KTtcbiAgcmVzdWx0VGFza3NWaWV3LmFkZEhhbmRsZXJGYXZvdXJpdGUoY29udHJvbEZhdm91cml0ZSk7XG4gIHJlc3VsdFRhc2tzVmlldy5hZGRIYW5kbGVyRGVsZXRlKGNvbnRyb2xEZWxldGUpO1xuICByZXN1bHRUYXNrc1ZpZXcuYWRkSGFuZGxlckVkaXQoY29udHJvbEVkaXQpO1xuICByZXN1bHRQcm9qZWN0c1ZpZXcuYWRkSGFuZGxlckNsaWNrRm9sZGVyKGNvbnRyb2xDbGlja0ZvbGRlcik7XG4gIHJlc3VsdFByb2plY3RzVmlldy5hZGRIYW5kbGVyRGVsZXRlRm9sZGVyKGNvbnRyb2xEZWxldGVGb2xkZXIpO1xuXG4gIC8vIEhpZGUgZm9ybSB3aGVuIGNsaWNrIG90aGVyIHBsYWNlc1xuICBhZGRUYXNrVmlldy5jbGlja0FkZFRhc2tCdG4oXG4gICAgYWRkUHJvamVjdFRhc2tWaWV3LmhpZGVNb2RhbC5iaW5kKGFkZFByb2plY3RUYXNrVmlldylcbiAgKTtcbiAgYWRkUHJvamVjdFRhc2tWaWV3LmNsaWNrQWRkUHJvamVjdEJ0bihcbiAgICBhZGRUYXNrVmlldy5oaWRlTW9kYWwuYmluZChhZGRUYXNrVmlldyksXG4gICAgZWRpdFRhc2tWaWV3LmhpZGVNb2RhbC5iaW5kKGVkaXRUYXNrVmlldylcbiAgKTtcblxuICAvLyBEZWZhdWx0IGNsaWNrXG4gIGZpbHRlclZpZXcuZ2V0RGVmYXVsdENsaWNrKCk7XG59O1xuaW5pdCgpO1xuIl0sIm5hbWVzIjpbIldFRUsiLCJmaWx0ZXJEYXRlIiwic3RyRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJnZXROZXh0RGF5IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImN1ckRhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJzdGF0ZSIsImFsbFRhc2tzIiwidG9kYXlUYXNrcyIsIndlZWtUYXNrcyIsImZhdm91cml0ZVRhc2tzIiwiZm9sZGVycyIsImdldFdlZWtEYXRlIiwiZGF0ZUFyciIsInB1c2giLCJmaWx0ZXJDYXRlZ29yaWVzIiwiZGF0YSIsImRhdGUiLCJpbmNsdWRlcyIsImZhdm91cml0ZSIsInN0b3JlVGFzayIsIl9zdGF0ZSRmb2xkZXJzJGZvbGRlciIsImZvbGRlckluZGV4IiwidGFza3MiLCJwZXJzaXN0VGFza3NBbmRGb2xkZXJzIiwiY2hlY2tUYXNrRGV0YWlsIiwiYWxsVG9kbyIsIm1hcCIsIm9iaiIsInRvZG8iLCJhbGxEYXRlIiwiZmluZERhdGEiLCJkYXRhSW5kZXgiLCJ0eXBlIiwidHlwZUluZGV4IiwiT2JqZWN0IiwidmFsdWVzIiwiZmluZEFuZERlbGV0ZUluZGV4Iiwic3RhcnQiLCJlbmQiLCJlZGl0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJhZGRGYXZvdXJpdGUiLCJkZWxldGVGYXZvdXJpdGUiLCJkZWxldGVUYXNrIiwicmVzZXRDYXRlZ29yaWVzIiwiZWRpdERhdGEiLCJuZXdEYXRhIiwiY3VyRGF0YUluZGV4IiwiY2hlY2tGb2xkZXJOYW1lIiwiZm9sZGVyIiwibmFtZSIsInN0b3JlRm9sZGVyIiwiZGVsZXRlRm9sZGVyIiwiZGF0YUFyciIsImZvckVhY2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnZlcnRGb2xkZXJEYXRhSW5TdG9yYWdlIiwidGFza3NBcnIiLCJhbGxJbmRleEFyciIsImluZGV4QXJyIiwiZmxhdCIsImoiLCJnZXRUYXNrc0FuZEZvbGRlcnMiLCJhbGxUYXNrc1N0b3JhZ2UiLCJnZXRJdGVtIiwiZm9sZGVyc1N0b3JhZ2UiLCJwYXJzZSIsImNsZWFyVGFza3NBbmRGb2xkZXJzIiwiY2xlYXIiLCJWaWV3IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfZGF0YSIsIm1hcmt1cCIsIl9nZW5lcmF0ZU1hcmt1cCIsIl9wYXJlbnRFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidXBkYXRlIiwiZGF0YVNldCIsIl90aGlzIiwibmV3TWFya1VwIiwiaHRtbCIsIl9kdW1teUFyciIsImpvaW4iLCJuZXdET00iLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwibmV3RWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VyRWxlbWVudHMiLCJuZXdFbCIsIl9uZXdFbCRmaXJzdENoaWxkIiwiY3VyRWwiLCJpc0VxdWFsTm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVmFsdWUiLCJ0cmltIiwidGV4dENvbnRlbnQiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImFjdGl2ZU5hdiIsImVsIiwiYWxsTmF2IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZ2V0Q3VyTmF2IiwiX25hdk51bSIsInJlc2V0TmF2IiwiZGVmYXVsdCIsIlRhc2tWaWV3IiwiQWRkUHJvamVjdFRhc2tWaWV3IiwiX1Rhc2tWaWV3IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2tDYW5jZWxCdG4iLCJhZGRIYW5kbGVyVXBsb2FkRm9sZGVyIiwiaGFuZGxlciIsIl90aGlzMiIsIl9mb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIkZvcm1EYXRhIiwiZnJvbUVudHJpZXMiLCJ0b2dnbGVNb2RhbCIsImNsZWFySW5wdXQiLCJjbGlja0FkZFByb2plY3RCdG4iLCJmdW5jIiwiZnVuYzIiLCJfdGhpczMiLCJfYWRkQnRuIiwiQWRkVGFza1ZpZXciLCJhZGRIYW5kbGVyVXBsb2FkIiwiaGlkZUFkZFRhc2tWaWV3IiwiX3BhcmVudEVsIiwidW5IaWRlQWRkVGFza1ZpZXciLCJjbGlja0FkZFRhc2tCdG4iLCJFZGl0VGFza1ZpZXciLCJhZGRIYW5kbGVyVXBsb2FkRWRpdCIsImdldEZvcm0iLCJpbnB1dHMiLCJoaWRlTW9kYWwiLCJGaWx0ZXJWaWV3IiwiX1ZpZXciLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJhcHBseSIsImNvbmNhdCIsImdldERlZmF1bHRDbGljayIsIl9hbGxOYXYiLCJjbGljayIsImFkZEhhbmRsZXJDbGljayIsInNlbGYiLCJidG4iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZGF0YVR5cGVJbmRleCIsImRhdGFzZXQiLCJmaWx0ZXIiLCJNb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiX3RvZ2dsZU1vZGUiLCJfcm9vdCIsInRvZ2dsZSIsIlJlc3VsdFByb2plY3RzVmlldyIsImFkZEhhbmRsZXJDbGlja0ZvbGRlciIsImRlbGV0ZU1hcmsiLCJhZGRIYW5kbGVyRGVsZXRlRm9sZGVyIiwiY2hpbGRyZW4iLCJSZXN1bHRUYXNrc1ZpZXciLCJhZGRIYW5kbGVyRmF2b3VyaXRlIiwic3RhciIsIl9nZXRJdGVtSW5kZXgiLCJhZGRIYW5kbGVyRGVsZXRlIiwiYmluIiwiYWRkSGFuZGxlckVkaXQiLCJfdGhpczQiLCJwZW5jaWwiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiX2NvbnZlcnREYXRlIiwib3B0aW9ucyIsImRheSIsIm1vbnRoIiwieWVhciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImZvcm1hdCIsImNoZWNrTWFyayIsIm1vZGVsIiwibW9kZSIsImFkZFRhc2tWaWV3IiwiZWRpdFRhc2tWaWV3IiwiYWRkUHJvamVjdFRhc2tWaWV3IiwiZmlsdGVyVmlldyIsInJlc3VsdFRhc2tzVmlldyIsInJlc3VsdFByb2plY3RzVmlldyIsImNoZWNrQW5kR2V0RGF0YVR5cGUiLCJfbW9kZWwkc3RhdGUkZm9sZGVycyQiLCJjb250cm9sQWRkVGFza1ZpZXciLCJhbGVydCIsIl9jaGVja0FuZEdldERhdGFUeXBlIiwiYXQiLCJjb250cm9sRmlsdGVyVmlldyIsImNvbnRyb2xGYXZvdXJpdGUiLCJfY2hlY2tBbmRHZXREYXRhVHlwZTIiLCJyZXN1bHQiLCJjb250cm9sRGVsZXRlIiwiX2NoZWNrQW5kR2V0RGF0YVR5cGUzIiwiY29udHJvbEVkaXQiLCJkYXRhVHlwZSIsImNvbnRyb2xFZGl0VGFzayIsIl9jaGVja0FuZEdldERhdGFUeXBlNCIsImNvbnRyb2xBZGRQcm9qZWN0IiwiY29udHJvbENsaWNrRm9sZGVyIiwiY29udHJvbERlbGV0ZUZvbGRlciIsIl9jaGVja0FuZEdldERhdGFUeXBlNSIsImNvbnRyb2xMb2NhbFN0b3JhZ2UiLCJpbml0IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=