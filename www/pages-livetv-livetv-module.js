(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-livetv-livetv-module"],{

/***/ "./src/app/pages/livetv/livetv.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/livetv/livetv.module.ts ***!
  \***********************************************/
/*! exports provided: LivetvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetvPageModule", function() { return LivetvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _livetv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./livetv.page */ "./src/app/pages/livetv/livetv.page.ts");







var routes = [
    {
        path: '',
        component: _livetv_page__WEBPACK_IMPORTED_MODULE_6__["LivetvPage"]
    }
];
var LivetvPageModule = /** @class */ (function () {
    function LivetvPageModule() {
    }
    LivetvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_livetv_page__WEBPACK_IMPORTED_MODULE_6__["LivetvPage"]]
        })
    ], LivetvPageModule);
    return LivetvPageModule;
}());



/***/ }),

/***/ "./src/app/pages/livetv/livetv.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/livetv/livetv.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <img src=\"../../../assets/img/logo-200.png\" height=\"35\">\n      </ion-buttons>\n    <ion-title>লাইভ টিভি ও পত্রিকা</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-toolbar id=\"segment\">\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"1\" scrollable >\n    <ion-segment-button value=\"1\" id=\"1\">\n      <ion-label><b>লাইভ টিভি</b></ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" id=\"2\">\n      <ion-label><b>পত্রিকা</b></ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<ion-content id=\"ionContentLive\" (swipeleft)=\"swipeLeftPress($event)\" (swiperight)=\"swipeRightPress($event)\">\n\n <ion-row >\n  <ion-col size=\"6\" *ngFor=\"let c of tv_newspapers\" (click)=goToChannel(c.url)>\n    <ion-card *ngIf=\"showSegment==1\">\n      <img src=\"{{c.logo}}\" class=\"tv-logo\">\n      <!-- <ion-label color=\"warning\">{{c.channelName}}</ion-label> -->\n    </ion-card>\n\n    <ion-card *ngIf=\"showSegment==2\" style=\"height: 4em;\">\n      <img src=\"{{c.logo}}\" class=\"newpaperLogo\">\n    </ion-card>  \n\n    </ion-col>  \n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/livetv/livetv.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/livetv/livetv.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #fe8c00; }\n\nion-content {\n  /*--background: #424242;*/\n  --background:#f1f1f1\n; }\n\n#segment {\n  --background: #fabc5a1b; }\n\n.newpaperLogo {\n  margin-top: 0.5em; }\n\n.tv-logo {\n  /*\tmax-height: 50px;\n\twidth: unset;*/\n  margin: 0 auto;\n  height: 6em; }\n\n.newpaperHeader {\n  padding: 0 0 1em 0.2em; }\n\nion-segment-button {\n  border: none;\n  font-weight: 900;\n  font-size: 0.8em;\n  --indicator-color-checked: #fcb13c;\n  --color-activated: #fcb13c;\n  --color-checked: #fcb13c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haGF5ZGVyL1dvcmsvY29yb25hLXByb2ovc3JjL2FwcC9wYWdlcy9saXZldHYvbGl2ZXR2LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGl2ZXR2L2xpdmV0di5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLHlCQUFBO0VBQ0E7QUFBYSxFQUFBOztBQUVqQjtFQUNDLHVCQUFhLEVBQUE7O0FBRWQ7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQTtlQ0NlO0VEQ2QsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHWjtFQUNDLHNCQUFzQixFQUFBOztBQUd2QjtFQUNDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUEwQjtFQUMxQiwwQkFBa0I7RUFDbEIsd0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXZldHYvbGl2ZXR2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZThjMDA7XG59XG5pb24tY29udGVudCB7XG4gICAgLyotLWJhY2tncm91bmQ6ICM0MjQyNDI7Ki9cbiAgICAtLWJhY2tncm91bmQ6I2YxZjFmMVxufVxuI3NlZ21lbnR7XG5cdC0tYmFja2dyb3VuZDogI2ZhYmM1YTFiO1xufVxuLm5ld3BhcGVyTG9nb3tcblx0bWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi50di1sb2dve1xuLypcdG1heC1oZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiB1bnNldDsqL1xuXHRtYXJnaW46IDAgYXV0bztcblx0aGVpZ2h0OiA2ZW07XG59XG5cbi5uZXdwYXBlckhlYWRlcntcblx0cGFkZGluZzogMCAwIDFlbSAwLjJlbTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRmb250LXNpemU6IDAuOGVtO1xuXHQtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjZmNiMTNjO1xuXHQtLWNvbG9yLWFjdGl2YXRlZDogI2ZjYjEzYztcblx0LS1jb2xvci1jaGVja2VkOiAjZmNiMTNjO1xuICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZThjMDA7IH1cblxuaW9uLWNvbnRlbnQge1xuICAvKi0tYmFja2dyb3VuZDogIzQyNDI0MjsqL1xuICAtLWJhY2tncm91bmQ6I2YxZjFmMVxuOyB9XG5cbiNzZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFiYzVhMWI7IH1cblxuLm5ld3BhcGVyTG9nbyB7XG4gIG1hcmdpbi10b3A6IDAuNWVtOyB9XG5cbi50di1sb2dvIHtcbiAgLypcdG1heC1oZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiB1bnNldDsqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiA2ZW07IH1cblxuLm5ld3BhcGVySGVhZGVyIHtcbiAgcGFkZGluZzogMCAwIDFlbSAwLjJlbTsgfVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICNmY2IxM2M7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmNiMTNjO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmY2IxM2M7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/livetv/livetv.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/livetv/livetv.page.ts ***!
  \*********************************************/
