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

module.exports = "<ion-header>\n  <ion-toolbar id=\"topToolbar\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <img src=\"../../../assets/img/logo-200.png\" height=\"35\">\n    </ion-buttons>\n\n    <ion-title>\n      <ion-label color=\"light\">\n        <p><b>{{nowTime}}</b></p>\n      </ion-label>\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<!-- Default Segment -->\n  <ion-toolbar id=\"segmentToolbar\" (pan)=\"panToFirstSeg($event)\">\n      <ion-segment no-padding value=\"home\" [(ngModel)]=\"category\" scrollable id=\"segment\" > \n\n          <ion-segment-button id={{result.id}} *ngFor=\"let result of segmentOptions\" \n          (click)='showAutoHideLoader(result.value)' no-padding value={{result.value}} >\n            <ion-label>{{result.label}}</ion-label>\n          </ion-segment-button>      \n        <hr class=\"hrs\">\n      </ion-segment>\n  </ion-toolbar>\n\n\n<ion-content (swipeleft)=\"swipeLeftPress($event)\" (swiperight)=\"swipeRightPress($event)\" class=\"fast\" id=\"ionContent\">\n  <!-- Home section -->\n  <div scrollable>\n        <!-- Home ends -->\n    <!-- Videos news -->\n    <ion-list>\n      <div *ngFor=\"let result of apiResult\">\n        <ion-card (click)=goToYoutube(result.url)>\n          <ion-card-header>\n            <!-- <ion-badge>ভিডিও নিউজ</ion-badge> -->\n            <img src=\"{{result.img}}\" />\n            <ion-card-subtitle color=\"dark\" class=\"sectionTitle\"\n            [innerHtml]=\"result.title\">\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#weatherCard {\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n#weatherCardText {\n  color: white; }\n\nion-title {\n  text-align: left !important;\n  padding: 12px;\n  font-weight: 700;\n  font-size: 1.5em; }\n\n#topToolbar {\n  --background: #ed1b24; }\n\nion-segment-button {\n  border: none;\n  font-weight: 900;\n  font-size: 0.8em;\n  --indicator-color-checked: #385399;\n  --color-activated: #385399;\n  --color-checked: #385399;\n  --background: #23408e; }\n\n.button-outline.ion-color.button-native {\n  color: black; }\n\nion-segment {\n  background-image: white;\n  padding: 0;\n  box-shadow: 0px 10px 5px #888, 0px -10px 5px #888; }\n\nion-card-subtitle .newsRecommended {\n  margin-top: 1em;\n  margin-left: 1em;\n  padding: 0;\n  position: absolute; }\n\nion-card-subtitle {\n  margin-top: 1em !important;\n  margin-left: 1em !important;\n  padding: 0;\n  font-size: 1.1em; }\n\ndiv[scrollx=\"true\"] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto; }\n\ndiv[scrollx=\"true\"]::-webkit-scrollbar {\n    display: none; }\n\ndiv[scrollx=\"true\"] .scroll-item {\n    flex: 0 0 auto; }\n\n.horizontalScroll {\n  width: 16em;\n  height: 18.5em;\n  border-radius: 5px; }\n\n.cardData {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap; }\n\n.newsToday {\n  width: 40%;\n  line-height: 100px;\n  background-color: grey;\n  margin: 10px;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  position: relative; }\n\n.cardNewsHeader {\n  height: 17em;\n  padding: 0px; }\n\n.newsOfToday {\n  height: 16em; }\n\n.newsOfToday .sourceLogo {\n  width: 100%;\n  height: 1.6em;\n  margin-top: 0;\n  margin-left: 0em;\n  margin-bottom: -1em;\n  background-color: #fcb13c;\n  border-radius: 25px;\n  margin: auto; }\n\n.sourceLogoAllCategory {\n  width: 9em;\n  height: 2em;\n  align-items: right;\n  float: right;\n  border-radius: 0.5em;\n  margin-bottom: 0.2em;\n  margin-right: 0.2em; }\n\n.callOfTodaysNews {\n  min-width: 8em; }\n\n.newsOfToday img {\n  width: 12em;\n  height: 10em;\n  z-index: 0; }\n\n.hrs {\n  box-shadow: 0px 1.5px 1.5px #646364; }\n\nion-card-content {\n  margin-left: 1em;\n  padding: 0; }\n\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n  overflow: scroll; }\n\nion-content {\n  overflow: hidden;\n  --overflow: scroll; }\n\n.scroll-content {\n  overflow: scroll; }\n\nion-infinite-scroll.md.infinite-scroll-enabled.hydrated {\n  overflow: scroll !important;\n  height: 100% !important; }\n\n.weatherIcon {\n  width: 3em; }\n\nion-card-header {\n  padding: 4px; }\n\n.weatherDegree {\n  margin-top: 7px;\n  font-size: 2.5em;\n  font-weight: 900;\n  color: #fcb13c; }\n\n.weatherSummery p {\n  margin: 0; }\n\nion-badge {\n  /*width: 8em;*/\n  display: block;\n  position: absolute;\n  /*height: 1.8em;*/\n  margin-top: 11em;\n  margin-left: 8.6em;\n  background-color: #f2f2f2;\n  /*background-color: #fcb13c;*/\n  color: black; }\n\n.sourceBadge {\n  width: 8em;\n  display: block;\n  position: absolute;\n  height: 1.8em;\n  margin-top: 10em;\n  margin-left: 3em;\n  background-color: #fcb13c;\n  color: black;\n  padding: 0; }\n\n.weatherShortReport {\n  position: relative;\n  padding: 0;\n  margin-top: 0px; }\n\n.temperature {\n  padding: 0; }\n\n.suggestedNews {\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-left: 9.8px; }\n\n.scrollContainer {\n  margin-left: 0.8em; }\n\n.newsTags {\n  width: 100%;\n  height: 7em;\n  position: absolute;\n  margin-top: 7em; }\n\n.newsTags img {\n  max-width: 8em;\n  margin-left: 7em;\n  margin-top: -2em; }\n\n.newsTags .publishedOn {\n  text-align: center;\n  color: #fcb13c;\n  margin-top: -1.5em;\n  margin-left: 7em; }\n\n.newsRecommendedImg img {\n  width: 100%;\n  height: 11em; }\n\n.sectionTitle {\n  font-size: 1.6em; }\n\nion-icon.big {\n  width: 30px;\n  height: 30px; }\n\nion-icon.bigger {\n  width: 100px;\n  height: 100px; }\n\nion-icon.red {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haGF5ZGVyL1dvcmsvY29yb25hLXByb2ovc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQ0FBMEI7RUFDMUIsMEJBQWtCO0VBQ2xCLHdCQUFnQjtFQUNoQixxQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBVyxFQUFBOztBQUdiO0VBRUUsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpREFBaUQsRUFBQTs7QUFHbkQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUhsQjtJQUtJLGFBQWEsRUFBQTs7QUFMakI7SUFRSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUViLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLFlBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUVYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRVo7RUFJRSxtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxnQkFBZ0I7RUFFaEIsVUFBVSxFQUFBOztBQUlaOztFQUVFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsY0FBQTtFQUNBLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4Qiw2QkFBQTtFQUNBLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBRUksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFIaEI7RUFPSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQVJqQjtFQVlJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VhdGhlckNhcmR7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jd2VhdGhlckNhcmRUZXh0e1xuICBjb2xvcjp3aGl0ZTtcbn1cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuI3RvcFRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogI2VkMWIyNDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjMzg1Mzk5O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzM4NTM5OTtcbiAgLS1jb2xvci1jaGVja2VkOiAjMzg1Mzk5O1xuICAtLWJhY2tncm91bmQ6ICMyMzQwOGU7XG59XG5cbi5idXR0b24tb3V0bGluZS5pb24tY29sb3IuYnV0dG9uLW5hdGl2ZXtcbiAgY29sb3I6YmxhY2s7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWFkMWFkLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggIzg4OCwgMHB4IC0xMHB4IDVweCAjODg4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSAubmV3c1JlY29tbWVuZGVkIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbmRpdltzY3JvbGx4PVwidHJ1ZVwiXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2Nyb2xsLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG59XG5cbi5ob3Jpem9udGFsU2Nyb2xsIHtcbiAgd2lkdGg6IDE2ZW07XG4gIGhlaWdodDogMTguNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJkRGF0YSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBmbGV4LWRpcmVjdGlvbjogcm93OzEwZW1cbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm5ld3NUb2RheSB7XG4gIHdpZHRoOiA0MCU7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZE5ld3NIZWFkZXIge1xuICBoZWlnaHQ6IDE3ZW07XG4gIHBhZGRpbmc6MHB4O1xufVxuXG4ubmV3c09mVG9kYXl7XG4gIGhlaWdodDogMTZlbTtcbn1cbi5uZXdzT2ZUb2RheSAuc291cmNlTG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMGVtO1xuICBtYXJnaW4tYm90dG9tOiAtMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNiMTNjO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46YXV0bztcbn1cblxuLnNvdXJjZUxvZ29BbGxDYXRlZ29yeSB7XG4gIHdpZHRoOiA5ZW07XG4gIGhlaWdodDogMmVtO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYmI4ZjUyO1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xufVxuXG5cbi5jYWxsT2ZUb2RheXNOZXdzIHtcbiAgbWluLXdpZHRoOiA4ZW07XG59XG5cbi5uZXdzT2ZUb2RheSBpbWcge1xuICB3aWR0aDogMTJlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICB6LWluZGV4OiAwO1xufVxuLmhycyB7XG4gIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMXB4ICM2NDYzNjQ7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxcHggIzY0NjM2NDtcbiAgYm94LXNoYWRvdzogMHB4IDEuNXB4IDEuNXB4ICM2NDYzNjQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICAvLyBtYXJnaW4tcmlnaHQ6IDEuMWVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vLyBWZXJ0aWNhbCBzY3JvbGxlciBkaXNhYmxpbmdcbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1vdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuaW9uLWluZmluaXRlLXNjcm9sbC5tZC5pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC5oeWRyYXRlZCB7XG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ud2VhdGhlckljb24ge1xuICB3aWR0aDogM2VtO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi53ZWF0aGVyRGVncmVlIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2ZjYjEzYztcbn1cblxuLndlYXRoZXJTdW1tZXJ5IHAge1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1iYWRnZSB7XG4gIC8qd2lkdGg6IDhlbTsqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKmhlaWdodDogMS44ZW07Ki9cbiAgbWFyZ2luLXRvcDogMTFlbTtcbiAgbWFyZ2luLWxlZnQ6IDguNmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZjYjEzYzsqL1xuICBjb2xvcjogYmxhY2s7XG59XG4uc291cmNlQmFkZ2Uge1xuICB3aWR0aDogOGVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tdG9wOiAxMGVtO1xuICBtYXJnaW4tbGVmdDogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNiMTNjO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi53ZWF0aGVyU2hvcnRSZXBvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRlbXBlcmF0dXJlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnN1Z2dlc3RlZE5ld3Mge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogOS44cHg7XG59XG5cbi5zY3JvbGxDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMC44ZW07XG59XG5cbi5uZXdzVGFncyB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiYjhmNTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDdlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA3ZW07XG59XG4ubmV3c1RhZ3MgaW1nIHtcbiAgbWF4LXdpZHRoOiA4ZW07XG4gIG1hcmdpbi1sZWZ0OiA3ZW07XG4gIG1hcmdpbi10b3A6IC0yZW07XG59XG4ubmV3c1RhZ3MgLnB1Ymxpc2hlZE9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZjYjEzYztcbiAgbWFyZ2luLXRvcDogLTEuNWVtO1xuICBtYXJnaW4tbGVmdDogN2VtO1xufVxuXG4ubmV3c1JlY29tbWVuZGVkSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExZW07XG59XG5cbi5zZWN0aW9uVGl0bGUge1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG5pb24taWNvbiB7XG4gICYuYmlnIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAmLmJpZ2dlciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAmLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuIl19 */"

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









// import { AdmobFreeService } from '../../services/admobfree.service';

var HomePage = /** @class */ (function () {
    function HomePage(newsApi, event, iab, loadingController, platform, http) {
        this.newsApi = newsApi;
        this.event = event;
        this.iab = iab;
        this.loadingController = loadingController;
        this.platform = platform;
        this.http = http;
        this.segmentOptions = [];
        this.category = 'home';
        this.apiResult = [];
        this.segmentOptions = this.newsApi.getSegments();
        this.event.publish('scrollToTop', this.content);
        this.showAutoHideLoader('home');
    }
    HomePage.prototype.ngOnInit = function () {
        // if (this.platform.is('cordova')) {
        //   this.admobFreeService.BannerAd();
        // }
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map