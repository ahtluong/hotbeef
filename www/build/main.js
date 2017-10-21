webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-alternate">\n	<h3>Congrats</h3>\n	<h1>Hot Dog</h1>\n\n	<h3>Start your journey</h3>\n	<ion-icon name="arrow-round-forward" ios="md-arrow-round-forward" android="md-arrow-round-forward"></ion-icon>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_starter_choose_starter__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAccountPage = (function () {
    function CreateAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAccountPage');
    };
    CreateAccountPage.prototype.submitForm = function () {
        console.log('Form submitted');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_starter_choose_starter__["a" /* ChooseStarterPage */]);
    };
    return CreateAccountPage;
}());
CreateAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-account',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/create-account/create-account.html"*/'<!--\n  Generated template for the CreateAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-alternate">\n  <div class="logo">\n    <img src="../../assets/imgs/logo.png">\n  </div>\n\n  <ion-list no-lines>\n    <form (ngSubmit)="submitForm()">\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <div class="center">\n        <button ion-button round color="green">Submit</button>\n      </div>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/create-account/create-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CreateAccountPage);

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProgressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgressPage = (function () {
    function ProgressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProgressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgressPage');
    };
    return ProgressPage;
}());
ProgressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-progress',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/progress/progress.html"*/'<!--\n  Generated template for the ProgressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <navbar-logo></navbar-logo>\n    </ion-title>\n  </ion-navbar>\n  <div class="progress-bar-wrapper">\n    <progress-bar></progress-bar>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        ye\n      </ion-col>\n      <ion-col col-10>\n        ye\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/progress/progress.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ProgressPage);

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_progress__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SwipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SwipePage = (function () {
    function SwipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SwipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SwipePage');
    };
    SwipePage.prototype.progressPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__progress_progress__["a" /* ProgressPage */]);
    };
    return SwipePage;
}());
SwipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-swipe',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/swipe/swipe.html"*/'<!--\n  Generated template for the SwipePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <navbar-logo></navbar-logo>\n    </ion-title>\n  </ion-navbar>\n  <div class="progress-bar-wrapper">\n    <progress-bar></progress-bar>\n  </div>\n\n</ion-header>\n\n<ion-content padding no-bounce>\n  <ion-card>\n    <img src="../../assets/imgs/logo.png">\n    <ion-card-header>\n      Hello\n    </ion-card-header>\n    <ion-item class="bio">\n      bb pls\n    </ion-item>\n  </ion-card>\n  <button ion-button (click)=\'progressPage()\'>go to progress page</button>\n\n  <!-- Swipe left/right -->\n  <ion-grid class="swipe-left-right">\n    <ion-row>\n      <ion-col col-6>\n        <ion-icon class="close" name="close-circle-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n        <ion-icon class="checkmark" name="md-checkmark-circle-outline"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/swipe/swipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SwipePage);

//# sourceMappingURL=swipe.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/choose-starter/choose-starter.module": [
		269,
		4
	],
	"../pages/create-account/create-account.module": [
		270,
		3
	],
	"../pages/progress/progress.module": [
		271,
		2
	],
	"../pages/swipe/swipe.module": [
		272,
		1
	],
	"../pages/welcome/welcome.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swipe_swipe__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_account_create_account__["a" /* CreateAccountPage */]);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__swipe_swipe__["a" /* SwipePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/home/home.html"*/'\n<ion-content no-bounce padding class="page-alternate">\n  <div class="center">\n    <img src="../../assets/imgs/logo.png">\n    <button ion-button round medium (click)=\'createAccount();\'>Create Account</button>\n    <button ion-button round medium (click)="login();">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_account_create_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_choose_starter_choose_starter__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_swipe_swipe__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_progress_progress__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_logo_navbar_logo__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_progress_bar_progress_bar__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Pages







// Components


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            // Pages
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_create_account_create_account__["a" /* CreateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_choose_starter_choose_starter__["a" /* ChooseStarterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_swipe_swipe__["a" /* SwipePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_progress_progress__["a" /* ProgressPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
            // Components
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_logo_navbar_logo__["a" /* NavbarLogoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/choose-starter/choose-starter.module#ChooseStarterPageModule', name: 'ChooseStarterPage', segment: 'choose-starter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/progress/progress.module#ProgressPageModule', name: 'ProgressPage', segment: 'progress', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/swipe/swipe.module#SwipePageModule', name: 'SwipePage', segment: 'swipe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_create_account_create_account__["a" /* CreateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_choose_starter_choose_starter__["a" /* ChooseStarterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_swipe_swipe__["a" /* SwipePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_progress_progress__["a" /* ProgressPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NavbarLogoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NavbarLogoComponent = (function () {
    function NavbarLogoComponent() {
        console.log('Hello NavbarLogoComponent Component');
        this.text = 'Hello World';
    }
    return NavbarLogoComponent;
}());
NavbarLogoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'navbar-logo',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/components/navbar-logo/navbar-logo.html"*/'<!-- Generated template for the NavbarLogoComponent component -->\n<div>\n  <img src="../assets/imgs/logo-inline.png">\n</div>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/components/navbar-logo/navbar-logo.html"*/
    }),
    __metadata("design:paramtypes", [])
], NavbarLogoComponent);

//# sourceMappingURL=navbar-logo.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        console.log('Hello ProgressBarComponent Component');
        this.amount = 50;
        this.text = String(this.amount) + '%';
    }
    return ProgressBarComponent;
}());
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/components/progress-bar/progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div>\n  <div class="progress-bar-container">\n    <div class="progress-bar" width="">\n      <div class="text-wrapper">\n        <p>{{ text }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/components/progress-bar/progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseStarterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChooseStarterPage = (function () {
    function ChooseStarterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChooseStarterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChooseStarterPage');
        var options = document.getElementsByClassName('options');
        var context = this;
        var _loop_1 = function (i) {
            options[i].addEventListener('click', function (e) {
                _this.onClick(options[i]);
            });
        };
        for (var i = 0; i < options.length; i++) {
            _loop_1(i);
        }
    };
    ChooseStarterPage.prototype.onClick = function (el) {
        console.log(el);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    return ChooseStarterPage;
}());
ChooseStarterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-choose-starter',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/choose-starter/choose-starter.html"*/'<!--\n  Generated template for the ChooseStarterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Who are you?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-alternate">\n\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n			<ion-col>\n				<div class="options">\n					<img src="../../assets/icon/ingredients/001-food-5.svg">\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/choose-starter/choose-starter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ChooseStarterPage);

//# sourceMappingURL=choose-starter.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map