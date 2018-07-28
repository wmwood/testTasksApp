(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _shoot_shoot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoot/shoot.component */ "./src/app/shoot/shoot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    { path: 'shoot', component: _shoot_shoot_component__WEBPACK_IMPORTED_MODULE_3__["ShootComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _shoot_shoot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoot/shoot.component */ "./src/app/shoot/shoot.component.ts");
/* harmony import */ var _numberpad_numberpad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./numberpad/numberpad.component */ "./src/app/numberpad/numberpad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"],
                _shoot_shoot_component__WEBPACK_IMPORTED_MODULE_6__["ShootComponent"],
                _numberpad_numberpad_component__WEBPACK_IMPORTED_MODULE_7__["NumberpadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/numberpad/numberpad.component.html":
/*!****************************************************!*\
  !*** ./src/app/numberpad/numberpad.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline is-1 is-mobile is-variable\">\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(1)\">1</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(2)\">2</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(3)\">3</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(4)\">4</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(5)\">5</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(6)\">6</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(7)\">7</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(8)\">8</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(9)\">9</button>\r\n  </div>\r\n  <div class=\"column is-one-third is-offset-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" (click)=\"press(0)\">0</button>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <button class=\"button is-warning is-medium is-fullwidth\" [disabled]=\"phoneNumber.length === 0\" (click)=\"press()\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-backspace\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/numberpad/numberpad.component.ts":
/*!**************************************************!*\
  !*** ./src/app/numberpad/numberpad.component.ts ***!
  \**************************************************/
/*! exports provided: NumberpadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberpadComponent", function() { return NumberpadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberpadComponent = /** @class */ (function () {
    function NumberpadComponent() {
        this.phoneNumberChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBackspaceHidden = true;
    }
    NumberpadComponent.prototype.ngOnInit = function () { };
    NumberpadComponent.prototype.press = function (key) {
        if (key != null && key !== undefined) {
            this.phoneNumber += key;
        }
        else {
            this.phoneNumber = this.phoneNumber.substring(0, this.phoneNumber.length - 1);
        }
        this.phoneNumberChange.emit(this.phoneNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NumberpadComponent.prototype, "phoneNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NumberpadComponent.prototype, "phoneNumberChange", void 0);
    NumberpadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-numberpad',
            template: __webpack_require__(/*! ./numberpad.component.html */ "./src/app/numberpad/numberpad.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NumberpadComponent);
    return NumberpadComponent;
}());



/***/ }),

/***/ "./src/app/shoot/shoot.component.html":
/*!********************************************!*\
  !*** ./src/app/shoot/shoot.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-primary is-fullheight\">\r\n  <div class=\"hero-body\" style=\"padding: 1.5rem\">\r\n    <video #video id=\"video\" autoplay style=\"border: 1px solid red; width:100%; margin:0;\" [hidden]=\"canvasIsVisible\"></video>\r\n    <canvas #canvas width=\"1280\" height=\"720\" style=\"border: 1px solid red; width:100%; margin:0;\" [hidden]=\"!canvasIsVisible\"></canvas>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/shoot/shoot.component.ts":
/*!******************************************!*\
  !*** ./src/app/shoot/shoot.component.ts ***!
  \******************************************/
/*! exports provided: ShootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShootComponent", function() { return ShootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShootComponent = /** @class */ (function () {
    function ShootComponent() {
        this.canvasIsVisible = false;
        this.onScreenText = '';
        this.captures = [];
    }
    ShootComponent.prototype.ngOnInit = function () {
        this.countDown();
    };
    ShootComponent.prototype.countDown = function () {
        var _this = this;
        this.onScreenText = '3';
        setTimeout(function () { return (_this.onScreenText = '2'); }, 1000);
        setTimeout(function () { return (_this.onScreenText = '1'); }, 2000);
        setTimeout(function () { return _this.capture(); }, 3000);
    };
    ShootComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                _this.video.nativeElement.src = window.URL.createObjectURL(stream);
                _this.video.nativeElement.play();
            });
        }
    };
    ShootComponent.prototype.capture = function () {
        this.onScreenText = '';
        this.canvas.nativeElement
            .getContext('2d')
            .drawImage(this.video.nativeElement, 0, 0, 1280, 720);
        this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
        this.canvasIsVisible = true;
        setTimeout(function () {
            this.canvasIsVisible = false;
        }, 1500);
        if (this.captures.length < 4) {
            this.countDown();
        }
        else {
            alert('processing!');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ShootComponent.prototype, "video", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ShootComponent.prototype, "canvas", void 0);
    ShootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoot',
            template: __webpack_require__(/*! ./shoot.component.html */ "./src/app/shoot/shoot.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ShootComponent);
    return ShootComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-primary is-fullheight\">\r\n  <div class=\"hero-head has-text-centered\">\r\n    <h1>Wood Family Photo Booth</h1>\r\n  </div>\r\n  <div class=\"hero-body\">\r\n    <div class=\"columns is-mobile\" style=\"flex-grow: 1\">\r\n      <div class=\"column is-two-thirds\">\r\n        <div class=\"container has-text-centered\">\r\n          <h1 class=\"title\">Enter your cell phone number</h1>\r\n          <div class=\"field has-text-centered\">\r\n            <div class=\"control has-icons-left\" style=\"width: 100%; max-width: 400px; display: inline-block;\">\r\n              <input class=\"input is-large\" type=\"tel\" disabled=\"disabled\" [(ngModel)]=\"phoneNumber\" placeholder=\"(602) 459-0390\" />\r\n              <span class=\"icon is-medium is-left\">\r\n                <i class=\"fal fa-phone\"></i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column is-one-third\">\r\n        <app-numberpad [(phoneNumber)]=\"phoneNumber\"></app-numberpad>\r\n      </div>\r\n    </div>\r\n    <button class=\"button is-large is-link\" style=\"position: fixed; bottom: 35px; left: 50%; transform: translate(-50%)\" routerLink=\"/shoot\"\r\n      [disabled]=\"phoneNumber.length !== 10\">Begin!</button>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.phoneNumber = "";
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\photo-booth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map