/*! exports provided: LivetvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetvPage", function() { return LivetvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LivetvPage = /** @class */ (function () {
    function LivetvPage(iab, httpClient) {
        this.iab = iab;
        this.httpClient = httpClient;
        this.tvChannels = [];
        this.newsPapers = [];
        this.tv_newspapers = [];
        this.showSegment = 1;
        this.tvChannels = [
            // tslint:disable-next-line: indent
            { channelName: 'BTV World', url: 'https://www.bioscopelive.com/en/channel/btv-world', logo: 'https://i2.wp.com/tvbd.live/wp-content/uploads/2016/11/btv-world.png?fit=400%2C225' },
            { channelName: 'Jamuna TV', url: 'http://www.jagobd.com/jamunatv', logo: 'http://www.deshibiz.com/img/media/post/1463733058_jamunatv6.jpg' },
            { channelName: 'Somoy News', url: 'http://somoynews.tv/live.php', logo: 'https://www.freeetv.com/images/03_logo/Somoy_News_Bangladesh.jpg' },
            { channelName: 'Ekattur TV', url: 'https://www.bioscopelive.com/en/channel/ekattur-tv', logo: '../../../assets/img/tv-logos/ekattor-tv.png' },
            { channelName: 'Independent TV', url: 'https://www.bioscopelive.com/en/channel/independent-tv', logo: '../../../assets/img/tv-logos/independent-tv-logo.png' },
            { channelName: 'ATN Bangla', url: 'https://www.bioscopelive.com/en/channel/atn-bangla', logo: '../../../assets/img/tv-logos/atn-bangla-tv.png' },
            { channelName: 'My TV', url: 'https://www.bioscopelive.com/en/channel/my-tv', logo: '../../../assets/img/tv-logos/my-tv-logo.png' },
            { channelName: 'SA TV', url: 'https://www.bioscopelive.com/en/channel/sa-tv', logo: '../../../assets/img/tv-logos/satv.png' },
            { channelName: 'ATN NEWS', url: 'https://www.bioscopelive.com/en/channel/atn-news', logo: '../../../assets/img/tv-logos/Atn_news.png' },
            { channelName: 'BBC World', url: 'https://www.bioscopelive.com/en/channel/bbc-world', logo: '../../../assets/img/tv-logos/bbc_world.png' },
            { channelName: 'Ananda TV', url: 'https://www.bioscopelive.com/en/channel/ananda-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/HRjXQdYEqsE.png' },
            { channelName: 'Nagorik Tv', url: 'https://www.bioscopelive.com/en/channel/nagorik-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/6ms91aehi2a.png' },
            { channelName: 'Mohona TV', url: 'https://www.bioscopelive.com/en/channel/mohona-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/UU3a2v6E7Zs.png' },
            { channelName: 'Boishakhi TV', url: 'https://www.bioscopelive.com/en/channel/boishakhi-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/20mgRCbFLz5.png' },
            { channelName: 'DBC News', url: 'https://www.bioscopelive.com/en/channel/dbc-news', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/6GxyIRO4P74.png' },
            { channelName: 'Asian TV', url: 'https://www.bioscopelive.com/en/channel/asian-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/84xExHj3DJ8.png' },
            { channelName: 'Ruposhi Bangla', url: 'https://www.bioscopelive.com/en/channel/ruposhi-bangla', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/105QtNR46SH.png' },
            { channelName: 'ATN Islamic TV', url: 'https://www.bioscopelive.com/en/channel/atn-islamic-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/DJcpP2t4Mdp.png' },
            { channelName: 'Sangsad Bangla', url: 'https://www.bioscopelive.com/en/channel/sangsad-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/So3Og8HY4uN.png' },
            { channelName: 'Al Jazeera', url: 'https://www.bioscopelive.com/en/channel/al-jazeera', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/0iLtx9H8sr5.png' },
            { channelName: 'Channel 24', url: 'http://www.channel24bd.tv/live', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BJaziwAkuVDBZRuNBuArfKqzINnznF863p6bFp48ynoUoa4L' },
            { channelName: 'Channeli', url: 'https://www.channelionline.com/live-tv/', logo: 'https://dxtm6s46jarcs.cloudfront.net/wp-content/uploads/2015/03/channel-i-logo.jpg' },
            { channelName: 'RTV', url: 'https://www.youtube.com/watch?v=nqNWfE_Nq2U', logo: 'https://www.rtvbd.tv/templates/rtv/img/logo.png' },
            { channelName: 'NTV', url: 'https://www.channel-bd.net/channel.php?id=3', logo: 'https://www.trzcacak.rs/myfile/detail/354-3547607_ntv-logo-bangladesh-tv-channel.png' },
            { channelName: 'GTV', url: 'https://www.nbs24.org/live-channel-nine-%E0%A6%9A%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AD-channel-9-live/', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHS9VSC-V5QnK9mbSn0mjZUYxp1QGMAAAY9jc0itHn1dMWZNk' },
            { channelName: 'NEWS24 TV', url: 'http://www.jagobd.com/news24tv', logo: 'http://www.southafricanews24.net/wp-content/uploads/news24.png' },
            { channelName: 'Peace TV', url: 'http://peacetvnetwork.visionip.tv/live/62424', logo: 'http://www.desifree.tv/wp-content/uploads/peace-tv.jpg' },
            { channelName: 'Gaan Bangla', url: 'https://www.bioscopelive.com/en/channel/gaan-bangla', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/um9o21i3T1E.png' },
            { channelName: 'Bongo Movies', url: 'https://www.bioscopelive.com/en/channel/bongo-movies', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/Mq2jeWV007t.png' },
            { channelName: '9XM MUSIC', url: 'http://9xm.in/livetv.php', logo: 'https://www.indiantelevision.com/sites/default/files/images/tv-images/2014/05/29/9xm_new.jpg' },
        ];
        this.newsPapers = [
            // https://www.dsebd.org/images/logo.png
            // https://www.dsebd.org/images/dse-name.jpg
            { channelName: 'www.dsebd.org', url: 'https://www.dsebd.org/', logo: 'https://www.dsebd.org/images/dse-name.jpg' },
            { channelName: 'Bangladesh Pratidin', url: 'https://www.bd-pratidin.com/', logo: 'https://www.bd-pratidin.com/assets/importent_images/main_logo.gif?v=1567837737' },
            { channelName: 'Kaler Kantho', url: 'https://www.kalerkantho.com/index.php', logo: 'https://www.kalerkantho.com/assets/site/img/logo.png' },
            { channelName: 'Jugantor', url: 'https://www.jugantor.com/', logo: 'https://www.jugantor.com/templates/jugantor-v2/images/logo_main.png?v=1' },
            { channelName: 'Ittefaq', url: 'https://www.ittefaq.com.bd/', logo: 'https://www.ittefaq.com.bd/templates/desktop-v1/images/main-logo.png' },
            { channelName: 'Manab Zamin', url: 'http://www.mzamin.com/', logo: 'http://www.mzamin.com/asset/images/logos.png' },
            { channelName: 'Samakal', url: 'https://samakal.com/', logo: 'https://samakal.com/assets/images/logo-bn.png' },
            { channelName: 'Amader Shomoy', url: 'http://www.dainikamadershomoy.com/', logo: 'http://www.dainikamadershomoy.com/files/assets/img/main-logo.png' },
            { channelName: 'Prothom Alo', url: 'https://www.prothomalo.com/', logo: 'https://paloimages.prothom-alo.com/contents/themes/public/style/images/Prothom-Alo.png' },
            { channelName: 'Janakantha', url: 'http://web.dailyjanakantha.com/', logo: 'http://web.dailyjanakantha.com/layouts/website/assets/img/header-top.png' },
            { channelName: 'Inqilab', url: 'https://www.dailyinqilab.com/', logo: 'https://www.dailyinqilab.com/includes/themes/dailyinqilab/images/logo.png' },
            { channelName: 'Bhorer Kagoj', url: 'https://www.bhorerkagoj.com/', logo: 'https://www.w3newspapers.com/bangladesh/images/bhorerkagoj.png' },
            { channelName: 'Daily Star', url: 'https://www.thedailystar.net/', logo: 'https://assetsds.cdnedge.bluemix.net/sites/all/themes/tds/logo.svg' },
            { channelName: 'Observer', url: 'https://www.observerbd.com/', logo: 'https://www.observerbd.com/files/logo.jpg' },
            { channelName: 'Bangladesh Today', url: 'http://thebangladeshtoday.com/', logo: 'https://thebangladeshtoday.com/wp-content/uploads/2018/06/TBT-Logo-Transparent-1-1.png' },
            { channelName: 'bdnews24.com', url: 'https://bangla.bdnews24.com/', logo: 'https://d30fl32nd2baj9.cloudfront.net/media/2013/01/04/logo1.png1/BINARY/logo1.png' },
            { channelName: 'banglanews24.com', url: 'https://www.banglanews24.com', logo: 'https://www.banglanews24.com/media/imgAll/2016October/bg/banglanews_logo20180725112204.jpg' },
            { channelName: 'dailystockbangladesh', url: 'https://www.dailystockbangladesh.com', logo: '../../../assets/img/news-source-icons/dailystock.png' },
        ];
        this.tv_newspapers = this.tvChannels;
    }
    LivetvPage.prototype.goToChannel = function (url) {
        var openBrowser = this.showSegment == 1 ? '_system' : '_self';
        this.iab.create(url, openBrowser, 'location=yes');
    };
    LivetvPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev.detail.value);
        this.showSegment = ev.detail.value;
        this.showSegment == 1 ? document.getElementById("ionContentLive").style.setProperty('--background', '#f1f1f1') : document.getElementById("ionContentLive").style.setProperty('--background', '#ffffff');
        this.goToSegment();
    };
    LivetvPage.prototype.goToSegment = function () {
        this.tv_newspapers = this.showSegment == 1 ? this.tvChannels : this.newsPapers;
        var nextButtonNumber = this.showSegment;
        document.getElementById(String(nextButtonNumber)).click();
        var buttonWidth = document.getElementById(String(nextButtonNumber)).offsetWidth;
        document.getElementById('segment').scrollLeft = nextButtonNumber * buttonWidth - buttonWidth;
    };
    LivetvPage.prototype.swipeLeftPress = function ($event) {
        this.showSegment = Number(this.showSegment) + 1;
        if (this.showSegment > 2) {
            this.showSegment = 1;
        }
        this.goToSegment();
    };
    LivetvPage.prototype.swipeRightPress = function ($event) {
        this.showSegment = Number(this.showSegment) - 1;
        if (this.showSegment < 1) {
            this.showSegment = 2;
        }
        this.goToSegment();
    };
    LivetvPage.prototype.ngOnInit = function () {
    };
    LivetvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livetv',
            template: __webpack_require__(/*! ./livetv.page.html */ "./src/app/pages/livetv/livetv.page.html"),
            styles: [__webpack_require__(/*! ./livetv.page.scss */ "./src/app/pages/livetv/livetv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LivetvPage);
    return LivetvPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-livetv-livetv-module.js.map