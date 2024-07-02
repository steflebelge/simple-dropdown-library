"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _SimpleDropdown = _interopRequireDefault(require("./SimpleDropdown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Assurez-vous que le chemin est correct

//set des params de tests
let listeAttributsSelect = {
  name: "Department",
  id: "Department",
  required: true,
  onchange: "alert('changed!');"
};
let listeOptions = {
  "Sales": "Sales",
  "Marketing": "Marketing",
  "Engineering": "Engineering",
  "Human": "Human Resources",
  "Legal": "Legal"
};
let defaultValue = "Human";
let listeAttributsSelectBis = {
  name: "DepartmentBis",
  id: "DepartmentBis",
  required: true,
  onchange: "alert('changed!');"
};
let listeOptionsBis = {
  "SalesBis": "SalesBis",
  "MarketingBis": "MarketingBis",
  "EngineeringBis": "EngineeringBis",
  "HumanBis": "Human ResourcesBis",
  "LegalBis": "LegalBis"
};
let defaultValueBis = "HumanBis";
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SimpleDropdown.default, {
  uniqueKey: "SimpleDropdown",
  listeAttributsSelect: listeAttributsSelect,
  listeOptions: listeOptions,
  defaultValue: defaultValue
}), /*#__PURE__*/_react.default.createElement(_SimpleDropdown.default, {
  uniqueKey: "SimpleDropdownBis",
  listeAttributsSelect: listeAttributsSelectBis,
  listeOptions: listeOptionsBis,
  defaultValue: defaultValueBis
})), document.getElementById('app'));