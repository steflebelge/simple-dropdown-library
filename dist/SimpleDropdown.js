"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./SimpleDropdown.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SimpleDropdown(_ref) {
  let {
    uniqueKey,
    listeAttributsSelect,
    listeOptions,
    defaultValue
  } = _ref;
  const [error, seterror] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    //verification params
    if (!listeAttributsSelect || !listeOptions || !defaultValue) return seterror('Parametre manquant');
    if (typeof listeAttributsSelect !== "object" || typeof listeOptions !== "object" || typeof defaultValue !== "string") return seterror('Mauvais type de parametre');
    if (!listeAttributsSelect['name'] || !listeOptions[defaultValue]) return seterror('Parametre invalide');

    //tri des options par ordre croissant
    const entries = Object.entries(listeOptions);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    listeOptions = Object.fromEntries(entries);

    //recuperation du bon element de selection
    let select = document.querySelector('select[uniqueKey="' + uniqueKey + '"]');

    //set des attributs du select
    Object.keys(listeAttributsSelect).forEach(function (keyTmp) {
      // if (!listeAttributsSelect[keyTmp])
      //     return seterror(`L'attribut ${keyTmp} du paramètre 'listeAttributsSelect' semble poser probleme.`);

      select.setAttribute(keyTmp, listeAttributsSelect[keyTmp]);
    });
    //set des options du select
    Object.keys(listeOptions).forEach(function (keyTmp) {
      if (!listeOptions[keyTmp]) return seterror("L'attribut ".concat(keyTmp, " du param\xE8tre 'listeOptions' semble poser probleme."));

      //Ajout si pas deja présent
      if (!select.querySelector("option[value=\"".concat(keyTmp, "\"]"))) {
        let newOption = "<option value=\"".concat(keyTmp, "\">").concat(listeOptions[keyTmp], "</option>");
        if (defaultValue === keyTmp) newOption = "<option selected=\"selected\" value=\"".concat(keyTmp, "\">").concat(listeOptions[keyTmp], "</option>");
        select.insertAdjacentHTML('beforeend', newOption);
      }
    });
  }, []);
  return error ? /*#__PURE__*/_react.default.createElement("p", null, error) : /*#__PURE__*/_react.default.createElement("select", {
    uniqueKey: uniqueKey
  });
}
var _default = exports.default = SimpleDropdown;