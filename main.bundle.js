webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container paddingTop\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <ng-app-heroes-list #list (hero)=\"detail.hero = $event\"></ng-app-heroes-list>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <ng-app-hero-detail #detail></ng-app-hero-detail>\n      <!--<app-hero-detail ></app-hero-detail>-->\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: black;\n  overflow: scroll; }\n  @media only screen and (min-width: 767px) {\n    body {\n      overflow: hidden; } }\n\n@media only screen and (min-width: 767px) {\n  ng-app-hero-detail,\n  ng-app-heroes-list {\n    height: 98vh;\n    display: block; } }\n\n@media only screen and (min-width: 767px) {\n  ng-app-hero-detail > p-panel,\n  ng-app-heroes-list > p-panel {\n    height: 100vh;\n    display: block; } }\n\n@media only screen and (min-width: 767px) {\n  ng-app-hero-detail > p-panel > .ui-panel > .ui-panel-content-wrapper,\n  ng-app-heroes-list > p-panel > .ui-panel > .ui-panel-content-wrapper {\n    height: 90vh;\n    overflow: scroll; } }\n\n@media only screen and (min-width: 767px) {\n  ng-app-hero-detail > p-panel > .ui-panel > .ui-panel-content-wrapper > .ui-panel-content.ui-widget-content,\n  ng-app-heroes-list > p-panel > .ui-panel > .ui-panel-content-wrapper > .ui-panel-content.ui-widget-content {\n    height: 100vh;\n    overflow: scroll; } }\n\n@media only screen and (min-width: 767px) {\n  ng-app-hero-detail .ui-datagrid,\n  ng-app-heroes-list .ui-datagrid {\n    height: 98vh;\n    overflow: scroll; } }\n\n.ui-panel {\n  padding: 0px; }\n\nspan.ui-cell-data {\n  height: 150px !important;\n  width: 350px !important;\n  display: block  !important;\n  word-wrap: normal !important; }\n\n.ui-datatable-resizable tbody td {\n  white-space: pre-wrap  !important; }\n\n.ui-tooltip {\n  max-width: 100px !important;\n  white-space: normal;\n  background-color: blue; }\n\ndiv .ui-widget .ui-tooltip .ui-tooltip-right .tooltipDescription {\n  max-width: 100px !important;\n  white-space: normal !important;\n  background-color: blue; }\n\n.mainImage {\n  width: 100%;\n  max-width: 500px;\n  min-height: 300px;\n  background-image: url(\"https://luizcavalieri.github.io/marvel-comic-app/assets/img/marvel-46.jpg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: block;\n  float: left; }\n\n.paddingTop {\n  padding-top: 10px; }\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  height: 300px;\n  margin: 1rem;\n  position: relative;\n  width: 300px; }\n\n.card-effect {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng-app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MARVEL_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PRIVATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PUBLIC_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TS; });

/*
 Declare Environment Variables
 */
/*
 Assign variables according to Environment
 */
/*
 Export Constants
 */
