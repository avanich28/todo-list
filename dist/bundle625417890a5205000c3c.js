/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Comfortaa:wght@700&display=swap);"]);
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
  --padding-button: 10px 0 10px 13px;
  --border-radius-button: 8px;
  --background-color-button: linear-gradient(
    to right,
    #02bc7d,
    rgb(51, 139, 147)
  );
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
  --font-color: black;
  --background-color-body: white;
  --background-color-container: rgb(235, 233, 230);
  --background-color-hover: #f4f4f5;
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

.filter-btn.active {
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

.aside-container > footer {
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
  font-family: 'Architects Daughter', cursive;
  font-size: 1.1rem;
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

.form-task {
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
  font-family: 'Architects Daughter';
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

.pagination {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}

.page-btn {
  border: none;
  border-radius: var(--border-radius-button);
  padding: var(--padding-button-page);
  background: var(--background-color-button);
  color: var(--font-color);
  font-family: 'Comfortaa', cursive;
}

.page-btn:hover {
  transform: scale(1.08);
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
.page-btn:active,
.favourite-btn:active,
.bin-btn:active,
input[type='date']::-webkit-calendar-picker-indicator:active,
.submit-btn:active,
.cancel-btn:active,
.edit-btn:active {
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
button {
  transition: all 0.3s ease-in-out;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');\n@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Comfortaa:wght@700&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  box-sizing: border-box;\n  /* Default Font */\n  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n:root {\n  --padding-body: 30px 50px;\n  --padding-container: 20px;\n  --border-radius: 20px;\n  --margin-bottom-head: 20px;\n  --padding-button: 10px 0 10px 13px;\n  --border-radius-button: 8px;\n  --background-color-button: linear-gradient(\n    to right,\n    #02bc7d,\n    rgb(51, 139, 147)\n  );\n  --padding-button-page: 7px 10px;\n  --padding-task-item: 10px 20px;\n  --margin-bottom-task-item: 10px;\n  --color-add-button: #02bc7d;\n  --star-dark: rgb(154, 150, 150);\n  --star-light: rgb(249, 202, 60);\n  --bin-delete: rgb(220, 80, 52);\n  --pencil-edit: rgb(103, 220, 249);\n}\n\n:root.light {\n  --font-color: black;\n  --background-color-body: white;\n  --background-color-container: rgb(235, 233, 230);\n  --background-color-hover: #f4f4f5;\n  --background-color-task-item: #334155;\n}\n\n:root.dark {\n  --font-color: white;\n  --background-color-body: #111827;\n  --background-color-container: #1e293b;\n  --background-color-hover: #334155;\n  --background-color-task-item: #334155;\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background-color-body);\n  padding: var(--padding-body);\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    'header header'\n    'aside main';\n  gap: 30px;\n}\n\ninput[type='checkbox']#check-task,\ninput[type='text'],\ninput[type='date'],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.header-container {\n  grid-area: header;\n}\n\n.first-o {\n  color: var(--bin-delete);\n}\n\n.second-o {\n  color: var(--color-add-button);\n}\n\n.header-container,\n.logo-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.logo-container {\n  gap: 5px;\n}\n\n.logo-symbol {\n  position: relative;\n  top: 7px;\n  width: 50px;\n}\n\n.logo-name {\n  font-size: 2.8rem;\n}\n\n.toggle-switch {\n  position: relative;\n  top: -25px;\n  width: 60px;\n}\n\n.mode-label {\n  position: absolute;\n  width: 100%;\n  height: 30px;\n  background-color: var(--background-color-container);\n  border-radius: 50px;\n  cursor: pointer;\n}\n\n#mode {\n  position: absolute;\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50px;\n  transition: all 0.3s;\n}\n\n#mode:checked ~ .slider {\n  background-color: var(--color-add-button);\n}\n\n.slider::before {\n  content: '';\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  box-shadow: inset 12px -1px 0px 0px var(--color-add-button);\n  background-color: var(--background-color-container);\n  transition: all 0.3s;\n}\n\n#mode:checked ~ .slider::before {\n  transform: translateX(100%);\n  box-shadow: none;\n}\n\n.aside-container {\n  grid-area: aside;\n  min-height: 480px;\n  width: max(180px, 20vw);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  color: var(--color-add-button);\n}\n\n.filter-btn.active {\n  font-weight: bold;\n  background-color: var(--background-color-hover);\n}\n\n.filter-btn,\n.project-folder-btn {\n  width: 100%;\n  padding: var(--padding-button);\n  text-align: left;\n  display: flex;\n  gap: 20px;\n  border: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  border-radius: var(--border-radius-button);\n}\n\n.filter-lists,\n.project-folder-lists {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.form-project {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, auto);\n  grid-template-areas:\n    'project project'\n    'submit cancel';\n  gap: 5px;\n}\n\ninput[type='text'] {\n  grid-area: project;\n  border-radius: var(--border-radius-button);\n  padding: 5px;\n  background-color: transparent;\n  border: 1px solid grey;\n  font-family: inherit;\n  color: inherit;\n}\n\n.aside-container > footer {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\nfooter > a > i {\n  font-size: 2rem;\n  color: var(--font-color);\n}\n\nfooter > a > i:hover {\n  color: var(--color-add-button);\n}\n\nfooter > p {\n  font-size: 0.8rem;\n}\n\n.main-container {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n}\n\n.task-box-1,\n.task-box-2 {\n  display: flex;\n  align-items: center;\n}\n\n.task-box-1 {\n  gap: 18px;\n}\n\n.task-box-2 {\n  gap: 13px;\n  margin-left: auto;\n}\n\n.task__item {\n  padding: var(--padding-task-item);\n  border-radius: var(--border-radius-button);\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex-wrap: wrap;\n  margin-bottom: var(--margin-bottom-task-item);\n}\n\n.para {\n  font-family: 'Architects Daughter', cursive;\n  font-size: 1.1rem;\n}\n\n.date {\n  font-size: 0.9rem;\n}\n\ninput[type='checkbox']#check-task {\n  border: 2px solid var(--font-color);\n  background-color: transparent;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 1em;\n  height: 1em;\n  transform: scale(0);\n  transition: all 0.3s ease-in-out;\n  box-shadow: inset 1em 1em var(--color-add-button);\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n}\n\n.favourite-btn,\n.bin-btn,\n.edit-btn {\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  color: var(--star-dark);\n}\n\n.favourite-btn:hover {\n  color: var(--star-light);\n  transform: scale(1.2);\n}\n\n.favourite {\n  color: var(--star-light);\n}\n\n.bin-btn:hover {\n  color: var(--bin-delete);\n  transform: scale(1.2);\n}\n\n.edit-btn:hover {\n  color: var(--pencil-edit);\n  transform: scale(1.2);\n}\n\n.form-task {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, auto);\n  grid-template-areas:\n    'task task task task'\n    'date . submit cancel';\n  gap: 8px;\n}\n\ntextarea {\n  grid-area: task;\n  resize: none;\n  width: 98%;\n  height: 50px;\n  padding: 5px;\n  border-radius: var(--border-radius-button);\n  font-family: 'Architects Daughter';\n  font-size: inherit;\n  background-color: transparent;\n  color: var(--font-color);\n}\n\ntextarea:focus,\ninput[type='text']:focus {\n  outline: 1px solid var(--color-add-button);\n}\n\ntextarea:focus::placeholder,\ninput[type='text']:focus::placeholder {\n  color: var(--color-add-button);\n}\n\n.form-date {\n  grid-area: date;\n}\n\ninput[type='date'] {\n  border: none;\n  padding: 2px;\n  width: 115px;\n  background-color: transparent;\n  color: var(--color-add-button);\n  font-family: inherit;\n  font-size: 0.9rem;\n}\n\ninput[type='date']::-webkit-calendar-picker-indicator {\n  background-color: var(--color-add-button);\n  cursor: pointer;\n  border-radius: 20%;\n}\n\ninput[type='date']::-webkit-calendar-picker-indicator:hover {\n  transform: scale(1.2);\n}\n\ninput[type='date']:focus {\n  outline: none;\n}\n\n.submit-btn {\n  grid-area: submit;\n  background-color: var(--color-add-button);\n}\n\n.cancel-btn {\n  grid-area: cancel;\n  background-color: var(--bin-delete);\n}\n\n.submit-btn,\n.cancel-btn {\n  padding: 5px 10px;\n  border: none;\n  color: var(--font-color);\n  border-radius: var(--border-radius-button);\n  font-size: 0.8rem;\n}\n\n.submit-btn:hover,\n.cancel-btn:hover {\n  transform: scale(1.05);\n}\n\n.pagination {\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page-btn {\n  border: none;\n  border-radius: var(--border-radius-button);\n  padding: var(--padding-button-page);\n  background: var(--background-color-button);\n  color: var(--font-color);\n  font-family: 'Comfortaa', cursive;\n}\n\n.page-btn:hover {\n  transform: scale(1.08);\n}\n\nh1,\nh2 {\n  font-family: 'Comfortaa', cursive;\n  margin-bottom: var(--margin-bottom-head);\n}\n\n.aside-container,\n.main-container {\n  padding: var(--padding-container);\n  border-radius: var(--border-radius);\n  background-color: var(--background-color-container);\n}\n\n.add-btn {\n  border: none;\n  background-color: transparent;\n  font-size: inherit;\n  font-weight: bold;\n  color: inherit;\n  outline: inherit;\n  padding: var(--padding-button);\n}\n\n.add-btn:hover {\n  color: var(--color-add-button);\n  transform: scale(1.08);\n}\n\ni {\n  font-size: 1.08rem;\n}\n\n.add-btn:active,\n.page-btn:active,\n.favourite-btn:active,\n.bin-btn:active,\ninput[type='date']::-webkit-calendar-picker-indicator:active,\n.submit-btn:active,\n.cancel-btn:active,\n.edit-btn:active {\n  transform: scale(1);\n}\n\n.filter-btn:hover,\n.project-folder-btn:hover,\n.task__item:hover {\n  background-color: var(--background-color-hover);\n  color: var(--color-add-button);\n}\n\n.task__item,\nfooter > a > i,\ninput[type='date']::-webkit-calendar-picker-indicator,\nbutton {\n  transition: all 0.3s ease-in-out;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



// addTaskView
var addTaskBtn = document.querySelector('.add-btn--task');
var form = document.querySelector('.form-task');
var controlForm = function controlForm(e) {
  e.preventDefault();
  var dataArr = _toConsumableArray(new FormData(this));
  console.log(dataArr);
  var data = Object.fromEntries(dataArr);
  console.log(data);
};
addTaskBtn.addEventListener('click', function () {
  this.classList.toggle('hide');
  form.classList.toggle('hide');
});
form.addEventListener('submit', controlForm);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlNjI1NDE3ODkwYTUyMDUwMDBjM2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvSUFBb0k7QUFDcEksMkpBQTJKO0FBQzNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLE1BQU0scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sUUFBUSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFV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Q0MsV0FBVyxDQUFDUCxPQUFPLENBQUM7RUFDeENHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUM7QUFDbkIsQ0FBQztBQUVEWixVQUFVLENBQUNlLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQy9DLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzdCZCxJQUFJLENBQUNhLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMvQixDQUFDLENBQUM7QUFFRmQsSUFBSSxDQUFDWSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVYLFdBQVcsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS4xMC41L2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBEZWZhdWx0IEZvbnQgKi9cbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLFxuICAgICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuOnJvb3Qge1xuICAtLXBhZGRpbmctYm9keTogMzBweCA1MHB4O1xuICAtLXBhZGRpbmctY29udGFpbmVyOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tbWFyZ2luLWJvdHRvbS1oZWFkOiAyMHB4O1xuICAtLXBhZGRpbmctYnV0dG9uOiAxMHB4IDAgMTBweCAxM3B4O1xuICAtLWJvcmRlci1yYWRpdXMtYnV0dG9uOiA4cHg7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1idXR0b246IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMDJiYzdkLFxuICAgIHJnYig1MSwgMTM5LCAxNDcpXG4gICk7XG4gIC0tcGFkZGluZy1idXR0b24tcGFnZTogN3B4IDEwcHg7XG4gIC0tcGFkZGluZy10YXNrLWl0ZW06IDEwcHggMjBweDtcbiAgLS1tYXJnaW4tYm90dG9tLXRhc2staXRlbTogMTBweDtcbiAgLS1jb2xvci1hZGQtYnV0dG9uOiAjMDJiYzdkO1xuICAtLXN0YXItZGFyazogcmdiKDE1NCwgMTUwLCAxNTApO1xuICAtLXN0YXItbGlnaHQ6IHJnYigyNDksIDIwMiwgNjApO1xuICAtLWJpbi1kZWxldGU6IHJnYigyMjAsIDgwLCA1Mik7XG4gIC0tcGVuY2lsLWVkaXQ6IHJnYigxMDMsIDIyMCwgMjQ5KTtcbn1cblxuOnJvb3QubGlnaHQge1xuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQtY29sb3ItYm9keTogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXI6IHJnYigyMzUsIDIzMywgMjMwKTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjZjRmNGY1O1xuICAtLWJhY2tncm91bmQtY29sb3ItdGFzay1pdGVtOiAjMzM0MTU1O1xufVxuXG46cm9vdC5kYXJrIHtcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWJvZHk6ICMxMTE4Mjc7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXI6ICMxZTI5M2I7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogIzMzNDE1NTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRhc2staXRlbTogIzMzNDE1NTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1ib2R5KTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1ib2R5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnaGVhZGVyIGhlYWRlcidcbiAgICAnYXNpZGUgbWFpbic7XG4gIGdhcDogMzBweDtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSNjaGVjay10YXNrLFxuaW5wdXRbdHlwZT0ndGV4dCddLFxuaW5wdXRbdHlwZT0nZGF0ZSddLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuLmZpcnN0LW8ge1xuICBjb2xvcjogdmFyKC0tYmluLWRlbGV0ZSk7XG59XG5cbi5zZWNvbmQtbyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbn1cblxuLmhlYWRlci1jb250YWluZXIsXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZ2FwOiA1cHg7XG59XG5cbi5sb2dvLXN5bWJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubG9nby1uYW1lIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG59XG5cbi50b2dnbGUtc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yNXB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuLm1vZGUtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbW9kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNtb2RlOmNoZWNrZWQgfiAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbi5zbGlkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTJweCAtMXB4IDBweCAwcHggdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNtb2RlOmNoZWNrZWQgfiAuc2xpZGVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hc2lkZS1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGFzaWRlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgd2lkdGg6IG1heCgxODBweCwgMjB2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA0MHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbi5maWx0ZXItYnRuLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbn1cblxuLmZpbHRlci1idG4sXG4ucHJvamVjdC1mb2xkZXItYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWJ1dHRvbik7XG59XG5cbi5maWx0ZXItbGlzdHMsXG4ucHJvamVjdC1mb2xkZXItbGlzdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cblxuLmZvcm0tcHJvamVjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdwcm9qZWN0IHByb2plY3QnXG4gICAgJ3N1Ym1pdCBjYW5jZWwnO1xuICBnYXA6IDVweDtcbn1cblxuaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWJ1dHRvbik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmFzaWRlLWNvbnRhaW5lciA+IGZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuZm9vdGVyID4gYSA+IGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuZm9vdGVyID4gYSA+IGk6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG59XG5cbmZvb3RlciA+IHAge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFzay1ib3gtMSxcbi50YXNrLWJveC0yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stYm94LTEge1xuICBnYXA6IDE4cHg7XG59XG5cbi50YXNrLWJveC0yIHtcbiAgZ2FwOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRhc2tfX2l0ZW0ge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRhc2staXRlbSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtYnV0dG9uKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20tdGFzay1pdGVtKTtcbn1cblxuLnBhcmEge1xuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSNjaGVjay10YXNrIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmZhdm91cml0ZS1idG4sXG4uYmluLWJ0bixcbi5lZGl0LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1zdGFyLWRhcmspO1xufVxuXG4uZmF2b3VyaXRlLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zdGFyLWxpZ2h0KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uZmF2b3VyaXRlIHtcbiAgY29sb3I6IHZhcigtLXN0YXItbGlnaHQpO1xufVxuXG4uYmluLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1iaW4tZGVsZXRlKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uZWRpdC1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcGVuY2lsLWVkaXQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5mb3JtLXRhc2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAndGFzayB0YXNrIHRhc2sgdGFzaydcbiAgICAnZGF0ZSAuIHN1Ym1pdCBjYW5jZWwnO1xuICBnYXA6IDhweDtcbn1cblxudGV4dGFyZWEge1xuICBncmlkLWFyZWE6IHRhc2s7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtYnV0dG9uKTtcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbn1cblxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbn1cblxuLmZvcm0tZGF0ZSB7XG4gIGdyaWQtYXJlYTogZGF0ZTtcbn1cblxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbmlucHV0W3R5cGU9J2RhdGUnXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIGdyaWQtYXJlYTogY2FuY2VsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaW4tZGVsZXRlKTtcbn1cblxuLnN1Ym1pdC1idG4sXG4uY2FuY2VsLWJ0biB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnN1Ym1pdC1idG46aG92ZXIsXG4uY2FuY2VsLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtYnV0dG9uKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1idXR0b24tcGFnZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYnV0dG9uKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG59XG5cbi5wYWdlLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG5cbmgxLFxuaDIge1xuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20taGVhZCk7XG59XG5cbi5hc2lkZS1jb250YWluZXIsXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWNvbnRhaW5lcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWNvbnRhaW5lcik7XG59XG5cbi5hZGQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG91dGxpbmU6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcbn1cblxuLmFkZC1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG5cbmkge1xuICBmb250LXNpemU6IDEuMDhyZW07XG59XG5cbi5hZGQtYnRuOmFjdGl2ZSxcbi5wYWdlLWJ0bjphY3RpdmUsXG4uZmF2b3VyaXRlLWJ0bjphY3RpdmUsXG4uYmluLWJ0bjphY3RpdmUsXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjphY3RpdmUsXG4uc3VibWl0LWJ0bjphY3RpdmUsXG4uY2FuY2VsLWJ0bjphY3RpdmUsXG4uZWRpdC1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmZpbHRlci1idG46aG92ZXIsXG4ucHJvamVjdC1mb2xkZXItYnRuOmhvdmVyLFxuLnRhc2tfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xufVxuXG4udGFza19faXRlbSxcbmZvb3RlciA+IGEgPiBpLFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXG5idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztFQVdFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCOzREQUMwRDtBQUM1RDtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCOzs7O0dBSUM7RUFDRCwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLGlDQUFpQztF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O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsbUNBQW1DO0VBQ25DLDBDQUEwQztFQUMxQyx3QkFBd0I7RUFDeEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGlDQUFpQztFQUNqQyx3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7OztFQVFFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsK0NBQStDO0VBQy9DLDhCQUE4QjtBQUNoQzs7QUFFQTs7OztFQUlFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS4xMC41L2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBEZWZhdWx0IEZvbnQgKi9cXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZixcXG4gICAgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wYWRkaW5nLWJvZHk6IDMwcHggNTBweDtcXG4gIC0tcGFkZGluZy1jb250YWluZXI6IDIwcHg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAtLW1hcmdpbi1ib3R0b20taGVhZDogMjBweDtcXG4gIC0tcGFkZGluZy1idXR0b246IDEwcHggMCAxMHB4IDEzcHg7XFxuICAtLWJvcmRlci1yYWRpdXMtYnV0dG9uOiA4cHg7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYnV0dG9uOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICAjMDJiYzdkLFxcbiAgICByZ2IoNTEsIDEzOSwgMTQ3KVxcbiAgKTtcXG4gIC0tcGFkZGluZy1idXR0b24tcGFnZTogN3B4IDEwcHg7XFxuICAtLXBhZGRpbmctdGFzay1pdGVtOiAxMHB4IDIwcHg7XFxuICAtLW1hcmdpbi1ib3R0b20tdGFzay1pdGVtOiAxMHB4O1xcbiAgLS1jb2xvci1hZGQtYnV0dG9uOiAjMDJiYzdkO1xcbiAgLS1zdGFyLWRhcms6IHJnYigxNTQsIDE1MCwgMTUwKTtcXG4gIC0tc3Rhci1saWdodDogcmdiKDI0OSwgMjAyLCA2MCk7XFxuICAtLWJpbi1kZWxldGU6IHJnYigyMjAsIDgwLCA1Mik7XFxuICAtLXBlbmNpbC1lZGl0OiByZ2IoMTAzLCAyMjAsIDI0OSk7XFxufVxcblxcbjpyb290LmxpZ2h0IHtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYm9keTogd2hpdGU7XFxuICAtLWJhY2tncm91bmQtY29sb3ItY29udGFpbmVyOiByZ2IoMjM1LCAyMzMsIDIzMCk7XFxuICAtLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICNmNGY0ZjU7XFxuICAtLWJhY2tncm91bmQtY29sb3ItdGFzay1pdGVtOiAjMzM0MTU1O1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYm9keTogIzExMTgyNztcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXI6ICMxZTI5M2I7XFxuICAtLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICMzMzQxNTU7XFxuICAtLWJhY2tncm91bmQtY29sb3ItdGFzay1pdGVtOiAjMzM0MTU1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYm9keSk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJvZHkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdhc2lkZSBtYWluJztcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSNjaGVjay10YXNrLFxcbmlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdkYXRlJ10sXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5maXJzdC1vIHtcXG4gIGNvbG9yOiB2YXIoLS1iaW4tZGVsZXRlKTtcXG59XFxuXFxuLnNlY29uZC1vIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIsXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmxvZ28tc3ltYm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5sb2dvLW5hbWUge1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxufVxcblxcbi50b2dnbGUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTI1cHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLm1vZGUtbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWNvbnRhaW5lcik7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbW9kZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4jbW9kZTpjaGVja2VkIH4gLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDEycHggLTFweCAwcHggMHB4IHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbiNtb2RlOmNoZWNrZWQgfiAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmFzaWRlLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgbWluLWhlaWdodDogNDgwcHg7XFxuICB3aWR0aDogbWF4KDE4MHB4LCAyMHZ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuLmZpbHRlci1idG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5maWx0ZXItYnRuLFxcbi5wcm9qZWN0LWZvbGRlci1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJ1dHRvbik7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWJ1dHRvbik7XFxufVxcblxcbi5maWx0ZXItbGlzdHMsXFxuLnByb2plY3QtZm9sZGVyLWxpc3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdwcm9qZWN0IHByb2plY3QnXFxuICAgICdzdWJtaXQgY2FuY2VsJztcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFzaWRlLWNvbnRhaW5lciA+IGZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIgPiBhID4gaSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbmZvb3RlciA+IGEgPiBpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuZm9vdGVyID4gcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1ib3gtMSxcXG4udGFzay1ib3gtMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stYm94LTEge1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4udGFzay1ib3gtMiB7XFxuICBnYXA6IDEzcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2tfX2l0ZW0ge1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10YXNrLWl0ZW0pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tLXRhc2staXRlbSk7XFxufVxcblxcbi5wYXJhIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10jY2hlY2stdGFzayB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmZhdm91cml0ZS1idG4sXFxuLmJpbi1idG4sXFxuLmVkaXQtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1zdGFyLWRhcmspO1xcbn1cXG5cXG4uZmF2b3VyaXRlLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc3Rhci1saWdodCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mYXZvdXJpdGUge1xcbiAgY29sb3I6IHZhcigtLXN0YXItbGlnaHQpO1xcbn1cXG5cXG4uYmluLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmluLWRlbGV0ZSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5lZGl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcGVuY2lsLWVkaXQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uZm9ybS10YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAndGFzayB0YXNrIHRhc2sgdGFzaydcXG4gICAgJ2RhdGUgLiBzdWJtaXQgY2FuY2VsJztcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBncmlkLWFyZWE6IHRhc2s7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1idXR0b24pO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFkZC1idXR0b24pO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIsXFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxufVxcblxcbi5mb3JtLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdkYXRlJ106Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hZGQtYnV0dG9uKTtcXG59XFxuXFxuLmNhbmNlbC1idG4ge1xcbiAgZ3JpZC1hcmVhOiBjYW5jZWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaW4tZGVsZXRlKTtcXG59XFxuXFxuLnN1Ym1pdC1idG4sXFxuLmNhbmNlbC1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWJ1dHRvbik7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnN1Ym1pdC1idG46aG92ZXIsXFxuLmNhbmNlbC1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBhZ2luYXRpb24ge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wYWdlLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWJ1dHRvbik7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWJ1dHRvbi1wYWdlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYnV0dG9uKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG59XFxuXFxuLnBhZ2UtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20taGVhZCk7XFxufVxcblxcbi5hc2lkZS1jb250YWluZXIsXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctY29udGFpbmVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1jb250YWluZXIpO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1idXR0b24pO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xcbn1cXG5cXG5pIHtcXG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcXG59XFxuXFxuLmFkZC1idG46YWN0aXZlLFxcbi5wYWdlLWJ0bjphY3RpdmUsXFxuLmZhdm91cml0ZS1idG46YWN0aXZlLFxcbi5iaW4tYnRuOmFjdGl2ZSxcXG5pbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjphY3RpdmUsXFxuLnN1Ym1pdC1idG46YWN0aXZlLFxcbi5jYW5jZWwtYnRuOmFjdGl2ZSxcXG4uZWRpdC1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5maWx0ZXItYnRuOmhvdmVyLFxcbi5wcm9qZWN0LWZvbGRlci1idG46aG92ZXIsXFxuLnRhc2tfX2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWRkLWJ1dHRvbik7XFxufVxcblxcbi50YXNrX19pdGVtLFxcbmZvb3RlciA+IGEgPiBpLFxcbmlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxcbmJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNoZWNrTWFyayBmcm9tICcuLi9pbWcvY2hlY2ttYXJrLnBuZyc7XG5cbi8vIGFkZFRhc2tWaWV3XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tLXRhc2snKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS10YXNrJyk7XG5cbmNvbnN0IGNvbnRyb2xGb3JtID0gZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhQXJyID0gWy4uLm5ldyBGb3JtRGF0YSh0aGlzKV07XG4gIGNvbnNvbGUubG9nKGRhdGFBcnIpO1xuICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGFBcnIpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn07XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNvbnRyb2xGb3JtKTtcbiJdLCJuYW1lcyI6WyJjaGVja01hcmsiLCJhZGRUYXNrQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybSIsImNvbnRyb2xGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YUFyciIsIl90b0NvbnN1bWFibGVBcnJheSIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9