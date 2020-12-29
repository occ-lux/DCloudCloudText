(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************!*\
  !*** E:/XHB/uni-app/CloudText/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 48));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 51));\nvar _UshowToast = __webpack_require__(/*! static/js/UshowToast.js */ 53);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n_vue.default.prototype.$ShowToast = _UshowToast.UshowToast;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({\n  store: _store.default },\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJFNob3dUb2FzdCIsIlVzaG93VG9hc3QiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCJzdG9yZSIsIiRtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQW1CO0FBQ25CO0FBQ0E7QUFDQSx5RTs7QUFFQUEsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCO0FBQ0FGLGFBQUlHLFNBQUosQ0FBY0MsVUFBZCxHQUEyQkMsc0JBQTNCOztBQUVBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsSUFBSVIsWUFBSjtBQUNYUyxPQUFLLEVBQUxBLGNBRFc7QUFFTEgsWUFGSyxFQUFaOztBQUlBRSxHQUFHLENBQUNFLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCB7IFVzaG93VG9hc3QgfSBmcm9tICdzdGF0aWMvanMvVXNob3dUb2FzdC5qcydcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblZ1ZS5wcm90b3R5cGUuJFNob3dUb2FzdCA9IFVzaG93VG9hc3RcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0c3RvcmUsXHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages.json ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/login/login', function () {return Vue.extend(__webpack_require__(/*! pages/login/login.vue?mpType=page */ 2).default);});
__definePage('pages/login/register', function () {return Vue.extend(__webpack_require__(/*! pages/login/register.vue?mpType=page */ 22).default);});
__definePage('pages/editInformation/editInformation', function () {return Vue.extend(__webpack_require__(/*! pages/editInformation/editInformation.vue?mpType=page */ 27).default);});
__definePage('pages/tabbar/home/home', function () {return Vue.extend(__webpack_require__(/*! pages/tabbar/home/home.vue?mpType=page */ 33).default);});
__definePage('pages/tabbar/giftarea/giftarea', function () {return Vue.extend(__webpack_require__(/*! pages/tabbar/giftarea/giftarea.vue?mpType=page */ 38).default);});
__definePage('pages/tabbar/mine/mine', function () {return Vue.extend(__webpack_require__(/*! pages/tabbar/mine/mine.vue?mpType=page */ 43).default);});

/***/ }),
/* 2 */
/*!******************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/login/login.vue?mpType=page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page */ 3);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5b26a3ac\",\n  null,\n  false,\n  _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViMjZhM2FjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWIyNmEzYWNcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbG9naW4vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/login/login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/login/login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "logo_image"), attrs: { _i: 1 } },
        [
          _c("image", {
            staticClass: _vm._$s(2, "sc", "imagewhr"),
            attrs: {
              src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/logo.png */ 5)),
              _i: 2
            }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(3, "sc", "flex direction-column align-center"),
          attrs: { _i: 3 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(
                4,
                "sc",
                "flex direction-row align-center login_account"
              ),
              attrs: { _i: 4 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "login_account_image"),
                  attrs: { _i: 5 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(6, "sc", "imagewh"),
                    attrs: {
                      src: _vm._$s(
                        6,
                        "a-src",
                        __webpack_require__(/*! ../../static/image/login/account.png */ 6)
                      ),
                      _i: 6
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(7, "sc", "login_account_input"),
                  attrs: { _i: 7 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.login.account,
                        expression: "login.account"
                      }
                    ],
                    attrs: { _i: 8 },
                    domProps: {
                      value: _vm._$s(8, "v-model", _vm.login.account)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.login, "account", $event.target.value)
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(
                9,
                "sc",
                "flex direction-row align-center login_password"
              ),
              attrs: { _i: 9 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "login_password_image"),
                  attrs: { _i: 10 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(11, "sc", "imagewh"),
                    attrs: {
                      src: _vm._$s(
                        11,
                        "a-src",
                        __webpack_require__(/*! ../../static/image/login/password.png */ 7)
                      ),
                      _i: 11
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(12, "sc", "login_password_input"),
                  attrs: { _i: 12 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.login.password,
                        expression: "login.password"
                      }
                    ],
                    attrs: {
                      password: _vm._$s(13, "a-password", _vm.lookpassword),
                      _i: 13
                    },
                    domProps: {
                      value: _vm._$s(13, "v-model", _vm.login.password)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.login, "password", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(14, "sc", "login_password_look"),
                  attrs: { _i: 14 },
                  on: {
                    click: function($event) {
                      _vm.lookpassword = !_vm.lookpassword
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(15, "sc", "imagewh"),
                    attrs: {
                      src: _vm._$s(
                        15,
                        "a-src",
                        _vm.lookpassword
                          ? "../../static/image/login/unlookpassword.png"
                          : "../../static/image/login/lookpassword.png"
                      ),
                      _i: 15
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "flex direction-row-reverse"),
              attrs: { _i: 16 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(17, "sc", "register_btn"),
                  attrs: { _i: 17 },
                  on: { click: _vm.gotoregister }
                },
                [_c("text")]
              )
            ]
          ),
          _c("button", {
            staticClass: _vm._$s(19, "sc", "login_btn"),
            attrs: { _i: 19 },
            on: { click: _vm.gotologin }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!************************************************!*\
  !*** E:/XHB/uni-app/CloudText/static/logo.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9sb2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/static/image/login/account.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/image/login/account.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pbWFnZS9sb2dpbi9hY2NvdW50LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!****************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/static/image/login/password.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/image/login/password.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pbWFnZS9sb2dpbi9wYXNzd29yZC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVsQixDQUFnQixzbkJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _login = __webpack_require__(/*! ../../api/login.js */ 11); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { login: { account: '', password: '' }, lookpassword: true };}, onLoad: function onLoad(registerCallBack) {if (registerCallBack.account && registerCallBack.password) {this.login.account = registerCallBack.account;this.login.password = registerCallBack.password;}}, methods: { // login\n    gotologin: function gotologin() {var _this = this;if (this.login.account == '') {this.$ShowToast('请输入账号', 'none');return;} else if (this.login.password == '') {this.$ShowToast('请输入密码', 'none');return;}var data = { account: this.login.account, password: this.login.password };(0, _login.userLogin)(data).then(function (res) {__f__(\"log\", '登录 ==> ', res, \" at pages/login/login.vue:80\");uni.setStorage({ key: 'account', data: _this.login.account });uni.setStorage({ key: 'password', data: _this.login.password });uni.setStorage({ key: 'uid', data: res._id });uni.reLaunch({ url: '../tabbar/home/home' });\n      });\n    },\n    // register\n    gotoregister: function gotoregister() {\n      uni.navigateTo({\n        url: './register' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxTQUNBLFdBREEsRUFFQSxZQUZBLEVBREEsRUFLQSxrQkFMQSxHQU9BLENBVEEsRUFVQSxNQVZBLGtCQVVBLGdCQVZBLEVBVUEsQ0FDQSw0REFDQSw4Q0FDQSxnREFDQSxDQUNBLENBZkEsRUFnQkEsV0FDQTtBQUNBLGFBRkEsdUJBRUEsa0JBQ0EsK0JBQ0EsaUNBQ0EsT0FDQSxDQUhBLE1BR0EsZ0NBQ0EsaUNBQ0EsT0FDQSxDQUNBLGFBQ0EsMkJBREEsRUFFQSw2QkFGQSxHQUlBLGlEQUNBLDZEQUNBLGlCQUNBLGNBREEsRUFFQSx5QkFGQSxJQUlBLGlCQUNBLGVBREEsRUFFQSwwQkFGQSxJQUlBLGlCQUNBLFVBREEsRUFFQSxhQUZBLElBSUEsZUFDQSwwQkFEQTtBQUdBLE9BakJBO0FBa0JBLEtBaENBO0FBaUNBO0FBQ0EsZ0JBbENBLDBCQWtDQTtBQUNBO0FBQ0EseUJBREE7O0FBR0EsS0F0Q0EsRUFoQkEsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PCEtLSBsb2dvIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb2dvX2ltYWdlXCI+XHJcblx0XHRcdDxpbWFnZSBjbGFzcz1cImltYWdld2hyXCIgc3JjPVwiLi4vLi4vc3RhdGljL2xvZ28ucG5nXCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gaW5wdXQgYWNjb3VudCBwYXNzd29yZCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBkaXJlY3Rpb24tY29sdW1uIGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHQ8IS0tIGFjY291bnQgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBkaXJlY3Rpb24tcm93IGFsaWduLWNlbnRlciBsb2dpbl9hY2NvdW50XCI+XHJcblx0XHRcdFx0PCEtLSBhY2NvdW50IGljb24gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dpbl9hY2NvdW50X2ltYWdlXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWFnZXdoXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlL2xvZ2luL2FjY291bnQucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSBhY2NvdW50IGlucHV0IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9naW5fYWNjb3VudF9pbnB1dFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6LSm5Y+3XCIgY29uZmlybS10eXBlPVwibmV4dFwiIHYtbW9kZWw9XCJsb2dpbi5hY2NvdW50XCIgbWF4bGVuZ3RoPVwiMjBcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIHBhc3N3b3JkIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggZGlyZWN0aW9uLXJvdyBhbGlnbi1jZW50ZXIgbG9naW5fcGFzc3dvcmRcIj5cclxuXHRcdFx0XHQ8IS0tIHBhc3N3b3JkIGljb24gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dpbl9wYXNzd29yZF9pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2V3aFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9sb2dpbi9wYXNzd29yZC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIHBhc3N3b3JkIGlucHV0IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9naW5fcGFzc3dvcmRfaW5wdXRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWvhueggVwiIDpwYXNzd29yZD1cImxvb2twYXNzd29yZFwiIGNvbmZpcm0tdHlwZT1cIm5leHRcIiB2LW1vZGVsPVwibG9naW4ucGFzc3dvcmRcIiBtYXhsZW5ndGg9XCIyMFwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gTm8gZGlzcGxheSAmIGRpc3BsYXkgcGFzc3dvcmQgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dpbl9wYXNzd29yZF9sb29rXCIgQGNsaWNrPVwibG9va3Bhc3N3b3JkID0gIWxvb2twYXNzd29yZFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2V3aFwiIDpzcmM9XCJsb29rcGFzc3dvcmQgPyAnLi4vLi4vc3RhdGljL2ltYWdlL2xvZ2luL3VubG9va3Bhc3N3b3JkLnBuZycgOiAnLi4vLi4vc3RhdGljL2ltYWdlL2xvZ2luL2xvb2twYXNzd29yZC5wbmcnXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSByZWdpc3RlciAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGRpcmVjdGlvbi1yb3ctcmV2ZXJzZVwiIHN0eWxlPVwid2lkdGg6IDkwJTttYXJnaW46IDIwcnB4IDAgMTBycHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdpc3Rlcl9idG5cIiBAY2xpY2s9XCJnb3RvcmVnaXN0ZXJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuWJjeW+gOazqOWGjDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSBsb2dpbiAtLT5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImxvZ2luX2J0blwiIEBjbGljaz1cImdvdG9sb2dpblwiPueZu+W9lTwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHsgdXNlckxvZ2luIH0gZnJvbSAnLi4vLi4vYXBpL2xvZ2luLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bG9naW46e1xyXG5cdFx0XHRcdFx0YWNjb3VudDonJyxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiAnJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bG9va3Bhc3N3b3JkOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQocmVnaXN0ZXJDYWxsQmFjaykge1xyXG5cdFx0XHRpZiAocmVnaXN0ZXJDYWxsQmFjay5hY2NvdW50ICYmIHJlZ2lzdGVyQ2FsbEJhY2sucGFzc3dvcmQpIHtcclxuXHRcdFx0XHR0aGlzLmxvZ2luLmFjY291bnQgPSByZWdpc3RlckNhbGxCYWNrLmFjY291bnRcclxuXHRcdFx0XHR0aGlzLmxvZ2luLnBhc3N3b3JkID0gcmVnaXN0ZXJDYWxsQmFjay5wYXNzd29yZFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyBsb2dpblxyXG5cdFx0XHRnb3RvbG9naW4oKXtcclxuXHRcdFx0XHRpZiAodGhpcy5sb2dpbi5hY2NvdW50ID09ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRTaG93VG9hc3QoJ+ivt+i+k+WFpei0puWPtycsICdub25lJylcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1lbHNlIGlmICh0aGlzLmxvZ2luLnBhc3N3b3JkID09ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRTaG93VG9hc3QoJ+ivt+i+k+WFpeWvhueggScsICdub25lJylcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGFjY291bnQ6IHRoaXMubG9naW4uYWNjb3VudCxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiB0aGlzLmxvZ2luLnBhc3N3b3JkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVzZXJMb2dpbihkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn55m75b2VID09PiAnLCByZXMpO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0XHRrZXk6J2FjY291bnQnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOnRoaXMubG9naW4uYWNjb3VudCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRcdGtleToncGFzc3dvcmQnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOnRoaXMubG9naW4ucGFzc3dvcmQsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0XHRrZXk6ICd1aWQnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiByZXMuX2lkXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vdGFiYmFyL2hvbWUvaG9tZScsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyByZWdpc3RlclxyXG5cdFx0XHRnb3RvcmVnaXN0ZXIoKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuL3JlZ2lzdGVyJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNvbnRlbnR7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdH1cclxuXHQvKiBsb2dvICovXHJcblx0LmxvZ29faW1hZ2V7XHJcblx0XHR3aWR0aDogMTAwcnB4O2hlaWdodDogMTAwcnB4O2JvcmRlci1yYWRpdXM6IDEwMCU7bWFyZ2luOiAxMDBycHggYXV0bztcclxuXHR9XHJcblx0LyogbG9naW4gYWNjb3VudCAqL1xyXG5cdC5sb2dpbl9hY2NvdW50e1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjk2ZGI7cGFkZGluZzogMCAxMHJweCAxMHJweCAxMHJweDtcclxuXHR9XHJcblx0LmxvZ2luX2FjY291bnRfaW1hZ2V7XHJcblx0XHR3aWR0aDogNTBycHg7aGVpZ2h0OiA1NXJweDtcclxuXHR9XHJcblx0LmxvZ2luX2FjY291bnRfaW5wdXR7XHJcblx0XHR3aWR0aDogNTUwcnB4O21hcmdpbjogMCAwIDAgMjBycHg7XHJcblx0fVxyXG5cdC8qIGxvZ2luIHBhc3N3b3JkICovXHJcblx0LmxvZ2luX3Bhc3N3b3Jke1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjk2ZGI7cGFkZGluZzogMCAwIDEwcnB4IDA7cGFkZGluZzogMzBycHggMTBycHggMTBycHggMTBycHg7XHJcblx0fVxyXG5cdC5sb2dpbl9wYXNzd29yZF9pbWFnZXtcclxuXHRcdHdpZHRoOiA1MHJweDtoZWlnaHQ6IDU1cnB4O1xyXG5cdH1cclxuXHQubG9naW5fcGFzc3dvcmRfaW5wdXR7XHJcblx0XHR3aWR0aDogNTAwcnB4O21hcmdpbjogMCAwIDAgMjBycHg7XHJcblx0fVxyXG5cdC5sb2dpbl9wYXNzd29yZF9sb29re1xyXG5cdFx0d2lkdGg6IDUwcnB4O2hlaWdodDogNTVycHg7XHJcblx0fVxyXG5cdC8qIHJlZ2lzdGVyICovXHJcblx0LnJlZ2lzdGVyX2J0bntcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdC8qIGxvZ2luYnRuICovXHJcblx0LmxvZ2luX2J0bntcclxuXHRcdHdpZHRoOiA4MCU7YmFja2dyb3VuZC1jb2xvcjogIzEyOTZkYjtjb2xvcjogI0ZGRkZGRjttYXJnaW46IDUwcnB4IDA7aGVpZ2h0OiA3MHJweDtsaW5lLWhlaWdodDogNzBycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 11 */
/*!*********************************************!*\
  !*** E:/XHB/uni-app/CloudText/api/login.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.userLogin = userLogin;exports.register = register;var _request = _interopRequireDefault(__webpack_require__(/*! ../request/request.js */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n// login\nfunction userLogin(data) {\n  return _request.default.gotocloud('userLogin', data);\n}\n\n// register\nfunction register(data) {\n  return _request.default.gotocloud('addUser', data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2xvZ2luLmpzIl0sIm5hbWVzIjpbInVzZXJMb2dpbiIsImRhdGEiLCJyZXF1ZXN0IiwiZ290b2Nsb3VkIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiJ3SEFBQSw0Rjs7QUFFQTtBQUNPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQzVCLFNBQU9DLGlCQUFRQyxTQUFSLENBQWtCLFdBQWxCLEVBQStCRixJQUEvQixDQUFQO0FBQ0g7O0FBRUQ7QUFDTyxTQUFTRyxRQUFULENBQWtCSCxJQUFsQixFQUF3QjtBQUMzQixTQUFPQyxpQkFBUUMsU0FBUixDQUFrQixTQUFsQixFQUE2QkYsSUFBN0IsQ0FBUDtBQUNIIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vcmVxdWVzdC9yZXF1ZXN0LmpzJ1xyXG5cclxuLy8gbG9naW5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJMb2dpbihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdC5nb3RvY2xvdWQoJ3VzZXJMb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG4vLyByZWdpc3RlclxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QuZ290b2Nsb3VkKCdhZGRVc2VyJywgZGF0YSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***************************************************!*\
  !*** E:/XHB/uni-app/CloudText/request/request.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = {\n  // 全局配置\n  common: {\n    data: {} },\n\n  // 请求 返回promise\n  request: function request() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // 组织参数\n    options.name = options.name;\n    options.data = options.data || this.common.data;\n    // 请求\n    return new Promise(function (res, rej) {\n      // 请求之前... todo\n      // 请求中...\n      uniCloud.callFunction(_objectSpread({},\n      options)).\n      then(function (result) {\n        if (result.result.code === 0) {\n          return res(result.result.data);\n        } else if (result.result.code === 1) {\n          uni.showToast({\n            title: result.result.message,\n            icon: 'none' });\n\n          __f__(\"log\", 'code不为0 =>', result, \" at request/request.js:25\");\n        }\n      }).catch(function (error) {\n        __f__(\"log\", error, \" at request/request.js:28\");\n        uni.showToast({\n          title: '网络连接失败',\n          icon: 'none' });\n\n        return rej();\n      });\n    }).catch(function (e) {});\n  },\n  gotocloud: function gotocloud(name) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.name = name;\n    options.data = data;\n    return this.request(options);\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 13)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcmVxdWVzdC9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbImNvbW1vbiIsImRhdGEiLCJyZXF1ZXN0Iiwib3B0aW9ucyIsIm5hbWUiLCJQcm9taXNlIiwicmVzIiwicmVqIiwidW5pQ2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJ0aGVuIiwicmVzdWx0IiwiY29kZSIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwibWVzc2FnZSIsImljb24iLCJjYXRjaCIsImVycm9yIiwiZSIsImdvdG9jbG91ZCJdLCJtYXBwaW5ncyI6IndyQ0FBZTtBQUNkO0FBQ0FBLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUUsRUFEQyxFQUZNOztBQUtkO0FBQ0FDLFNBTmMscUJBTVEsS0FBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ3JCO0FBQ0FBLFdBQU8sQ0FBQ0MsSUFBUixHQUFlRCxPQUFPLENBQUNDLElBQXZCO0FBQ0FELFdBQU8sQ0FBQ0YsSUFBUixHQUFlRSxPQUFPLENBQUNGLElBQVIsSUFBZ0IsS0FBS0QsTUFBTCxDQUFZQyxJQUEzQztBQUNBO0FBQ0EsV0FBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDaEM7QUFDQTtBQUNBQyxjQUFRLENBQUNDLFlBQVQ7QUFDSU4sYUFESjtBQUVHTyxVQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ25CLFlBQUlBLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjQyxJQUFkLEtBQXVCLENBQTNCLEVBQThCO0FBQzdCLGlCQUFPTixHQUFHLENBQUNLLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjVixJQUFmLENBQVY7QUFDQSxTQUZELE1BRU0sSUFBSVUsTUFBTSxDQUFDQSxNQUFQLENBQWNDLElBQWQsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDbkNDLGFBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ2JDLGlCQUFLLEVBQUVKLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjSyxPQURSO0FBRWJDLGdCQUFJLEVBQUUsTUFGTyxFQUFkOztBQUlBLHVCQUFZLFlBQVosRUFBMEJOLE1BQTFCO0FBQ0E7QUFDRCxPQVpELEVBWUdPLEtBWkgsQ0FZUyxVQUFDQyxLQUFELEVBQVc7QUFDbkIscUJBQVlBLEtBQVo7QUFDQU4sV0FBRyxDQUFDQyxTQUFKLENBQWM7QUFDYkMsZUFBSyxFQUFFLFFBRE07QUFFYkUsY0FBSSxFQUFFLE1BRk8sRUFBZDs7QUFJQSxlQUFPVixHQUFHLEVBQVY7QUFDQSxPQW5CRDtBQW9CQSxLQXZCTSxFQXVCSlcsS0F2QkksQ0F1QkUsVUFBQ0UsQ0FBRCxFQUFPLENBQUUsQ0F2QlgsQ0FBUDtBQXdCQSxHQW5DYTtBQW9DZEMsV0FwQ2MscUJBb0NKakIsSUFwQ0ksRUFvQzJCLEtBQXpCSCxJQUF5Qix1RUFBbEIsRUFBa0IsS0FBZEUsT0FBYyx1RUFBSixFQUFJO0FBQ3hDQSxXQUFPLENBQUNDLElBQVIsR0FBZUEsSUFBZjtBQUNBRCxXQUFPLENBQUNGLElBQVIsR0FBZUEsSUFBZjtBQUNBLFdBQU8sS0FBS0MsT0FBTCxDQUFhQyxPQUFiLENBQVA7QUFDQSxHQXhDYSxFIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG5cdC8vIOWFqOWxgOmFjee9rlxyXG5cdGNvbW1vbjoge1xyXG5cdFx0ZGF0YToge31cclxuXHR9LFxyXG5cdC8vIOivt+axgiDov5Tlm55wcm9taXNlXHJcblx0cmVxdWVzdChvcHRpb25zID0ge30pIHtcclxuXHRcdC8vIOe7hOe7h+WPguaVsFxyXG5cdFx0b3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lXHJcblx0XHRvcHRpb25zLmRhdGEgPSBvcHRpb25zLmRhdGEgfHwgdGhpcy5jb21tb24uZGF0YVxyXG5cdFx0Ly8g6K+35rGCXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcblx0XHRcdC8vIOivt+axguS5i+WJjS4uLiB0b2RvXHJcblx0XHRcdC8vIOivt+axguS4rS4uLlxyXG5cdFx0XHR1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdC4uLm9wdGlvbnNcclxuXHRcdFx0fSkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3VsdC5yZXN1bHQuY29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcyhyZXN1bHQucmVzdWx0LmRhdGEpO1xyXG5cdFx0XHRcdH1lbHNlIGlmIChyZXN1bHQucmVzdWx0LmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LnJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NvZGXkuI3kuLowID0+JywgcmVzdWx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSlJyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiByZWooKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSkuY2F0Y2goKGUpID0+IHt9KTtcclxuXHR9LFxyXG5cdGdvdG9jbG91ZChuYW1lLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0b3B0aW9ucy5uYW1lID0gbmFtZVxyXG5cdFx0b3B0aW9ucy5kYXRhID0gZGF0YVxyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKVxyXG5cdH0sXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var r = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),r = {},o = r.lib = {},s = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = s.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,r = this.sigBytes,o = e.sigBytes;if (this.clamp(), r % 4) for (var s = 0; s < o; s++) {var i = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;t[r + s >>> 2] |= i << 24 - (r + s) % 4 * 8;} else for (s = 0; s < o; s += 4) {t[r + s >>> 2] = n[s >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = s.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, r = [], o = function o(t) {t = t;var n = 987654321,r = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, s = 0; s < t; s += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), r.push(4294967296 * a() | 0);}return new i.init(r, t);} }),a = r.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r += 2) {n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push(String.fromCharCode(s));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r++) {n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },h = o.BufferedBlockAlgorithm = s.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,r = n.words,o = n.sigBytes,s = this.blockSize,a = o / (4 * s),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += s) {this._doProcessBlock(r, l);}var h = r.splice(0, c);n.sigBytes -= u;}return new i.init(h, u);}, clone: function clone() {var e = s.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),f = (o.Hasher = h.extend({ cfg: s.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {h.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new f.HMAC.init(e, n).finalize(t);};} }), r.algo = {});return r;}(Math), n);}),o = (n(function (e, t) {var n;e.exports = (n = r, function (e) {var t = n,r = t.lib,o = r.WordArray,s = r.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = s.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var r = t + n,o = e[r];e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var s = this._hash.words,i = e[t + 0],c = e[t + 1],p = e[t + 2],d = e[t + 3],y = e[t + 4],g = e[t + 5],_ = e[t + 6],v = e[t + 7],m = e[t + 8],b = e[t + 9],w = e[t + 10],T = e[t + 11],E = e[t + 12],S = e[t + 13],O = e[t + 14],k = e[t + 15],A = s[0],P = s[1],I = s[2],N = s[3];A = u(A, P, I, N, i, 7, a[0]), N = u(N, A, P, I, c, 12, a[1]), I = u(I, N, A, P, p, 17, a[2]), P = u(P, I, N, A, d, 22, a[3]), A = u(A, P, I, N, y, 7, a[4]), N = u(N, A, P, I, g, 12, a[5]), I = u(I, N, A, P, _, 17, a[6]), P = u(P, I, N, A, v, 22, a[7]), A = u(A, P, I, N, m, 7, a[8]), N = u(N, A, P, I, b, 12, a[9]), I = u(I, N, A, P, w, 17, a[10]), P = u(P, I, N, A, T, 22, a[11]), A = u(A, P, I, N, E, 7, a[12]), N = u(N, A, P, I, S, 12, a[13]), I = u(I, N, A, P, O, 17, a[14]), A = l(A, P = u(P, I, N, A, k, 22, a[15]), I, N, c, 5, a[16]), N = l(N, A, P, I, _, 9, a[17]), I = l(I, N, A, P, T, 14, a[18]), P = l(P, I, N, A, i, 20, a[19]), A = l(A, P, I, N, g, 5, a[20]), N = l(N, A, P, I, w, 9, a[21]), I = l(I, N, A, P, k, 14, a[22]), P = l(P, I, N, A, y, 20, a[23]), A = l(A, P, I, N, b, 5, a[24]), N = l(N, A, P, I, O, 9, a[25]), I = l(I, N, A, P, d, 14, a[26]), P = l(P, I, N, A, m, 20, a[27]), A = l(A, P, I, N, S, 5, a[28]), N = l(N, A, P, I, p, 9, a[29]), I = l(I, N, A, P, v, 14, a[30]), A = h(A, P = l(P, I, N, A, E, 20, a[31]), I, N, g, 4, a[32]), N = h(N, A, P, I, m, 11, a[33]), I = h(I, N, A, P, T, 16, a[34]), P = h(P, I, N, A, O, 23, a[35]), A = h(A, P, I, N, c, 4, a[36]), N = h(N, A, P, I, y, 11, a[37]), I = h(I, N, A, P, v, 16, a[38]), P = h(P, I, N, A, w, 23, a[39]), A = h(A, P, I, N, S, 4, a[40]), N = h(N, A, P, I, i, 11, a[41]), I = h(I, N, A, P, d, 16, a[42]), P = h(P, I, N, A, _, 23, a[43]), A = h(A, P, I, N, b, 4, a[44]), N = h(N, A, P, I, E, 11, a[45]), I = h(I, N, A, P, k, 16, a[46]), A = f(A, P = h(P, I, N, A, p, 23, a[47]), I, N, i, 6, a[48]), N = f(N, A, P, I, v, 10, a[49]), I = f(I, N, A, P, O, 15, a[50]), P = f(P, I, N, A, g, 21, a[51]), A = f(A, P, I, N, E, 6, a[52]), N = f(N, A, P, I, d, 10, a[53]), I = f(I, N, A, P, w, 15, a[54]), P = f(P, I, N, A, c, 21, a[55]), A = f(A, P, I, N, m, 6, a[56]), N = f(N, A, P, I, k, 10, a[57]), I = f(I, N, A, P, _, 15, a[58]), P = f(P, I, N, A, S, 21, a[59]), A = f(A, P, I, N, y, 6, a[60]), N = f(N, A, P, I, T, 10, a[61]), I = f(I, N, A, P, p, 15, a[62]), P = f(P, I, N, A, b, 21, a[63]), s[0] = s[0] + A | 0, s[1] = s[1] + P | 0, s[2] = s[2] + I | 0, s[3] = s[3] + N | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,r = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var s = e.floor(r / 4294967296),i = r;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = s.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, r, o, s, i) {var a = e + (t & n | ~t & r) + o + i;return (a << s | a >>> 32 - s) + t;}function l(e, t, n, r, o, s, i) {var a = e + (t & r | n & ~r) + o + i;return (a << s | a >>> 32 - s) + t;}function h(e, t, n, r, o, s, i) {var a = e + (t ^ n ^ r) + o + i;return (a << s | a >>> 32 - s) + t;}function f(e, t, n, r, o, s, i) {var a = e + (n ^ (t | ~r)) + o + i;return (a << s | a >>> 32 - s) + t;}t.MD5 = s._createHelper(c), t.HmacMD5 = s._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, o, s;e.exports = (o = (n = r).lib.Base, s = n.enc.Utf8, void (n.algo.HMAC = o.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));var n = e.blockSize,r = 4 * n;t.sigBytes > r && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = r, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = r.HmacMD5;}));function s(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}).catch(function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var i = /*#__PURE__*/function (_Error) {_inherits(i, _Error);var _super = _createSuper(i);function i(e) {var _this;_classCallCheck(this, i);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return i;}( /*#__PURE__*/_wrapNativeSuper(Error));var a;try {a = __webpack_require__(/*! uni-stat-config */ 20).default || __webpack_require__(/*! uni-stat-config */ 20);} catch (e) {a = { appid: "" };}var c, u;function l() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function h() {return { PLATFORM: "app-plus", OS: u, APPID: a.appid, CLIENT_SDK_VERSION: "1.0.0" };}function f() {if ("n" === p()) {try {c = plus.runtime.getDCloudId();} catch (e) {c = "";}return c;}return c || (c = l(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: c })), c;}function p() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)["app-plus"];}function d() {return { ak: a.appid, p: "android" === u ? "a" : "i", ut: p(), uuid: f() };}var y = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), o(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, r) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}),  false && false;var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return r(new i({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var o = e.data;if (o.error) return r(new i({ code: o.error.code, message: o.error.message, requestId: t }));o.result = o.data, o.requestId = t, delete o.data, n(o);} }));});} };var g = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var _ = /*#__PURE__*/function () {function _(e) {_classCallCheck(this, _);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("缺少参数" + t);}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = g;}_createClass(_, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return y.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return this.hasAccessToken ? t ? this.requestWrapped(e) : this.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : this.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = y.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),r = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), r["x-serverless-sign"] = y.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: r };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : n(new i({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this4 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,r = _ref.filePath,o = _ref.fileType,s = _ref.onUploadProgress;return new Promise(function (a, c) {var u = _this4.adapter.uploadFile({ url: e, formData: t, name: n, filePath: r, fileType: o, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(e);} });"function" == typeof s && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {s({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,r = _ref2.onUploadProgress,o = _ref2.config;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var s = o && o.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: s, filename: t }).then(function (t) {var o = t.result;a = o.id, c = "https://" + o.cdnDomain + "/" + o.ossPath;var s = { url: "https://" + o.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o.accessKeyId, Signature: o.signature, host: o.host, id: a, key: o.ossPath, policy: o.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this5.uploadFileToOSS(Object.assign({}, s, { onUploadProgress: r }));}).then(function () {return _this5.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (n, r) {t.success ? n({ success: !0, filePath: e, fileID: c }) : r(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL(_ref4) {var e = _ref4.fileList;return new Promise(function (t, n) {t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return _;}();var v = { init: function init(e) {var t = new _(e);["deleteFile, getTempFileURL"].forEach(function (e) {t[e] = s(t[e]).bind(t);});var n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.constomAuth = t.auth, t;} };var m,b,w = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.getQuery = function (e, t) {if ("undefined" == typeof window) return !1;var n = t || window.location.search,r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),o = n.substr(n.indexOf("?") + 1).match(r);return null != o ? o[2] : "";}, t.getHash = function (e) {var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));return t ? t[1] : "";}, t.removeParam = function (e, t) {var n = t.split("?")[0],r = [],o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";if ("" !== o) {for (var s = (r = o.split("&")).length - 1; s >= 0; s -= 1) {r[s].split("=")[0] === e && r.splice(s, 1);}n = n + "?" + r.join("&");}return n;}, t.createPromiseCallback = function () {var e;if (!Promise) {(e = function e() {}).promise = {};var t = function t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e;}var n = new Promise(function (t, n) {e = function e(_e, r) {return _e ? n(_e) : t(r);};});return e.promise = n, e;}, t.getWeixinCode = function () {return t.getQuery("code") || t.getHash("code");}, t.getMiniAppCode = function () {return new Promise(function (e, t) {wx.login({ success: function success(t) {e(t.code);}, fail: function fail(e) {t(e);} });});}, t.isArray = function (e) {return "[object Array]" === Object.prototype.toString.call(e);}, t.isString = function (e) {return "string" == typeof e;}, t.isUndefined = function (e) {return void 0 === e;}, t.isInstanceOf = function (e, t) {return e instanceof t;}, t.isFormData = function (e) {return "[object FormData]" === Object.prototype.toString.call(e);}, t.genSeqId = function () {return Math.random().toString(16).slice(2);}, t.getArgNames = function (e) {var t = e.toString();return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);}, t.formatUrl = function (e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;};}),T = "dist/index.js",E = "./dist/index.d.ts",S = { build: "npm run tsc && webpack", tsc: "tsc -p tsconfig.json", "tsc:w": "tsc -p tsconfig.json -w", test: "jest --verbose false -i", e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"', start: "webpack-dev-server --hot --open", eslint: 'eslint "./**/*.js" "./**/*.ts"', "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"', test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js" },O = { type: "git", url: "https://github.com/TencentCloudBase/tcb-js-sdk" },k = ["tcb", "js-sdk"],A = { "@cloudbase/adapter-interface": "^0.2.0", "@cloudbase/adapter-wx_mp": "^0.2.1", "@cloudbase/database": "^0.9.8" },P = { "@babel/core": "^7.6.2", "@babel/plugin-proposal-class-properties": "^7.5.5", "@babel/plugin-proposal-object-rest-spread": "^7.6.2", "@babel/plugin-transform-runtime": "^7.6.2", "@babel/preset-env": "^7.6.2", "@babel/preset-typescript": "^7.6.0", "@babel/runtime": "^7.6.2", "@types/jest": "^23.1.4", "@types/node": "^10.14.4", "@types/superagent": "^4.1.4", axios: "^0.19.0", "babel-eslint": "^10.0.1", "babel-loader": "^8.0.6", "babel-polyfill": "^6.26.0", eslint: "^5.16.0", "eslint-config-alloy": "^1.4.2", "eslint-config-prettier": "^4.1.0", "eslint-plugin-prettier": "^3.0.1", "eslint-plugin-typescript": "^1.0.0-rc.3", express: "^4.17.1", husky: "^3.1.0", jest: "^24.7.1", "jest-puppeteer": "^4.3.0", "lint-staged": "^9.5.0", "power-assert": "^1.6.1", puppeteer: "^1.20.0", "serve-static": "^1.14.1", "ts-jest": "^23.10.4", "ts-loader": "^6.2.1", typescript: "^3.4.3", "typescript-eslint-parser": "^22.0.0", webpack: "^4.41.3", "webpack-bundle-analyzer": "^3.4.1", "webpack-cli": "^3.3.0", "webpack-dev-server": "^3.3.1", "webpack-merge": "^4.2.2", "webpack-visualizer-plugin": "^0.1.11" },I = { hooks: { "pre-commit": "lint-staged" } },N = { name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: T, types: E, scripts: S, repository: O, keywords: k, author: "jimmyjzhang", license: "ISC", dependencies: A, devDependencies: P, husky: I, "lint-staged": { "*.{js,ts}": ["eslint --fix", "git add"] } },R = (m = Object.freeze({ __proto__: null, name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: T, types: E, scripts: S, repository: O, keywords: k, author: "jimmyjzhang", license: "ISC", dependencies: A, devDependencies: P, husky: I, default: N })) && m.default || m,C = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o = r(R);n.SDK_VERISON = o.version, n.ACCESS_TOKEN = "access_token", n.ACCESS_TOKEN_Expire = "access_token_expire", n.REFRESH_TOKEN = "refresh_token", n.ANONYMOUS_UUID = "anonymous_uuid", n.LOGIN_TYPE_KEY = "login_type", n.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", n.BASE_URL =  false ? undefined : "//tcb-api.tencentcloudapi.com/web";});!function (e) {e.local = "local", e.none = "none", e.session = "session";}(b || (b = {}));var x = function x() {},U = function U() {};var q = Object.freeze({ __proto__: null, get StorageType() {return b;}, AbstractSDKRequest: x, AbstractStorage: U, formatUrl: function formatUrl(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;} }),D = n(function (t, n) {var _r,o = e && e.__extends || (_r = function r(e, t) {return (_r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var c = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return o(t, e), t.prototype.get = function (e) {return this._request(s(s({}, e), { method: "get" }));}, t.prototype.post = function (e) {return this._request(s(s({}, e), { method: "post" }));}, t.prototype.upload = function (e) {var t = e.data,n = e.file,r = e.name,o = new FormData();for (var i in t) {o.append(i, t[i]);}return o.append("key", r), o.append("file", n), this._request(s(s({}, e), { data: o, method: "post" }));}, t.prototype.download = function (e) {return i(this, void 0, void 0, function () {var t, n;return a(this, function (r) {return t = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (n = document.createElement("a")).href = e.url, n.setAttribute("download", t), n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), [2, new Promise(function (t) {t({ statusCode: 200, tempFilePath: e.url });})];});});}, t.prototype._request = function (e) {var t = String(e.method).toLowerCase() || "get";return new Promise(function (n) {var r = e.url,o = e.headers,s = void 0 === o ? {} : o,i = e.data,a = e.responseType,c = w.formatUrl(C.protocol, r, "get" === t ? i : {}),u = new XMLHttpRequest();for (var l in u.open(t, c), a && (u.responseType = a), s) {u.setRequestHeader(l, s[l]);}u.onreadystatechange = function () {if (4 === u.readyState) {var e = { statusCode: u.status };try {e.data = JSON.parse(u.responseText);} catch (e) {}n(e);}}, u.send("post" === t && w.isFormData(i) ? i : JSON.stringify(i || {}));});}, t;}(q.AbstractSDKRequest);n.WebRequest = c, n.genAdapter = function () {return { root: window, reqClass: c, wsClass: WebSocket, localStorage: localStorage, sessionStorage: sessionStorage };};}),j = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o,s = r(D);!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(o = n.RUNTIME || (n.RUNTIME = {})), n.useAdapters = function (e) {for (var t = 0, n = w.isArray(e) ? e : [e]; t < n.length; t++) {var r = n[t],o = r.isMatch,s = r.genAdapter,i = r.runtime;if (o()) return { adapter: s(), runtime: i };}}, n.useDefaultAdapter = function () {return { adapter: s.genAdapter(), runtime: o.WEB };}, n.Adapter = { adapter: null, runtime: void 0 };}),L = n(function (t, n) {var _r2,o = e && e.__extends || (_r2 = function r(e, t) {return (_r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r2(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());});Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {function e(e) {switch (j.Adapter.adapter.primaryStorage || e) {case "local":this.storageClass = j.Adapter.adapter.localStorage || new i();break;case "none":this.storageClass = new i();break;default:this.storageClass = j.Adapter.adapter.sessionStorage || new i();}}return e.prototype.setStore = function (e, t, n) {try {if (!this.storageClass) return;} catch (e) {return;}var r,o = {};o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);try {this.storageClass.setItem(e, r);} catch (e) {return;}}, e.prototype.getStore = function (e, t) {try {if (!this.storageClass) return;} catch (e) {return "";}t = t || "localCachev1";var n = this.storageClass.getItem(e);return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";}, e.prototype.removeStore = function (e) {this.storageClass.removeItem(e);}, e;}();n.Cache = s;var i = function (e) {function t() {var t = e.call(this) || this;return j.Adapter.adapter.root.tcbObject || (j.Adapter.adapter.root.tcbObject = {}), t;}return o(t, e), t.prototype.setItem = function (e, t) {j.Adapter.adapter.root.tcbObject[e] = t;}, t.prototype.getItem = function (e) {return j.Adapter.adapter.root.tcbObject[e];}, t.prototype.removeItem = function (e) {delete j.Adapter.adapter.root.tcbObject[e];}, t.prototype.clear = function () {delete j.Adapter.adapter.root.tcbObject;}, t;}(q.AbstractStorage);}),F = n(function (t, n) {var _r3,o = e && e.__extends || (_r3 = function r(e, t) {return (_r3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r3(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__spreadArrays || function () {for (var e = 0, t = 0, n = arguments.length; t < n; t++) {e += arguments[t].length;}var r = Array(e),o = 0;for (t = 0; t < n; t++) {for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) {r[o] = s[i];}}return r;};Object.defineProperty(n, "__esModule", { value: !0 });var i = function i(e, t) {this.data = t || null, this.name = e;};n.IEvent = i;var a = function (e) {function t(t, n) {var r = e.call(this, "error", { error: t, data: n }) || this;return r.error = t, r;}return o(t, e), t;}(i);n.IErrorEvent = a;var c = function () {function e() {this._listeners = {};}return e.prototype.on = function (e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;}, e.prototype.off = function (e, t) {return function (e, t, n) {if (n && n[e]) {var r = n[e].indexOf(t);-1 !== r && n[e].splice(r, 1);}}(e, t, this._listeners), this;}, e.prototype.fire = function (e, t) {if (w.isInstanceOf(e, a)) return console.error(e.error), this;var n = w.isString(e) ? new i(e, t || {}) : e,r = n.name;if (this._listens(r)) {n.target = this;for (var o = 0, c = this._listeners[r] ? s(this._listeners[r]) : []; o < c.length; o++) {c[o].call(this, n);}}return this;}, e.prototype._listens = function (e) {return this._listeners[e] && this._listeners[e].length > 0;}, e;}();n.IEventEmitter = c;var u = new c();n.addEventListener = function (e, t) {u.on(e, t);}, n.activateEvent = function (e, t) {void 0 === t && (t = {}), u.fire(e, t);}, n.removeEventListener = function (e, t) {u.off(e, t);}, n.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRE: "loginStateExpire", LOGIN_TYPE_CHANGE: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", REFRESH_ACCESS_TOKEN: "refreshAccessToken" };}),M = n(function (t, n) {var r = e && e.__assign || function () {return (r = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var i = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously"],a = { "X-SDK-Version": C.SDK_VERISON };function c(e, t, n) {var o = e[t];e[t] = function (t) {var s = {},i = {};n.forEach(function (n) {var r = n.call(e, t),o = r.data,a = r.headers;Object.assign(s, o), Object.assign(i, a);});var a = t.data;return a && function () {if (w.isFormData(a)) for (var e in s) {a.append(e, s[e]);} else t.data = r(r({}, a), s);}(), t.headers = r(r({}, t.headers || {}), i), o.call(e, t);};}function u() {var e = w.genSeqId();return { data: { seqId: e }, headers: r(r({}, a), { "x-seqid": e }) };}var l = function () {function e(e) {void 0 === e && (e = {}), this.config = e, this.cache = new L.Cache(e.persistence), this.accessTokenKey = C.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = C.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = C.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = C.ANONYMOUS_UUID + "_" + e.env, this.loginTypeKey = C.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new j.Adapter.adapter.reqClass(), c(this._reqClass, "post", [u]), c(this._reqClass, "upload", [u]), c(this._reqClass, "download", [u]);}return e.prototype.post = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.post(e)];case 1:return [2, t.sent()];}});});}, e.prototype.upload = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.upload(e)];case 1:return [2, t.sent()];}});});}, e.prototype.download = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.download(e)];case 1:return [2, t.sent()];}});});}, e.prototype.refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, this._refreshAccessTokenPromise];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;return [2, e];}});});}, e.prototype._refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");return t = { refresh_token: e }, this.cache.getStore(this.loginTypeKey) === K.LOGINTYPE.ANONYMOUS && (t.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), [4, this.request("auth.getJwt", t)];case 1:if ((n = o.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (r = n.data.code) && "REFRESH_TOKEN_EXPIRED" !== r && "INVALID_REFRESH_TOKEN" !== r || (F.activateEvent(F.EVENTS.LOGIN_STATE_EXPIRE), this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + n.data.code);return n.data.access_token ? (F.activateEvent(F.EVENTS.REFRESH_ACCESS_TOKEN), this.cache.setStore(this.accessTokenKey, n.data.access_token), this.cache.setStore(this.accessTokenExpireKey, n.data.access_token_expire + Date.now()), F.activateEvent(F.EVENTS.LOGIN_TYPE_CHANGE, n.data.login_type), [2, { accessToken: n.data.access_token, accessTokenExpire: n.data.access_token_expire }]) : (n.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, n.data.refresh_token), this._refreshAccessToken()), [2]);}});});}, e.prototype.getAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), n = !0, (r = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(e, t)] : [3, 2];case 1:r = !o.sent(), o.label = 2;case 2:return r && (n = !1), (!e || !t || t < Date.now()) && n ? [2, this.refreshAccessToken()] : [2, { accessToken: e, accessTokenExpire: t }];}});});}, e.prototype.request = function (e, t, n) {return o(this, void 0, void 0, function () {var o, a, c, u, l, h, f, p, d, y, g, _;return s(this, function (s) {switch (s.label) {case 0:return o = "application/x-www-form-urlencoded", a = r({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t), -1 !== i.indexOf(e) ? [3, 2] : (c = a, [4, this.getAccessToken()]);case 1:c.access_token = s.sent().accessToken, s.label = 2;case 2:if ("storage.uploadFile" === e) {for (l in u = new FormData()) {u.hasOwnProperty(l) && void 0 !== u[l] && u.append(l, a[l]);}o = "multipart/form-data";} else o = "application/json;charset=UTF-8", u = a;return h = { headers: { "content-type": o } }, n && n.onUploadProgress && (h.onUploadProgress = n.onUploadProgress), f = t.parse, p = t.query, d = t.search, y = { env: this.config.env }, f && (y.parse = !0), p && (y = r(r({}, p), y)), g = w.formatUrl(C.protocol, C.BASE_URL, y), d && (g += d), [4, this.post(r({ url: g, data: u }, h))];case 3:if (_ = s.sent(), 200 !== Number(_.status) && 200 !== Number(_.statusCode) || !_.data) throw new Error("network request error");return [2, _];}});});}, e.prototype.send = function (e, t) {return void 0 === t && (t = {}), o(this, void 0, void 0, function () {var n, r;return s(this, function (o) {switch (o.label) {case 0:return [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 1:return n = o.sent(), clearTimeout(void 0), "ACCESS_TOKEN_EXPIRED" !== n.data.code || -1 !== i.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];case 2:return o.sent(), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 3:if ((r = o.sent()).data.code) throw new Error("[" + r.data.code + "] " + r.data.message);return [2, r.data];case 4:if (n.data.code) throw new Error("[" + n.data.code + "] " + n.data.message);return [2, n.data];}});});}, e;}();n.Request = l;}),K = n(function (t, n) {var r,o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL";}(r = n.LOGINTYPE || (n.LOGINTYPE = {}));var i = function () {function e(e) {this._loginType = r.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), F.addEventListener(F.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);}return e.prototype.init = function () {this.httpRequest = new M.Request(this.config), this.cache = new L.Cache(this.config.persistence), this.accessTokenKey = C.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = C.ACCESS_TOKEN_Expire + "_" + this.config.env, this.refreshTokenKey = C.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = C.LOGIN_TYPE_KEY + "_" + this.config.env;}, e.prototype.onLoginTypeChanged = function (e) {this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);}, Object.defineProperty(e.prototype, "loginType", { get: function get() {return this._loginType;}, enumerable: !0, configurable: !0 }), e.prototype.setRefreshToken = function (e) {this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), this.cache.setStore(this.refreshTokenKey, e);}, e.prototype.getRefreshTokenByWXCode = function (e, t, n) {return o(this, void 0, void 0, function () {var r;return s(this, function (o) {return "auth.getJwt", r = j.Adapter.runtime === j.RUNTIME.WX_MP ? "1" : "0", [2, this.httpRequest.send("auth.getJwt", { appid: e, loginType: t, code: n, hybridMiniapp: r }).then(function (e) {if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire };throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");})];});});}, e;}();n.default = i;}),G = n(function (t, n) {var _r4,o = e && e.__extends || (_r4 = function r(e, t) {return (_r4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r4(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var c,u,l = a(w),h = a(K);!function (e) {e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login";}(c || (c = {})), function (e) {e.redirect = "redirect", e.prompt = "prompt";}(u || (u = {}));var f = {},p = function (e) {function t(t, n, r, o, s) {var i = e.call(this, t) || this;return i.config = t, i.appid = n, i.scope = j.Adapter.runtime === j.RUNTIME.WX_MP ? "snsapi_base" : r, i.state = s || "weixin", i.loginMode = o || "redirect", i;}return o(t, e), t.prototype.signIn = function () {return s(this, void 0, void 0, function () {var e, t, n;return i(this, function (r) {switch (r.label) {case 0:f[this.config.env] || (f[this.config.env] = this._signIn()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, f[this.config.env]];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (f[this.config.env] = null, t) throw t;return [2, e];}});});}, t.prototype._signIn = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o, s;return i(this, function (i) {switch (i.label) {case 0:if (e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), e) {if (t && t > Date.now()) return [2, { credential: { accessToken: e, refreshToken: this.cache.getStore(this.refreshTokenKey) } }];this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);}if (!1 === Object.values(c).includes(c[this.scope])) throw new Error("错误的scope类型");return j.Adapter.runtime !== j.RUNTIME.WX_MP ? [3, 2] : [4, l.getMiniAppCode()];case 1:return n = i.sent(), [3, 4];case 2:return [4, l.getWeixinCode()];case 3:if (!(n = i.sent())) return [2, this.redirect()];i.label = 4;case 4:return r = function (e) {switch (e) {case c.snsapi_login:return "WECHAT-OPEN";default:return "WECHAT-PUBLIC";}}(this.scope), [4, this.getRefreshTokenByWXCode(this.appid, r, n)];case 5:return o = i.sent(), s = o.refreshToken, this.cache.setStore(this.refreshTokenKey, s), o.accessToken && this.cache.setStore(this.accessTokenKey, o.accessToken), o.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, o.accessTokenExpire + Date.now()), F.activateEvent(F.EVENTS.LOGIN_STATE_CHANGED), F.activateEvent(F.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.WECHAT), [2, { credential: { refreshToken: s } }];}});});}, t.prototype.redirect = function () {var e = l.removeParam("code", location.href);e = l.removeParam("state", e), e = encodeURIComponent(e);var t = "//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), "redirect" === u[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");}, t;}(h.default);n.default = p;}),Y = n(function (t, n) {var _r5,o = e && e.__extends || (_r5 = function r(e, t) {return (_r5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r5(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},c = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var u = c(K),l = function (e) {function t(t) {var n = e.call(this, s(s({}, t), { persistence: "local" })) || this;return n._anonymousUuidKey = C.ANONYMOUS_UUID + "_" + n.config.env, n._loginTypeKey = C.LOGIN_TYPE_KEY + "_" + n.config.env, n;}return o(t, e), t.prototype.init = function () {e.prototype.init.call(this);}, t.prototype.signIn = function () {return i(this, void 0, void 0, function () {var e, t, n;return a(this, function (r) {switch (r.label) {case 0:return e = this.cache.getStore(this._anonymousUuidKey) || void 0, t = this.cache.getStore(this.refreshTokenKey) || void 0, [4, this.httpRequest.send("auth.signInAnonymously", { anonymous_uuid: e, refresh_token: t })];case 1:return (n = r.sent()).uuid && n.refresh_token ? (this._setAnonymousUUID(n.uuid), this.setRefreshToken(n.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return r.sent(), F.activateEvent(F.EVENTS.LOGIN_STATE_CHANGED), F.activateEvent(F.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.ANONYMOUS), [2, { credential: { refreshToken: n.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败");}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return i(this, void 0, void 0, function () {var t, n, r;return a(this, function (o) {switch (o.label) {case 0:return t = this.cache.getStore(this._anonymousUuidKey), n = this.cache.getStore(this.refreshTokenKey), [4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: t, refresh_token: n, ticket: e })];case 1:return (r = o.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(r.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return o.sent(), F.activateEvent(F.EVENTS.ANONYMOUS_CONVERTED, { refresh_token: r.refresh_token }), F.activateEvent(F.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: r.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败");}});});}, t.prototype.getAllStore = function () {var e = {};return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", e;}, t.prototype._setAnonymousUUID = function (e) {this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), this.cache.setStore(this._loginTypeKey, u.LOGINTYPE.ANONYMOUS);}, t.prototype._clearAnonymousUUID = function () {this.cache.removeStore(this._anonymousUuidKey);}, t;}(u.default);n.AnonymousAuthProvider = l;}),H = n(function (t, n) {var _r6,o = e && e.__extends || (_r6 = function r(e, t) {return (_r6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r6(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},c = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},u = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var l = c(G),h = u(K),f = function (e) {function t(t) {var n = e.call(this, t) || this;return n.config = t, n;}return o(t, e), t.prototype.init = function () {e.prototype.init.call(this), this.customAuthProvider = new h.default(this.config), this.customAuthProvider.init();}, t.prototype.weixinAuthProvider = function (e) {var t = e.appid,n = e.scope,r = e.loginMode,o = e.state,s = new l.default(this.config, t, n, r, o);return s.init(), s;}, t.prototype.signInAnonymously = function () {return i(this, void 0, void 0, function () {var e = this;return a(this, function (t) {switch (t.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new Y.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), F.addEventListener(F.EVENTS.LOGIN_TYPE_CHANGE, function (t) {if (t && t.data === h.LOGINTYPE.ANONYMOUS) {var n = e._anonymousAuthProvider.getAllStore();for (var r in n) {n[r] && e.httpRequest.cache.setStore(r, n[r]);}}}), [4, this._anonymousAuthProvider.signIn()];case 1:return [2, t.sent()];}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return i(this, void 0, void 0, function () {var t = this;return a(this, function (n) {switch (n.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new Y.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), F.addEventListener(F.EVENTS.ANONYMOUS_CONVERTED, function (e) {var n = e.data.refresh_token;n && t.httpRequest.cache.setStore(t.refreshTokenKey, n);}), [4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e)];case 1:return [2, n.sent()];}});});}, t.prototype.signOut = function () {return i(this, void 0, void 0, function () {var e, t, n, r, o, s, i;return a(this, function (a) {switch (a.label) {case 0:if (this.loginType === h.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, o = e.accessTokenExpireKey, "auth.logout", (s = t.getStore(n)) ? [4, this.httpRequest.send("auth.logout", { refresh_token: s })] : [2];case 1:return i = a.sent(), t.removeStore(n), t.removeStore(r), t.removeStore(o), F.activateEvent(F.EVENTS.LOGIN_STATE_CHANGED), F.activateEvent(F.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.NULL), [2, i];}});});}, t.prototype.getAccessToken = function () {return i(this, void 0, void 0, function () {var e;return a(this, function (t) {switch (t.label) {case 0:return e = {}, [4, this.httpRequest.getAccessToken()];case 1:return [2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e)];}});});}, t.prototype.onLoginStateExpire = function (e) {F.addEventListener("loginStateExpire", e);}, t.prototype.getLoginState = function () {return i(this, void 0, void 0, function () {var e, t, n, r, o;return a(this, function (s) {switch (s.label) {case 0:if (e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, !(o = t.getStore(n))) return [3, 5];s.label = 1;case 1:return s.trys.push([1, 3,, 4]), [4, this.httpRequest.refreshAccessToken()];case 2:return s.sent(), [3, 4];case 3:return s.sent(), [2, null];case 4:return [2, { isAnonymous: this.loginType === h.LOGINTYPE.ANONYMOUS, credential: { refreshToken: o, accessToken: t.getStore(r) } }];case 5:return [2, null];}});});}, t.prototype.signInWithTicket = function (e) {return i(this, void 0, void 0, function () {var t, n, r, o;return a(this, function (s) {switch (s.label) {case 0:if ("string" != typeof e) throw new Error("ticket must be a string");return t = this.httpRequest, n = t.cache, r = t.refreshTokenKey, [4, this.httpRequest.send("auth.signInWithTicket", { ticket: e, refresh_token: n.getStore(r) || "" })];case 1:return (o = s.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(o.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return s.sent(), F.activateEvent(F.EVENTS.LOGIN_STATE_CHANGED), F.activateEvent(F.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: o.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败");}});});}, t.prototype.shouldRefreshAccessToken = function (e) {this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);}, t.prototype.getUserInfo = function () {return this.httpRequest.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : s(s({}, e.data), { requestId: e.seqId });});}, t;}(h.default);n.default = f;}),V = n(function (t, n) {var r = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},o = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), n.uploadFile = function (e, t) {t = t || w.createPromiseCallback();var n = new M.Request(this.config),r = e.cloudPath,o = e.filePath,s = e.onUploadProgress,i = e.fileType || "image";return n.send("storage.getUploadMetadata", { path: r }).then(function (e) {var a = e.data,c = a.url,u = a.authorization,l = a.token,h = a.fileId,f = a.cosFileId,p = e.requestId,d = { key: r, signature: u, "x-cos-meta-fileid": f, success_action_status: "201", "x-cos-security-token": l };n.upload({ url: c, data: d, file: o, name: r, fileType: i, onUploadProgress: s }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: p }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;}, n.deleteFile = function (e, t) {var n = e.fileList;if (t = t || w.createPromiseCallback(), !n || !Array.isArray(n)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };for (var r = 0, o = n; r < o.length; r++) {var s = o[r];if (!s || "string" != typeof s) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}var i = { fileid_list: n };return new M.Request(this.config).send("storage.batchDeleteFile", i).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.getTempFileURL = function (e, t) {var n = e.fileList;t = t || w.createPromiseCallback(), n && Array.isArray(n) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });for (var r = [], o = 0, s = n; o < s.length; o++) {var i = s[o];"object" == typeof i ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), r.push({ fileid: i.fileID, max_age: i.maxAge })) : "string" == typeof i ? r.push({ fileid: i }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}var a = { file_list: r };return new M.Request(this.config).send("storage.batchGetDownloadUrl", a).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.downloadFile = function (e, t) {var s = e.fileID;return r(this, void 0, void 0, function () {var e, r, i, a, c;return o(this, function (o) {switch (o.label) {case 0:return [4, n.getTempFileURL.call(this, { fileList: [{ fileID: s, maxAge: 600 }] })];case 1:return e = o.sent(), "SUCCESS" !== (r = e.fileList[0]).code ? [2, t ? t(r) : new Promise(function (e) {e(r);})] : (i = r.download_url, i = encodeURI(i), a = new M.Request(this.config), t ? [4, a.download({ url: i })] : [3, 3]);case 2:return c = o.sent(), t(c), [3, 4];case 3:return [2, a.download({ url: i })];case 4:return [2];}});});};}),$ = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.callFunction = function (e, t) {var n,r = e.name,o = e.data,s = e.query,i = e.parse,a = e.search,c = t || w.createPromiseCallback();try {n = o ? JSON.stringify(o) : "";} catch (e) {return Promise.reject(e);}if (!r) return Promise.reject(new Error("函数名不能为空"));var u = { query: s, parse: i, search: a, function_name: r, request_data: n };return new M.Request(this.config).send("functions.invokeFunction", u).then(function (e) {if (e.code) c(null, e);else {var t = e.data.response_data;if (i) c(null, { result: t, requestId: e.requestId });else try {t = JSON.parse(e.data.response_data), c(null, { result: t, requestId: e.requestId });} catch (e) {c(new Error("response data must be json"));}}return c.promise;}).catch(function (e) {c(e);}), c.promise;};}),B = t(n(function (t) {var n = e && e.__assign || function () {return (n = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},r = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},o = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;},s = r(H),i = o(V),a = o($),c = { timeout: 15e3 },u = new (function () {function e(e) {var t = this;this.config = e || this.config, this.authObj = void 0, F.addEventListener(F.EVENTS.LOGIN_TYPE_CHANGE, function (e) {e.data === K.LOGINTYPE.ANONYMOUS && (t.config.persistence = "local");});}return e.prototype.init = function (t) {return this.config = n(n({}, c), t), j.Adapter.adapter || this._useDefaultAdapter(), new e(this.config);}, e.prototype.auth = function (e) {var t = (void 0 === e ? {} : e).persistence;return this.authObj || (this.config = n(n({}, this.config), { persistence: t || j.Adapter.adapter.primaryStorage || "session" }), this.authObj = new s.default(this.config), this.authObj.init()), this.authObj;}, e.prototype.on = function (e, t) {return F.addEventListener.apply(this, [e, t]);}, e.prototype.off = function (e, t) {return F.removeEventListener.apply(this, [e, t]);}, e.prototype.callFunction = function (e, t) {return a.callFunction.apply(this, [e, t]);}, e.prototype.deleteFile = function (e, t) {return i.deleteFile.apply(this, [e, t]);}, e.prototype.getTempFileURL = function (e, t) {return i.getTempFileURL.apply(this, [e, t]);}, e.prototype.downloadFile = function (e, t) {return i.downloadFile.apply(this, [e, t]);}, e.prototype.uploadFile = function (e, t) {return i.uploadFile.apply(this, [e, t]);}, e.prototype.useAdapters = function (e) {var t = j.useAdapters(e) || {},n = t.adapter,r = t.runtime;n && (j.Adapter.adapter = n), r && (j.Adapter.runtime = r);}, e.prototype._useDefaultAdapter = function () {var e = j.useDefaultAdapter(),t = e.adapter,n = e.runtime;j.Adapter.adapter = t, j.Adapter.runtime = n;}, e;}())();try {window.tcb = u;} catch (e) {}t.exports = u;}));function W(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?:\/\//.test(t += o) ? t : "" + e + t;}var z = /*#__PURE__*/function () {function z() {_classCallCheck(this, z);}_createClass(z, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,r = e.headers;return new Promise(function (e, o) {g.request({ url: W("https:", t), data: n, method: "POST", header: r, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var r = e.url,o = e.file,s = e.data,i = e.headers,a = e.fileType,c = g.uploadFile({ url: W("https:", r), name: "file", formData: Object.assign({}, s), filePath: o, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && s.success_action_status && (n.statusCode = parseInt(s.success_action_status, 10)), t(n);}, fail: function fail(e) { false && false, n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return z;}();var J = { setItem: function setItem(e, t) {g.setStorageSync(e, t);}, getItem: function getItem(e) {return g.getStorageSync(e);}, removeItem: function removeItem(e) {g.removeStorageSync(e);}, clear: function clear() {g.clearStorageSync();} };var X = { genAdapter: function genAdapter() {return { root: {}, reqClass: z, localStorage: J, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };B.useAdapters(X);var Q = B,Z = Q.init;Q.init = function (e) {e.env = e.spaceId;var t = Z.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;}, t.customAuth = t.auth;return ["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;};var ee, te, ne, re;function oe(_ref5) {var _this6 = this;var e = _ref5.name,t = _ref5.data;var n = this.localAddress,r = this.localPort,o = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],s = this.config.spaceId,a = "http://".concat(n, ":").concat(r, "/system/check-function"),c = "http://".concat(n, ":").concat(r, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {g.request({ method: "POST", url: a, data: { name: e, platform: "app-plus", provider: o, spaceId: s }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref6.data;var _ref7 = e || {},t = _ref7.code,n = _ref7.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref8) {var n = _ref8.code,r = _ref8.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(r || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e2 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e2), new Error(_e2);}case "SWITCH_TO_CLOUD":break;default:{var _e3 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(r, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e3), new Error(_e3);}}return _this6.originCallFunction({ name: e, data: t });}return new Promise(function (n, r) {ee || (ee = h(), te = d());var a = e,u = s,l = { tencent: "t", aliyun: "a" }[_this6.config.provider],f = Object.assign({}, te, { fn: a, sid: u, pvd: l });g.request({ method: "POST", url: c, data: { provider: o, platform: "app-plus", param: _objectSpread(_objectSpread({ uniIdToken: g.getStorageSync("uni_id_token") || g.getStorageSync("uniIdToken") }, t), {}, { clientInfo: ee, uniCloudClientInfo: encodeURIComponent(JSON.stringify(f)) }) }, success: function success() {var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref9.statusCode,t = _ref9.data;return !e || e >= 400 ? r(new i({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : n({ result: t });}, fail: function fail(e) {r(new i({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}function se(e) {ne || (ne = h(), re = d());var t = JSON.parse(JSON.stringify(e.data || {})),n = e.name,r = this.config.spaceId,o = { tencent: "t", aliyun: "a" }[this.config.provider],s = Object.assign({}, re, { fn: n, sid: r, pvd: o });if (Object.assign(t, { clientInfo: ne, uniCloudClientInfo: encodeURIComponent(JSON.stringify(s)) }), !t.uniIdToken) {var _e4 = g.getStorageSync("uni_id_token") || g.getStorageSync("uniIdToken");_e4 && (t.uniIdToken = _e4);}return e.data = t, e;}function ie(e) {var t = e.callFunction;e.callFunction = function (e) {var _this7 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {var n = se.call(_this7, e),r = { aliyun: "aliyun", tencent: "tcb" }[_this7.config.provider];return new Promise(function (o, s) {t.call(_this7, n).then(function (t) {if (_this7.config.useDebugFunction && t && t.requestId) {var _n = JSON.stringify({ spaceId: _this7.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n, "[/").concat(r, "-request]"));}o(t);}).catch(function (t) {if (_this7.config.useDebugFunction && t && t.requestId) {var _n2 = JSON.stringify({ spaceId: _this7.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n2, "[/").concat(r, "-request]"));}t && t.message && (t.message = "[".concat(e.name, "]: ").concat(t.message)), s(t);});});});};var n = e.callFunction;e.callFunction = function (e) {return s(n).call(this, e);}, e.originCallFunction = e.callFunction, e.callFunction = function (t) {if ( true && e.debugInfo && !e.debugInfo.forceRemote && [{"provider":"aliyun","spaceName":"occ-lux2clond","spaceId":"08e0a723-7598-4e15-8e1a-46bc09131e1e","clientSecret":"TEkSU+oU3eioeMG9iX3wdg==","endpoint":"https://api.bspapp.com"}]) {return s(function (t) {var _this8 = this;var n;return n = e.isReady ? Promise.resolve() : e.initUniCloud, n.then(function () {return oe.call(_this8, t);});}).call(this, t);}return s(n).call(this, t);};}var ae = Symbol("CLIENT_DB_INTERNAL");function ce(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = ae, new Proxy(e, { get: function get(e, n, r) {return function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}(e, n) || e[n] || "string" != typeof n ? e[n] : t.get(e, n, r);} });}var ue = /*#__PURE__*/function (_Error2) {_inherits(ue, _Error2);var _super2 = _createSuper(ue);function ue(e, t) {var _this9;_classCallCheck(this, ue);_this9 = _super2.call(this, e), _this9.code = t;return _this9;}return ue;}( /*#__PURE__*/_wrapNativeSuper(Error));function le(e) {switch (t = e, Object.prototype.toString.call(t).slice(8, -1).toLowerCase()) {case "array":return e.map(function (e) {return le(e);});case "object":return e._internalType === ae || Object.keys(e).forEach(function (t) {e[t] = le(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}var t;}function he(_x, _x2) {return _he.apply(this, arguments);}function _he() {_he = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e, t) {var n, _e7, r;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context2.prev = 1;_context2.next = 4;return r = { url: n, timeout: 500 }, new Promise(function (e, t) {g.request(_objectSpread(_objectSpread({}, r), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e7 = _context2.sent;return _context2.abrupt("return", !(!_e7.data || 0 !== _e7.data.code));case 8:_context2.prev = 8;_context2.t0 = _context2["catch"](1);return _context2.abrupt("return", !1);case 11:case "end":return _context2.stop();}}}, _callee2, null, [[1, 8]]);}));return _he.apply(this, arguments);}var fe = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);}_createClass(_class, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && "development" === "development" && ( false || "app-plus" === "app-plus");switch (e.provider) {case "tencent":t = Q.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = v.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var r = {
    "address": [
        "127.0.0.1",
        "192.168.5.119"
    ],
    "debugPort": 62639,
    "initialLaunchType": "local",
    "servePort": 62640
}
; true && r && !r.code && (t.debugInfo = r), t.isReady = !1;var o = t.auth();return t.initUniCloud = o.getLoginState().then(function (e) {return e ? Promise.resolve() : o.signInAnonymously();}).then(function () {if ( true && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e5 = _t$debugInfo.address,_n3 = _t$debugInfo.servePort;return function () {var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e, t) {var n, _r7, _o;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_r7 = 0;case 1:if (!(_r7 < e.length)) {_context.next = 11;break;}_o = e[_r7];_context.next = 5;return he(_o, t);case 5:if (!_context.sent) {_context.next = 8;break;}n = _o;return _context.abrupt("break", 11);case 8:_r7++;_context.next = 1;break;case 11:return _context.abrupt("return", { address: n, port: t });case 12:case "end":return _context.stop();}}}, _callee);}));return function (_x3, _x4) {return _ref10.apply(this, arguments);};}()(_e5, _n3);}return Promise.resolve();}).then(function () {var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref11.address,n = _ref11.port;e ? (t.localAddress = e, t.localPort = n) : t.debugInfo && ("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, console.error("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。")) : console.error("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。"));}).then(function () {return new Promise(function (e) { false ? (undefined) : setTimeout(function () {u = uni.getSystemInfoSync().platform, c = uni.getStorageSync("__DC_CLOUD_UUID") || l(32), e();}, 0);});}).then(function () {t.isReady = !0;}), ie(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this10 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {return t.call(_this10, e);});};var n = e.uploadFile;e.uploadFile = function (e) {return s(n).call(this, e);};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {},n = {};var r = /*#__PURE__*/function () {function r(e, t, n) {_classCallCheck(this, r);this.content = e, this.prevStage = t, this.actionName = n;}_createClass(r, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: e.$param };}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("客户端禁止使用set方法");} }, { key: "_send", value: function _send(r, o) {var s = this.toJSON();return s.$db.push({ $method: r, $param: o }), e.callFunction({ name: "DCloud-clientDB", data: { action: this.actionName, command: s } }).then(function (e) {var _e$result = e.result,r = _e$result.code,o = _e$result.message,s = _e$result.token,i = _e$result.tokenExpired;return r ? Promise.reject(new ue(o, r)) : (s && i && t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: s, tokenExpired: i });}), s && i && n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: s, tokenExpired: i });}), Promise.resolve(e));}).catch(function (e) {var t = new ue(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), Promise.reject(e);});} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n4 = e.content.$method;if ("aggregate" === _n4 || "pipeline" === _n4) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return i({ $method: "count", $param: le(Array.from(arguments)) }, e, e.actionName);};} }]);return r;}();var o = ["db.Geo", "db.command", "command.aggregate"];function s(e, t) {return o.indexOf("".concat(e, ".").concat(t)) > -1;}function i(e, t, n) {return ce(new r(e, t, n), { get: function get(e, t) {var r = "db";return e && e.content && (r = e.content.$method), s(r, t) ? i({ $method: t }, e, n) : function () {return i({ $method: t, $param: le(Array.from(arguments)) }, e, n);};} });}function a(_ref12) {var e = _ref12.path,t = _ref12.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var c = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var r = t[e].indexOf(n);-1 !== r && t[e].splice(r, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var r = n[e].indexOf(t);-1 !== r && n[e].splice(r, 1);}, env: ce({}, { get: function get(e, t) {return { $env: t };} }), action: function action(e) {return ce({}, { get: function get(t, n) {return s("db", n) ? i({ $method: n }, null, e) : function () {return i({ $method: n, $param: le(Array.from(arguments)) }, null, e);};} });}, Geo: ce({}, { get: function get(e, t) {return a({ path: ["Geo"], method: t });} }), get serverDate() {return a({ path: [], method: "serverDate" });}, get RegExp() {return a({ path: [], method: "RegExp" });} },u = ce(c, { get: function get(e, t) {return s("db", t) ? i({ $method: t }) : function () {return i({ $method: t, $param: le(Array.from(arguments)) });};} });return this._database = u, u;};}(t), t.init = this.init, t;} }]);return _class;}())();try {var _e6 = {};1 === [{"provider":"aliyun","spaceName":"occ-lux2clond","spaceId":"08e0a723-7598-4e15-8e1a-46bc09131e1e","clientSecret":"TEkSU+oU3eioeMG9iX3wdg==","endpoint":"https://api.bspapp.com"}].length && (_e6 = [{"provider":"aliyun","spaceName":"occ-lux2clond","spaceId":"08e0a723-7598-4e15-8e1a-46bc09131e1e","clientSecret":"TEkSU+oU3eioeMG9iX3wdg==","endpoint":"https://api.bspapp.com"}][0]), fe = fe.init(_e6);} catch (e) {["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database"].forEach(function (e) {fe[e] = function () {var e = [{"provider":"aliyun","spaceName":"occ-lux2clond","spaceId":"08e0a723-7598-4e15-8e1a-46bc09131e1e","clientSecret":"TEkSU+oU3eioeMG9iX3wdg==","endpoint":"https://api.bspapp.com"}].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";return console.error(e), Promise.reject(new i({ code: "SYS_ERR", message: e }));};});}var pe = fe;var _default = pe;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 14), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 15)["default"]))

/***/ }),
/* 14 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 14)))

/***/ }),
/* 16 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 17 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 18);

/***/ }),
/* 18 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 19);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 19 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 20 */
/*!***********************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages.json?{"type":"stat"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__F860400" };exports.default = _default;

/***/ }),
/* 21 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 22 */
/*!*********************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/login/register.vue?mpType=page ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=ac0095dc&scoped=true&mpType=page */ 23);\n/* harmony import */ var _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"ac0095dc\",\n  null,\n  false,\n  _register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/register.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYzAwOTVkYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFjMDA5NWRjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2xvZ2luL3JlZ2lzdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!***************************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/login/register.vue?vue&type=template&id=ac0095dc&scoped=true&mpType=page ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=ac0095dc&scoped=true&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_ac0095dc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/login/register.vue?vue&type=template&id=ac0095dc&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "logo_image"), attrs: { _i: 1 } },
        [
          _c("image", {
            staticClass: _vm._$s(2, "sc", "imagewhr"),
            attrs: {
              src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/logo.png */ 5)),
              _i: 2
            }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(3, "sc", "flex direction-column align-center"),
          attrs: { _i: 3 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(
                4,
                "sc",
                "flex direction-row align-center register_account"
              ),
              attrs: { _i: 4 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "register_account_image"),
                  attrs: { _i: 5 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(6, "sc", "imagewh"),
                    attrs: {
                      src: _vm._$s(
                        6,
                        "a-src",
                        __webpack_require__(/*! ../../static/image/login/account.png */ 6)
                      ),
                      _i: 6
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(7, "sc", "register_account_input"),
                  attrs: { _i: 7 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.register.account,
                        expression: "register.account"
                      }
                    ],
                    attrs: { _i: 8 },
                    domProps: {
                      value: _vm._$s(8, "v-model", _vm.register.account)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.register, "account", $event.target.value)
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(
                9,
                "sc",
                "flex direction-row align-center register_password"
              ),
              attrs: { _i: 9 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "register_password_image"),
                  attrs: { _i: 10 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(11, "sc", "imagewh"),
                    attrs: {
                      src: _vm._$s(
                        11,
                        "a-src",
                        __webpack_require__(/*! ../../static/image/login/password.png */ 7)
                      ),
                      _i: 11
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(12, "sc", "register_password_input"),
                  attrs: { _i: 12 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.register.password,
                        expression: "register.password"
                      }
                    ],
                    attrs: {
                      password: _vm._$s(13, "a-password", _vm.lookpassword),
                      _i: 13
                    },
                    domProps: {
                      value: _vm._$s(13, "v-model", _vm.register.password)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.register, "password", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(14, "sc", "register_password_look"),
                  attrs: { _i: 14 },
                  on: {
                    click: function($event) {
                      _vm.lookpassword = !_vm.lookpassword
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(15, "sc", "imagewh"),
                    attrs: {
                      src: _vm._$s(
                        15,
                        "a-src",
                        _vm.lookpassword
                          ? "../../static/image/login/unlookpassword.png"
                          : "../../static/image/login/lookpassword.png"
                      ),
                      _i: 15
                    }
                  })
                ]
              )
            ]
          ),
          _c("button", {
            staticClass: _vm._$s(16, "sc", "register_btn"),
            attrs: { _i: 16 },
            on: { click: _vm.gotoregister }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*********************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/login/register.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/login/register.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _login = __webpack_require__(/*! ../../api/login.js */ 11); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { register: { account: '', password: '' }, lookpassword: true };}, methods: { // register\n    gotoregister: function gotoregister() {var _this = this;if (this.register.account == '') {this.$ShowToast('请输入账号', 'none');return;} else if (this.register.password == '') {this.$ShowToast('请输入密码', 'none');return;}var data = { account: this.register.account, password: this.register.password };(0, _login.register)(data).then(function (res) {__f__(\"log\", '注册 ==> ', res, \" at pages/login/register.vue:68\");_this.$ShowToast('注册成功', 'success');uni.reLaunch({ url: './login?account=' + _this.register.account + '&password=' + _this.register.password });});} } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vcmVnaXN0ZXIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxZQUNBLFdBREEsRUFFQSxZQUZBLEVBREEsRUFLQSxrQkFMQSxHQU9BLENBVEEsRUFVQSxXQUNBO0FBQ0EsZ0JBRkEsMEJBRUEsa0JBQ0Esa0NBQ0EsaUNBQ0EsT0FDQSxDQUhBLE1BR0EsbUNBQ0EsaUNBQ0EsT0FDQSxDQUNBLGFBQ0EsOEJBREEsRUFFQSxnQ0FGQSxHQUlBLGdEQUNBLGdFQUNBLG9DQUNBLGVBQ0EseUZBREEsSUFHQSxDQU5BLEVBT0EsQ0FyQkEsRUFWQSxFIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PCEtLSBsb2dvIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb2dvX2ltYWdlXCI+XHJcblx0XHRcdDxpbWFnZSBjbGFzcz1cImltYWdld2hyXCIgc3JjPVwiLi4vLi4vc3RhdGljL2xvZ28ucG5nXCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gaW5wdXQgYWNjb3VudCBwYXNzd29yZCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBkaXJlY3Rpb24tY29sdW1uIGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHQ8IS0tIGFjY291bnQgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBkaXJlY3Rpb24tcm93IGFsaWduLWNlbnRlciByZWdpc3Rlcl9hY2NvdW50XCI+XHJcblx0XHRcdFx0PCEtLSBhY2NvdW50IGljb24gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdpc3Rlcl9hY2NvdW50X2ltYWdlXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWFnZXdoXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlL2xvZ2luL2FjY291bnQucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSBhY2NvdW50IGlucHV0IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVnaXN0ZXJfYWNjb3VudF9pbnB1dFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6LSm5Y+3XCIgY29uZmlybS10eXBlPVwibmV4dFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5hY2NvdW50XCIgbWF4bGVuZ3RoPVwiMjBcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIHBhc3N3b3JkIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggZGlyZWN0aW9uLXJvdyBhbGlnbi1jZW50ZXIgcmVnaXN0ZXJfcGFzc3dvcmRcIj5cclxuXHRcdFx0XHQ8IS0tIHBhc3N3b3JkIGljb24gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdpc3Rlcl9wYXNzd29yZF9pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2V3aFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9sb2dpbi9wYXNzd29yZC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIHBhc3N3b3JkIGlucHV0IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVnaXN0ZXJfcGFzc3dvcmRfaW5wdXRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWvhueggVwiIDpwYXNzd29yZD1cImxvb2twYXNzd29yZFwiIGNvbmZpcm0tdHlwZT1cIm5leHRcIiB2LW1vZGVsPVwicmVnaXN0ZXIucGFzc3dvcmRcIiBtYXhsZW5ndGg9XCIyMFwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gTm8gZGlzcGxheSAmIGRpc3BsYXkgcGFzc3dvcmQgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdpc3Rlcl9wYXNzd29yZF9sb29rXCIgQGNsaWNrPVwibG9va3Bhc3N3b3JkID0gIWxvb2twYXNzd29yZFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2V3aFwiIDpzcmM9XCJsb29rcGFzc3dvcmQgPyAnLi4vLi4vc3RhdGljL2ltYWdlL2xvZ2luL3VubG9va3Bhc3N3b3JkLnBuZycgOiAnLi4vLi4vc3RhdGljL2ltYWdlL2xvZ2luL2xvb2twYXNzd29yZC5wbmcnXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSByZWdpc3RlciAtLT5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyX2J0blwiIEBjbGljaz1cImdvdG9yZWdpc3RlclwiPuazqOWGjDwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9hcGkvbG9naW4uanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZWdpc3Rlcjp7XHJcblx0XHRcdFx0XHRhY2NvdW50OiAnJyxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiAnJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bG9va3Bhc3N3b3JkOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIHJlZ2lzdGVyXHJcblx0XHRcdGdvdG9yZWdpc3Rlcigpe1xyXG5cdFx0XHRcdGlmICh0aGlzLnJlZ2lzdGVyLmFjY291bnQgPT0gJycpIHtcclxuXHRcdFx0XHRcdHRoaXMuJFNob3dUb2FzdCgn6K+36L6T5YWl6LSm5Y+3JywgJ25vbmUnKVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fWVsc2UgaWYgKHRoaXMucmVnaXN0ZXIucGFzc3dvcmQgPT0gJycpIHtcclxuXHRcdFx0XHRcdHRoaXMuJFNob3dUb2FzdCgn6K+36L6T5YWl5a+G56CBJywgJ25vbmUnKVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0YWNjb3VudDogdGhpcy5yZWdpc3Rlci5hY2NvdW50LFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucmVnaXN0ZXIucGFzc3dvcmRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVnaXN0ZXIoZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+azqOWGjCA9PT4gJywgcmVzKTtcclxuXHRcdFx0XHRcdHRoaXMuJFNob3dUb2FzdCgn5rOo5YaM5oiQ5YqfJywgJ3N1Y2Nlc3MnKVxyXG5cdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi9sb2dpbj9hY2NvdW50PScgKyB0aGlzLnJlZ2lzdGVyLmFjY291bnQgKyAnJnBhc3N3b3JkPScgKyB0aGlzLnJlZ2lzdGVyLnBhc3N3b3JkLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNvbnRlbnR7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdH1cclxuXHQvKiBsb2dvICovXHJcblx0LmxvZ29faW1hZ2V7XHJcblx0XHR3aWR0aDogMTAwcnB4O2hlaWdodDogMTAwcnB4O2JvcmRlci1yYWRpdXM6IDEwMCU7bWFyZ2luOiAxMDBycHggYXV0bztcclxuXHR9XHJcblx0LyogbG9naW4gYWNjb3VudCAqL1xyXG5cdC5yZWdpc3Rlcl9hY2NvdW50e1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjk2ZGI7cGFkZGluZzogMCAxMHJweCAxMHJweCAxMHJweDtcclxuXHR9XHJcblx0LnJlZ2lzdGVyX2FjY291bnRfaW1hZ2V7XHJcblx0XHR3aWR0aDogNTBycHg7aGVpZ2h0OiA1NXJweDtcclxuXHR9XHJcblx0LnJlZ2lzdGVyX2FjY291bnRfaW5wdXR7XHJcblx0XHR3aWR0aDogNTUwcnB4O21hcmdpbjogMCAwIDAgMjBycHg7XHJcblx0fVxyXG5cdC8qIGxvZ2luIHBhc3N3b3JkICovXHJcblx0LnJlZ2lzdGVyX3Bhc3N3b3Jke1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjk2ZGI7cGFkZGluZzogMCAwIDEwcnB4IDA7cGFkZGluZzogMzBycHggMTBycHggMTBycHggMTBycHg7XHJcblx0fVxyXG5cdC5yZWdpc3Rlcl9wYXNzd29yZF9pbWFnZXtcclxuXHRcdHdpZHRoOiA1MHJweDtoZWlnaHQ6IDU1cnB4O1xyXG5cdH1cclxuXHQucmVnaXN0ZXJfcGFzc3dvcmRfaW5wdXR7XHJcblx0XHR3aWR0aDogNTAwcnB4O21hcmdpbjogMCAwIDAgMjBycHg7XHJcblx0fVxyXG5cdC5yZWdpc3Rlcl9wYXNzd29yZF9sb29re1xyXG5cdFx0d2lkdGg6IDUwcnB4O2hlaWdodDogNTVycHg7XHJcblx0fVxyXG5cdC8qIHJlZ2lzdGVyYnRuICovXHJcblx0LnJlZ2lzdGVyX2J0bntcclxuXHRcdHdpZHRoOiA4MCU7YmFja2dyb3VuZC1jb2xvcjogIzEyOTZkYjtjb2xvcjogI0ZGRkZGRjttYXJnaW46IDUwcnB4IDA7aGVpZ2h0OiA3MHJweDtsaW5lLWhlaWdodDogNzBycHg7XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/editInformation/editInformation.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editInformation.vue?vue&type=template&id=0cb3a4dc&mpType=page */ 28);\n/* harmony import */ var _editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editInformation.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/editInformation/editInformation.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDOEU7QUFDTDs7O0FBR3pFO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLGdHQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2VkaXRJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGNiM2E0ZGMmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2VkaXRJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZWRpdEluZm9ybWF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9lZGl0SW5mb3JtYXRpb24vZWRpdEluZm9ybWF0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!********************************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/editInformation/editInformation.vue?vue&type=template&id=0cb3a4dc&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./editInformation.vue?vue&type=template&id=0cb3a4dc&mpType=page */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_template_id_0cb3a4dc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/editInformation/editInformation.vue?vue&type=template&id=0cb3a4dc&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "flex justify-between align-center"),
          attrs: { _i: 1 }
        },
        [
          _c("view", [_c("text")]),
          _c(
            "view",
            [
              _c("avatar", {
                attrs: {
                  selWidth: "338px",
                  selHeight: "338px",
                  avatarSrc: _vm.userImage,
                  avatarStyle:
                    "width: 100rpx;height: 100rpx;border-radius: 100%;",
                  _i: 5
                },
                on: { upload: _vm.myUpload }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(6, "sc", "flex justify-between align-center"),
          attrs: { _i: 6 }
        },
        [
          _c("view", [_c("text")]),
          _c("view", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.userName,
                  expression: "userName"
                }
              ],
              attrs: { _i: 10 },
              domProps: { value: _vm._$s(10, "v-model", _vm.userName) },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.userName = $event.target.value
                }
              }
            })
          ])
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(11, "sc", "flex justify-between align-center"),
          attrs: { _i: 11 }
        },
        [
          _c("view", [_c("text")]),
          _c("view", [
            _c("text", [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.account)))])
          ])
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(16, "sc", "flex justify-between align-center"),
          attrs: { _i: 16 }
        },
        [
          _c("view", [_c("text")]),
          _c("view", [
            _c(
              "picker",
              {
                attrs: { _i: 20 },
                on: { change: _vm.choseUserBirth },
                model: {
                  value: _vm._$s(20, "v-model", _vm.userBirth),
                  callback: function($$v) {
                    _vm.userBirth = $$v
                  },
                  expression: "userBirth"
                }
              },
              [_vm._v(_vm._$s(20, "t0-0", _vm._s(_vm.userBirth)))]
            )
          ])
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(21, "sc", "flex justify-between align-center"),
          attrs: { _i: 21 }
        },
        [
          _c("view", [_c("text")]),
          _c("view", [
            _c("text", [_vm._v(_vm._$s(25, "t0-0", _vm._s(_vm.userAge)))])
          ])
        ]
      ),
      _c("button", {
        staticClass: _vm._$s(26, "sc", "save_user_btn"),
        attrs: { _i: 26 },
        on: { click: _vm.saveUserInfo }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!**************************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/editInformation/editInformation.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./editInformation.vue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_editInformation_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWltQixDQUFnQixnb0JBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lZGl0SW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lZGl0SW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/editInformation/editInformation.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mine = __webpack_require__(/*! ../../api/mine.js */ 32);\nvar _yqAvatar = _interopRequireDefault(__webpack_require__(/*! ../../components/yq-avatar/yq-avatar.vue */ 54));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { avatar: _yqAvatar.default }, data: function data() {return { userName: '', userBirth: '', userAge: '', userImage: '', account: '' };}, onLoad: function onLoad() {this.getUserInfo();}, methods: { getUserInfo: function getUserInfo() {var _this = this;var data = { uid: uni.getStorageSync('uid') };(0, _mine.userInfo)(data).then(function (res) {__f__(\"log\", '获取用户信息 ==> ', res, \" at pages/editInformation/editInformation.vue:72\");_this.userName = res.userName == '' ? '' : res.userName;_this.userAge = res.userAge;_this.userImage = res.userImage;_this.account = res.account;_this.userBirth = res.userBirth;});}, myUpload: function myUpload(rsp) {this.userImage = rsp.path; //更新头像方式一\n    }, choseUserBirth: function choseUserBirth(Birth) {this.userBirth = Birth.detail.value;this.getUserAge(Birth.detail.value);}, getUserAge: function getUserAge(e) {var choseBirth = e.split('-');var myDate = new Date();var Year = myDate.getFullYear();var Month = myDate.getMonth() + 1;var Day = myDate.getDate();if (choseBirth[0] - Year !== 0) {this.userAge = Year - choseBirth[0] + '岁';} else if (choseBirth[1] - Month !== 0) {this.userAge = Month - choseBirth[1] + '个月大';\n      } else {\n        if (Day - choseBirth[2] == 0) {\n          this.userAge = '您今天刚出生';\n        } else {\n          this.userAge = Day - choseBirth[2] + '天';\n        }\n      }\n    },\n    saveUserInfo: function saveUserInfo() {var _this2 = this;\n      __f__(\"log\", this.userImage.substring(27) + '.png', \" at pages/editInformation/editInformation.vue:106\");\n      uniCloud.uploadFile({\n        filePath: this.userImage,\n        cloudPath: this.userImage.substring(27) + '.png',\n        fileType: 'image',\n        success: function success(uploadSuccess) {\n          var data = {\n            userImage: uploadSuccess.fileID,\n            userName: _this2.userName,\n            userAge: _this2.userAge,\n            userBirth: _this2.userBirth,\n            uid: uni.getStorageSync('uid') };\n\n          (0, _mine.updataUserinfo)(data).then(function (res) {\n            __f__(\"log\", '修改用户信息 ==> ', res, \" at pages/editInformation/editInformation.vue:120\");\n            _this2.$ShowToast('修改成功', 'success');\n          });\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZWRpdEluZm9ybWF0aW9uL2VkaXRJbmZvcm1hdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQSxnSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsY0FDQSx5QkFEQSxFQURBLEVBSUEsSUFKQSxrQkFJQSxDQUNBLFNBQ0EsWUFEQSxFQUVBLGFBRkEsRUFHQSxXQUhBLEVBSUEsYUFKQSxFQUtBLFdBTEEsR0FPQSxDQVpBLEVBYUEsTUFiQSxvQkFhQSxDQUNBLG1CQUNBLENBZkEsRUFnQkEsV0FDQSxXQURBLHlCQUNBLGtCQUNBLGFBQ0EsOEJBREEsR0FHQSwrQ0FDQSxxRkFDQSx3REFDQSw0QkFDQSxnQ0FDQSw0QkFDQSxnQ0FDQSxDQVBBLEVBUUEsQ0FiQSxFQWNBLFFBZEEsb0JBY0EsR0FkQSxFQWNBLENBQ0EsMEJBREEsQ0FDQTtBQUNBLEtBaEJBLEVBaUJBLGNBakJBLDBCQWlCQSxLQWpCQSxFQWlCQSxDQUNBLG9DQUNBLG9DQUNBLENBcEJBLEVBcUJBLFVBckJBLHNCQXFCQSxDQXJCQSxFQXFCQSxDQUNBLDhCQUNBLHdCQUNBLGdDQUNBLGtDQUNBLDJCQUNBLGlDQUNBLDBDQUNBLENBRkEsTUFFQSxrQ0FDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQSxnQkF2Q0EsMEJBdUNBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsd0RBRkE7QUFHQSx5QkFIQTtBQUlBO0FBQ0E7QUFDQSwyQ0FEQTtBQUVBLHFDQUZBO0FBR0EsbUNBSEE7QUFJQSx1Q0FKQTtBQUtBLDBDQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBLFdBSEE7QUFJQSxTQWhCQTs7QUFrQkEsS0EzREEsRUFoQkEsRSIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdDx0ZXh0PuWktOWDjzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiAxMDBycHg7aGVpZ2h0OiAxMDBycHg7Ym9yZGVyLXJhZGl1czogMTAwJTtcIj5cclxuXHRcdFx0XHQ8YXZhdGFyIHNlbFdpZHRoPVwiMzM4cHhcIiBzZWxIZWlnaHQ9XCIzMzhweFwiIEB1cGxvYWQ9XCJteVVwbG9hZFwiIDphdmF0YXJTcmM9XCJ1c2VySW1hZ2VcIiBhdmF0YXJTdHlsZT1cIndpZHRoOiAxMDBycHg7aGVpZ2h0OiAxMDBycHg7Ym9yZGVyLXJhZGl1czogMTAwJTtcIj48L2F2YXRhcj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbjogMzBycHggMDtcIj5cclxuXHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0PHRleHQ+5pi156ewPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaYteensFwiIG1heGxlbmd0aD1cIjhcIiB2LW1vZGVsPVwidXNlck5hbWVcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0O1wiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyXCIgc3R5bGU9XCJtYXJnaW46IDMwcnB4IDA7XCI+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdDx0ZXh0Pui0puWPtzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dGV4dD57e2FjY291bnR9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbjogMzBycHggMDtcIj5cclxuXHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0PHRleHQ+55Sf5pelPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdDxwaWNrZXIgbW9kZT1cImRhdGVcIiB2LW1vZGVsPVwidXNlckJpcnRoXCIgQGNoYW5nZT1cImNob3NlVXNlckJpcnRoXCI+e3t1c2VyQmlydGh9fTwvcGlja2VyPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLWNlbnRlclwiIHN0eWxlPVwibWFyZ2luOiAzMHJweCAwO1wiPlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dGV4dD7lubTpvoQ8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0PHRleHQ+e3t1c2VyQWdlfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxidXR0b24gY2xhc3M9XCJzYXZlX3VzZXJfYnRuXCIgQGNsaWNrPVwic2F2ZVVzZXJJbmZvXCI+5L+d5a2YPC9idXR0b24+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgeyB1c2VySW5mbywgdXBkYXRhVXNlcmluZm8gfSBmcm9tICcuLi8uLi9hcGkvbWluZS5qcydcclxuXHRpbXBvcnQgYXZhdGFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3lxLWF2YXRhci95cS1hdmF0YXIudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRhdmF0YXJcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHVzZXJOYW1lOicnLFxyXG5cdFx0XHRcdHVzZXJCaXJ0aDonJyxcclxuXHRcdFx0XHR1c2VyQWdlOiAnJyxcclxuXHRcdFx0XHR1c2VySW1hZ2U6ICcnLFxyXG5cdFx0XHRcdGFjY291bnQ6ICcnLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldFVzZXJJbmZvKCl7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHR1aWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndWlkJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dXNlckluZm8oZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+S/oeaBryA9PT4gJywgcmVzKTtcclxuXHRcdFx0XHRcdHRoaXMudXNlck5hbWUgPSByZXMudXNlck5hbWUgPT0gJycgPyAnJyA6IHJlcy51c2VyTmFtZVxyXG5cdFx0XHRcdFx0dGhpcy51c2VyQWdlID0gcmVzLnVzZXJBZ2VcclxuXHRcdFx0XHRcdHRoaXMudXNlckltYWdlID0gcmVzLnVzZXJJbWFnZVxyXG5cdFx0XHRcdFx0dGhpcy5hY2NvdW50ID0gcmVzLmFjY291bnRcclxuXHRcdFx0XHRcdHRoaXMudXNlckJpcnRoID0gcmVzLnVzZXJCaXJ0aFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG15VXBsb2FkKHJzcCkge1xyXG5cdFx0XHRcdHRoaXMudXNlckltYWdlID0gcnNwLnBhdGg7IC8v5pu05paw5aS05YOP5pa55byP5LiAXHJcblx0XHRcdH0sXHJcblx0XHRcdGNob3NlVXNlckJpcnRoKEJpcnRoKXtcclxuXHRcdFx0XHR0aGlzLnVzZXJCaXJ0aCA9IEJpcnRoLmRldGFpbC52YWx1ZVxyXG5cdFx0XHRcdHRoaXMuZ2V0VXNlckFnZShCaXJ0aC5kZXRhaWwudmFsdWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFVzZXJBZ2UoZSl7XHJcblx0XHRcdFx0bGV0IGNob3NlQmlydGggPSBlLnNwbGl0KCctJylcclxuXHRcdFx0XHR2YXIgbXlEYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHR2YXIgWWVhciA9IG15RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdHZhciBNb250aCA9IG15RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0XHR2YXIgRGF5ID0gbXlEYXRlLmdldERhdGUoKTtcclxuXHRcdFx0XHRpZiAoY2hvc2VCaXJ0aFswXSAtIFllYXIgIT09IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudXNlckFnZSA9IFllYXIgLSBjaG9zZUJpcnRoWzBdICsgJ+WygSdcclxuXHRcdFx0XHR9ZWxzZSBpZiAoY2hvc2VCaXJ0aFsxXSAtIE1vbnRoICE9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnVzZXJBZ2UgPSBNb250aCAtIGNob3NlQmlydGhbMV0gKyAn5Liq5pyI5aSnJ1xyXG5cdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdGlmIChEYXkgLSBjaG9zZUJpcnRoWzJdID09IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWdlID0gJ+aCqOS7iuWkqeWImuWHuueUnydcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBZ2UgPSBEYXkgLSBjaG9zZUJpcnRoWzJdICsgJ+WkqSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNhdmVVc2VySW5mbygpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudXNlckltYWdlLnN1YnN0cmluZygyNykgKyAnLnBuZycpO1xyXG5cdFx0XHRcdHVuaUNsb3VkLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6dGhpcy51c2VySW1hZ2UsXHJcblx0XHRcdFx0XHRjbG91ZFBhdGg6IHRoaXMudXNlckltYWdlLnN1YnN0cmluZygyNykgKyAnLnBuZycsXHJcblx0XHRcdFx0XHRmaWxlVHlwZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6ICh1cGxvYWRTdWNjZXNzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXJJbWFnZTogdXBsb2FkU3VjY2Vzcy5maWxlSUQsXHJcblx0XHRcdFx0XHRcdFx0dXNlck5hbWU6IHRoaXMudXNlck5hbWUsXHJcblx0XHRcdFx0XHRcdFx0dXNlckFnZTogdGhpcy51c2VyQWdlLFxyXG5cdFx0XHRcdFx0XHRcdHVzZXJCaXJ0aDogdGhpcy51c2VyQmlydGgsXHJcblx0XHRcdFx0XHRcdFx0dWlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXBkYXRhVXNlcmluZm8oZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfkv67mlLnnlKjmiLfkv6Hmga8gPT0+ICcsIHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kU2hvd1RvYXN0KCfkv67mlLnmiJDlip8nLCAnc3VjY2VzcycpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxyXG5cdC5jb250ZW50e1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cdC5zYXZlX3VzZXJfYnRue1xyXG5cdFx0YmFja2dyb3VuZDogIzEyOTZEQjtjb2xvcjogI0ZGRkZGRjt3aWR0aDogODAlO2hlaWdodDogNzBycHg7bGluZS1oZWlnaHQ6IDcwcnB4O21hcmdpbjogNjBycHggYXV0byAwIGF1dG87XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!********************************************!*\
  !*** E:/XHB/uni-app/CloudText/api/mine.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.userInfo = userInfo;exports.updataUserinfo = updataUserinfo;var _request = _interopRequireDefault(__webpack_require__(/*! ../request/request.js */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n// getUserInfo\nfunction userInfo(data) {\n  return _request.default.gotocloud('userInfo', data);\n}\n\n// updataUserinfo\nfunction updataUserinfo(data) {\n  return _request.default.gotocloud('updataUserinfo', data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL21pbmUuanMiXSwibmFtZXMiOlsidXNlckluZm8iLCJkYXRhIiwicmVxdWVzdCIsImdvdG9jbG91ZCIsInVwZGF0YVVzZXJpbmZvIl0sIm1hcHBpbmdzIjoia0lBQUEsNEY7O0FBRUE7QUFDTyxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUMzQixTQUFPQyxpQkFBUUMsU0FBUixDQUFrQixVQUFsQixFQUE4QkYsSUFBOUIsQ0FBUDtBQUNIOztBQUVEO0FBQ08sU0FBU0csY0FBVCxDQUF3QkgsSUFBeEIsRUFBOEI7QUFDakMsU0FBT0MsaUJBQVFDLFNBQVIsQ0FBa0IsZ0JBQWxCLEVBQW9DRixJQUFwQyxDQUFQO0FBQ0giLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0L3JlcXVlc3QuanMnXHJcblxyXG4vLyBnZXRVc2VySW5mb1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlckluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QuZ290b2Nsb3VkKCd1c2VySW5mbycsIGRhdGEpO1xyXG59XHJcblxyXG4vLyB1cGRhdGFVc2VyaW5mb1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRhVXNlcmluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QuZ290b2Nsb3VkKCd1cGRhdGFVc2VyaW5mbycsIGRhdGEpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!***********************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/home/home.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=010163e7&mpType=page */ 34);\n/* harmony import */ var _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/home/home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxMDE2M2U3Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90YWJiYXIvaG9tZS9ob21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!*****************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/home/home.vue?vue&type=template&id=010163e7&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=010163e7&mpType=page */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_010163e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/tabbar/home/home.vue?vue&type=template&id=010163e7&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "content"),
    attrs: { _i: 0 }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!***********************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/home/home.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNsQixDQUFnQixxbkJBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/tabbar/home/home.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\nvar _login = __webpack_require__(/*! ../../../api/login.js */ 11); //\n//\n//\n//\n//\n//\nvar _default = { components: {},\n  data: function data() {\n    return {};\n\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  onShow: function onShow() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2hvbWUvaG9tZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLGtFOzs7Ozs7ZUFHQSxFQUNBLGNBREE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7OztBQUdBLEdBUkE7QUFTQSxRQVRBLG9CQVNBOztBQUVBLEdBWEE7QUFZQSxRQVpBLG9CQVlBOztBQUVBLEdBZEE7QUFlQSxhQWZBLEUiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdGxvZ2luXHJcblx0fSBmcm9tICcuLi8uLi8uLi9hcGkvbG9naW4uanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!*******************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/giftarea/giftarea.vue?mpType=page ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./giftarea.vue?vue&type=template&id=173914b2&mpType=page */ 39);\n/* harmony import */ var _giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftarea.vue?vue&type=script&lang=js&mpType=page */ 41);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/giftarea/giftarea.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2dpZnRhcmVhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzM5MTRiMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ2lmdGFyZWEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dpZnRhcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90YWJiYXIvZ2lmdGFyZWEvZ2lmdGFyZWEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!*************************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/giftarea/giftarea.vue?vue&type=template&id=173914b2&mpType=page ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./giftarea.vue?vue&type=template&id=173914b2&mpType=page */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_template_id_173914b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/tabbar/giftarea/giftarea.vue?vue&type=template&id=173914b2&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "content"),
    attrs: { _i: 0 }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!*******************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/giftarea/giftarea.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./giftarea.vue?vue&type=script&lang=js&mpType=page */ 42);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_giftarea_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9naWZ0YXJlYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dpZnRhcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/tabbar/giftarea/giftarea.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  onShow: function onShow() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2dpZnRhcmVhL2dpZnRhcmVhLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7OztBQUdBLEdBTEE7QUFNQSxRQU5BLG9CQU1BOztBQUVBLEdBUkE7QUFTQSxRQVRBLG9CQVNBOztBQUVBLEdBWEE7QUFZQSxhQVpBLEUiLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdFxyXG5cdH0sXHJcblx0b25TaG93KCkge1xyXG5cdFx0XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRcclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!***********************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/mine/mine.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine.vue?vue&type=template&id=70d7ec67&mpType=page */ 44);\n/* harmony import */ var _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.vue?vue&type=script&lang=js&mpType=page */ 46);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/mine/mine.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21pbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwZDdlYzY3Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9taW5lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9taW5lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90YWJiYXIvbWluZS9taW5lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!*****************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/mine/mine.vue?vue&type=template&id=70d7ec67&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=template&id=70d7ec67&mpType=page */ 45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_70d7ec67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 45 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/tabbar/mine/mine.vue?vue&type=template&id=70d7ec67&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content flex"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "flex align-between align-center w100"),
          attrs: { _i: 1 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "flex direction-row align-center"),
              attrs: { _i: 2 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "user_headimage"),
                  attrs: { _i: 3 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(4, "sc", "imagewhr"),
                    attrs: {
                      src: _vm._$s(4, "a-src", _vm.userinfo.userImage),
                      _i: 4
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    5,
                    "sc",
                    "flex direction-column justify-around h100 user_info_font"
                  ),
                  attrs: { _i: 5 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(6, "sc", "user_info_name"),
                      attrs: { _i: 6 }
                    },
                    [
                      _c("text", [
                        _vm._v(
                          _vm._$s(7, "t0-0", _vm._s(_vm.userinfo.userName))
                        )
                      ])
                    ]
                  ),
                  _c("view", [
                    _c("text", [
                      _vm._v(_vm._$s(9, "t0-0", _vm._s(_vm.userinfo.account)))
                    ])
                  ])
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "flex-1"),
              attrs: { _i: 10 },
              on: { click: _vm.editInformation }
            },
            [_c("text")]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 46 */
/*!***********************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/pages/tabbar/mine/mine.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=script&lang=js&mpType=page */ 47);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNsQixDQUFnQixxbkJBQUcsRUFBQyIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9taW5lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWluZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/pages/tabbar/mine/mine.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mine = __webpack_require__(/*! ../../../api/mine.js */ 32); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { userinfo: { userName: '', userImage: '', account: '' } };}, onLoad: function onLoad() {}, onShow: function onShow() {this.getUserInfo();}, methods: { getUserInfo: function getUserInfo() {var _this = this;var data = { uid: uni.getStorageSync('uid') };(0, _mine.userInfo)(data).then(function (res) {__f__(\"log\", '获取用户信息 ==> ', res, \" at pages/tabbar/mine/mine.vue:49\");_this.userinfo.account = res.account;\n        _this.userinfo.userName = res.userName == '' ? '没有昵称!' : res.userName;\n        _this.userinfo.userImage = res.userImage;\n      });\n    },\n    editInformation: function editInformation() {\n      uni.navigateTo({\n        url: '../../editInformation/editInformation' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL21pbmUvbWluZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxZQUNBLFlBREEsRUFFQSxhQUZBLEVBR0EsV0FIQSxFQURBLEdBT0EsQ0FUQSxFQVVBLE1BVkEsb0JBVUEsQ0FFQSxDQVpBLEVBYUEsTUFiQSxvQkFhQSxDQUNBLG1CQUNBLENBZkEsRUFnQkEsV0FDQSxXQURBLHlCQUNBLGtCQUNBLGFBQ0EsOEJBREEsR0FHQSwrQ0FDQSxzRUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUEsS0FYQTtBQVlBLG1CQVpBLDZCQVlBO0FBQ0E7QUFDQSxvREFEQTs7QUFHQSxLQWhCQSxFQWhCQSxFIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudCBmbGV4XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tYmV0d2VlbiBhbGlnbi1jZW50ZXIgdzEwMFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggZGlyZWN0aW9uLXJvdyBhbGlnbi1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaGVhZGltYWdlXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWFnZXdoclwiIDpzcmM9XCJ1c2VyaW5mby51c2VySW1hZ2VcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggZGlyZWN0aW9uLWNvbHVtbiBqdXN0aWZ5LWFyb3VuZCBoMTAwIHVzZXJfaW5mb19mb250XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaW5mb19uYW1lXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Pnt7dXNlcmluZm8udXNlck5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD7otKblj7c6IHt7dXNlcmluZm8uYWNjb3VudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMVwiIHN0eWxlPVwiZm9udC1zaXplOiAyN3JweDt0ZXh0LWFsaWduOiByaWdodDtcIiBAY2xpY2s9XCJlZGl0SW5mb3JtYXRpb25cIj5cclxuXHRcdFx0XHQ8dGV4dD7nvJbovpHotYTmlpkgPjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJy4uLy4uLy4uL2FwaS9taW5lLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlcmluZm86e1xyXG5cdFx0XHRcdFx0dXNlck5hbWU6JycsXHJcblx0XHRcdFx0XHR1c2VySW1hZ2U6JycsXHJcblx0XHRcdFx0XHRhY2NvdW50OiAnJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHR0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldFVzZXJJbmZvKCl7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHR1aWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndWlkJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dXNlckluZm8oZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+S/oeaBryA9PT4gJywgcmVzKTtcclxuXHRcdFx0XHRcdHRoaXMudXNlcmluZm8uYWNjb3VudCA9IHJlcy5hY2NvdW50XHJcblx0XHRcdFx0XHR0aGlzLnVzZXJpbmZvLnVzZXJOYW1lID0gcmVzLnVzZXJOYW1lID09ICcnID8gJ+ayoeacieaYteensCEnIDogcmVzLnVzZXJOYW1lIFxyXG5cdFx0XHRcdFx0dGhpcy51c2VyaW5mby51c2VySW1hZ2UgPSByZXMudXNlckltYWdlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZWRpdEluZm9ybWF0aW9uKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vLi4vZWRpdEluZm9ybWF0aW9uL2VkaXRJbmZvcm1hdGlvbidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmNvbnRlbnR7XHJcblx0XHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0fVxyXG5cdC51c2VyX2hlYWRpbWFnZXtcclxuXHRcdHdpZHRoOiAxMDBycHg7aGVpZ2h0OiAxMDBycHg7Ym9yZGVyLXJhZGl1czogMTAwJTttYXJnaW46IDAgMjBycHggMCAwO1xyXG5cdH1cclxuXHQudXNlcl9pbmZvX2ZvbnR7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdH1cclxuXHQudXNlcl9pbmZvX25hbWV7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!****************************************!*\
  !*** E:/XHB/uni-app/CloudText/App.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 49);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ0w7QUFDaEwsZ0JBQWdCLHlMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!*****************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 50);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBrQixDQUFnQix5bUJBQUcsRUFBQyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n\n  },\n  onShow: function onShow() {\n\n  },\n  onHide: function onHide() {\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVzs7QUFFcEIsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7O0FBRWxCLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXOztBQUVsQixHQVRhLEUiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdFxuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdFxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!***********************************************!*\
  !*** E:/XHB/uni-app/CloudText/store/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 52));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  // 定义变量\n  state: {\n    token: \"\" //用户token\n  },\n  getters: {\n    getToken: function getToken(state) {\n      return state.token;\n    } },\n\n  // 定义方法\n  mutations: {\n    addToken: function addToken(state, num) {\n      state.token = num;\n    } } });var _default =\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsInRva2VuIiwiZ2V0dGVycyIsImdldFRva2VuIiwibXV0YXRpb25zIiwiYWRkVG9rZW4iLCJudW0iXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFFLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUMzQjtBQUNBQyxPQUFLLEVBQUM7QUFDTEMsU0FBSyxFQUFFLEVBREYsQ0FDUTtBQURSLEdBRnFCO0FBSzNCQyxTQUFPLEVBQUM7QUFDUEMsWUFETyxvQkFDRUgsS0FERixFQUNRO0FBQ2QsYUFBT0EsS0FBSyxDQUFDQyxLQUFiO0FBQ0EsS0FITSxFQUxtQjs7QUFVM0I7QUFDQUcsV0FBUyxFQUFDO0FBQ1RDLFlBRFMsb0JBQ0FMLEtBREEsRUFDT00sR0FEUCxFQUNZO0FBQ2pCTixXQUFLLENBQUNDLEtBQU4sR0FBY0ssR0FBZDtBQUNILEtBSFEsRUFYaUIsRUFBZixDQUFiLEM7Ozs7QUFrQmVSLEsiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmNvbnN0IHN0b3JlID1uZXcgVnVleC5TdG9yZSh7XHJcblx0Ly8g5a6a5LmJ5Y+Y6YePXHJcblx0c3RhdGU6e1xyXG5cdFx0dG9rZW46IFwiXCIsXHRcdFx0Ly/nlKjmiLd0b2tlblxyXG5cdH0sXHJcblx0Z2V0dGVyczp7XHJcblx0XHRnZXRUb2tlbihzdGF0ZSl7XHJcblx0XHRcdHJldHVybiBzdGF0ZS50b2tlblxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8g5a6a5LmJ5pa55rOVXHJcblx0bXV0YXRpb25zOntcclxuXHRcdGFkZFRva2VuKHN0YXRlLCBudW0pIHtcclxuXHRcdCAgICBzdGF0ZS50b2tlbiA9IG51bVxyXG5cdFx0fSxcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 14)))

/***/ }),
/* 53 */
/*!********************************************************!*\
  !*** E:/XHB/uni-app/CloudText/static/js/UshowToast.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.UshowToast = UshowToast;function UshowToast(text, Sicon) {\n  uni.showToast({\n    title: text,\n    icon: Sicon });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RhdGljL2pzL1VzaG93VG9hc3QuanMiXSwibmFtZXMiOlsiVXNob3dUb2FzdCIsInRleHQiLCJTaWNvbiIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiJdLCJtYXBwaW5ncyI6IjhGQUFPLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxLQUExQixFQUFnQztBQUN0Q0MsS0FBRyxDQUFDQyxTQUFKLENBQWM7QUFDYkMsU0FBSyxFQUFFSixJQURNO0FBRWJLLFFBQUksRUFBRUosS0FGTyxFQUFkOztBQUlBIiwiZmlsZSI6IjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFVzaG93VG9hc3QodGV4dCwgU2ljb24pe1xyXG5cdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0dGl0bGU6IHRleHQsXHJcblx0XHRpY29uOiBTaWNvblxyXG5cdH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!*******************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/components/yq-avatar/yq-avatar.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& */ 55);\n/* harmony import */ var _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yq-avatar.vue?vue&type=script&lang=js& */ 57);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/yq-avatar/yq-avatar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3lxLWF2YXRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk1YTE1YmMmbmFtZT15cS1hdmF0YXImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi95cS1hdmF0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi95cS1hdmF0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3lxLWF2YXRhci95cS1hdmF0YXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!*****************************************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/components/yq-avatar/yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& */ 56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 56 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/components/yq-avatar/yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("image", {
      staticClass: _vm._$s(1, "sc", "my-avatar"),
      style: _vm._$s(1, "s", [_vm.iS]),
      attrs: { src: _vm._$s(1, "a-src", _vm.imgSrc.imgSrc), _i: 1 },
      on: { click: _vm.fSelect }
    }),
    _c("canvas", {
      staticClass: _vm._$s(2, "sc", "my-canvas"),
      style: _vm._$s(2, "s", { top: _vm.sT, height: _vm.csH }),
      attrs: { id: "avatar-canvas", _i: 2 }
    }),
    _c("canvas", {
      staticClass: _vm._$s(3, "sc", "oper-canvas"),
      style: _vm._$s(3, "s", { top: _vm.sT, height: _vm.csH }),
      attrs: { id: "oper-canvas", _i: 3 },
      on: { touchstart: _vm.fStart, touchmove: _vm.fMove, touchend: _vm.fEnd }
    }),
    _c("canvas", {
      staticClass: _vm._$s(4, "sc", "prv-canvas"),
      style: _vm._$s(4, "s", { height: _vm.csH, top: _vm.pT }),
      attrs: { id: "prv-canvas", _i: 4 },
      on: { touchstart: _vm.fHideImg }
    }),
    _c(
      "view",
      {
        staticClass: _vm._$s(5, "sc", "oper-wrapper"),
        style: _vm._$s(5, "s", { display: _vm.sD, top: _vm.tp }),
        attrs: { _i: 5 }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(6, "sc", "oper"), attrs: { _i: 6 } },
          [
            _vm._$s(7, "i", _vm.sO)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(7, "sc", "btn-wrapper"),
                    attrs: { _i: 7 }
                  },
                  [
                    _c(
                      "view",
                      {
                        style: _vm._$s(8, "s", { width: _vm.bW }),
                        attrs: { _i: 8 },
                        on: { click: _vm.fSelect }
                      },
                      [_c("text")]
                    ),
                    _c(
                      "view",
                      {
                        style: _vm._$s(10, "s", { width: _vm.bW }),
                        attrs: { _i: 10 },
                        on: { click: _vm.fClose }
                      },
                      [_c("text")]
                    ),
                    _c(
                      "view",
                      {
                        style: _vm._$s(12, "s", {
                          width: _vm.bW,
                          display: _vm.bD
                        }),
                        attrs: { _i: 12 },
                        on: { click: _vm.fRotate }
                      },
                      [_c("text")]
                    ),
                    _c(
                      "view",
                      {
                        style: _vm._$s(14, "s", { width: _vm.bW }),
                        attrs: { _i: 14 },
                        on: { click: _vm.fPreview }
                      },
                      [_c("text")]
                    ),
                    _c(
                      "view",
                      {
                        style: _vm._$s(16, "s", { width: _vm.bW }),
                        attrs: { _i: 16 },
                        on: { click: _vm.fUpload }
                      },
                      [_c("text")]
                    )
                  ]
                )
              : _c(
                  "view",
                  {
                    staticClass: _vm._$s(18, "sc", "clr-wrapper"),
                    attrs: { _i: 18 }
                  },
                  [
                    _c("slider", {
                      staticClass: _vm._$s(19, "sc", "my-slider"),
                      attrs: { _i: 19 },
                      on: { change: _vm.fColorChange }
                    }),
                    _c(
                      "view",
                      {
                        style: _vm._$s(20, "s", { width: _vm.bW }),
                        attrs: { _i: 20 },
                        on: { click: _vm.fPrvUpload }
                      },
                      [_c("text")]
                    )
                  ]
                )
          ]
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 57 */
/*!********************************************************************************************!*\
  !*** E:/XHB/uni-app/CloudText/components/yq-avatar/yq-avatar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./yq-avatar.vue?vue&type=script&lang=js& */ 58);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdsQixDQUFnQiwrbUJBQUcsRUFBQyIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95cS1hdmF0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4veXEtYXZhdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/XHB/uni-app/CloudText/components/yq-avatar/yq-avatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nObject.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}\nvar tH = 50;var _default =\n{\n  name: \"yq-avatar\",\n  data: function data() {\n    return {\n      csH: '0px',\n      sD: 'none',\n      sT: '-10000px',\n      pT: '-10000px',\n      iS: {},\n      sS: {},\n      sO: true,\n      bW: '19%',\n      bD: 'flex',\n      tp: 0,\n      imgSrc: {\n        imgSrc: '' } };\n\n\n  },\n  watch: {\n    avatarSrc: function avatarSrc() {\n      this.imgSrc.imgSrc = this.avatarSrc;\n    } },\n\n  props: {\n    avatarSrc: '',\n    avatarStyle: '',\n    selWidth: '',\n    selHeight: '',\n    expWidth: '',\n    expHeight: '',\n    minScale: '',\n    maxScale: '',\n    canScale: '',\n    canRotate: '',\n    lockWidth: '',\n    lockHeight: '',\n    stretch: '',\n    lock: '',\n    fileType: '',\n    noTab: '',\n    inner: '',\n    quality: '',\n    index: '',\n    bgImage: '' },\n\n  created: function created() {var _this = this;\n    this.cc = uni.createCanvasContext('avatar-canvas', this);\n    this.cco = uni.createCanvasContext('oper-canvas', this);\n    this.ccp = uni.createCanvasContext('prv-canvas', this);\n    this.qlty = parseFloat(this.quality) || 1;\n    this.imgSrc.imgSrc = this.avatarSrc;\n    this.letRotate = this.canRotate === false || this.inner === true || this.inner === 'true' || this.canRotate === 'false' ? 0 : 1;\n    this.letScale = this.canScale === false || this.canScale === 'false' ? 0 : 1;\n    this.isin = this.inner === true || this.inner === 'true' ? 1 : 0;\n    this.indx = this.index || undefined;\n    this.mnScale = parseFloat(this.minScale) || 0.3;\n    this.mxScale = parseFloat(this.maxScale) || 4;\n    this.noBar = this.noTab === true || this.noTab === 'true' ? 1 : 0;\n    this.stc = this.stretch;\n    this.lck = this.lock;\n    this.fType = this.fileType === 'jpg' ? 'jpg' : 'png';\n    if (this.isin || !this.letRotate) {\n      this.bW = '24%';\n      this.bD = 'none';\n    } else {\n      this.bW = '19%';\n      this.bD = 'flex';\n    }\n\n    if (this.noBar) {\n      this.fWindowResize();\n    } else {\n      uni.showTabBar({\n        fail: function fail() {\n          _this.noBar = 1;\n        },\n        success: function success() {\n          _this.noBar = 0;\n        },\n        complete: function complete(res) {\n          _this.fWindowResize();\n        } });\n\n    }\n  },\n  methods: {\n    fWindowResize: function fWindowResize() {\n      var sysInfo = uni.getSystemInfoSync();\n      this.platform = sysInfo.platform;\n      this.wW = sysInfo.windowWidth;\n\n\n\n\n\n      this.drawTop = 0;\n\n\n\n\n\n\n\n\n      this.wH = sysInfo.windowHeight;\n      if (!this.noBar) this.wH += tH;\n      this.csH = this.wH - tH + 'px';\n\n\n      this.tp = this.csH;\n\n\n\n\n      this.pxRatio = this.wW / 750;\n\n      var style = this.avatarStyle;\n      if (style && style !== true && (style = style.trim())) {\n        style = style.split(';');\n        var obj = {};var _iterator = _createForOfIteratorHelper(\n        style),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var v = _step.value;\n            if (!v) continue;\n            v = v.trim().split(':');\n            if (v[1].toString().indexOf('upx') >= 0) {\n              var arr = v[1].trim().split(' ');\n              for (var k in arr) {\n                if (!arr[k]) continue;\n                if (arr[k].toString().indexOf('upx') >= 0) {\n                  arr[k] = parseFloat(arr[k]) * this.pxRatio + 'px';\n                }\n              }\n              v[1] = arr.join(' ');\n            }\n            obj[v[0].trim()] = v[1].trim();\n          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n        this.iS = obj;\n      }\n\n      this.expWidth && (this.eW = this.expWidth.toString().indexOf('upx') >= 0 ? parseInt(this.expWidth) * this.pxRatio :\n      parseInt(this.expWidth));\n      this.expHeight && (this.eH = this.expHeight.toString().indexOf('upx') >= 0 ? parseInt(this.expHeight) * this.pxRatio :\n      parseInt(this.expHeight));\n\n      if (this.sD === 'flex') {\n        this.fDrawInit(true);\n      }\n      this.fHideImg();\n    },\n    fSelect: function fSelect() {var _this2 = this;\n      if (this.fSelecting) return;\n      this.fSelecting = true;\n      setTimeout(function () {\n        _this2.fSelecting = false;\n      }, 500);\n\n      uni.chooseImage({\n        count: 1,\n        sizeType: ['original', 'compressed'],\n        sourceType: ['album', 'camera'],\n        success: function success(r) {\n\n\n\n\n          uni.showLoading({\n            title: '加载中...',\n            mask: true });\n\n\n\n          var path = _this2.imgPath = r.tempFilePaths[0];\n          uni.getImageInfo({\n            src: path,\n            success: function success(r) {\n              _this2.imgWidth = r.width;\n              _this2.imgHeight = r.height;\n              _this2.path = path;\n              if (!_this2.hasSel) {\n                var style = _this2.sS || {};\n                if (_this2.selWidth && _this2.selHeight) {\n                  var sW = _this2.selWidth.toString().indexOf('upx') >= 0 ? parseInt(_this2.selWidth) * _this2.pxRatio : parseInt(\n                  _this2.selWidth),\n                  sH = _this2.selHeight.toString().indexOf('upx') >= 0 ? parseInt(_this2.selHeight) * _this2.pxRatio : parseInt(\n                  _this2.selHeight);\n                  style.width = sW + 'px';\n                  style.height = sH + 'px';\n                  style.top = (_this2.wH - sH - tH | 0) / 2 + 'px';\n                  style.left = (_this2.wW - sW | 0) / 2 + 'px';\n                } else {\n                  uni.showModal({\n                    title: '裁剪框的宽或高没有设置',\n                    showCancel: false });\n\n                  return;\n                }\n                _this2.sS = style;\n              }\n\n              if (_this2.noBar) {\n                _this2.fDrawInit(true);\n              } else {\n                uni.hideTabBar({\n                  complete: function complete() {\n                    _this2.fDrawInit(true);\n                  } });\n\n              }\n            },\n            fail: function fail() {\n              uni.showToast({\n                title: \"请选择正确图片\",\n                duration: 2000 });\n\n            },\n            complete: function complete() {\n              uni.hideLoading();\n            } });\n\n        } });\n\n    },\n    fUpload: function fUpload() {var _this3 = this;\n      if (this.fUploading) return;\n      this.fUploading = true;\n      setTimeout(function () {\n        _this3.fUploading = false;\n      }, 1000);\n\n      var style = this.sS,\n      x = parseInt(style.left),\n      y = parseInt(style.top),\n      width = parseInt(style.width),\n      height = parseInt(style.height),\n      expWidth = this.eW || width * this.pixelRatio,\n      expHeight = this.eH || height * this.pixelRatio;\n\n\n\n\n\n      uni.showLoading({\n        title: '加载中...',\n        mask: true });\n\n\n\n      this.sD = 'none';\n      this.sT = '-10000px';\n      this.hasSel = false;\n      this.fHideImg();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      uni.canvasToTempFilePath({\n        x: x,\n        y: y,\n        width: width,\n        height: height,\n        destWidth: expWidth,\n        destHeight: expHeight,\n        canvasId: 'avatar-canvas',\n        fileType: this.fType,\n        quality: this.qlty,\n        success: function success(r) {\n          r = r.tempFilePath;\n\n\n\n\n\n\n\n\n\n\n\n\n\n          _this3.$emit(\"upload\", {\n            avatar: _this3.imgSrc,\n            path: r,\n            index: _this3.indx,\n            data: _this3.rtn,\n            base64: _this3.base64 || null });\n\n\n        },\n        fail: function fail(res) {\n          uni.showToast({\n            title: \"error1\",\n            duration: 2000 });\n\n        },\n        complete: function complete() {\n          uni.hideLoading();\n          _this3.noBar || uni.showTabBar();\n          _this3.$emit(\"end\");\n        } },\n      this);\n\n    },\n    fPrvUpload: function fPrvUpload() {var _this4 = this;\n      if (this.fPrvUploading) return;\n      this.fPrvUploading = true;\n      setTimeout(function () {\n        _this4.fPrvUploading = false;\n      }, 1000);\n\n      var style = this.sS,\n      destWidth = parseInt(style.width),\n      destHeight = parseInt(style.height),\n      prvX = this.prvX,\n      prvY = this.prvY,\n      prvWidth = this.prvWidth,\n      prvHeight = this.prvHeight,\n      expWidth = this.eW || parseInt(style.width) * this.pixelRatio,\n      expHeight = this.eH || parseInt(style.height) * this.pixelRatio;\n\n\n\n\n\n      uni.showLoading({\n        title: '加载中...',\n        mask: true });\n\n\n\n      this.sD = 'none';\n      this.sT = '-10000px';\n      this.hasSel = false;\n      this.fHideImg();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      uni.canvasToTempFilePath({\n        x: prvX,\n        y: prvY,\n        width: prvWidth,\n        height: prvHeight,\n        destWidth: expWidth,\n        destHeight: expHeight,\n        canvasId: 'prv-canvas',\n        fileType: this.fType,\n        quality: this.qlty,\n        success: function success(r) {\n          r = r.tempFilePath;\n\n\n\n\n\n\n\n\n\n\n\n\n          _this4.$emit(\"upload\", {\n            avatar: _this4.imgSrc,\n            path: r,\n            index: _this4.indx,\n            data: _this4.rtn,\n            base64: _this4.base64 || null });\n\n\n        },\n        fail: function fail() {\n          uni.showToast({\n            title: \"error_prv\",\n            duration: 2000 });\n\n        },\n        complete: function complete() {\n          uni.hideLoading();\n          _this4.noBar || uni.showTabBar();\n          _this4.$emit(\"end\");\n        } },\n      this);\n\n    },\n    fDrawInit: function fDrawInit() {var _this5 = this;var ini = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var allWidth = this.wW,\n      allHeight = this.wH,\n      imgWidth = this.imgWidth,\n      imgHeight = this.imgHeight,\n      imgRadio = imgWidth / imgHeight,\n      useWidth = allWidth - 40,\n      useHeight = allHeight - tH - 80,\n      useRadio = useWidth / useHeight,\n      sW = parseInt(this.sS.width),\n      sH = parseInt(this.sS.height);\n\n      this.fixWidth = 0;\n      this.fixHeight = 0;\n      this.lckWidth = 0;\n      this.lckHeight = 0;\n      switch (this.stc) {\n        case 'x':\n          this.fixWidth = 1;\n          break;\n        case 'y':\n          this.fixHeight = 1;\n          break;\n        case 'long':\n          if (imgRadio > 1) this.fixWidth = 1;else\n          this.fixHeight = 1;\n          break;\n        case 'short':\n          if (imgRadio > 1) this.fixHeight = 1;else\n          this.fixWidth = 1;\n          break;\n        case 'longSel':\n          if (sW > sH) this.fixWidth = 1;else\n          this.fixHeight = 1;\n          break;\n        case 'shortSel':\n          if (sW > sH) this.fixHeight = 1;else\n          this.fixWidth = 1;\n          break;}\n\n      switch (this.lck) {\n        case 'x':\n          this.lckWidth = 1;\n          break;\n        case 'y':\n          this.lckHeight = 1;\n          break;\n        case 'long':\n          if (imgRadio > 1) this.lckWidth = 1;else\n          this.lckHeight = 1;\n          break;\n        case 'short':\n          if (imgRadio > 1) this.lckHeight = 1;else\n          this.lckWidth = 1;\n          break;\n        case 'longSel':\n          if (sW > sH) this.lckWidth = 1;else\n          this.lckHeight = 1;\n          break;\n        case 'shortSel':\n          if (sW > sH) this.lckHeight = 1;else\n          this.lckWidth = 1;\n          break;}\n\n      if (this.fixWidth) {\n        useWidth = sW;\n        useHeight = useWidth / imgRadio;\n      } else if (this.fixHeight) {\n        useHeight = sH;\n        useWidth = useHeight * imgRadio;\n      } else if (imgRadio < useRadio) {\n        if (imgHeight < useHeight) {\n          useWidth = imgWidth;\n          useHeight = imgHeight;\n        } else {\n          useWidth = useHeight * imgRadio;\n        }\n      } else {\n        if (imgWidth < useWidth) {\n          useWidth = imgWidth;\n          useHeight = imgHeight;\n        } else {\n          useHeight = useWidth / imgRadio;\n        }\n      }\n      if (this.isin) {\n        if (useWidth < sW) {\n          useWidth = sW;\n          useHeight = useWidth / imgRadio;\n          this.lckHeight = 0;\n        }\n        if (useHeight < sH) {\n          useHeight = sH;\n          useWidth = useHeight * imgRadio;\n          this.lckWidth = 0;\n        }\n      }\n\n      this.scaleSize = 1;\n      this.rotateDeg = 0;\n      this.posWidth = (allWidth - useWidth) / 2 | 0;\n      this.posHeight = (allHeight - useHeight - tH) / 2 | 0;\n      this.useWidth = useWidth | 0;\n      this.useHeight = useHeight | 0;\n      this.centerX = this.posWidth + useWidth / 2;\n      this.centerY = this.posHeight + useHeight / 2;\n      this.focusX = 0;\n      this.focusY = 0;\n\n      var style = this.sS,\n      left = parseInt(style.left),\n      top = parseInt(style.top),\n      width = parseInt(style.width),\n      height = parseInt(style.height),\n      canvas = this.canvas,\n      canvasOper = this.canvasOper,\n      cc = this.cc,\n      cco = this.cco;\n\n      cco.beginPath();\n      cco.setLineWidth(3);\n      cco.setGlobalAlpha(1);\n      cco.setStrokeStyle('white');\n      cco.strokeRect(left, top, width, height);\n\n      cco.setFillStyle('black');\n      cco.setGlobalAlpha(0.5);\n      cco.fillRect(0, 0, this.wW, top);\n      cco.fillRect(0, top, left, height);\n      cco.fillRect(0, top + height, this.wW, this.wH - height - top - tH);\n      cco.fillRect(left + width, top, this.wW - width - left, height);\n\n      cco.setGlobalAlpha(1);\n      cco.setStrokeStyle('red');\n      cco.moveTo(left + 15, top);\n      cco.lineTo(left, top);\n      cco.lineTo(left, top + 15);\n      cco.moveTo(left + width - 15, top);\n      cco.lineTo(left + width, top);\n      cco.lineTo(left + width, top + 15);\n      cco.moveTo(left + 15, top + height);\n      cco.lineTo(left, top + height);\n      cco.lineTo(left, top + height - 15);\n      cco.moveTo(left + width - 15, top + height);\n      cco.lineTo(left + width, top + height);\n      cco.lineTo(left + width, top + height - 15);\n      cco.stroke();\n\n      cco.draw(false, function () {\n        if (ini) {\n          _this5.sD = 'flex';\n          _this5.sT = _this5.drawTop + 'px';\n          _this5.fDrawImage(true);\n        }\n      });\n      this.$emit(\"init\");\n    },\n    fDrawImage: function fDrawImage() {var ini = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var tm_now = Date.now();\n      if (tm_now - this.drawTm < 20) return;\n      this.drawTm = tm_now;\n\n      var cc = this.cc,\n      imgWidth = this.useWidth * this.scaleSize,\n      imgHeight = this.useHeight * this.scaleSize;\n\n\n\n\n\n      if (this.bgImage) {\n\n\n\n\n        cc.drawImage(this.bgImage, 0, 0, this.wW, this.wH - tH);\n\n      } else {\n        cc.fillRect(0, 0, this.wW, this.wH - tH);\n      }\n\n      if (this.isin) {\n        var cx = this.focusX * (this.scaleSize - 1),\n        cy = this.focusY * (this.scaleSize - 1);\n\n        cc.translate(this.centerX, this.centerY);\n        cc.rotate(this.rotateDeg * Math.PI / 180);\n        cc.drawImage(this.imgPath, this.posWidth - this.centerX - cx, this.posHeight - this.centerY - cy, imgWidth, imgHeight);\n\n      } else {\n        cc.translate(this.posWidth + imgWidth / 2, this.posHeight + imgHeight / 2);\n        cc.rotate(this.rotateDeg * Math.PI / 180);\n        cc.drawImage(this.imgPath, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);\n      }\n\n      cc.draw(false);\n\n\n\n\n    },\n    fPreview: function fPreview() {var _this6 = this;\n      if (this.fPreviewing) return;\n      this.fPreviewing = true;\n      setTimeout(function () {\n        _this6.fPreviewing = false;\n      }, 1000);\n\n      var style = this.sS,\n      x = parseInt(style.left),\n      y = parseInt(style.top),\n      width = parseInt(style.width),\n      height = parseInt(style.height);\n\n\n\n\n\n      uni.showLoading({\n        title: '加载中...',\n        mask: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      uni.canvasToTempFilePath({\n        x: x,\n        y: y,\n        width: width,\n        height: height,\n        expWidth: width * this.pixelRatio,\n        expHeight: height * this.pixelRatio,\n        canvasId: 'avatar-canvas',\n        fileType: this.fType,\n        quality: this.qlty,\n        success: function success(r) {\n          _this6.prvImgTmp = r = r.tempFilePath;\n\n          var ccp = _this6.ccp,\n          prvX = _this6.wW,\n          prvY = parseInt(_this6.csH);\n\n\n\n\n\n          if (_this6.platform === 'android') {\n            prvY += tH;\n          }\n\n\n          var prvWidth = parseInt(_this6.sS.width),\n          prvHeight = parseInt(_this6.sS.height),\n          useWidth = prvX - 40,\n          useHeight = prvY - 80,\n          radio = useWidth / prvWidth,\n          rHeight = prvHeight * radio;\n          if (rHeight < useHeight) {\n            prvWidth = useWidth;\n            prvHeight = rHeight;\n          } else {\n            radio = useHeight / prvHeight;\n            prvWidth *= radio;\n            prvHeight = useHeight;\n          }\n\n          ccp.fillRect(0, 0, prvX, prvY);\n          _this6.prvX = prvX = (prvX - prvWidth) / 2 | 0;\n          _this6.prvY = prvY = (prvY - prvHeight) / 2 | 0;\n          _this6.prvWidth = prvWidth = prvWidth | 0;\n          _this6.prvHeight = prvHeight = prvHeight | 0;\n          ccp.drawImage(r, prvX, prvY, prvWidth, prvHeight);\n          ccp.draw(false);\n\n\n\n\n\n\n\n\n          _this6.sO = false;\n          // if (this.platform === 'android') this.sO = false;\n          _this6.pT = _this6.drawTop + 'px';\n        },\n        fail: function fail() {\n          uni.showToast({\n            title: \"error2\",\n            duration: 2000 });\n\n        },\n        complete: function complete() {\n          uni.hideLoading();\n        } },\n      this);\n\n    },\n    fChooseImg: function fChooseImg() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n      if (params) {\n        var sW = params.selWidth,\n        sH = params.selHeight,\n        expWidth = params.expWidth,\n        expHeight = params.expHeight,\n        quality = params.quality,\n        canRotate = params.canRotate,\n        canScale = params.canScale,\n        minScale = params.minScale,\n        maxScale = params.maxScale,\n        stretch = params.stretch,\n        fileType = params.fileType,\n        inner = params.inner,\n        lock = params.lock;\n\n        expWidth && (this.eW = expWidth.toString().indexOf('upx') >= 0 ? parseInt(expWidth) * this.pxRatio : parseInt(\n        expWidth));\n        expHeight && (this.eH = expHeight.toString().indexOf('upx') >= 0 ? parseInt(expHeight) * this.pxRatio : parseInt(\n        expHeight));\n        this.letRotate = canRotate === false || inner === true || inner === 'true' || canRotate === 'false' ? 0 : 1;\n        this.letScale = canScale === false || canScale === 'false' ? 0 : 1;\n        this.qlty = parseFloat(quality) || 1;\n        this.mnScale = parseFloat(minScale) || 0.3;\n        this.mxScale = parseFloat(maxScale) || 4;\n        this.stc = stretch;\n        this.isin = inner === true || inner === 'true' ? 1 : 0;\n        this.fType = fileType === 'jpg' ? 'jpg' : 'png';\n        this.lck = lock;\n        if (this.isin || !this.letRotate) {\n          this.bW = '24%';\n          this.bD = 'none';\n        } else {\n          this.bW = '19%';\n          this.bD = 'flex';\n        }\n\n        if (sW && sH) {\n          sW = sW.toString().indexOf('upx') >= 0 ? parseInt(sW) * this.pxRatio : parseInt(sW);\n          sH = sH.toString().indexOf('upx') >= 0 ? parseInt(sH) * this.pxRatio : parseInt(sH);\n          this.sS.width = sW + 'px';\n          this.sS.height = sH + 'px';\n          this.sS.top = (this.wH - sH - tH | 0) / 2 + 'px';\n          this.sS.left = (this.wW - sW | 0) / 2 + 'px';\n          this.hasSel = true;\n        }\n      }\n      this.rtn = data;\n      this.indx = index;\n      this.fSelect();\n    },\n    fRotate: function fRotate() {\n      this.rotateDeg += 90 - this.rotateDeg % 90;\n      this.fDrawImage();\n    },\n    fStart: function fStart(e) {\n      var touches = e.touches,\n      touch0 = touches[0],\n      touch1 = touches[1];\n\n      this.touch0 = touch0;\n      this.touch1 = touch1;\n\n      if (touch1) {\n        var x = touch1.x - touch0.x,\n        y = touch1.y - touch0.y;\n        this.fgDistance = Math.sqrt(x * x + y * y);\n      }\n    },\n    fMove: function fMove(e) {\n      var touches = e.touches,\n      touch0 = touches[0],\n      touch1 = touches[1];\n\n      if (touch1) {\n        var x = touch1.x - touch0.x,\n        y = touch1.y - touch0.y,\n        fgDistance = Math.sqrt(x * x + y * y),\n        scaleSize = 0.005 * (fgDistance - this.fgDistance),\n        beScaleSize = this.scaleSize + scaleSize;\n\n        do {\n          if (!this.letScale) break;\n          if (beScaleSize < this.mnScale) break;\n          if (beScaleSize > this.mxScale) break;\n\n          var growX = this.useWidth * scaleSize / 2,\n          growY = this.useHeight * scaleSize / 2;\n          if (this.isin) {\n            var imgWidth = this.useWidth * beScaleSize,\n            imgHeight = this.useHeight * beScaleSize,\n            l = this.posWidth - growX,\n            t = this.posHeight - growY,\n            r = l + imgWidth,\n            b = t + imgHeight,\n            left = parseInt(this.sS.left),\n            top = parseInt(this.sS.top),\n            width = parseInt(this.sS.width),\n            height = parseInt(this.sS.height),\n            right = left + width,\n            bottom = top + height,\n            cx = void 0,cy = void 0;\n\n            if (imgWidth <= width || imgHeight <= height) break;\n            this.cx = cx = this.focusX * beScaleSize - this.focusX,\n            this.cy = cy = this.focusY * beScaleSize - this.focusY;\n            this.posWidth -= growX;\n            this.posHeight -= growY;\n            if (this.posWidth - cx > left) {\n              this.posWidth = left + cx;\n            }\n            if (this.posWidth + imgWidth - cx < right) {\n              this.posWidth = right - imgWidth + cx;\n            }\n            if (this.posHeight - cy > top) {\n              this.posHeight = top + cy;\n            }\n            if (this.posHeight + imgHeight - cy < bottom) {\n              this.posHeight = bottom - imgHeight + cy;\n            }\n          } else {\n            this.posWidth -= growX;\n            this.posHeight -= growY;\n          }\n\n          this.scaleSize = beScaleSize;\n        } while (0);\n        this.fgDistance = fgDistance;\n        if (touch1.x !== touch0.x && this.letRotate) {\n          x = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x);\n          y = (touch1.y - touch0.y) / (touch1.x - touch0.x);\n          this.rotateDeg += Math.atan((y - x) / (1 + x * y)) * 180 / Math.PI;\n          this.touch0 = touch0;\n          this.touch1 = touch1;\n        }\n\n        this.fDrawImage();\n      } else if (this.touch0) {\n        var _x = touch0.x - this.touch0.x,\n        _y = touch0.y - this.touch0.y,\n        beX = this.posWidth + _x,\n        beY = this.posHeight + _y;\n        if (this.isin) {\n          var _imgWidth = this.useWidth * this.scaleSize,\n          _imgHeight = this.useHeight * this.scaleSize,\n          _l = beX,\n          _t = beY,\n          _r = _l + _imgWidth,\n          _b = _t + _imgHeight,\n          _left = parseInt(this.sS.left),\n          _top = parseInt(this.sS.top),\n          _right = _left + parseInt(this.sS.width),\n          _bottom = _top + parseInt(this.sS.height),\n          _cx,_cy;\n\n          this.cx = _cx = this.focusX * this.scaleSize - this.focusX;\n          this.cy = _cy = this.focusY * this.scaleSize - this.focusY;\n\n          if (!this.lckWidth && Math.abs(_x) < 100) {\n            if (_left < _l - _cx) {\n              this.posWidth = _left + _cx;\n            } else if (_right > _r - _cx) {\n              this.posWidth = _right - _imgWidth + _cx;\n            } else {\n              this.posWidth = beX;\n              this.focusX -= _x;\n            }\n          }\n          if (!this.lckHeight && Math.abs(_y) < 100) {\n            if (_top < _t - _cy) {\n              this.focusY -= _top + _cy - this.posHeight;\n              this.posHeight = _top + _cy;\n            } else if (_bottom > _b - _cy) {\n              this.focusY -= _bottom + _cy - (this.posHeight + _imgHeight);\n              this.posHeight = _bottom - _imgHeight + _cy;\n            } else {\n              this.posHeight = beY;\n              this.focusY -= _y;\n            }\n          }\n        } else {\n          if (Math.abs(_x) < 100 && !this.lckWidth) this.posWidth = beX;\n          if (Math.abs(_y) < 100 && !this.lckHeight) this.posHeight = beY;\n          this.focusX -= _x;\n          this.focusY -= _y;\n        }\n\n        this.touch0 = touch0;\n        this.fDrawImage();\n      }\n    },\n    fEnd: function fEnd(e) {\n      var touches = e.touches,\n      touch0 = touches && touches[0],\n      touch1 = touches && touches[1];\n      if (touch0) {\n        this.touch0 = touch0;\n      } else {\n        this.touch0 = null;\n        this.touch1 = null;\n      }\n    },\n    fHideImg: function fHideImg() {\n      this.prvImg = '';\n      this.pT = '-10000px';\n      this.sO = true;\n      this.prvImgData = null;\n      this.target = null;\n    },\n    fClose: function fClose() {\n      this.sD = 'none';\n      this.sT = '-10000px';\n      this.hasSel = false;\n      this.fHideImg();\n      this.noBar || uni.showTabBar();\n      this.$emit(\"end\");\n    },\n    fGetImgData: function fGetImgData() {var _this7 = this;\n      return new Promise(function (resolve, reject) {\n        var prvX = _this7.prvX,\n        prvY = _this7.prvY,\n        prvWidth = _this7.prvWidth,\n        prvHeight = _this7.prvHeight;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        uni.canvasGetImageData({\n          canvasId: 'prv-canvas',\n          x: prvX,\n          y: prvY,\n          width: prvWidth,\n          height: prvHeight,\n          success: function success(res) {\n            resolve(res.data);\n          },\n          fail: function fail(err) {\n            reject(err);\n          } },\n        _this7);\n\n      });\n    },\n    fColorChange: function fColorChange(e) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var tm_now, data, target, i, r, g, b, a, h, s, l, d, p, q, t, min, max, hK, tR, tG, tB, n, correctRGB, createRGB, prvX, prvY, prvWidth, prvHeight;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                tm_now = Date.now();if (!(\n                tm_now - _this8.prvTm < 100)) {_context.next = 3;break;}return _context.abrupt(\"return\");case 3:\n                _this8.prvTm = tm_now;\n\n\n\n\n\n                uni.showLoading({\n                  title: '加载中...',\n                  mask: true });if (\n\n\n\n                _this8.prvImgData) {_context.next = 11;break;}_context.next = 8;return (\n                  _this8.fGetImgData().catch(function () {\n                    uni.showToast({\n                      title: \"error_read\",\n                      duration: 2000 });\n\n                  }));case 8:if (_this8.prvImgData = _context.sent) {_context.next = 10;break;}return _context.abrupt(\"return\");case 10:\n\n                _this8.target = new Uint8ClampedArray(_this8.prvImgData.length);case 11:\n\n\n                data = _this8.prvImgData,\n                target = _this8.target,\n                i = e.detail.value;\n\n\n                if (i === 0) {\n                  target = data;\n                } else {\n                  i = (i + 100) / 200;\n                  if (i < 0.005) i = 0;\n                  if (i > 0.995) i = 1;\n                  for (n = data.length - 1; n >= 0; n -= 4) {\n                    r = data[n - 3] / 255;\n                    g = data[n - 2] / 255;\n                    b = data[n - 1] / 255;\n                    max = Math.max(r, g, b);\n                    min = Math.min(r, g, b);\n                    d = max - min;\n                    if (max === min) {\n                      h = 0;\n                    } else if (max === r && g >= b) {\n                      h = 60 * ((g - b) / d);\n                    } else if (max === r && g < b) {\n                      h = 60 * ((g - b) / d) + 360;\n                    } else if (max === g) {\n                      h = 60 * ((b - r) / d) + 120;\n                    } else if (max === b) {\n                      h = 60 * ((r - g) / d) + 240;\n                    }\n                    l = (max + min) / 2;\n                    if (l === 0 || max === min) {\n                      s = 0;\n                    } else if (0 < l && l <= 0.5) {\n                      s = d / (2 * l);\n                    } else if (l > 0.5) {\n                      s = d / (2 - 2 * l);\n                    }\n                    data[n] && (a = data[n]);\n\n                    if (i < 0.5) {\n                      s = s * i / 0.5;\n                    } else if (i > 0.5) {\n                      s = 2 * s + 2 * i - s * i / 0.5 - 1;\n                    }\n\n                    if (s === 0) {\n                      r = g = b = Math.round(l * 255);\n                    } else {\n                      if (l < 0.5) {\n                        q = l * (1 + s);\n                      } else if (l >= 0.5) {\n                        q = l + s - l * s;\n                      }\n                      p = 2 * l - q;\n                      hK = h / 360;\n                      tR = hK + 1 / 3;\n                      tG = hK;\n                      tB = hK - 1 / 3;\n                      correctRGB = function correctRGB(t) {\n                        if (t < 0) {\n                          return t + 1.0;\n                        }\n                        if (t > 1) {\n                          return t - 1.0;\n                        }\n                        return t;\n                      };\n                      createRGB = function createRGB(t) {\n                        if (t < 1 / 6) {\n                          return p + (q - p) * 6 * t;\n                        } else if (t >= 1 / 6 && t < 1 / 2) {\n                          return q;\n                        } else if (t >= 1 / 2 && t < 2 / 3) {\n                          return p + (q - p) * 6 * (2 / 3 - t);\n                        }\n                        return p;\n                      };\n                      r = tR = Math.round(createRGB(correctRGB(tR)) * 255);\n                      g = tG = Math.round(createRGB(correctRGB(tG)) * 255);\n                      b = tB = Math.round(createRGB(correctRGB(tB)) * 255);\n                    }\n                    a && (target[n] = a);\n                    target[n - 3] = r;\n                    target[n - 2] = g;\n                    target[n - 1] = b;\n                  }\n                }\n\n                prvX = _this8.prvX,\n                prvY = _this8.prvY,\n                prvWidth = _this8.prvWidth,\n                prvHeight = _this8.prvHeight;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                uni.canvasPutImageData({\n                  canvasId: 'prv-canvas',\n                  x: prvX,\n                  y: prvY,\n                  width: prvWidth,\n                  height: prvHeight,\n                  data: target,\n                  fail: function fail() {\n                    uni.showToast({\n                      title: 'error_put',\n                      duration: 2000 });\n\n                  },\n                  complete: function complete() {\n                    uni.hideLoading();\n                  } },\n                _this8);case 15:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    btop: function btop(base64) {\n      this.base64 = base64;\n      return new Promise(function (resolve, reject) {\n        var arr = base64.split(','),\n        mime = arr[0].match(/:(.*?);/)[1],\n        bstr = atob(arr[1]),\n        n = bstr.length,\n        u8arr = new Uint8Array(n);\n        while (n--) {\n          u8arr[n] = bstr.charCodeAt(n);\n        }\n        return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([u8arr], {\n          type: mime })));\n\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy95cS1hdmF0YXIveXEtYXZhdGFyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsWTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBO0FBR0Esb0JBSEE7QUFJQSxvQkFKQTtBQUtBLFlBTEE7QUFNQSxZQU5BO0FBT0EsY0FQQTtBQVFBLGVBUkE7QUFTQSxnQkFUQTtBQVVBLFdBVkE7QUFXQTtBQUNBLGtCQURBLEVBWEE7OztBQWVBLEdBbEJBO0FBbUJBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsS0FIQSxFQW5CQTs7QUF3QkE7QUFDQSxpQkFEQTtBQUVBLG1CQUZBO0FBR0EsZ0JBSEE7QUFJQSxpQkFKQTtBQUtBLGdCQUxBO0FBTUEsaUJBTkE7QUFPQSxnQkFQQTtBQVFBLGdCQVJBO0FBU0EsZ0JBVEE7QUFVQSxpQkFWQTtBQVdBLGlCQVhBO0FBWUEsa0JBWkE7QUFhQSxlQWJBO0FBY0EsWUFkQTtBQWVBLGdCQWZBO0FBZ0JBLGFBaEJBO0FBaUJBLGFBakJBO0FBa0JBLGVBbEJBO0FBbUJBLGFBbkJBO0FBb0JBLGVBcEJBLEVBeEJBOztBQThDQSxTQTlDQSxxQkE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxTQVRBOztBQVdBO0FBQ0EsR0FyRkE7QUFzRkE7QUFDQSxpQkFEQSwyQkFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBRkE7QUFHQSxhQUhBLGFBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBakJBO0FBa0JBO0FBQ0E7O0FBRUE7QUFDQSw2QkFEQTtBQUVBO0FBQ0EsOEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlEQTtBQStEQSxXQS9EQSxxQkErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBOztBQUlBO0FBQ0EsZ0JBREE7QUFFQSw0Q0FGQTtBQUdBLHVDQUhBO0FBSUE7Ozs7O0FBS0E7QUFDQSwyQkFEQTtBQUVBLHNCQUZBOzs7O0FBTUE7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQURBO0FBRUE7QUFDQSxrQ0FEQSxDQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFUQSxNQVNBO0FBQ0E7QUFDQSx3Q0FEQTtBQUVBLHFDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFIQTs7QUFLQTtBQUNBLGFBcENBO0FBcUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLDhCQUZBOztBQUlBLGFBMUNBO0FBMkNBLG9CQTNDQSxzQkEyQ0E7QUFDQTtBQUNBLGFBN0NBOztBQStDQSxTQS9EQTs7QUFpRUEsS0F2SUE7QUF3SUEsV0F4SUEscUJBd0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsSUFGQTs7QUFJQTtBQUNBLDhCQURBO0FBRUEsNkJBRkE7QUFHQSxtQ0FIQTtBQUlBLHFDQUpBO0FBS0EsbURBTEE7QUFNQSxxREFOQTs7Ozs7O0FBWUE7QUFDQSx1QkFEQTtBQUVBLGtCQUZBOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0EsWUFEQTtBQUVBLFlBRkE7QUFHQSxvQkFIQTtBQUlBLHNCQUpBO0FBS0EsMkJBTEE7QUFNQSw2QkFOQTtBQU9BLGlDQVBBO0FBUUEsNEJBUkE7QUFTQSwwQkFUQTtBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQSxpQ0FEQTtBQUVBLG1CQUZBO0FBR0EsOEJBSEE7QUFJQSw0QkFKQTtBQUtBLHlDQUxBOzs7QUFRQSxTQWpDQTtBQWtDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwwQkFGQTs7QUFJQSxTQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBNUNBO0FBNkNBLFVBN0NBOztBQStDQSxLQXRQQTtBQXVQQSxjQXZQQSx3QkF1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBOztBQUlBO0FBQ0EsdUNBREE7QUFFQSx5Q0FGQTtBQUdBLHNCQUhBO0FBSUEsc0JBSkE7QUFLQSw4QkFMQTtBQU1BLGdDQU5BO0FBT0EsbUVBUEE7QUFRQSxxRUFSQTs7Ozs7O0FBY0E7QUFDQSx1QkFEQTtBQUVBLGtCQUZBOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7QUFHQSx1QkFIQTtBQUlBLHlCQUpBO0FBS0EsMkJBTEE7QUFNQSw2QkFOQTtBQU9BLDhCQVBBO0FBUUEsNEJBUkE7QUFTQSwwQkFUQTtBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBLGlDQURBO0FBRUEsbUJBRkE7QUFHQSw4QkFIQTtBQUlBLDRCQUpBO0FBS0EseUNBTEE7OztBQVFBLFNBaENBO0FBaUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDBCQUZBOztBQUlBLFNBdENBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0EzQ0E7QUE0Q0EsVUE1Q0E7O0FBOENBLEtBdFdBO0FBdVdBLGFBdldBLHVCQXVXQTtBQUNBO0FBQ0EseUJBREE7QUFFQSw4QkFGQTtBQUdBLGdDQUhBO0FBSUEscUNBSkE7QUFLQSw4QkFMQTtBQU1BLHFDQU5BO0FBT0EscUNBUEE7QUFRQSxrQ0FSQTtBQVNBLG1DQVRBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkF0QkE7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBdEJBOztBQXdCQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLE9BUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQURBO0FBRUEsK0JBRkE7QUFHQSxtQ0FIQTtBQUlBLHFDQUpBO0FBS0EsMEJBTEE7QUFNQSxrQ0FOQTtBQU9BLGtCQVBBO0FBUUEsb0JBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQTtBQUNBLEtBbmdCQTtBQW9nQkEsY0FwZ0JBLHdCQW9nQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FEQTtBQUVBLGlEQUZBOzs7Ozs7QUFRQTs7Ozs7QUFLQTs7QUFFQSxPQVBBLE1BT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsT0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0EsS0EvaUJBO0FBZ2pCQSxZQWhqQkEsc0JBZ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLElBRkE7O0FBSUE7QUFDQSw4QkFEQTtBQUVBLDZCQUZBO0FBR0EsbUNBSEE7QUFJQSxxQ0FKQTs7Ozs7O0FBVUE7QUFDQSx1QkFEQTtBQUVBLGtCQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQSxZQURBO0FBRUEsWUFGQTtBQUdBLG9CQUhBO0FBSUEsc0JBSkE7QUFLQSx5Q0FMQTtBQU1BLDJDQU5BO0FBT0EsaUNBUEE7QUFRQSw0QkFSQTtBQVNBLDBCQVRBO0FBVUE7QUFDQTs7QUFFQTtBQUNBLDBCQURBO0FBRUEscUNBRkE7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxnREFEQTtBQUVBLDhCQUZBO0FBR0EsK0JBSEE7QUFJQSxxQ0FKQTtBQUtBLHFDQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBLFNBM0RBO0FBNERBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDBCQUZBOztBQUlBLFNBakVBO0FBa0VBO0FBQ0E7QUFDQSxTQXBFQTtBQXFFQSxVQXJFQTs7QUF1RUEsS0Fuc0JBO0FBb3NCQSxjQXBzQkEsd0JBb3NCQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLGtDQUZBO0FBR0Esb0NBSEE7QUFJQSxnQ0FKQTtBQUtBLG9DQUxBO0FBTUEsa0NBTkE7QUFPQSxrQ0FQQTtBQVFBLGtDQVJBO0FBU0EsZ0NBVEE7QUFVQSxrQ0FWQTtBQVdBLDRCQVhBO0FBWUEsMEJBWkE7O0FBY0E7QUFDQSxnQkFEQTtBQUVBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXR2QkE7QUF1dkJBLFdBdnZCQSxxQkF1dkJBO0FBQ0E7QUFDQTtBQUNBLEtBMXZCQTtBQTJ2QkEsVUEzdkJBLGtCQTJ2QkEsQ0EzdkJBLEVBMnZCQTtBQUNBO0FBQ0EseUJBREE7QUFFQSx5QkFGQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBO0FBQ0E7QUFDQSxLQXh3QkE7QUF5d0JBLFNBendCQSxpQkF5d0JBLENBendCQSxFQXl3QkE7QUFDQTtBQUNBLHlCQURBO0FBRUEseUJBRkE7O0FBSUE7QUFDQTtBQUNBLCtCQURBO0FBRUEsNkNBRkE7QUFHQSwwREFIQTtBQUlBLGdEQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBREE7QUFFQTtBQUNBO0FBQ0Esb0RBREE7QUFFQSxxQ0FGQTtBQUdBLHNDQUhBO0FBSUEsNEJBSkE7QUFLQSw2QkFMQTtBQU1BLHlDQU5BO0FBT0EsdUNBUEE7QUFRQSwyQ0FSQTtBQVNBLDZDQVRBO0FBVUEsZ0NBVkE7QUFXQSxpQ0FYQTtBQVlBLHVCQVpBLENBWUEsV0FaQTs7QUFjQTtBQUNBO0FBQ0Esa0VBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FoQ0EsTUFnQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQTdDQSxRQTZDQSxDQTdDQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0EvREEsTUErREE7QUFDQTtBQUNBLHFDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTtBQUlBO0FBQ0E7QUFDQSxzREFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSw2QkFKQTtBQUtBLDhCQUxBO0FBTUEsd0NBTkE7QUFPQSxzQ0FQQTtBQVFBLGtEQVJBO0FBU0EsbURBVEE7QUFVQSxhQVZBLENBVUEsR0FWQTs7QUFZQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsTUFFQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBdENBLE1Bc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQWw0QkE7QUFtNEJBLFFBbjRCQSxnQkFtNEJBLENBbjRCQSxFQW00QkE7QUFDQTtBQUNBLG9DQURBO0FBRUEsb0NBRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3NEJBO0FBODRCQSxZQTk0QkEsc0JBODRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXA1QkE7QUFxNUJBLFVBcjVCQSxvQkFxNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1NUJBO0FBNjVCQSxlQTc1QkEseUJBNjVCQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGtDQUZBO0FBR0Esb0NBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQSxnQ0FEQTtBQUVBLGlCQUZBO0FBR0EsaUJBSEE7QUFJQSx5QkFKQTtBQUtBLDJCQUxBO0FBTUEsaUJBTkEsbUJBTUEsR0FOQSxFQU1BO0FBQ0E7QUFDQSxXQVJBO0FBU0EsY0FUQSxnQkFTQSxHQVRBLEVBU0E7QUFDQTtBQUNBLFdBWEE7QUFZQSxjQVpBOztBQWNBLE9BbENBO0FBbUNBLEtBajhCQTtBQWs4QkEsZ0JBbDhCQSx3QkFrOEJBLENBbDhCQSxFQWs4QkE7QUFDQSxzQkFEQSxHQUNBLFVBREE7QUFFQSwyQ0FGQTtBQUdBOzs7Ozs7QUFNQTtBQUNBLGlDQURBO0FBRUEsNEJBRkEsSUFUQTs7OztBQWVBLGlDQWZBO0FBZ0JBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLG9DQUZBOztBQUlBLG1CQUxBLENBaEJBLGFBZ0JBLGlCQWhCQTs7QUF1QkEsZ0ZBdkJBOzs7QUEwQkEsb0JBMUJBLEdBMEJBLGlCQTFCQTtBQTJCQSxzQkEzQkEsR0EyQkEsYUEzQkE7QUE0QkEsaUJBNUJBLEdBNEJBLGNBNUJBOzs7QUErQkE7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUZBLE1BRUE7QUFDQTtBQUNBLHFCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQVhBLEdBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQW5CQTtBQW9CQSwrQkFwQkEsR0FvQkE7QUFDQTtBQUNBO0FBQ0EseUJBRkEsTUFFQTtBQUNBO0FBQ0EseUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFsSEEsR0FrSEEsV0FsSEE7QUFtSEEsb0JBbkhBLEdBbUhBLFdBbkhBO0FBb0hBLHdCQXBIQSxHQW9IQSxlQXBIQTtBQXFIQSx5QkFySEEsR0FxSEEsZ0JBckhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMklBO0FBQ0Esd0NBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBO0FBSUEsaUNBSkE7QUFLQSxtQ0FMQTtBQU1BLDhCQU5BO0FBT0Esc0JBUEEsa0JBT0E7QUFDQTtBQUNBLHdDQURBO0FBRUEsb0NBRkE7O0FBSUEsbUJBWkE7QUFhQSwwQkFiQSxzQkFhQTtBQUNBO0FBQ0EsbUJBZkE7QUFnQkEsc0JBaEJBLEVBM0lBOztBQTZKQSxLQS9sQ0E7QUFnbUNBLFFBaG1DQSxnQkFnbUNBLE1BaG1DQSxFQWdtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLDJCQUZBO0FBR0EsdUJBSEE7QUFJQSxpQ0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7O0FBR0EsT0FaQTtBQWFBLEtBL21DQSxFQXRGQSxFIiwiZmlsZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIG5hbWU9XCJ5cS1hdmF0YXJcIj5cclxuXHQ8dmlldz5cclxuXHRcdDxpbWFnZSA6c3JjPVwiaW1nU3JjLmltZ1NyY1wiIEBjbGljaz1cImZTZWxlY3RcIiA6c3R5bGU9XCJbIGlTIF1cIiBjbGFzcz1cIm15LWF2YXRhclwiPjwvaW1hZ2U+XHJcblx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImF2YXRhci1jYW52YXNcIiBpZD1cImF2YXRhci1jYW52YXNcIiBjbGFzcz1cIm15LWNhbnZhc1wiIDpzdHlsZT1cInt0b3A6IHNULCBoZWlnaHQ6IGNzSH1cIlxyXG5cdFx0IGRpc2FibGUtc2Nyb2xsPVwiZmFsc2VcIj48L2NhbnZhcz5cclxuXHRcdDxjYW52YXMgY2FudmFzLWlkPVwib3Blci1jYW52YXNcIiBpZD1cIm9wZXItY2FudmFzXCIgY2xhc3M9XCJvcGVyLWNhbnZhc1wiIDpzdHlsZT1cInt0b3A6IHNULCBoZWlnaHQ6IGNzSH1cIlxyXG5cdFx0IGRpc2FibGUtc2Nyb2xsPVwiZmFsc2VcIiBAdG91Y2hzdGFydD1cImZTdGFydFwiIEB0b3VjaG1vdmU9XCJmTW92ZVwiIEB0b3VjaGVuZD1cImZFbmRcIj48L2NhbnZhcz5cclxuXHRcdDxjYW52YXMgY2FudmFzLWlkPVwicHJ2LWNhbnZhc1wiIGlkPVwicHJ2LWNhbnZhc1wiIGNsYXNzPVwicHJ2LWNhbnZhc1wiIGRpc2FibGUtc2Nyb2xsPVwiZmFsc2VcIiBcclxuXHRcdEB0b3VjaHN0YXJ0PVwiZkhpZGVJbWdcIiA6c3R5bGU9XCJ7IGhlaWdodDogY3NILCB0b3A6IHBUIH1cIj48L2NhbnZhcz5cclxuXHRcdDx2aWV3IGNsYXNzPVwib3Blci13cmFwcGVyXCIgOnN0eWxlPVwie2Rpc3BsYXk6IHNELCB0b3A6dHB9XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwib3BlclwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuLXdyYXBwZXJcIiB2LWlmPVwic09cIj5cclxuXHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cImZTZWxlY3RcIiBob3Zlci1jbGFzcz1cImhvdmVyXCIgOnN0eWxlPVwie3dpZHRoOiBiV31cIj48dGV4dD7ph43pgIk8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgQGNsaWNrPVwiZkNsb3NlXCIgaG92ZXItY2xhc3M9XCJob3ZlclwiIDpzdHlsZT1cInt3aWR0aDogYld9XCI+PHRleHQ+5YWz6ZetPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cImZSb3RhdGVcIiBob3Zlci1jbGFzcz1cImhvdmVyXCIgOnN0eWxlPVwie3dpZHRoOiBiVywgZGlzcGxheTogYkR9XCI+PHRleHQ+5peL6L2sPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cImZQcmV2aWV3XCIgaG92ZXItY2xhc3M9XCJob3ZlclwiIDpzdHlsZT1cInt3aWR0aDogYld9XCI+PHRleHQ+6aKE6KeIPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cImZVcGxvYWRcIiBob3Zlci1jbGFzcz1cImhvdmVyXCIgOnN0eWxlPVwie3dpZHRoOiBiV31cIj48dGV4dD7kuIrkvKA8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNsci13cmFwcGVyXCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0PHNsaWRlciBjbGFzcz1cIm15LXNsaWRlclwiIEBjaGFuZ2U9XCJmQ29sb3JDaGFuZ2VcIiBibG9jay1zaXplPVwiMjVcIiB2YWx1ZT1cIjBcIiBtaW49XCItMTAwXCIgbWF4PVwiMTAwXCIgYWN0aXZlQ29sb3I9XCJyZWRcIlxyXG5cdFx0XHRcdFx0IGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgYmxvY2stY29sb3I9XCJncmV5XCIgc2hvdy12YWx1ZT48L3NsaWRlcj5cclxuXHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cImZQcnZVcGxvYWRcIiBob3Zlci1jbGFzcz1cImhvdmVyXCIgOnN0eWxlPVwie3dpZHRoOiBiV31cIj48dGV4dD7kuIrkvKA8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0Y29uc3QgdEggPSA1MDtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcInlxLWF2YXRhclwiLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjc0g6ICcwcHgnLFxyXG5cdFx0XHRcdHNEOiAnbm9uZScsXHJcblx0XHRcdFx0c1Q6ICctMTAwMDBweCcsXHJcblx0XHRcdFx0cFQ6ICctMTAwMDBweCcsXHJcblx0XHRcdFx0aVM6IHt9LFxyXG5cdFx0XHRcdHNTOiB7fSxcclxuXHRcdFx0XHRzTzogdHJ1ZSxcclxuXHRcdFx0XHRiVzogJzE5JScsXHJcblx0XHRcdFx0YkQ6ICdmbGV4JyxcclxuXHRcdFx0XHR0cDogMCxcclxuXHRcdFx0XHRpbWdTcmM6IHtcclxuXHRcdFx0XHRcdGltZ1NyYzogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0YXZhdGFyU3JjKCkge1xyXG5cdFx0XHRcdHRoaXMuaW1nU3JjLmltZ1NyYyA9IHRoaXMuYXZhdGFyU3JjO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0YXZhdGFyU3JjOiAnJyxcclxuXHRcdFx0YXZhdGFyU3R5bGU6ICcnLFxyXG5cdFx0XHRzZWxXaWR0aDogJycsXHJcblx0XHRcdHNlbEhlaWdodDogJycsXHJcblx0XHRcdGV4cFdpZHRoOiAnJyxcclxuXHRcdFx0ZXhwSGVpZ2h0OiAnJyxcclxuXHRcdFx0bWluU2NhbGU6ICcnLFxyXG5cdFx0XHRtYXhTY2FsZTogJycsXHJcblx0XHRcdGNhblNjYWxlOiAnJyxcclxuXHRcdFx0Y2FuUm90YXRlOiAnJyxcclxuXHRcdFx0bG9ja1dpZHRoOiAnJyxcclxuXHRcdFx0bG9ja0hlaWdodDogJycsXHJcblx0XHRcdHN0cmV0Y2g6ICcnLFxyXG5cdFx0XHRsb2NrOiAnJyxcclxuXHRcdFx0ZmlsZVR5cGU6ICcnLFxyXG5cdFx0XHRub1RhYjogJycsXHJcblx0XHRcdGlubmVyOiAnJyxcclxuXHRcdFx0cXVhbGl0eTogJycsXHJcblx0XHRcdGluZGV4OiAnJyxcclxuXHRcdFx0YmdJbWFnZTogJycsXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5jYyA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdhdmF0YXItY2FudmFzJywgdGhpcyk7XHJcblx0XHRcdHRoaXMuY2NvID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ29wZXItY2FudmFzJywgdGhpcyk7XHJcblx0XHRcdHRoaXMuY2NwID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ3Bydi1jYW52YXMnLCB0aGlzKTtcclxuXHRcdFx0dGhpcy5xbHR5ID0gcGFyc2VGbG9hdCh0aGlzLnF1YWxpdHkpIHx8IDE7XHJcblx0XHRcdHRoaXMuaW1nU3JjLmltZ1NyYyA9IHRoaXMuYXZhdGFyU3JjO1xyXG5cdFx0XHR0aGlzLmxldFJvdGF0ZSA9ICh0aGlzLmNhblJvdGF0ZSA9PT0gZmFsc2UgfHwgdGhpcy5pbm5lciA9PT0gdHJ1ZSB8fCB0aGlzLmlubmVyID09PSAndHJ1ZScgfHwgdGhpcy5jYW5Sb3RhdGUgPT09ICdmYWxzZScpID8gMCA6IDE7XHJcblx0XHRcdHRoaXMubGV0U2NhbGUgPSAodGhpcy5jYW5TY2FsZSA9PT0gZmFsc2UgfHwgdGhpcy5jYW5TY2FsZSA9PT0gJ2ZhbHNlJykgPyAwIDogMTtcclxuXHRcdFx0dGhpcy5pc2luID0gKHRoaXMuaW5uZXIgPT09IHRydWUgfHwgdGhpcy5pbm5lciA9PT0gJ3RydWUnKSA/IDEgOiAwO1xyXG5cdFx0XHR0aGlzLmluZHggPSB0aGlzLmluZGV4IHx8IHVuZGVmaW5lZDtcclxuXHRcdFx0dGhpcy5tblNjYWxlID0gcGFyc2VGbG9hdCh0aGlzLm1pblNjYWxlKSB8fCAwLjM7XHJcblx0XHRcdHRoaXMubXhTY2FsZSA9IHBhcnNlRmxvYXQodGhpcy5tYXhTY2FsZSkgfHwgNDtcclxuXHRcdFx0dGhpcy5ub0JhciA9ICh0aGlzLm5vVGFiID09PSB0cnVlIHx8IHRoaXMubm9UYWIgPT09ICd0cnVlJykgPyAxIDogMDtcclxuXHRcdFx0dGhpcy5zdGMgPSB0aGlzLnN0cmV0Y2g7XHJcblx0XHRcdHRoaXMubGNrID0gdGhpcy5sb2NrO1xyXG5cdFx0XHR0aGlzLmZUeXBlID0gdGhpcy5maWxlVHlwZSA9PT0gJ2pwZycgPyAnanBnJyA6ICdwbmcnO1xyXG5cdFx0XHRpZiAodGhpcy5pc2lufHwhdGhpcy5sZXRSb3RhdGUpIHtcclxuXHRcdFx0XHR0aGlzLmJXID0gJzI0JSc7XHJcblx0XHRcdFx0dGhpcy5iRCA9ICdub25lJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmJXID0gJzE5JSc7XHJcblx0XHRcdFx0dGhpcy5iRCA9ICdmbGV4JztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHRoaXMubm9CYXIpIHtcclxuXHRcdFx0XHR0aGlzLmZXaW5kb3dSZXNpemUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RhYkJhcih7XHJcblx0XHRcdFx0XHRmYWlsOiAoKT0+e1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5vQmFyID0gMTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoKT0+e1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5vQmFyID0gMDtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZXaW5kb3dSZXNpemUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZldpbmRvd1Jlc2l6ZSgpIHtcclxuXHRcdFx0XHRsZXQgc3lzSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHRcdHRoaXMucGxhdGZvcm0gPSBzeXNJbmZvLnBsYXRmb3JtO1xyXG5cdFx0XHRcdHRoaXMud1cgPSBzeXNJbmZvLndpbmRvd1dpZHRoO1xyXG5cclxuXHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHR0aGlzLmRyYXdUb3AgPSBzeXNJbmZvLndpbmRvd1RvcDtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEg1XHJcblx0XHRcdFx0dGhpcy5kcmF3VG9wID0gMDtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dGhpcy53SCA9IHN5c0luZm8uc2NyZWVuSGVpZ2h0IC0gc3lzSW5mby5zdGF0dXNCYXJIZWlnaHQgLSBzeXNJbmZvLnRpdGxlQmFySGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuY3NIID0gdGhpcy53SCAtIHRIICArICdweCc7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR0aGlzLndIID0gc3lzSW5mby53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdFx0aWYoIXRoaXMubm9CYXIpIHRoaXMud0ggKz0gdEg7XHJcblx0XHRcdFx0dGhpcy5jc0ggPSB0aGlzLndIIC0gdEggICsgJ3B4JztcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRwID0gdGhpcy5jc0g7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0dGhpcy50cCA9ICBzeXNJbmZvLndpbmRvd1RvcCArIHBhcnNlSW50KHRoaXMuY3NIKSsgJ3B4JztcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnB4UmF0aW8gPSB0aGlzLndXIC8gNzUwO1xyXG5cclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB0aGlzLmF2YXRhclN0eWxlO1xyXG5cdFx0XHRcdGlmIChzdHlsZSAmJiBzdHlsZSAhPT0gdHJ1ZSAmJiAoc3R5bGUgPSBzdHlsZS50cmltKCkpKSB7XHJcblx0XHRcdFx0XHRzdHlsZSA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcblx0XHRcdFx0XHRsZXQgb2JqID0ge307XHJcblx0XHRcdFx0XHRmb3IgKGxldCB2IG9mIHN0eWxlKSB7XHJcblx0XHRcdFx0XHRcdGlmICghdikgY29udGludWU7XHJcblx0XHRcdFx0XHRcdHYgPSB2LnRyaW0oKS5zcGxpdCgnOicpO1xyXG5cdFx0XHRcdFx0XHRpZiAodlsxXS50b1N0cmluZygpLmluZGV4T2YoJ3VweCcpID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYXJyID0gdlsxXS50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrIGluIGFycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFhcnJba10pIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGFycltrXS50b1N0cmluZygpLmluZGV4T2YoJ3VweCcpID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJyW2tdID0gcGFyc2VGbG9hdChhcnJba10pICogdGhpcy5weFJhdGlvICsgJ3B4JztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dlsxXSA9IGFyci5qb2luKCcgJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0b2JqW3ZbMF0udHJpbSgpXSA9IHZbMV0udHJpbSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5pUyA9IG9iajtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuZXhwV2lkdGggJiYgKHRoaXMuZVcgPSB0aGlzLmV4cFdpZHRoLnRvU3RyaW5nKCkuaW5kZXhPZigndXB4JykgPj0gMCA/IHBhcnNlSW50KHRoaXMuZXhwV2lkdGgpICogdGhpcy5weFJhdGlvIDpcclxuXHRcdFx0XHRcdHBhcnNlSW50KHRoaXMuZXhwV2lkdGgpKTtcclxuXHRcdFx0XHR0aGlzLmV4cEhlaWdodCAmJiAodGhpcy5lSCA9IHRoaXMuZXhwSGVpZ2h0LnRvU3RyaW5nKCkuaW5kZXhPZigndXB4JykgPj0gMCA/IHBhcnNlSW50KHRoaXMuZXhwSGVpZ2h0KSAqIHRoaXMucHhSYXRpbyA6XHJcblx0XHRcdFx0XHRwYXJzZUludCh0aGlzLmV4cEhlaWdodCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLnNEID09PSAnZmxleCcpIHtcclxuXHRcdFx0XHRcdHRoaXMuZkRyYXdJbml0KHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmZIaWRlSW1nKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZTZWxlY3QoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZlNlbGVjdGluZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuZlNlbGVjdGluZyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZTZWxlY3RpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdC8vICNpZm5kZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0uLi4nLFxyXG5cdFx0XHRcdFx0XHRcdG1hc2s6IHRydWVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHBhdGggPSB0aGlzLmltZ1BhdGggPSByLnRlbXBGaWxlUGF0aHNbMF07XHJcblx0XHRcdFx0XHRcdHVuaS5nZXRJbWFnZUluZm8oe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogcGF0aCxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiByID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW1nV2lkdGggPSByLndpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pbWdIZWlnaHQgPSByLmhlaWdodDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGF0aCA9IHBhdGg7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuaGFzU2VsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzdHlsZSA9IHRoaXMuc1MgfHwge307XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNlbFdpZHRoICYmIHRoaXMuc2VsSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHNXID0gdGhpcy5zZWxXaWR0aC50b1N0cmluZygpLmluZGV4T2YoJ3VweCcpID49IDAgPyBwYXJzZUludCh0aGlzLnNlbFdpZHRoKSAqIHRoaXMucHhSYXRpbyA6IHBhcnNlSW50KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlbFdpZHRoKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNIID0gdGhpcy5zZWxIZWlnaHQudG9TdHJpbmcoKS5pbmRleE9mKCd1cHgnKSA+PSAwID8gcGFyc2VJbnQodGhpcy5zZWxIZWlnaHQpICogdGhpcy5weFJhdGlvIDogcGFyc2VJbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VsSGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZS53aWR0aCA9IHNXICsgJ3B4JztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZS5oZWlnaHQgPSBzSCArICdweCc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGUudG9wID0gKCh0aGlzLndIIC0gc0ggLSB0SCl8MCkgLyAyICsgJ3B4JztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZS5sZWZ0ID0gKCh0aGlzLndXIC0gc1cpfDApIC8gMiArICdweCc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ijgeWJquahhueahOWuveaIlumrmOayoeacieiuvue9ricsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc1MgPSBzdHlsZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5ub0Jhcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZEcmF3SW5pdCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mRHJhd0luaXQodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWw6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fpgInmi6nmraPnoa7lm77niYdcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZVcGxvYWQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZlVwbG9hZGluZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuZlVwbG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZVcGxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCAxMDAwKVxyXG5cclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB0aGlzLnNTLFxyXG5cdFx0XHRcdFx0eCA9IHBhcnNlSW50KHN0eWxlLmxlZnQpLFxyXG5cdFx0XHRcdFx0eSA9IHBhcnNlSW50KHN0eWxlLnRvcCksXHJcblx0XHRcdFx0XHR3aWR0aCA9IHBhcnNlSW50KHN0eWxlLndpZHRoKSxcclxuXHRcdFx0XHRcdGhlaWdodCA9IHBhcnNlSW50KHN0eWxlLmhlaWdodCksXHJcblx0XHRcdFx0XHRleHBXaWR0aCA9IHRoaXMuZVcgfHwgKHdpZHRoKiB0aGlzLnBpeGVsUmF0aW8pLFxyXG5cdFx0XHRcdFx0ZXhwSGVpZ2h0ID0gdGhpcy5lSCB8fCAoaGVpZ2h0KiB0aGlzLnBpeGVsUmF0aW8pO1xyXG5cclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0uLi4nLFxyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHR0aGlzLnNEID0gJ25vbmUnO1xyXG5cdFx0XHRcdHRoaXMuc1QgPSAnLTEwMDAwcHgnO1xyXG5cdFx0XHRcdHRoaXMuaGFzU2VsID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mSGlkZUltZygpO1xyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR0aGlzLmNjLnRvVGVtcEZpbGVQYXRoKHtcclxuXHRcdFx0XHRcdHg6IHgsXHJcblx0XHRcdFx0XHR5OiB5LFxyXG5cdFx0XHRcdFx0d2lkdGg6IHdpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHRcdFx0XHRkZXN0V2lkdGg6IGV4cFdpZHRoLFxyXG5cdFx0XHRcdFx0ZGVzdEhlaWdodDogZXhwSGVpZ2h0LFxyXG5cdFx0XHRcdFx0ZmlsZVR5cGU6IHRoaXMuZlR5cGUsXHJcblx0XHRcdFx0XHRxdWFsaXR5OiB0aGlzLnFsdHksXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRyID0gci5hcEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KFwidXBsb2FkXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRhdmF0YXI6IHRoaXMuaW1nU3JjLFxyXG5cdFx0XHRcdFx0XHRcdHBhdGg6IHIsXHJcblx0XHRcdFx0XHRcdFx0aW5kZXg6IHRoaXMuaW5keCxcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiB0aGlzLnJ0bixcclxuXHRcdFx0XHRcdFx0XHRiYXNlNjQ6IHRoaXMuYmFzZTY0IHx8IG51bGxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJlcnJvcjFcIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub0JhciB8fCB1bmkuc2hvd1RhYkJhcigpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KFwiZW5kXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dW5pLmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcclxuXHRcdFx0XHRcdHg6IHgsXHJcblx0XHRcdFx0XHR5OiB5LFxyXG5cdFx0XHRcdFx0d2lkdGg6IHdpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHRcdFx0XHRkZXN0V2lkdGg6IGV4cFdpZHRoLFxyXG5cdFx0XHRcdFx0ZGVzdEhlaWdodDogZXhwSGVpZ2h0LFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6ICdhdmF0YXItY2FudmFzJyxcclxuXHRcdFx0XHRcdGZpbGVUeXBlOiB0aGlzLmZUeXBlLFxyXG5cdFx0XHRcdFx0cXVhbGl0eTogdGhpcy5xbHR5LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0ciA9IHIudGVtcEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdFx0dGhpcy5idG9wKHIpLnRoZW4oKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRlbWl0KFwidXBsb2FkXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdGF2YXRhcjogdGhpcy5pbWdTcmMsXHJcblx0XHRcdFx0XHRcdFx0XHRwYXRoOiByLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg6IHRoaXMuaW5keCxcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IHRoaXMucnRuLFxyXG5cdFx0XHRcdFx0XHRcdFx0YmFzZTY0OiB0aGlzLmJhc2U2NCB8fCBudWxsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0Ly8gI2lmbmRlZiBINVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KFwidXBsb2FkXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRhdmF0YXI6IHRoaXMuaW1nU3JjLFxyXG5cdFx0XHRcdFx0XHRcdHBhdGg6IHIsXHJcblx0XHRcdFx0XHRcdFx0aW5kZXg6IHRoaXMuaW5keCxcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiB0aGlzLnJ0bixcclxuXHRcdFx0XHRcdFx0XHRiYXNlNjQ6IHRoaXMuYmFzZTY0IHx8IG51bGxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiZXJyb3IxXCIsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubm9CYXIgfHwgdW5pLnNob3dUYWJCYXIoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdChcImVuZFwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0ZlBydlVwbG9hZCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mUHJ2VXBsb2FkaW5nKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5mUHJ2VXBsb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZlBydlVwbG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDEwMDApXHJcblxyXG5cdFx0XHRcdGxldCBzdHlsZSA9IHRoaXMuc1MsXHJcblx0XHRcdFx0XHRkZXN0V2lkdGggPSBwYXJzZUludChzdHlsZS53aWR0aCksXHJcblx0XHRcdFx0XHRkZXN0SGVpZ2h0ID0gcGFyc2VJbnQoc3R5bGUuaGVpZ2h0KSxcclxuXHRcdFx0XHRcdHBydlggPSB0aGlzLnBydlgsXHJcblx0XHRcdFx0XHRwcnZZID0gdGhpcy5wcnZZLFxyXG5cdFx0XHRcdFx0cHJ2V2lkdGggPSB0aGlzLnBydldpZHRoLFxyXG5cdFx0XHRcdFx0cHJ2SGVpZ2h0ID0gdGhpcy5wcnZIZWlnaHQsXHJcblx0XHRcdFx0XHRleHBXaWR0aCA9IHRoaXMuZVcgfHwgKHBhcnNlSW50KHN0eWxlLndpZHRoKSAqIHRoaXMucGl4ZWxSYXRpbyksXHJcblx0XHRcdFx0XHRleHBIZWlnaHQgPSB0aGlzLmVIIHx8IChwYXJzZUludChzdHlsZS5oZWlnaHQpICogdGhpcy5waXhlbFJhdGlvKTtcclxuXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZygpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitLi4uJyxcclxuXHRcdFx0XHRcdG1hc2s6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0dGhpcy5zRCA9ICdub25lJztcclxuXHRcdFx0XHR0aGlzLnNUID0gJy0xMDAwMHB4JztcclxuXHRcdFx0XHR0aGlzLmhhc1NlbCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZkhpZGVJbWcoKTtcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dGhpcy5jY3AudG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0eDogcHJ2WCxcclxuXHRcdFx0XHRcdHk6IHBydlksXHJcblx0XHRcdFx0XHR3aWR0aDogcHJ2V2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHBydkhlaWdodCxcclxuXHRcdFx0XHRcdGRlc3RXaWR0aDogZXhwV2lkdGgsXHJcblx0XHRcdFx0XHRkZXN0SGVpZ2h0OiBleHBIZWlnaHQsXHJcblx0XHRcdFx0XHRmaWxlVHlwZTogdGhpcy5mVHlwZSxcclxuXHRcdFx0XHRcdHF1YWxpdHk6IHRoaXMucWx0eSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyKSA9PiB7XHJcblx0XHRcdFx0XHRcdHIgPSByLmFwRmlsZVBhdGg7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJ1cGxvYWRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdGF2YXRhcjogdGhpcy5pbWdTcmMsXHJcblx0XHRcdFx0XHRcdFx0cGF0aDogcixcclxuXHRcdFx0XHRcdFx0XHRpbmRleDogdGhpcy5pbmR4LFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHRoaXMucnRuLFxyXG5cdFx0XHRcdFx0XHRcdGJhc2U2NDogdGhpcy5iYXNlNjQgfHwgbnVsbFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcImVycm9yX3BydlwiLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5vQmFyIHx8IHVuaS5zaG93VGFiQmFyKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJlbmRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0eDogcHJ2WCxcclxuXHRcdFx0XHRcdHk6IHBydlksXHJcblx0XHRcdFx0XHR3aWR0aDogcHJ2V2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHBydkhlaWdodCxcclxuXHRcdFx0XHRcdGRlc3RXaWR0aDogZXhwV2lkdGgsXHJcblx0XHRcdFx0XHRkZXN0SGVpZ2h0OiBleHBIZWlnaHQsXHJcblx0XHRcdFx0XHRjYW52YXNJZDogJ3Bydi1jYW52YXMnLFxyXG5cdFx0XHRcdFx0ZmlsZVR5cGU6IHRoaXMuZlR5cGUsXHJcblx0XHRcdFx0XHRxdWFsaXR5OiB0aGlzLnFsdHksXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRyID0gci50ZW1wRmlsZVBhdGg7XHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0XHR0aGlzLmJ0b3AocikudGhlbigocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJ1cGxvYWRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0YXZhdGFyOiB0aGlzLmltZ1NyYyxcclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg6IHIsXHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleDogdGhpcy5pbmR4LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogdGhpcy5ydG4sXHJcblx0XHRcdFx0XHRcdFx0XHRiYXNlNjQ6IHRoaXMuYmFzZTY0IHx8IG51bGxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdC8vICNpZm5kZWYgSDVcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdChcInVwbG9hZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0YXZhdGFyOiB0aGlzLmltZ1NyYyxcclxuXHRcdFx0XHRcdFx0XHRwYXRoOiByLFxyXG5cdFx0XHRcdFx0XHRcdGluZGV4OiB0aGlzLmluZHgsXHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogdGhpcy5ydG4sXHJcblx0XHRcdFx0XHRcdFx0YmFzZTY0OiB0aGlzLmJhc2U2NCB8fCBudWxsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcImVycm9yX3BydlwiLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5vQmFyIHx8IHVuaS5zaG93VGFiQmFyKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJlbmRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGZEcmF3SW5pdChpbmkgPSBmYWxzZSkge1xyXG5cdFx0XHRcdGxldCBhbGxXaWR0aCA9IHRoaXMud1csXHJcblx0XHRcdFx0XHRhbGxIZWlnaHQgPSB0aGlzLndILFxyXG5cdFx0XHRcdFx0aW1nV2lkdGggPSB0aGlzLmltZ1dpZHRoLFxyXG5cdFx0XHRcdFx0aW1nSGVpZ2h0ID0gdGhpcy5pbWdIZWlnaHQsXHJcblx0XHRcdFx0XHRpbWdSYWRpbyA9IGltZ1dpZHRoIC8gaW1nSGVpZ2h0LFxyXG5cdFx0XHRcdFx0dXNlV2lkdGggPSBhbGxXaWR0aCAtIDQwLFxyXG5cdFx0XHRcdFx0dXNlSGVpZ2h0ID0gYWxsSGVpZ2h0IC0gdEggLSA4MCxcclxuXHRcdFx0XHRcdHVzZVJhZGlvID0gdXNlV2lkdGggLyB1c2VIZWlnaHQsXHJcblx0XHRcdFx0XHRzVyA9IHBhcnNlSW50KHRoaXMuc1Mud2lkdGgpLFxyXG5cdFx0XHRcdFx0c0ggPSBwYXJzZUludCh0aGlzLnNTLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuZml4V2lkdGggPSAwO1xyXG5cdFx0XHRcdHRoaXMuZml4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR0aGlzLmxja1dpZHRoID0gMDtcclxuXHRcdFx0XHR0aGlzLmxja0hlaWdodCA9IDA7XHJcblx0XHRcdFx0c3dpdGNoICh0aGlzLnN0Yykge1xyXG5cdFx0XHRcdFx0Y2FzZSAneCc6XHJcblx0XHRcdFx0XHRcdHRoaXMuZml4V2lkdGggPSAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3knOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmZpeEhlaWdodCA9IDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbG9uZyc6XHJcblx0XHRcdFx0XHRcdGlmIChpbWdSYWRpbyA+IDEpIHRoaXMuZml4V2lkdGggPSAxO1xyXG5cdFx0XHRcdFx0XHRlbHNlIHRoaXMuZml4SGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzaG9ydCc6XHJcblx0XHRcdFx0XHRcdGlmIChpbWdSYWRpbyA+IDEpIHRoaXMuZml4SGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRcdFx0ZWxzZSB0aGlzLmZpeFdpZHRoID0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsb25nU2VsJzpcclxuXHRcdFx0XHRcdFx0aWYgKHNXID4gc0gpIHRoaXMuZml4V2lkdGggPSAxO1xyXG5cdFx0XHRcdFx0XHRlbHNlIHRoaXMuZml4SGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzaG9ydFNlbCc6XHJcblx0XHRcdFx0XHRcdGlmIChzVyA+IHNIKSB0aGlzLmZpeEhlaWdodCA9IDE7XHJcblx0XHRcdFx0XHRcdGVsc2UgdGhpcy5maXhXaWR0aCA9IDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMubGNrKSB7XHJcblx0XHRcdFx0XHRjYXNlICd4JzpcclxuXHRcdFx0XHRcdFx0dGhpcy5sY2tXaWR0aCA9IDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAneSc6XHJcblx0XHRcdFx0XHRcdHRoaXMubGNrSGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsb25nJzpcclxuXHRcdFx0XHRcdFx0aWYgKGltZ1JhZGlvID4gMSkgdGhpcy5sY2tXaWR0aCA9IDE7XHJcblx0XHRcdFx0XHRcdGVsc2UgdGhpcy5sY2tIZWlnaHQgPSAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3Nob3J0JzpcclxuXHRcdFx0XHRcdFx0aWYgKGltZ1JhZGlvID4gMSkgdGhpcy5sY2tIZWlnaHQgPSAxO1xyXG5cdFx0XHRcdFx0XHRlbHNlIHRoaXMubGNrV2lkdGggPSAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xvbmdTZWwnOlxyXG5cdFx0XHRcdFx0XHRpZiAoc1cgPiBzSCkgdGhpcy5sY2tXaWR0aCA9IDE7XHJcblx0XHRcdFx0XHRcdGVsc2UgdGhpcy5sY2tIZWlnaHQgPSAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3Nob3J0U2VsJzpcclxuXHRcdFx0XHRcdFx0aWYgKHNXID4gc0gpIHRoaXMubGNrSGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRcdFx0ZWxzZSB0aGlzLmxja1dpZHRoID0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmZpeFdpZHRoKSB7XHJcblx0XHRcdFx0XHR1c2VXaWR0aCA9IHNXO1xyXG5cdFx0XHRcdFx0dXNlSGVpZ2h0ID0gdXNlV2lkdGggLyBpbWdSYWRpbztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZml4SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHR1c2VIZWlnaHQgPSBzSDtcclxuXHRcdFx0XHRcdHVzZVdpZHRoID0gdXNlSGVpZ2h0ICogaW1nUmFkaW87XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbWdSYWRpbyA8IHVzZVJhZGlvKSB7XHJcblx0XHRcdFx0XHRpZiAoaW1nSGVpZ2h0IDwgdXNlSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdHVzZVdpZHRoID0gaW1nV2lkdGg7XHJcblx0XHRcdFx0XHRcdHVzZUhlaWdodCA9IGltZ0hlaWdodDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVzZVdpZHRoID0gdXNlSGVpZ2h0ICogaW1nUmFkaW87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChpbWdXaWR0aCA8IHVzZVdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdHVzZVdpZHRoID0gaW1nV2lkdGg7XHJcblx0XHRcdFx0XHRcdHVzZUhlaWdodCA9IGltZ0hlaWdodDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVzZUhlaWdodCA9IHVzZVdpZHRoIC8gaW1nUmFkaW87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmlzaW4pIHtcclxuXHRcdFx0XHRcdGlmICh1c2VXaWR0aCA8IHNXKSB7XHJcblx0XHRcdFx0XHRcdHVzZVdpZHRoID0gc1c7XHJcblx0XHRcdFx0XHRcdHVzZUhlaWdodCA9IHVzZVdpZHRoIC8gaW1nUmFkaW87XHJcblx0XHRcdFx0XHRcdHRoaXMubGNrSGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh1c2VIZWlnaHQgPCBzSCkge1xyXG5cdFx0XHRcdFx0XHR1c2VIZWlnaHQgPSBzSDtcclxuXHRcdFx0XHRcdFx0dXNlV2lkdGggPSB1c2VIZWlnaHQgKiBpbWdSYWRpbztcclxuXHRcdFx0XHRcdFx0dGhpcy5sY2tXaWR0aCA9IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnNjYWxlU2l6ZSA9IDE7XHJcblx0XHRcdFx0dGhpcy5yb3RhdGVEZWcgPSAwO1xyXG5cdFx0XHRcdHRoaXMucG9zV2lkdGggPSAoYWxsV2lkdGggLSB1c2VXaWR0aCkgLyAyIHwgMDtcclxuXHRcdFx0XHR0aGlzLnBvc0hlaWdodCA9IChhbGxIZWlnaHQgLSB1c2VIZWlnaHQgLSB0SCkgLyAyIHwgMDtcclxuXHRcdFx0XHR0aGlzLnVzZVdpZHRoID0gdXNlV2lkdGggfCAwO1xyXG5cdFx0XHRcdHRoaXMudXNlSGVpZ2h0ID0gdXNlSGVpZ2h0IHwgMDtcclxuXHRcdFx0XHR0aGlzLmNlbnRlclggPSB0aGlzLnBvc1dpZHRoICsgdXNlV2lkdGggLyAyO1xyXG5cdFx0XHRcdHRoaXMuY2VudGVyWSA9IHRoaXMucG9zSGVpZ2h0ICsgdXNlSGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR0aGlzLmZvY3VzWCA9IDA7XHJcblx0XHRcdFx0dGhpcy5mb2N1c1kgPSAwO1xyXG5cclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB0aGlzLnNTLFxyXG5cdFx0XHRcdFx0bGVmdCA9IHBhcnNlSW50KHN0eWxlLmxlZnQpLFxyXG5cdFx0XHRcdFx0dG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSxcclxuXHRcdFx0XHRcdHdpZHRoID0gcGFyc2VJbnQoc3R5bGUud2lkdGgpLFxyXG5cdFx0XHRcdFx0aGVpZ2h0ID0gcGFyc2VJbnQoc3R5bGUuaGVpZ2h0KSxcclxuXHRcdFx0XHRcdGNhbnZhcyA9IHRoaXMuY2FudmFzLFxyXG5cdFx0XHRcdFx0Y2FudmFzT3BlciA9IHRoaXMuY2FudmFzT3BlcixcclxuXHRcdFx0XHRcdGNjID0gdGhpcy5jYyxcclxuXHRcdFx0XHRcdGNjbyA9IHRoaXMuY2NvO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2NvLmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGNjby5zZXRMaW5lV2lkdGgoMyk7XHJcblx0XHRcdFx0Y2NvLnNldEdsb2JhbEFscGhhKDEpO1xyXG5cdFx0XHRcdGNjby5zZXRTdHJva2VTdHlsZSgnd2hpdGUnKTtcclxuXHRcdFx0XHRjY28uc3Ryb2tlUmVjdChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNjby5zZXRGaWxsU3R5bGUoJ2JsYWNrJyk7XHJcblx0XHRcdFx0Y2NvLnNldEdsb2JhbEFscGhhKDAuNSk7XHJcblx0XHRcdFx0Y2NvLmZpbGxSZWN0KDAsIDAsIHRoaXMud1csIHRvcCk7XHJcblx0XHRcdFx0Y2NvLmZpbGxSZWN0KDAsIHRvcCwgbGVmdCwgaGVpZ2h0KTtcclxuXHRcdFx0XHRjY28uZmlsbFJlY3QoMCwgdG9wICsgaGVpZ2h0LCB0aGlzLndXLCB0aGlzLndIIC0gaGVpZ2h0IC0gdG9wIC0gdEgpO1xyXG5cdFx0XHRcdGNjby5maWxsUmVjdChsZWZ0ICsgd2lkdGgsIHRvcCwgdGhpcy53VyAtIHdpZHRoIC0gbGVmdCwgaGVpZ2h0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjY28uc2V0R2xvYmFsQWxwaGEoMSk7XHJcblx0XHRcdFx0Y2NvLnNldFN0cm9rZVN0eWxlKCdyZWQnKTtcclxuXHRcdFx0XHRjY28ubW92ZVRvKGxlZnQrMTUsIHRvcCk7XHJcblx0XHRcdFx0Y2NvLmxpbmVUbyhsZWZ0LCB0b3ApO1xyXG5cdFx0XHRcdGNjby5saW5lVG8obGVmdCwgdG9wKzE1KTtcclxuXHRcdFx0XHRjY28ubW92ZVRvKGxlZnQrd2lkdGgtMTUsIHRvcCk7XHJcblx0XHRcdFx0Y2NvLmxpbmVUbyhsZWZ0K3dpZHRoLCB0b3ApO1xyXG5cdFx0XHRcdGNjby5saW5lVG8obGVmdCt3aWR0aCwgdG9wKzE1KTtcclxuXHRcdFx0XHRjY28ubW92ZVRvKGxlZnQrMTUsIHRvcCtoZWlnaHQpO1xyXG5cdFx0XHRcdGNjby5saW5lVG8obGVmdCwgdG9wK2hlaWdodCk7XHJcblx0XHRcdFx0Y2NvLmxpbmVUbyhsZWZ0LCB0b3AraGVpZ2h0LTE1KTtcclxuXHRcdFx0XHRjY28ubW92ZVRvKGxlZnQrd2lkdGgtMTUsIHRvcCtoZWlnaHQpO1xyXG5cdFx0XHRcdGNjby5saW5lVG8obGVmdCt3aWR0aCwgdG9wK2hlaWdodCk7XHJcblx0XHRcdFx0Y2NvLmxpbmVUbyhsZWZ0K3dpZHRoLCB0b3AraGVpZ2h0LTE1KTtcclxuXHRcdFx0XHRjY28uc3Ryb2tlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2NvLmRyYXcoZmFsc2UsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpbmkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zRCA9ICdmbGV4JztcclxuXHRcdFx0XHRcdFx0dGhpcy5zVCA9IHRoaXMuZHJhd1RvcCArICdweCc7XHJcblx0XHRcdFx0XHRcdHRoaXMuZkRyYXdJbWFnZSh0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwiaW5pdFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZkRyYXdJbWFnZShpbmkgPSBmYWxzZSkge1xyXG5cdFx0XHRcdGxldCB0bV9ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGlmICh0bV9ub3cgLSB0aGlzLmRyYXdUbSA8IDIwKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5kcmF3VG0gPSB0bV9ub3c7XHJcblxyXG5cdFx0XHRcdGxldCBjYyA9IHRoaXMuY2MsXHJcblx0XHRcdFx0XHRpbWdXaWR0aCA9IHRoaXMudXNlV2lkdGggKiB0aGlzLnNjYWxlU2l6ZSxcclxuXHRcdFx0XHRcdGltZ0hlaWdodCA9IHRoaXMudXNlSGVpZ2h0ICogdGhpcy5zY2FsZVNpemU7XHJcblxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1BTElQQVlcdFxyXG5cdFx0XHRcdGNjLnNhdmUoKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGhpcy5iZ0ltYWdlKSB7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0XHRjYy5jbGVhclJlY3QoMCwgMCwgdGhpcy53VywgdGhpcy53SCAtIHRIKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHRcdGNjLmRyYXdJbWFnZSh0aGlzLmJnSW1hZ2UsIDAsIDAsIHRoaXMud1csIHRoaXMud0ggLSB0SCk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2MuZmlsbFJlY3QoMCwgMCwgdGhpcy53VywgdGhpcy53SCAtIHRIKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmlzaW4pIHtcclxuXHRcdFx0XHRcdGxldCBjeCA9IHRoaXMuZm9jdXNYICogKHRoaXMuc2NhbGVTaXplIC0gMSksXHJcblx0XHRcdFx0XHRcdGN5ID0gdGhpcy5mb2N1c1kgKiAodGhpcy5zY2FsZVNpemUgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRjYy50cmFuc2xhdGUodGhpcy5jZW50ZXJYLCB0aGlzLmNlbnRlclkpO1xyXG5cdFx0XHRcdFx0Y2Mucm90YXRlKHRoaXMucm90YXRlRGVnICogTWF0aC5QSSAvIDE4MCk7XHJcblx0XHRcdFx0XHRjYy5kcmF3SW1hZ2UodGhpcy5pbWdQYXRoLCB0aGlzLnBvc1dpZHRoLXRoaXMuY2VudGVyWC1jeCwgdGhpcy5wb3NIZWlnaHQtdGhpcy5jZW50ZXJZLWN5LCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2MudHJhbnNsYXRlKHRoaXMucG9zV2lkdGggKyBpbWdXaWR0aCAvIDIsIHRoaXMucG9zSGVpZ2h0ICsgaW1nSGVpZ2h0IC8gMik7XHJcblx0XHRcdFx0XHRjYy5yb3RhdGUodGhpcy5yb3RhdGVEZWcgKiBNYXRoLlBJIC8gMTgwKTtcclxuXHRcdFx0XHRcdGNjLmRyYXdJbWFnZSh0aGlzLmltZ1BhdGgsIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNjLmRyYXcoZmFsc2UpO1xyXG5cclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0Y2MucmVzdG9yZSgpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmUHJldmlldygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mUHJldmlld2luZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuZlByZXZpZXdpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mUHJldmlld2luZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB0aGlzLnNTLFxyXG5cdFx0XHRcdFx0eCA9IHBhcnNlSW50KHN0eWxlLmxlZnQpLFxyXG5cdFx0XHRcdFx0eSA9IHBhcnNlSW50KHN0eWxlLnRvcCksXHJcblx0XHRcdFx0XHR3aWR0aCA9IHBhcnNlSW50KHN0eWxlLndpZHRoKSxcclxuXHRcdFx0XHRcdGhlaWdodCA9IHBhcnNlSW50KHN0eWxlLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WKoOi9veS4rS4uLicsXHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR0aGlzLmNjLnRvVGVtcEZpbGVQYXRoKHtcclxuXHRcdFx0XHRcdHg6IHgsXHJcblx0XHRcdFx0XHR5OiB5LFxyXG5cdFx0XHRcdFx0d2lkdGg6IHdpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHRcdFx0XHRleHBXaWR0aDogd2lkdGggKiB0aGlzLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRleHBIZWlnaHQ6IGhlaWdodCAqIHRoaXMucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGZpbGVUeXBlOiB0aGlzLmZUeXBlLFxyXG5cdFx0XHRcdFx0cXVhbGl0eTogdGhpcy5xbHR5LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcnZJbWdUbXAgPSByID0gci5hcEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHRsZXQgY2NwID0gdGhpcy5jY3AsXHJcblx0XHRcdFx0XHRcdFx0cHJ2WCA9IHRoaXMud1csXHJcblx0XHRcdFx0XHRcdFx0cHJ2WSA9IHBhcnNlSW50KHRoaXMuY3NIKSxcclxuXHRcdFx0XHRcdFx0XHRwcnZXaWR0aCA9IHBhcnNlSW50KHRoaXMuc1Mud2lkdGgpLFxyXG5cdFx0XHRcdFx0XHRcdHBydkhlaWdodCA9IHBhcnNlSW50KHRoaXMuc1MuaGVpZ2h0KSxcclxuXHRcdFx0XHRcdFx0XHR1c2VXaWR0aCA9IHBydlggLSA0MCxcclxuXHRcdFx0XHRcdFx0XHR1c2VIZWlnaHQgPSBwcnZZIC0gODAsXHJcblx0XHRcdFx0XHRcdFx0cmFkaW8gPSB1c2VXaWR0aCAvIHBydldpZHRoLFxyXG5cdFx0XHRcdFx0XHRcdHJIZWlnaHQgPSBwcnZIZWlnaHQgKiByYWRpbztcclxuXHRcdFx0XHRcdFx0aWYgKHJIZWlnaHQgPCB1c2VIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0XHRwcnZXaWR0aCA9IHVzZVdpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdHBydkhlaWdodCA9IHJIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmFkaW8gPSB1c2VIZWlnaHQgLyBwcnZIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0cHJ2V2lkdGggKj0gcmFkaW87XHJcblx0XHRcdFx0XHRcdFx0cHJ2SGVpZ2h0ID0gdXNlSGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNjcC5maWxsUmVjdCgwLCAwLCBwcnZYLCBwcnZZKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcnZYID0gcHJ2WCA9ICgocHJ2WCAtIHBydldpZHRoKSAvIDIpIHwgMDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcnZZID0gcHJ2WSA9ICgocHJ2WSAtIHBydkhlaWdodCkgLyAyKSB8IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJ2V2lkdGggPSBwcnZXaWR0aCA9IHBydldpZHRoIHwgMDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcnZIZWlnaHQgPSBwcnZIZWlnaHQgPSBwcnZIZWlnaHQgfCAwO1xyXG5cdFx0XHRcdFx0XHRjY3AuZHJhd0ltYWdlKHIsIHBydlgsIHBydlksIHBydldpZHRoLCBwcnZIZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRjY3AuZHJhdyhmYWxzZSk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLnNPID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMucFQgPSAnMCc7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJlcnJvcjJcIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0eDogeCxcclxuXHRcdFx0XHRcdHk6IHksXHJcblx0XHRcdFx0XHR3aWR0aDogd2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IGhlaWdodCxcclxuXHRcdFx0XHRcdGV4cFdpZHRoOiB3aWR0aCAqIHRoaXMucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGV4cEhlaWdodDogaGVpZ2h0ICogdGhpcy5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6ICdhdmF0YXItY2FudmFzJyxcclxuXHRcdFx0XHRcdGZpbGVUeXBlOiB0aGlzLmZUeXBlLFxyXG5cdFx0XHRcdFx0cXVhbGl0eTogdGhpcy5xbHR5LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcnZJbWdUbXAgPSByID0gci50ZW1wRmlsZVBhdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgY2NwID0gdGhpcy5jY3AsXHJcblx0XHRcdFx0XHRcdFx0cHJ2WCA9IHRoaXMud1csXHJcblx0XHRcdFx0XHRcdFx0cHJ2WSA9IHBhcnNlSW50KHRoaXMuY3NIKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vICNpZm5kZWYgSDV8fE1QLVdFSVhJTnx8QVBQLVBMVVNcclxuXHRcdFx0XHRcdFx0cHJ2WSArPSB0SDtcclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0cHJ2WSArPSB0SDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRcdGxldCBwcnZXaWR0aCA9IHBhcnNlSW50KHRoaXMuc1Mud2lkdGgpLFxyXG5cdFx0XHRcdFx0XHRcdHBydkhlaWdodCA9IHBhcnNlSW50KHRoaXMuc1MuaGVpZ2h0KSxcclxuXHRcdFx0XHRcdFx0XHR1c2VXaWR0aCA9IHBydlggLSA0MCxcclxuXHRcdFx0XHRcdFx0XHR1c2VIZWlnaHQgPSBwcnZZIC0gODAsXHJcblx0XHRcdFx0XHRcdFx0cmFkaW8gPSB1c2VXaWR0aCAvIHBydldpZHRoLFxyXG5cdFx0XHRcdFx0XHRcdHJIZWlnaHQgPSBwcnZIZWlnaHQgKiByYWRpbztcclxuXHRcdFx0XHRcdFx0aWYgKHJIZWlnaHQgPCB1c2VIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0XHRwcnZXaWR0aCA9IHVzZVdpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdHBydkhlaWdodCA9IHJIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmFkaW8gPSB1c2VIZWlnaHQgLyBwcnZIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0cHJ2V2lkdGggKj0gcmFkaW87XHJcblx0XHRcdFx0XHRcdFx0cHJ2SGVpZ2h0ID0gdXNlSGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRjY3AuZmlsbFJlY3QoMCwgMCwgcHJ2WCwgcHJ2WSk7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJ2WCA9IHBydlggPSAoKHBydlggLSBwcnZXaWR0aCkgLyAyKSB8IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJ2WSA9IHBydlkgPSAoKHBydlkgLSBwcnZIZWlnaHQpIC8gMikgfCAwO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBydldpZHRoID0gcHJ2V2lkdGggPSBwcnZXaWR0aCB8IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJ2SGVpZ2h0ID0gcHJ2SGVpZ2h0ID0gcHJ2SGVpZ2h0IHwgMDtcclxuXHRcdFx0XHRcdFx0Y2NwLmRyYXdJbWFnZShyLCBwcnZYLCBwcnZZLCBwcnZXaWR0aCwgcHJ2SGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0Y2NwLmRyYXcoZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0XHRcdHRoaXMuYnRvcChyKS50aGVuKChyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zTyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucFQgPSB0aGlzLmRyYXdUb3AgKyAncHgnO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMuc08gPSBmYWxzZTsgXHJcblx0XHRcdFx0XHRcdC8vIGlmICh0aGlzLnBsYXRmb3JtID09PSAnYW5kcm9pZCcpIHRoaXMuc08gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wVCA9IHRoaXMuZHJhd1RvcCArICdweCc7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJlcnJvcjJcIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0ZkNob29zZUltZyhpbmRleCA9IHVuZGVmaW5lZCwgcGFyYW1zID0gdW5kZWZpbmVkLCBkYXRhID0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aWYgKHBhcmFtcykge1xyXG5cdFx0XHRcdFx0bGV0IHNXID0gcGFyYW1zLnNlbFdpZHRoLFxyXG5cdFx0XHRcdFx0XHRzSCA9IHBhcmFtcy5zZWxIZWlnaHQsXHJcblx0XHRcdFx0XHRcdGV4cFdpZHRoID0gcGFyYW1zLmV4cFdpZHRoLFxyXG5cdFx0XHRcdFx0XHRleHBIZWlnaHQgPSBwYXJhbXMuZXhwSGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRxdWFsaXR5ID0gcGFyYW1zLnF1YWxpdHksXHJcblx0XHRcdFx0XHRcdGNhblJvdGF0ZSA9IHBhcmFtcy5jYW5Sb3RhdGUsXHJcblx0XHRcdFx0XHRcdGNhblNjYWxlID0gcGFyYW1zLmNhblNjYWxlLFxyXG5cdFx0XHRcdFx0XHRtaW5TY2FsZSA9IHBhcmFtcy5taW5TY2FsZSxcclxuXHRcdFx0XHRcdFx0bWF4U2NhbGUgPSBwYXJhbXMubWF4U2NhbGUsXHJcblx0XHRcdFx0XHRcdHN0cmV0Y2ggPSBwYXJhbXMuc3RyZXRjaCxcclxuXHRcdFx0XHRcdFx0ZmlsZVR5cGUgPSBwYXJhbXMuZmlsZVR5cGUsXHJcblx0XHRcdFx0XHRcdGlubmVyID0gcGFyYW1zLmlubmVyLFxyXG5cdFx0XHRcdFx0XHRsb2NrID0gcGFyYW1zLmxvY2s7XHJcblxyXG5cdFx0XHRcdFx0ZXhwV2lkdGggJiYgKHRoaXMuZVcgPSBleHBXaWR0aC50b1N0cmluZygpLmluZGV4T2YoJ3VweCcpID49IDAgPyBwYXJzZUludChleHBXaWR0aCkgKiB0aGlzLnB4UmF0aW8gOiBwYXJzZUludChcclxuXHRcdFx0XHRcdFx0ZXhwV2lkdGgpKTtcclxuXHRcdFx0XHRcdGV4cEhlaWdodCAmJiAodGhpcy5lSCA9IGV4cEhlaWdodC50b1N0cmluZygpLmluZGV4T2YoJ3VweCcpID49IDAgPyBwYXJzZUludChleHBIZWlnaHQpICogdGhpcy5weFJhdGlvIDogcGFyc2VJbnQoXHJcblx0XHRcdFx0XHRcdGV4cEhlaWdodCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5sZXRSb3RhdGUgPSAoY2FuUm90YXRlID09PSBmYWxzZSB8fCBpbm5lciA9PT0gdHJ1ZSB8fCBpbm5lciA9PT0gJ3RydWUnIHx8IGNhblJvdGF0ZSA9PT0gJ2ZhbHNlJykgPyAwIDogMTtcclxuXHRcdFx0XHRcdHRoaXMubGV0U2NhbGUgPSAoY2FuU2NhbGUgPT09IGZhbHNlIHx8IGNhblNjYWxlID09PSAnZmFsc2UnKSA/IDAgOiAxO1xyXG5cdFx0XHRcdFx0dGhpcy5xbHR5ID0gcGFyc2VGbG9hdChxdWFsaXR5KSB8fCAxO1xyXG5cdFx0XHRcdFx0dGhpcy5tblNjYWxlID0gcGFyc2VGbG9hdChtaW5TY2FsZSkgfHwgMC4zO1xyXG5cdFx0XHRcdFx0dGhpcy5teFNjYWxlID0gcGFyc2VGbG9hdChtYXhTY2FsZSkgfHwgNDtcclxuXHRcdFx0XHRcdHRoaXMuc3RjID0gc3RyZXRjaDtcclxuXHRcdFx0XHRcdHRoaXMuaXNpbiA9IChpbm5lciA9PT0gdHJ1ZSB8fCBpbm5lciA9PT0gJ3RydWUnKSA/IDEgOiAwO1xyXG5cdFx0XHRcdFx0dGhpcy5mVHlwZSA9IGZpbGVUeXBlID09PSAnanBnJyA/ICdqcGcnIDogJ3BuZyc7XHJcblx0XHRcdFx0XHR0aGlzLmxjayA9IGxvY2s7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5pc2lufHwhdGhpcy5sZXRSb3RhdGUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5iVyA9ICcyNCUnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmJEID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5iVyA9ICcxOSUnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmJEID0gJ2ZsZXgnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChzVyAmJiBzSCkge1xyXG5cdFx0XHRcdFx0XHRzVyA9IHNXLnRvU3RyaW5nKCkuaW5kZXhPZigndXB4JykgPj0gMCA/IHBhcnNlSW50KHNXKSAqIHRoaXMucHhSYXRpbyA6IHBhcnNlSW50KHNXKTtcclxuXHRcdFx0XHRcdFx0c0ggPSBzSC50b1N0cmluZygpLmluZGV4T2YoJ3VweCcpID49IDAgPyBwYXJzZUludChzSCkgKiB0aGlzLnB4UmF0aW8gOiBwYXJzZUludChzSCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc1Mud2lkdGggPSBzVyArICdweCc7XHJcblx0XHRcdFx0XHRcdHRoaXMuc1MuaGVpZ2h0ID0gc0ggKyAncHgnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNTLnRvcCA9ICgodGhpcy53SCAtIHNIIC0gdEgpfDApIC8gMiArICdweCc7XHJcblx0XHRcdFx0XHRcdHRoaXMuc1MubGVmdCA9ICgodGhpcy53VyAtIHNXKXwwKSAvIDIgKyAncHgnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhhc1NlbCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucnRuID0gZGF0YTtcclxuXHRcdFx0XHR0aGlzLmluZHggPSBpbmRleDtcclxuXHRcdFx0XHR0aGlzLmZTZWxlY3QoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZlJvdGF0ZSgpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0ZURlZyArPSA5MCAtIHRoaXMucm90YXRlRGVnICUgOTA7XHJcblx0XHRcdFx0dGhpcy5mRHJhd0ltYWdlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZTdGFydChlKSB7XHJcblx0XHRcdFx0bGV0IHRvdWNoZXMgPSBlLnRvdWNoZXMsXHJcblx0XHRcdFx0XHR0b3VjaDAgPSB0b3VjaGVzWzBdLFxyXG5cdFx0XHRcdFx0dG91Y2gxID0gdG91Y2hlc1sxXTtcclxuXHJcblx0XHRcdFx0dGhpcy50b3VjaDAgPSB0b3VjaDA7XHJcblx0XHRcdFx0dGhpcy50b3VjaDEgPSB0b3VjaDE7XHJcblxyXG5cdFx0XHRcdGlmICh0b3VjaDEpIHtcclxuXHRcdFx0XHRcdGxldCB4ID0gdG91Y2gxLnggLSB0b3VjaDAueCxcclxuXHRcdFx0XHRcdFx0eSA9IHRvdWNoMS55IC0gdG91Y2gwLnk7XHJcblx0XHRcdFx0XHR0aGlzLmZnRGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmTW92ZShlKSB7XHJcblx0XHRcdFx0bGV0IHRvdWNoZXMgPSBlLnRvdWNoZXMsXHJcblx0XHRcdFx0XHR0b3VjaDAgPSB0b3VjaGVzWzBdLFxyXG5cdFx0XHRcdFx0dG91Y2gxID0gdG91Y2hlc1sxXTtcclxuXHJcblx0XHRcdFx0aWYgKHRvdWNoMSkge1xyXG5cdFx0XHRcdFx0bGV0IHggPSB0b3VjaDEueCAtIHRvdWNoMC54LFxyXG5cdFx0XHRcdFx0XHR5ID0gdG91Y2gxLnkgLSB0b3VjaDAueSxcclxuXHRcdFx0XHRcdFx0ZmdEaXN0YW5jZSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSxcclxuXHRcdFx0XHRcdFx0c2NhbGVTaXplID0gMC4wMDUgKiAoZmdEaXN0YW5jZSAtIHRoaXMuZmdEaXN0YW5jZSksXHJcblx0XHRcdFx0XHRcdGJlU2NhbGVTaXplID0gdGhpcy5zY2FsZVNpemUgKyBzY2FsZVNpemU7XHJcblxyXG5cdFx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMubGV0U2NhbGUpIGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRpZiAoYmVTY2FsZVNpemUgPCB0aGlzLm1uU2NhbGUpIGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRpZiAoYmVTY2FsZVNpemUgPiB0aGlzLm14U2NhbGUpIGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0bGV0IGdyb3dYID0gdGhpcy51c2VXaWR0aCAqIHNjYWxlU2l6ZSAvIDIsXHJcblx0XHRcdFx0XHRcdFx0Z3Jvd1kgPSB0aGlzLnVzZUhlaWdodCAqIHNjYWxlU2l6ZSAvIDI7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmlzaW4pIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaW1nV2lkdGggPSB0aGlzLnVzZVdpZHRoICogYmVTY2FsZVNpemUsXHJcblx0XHRcdFx0XHRcdFx0XHRpbWdIZWlnaHQgPSB0aGlzLnVzZUhlaWdodCAqIGJlU2NhbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRcdFx0bCA9IHRoaXMucG9zV2lkdGggLSBncm93WCxcclxuXHRcdFx0XHRcdFx0XHRcdHQgPSB0aGlzLnBvc0hlaWdodCAtIGdyb3dZLFxyXG5cdFx0XHRcdFx0XHRcdFx0ciA9IGwgKyBpbWdXaWR0aCxcclxuXHRcdFx0XHRcdFx0XHRcdGIgPSB0ICsgaW1nSGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdFx0bGVmdCA9IHBhcnNlSW50KHRoaXMuc1MubGVmdCksXHJcblx0XHRcdFx0XHRcdFx0XHR0b3AgPSBwYXJzZUludCh0aGlzLnNTLnRvcCksXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aCA9IHBhcnNlSW50KHRoaXMuc1Mud2lkdGgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5zUy5oZWlnaHQpLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgd2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRib3R0b20gPSB0b3AgKyBoZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHRjeCwgY3k7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChpbWdXaWR0aCA8PSB3aWR0aCB8fCBpbWdIZWlnaHQgPD0gaGVpZ2h0KSBicmVhaztcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN4ID0gY3ggPSB0aGlzLmZvY3VzWCAqIGJlU2NhbGVTaXplIC0gdGhpcy5mb2N1c1gsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN5ID0gY3kgPSB0aGlzLmZvY3VzWSAqIGJlU2NhbGVTaXplIC0gdGhpcy5mb2N1c1k7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3NXaWR0aCAtPSBncm93WDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBvc0hlaWdodCAtPSBncm93WTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wb3NXaWR0aCAtIGN4ID4gbGVmdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wb3NXaWR0aCA9IGxlZnQgKyBjeDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucG9zV2lkdGggKyBpbWdXaWR0aCAtIGN4IDwgcmlnaHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucG9zV2lkdGggPSByaWdodCAtIGltZ1dpZHRoICsgY3g7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnBvc0hlaWdodCAtIGN5ID4gdG9wKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBvc0hlaWdodCA9IHRvcCArIGN5O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wb3NIZWlnaHQgKyBpbWdIZWlnaHQgLSBjeSA8IGJvdHRvbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wb3NIZWlnaHQgPSBib3R0b20gLSBpbWdIZWlnaHQgKyBjeTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3NXaWR0aCAtPSBncm93WDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBvc0hlaWdodCAtPSBncm93WTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5zY2FsZVNpemUgPSBiZVNjYWxlU2l6ZTtcclxuXHRcdFx0XHRcdH0gd2hpbGUgKDApO1xyXG5cdFx0XHRcdFx0dGhpcy5mZ0Rpc3RhbmNlID0gZmdEaXN0YW5jZTtcclxuXHRcdFx0XHRcdGlmICh0b3VjaDEueCAhPT0gdG91Y2gwLnggJiYgdGhpcy5sZXRSb3RhdGUpIHtcclxuXHRcdFx0XHRcdFx0eCA9ICh0aGlzLnRvdWNoMS55IC0gdGhpcy50b3VjaDAueSkgLyAodGhpcy50b3VjaDEueCAtIHRoaXMudG91Y2gwLngpO1xyXG5cdFx0XHRcdFx0XHR5ID0gKHRvdWNoMS55IC0gdG91Y2gwLnkpIC8gKHRvdWNoMS54IC0gdG91Y2gwLngpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJvdGF0ZURlZyArPSBNYXRoLmF0YW4oKHkgLSB4KSAvICgxICsgeCAqIHkpKSAqIDE4MCAvIE1hdGguUEk7XHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2gwID0gdG91Y2gwO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvdWNoMSA9IHRvdWNoMTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLmZEcmF3SW1hZ2UoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudG91Y2gwKSB7XHJcblx0XHRcdFx0XHRsZXQgeCA9IHRvdWNoMC54IC0gdGhpcy50b3VjaDAueCxcclxuXHRcdFx0XHRcdFx0eSA9IHRvdWNoMC55IC0gdGhpcy50b3VjaDAueSxcclxuXHRcdFx0XHRcdFx0YmVYID0gdGhpcy5wb3NXaWR0aCArIHgsXHJcblx0XHRcdFx0XHRcdGJlWSA9IHRoaXMucG9zSGVpZ2h0ICsgeTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzaW4pIHtcclxuXHRcdFx0XHRcdFx0bGV0IGltZ1dpZHRoID0gdGhpcy51c2VXaWR0aCAqIHRoaXMuc2NhbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRcdGltZ0hlaWdodCA9IHRoaXMudXNlSGVpZ2h0ICogdGhpcy5zY2FsZVNpemUsXHJcblx0XHRcdFx0XHRcdFx0bCA9IGJlWCxcclxuXHRcdFx0XHRcdFx0XHR0ID0gYmVZLFxyXG5cdFx0XHRcdFx0XHRcdHIgPSBsICsgaW1nV2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0YiA9IHQgKyBpbWdIZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0bGVmdCA9IHBhcnNlSW50KHRoaXMuc1MubGVmdCksXHJcblx0XHRcdFx0XHRcdFx0dG9wID0gcGFyc2VJbnQodGhpcy5zUy50b3ApLFxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHBhcnNlSW50KHRoaXMuc1Mud2lkdGgpLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA9IHRvcCArIHBhcnNlSW50KHRoaXMuc1MuaGVpZ2h0KSxcclxuXHRcdFx0XHRcdFx0XHRjeCwgY3k7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmN4ID0gY3ggPSB0aGlzLmZvY3VzWCAqIHRoaXMuc2NhbGVTaXplIC0gdGhpcy5mb2N1c1g7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3kgPSBjeSA9IHRoaXMuZm9jdXNZICogdGhpcy5zY2FsZVNpemUgLSB0aGlzLmZvY3VzWTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5sY2tXaWR0aCAmJiBNYXRoLmFicyh4KSA8IDEwMCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChsZWZ0IDwgbCAtIGN4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBvc1dpZHRoID0gbGVmdCArIGN4O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmlnaHQgPiByIC0gY3gpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucG9zV2lkdGggPSByaWdodCAtIGltZ1dpZHRoICsgY3g7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucG9zV2lkdGggPSBiZVg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvY3VzWCAtPSB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMubGNrSGVpZ2h0ICYmIE1hdGguYWJzKHkpIDwgMTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRvcCA8IHQgLSBjeSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mb2N1c1kgLT0gKHRvcCArIGN5IC0gdGhpcy5wb3NIZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wb3NIZWlnaHQgPSB0b3AgKyBjeTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGJvdHRvbSA+IGIgLSBjeSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mb2N1c1kgLT0gKGJvdHRvbSArIGN5IC0gKHRoaXMucG9zSGVpZ2h0ICsgaW1nSGVpZ2h0KSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBvc0hlaWdodCA9IGJvdHRvbSAtIGltZ0hlaWdodCArIGN5O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBvc0hlaWdodCA9IGJlWTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9jdXNZIC09IHk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoeCkgPCAxMDAgJiYgIXRoaXMubGNrV2lkdGgpIHRoaXMucG9zV2lkdGggPSBiZVg7XHJcblx0XHRcdFx0XHRcdGlmIChNYXRoLmFicyh5KSA8IDEwMCAmJiAhdGhpcy5sY2tIZWlnaHQpIHRoaXMucG9zSGVpZ2h0ID0gYmVZO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzWCAtPSB4O1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzWSAtPSB5O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMudG91Y2gwID0gdG91Y2gwO1xyXG5cdFx0XHRcdFx0dGhpcy5mRHJhd0ltYWdlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmRW5kKGUpIHtcclxuXHRcdFx0XHRsZXQgdG91Y2hlcyA9IGUudG91Y2hlcyxcclxuXHRcdFx0XHRcdHRvdWNoMCA9IHRvdWNoZXMgJiYgdG91Y2hlc1swXSxcclxuXHRcdFx0XHRcdHRvdWNoMSA9IHRvdWNoZXMgJiYgdG91Y2hlc1sxXTtcclxuXHRcdFx0XHRpZiAodG91Y2gwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoMCA9IHRvdWNoMDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy50b3VjaDAgPSBudWxsO1xyXG5cdFx0XHRcdFx0dGhpcy50b3VjaDEgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZkhpZGVJbWcoKSB7XHJcblx0XHRcdFx0dGhpcy5wcnZJbWcgPSAnJztcclxuXHRcdFx0XHR0aGlzLnBUID0gJy0xMDAwMHB4JztcclxuXHRcdFx0XHR0aGlzLnNPID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnBydkltZ0RhdGEgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZkNsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuc0QgPSAnbm9uZSc7XHJcblx0XHRcdFx0dGhpcy5zVCA9ICctMTAwMDBweCc7XHJcblx0XHRcdFx0dGhpcy5oYXNTZWwgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZIaWRlSW1nKCk7XHJcblx0XHRcdFx0dGhpcy5ub0JhciB8fCB1bmkuc2hvd1RhYkJhcigpO1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJlbmRcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZHZXRJbWdEYXRhKCkge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcHJ2WCA9IHRoaXMucHJ2WCxcclxuXHRcdFx0XHRcdFx0cHJ2WSA9IHRoaXMucHJ2WSxcclxuXHRcdFx0XHRcdFx0cHJ2V2lkdGggPSB0aGlzLnBydldpZHRoLFxyXG5cdFx0XHRcdFx0XHRwcnZIZWlnaHQgPSB0aGlzLnBydkhlaWdodDtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHRcdHRoaXMuY2NwLmdldEltYWdlRGF0YSh7XHJcblx0XHRcdFx0XHRcdHg6IHBydlgsXHJcblx0XHRcdFx0XHRcdHk6IHBydlksXHJcblx0XHRcdFx0XHRcdHdpZHRoOiBwcnZXaWR0aCxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBwcnZIZWlnaHQsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdFx0dW5pLmNhbnZhc0dldEltYWdlRGF0YSh7XHJcblx0XHRcdFx0XHRcdGNhbnZhc0lkOiAncHJ2LWNhbnZhcycsXHJcblx0XHRcdFx0XHRcdHg6IHBydlgsXHJcblx0XHRcdFx0XHRcdHk6IHBydlksXHJcblx0XHRcdFx0XHRcdHdpZHRoOiBwcnZXaWR0aCxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBwcnZIZWlnaHQsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGZDb2xvckNoYW5nZShlKSB7XHJcblx0XHRcdFx0bGV0IHRtX25vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0aWYgKHRtX25vdyAtIHRoaXMucHJ2VG0gPCAxMDApIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnBydlRtID0gdG1fbm93O1xyXG5cclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0uLi4nLFxyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRpZiAoIXRoaXMucHJ2SW1nRGF0YSkge1xyXG5cdFx0XHRcdFx0aWYgKCEodGhpcy5wcnZJbWdEYXRhID0gYXdhaXQgdGhpcy5mR2V0SW1nRGF0YSgpLmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcImVycm9yX3JlYWRcIixcclxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0pKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMudGFyZ2V0ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHRoaXMucHJ2SW1nRGF0YS5sZW5ndGgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB0aGlzLnBydkltZ0RhdGEsXHJcblx0XHRcdFx0XHR0YXJnZXQgPSB0aGlzLnRhcmdldCxcclxuXHRcdFx0XHRcdGkgPSBlLmRldGFpbC52YWx1ZSxcclxuXHRcdFx0XHRcdHIsIGcsIGIsIGEsIGgsIHMsIGwsIGQsIHAsIHEsIHQsIG1pbiwgbWF4LCBoSywgdFIsIHRHLCB0QjtcclxuXHJcblx0XHRcdFx0aWYgKGkgPT09IDApIHtcclxuXHRcdFx0XHRcdHRhcmdldCA9IGRhdGE7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGkgPSAoaSArIDEwMCkgLyAyMDA7XHJcblx0XHRcdFx0XHRpZiAoaSA8IDAuMDA1KSBpID0gMDtcclxuXHRcdFx0XHRcdGlmIChpID4gMC45OTUpIGkgPSAxO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgbiA9IGRhdGEubGVuZ3RoIC0gMTsgbiA+PSAwOyBuIC09IDQpIHtcclxuXHRcdFx0XHRcdFx0ciA9IGRhdGFbbiAtIDNdIC8gMjU1O1xyXG5cdFx0XHRcdFx0XHRnID0gZGF0YVtuIC0gMl0gLyAyNTU7XHJcblx0XHRcdFx0XHRcdGIgPSBkYXRhW24gLSAxXSAvIDI1NTtcclxuXHRcdFx0XHRcdFx0bWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcblx0XHRcdFx0XHRcdG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG5cdFx0XHRcdFx0XHRkID0gbWF4IC0gbWluO1xyXG5cdFx0XHRcdFx0XHRpZiAobWF4ID09PSBtaW4pIHtcclxuXHRcdFx0XHRcdFx0XHRoID0gMDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtYXggPT09IHIgJiYgZyA+PSBiKSB7XHJcblx0XHRcdFx0XHRcdFx0aCA9IDYwICogKChnIC0gYikgLyBkKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtYXggPT09IHIgJiYgZyA8IGIpIHtcclxuXHRcdFx0XHRcdFx0XHRoID0gNjAgKiAoKGcgLSBiKSAvIGQpICsgMzYwO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1heCA9PT0gZykge1xyXG5cdFx0XHRcdFx0XHRcdGggPSA2MCAqICgoYiAtIHIpIC8gZCkgKyAxMjA7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobWF4ID09PSBiKSB7XHJcblx0XHRcdFx0XHRcdFx0aCA9IDYwICogKChyIC0gZykgLyBkKSArIDI0MDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsID0gKG1heCArIG1pbikgLyAyO1xyXG5cdFx0XHRcdFx0XHRpZiAobCA9PT0gMCB8fCBtYXggPT09IG1pbikge1xyXG5cdFx0XHRcdFx0XHRcdHMgPSAwO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKDAgPCBsICYmIGwgPD0gMC41KSB7XHJcblx0XHRcdFx0XHRcdFx0cyA9IGQgLyAoMiAqIGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGwgPiAwLjUpIHtcclxuXHRcdFx0XHRcdFx0XHRzID0gZCAvICgyIC0gMiAqIGwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGRhdGFbbl0gJiYgKGEgPSBkYXRhW25dKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChpIDwgMC41KSB7XHJcblx0XHRcdFx0XHRcdFx0cyA9IHMgKiBpIC8gMC41O1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGkgPiAwLjUpIHtcclxuXHRcdFx0XHRcdFx0XHRzID0gMiAqIHMgKyAyICogaSAtIChzICogaSAvIDAuNSkgLSAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAocyA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHIgPSBnID0gYiA9IE1hdGgucm91bmQobCAqIDI1NSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGwgPCAwLjUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHEgPSBsICogKDEgKyBzKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGwgPj0gMC41KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRxID0gbCArIHMgLSAobCAqIHMpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRwID0gMiAqIGwgLSBxO1xyXG5cdFx0XHRcdFx0XHRcdGhLID0gaCAvIDM2MDtcclxuXHRcdFx0XHRcdFx0XHR0UiA9IGhLICsgMSAvIDM7XHJcblx0XHRcdFx0XHRcdFx0dEcgPSBoSztcclxuXHRcdFx0XHRcdFx0XHR0QiA9IGhLIC0gMSAvIDM7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNvcnJlY3RSR0IgPSAodCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHQgPCAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0ICsgMS4wO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHQgPiAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0IC0gMS4wO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHQ7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY3JlYXRlUkdCID0gKHQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0IDwgKDEgLyA2KSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcCArICgocSAtIHApICogNiAqIHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0ID49ICgxIC8gNikgJiYgdCA8ICgxIC8gMikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHE7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHQgPj0gKDEgLyAyKSAmJiB0IDwgKDIgLyAzKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcCArICgocSAtIHApICogNiAqICgoMiAvIDMpIC0gdCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHA7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRyID0gdFIgPSBNYXRoLnJvdW5kKGNyZWF0ZVJHQihjb3JyZWN0UkdCKHRSKSkgKiAyNTUpO1xyXG5cdFx0XHRcdFx0XHRcdGcgPSB0RyA9IE1hdGgucm91bmQoY3JlYXRlUkdCKGNvcnJlY3RSR0IodEcpKSAqIDI1NSk7XHJcblx0XHRcdFx0XHRcdFx0YiA9IHRCID0gTWF0aC5yb3VuZChjcmVhdGVSR0IoY29ycmVjdFJHQih0QikpICogMjU1KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRhICYmICh0YXJnZXRbbl0gPSBhKTtcclxuXHRcdFx0XHRcdFx0dGFyZ2V0W24gLSAzXSA9IHI7XHJcblx0XHRcdFx0XHRcdHRhcmdldFtuIC0gMl0gPSBnO1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRbbiAtIDFdID0gYjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBwcnZYID0gdGhpcy5wcnZYLFxyXG5cdFx0XHRcdFx0cHJ2WSA9IHRoaXMucHJ2WSxcclxuXHRcdFx0XHRcdHBydldpZHRoID0gdGhpcy5wcnZXaWR0aCxcclxuXHRcdFx0XHRcdHBydkhlaWdodCA9IHRoaXMucHJ2SGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dGhpcy5jY3AucHV0SW1hZ2VEYXRhKHtcclxuXHRcdFx0XHRcdHg6IHBydlgsXHJcblx0XHRcdFx0XHR5OiBwcnZZLFxyXG5cdFx0XHRcdFx0d2lkdGg6IHBydldpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBwcnZIZWlnaHQsXHJcblx0XHRcdFx0XHRkYXRhOiB0YXJnZXQsXHJcblx0XHRcdFx0XHRmYWlsKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ2Vycm9yX3B1dCcsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dW5pLmNhbnZhc1B1dEltYWdlRGF0YSh7XHJcblx0XHRcdFx0XHRjYW52YXNJZDogJ3Bydi1jYW52YXMnLFxyXG5cdFx0XHRcdFx0eDogcHJ2WCxcclxuXHRcdFx0XHRcdHk6IHBydlksXHJcblx0XHRcdFx0XHR3aWR0aDogcHJ2V2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHBydkhlaWdodCxcclxuXHRcdFx0XHRcdGRhdGE6IHRhcmdldCxcclxuXHRcdFx0XHRcdGZhaWwoKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnZXJyb3JfcHV0JyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0YnRvcChiYXNlNjQpIHtcclxuXHRcdFx0XHR0aGlzLmJhc2U2NCA9IGJhc2U2NDtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgYXJyID0gYmFzZTY0LnNwbGl0KCcsJyksXHJcblx0XHRcdFx0XHRcdG1pbWUgPSBhcnJbMF0ubWF0Y2goLzooLio/KTsvKVsxXSxcclxuXHRcdFx0XHRcdFx0YnN0ciA9IGF0b2IoYXJyWzFdKSxcclxuXHRcdFx0XHRcdFx0biA9IGJzdHIubGVuZ3RoLFxyXG5cdFx0XHRcdFx0XHR1OGFyciA9IG5ldyBVaW50OEFycmF5KG4pO1xyXG5cdFx0XHRcdFx0d2hpbGUgKG4tLSkge1xyXG5cdFx0XHRcdFx0XHR1OGFycltuXSA9IGJzdHIuY2hhckNvZGVBdChuKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKCh3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwpLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbdThhcnJdLCB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IG1pbWVcclxuXHRcdFx0XHRcdH0pKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQubXktY2FudmFzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMTAwMDAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQubXktYXZhdGFyIHtcclxuXHRcdHdpZHRoOiAxNTB1cHg7XHJcblx0XHRoZWlnaHQ6IDE1MHVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQub3Blci1jYW52YXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHotaW5kZXg6IDEwMDAwMTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnBydi1jYW52YXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogIzAwMDAwMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAyMDAwMDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5vcGVyLXdyYXBwZXIge1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI0YxRjFGMTtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiAxMDAwMDk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0Lm9wZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDEwdXB4IDIwdXB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJ0bi13cmFwcGVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0LyogI2lmbmRlZiBINSAqL1xyXG5cdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHJcblx0LmJ0bi13cmFwcGVyIHZpZXcge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDYlO1xyXG5cdH1cclxuXHJcblx0LmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2JTtcclxuXHR9XHJcblxyXG5cdC5jbHItd3JhcHBlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtZ3JvdzogMTtcclxuXHR9XHJcblxyXG5cdC5jbHItd3JhcHBlciB2aWV3IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2JTtcclxuXHR9XHJcblxyXG5cdC5teS1zbGlkZXIge1xyXG5cdFx0ZmxleC1ncm93OiAxO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///58\n");

/***/ })
],[[0,"app-config"]]]);