var MARVEL_API_URL = 'http://gateway.marvel.com:80/v1/public/';
var PRIVATE_KEY = '3a9788835969952aaf6684563f14f3f403ff5be7';
var PUBLIC_KEY = '5697934f4dd8b26d2b4da6cb889ffced';
var TS = '1';


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_list_heroes_list_component__ = __webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_hero_service__ = __webpack_require__("../../../../../src/app/service/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_logging_service__ = __webpack_require__("../../../../../src/app/service/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_datatable_datatable__ = __webpack_require__("../../../../primeng/components/datatable/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_datatable_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_datatable_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_components_datagrid_datagrid__ = __webpack_require__("../../../../primeng/components/datagrid/datagrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_components_datagrid_datagrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_components_datagrid_datagrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_components_panel_panel__ = __webpack_require__("../../../../primeng/components/panel/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_components_panel_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_components_panel_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_tooltip_tooltip__ = __webpack_require__("../../../../primeng/components/tooltip/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_tooltip_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_components_tooltip_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_message_service__ = __webpack_require__("../../../../../src/app/service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__heroes_list_heroes_list_component__["a" /* HeroesListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_primeng_components_datatable_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_components_datagrid_datagrid__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_components_panel_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_components_tooltip_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientXsrfModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__service_logging_service__["a" /* LoggingService */],
                __WEBPACK_IMPORTED_MODULE_8__service_hero_service__["a" /* HeroService */],
                __WEBPACK_IMPORTED_MODULE_15__service_message_service__["a" /* MessageService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Check if hero object is null-->\n<p-panel *ngIf=\"!hero\">\n  <p-header>\n    <h3>\n      Please choose your Superhero!\n    </h3>\n  </p-header>\n    <div class=\"col-sm-12\">\n        <img src=\"/assets/img/marvel-46.jpg\" alt=\"Marvel Comic App\">\n    </div>\n\n    <div class=\"col-sm-12\">\n      <h1>\n        Marvel Hero!\n      </h1>\n\n      <h4>\n        If you want to be the master of Marvel superheroes, you are in the right place!\n      </h4>\n\n      <p>\n        Click on the hero you want to know more about, and scroll down to check the details!\n      </p>\n\n    </div>\n    <h3>\n      Have fun!\n    </h3>\n  <p-footer>\n\n  </p-footer>\n\n</p-panel>\n\n<!--Check if hero object is null-->\n<p-panel *ngIf=\"hero\">\n\n  <!--loading details from hero selected-->\n  <p-header>\n    <h3>\n      {{ hero.name }}\n    </h3>\n  </p-header>\n\n  <p>\n    {{ hero.description }}\n  </p>\n\n  <div class=\"row\">\n\n\n    <div class=\"col-sm-12\">\n      <img class=\"imageDetail\"\n           src=\"{{ hero.thumbnail.path }}.{{ hero.thumbnail.extension }}\"\n           alt=\"Thumbnail {{ hero.name }}\"/>\n    </div>\n\n    <div class=\"col-sm-12\">\n      <h4> Stories Present </h4>\n\n      <!--listing stories from hero-->\n      <div *ngIf=\"hero.stories['available'] > 0\">\n\n        <ul class=\"listStyling\">\n          <li *ngFor=\"let comic of hero.stories['items']\">\n            {{ comic['name'] }}\n          </li>\n        </ul>\n\n      </div>\n\n    </div>\n  </div>\n</p-panel>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng-app-hero-detail img {\n  width: 100%; }\n\nng-app-hero-detail .ui-panel {\n  border: 0px solid; }\n\n.listStyling {\n  font-size: 16px;\n  line-height: 30px; }\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  min-height: 500px;\n  height: auto;\n  margin: 1rem;\n  position: relative;\n  width: 98%;\n  padding: 40px; }\n\n.card-effect {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_hero_model__ = __webpack_require__("../../../../../src/app/model/hero.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('hero'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_hero_model__["a" /* HeroModel */])
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng-app-hero-detail',
            template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--List of heroes iterate from API-->\n<p-dataGrid [value]=\"heroList\" [paginator]=\"true\" [rows]=\"6\" [paginator]=\"true\">\n  <p-header>\n    <h3>\n      List of Heroes\n    </h3>\n  </p-header>\n\n  <ng-template let-heroList\n            pTemplate=\"item\"\n            class=\"pointer\">\n\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 pointer\"\n         (click)=\"selectHero(heroList)\">\n\n      <p-panel [header]=\"heroList.name\"\n               [style]=\"{'text-align':'center'}\"\n               class=\"pointer\">\n\n        <div class=\"thumbnailWrapper pointer\">\n          <img class=\"pointer\"\n               src=\"{{ heroList.thumbnail.path }}.{{ heroList.thumbnail.extension }}\"\n               alt=\"Thumbnail {{ heroList.name }}\"/>\n        </div>\n\n        <div class=\"pointer\">\n          {{heroList.name}}\n        </div>\n\n        <hr class=\"ui-widget-content \"\n            style=\"border-top:0\">\n      </p-panel>\n\n    </div>\n  </ng-template>\n</p-dataGrid>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnailWrapper {\n  width: 150px;\n  height: 150px;\n  margin: 20% auto;\n  overflow: hidden;\n  border-radius: 50%;\n  position: relative; }\n  @media screen and (max-width: 1199px) {\n    .thumbnailWrapper {\n      width: 100px;\n      height: 100px; } }\n  @media screen and (max-width: 767px) {\n    .thumbnailWrapper {\n      width: 150px;\n      height: 150px; } }\n\n.thumbnailWrapper img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  height: 100%; }\n\n.textWrapColum {\n  text-wrap: normal; }\n\ntd span {\n  text-wrap: normal !important;\n  word-wrap: normal; }\n\n.fillingCell {\n  width: 100%;\n  height: 100%;\n  text-wrap: normal !important;\n  word-break: normal !important;\n  display: block; }\n\nspan.ui-cell-data {\n  height: 150px !important;\n  width: 350px !important;\n  display: block  !important;\n  word-wrap: normal !important; }\n\n.ui-datagrid-content .ui-panel-titlebar {\n  height: 60px; }\n\n.ui-datagrid-content .ui-panel-content-wrapper .pointer {\n  min-height: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hero_service__ = __webpack_require__("../../../../../src/app/service/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesListComponent = (function () {
    function HeroesListComponent(heroService) {
        this.heroService = heroService;
        // heroes$: Observable<HeroModel[]>;
        this.heroSelectedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeroesListComponent.prototype.ngOnInit = function () {
        this.getHeroList();
    };
    //getting data from the service hero.
    HeroesListComponent.prototype.getHeroList = function () {
        var _this = this;
        var heroes$ = this.heroService.getHeroes();
        heroes$.subscribe(function (heroes) { return _this.heroList = heroes['data']['results']; }, function (heroes) { return console.log(heroes['data']['results']); });
    };
    // Method to get selected hero from datagrid
    HeroesListComponent.prototype.selectHero = function (hero) {
        this.heroSelected = hero;
        this.heroSelectedEvent.emit(hero);
        console.log(this.heroSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('hero'),
        __metadata("design:type", Object)
    ], HeroesListComponent.prototype, "heroSelectedEvent", void 0);
    HeroesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng-app-heroes-list',
            template: __webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroService */]])
    ], HeroesListComponent);
    return HeroesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/hero.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroModel; });
