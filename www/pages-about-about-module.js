(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <img src=\"../../../assets/img/logo-200.png\" height=\"35\">\n    </ion-buttons>\n    <ion-title>Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"info\"><img src=\"assets/img/dream-diver.png\" alt=\"dream diver\" />\n    <p style=\"text-align: center; \">This app is a product of <span style=\"font-weight:600;\">\"Dream Diver\"</span> Company<br>\n      Westerbeekstraat 10B, 3074 DH Rotterdam\n      <br>Netherlands\n      <br>contact@dreamdiver.nl\n      <br>www.dreamdiver.nl\n    </p>\n    <p style=\"text-align: center;\"></p>\n    <p style=\"text-align: center; font-weight:600;margin-bottom: 0em;\">Current Version</p>\n    <p class=\"versionNumber\" style=\"text-align: center; margin-top: 0em;\">0.0.1</p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left !important;\n  padding: 12px;\n  font-weight: 700;\n  font-size: 1.5em; }\n\nion-toolbar {\n  --background: #fe8c00; }\n\n.about-toolbar {\n  color: black; }\n\n.info {\n  margin-top: 6em; }\n\n.info img {\n  display: block;\n  margin: 0 auto;\n  height: 6em; }\n\n.versionNumber {\n  font-weight: 400;\n  font-size: 0.8em; }\n\nion-content {\n  --ion-background-color: linear-gradient(to right, #f83600, #fe8c00); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haGF5ZGVyL1dvcmsvY29yb25hLXByb2ovc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZSxFQUFBOztBQUlqQjtFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1FQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZlOGMwMDtcbn1cblxuLmFib3V0LXRvb2xiYXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xuXG59XG5cbi5pbmZvIGltZyB7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDZlbTtcbn1cblxuLnZlcnNpb25OdW1iZXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map