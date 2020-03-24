(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar id=\"topToolbar\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <img src=\"../../../assets/img/logo-200.png\" height=\"35\">\r\n    </ion-buttons>\r\n\r\n    <ion-title slot=\"end\">\r\n      <ion-label color=\"light\">\r\n        <p><b>{{nowTime}}</b></p>\r\n      </ion-label>\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Default Segment -->\r\n  <ion-card class=\"ion-no-padding\">\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding\">\r\n            <ion-text color=\"dark\">\r\n              <h3>Coronavirus Cases:</h3>\r\n            </ion-text>\r\n            <ion-button color=\"medium\" fill=\"outline\" size=\"large\" strong=\"true\" shape=\"round\" >\r\n              {{ coronaUpdate.cases | number }}\r\n            </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-center ion-no-padding\">\r\n            <ion-text color=\"dark\">\r\n              <h5>Deaths:</h5>\r\n            </ion-text>\r\n            <ion-button color=\"danger\" fill=\"outline\" size=\"large\" strong=\"true\" shape=\"round\">\r\n              {{ coronaUpdate.deaths | number }}\r\n            </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center ion-no-padding\">\r\n          <ion-text color=\"dark\">\r\n            <h5>Recovered:</h5>\r\n          </ion-text>\r\n          <ion-button color=\"success\" fill=\"outline\" size=\"large\" strong=\"true\" shape=\"round\">\r\n            {{ coronaUpdate.recovered | number }}\r\n          </ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n<p>country:{{coronaUpdateCountry.country}}</p>\r\n<p>cases:{{coronaUpdateCountry.cases}}</p>\r\n<p>todayCases:{{coronaUpdateCountry.todayCases}}</p>\r\n<p>deaths:{{coronaUpdateCountry.deaths}}</p>\r\n<p>todayDeaths:{{coronaUpdateCountry.todayDeaths}}</p>\r\n<p>active:{{coronaUpdateCountry.active}}</p>\r\n\r\n\r\n\r\n  <ion-toolbar id=\"segmentToolbar\" (pan)=\"panToFirstSeg($event)\">\r\n      <ion-segment no-padding value=\"home\" [(ngModel)]=\"category\" scrollable id=\"segment\" > \r\n\r\n          <ion-segment-button id={{result.id}} *ngFor=\"let result of segmentOptions\" \r\n          (click)='showAutoHideLoader(result.value)' no-padding value={{result.value}} >\r\n            <ion-label>{{result.label}}</ion-label>\r\n          </ion-segment-button>      \r\n        <hr class=\"hrs\">\r\n      </ion-segment>\r\n  </ion-toolbar>\r\n\r\n\r\n<ion-content (swipeleft)=\"swipeLeftPress($event)\" (swiperight)=\"swipeRightPress($event)\" class=\"fast\" id=\"ionContent\">\r\n  <!-- Home section -->\r\n  <div scrollable>\r\n        <!-- Home ends -->\r\n    <!-- Videos news -->\r\n    <ion-list>\r\n      <div *ngFor=\"let result of apiResult\">\r\n        <ion-card (click)=goToYoutube(result.url)>\r\n          <ion-card-header>\r\n            <!-- <ion-badge>ভিডিও নিউজ</ion-badge> -->\r\n            <img src=\"{{result.img}}\" />\r\n            <ion-card-subtitle color=\"dark\" class=\"sectionTitle\"\r\n            [innerHtml]=\"result.title\">\r\n            </ion-card-subtitle>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </div>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#weatherCard {\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n#weatherCardText {\n  color: white; }\n\nion-title {\n  text-align: left !important;\n  padding: 12px;\n  font-weight: 700;\n  font-size: 1.5em; }\n\n#topToolbar {\n  --background: #ed1b24; }\n\nion-segment-button {\n  border: none;\n  font-weight: 900;\n  font-size: 0.8em;\n  --indicator-color-checked: #385399;\n  --color-activated: #385399;\n  --color-checked: #385399;\n  --background: #23408e; }\n\n.button-outline.ion-color.button-native {\n  color: black; }\n\nion-segment {\n  background-image: white;\n  padding: 0;\n  box-shadow: 0px 10px 5px #888, 0px -10px 5px #888; }\n\nion-card-subtitle .newsRecommended {\n  margin-top: 1em;\n  margin-left: 1em;\n  padding: 0;\n  position: absolute; }\n\nion-card-subtitle {\n  margin-top: 1em !important;\n  margin-left: 1em !important;\n  padding: 0;\n  font-size: 1.1em; }\n\ndiv[scrollx=\"true\"] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto; }\n\ndiv[scrollx=\"true\"]::-webkit-scrollbar {\n    display: none; }\n\ndiv[scrollx=\"true\"] .scroll-item {\n    flex: 0 0 auto; }\n\n.horizontalScroll {\n  width: 16em;\n  height: 18.5em;\n  border-radius: 5px; }\n\n.cardData {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap; }\n\n.newsToday {\n  width: 40%;\n  line-height: 100px;\n  background-color: grey;\n  margin: 10px;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  position: relative; }\n\n.cardNewsHeader {\n  height: 17em;\n  padding: 0px; }\n\n.newsOfToday {\n  height: 16em; }\n\n.newsOfToday .sourceLogo {\n  width: 100%;\n  height: 1.6em;\n  margin-top: 0;\n  margin-left: 0em;\n  margin-bottom: -1em;\n  background-color: #fcb13c;\n  border-radius: 25px;\n  margin: auto; }\n\n.sourceLogoAllCategory {\n  width: 9em;\n  height: 2em;\n  align-items: right;\n  float: right;\n  border-radius: 0.5em;\n  margin-bottom: 0.2em;\n  margin-right: 0.2em; }\n\n.callOfTodaysNews {\n  min-width: 8em; }\n\n.newsOfToday img {\n  width: 12em;\n  height: 10em;\n  z-index: 0; }\n\n.hrs {\n  box-shadow: 0px 1.5px 1.5px #646364; }\n\nion-card-content {\n  margin-left: 1em;\n  padding: 0; }\n\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n  overflow: scroll; }\n\nion-content {\n  overflow: hidden;\n  --overflow: scroll; }\n\n.scroll-content {\n  overflow: scroll; }\n\nion-infinite-scroll.md.infinite-scroll-enabled.hydrated {\n  overflow: scroll !important;\n  height: 100% !important; }\n\n.weatherIcon {\n  width: 3em; }\n\nion-card-header {\n  padding: 4px; }\n\n.weatherDegree {\n  margin-top: 7px;\n  font-size: 2.5em;\n  font-weight: 900;\n  color: #fcb13c; }\n\n.weatherSummery p {\n  margin: 0; }\n\nion-badge {\n  /*width: 8em;*/\n  display: block;\n  position: absolute;\n  /*height: 1.8em;*/\n  margin-top: 11em;\n  margin-left: 8.6em;\n  background-color: #f2f2f2;\n  /*background-color: #fcb13c;*/\n  color: black; }\n\n.sourceBadge {\n  width: 8em;\n  display: block;\n  position: absolute;\n  height: 1.8em;\n  margin-top: 10em;\n  margin-left: 3em;\n  background-color: #fcb13c;\n  color: black;\n  padding: 0; }\n\n.weatherShortReport {\n  position: relative;\n  padding: 0;\n  margin-top: 0px; }\n\n.temperature {\n  padding: 0; }\n\n.suggestedNews {\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-left: 9.8px; }\n\n.scrollContainer {\n  margin-left: 0.8em; }\n\n.newsTags {\n  width: 100%;\n  height: 7em;\n  position: absolute;\n  margin-top: 7em; }\n\n.newsTags img {\n  max-width: 8em;\n  margin-left: 7em;\n  margin-top: -2em; }\n\n.newsTags .publishedOn {\n  text-align: center;\n  color: #fcb13c;\n  margin-top: -1.5em;\n  margin-left: 7em; }\n\n.newsRecommendedImg img {\n  width: 100%;\n  height: 11em; }\n\n.sectionTitle {\n  font-size: 1.6em; }\n\nion-icon.big {\n  width: 30px;\n  height: 30px; }\n\nion-icon.bigger {\n  width: 100px;\n  height: 100px; }\n\nion-icon.red {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcTk9ERUpTIEFQUFxcSW9uaWM0XFxjb3JvbmEtcHJvai9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQ0FBMEI7RUFDMUIsMEJBQWtCO0VBQ2xCLHdCQUFnQjtFQUNoQixxQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBVyxFQUFBOztBQUdiO0VBRUUsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpREFBaUQsRUFBQTs7QUFHbkQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUhsQjtJQUtJLGFBQWEsRUFBQTs7QUFMakI7SUFRSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUViLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLFlBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUVYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRVo7RUFJRSxtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxnQkFBZ0I7RUFFaEIsVUFBVSxFQUFBOztBQUlaOztFQUVFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsY0FBQTtFQUNBLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4Qiw2QkFBQTtFQUNBLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBRUksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFIaEI7RUFPSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQVJqQjtFQVlJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VhdGhlckNhcmR7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiN3ZWF0aGVyQ2FyZFRleHR7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiN0b3BUb29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogI2VkMWIyNDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMzODUzOTk7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzODUzOTk7XHJcbiAgLS1jb2xvci1jaGVja2VkOiAjMzg1Mzk5O1xyXG4gIC0tYmFja2dyb3VuZDogIzIzNDA4ZTtcclxufVxyXG5cclxuLmJ1dHRvbi1vdXRsaW5lLmlvbi1jb2xvci5idXR0b24tbmF0aXZle1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWFkMWFkLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogd2hpdGU7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggIzg4OCwgMHB4IC0xMHB4IDVweCAjODg4O1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSAubmV3c1JlY29tbWVuZGVkIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuZGl2W3Njcm9sbHg9XCJ0cnVlXCJdIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnNjcm9sbC1pdGVtIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmhvcml6b250YWxTY3JvbGwge1xyXG4gIHdpZHRoOiAxNmVtO1xyXG4gIGhlaWdodDogMTguNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNhcmREYXRhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7MTBlbVxyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ubmV3c1RvZGF5IHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZE5ld3NIZWFkZXIge1xyXG4gIGhlaWdodDogMTdlbTtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLm5ld3NPZlRvZGF5e1xyXG4gIGhlaWdodDogMTZlbTtcclxufVxyXG4ubmV3c09mVG9kYXkgLnNvdXJjZUxvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC0xZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYjEzYztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4uc291cmNlTG9nb0FsbENhdGVnb3J5IHtcclxuICB3aWR0aDogOWVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiYjhmNTI7XHJcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xyXG59XHJcblxyXG5cclxuLmNhbGxPZlRvZGF5c05ld3Mge1xyXG4gIG1pbi13aWR0aDogOGVtO1xyXG59XHJcblxyXG4ubmV3c09mVG9kYXkgaW1nIHtcclxuICB3aWR0aDogMTJlbTtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uaHJzIHtcclxuICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMXB4ICM2NDYzNjQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDFweCAjNjQ2MzY0O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCAjNjQ2MzY0O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMS4xZW07XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gVmVydGljYWwgc2Nyb2xsZXIgZGlzYWJsaW5nXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC0tb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbmlvbi1pbmZpbml0ZS1zY3JvbGwubWQuaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQuaHlkcmF0ZWQge1xyXG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ud2VhdGhlckljb24ge1xyXG4gIHdpZHRoOiAzZW07XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4ud2VhdGhlckRlZ3JlZSB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogI2ZjYjEzYztcclxufVxyXG5cclxuLndlYXRoZXJTdW1tZXJ5IHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICAvKndpZHRoOiA4ZW07Ki9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLypoZWlnaHQ6IDEuOGVtOyovXHJcbiAgbWFyZ2luLXRvcDogMTFlbTtcclxuICBtYXJnaW4tbGVmdDogOC42ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjJmMmYyO1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZjYjEzYzsqL1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uc291cmNlQmFkZ2Uge1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWFyZ2luLXRvcDogMTBlbTtcclxuICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2IxM2M7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi53ZWF0aGVyU2hvcnRSZXBvcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3VnZ2VzdGVkTmV3cyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA5LjhweDtcclxufVxyXG5cclxuLnNjcm9sbENvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xyXG59XHJcblxyXG4ubmV3c1RhZ3Mge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiYjhmNTI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDdlbTtcclxufVxyXG4ubmV3c1RhZ3MgaW1nIHtcclxuICBtYXgtd2lkdGg6IDhlbTtcclxuICBtYXJnaW4tbGVmdDogN2VtO1xyXG4gIG1hcmdpbi10b3A6IC0yZW07XHJcbn1cclxuLm5ld3NUYWdzIC5wdWJsaXNoZWRPbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmNiMTNjO1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICBtYXJnaW4tbGVmdDogN2VtO1xyXG59XHJcblxyXG4ubmV3c1JlY29tbWVuZGVkSW1nIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMWVtO1xyXG59XHJcblxyXG4uc2VjdGlvblRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgJi5iaWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmLmJpZ2dlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgJi5yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);













var HomePage = /** @class */ (function () {
    function HomePage(newsApi, event, iab, loadingController, platform, http, nativeGeocoder, geolocation) {
        this.newsApi = newsApi;
        this.event = event;
        this.iab = iab;
        this.loadingController = loadingController;
        this.platform = platform;
        this.http = http;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.segmentOptions = [];
        this.category = 'home';
        this.apiResult = [];
        this.coronaUpdate = [];
        this.segmentOptions = this.newsApi.getSegments();
        this.event.publish('scrollToTop', this.content);
        this.showAutoHideLoader('home');
        this.getCoronaUpdate();
    }
    HomePage.prototype.getCoronaUpdate = function () {
        var _this = this;
        /////////////////// Corona Update News Total/////////// 
        this.http.get("https://corona.lmao.ninja/all").subscribe(function (res) {
            //console.log(res);
            _this.coronaUpdate = res;
        });
        /////////////////// Corona Update News Total End///////////    
        /////////////////// Corona Update News Countrywise///////////        
        this.geolocation.getCurrentPosition().then(function (resp) {
            var options = {
                useLocale: true,
                maxResults: 5
            };
            _this.nativeGeocoder.reverseGeocode(resp.coords['latitude'], resp.coords['longitude'], options)
                .then(function (result) {
                _this.http.get('https://corona.lmao.ninja/countries/' + result[0]['countryName']).subscribe(function (res) {
                    _this.coronaUpdateCountry = res;
                    console.log(_this.coronaUpdateCountry);
                });
            })
                .catch(function (error) { return console.log(error); });
        }).catch(function (error) {
            console.log(error);
        });
        /////////////////// Corona Update News Countrywise end///////////    
    };
    HomePage.prototype.refreshTime = function () {
        moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('en');
        this.nowTime = moment__WEBPACK_IMPORTED_MODULE_8__().format('MMMM Do YYYY');
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshTime();
        setInterval(function () {
            _this.refreshTime();
        }, 10000);
    };
    HomePage.prototype.goToSegment = function (buttonNumber, side) {
        var nextButtonNumber = buttonNumber;
        var buttonWidth = document.getElementById(String(buttonNumber)).offsetWidth;
        document.getElementById(String(nextButtonNumber)).click();
        document.getElementById('segment').scrollLeft = nextButtonNumber * buttonWidth - buttonWidth;
    };
    HomePage.prototype.segmentWiseSwipe = function (side, currentTab) {
        this.goToSegment(currentTab, side);
    };
    HomePage.prototype.swipeLeftPress = function ($event) {
        for (var i = 0; i < this.segmentOptions.length; i++) {
            if (this.segmentOptions[i]['value'] === this.category) {
                this.currentTab = this.segmentOptions[i + 1];
                if (!this.currentTab) {
                    this.currentTab = this.segmentOptions[0];
                }
                break;
            }
        }
        this.currentTab = this.currentTab['id'];
        this.segmentWiseSwipe('left', this.currentTab);
    };
    HomePage.prototype.swipeRightPress = function ($event) {
        for (var i = 0; i < this.segmentOptions.length; i++) {
            if (this.segmentOptions[i]['value'] === this.category) {
                this.currentTab = this.segmentOptions[i - 1];
                if (!this.currentTab) {
                    this.currentTab = this.segmentOptions[this.segmentOptions.length - 1];
                }
                break;
            }
        }
        this.currentTab = this.currentTab['id'];
        this.segmentWiseSwipe('right', this.currentTab);
    };
    HomePage.prototype.goToYoutube = function (url) {
        this.iab.create(url, '_self', 'location=no');
    };
    HomePage.prototype.gotoUpdateUrl = function () {
        this.iab.create(this.updateUrl, '_self', 'location=no');
    };
    HomePage.prototype.clickSegment = function (segment) {
        this.currentTab = segment;
        // console.log(this.currentTab);
        // eval(segment.click);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.content.scrollToTop();
    };
    HomePage.prototype.showAutoHideLoader = function (option) {
        var _this = this;
        this.loadingController.create({
            spinner: 'crescent',
            cssClass: 'loader',
        }).then(function (res) {
            res.present();
            if (option === "home") {
                _this.newsApi.coronaIntro().subscribe(function (res) {
                    _this.channelsGang = res;
                    _this.coronaBanner = res[0]['coronaBanner'];
                    _this.updateUrl = res[0]['updateUrl'];
                    _this.prepareCall();
                });
            }
            else if (option === "symtoms") {
                _this.newsApi.coronaSymptomsVideos().subscribe(function (res) {
                    _this.channelsGang = res;
                    _this.prepareCall();
                });
            }
            else if (option === "prevention") {
                _this.newsApi.coronaPreventionVideos().subscribe(function (res) {
                    _this.channelsGang = res;
                    _this.prepareCall();
                });
            }
            else if (option === "top") {
                _this.newsApi.coronaTopNewsVideos().subscribe(function (res) {
                    _this.channelsGang = res;
                    _this.prepareCall();
                });
            }
            res.onDidDismiss().then(function (dis) {
            });
        });
    };
    HomePage.prototype.prepareCall = function () {
        this.apiResult = [];
        for (var i = 0; i < this.channelsGang.length; i++) {
            var videos = this.channelsGang[i]['videos'];
            return this.youtubeApiCall(videos, this.http, this.loadingController, this.apiResult);
        }
    };
    HomePage.prototype.youtubeApiCall = function (videos, http, loadingController, apiResult) {
        ///////////////////////////
        (function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var e_1, _a, videos_1, videos_1_1, v, vidInfo, e_1_1;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 5, 6, 11]);
                            videos_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"](videos);
                            _b.label = 1;
                        case 1: return [4 /*yield*/, videos_1.next()];
                        case 2:
                            if (!(videos_1_1 = _b.sent(), !videos_1_1.done)) return [3 /*break*/, 4];
                            v = videos_1_1.value;
                            vidInfo = 'https://www.googleapis.com/youtube/v3/videos?id=' + v.vid + '&key=AIzaSyApCtHtDdnp6z11bnYGJwdGj2N4i8NfHx0&part=snippet';
                            http.get(vidInfo).subscribe(function (res) {
                                // console.log(res)
                                // console.log(res['items'][0]['snippet']['title'])
                                //  console.log(res['items'][0]['snippet']['thumbnails']['default']['url'])
                                // console.log(videos[j].url);
                                loadingController.dismiss();
                                var obj = {
                                    title: res['items'][0]['snippet']['title'],
                                    img: res['items'][0]['snippet']['thumbnails']['standard']['url'],
                                    url: v.url
                                };
                                apiResult.push(obj);
                                // console.log(res);
                            });
                            _b.label = 3;
                        case 3: return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 11];
                        case 5:
                            e_1_1 = _b.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 11];
                        case 6:
                            _b.trys.push([6, , 9, 10]);
                            if (!(videos_1_1 && !videos_1_1.done && (_a = videos_1.return))) return [3 /*break*/, 8];
                            return [4 /*yield*/, _a.call(videos_1)];
                        case 7:
                            _b.sent();
                            _b.label = 8;
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 10: return [7 /*endfinally*/];
                        case 11: return [2 /*return*/];
                    }
                });
            });
        })();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], HomePage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], HomePage.prototype, "infiniteScroll", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map