var HeroModel = (function () {
    function HeroModel() {
    }
    return HeroModel;
}());



/***/ }),

/***/ "../../../../../src/app/service/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("../../../../../src/app/service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeroService = (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.md5 = new __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"]();
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        this.md5.appendStr(__WEBPACK_IMPORTED_MODULE_1__app_constants__["d" /* TS */]).appendStr(__WEBPACK_IMPORTED_MODULE_1__app_constants__["b" /* PRIVATE_KEY */]).appendStr(__WEBPACK_IMPORTED_MODULE_1__app_constants__["c" /* PUBLIC_KEY */]);
        this.hashString = this.md5.end().toString();
        console.log(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* MARVEL_API_URL */] + "/characters?apikey=" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["c" /* PUBLIC_KEY */] + "&ts=" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["d" /* TS */] + "&hash=" + this.hashString);
        console.log(this.hashString);
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* MARVEL_API_URL */] + "/characters?apikey=" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["c" /* PUBLIC_KEY */] + "&ts=" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["d" /* TS */] + "&hash=" + this.hashString)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* tap */])(function (heroes) { return _this.log("fetched heroes"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getHeroes', [])));
    };
    HeroService.prototype.extractObject = function (res) {
        var data = res.json();
        return data || {};
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    HeroService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__message_service__["a" /* MessageService */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/service/logging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggingService = (function () {
    function LoggingService() {
    }
    LoggingService.logPrettyDebugJson = function (msg) {
        console.debug(JSON.stringify(msg, null, 2));
        console.debug('--------------------------------');
    };
    LoggingService.prototype.handleError = function (fullError) {
        var error = fullError.json();
        console.error(JSON.stringify(error, null, 2));
        var errMsg;
        if (error.message) {
            errMsg = error.message;
        }
        else if (error.error_description) {
            errMsg = error.error_description;
        }
        else if (error.errText) {
            errMsg = error.errText;
        }
        else {
            errMsg = error.status ? "" + error.status : 'Server error';
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errMsg);
    };
    LoggingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoggingService);
    return LoggingService;
}());



/***/ }),

/***/ "../../../../../src/app/service/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map