(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-job-job-module"],{

/***/ "./src/app/pages/job/job.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/job/job.module.ts ***!
  \*****************************************/
/*! exports provided: JobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageModule", function() { return JobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _job_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job.page */ "./src/app/pages/job/job.page.ts");







var routes = [
    {
        path: '',
        component: _job_page__WEBPACK_IMPORTED_MODULE_6__["JobPage"]
    }
];
var JobPageModule = /** @class */ (function () {
    function JobPageModule() {
    }
    JobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_job_page__WEBPACK_IMPORTED_MODULE_6__["JobPage"]]
        })
    ], JobPageModule);
    return JobPageModule;
}());



/***/ }),

/***/ "./src/app/pages/job/job.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/job/job.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n          <img src=\"../../../assets/img/logo-200.png\" height=\"35\">\n        </ion-buttons>\n      <ion-title>চাকুরীর খবর</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n    <ion-list>\n        <div *ngFor=\"let result of resultsJob\">\n          <ion-card (click)=goToSource(result.link)>\n            <ion-card-header>\n              <!-- <ion-badge>অর্থনীতি</ion-badge> -->\n              <img *ngIf=\"result.fimg_url;\"  src=\"{{result.fimg_url}}\" />\n              <img *ngIf=\"!result.fimg_url\" src=\"assets/img/news_fallback.png\" />\n              <ion-card-subtitle color=\"dark\" class=\"sectionTitle\" *ngIf=\"result.title.rendered\"\n                [innerHtml]=\"result.title.rendered\">\n              </ion-card-subtitle>\n            </ion-card-header>\n            <img *ngIf=\"result.categories['0']=='531'\" class=\"sourceLogoAllCategory\"\n              src=\"/assets/img/news-source-icons/prothom-alo.png\" />\n            \n          </ion-card>\n        </div>\n        <ion-infinite-scroll threshold=\"85%\" (ionInfinite)=\"loadAllJobNews($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/job/job.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/job/job.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #fe8c00; }\n\n.sourceLogoAllCategory {\n  width: 9em;\n  height: 2em;\n  align-items: right;\n  float: right;\n  border-radius: 0.5em;\n  margin-bottom: 0.2em;\n  margin-right: 0.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haGF5ZGVyL1dvcmsvbmV3LWludGVybmF0aW9uYWwtbmV3cy9zcmMvYXBwL3BhZ2VzL2pvYi9qb2IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQWEsRUFBQTs7QUFHZDtFQUNDLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9iL2pvYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG5cdC0tYmFja2dyb3VuZDogI2ZlOGMwMDtcbn1cblxuLnNvdXJjZUxvZ29BbGxDYXRlZ29yeSB7XG5cdHdpZHRoOiA5ZW07XG5cdGhlaWdodDogMmVtO1xuXHRhbGlnbi1pdGVtczogcmlnaHQ7XG5cdGZsb2F0OiByaWdodDtcblx0Ym9yZGVyLXJhZGl1czogMC41ZW07XG5cdG1hcmdpbi1ib3R0b206IDAuMmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/job/job.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/job/job.page.ts ***!
  \***************************************/
/*! exports provided: JobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPage", function() { return JobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admobfree.service */ "./src/app/services/admobfree.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var JobPage = /** @class */ (function () {
    function JobPage(iab, loadingController, toastController, newsApi, event, platform, admobFreeService, route) {
        this.iab = iab;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.newsApi = newsApi;
        this.event = event;
        this.platform = platform;
        this.admobFreeService = admobFreeService;
        this.route = route;
        this.animationStart = 1;
        this.resultsJob = [];
        this.pageEconomy = 1;
        this.jobFlag = true;
        this.resultFlag = true;
        console.log("inside job");
        this.getJobPosts(this.pageEconomy);
    }
    JobPage.prototype.ngOnInit = function () {
        if (this.platform.is('cordova')) {
            this.admobFreeService.BannerAd();
        }
    };
    /**
   * Gets all the posts
   */
    JobPage.prototype.getJobPosts = function (page) {
        var _this = this;
        // Get the information from the API
        this.newsApi.getAllJobPosts(page).subscribe(function (result) {
            if (result) {
                var lengthOfRes = Object.keys(result).length;
                for (var i = 0; i < lengthOfRes; i++) {
                    _this.resultsJob.push(result[i]);
                }
                _this.pageEconomy = _this.pageEconomy + 1;
                _this.jobFlag = false;
            }
            else {
                _this.resultFlag = false;
            }
            for (var _i = 0, _a = _this.resultsJob; _i < _a.length; _i++) {
                var res = _a[_i];
                var x = res.content.rendered;
                var pat = /href="([^\'\"]+)/g;
                var y = pat.exec(x);
                res.link = y['1'];
            }
        });
    };
    /**
    *
    * Infinite scroll for Economy news section on home page
    */
    JobPage.prototype.loadAllJobNews = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            _this.getJobPosts(_this.pageEconomy);
            event.target.complete();
            if (_this.resultFlag == false) {
                event.target.disabled = true;
            }
        }, 1500);
    };
    JobPage.prototype.goToSource = function (url) {
        this.iab.create(url, '_self', 'location=yes');
    };
    JobPage.prototype.showAutoHideLoader = function () {
        this.loadingController.create({
            spinner: 'crescent',
            cssClass: 'loader',
            duration: 800
        }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
                console.log('Loading...');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], JobPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], JobPage.prototype, "infiniteScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], JobPage.prototype, "slider", void 0);
    JobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.page.html */ "./src/app/pages/job/job.page.html"),
            styles: [__webpack_require__(/*! ./job.page.scss */ "./src/app/pages/job/job.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _services_admobfree_service__WEBPACK_IMPORTED_MODULE_5__["AdmobFreeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], JobPage);
    return JobPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-job-job-module.js.map