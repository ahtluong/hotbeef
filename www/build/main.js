webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseStarterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(101);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ChooseStarterPage);

//# sourceMappingURL=choose-starter.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabModule_settings_settings__ = __webpack_require__(104);
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
    WelcomePage.prototype.tabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabModule_settings_settings__["a" /* SettingsPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-alternate">\n	<div class="ion-fixed">\n		<h3 id="congrats">Congrats,</h3>\n		<h1 id="name">Hot Dog</h1>\n\n		<h3 id="start">Start your journey</h3>\n		<img src="../../assets/icon/arrow.svg" (click)="tabsPage();">\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], WelcomePage);

var _a, _b;
//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwipePage = (function () {
    function SwipePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SwipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SwipePage');
    };
    SwipePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'You\'ve got a match!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    };
    return SwipePage;
}());
SwipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-swipe',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/swipe/swipe.html"*/'<!--\n  Generated template for the SwipePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <navbar-logo></navbar-logo>\n    </ion-title>\n  </ion-navbar>\n  <div class="progress-bar-wrapper">\n    <progress-bar></progress-bar>\n  </div>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <ion-card>\n    <img src="../../../assets/icon/ingredients/broccoli.svg">\n    <ion-card-header>\n      Hello\n    </ion-card-header>\n    <ion-item class="bio">\n      bb pls\n    </ion-item>\n  </ion-card>\n\n  <!-- Swipe left/right -->\n  <ion-grid class="swipe-left-right">\n    <ion-row>\n      <ion-col col-6>\n        <ion-icon class="close" name="close-circle-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n        <ion-icon class="checkmark" name="checkmark-circle"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/swipe/swipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SwipePage);

//# sourceMappingURL=swipe.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-progress',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/progress/progress.html"*/'<!--\n  Generated template for the ProgressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <navbar-logo></navbar-logo>\n    </ion-title>\n  </ion-navbar>\n  <div class="progress-bar-wrapper">\n    <progress-bar></progress-bar>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <img src="../../assets/icon/ingredients/hamburger.svg">\n      </ion-col>\n      <ion-col col-9>\n        <h3>Hamburger</h3>\n        <div class="progress-bar-wrapper" style="width: 100%">\n            <progress-bar class="on-white"></progress-bar>\n          </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-3>\n          <img src="../../assets/icon/ingredients/hamburger.svg">\n        </ion-col>\n        <ion-col col-9>\n          <h3>Hamburger</h3>\n          <div class="progress-bar-wrapper" style="width: 100%">\n              <progress-bar class="on-white"></progress-bar>\n            </div>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/progress/progress.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProgressPage);

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.submitForm = function () {
        this.showAlert();
    };
    SettingsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Profile updated.',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/settings/settings.html"*/'<!--\n  Generated template for the SwipePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      <navbar-logo></navbar-logo>\n    </ion-title>\n  </ion-navbar>\n  <div class="progress-bar-wrapper">\n    <progress-bar></progress-bar>\n  </div>\n</ion-header>\n\n<ion-content padding no-bounce>\n\n<ion-list no-lines>\n    <form (ngSubmit)="submitForm()">\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Bio</ion-label>\n        <ion-input type="textarea"></ion-input>\n      </ion-item>\n      <div class="center">\n        <button ion-button round color="green">Submit</button>\n      </div>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
], SettingsPage);

var _a, _b, _c;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_starter_choose_starter__ = __webpack_require__(100);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CreateAccountPage);

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/choose-starter/choose-starter.module": [
		271,
		6
	],
	"../pages/create-account/create-account.module": [
		272,
		5
	],
	"../pages/tabModule/progress/progress.module": [
		273,
		4
	],
	"../pages/tabModule/settings/settings.module": [
		274,
		3
	],
	"../pages/tabModule/swipe/swipe.module": [
		275,
		2
	],
	"../pages/tabModule/tabs/tabs.module": [
		276,
		1
	],
	"../pages/welcome/welcome.module": [
		277,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabModule_tabs_tabs__ = __webpack_require__(50);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabModule_tabs_tabs__["a" /* TabsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/home/home.html"*/'\n<ion-content no-bounce padding class="page-alternate">\n  <div class="center">\n    <img src="../../assets/imgs/logo.png">\n    <button ion-button round medium (click)=\'createAccount();\'>Create Account</button>\n    <button ion-button round medium (click)="login();">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_account_create_account__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_choose_starter_choose_starter__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabModule_swipe_swipe__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabModule_progress_progress__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabModule_tabs_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabModule_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_logo_navbar_logo__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__ = __webpack_require__(270);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_tabModule_swipe_swipe__["a" /* SwipePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabModule_progress_progress__["a" /* ProgressPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabModule_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabModule_settings_settings__["a" /* SettingsPage */],
            // Components
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_logo_navbar_logo__["a" /* NavbarLogoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/choose-starter/choose-starter.module#ChooseStarterPageModule', name: 'ChooseStarterPage', segment: 'choose-starter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabModule/progress/progress.module#ProgressPageModule', name: 'ProgressPage', segment: 'progress', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabModule/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabModule/swipe/swipe.module#SwipePageModule', name: 'SwipePage', segment: 'swipe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabModule/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_create_account_create_account__["a" /* CreateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_choose_starter_choose_starter__["a" /* ChooseStarterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabModule_swipe_swipe__["a" /* SwipePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabModule_progress_progress__["a" /* ProgressPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabModule_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabModule_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
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

/***/ 270:
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
        this.amount = 40;
        this.text = String(this.amount) + '%';
    }
    return ProgressBarComponent;
}());
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/components/progress-bar/progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div>\n  <div class="progress-bar-container">\n    <div class="progress-bar" [style.width]="amount + \'%\'">\n      <div class="text-wrapper">\n        <p>{{ text }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/components/progress-bar/progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_swipe__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_progress__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(104);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__swipe_swipe__["a" /* SwipePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__progress_progress__["a" /* ProgressPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Swipe"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Progress"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Settings"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"/Users/Emily/GoogleDrive/Projects/Hackathons/VandyHacks4/hotbeef/src/pages/tabModule/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map