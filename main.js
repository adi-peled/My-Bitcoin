(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "./src/app/pages/contact-details/contact-details.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/statistic/statistic.component */ "./src/app/pages/statistic/statistic.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "./src/app/pages/contact-edit/contact-edit.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");










const routes = [
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'contact/edit', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"] },
    { path: 'contact/:id', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__["ContactDetailsComponent"] },
    { path: 'contact/edit/:id', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"] },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'statics', component: _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_4__["StatisticComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'BITcoin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "./src/app/pages/contact-details/contact-details.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/statistic/statistic.component */ "./src/app/pages/statistic/statistic.component.ts");
/* harmony import */ var _components_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact-preview/contact-preview.component */ "./src/app/components/contact-preview/contact-preview.component.ts");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "./src/app/components/contact-list/contact-list.component.ts");
/* harmony import */ var _components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact-filter/contact-filter.component */ "./src/app/components/contact-filter/contact-filter.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "./src/app/pages/contact-edit/contact-edit.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/transfer-fund/transfer-fund.component */ "./src/app/components/transfer-fund/transfer-fund.component.ts");
/* harmony import */ var _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/moves-list/moves-list.component */ "./src/app/components/moves-list/moves-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
/* harmony import */ var _components_chart_trade_volume_chart_trade_volume_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chart-trade-volume/chart-trade-volume.component */ "./src/app/components/chart-trade-volume/chart-trade-volume.component.ts");
/* harmony import */ var _components_chart_block_size_chart_block_size_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/chart-block-size/chart-block-size.component */ "./src/app/components/chart-block-size/chart-block-size.component.ts");
/* harmony import */ var _components_chart_market_price_chart_market_price_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/chart-market-price/chart-market-price.component */ "./src/app/components/chart-market-price/chart-market-price.component.ts");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__["AngularSvgIconModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__["ContactDetailsComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_8__["StatisticComponent"],
        _components_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_9__["ContactPreviewComponent"],
        _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__["ContactListComponent"],
        _components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_11__["ContactFilterComponent"],
        _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__["ContactEditComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
        _components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_16__["TransferFundComponent"],
        _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_17__["MovesListComponent"],
        _components_chart_trade_volume_chart_trade_volume_component__WEBPACK_IMPORTED_MODULE_20__["ChartTradeVolumeComponent"],
        _components_chart_block_size_chart_block_size_component__WEBPACK_IMPORTED_MODULE_21__["ChartBlockSizeComponent"],
        _components_chart_market_price_chart_market_price_component__WEBPACK_IMPORTED_MODULE_22__["ChartMarketPriceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__["AngularSvgIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__["ContactDetailsComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_8__["StatisticComponent"],
                    _components_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_9__["ContactPreviewComponent"],
                    _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__["ContactListComponent"],
                    _components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_11__["ContactFilterComponent"],
                    _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__["ContactEditComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                    _components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_16__["TransferFundComponent"],
                    _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_17__["MovesListComponent"],
                    _components_chart_trade_volume_chart_trade_volume_component__WEBPACK_IMPORTED_MODULE_20__["ChartTradeVolumeComponent"],
                    _components_chart_block_size_chart_block_size_component__WEBPACK_IMPORTED_MODULE_21__["ChartBlockSizeComponent"],
                    _components_chart_market_price_chart_market_price_component__WEBPACK_IMPORTED_MODULE_22__["ChartMarketPriceComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__["AngularSvgIconModule"].forRoot()
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chart-block-size/chart-block-size.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/chart-block-size/chart-block-size.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChartBlockSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartBlockSizeComponent", function() { return ChartBlockSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");



class ChartBlockSizeComponent {
    constructor() {
        this.chart = {
            title: 'title',
            type: 'Line',
            data: null,
            columnNames: ['date (2020)', 'MB'],
            options: {
                colors: ['#f6c7b6', '#ec8f6e', '#e6693e', '#e0440e', '#f3b49f'],
                is3D: true
            }
        };
    }
    ngOnInit() {
        this.chart.data = this.values;
    }
}
ChartBlockSizeComponent.ɵfac = function ChartBlockSizeComponent_Factory(t) { return new (t || ChartBlockSizeComponent)(); };
ChartBlockSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartBlockSizeComponent, selectors: [["app-chart-block-size"]], inputs: { values: "values" }, decls: 3, vars: 5, consts: [[1, "title"], [1, "chart", 3, "title", "type", "data", "options", "columns"]], template: function ChartBlockSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "google-chart", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.chart.title)("type", ctx.chart.type)("data", ctx.chart.data)("options", ctx.chart.options)("columns", ctx.chart.columnNames);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], styles: [".chart[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydC1ibG9jay1zaXplL2NoYXJ0LWJsb2NrLXNpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0LWJsb2NrLXNpemUvY2hhcnQtYmxvY2stc2l6ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartBlockSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-block-size',
                templateUrl: './chart-block-size.component.html',
                styleUrls: ['./chart-block-size.component.scss']
            }]
    }], function () { return []; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chart-market-price/chart-market-price.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/chart-market-price/chart-market-price.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChartMarketPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMarketPriceComponent", function() { return ChartMarketPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");



class ChartMarketPriceComponent {
    constructor() {
        this.chart = {
            title: 'title',
            type: 'Line',
            data: null,
            columnNames: ['date (2020)', 'USD'],
            options: {
                colors: ['#3a3', '#e6693e', '#e0440e', '#ec8f6e', '#f6c7b6'],
                is3D: true
            }
        };
    }
    ngOnInit() {
        this.chart.data = this.values;
    }
}
ChartMarketPriceComponent.ɵfac = function ChartMarketPriceComponent_Factory(t) { return new (t || ChartMarketPriceComponent)(); };
ChartMarketPriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartMarketPriceComponent, selectors: [["app-chart-market-price"]], inputs: { values: "values" }, decls: 3, vars: 5, consts: [[1, "title"], [1, "chart", 3, "title", "type", "data", "options", "columns"]], template: function ChartMarketPriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Market Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "google-chart", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.chart.title)("type", ctx.chart.type)("data", ctx.chart.data)("options", ctx.chart.options)("columns", ctx.chart.columnNames);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], styles: [".chart[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydC1tYXJrZXQtcHJpY2UvY2hhcnQtbWFya2V0LXByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFydC1tYXJrZXQtcHJpY2UvY2hhcnQtbWFya2V0LXByaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartMarketPriceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-market-price',
                templateUrl: './chart-market-price.component.html',
                styleUrls: ['./chart-market-price.component.scss']
            }]
    }], function () { return []; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chart-trade-volume/chart-trade-volume.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/chart-trade-volume/chart-trade-volume.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChartTradeVolumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTradeVolumeComponent", function() { return ChartTradeVolumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");



class ChartTradeVolumeComponent {
    constructor() {
        this.chart = {
            title: 'title',
            type: 'Line',
            data: null,
            columnNames: ['date (2020)', 'USD'],
            options: {
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                is3D: true
            }
        };
    }
    ngOnInit() {
        this.chart.data = this.values;
    }
}
ChartTradeVolumeComponent.ɵfac = function ChartTradeVolumeComponent_Factory(t) { return new (t || ChartTradeVolumeComponent)(); };
ChartTradeVolumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartTradeVolumeComponent, selectors: [["app-chart-trade-volume"]], inputs: { values: "values" }, decls: 3, vars: 5, consts: [[1, "title"], [1, "chart", 3, "title", "type", "data", "options", "columns"]], template: function ChartTradeVolumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trade Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "google-chart", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.chart.title)("type", ctx.chart.type)("data", ctx.chart.data)("options", ctx.chart.options)("columns", ctx.chart.columnNames);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], styles: [".chart[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydC10cmFkZS12b2x1bWUvY2hhcnQtdHJhZGUtdm9sdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFydC10cmFkZS12b2x1bWUvY2hhcnQtdHJhZGUtdm9sdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartTradeVolumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-trade-volume',
                templateUrl: './chart-trade-volume.component.html',
                styleUrls: ['./chart-trade-volume.component.scss']
            }]
    }], function () { return []; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/contact-filter/contact-filter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/contact-filter/contact-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function() { return ContactFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactFilterComponent {
    constructor() {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setFilter(ev) {
        let filterBy = {
            term: ev.target.value
        };
        this.onFilter.emit(filterBy);
    }
    ngOnInit() {
    }
}
ContactFilterComponent.ɵfac = function ContactFilterComponent_Factory(t) { return new (t || ContactFilterComponent)(); };
ContactFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFilterComponent, selectors: [["app-contact-filter"]], outputs: { onFilter: "onFilter" }, decls: 2, vars: 0, consts: [[1, "contact-filter"], ["placeholder", "search", "type", "text", 1, "bitcoin-input", 3, "input"]], template: function ContactFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContactFilterComponent_Template_input_input_1_listener($event) { return ctx.setFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact-filter[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.contact-filter[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  color: #aab5c5;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZpbHRlci9jb250YWN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtZmlsdGVyL2NvbnRhY3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZmlsdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgICAgY29sb3I6ICNhYWI1YzU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-filter',
                templateUrl: './contact-filter.component.html',
                styleUrls: ['./contact-filter.component.scss']
            }]
    }], function () { return []; }, { onFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "./src/app/components/contact-preview/contact-preview.component.ts");




function ContactListComponent_app_contact_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-contact-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contactRemoved", function ContactListComponent_app_contact_preview_1_Template_app_contact_preview_contactRemoved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeContact($event); })("contactSelected", function ContactListComponent_app_contact_preview_1_Template_app_contact_preview_contactSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectedContact($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor() {
        this.contactSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectedContact(contact) {
        this.contactSelected.emit(contact);
    }
    removeContact(contactId) {
        this.contactRemoved.emit(contactId);
    }
    ngOnInit() {
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], inputs: { contacts: "contacts" }, outputs: { contactSelected: "contactSelected", contactRemoved: "contactRemoved" }, decls: 2, vars: 1, consts: [[1, "contact-list"], [3, "contact", "contactRemoved", "contactSelected", 4, "ngFor", "ngForOf"], [3, "contact", "contactRemoved", "contactSelected"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_app_contact_preview_1_Template, 1, 1, "app-contact-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__["ContactPreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contactSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], contactRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/contact-preview/contact-preview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/contact-preview/contact-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactPreviewComponent {
    constructor() {
        this.contactSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectedContact(contact) {
        this.contactSelected.emit(contact);
    }
    removeContact(contact, ev) {
        ev.stopPropagation();
        this.contactRemoved.emit(contact._id);
    }
    ngOnInit() {
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["app-contact-preview"]], inputs: { contact: "contact" }, outputs: { contactSelected: "contactSelected", contactRemoved: "contactRemoved" }, decls: 5, vars: 2, consts: [[1, "contact-preview", 3, "click"], ["alt", "", 1, "contact-img", 3, "src"], [1, "name"], ["src", "./assets/imgs/trash.svg", "alt", "", 1, "delete-img", 3, "click"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_div_click_0_listener() { return ctx.selectedContact(ctx.contact); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_img_click_4_listener($event) { return ctx.removeContact(ctx.contact, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://robohash.org/" + ctx.contact.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.name, "");
    } }, styles: [".contact-preview[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.contact-img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  width: 45px;\n  height: 45px;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 185px;\n  font-size: 25px;\n  color: #aab5c5;\n}\n\n.delete-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXByZXZpZXcvY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtcHJldmlldy9jb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1wcmV2aWV3IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxODVweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjYWFiNWM1O1xyXG59XHJcblxyXG5cclxuXHJcbi5kZWxldGUtaW1nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNDVweDtcclxuXHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-preview',
                templateUrl: './contact-preview.component.html',
                styleUrls: ['./contact-preview.component.scss']
            }]
    }], function () { return []; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contactSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], contactRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userService/user.service */ "./src/app/services/userService/user.service.ts");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    onLogout() {
        this.userService.logout();
        this.router.navigate([`signup`]);
    }
    get loggedinUser() {
        return this.userService.getLoggedinUser();
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 3, consts: [[1, "header"], [1, "flex", "container"], [1, "logo"], ["src", "../../../assets/svg/bitcoin.svg", 1, "img-logo"], [1, "flex", "nav-header"], ["class", " flex  login-signup", 4, "ngIf", "ngIfElse"], ["class", "logout"], ["logout", ""], ["class", "link", "routerLink", "/", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "link"], ["routerLink", "/statics", "routerLinkActive", "active", 1, "link"], [1, "flex", "login-signup"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "link"], [1, "link", "btn-logout", 3, "click"], ["routerLink", "/", "routerLinkActive", "active", 1, "link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_template_6_Template, 2, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedinUser)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedinUser);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #253542;\n  color: white;\n}\n.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #ed4e6e;\n}\n.header[_ngcontent-%COMP%]   .nav-header[_ngcontent-%COMP%] {\n  width: 70%;\n  justify-content: space-around;\n  align-self: center;\n}\n.header[_ngcontent-%COMP%]   .nav-header[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  padding: 0em;\n  background-color: #253542;\n}\n.header[_ngcontent-%COMP%]   .nav-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 30%;\n  align-self: center;\n  padding: 5px;\n}\n.header[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.header[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n@media (max-width: 600px) {\n  .header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .header[_ngcontent-%COMP%]   .nav-header[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBR0k7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQURSO0FBR1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURaO0FBSVE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFGWjtBQU1JO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUpSO0FBU1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVBaO0FBYVE7RUFDSSxnQkFBQTtBQVhaO0FBbUJBO0VBRVE7SUFDSSxlQUFBO0VBakJWO0VBb0JNO0lBQ0ksVUFBQTtFQWxCVjtFQXFCTTtJQUNJLFVBQUE7RUFuQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA1MywgNjYpOyAvL2NscjJcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyMzcsIDc4LCAxMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmF2LWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5idG4tbG9nb3V0IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA1MywgNjYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctbG9nbyB7XHJcblxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tc2lnbnVwIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE4cHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/moves-list/moves-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/moves-list/moves-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovesListComponent", function() { return MovesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MovesListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transferred to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", move_r2.to, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, move_r2.at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20BF ", move_r2.amount, " ");
} }
function MovesListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No transcations yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MovesListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MovesListComponent.ɵfac = function MovesListComponent_Factory(t) { return new (t || MovesListComponent)(); };
MovesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovesListComponent, selectors: [["app-moves-list"]], inputs: { moves: "moves" }, decls: 5, vars: 2, consts: [[1, "moves-list", "flex", "column"], [1, "title"], ["class", "move flex column", 4, "ngFor", "ngForOf"], ["class", "no-moves", 4, "ngIf"], [1, "move", "flex", "column"], [1, "move-detail"], [1, "detail", "white"], [1, "to"], [1, "date"], [1, "coins"], [1, "no-moves"]], template: function MovesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last Moves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovesListComponent_div_3_Template, 17, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovesListComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moves);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moves);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".moves-list[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.moves-list[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n.moves-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.move-detail[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.move-detail[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 120px;\n}\n.move-detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .move-detail[_ngcontent-%COMP%]   .coins[_ngcontent-%COMP%], .move-detail[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%] {\n  color: #aab5c5;\n  width: 350px;\n  display: inline-block;\n}\n.move-detail[_ngcontent-%COMP%]   .coins[_ngcontent-%COMP%] {\n  color: #3b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3Zlcy1saXN0L21vdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxpQkFBQTtBQUNBO0FBQUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUdBO0VBQ0ksa0JBQUE7QUFBSjtBQUVJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFHSTs7O0VBR0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQURSO0FBSUk7RUFDSSxXQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmVzLWxpc3QvbW92ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3Zlcy1saXN0IHtcclxubWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAubW92ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb3ZlLWRldGFpbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgLmRldGFpbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0ZSxcclxuICAgIC5jb2lucyxcclxuICAgIC50byB7XHJcbiAgICAgICAgY29sb3I6ICNhYWI1YzU7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29pbnMge1xyXG4gICAgICAgIGNvbG9yOiAjM2IzO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-moves-list',
                templateUrl: './moves-list.component.html',
                styleUrls: ['./moves-list.component.scss']
            }]
    }], function () { return []; }, { moves: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/transfer-fund/transfer-fund.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/transfer-fund/transfer-fund.component.ts ***!
  \*********************************************************************/
/*! exports provided: TransferFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFundComponent", function() { return TransferFundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class TransferFundComponent {
    constructor() {
        this.onTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.transfer = {
            amount: ''
        };
    }
    transferFunds() {
        this.onTransfer.emit(this.transfer);
    }
    ngOnInit() {
    }
}
TransferFundComponent.ɵfac = function TransferFundComponent_Factory(t) { return new (t || TransferFundComponent)(); };
TransferFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFundComponent, selectors: [["app-transfer-fund"]], inputs: { currContact: "currContact" }, outputs: { onTransfer: "onTransfer" }, decls: 11, vars: 2, consts: [[1, "transfer-fund"], [1, "title"], [1, "transfer"], [1, "amount"], ["type", "number", 1, "bitcoin-input", 3, "ngModel", "ngModelChange"], [1, "bitcoin-btn", 3, "click"]], template: function TransferFundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transfer Fund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferFundComponent_Template_input_ngModelChange_8_listener($event) { return ctx.transfer.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferFundComponent_Template_button_click_9_listener() { return ctx.transferFunds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("transfer coins to ", ctx.currContact.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transfer.amount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".transfer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 0em;\n}\n.transfer[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: white;\n  vertical-align: middle;\n}\n.transfer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2Zlci1mdW5kL3RyYW5zZmVyLWZ1bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtBQURSO0FBS0k7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQU1JO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zZmVyLWZ1bmQvdHJhbnNmZXItZnVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2ZlciB7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferFundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transfer-fund',
                templateUrl: './transfer-fund.component.html',
                styleUrls: ['./transfer-fund.component.scss']
            }]
    }], function () { return []; }, { currContact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onTransfer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/contact-details/contact-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_moveService_move_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/moveService/move.service */ "./src/app/services/moveService/move.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contactService/contact.service */ "./src/app/services/contactService/contact.service.ts");
/* harmony import */ var src_app_services_userService_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userService/user.service */ "./src/app/services/userService/user.service.ts");
/* harmony import */ var src_app_services_utilService_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utilService/util.service */ "./src/app/services/utilService/util.service.ts");
/* harmony import */ var _components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/transfer-fund/transfer-fund.component */ "./src/app/components/transfer-fund/transfer-fund.component.ts");
/* harmony import */ var _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/moves-list/moves-list.component */ "./src/app/components/moves-list/moves-list.component.ts");









const _c0 = function (a0) { return [a0]; };
class ContactDetailsComponent {
    constructor(moveService, route, contactService, router, userService, utilService) {
        this.moveService = moveService;
        this.route = route;
        this.contactService = contactService;
        this.router = router;
        this.userService = userService;
        this.utilService = utilService;
        this.id = this.route.snapshot.params.id;
        this.currContact = null;
    }
    get moves() {
        const allMoves = this.utilService.loadFromStorage('moves');
        if (!allMoves)
            return;
        return allMoves.filter(move => move.to === this.currContact.name);
    }
    loadContact() {
        // const id = this.activatedRoute.snapshot.paramMap.get('id');
        const id = this.route.snapshot.params.id;
        this.contactService.getContactById(id)
            .subscribe(contact => this.currContact = contact);
    }
    transferFunds(transfer) {
        this.userService.transferFunds(transfer, this.currContact);
    }
    ngOnInit() {
        this.loadContact();
        this.moveService.loadMoves();
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_moveService_move_service__WEBPACK_IMPORTED_MODULE_1__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userService_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utilService_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["app-contact-details"]], decls: 25, vars: 8, consts: [[1, "contact-details", "container"], [1, "title"], [1, "contact-detail"], [1, "detail"], [1, "name"], [1, "phone"], [1, "email"], [3, "currContact", "onTransfer"], [3, "moves"], [1, "btns", "flex"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "bitcoin-btn"], ["routerLinkActive", "router-link-active", 1, "bitcoin-btn", 3, "routerLink"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-transfer-fund", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTransfer", function ContactDetailsComponent_Template_app_transfer_fund_onTransfer_18_listener($event) { return ctx.transferFunds($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-moves-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currContact.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currContact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currContact.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currContact", ctx.currContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.moves);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/contact/edit/" + ctx.currContact._id));
    } }, directives: [_components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_6__["TransferFundComponent"], _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_7__["MovesListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".contact-details[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.contact-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  color: white;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .contact-details[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: #aab5c5;\n}\n.contact-details[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  max-width: 500px;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFFUTtFQUNJLFlBQUE7QUFBWjtBQUdROzs7RUFHSSxjQUFBO0FBRFo7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1kZXRhaWxzIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtZGV0YWlsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSxcclxuICAgICAgICAucGhvbmUsXHJcbiAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhYWI1YzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnRucyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-details',
                templateUrl: './contact-details.component.html',
                styleUrls: ['./contact-details.component.scss']
            }]
    }], function () { return [{ type: src_app_services_moveService_move_service__WEBPACK_IMPORTED_MODULE_1__["MoveService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_userService_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: src_app_services_utilService_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact-edit/contact-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-edit/contact-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_contactService_contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contactService/contact.model */ "./src/app/services/contactService/contact.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contactService/contact.service */ "./src/app/services/contactService/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class ContactEditComponent {
    constructor(router, route, contactService) {
        this.router = router;
        this.route = route;
        this.contactService = contactService;
    }
    saveContact(contact) {
        this.contactService.saveContact(contact);
        this.router.navigate(['/contact']);
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id) {
            this.contactService.getContactById(id)
                .subscribe(contact => this.contact = contact);
        }
        else {
            this.contact = new src_app_services_contactService_contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"];
        }
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["app-contact-edit"]], decls: 17, vars: 3, consts: [[1, "contact-edit", "container"], [1, "title"], [1, "name"], [1, "white"], ["type", "text", 1, "bitcoin-input", 3, "ngModel", "ngModelChange"], [1, "phone"], [1, "email"], ["type", "mail", 1, "bitcoin-input", 3, "ngModel", "ngModelChange"], [1, "bitcoin-btn", 3, "click"]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_6_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contact.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_14_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactEditComponent_Template_button_click_15_listener() { return ctx.saveContact(ctx.contact); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".white[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-edit',
                templateUrl: './contact-edit.component.html',
                styleUrls: ['./contact-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contactService/contact.service */ "./src/app/services/contactService/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contact-filter/contact-filter.component */ "./src/app/components/contact-filter/contact-filter.component.ts");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contact-list/contact-list.component */ "./src/app/components/contact-list/contact-list.component.ts");






class ContactComponent {
    constructor(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.contacts = null;
    }
    ngOnInit() {
        this.contactService.loadContacts();
        this.getContacts();
    }
    setFilter(filterBy) {
        this.contactService.loadContacts(filterBy);
    }
    selectedContact(contact) {
        this.router.navigate([`${contact._id}`], { relativeTo: this.route });
    }
    removeContact(contactId) {
        this.contactService.deleteContact(contactId);
    }
    getContacts() {
        this.contactService.contacts$
            .subscribe(contacts => this.contacts = contacts);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 7, vars: 1, consts: [[1, "contact-page", "container"], [1, "title"], [3, "onFilter"], [3, "contacts", "contactSelected", "contactRemoved"], ["routerLink", "/contact/edit", "routerLinkActive", "active", 1, "bitcoin-btn"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-contact-filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFilter", function ContactComponent_Template_app_contact_filter_onFilter_3_listener($event) { return ctx.setFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-contact-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contactSelected", function ContactComponent_Template_app_contact_list_contactSelected_4_listener($event) { return ctx.selectedContact($event); })("contactRemoved", function ContactComponent_Template_app_contact_list_contactRemoved_4_listener($event) { return ctx.removeContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " add contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts);
    } }, directives: [_components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_3__["ContactFilterComponent"], _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".title[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.bitcoin-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uYml0Y29pbi1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _services_contactService_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userService/user.service */ "./src/app/services/userService/user.service.ts");
/* harmony import */ var src_app_services_utilService_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utilService/util.service */ "./src/app/services/utilService/util.service.ts");
/* harmony import */ var _services_bitcoinService_bitcoin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bitcoinService/bitcoin.service */ "./src/app/services/bitcoinService/bitcoin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/moves-list/moves-list.component */ "./src/app/components/moves-list/moves-list.component.ts");








function HomeComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.rate.toFixed(2)), "");
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " BTC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_1_span_12_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("welcome ", ctx_r0.loggedinUser.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20BF", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r0.loggedinUser.coins), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.loggedinUser.currency, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 7, ctx_r0.value, ctx_r0.loggedinUser.currency), "");
} }
function HomeComponent_app_moves_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-moves-list", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx_r1.moves);
} }
class HomeComponent {
    constructor(router, userService, utilService, bitcoinService) {
        this.router = router;
        this.userService = userService;
        this.utilService = utilService;
        this.bitcoinService = bitcoinService;
    }
    get loggedinUser() {
        return this.userService.getLoggedinUser();
    }
    get moves() {
        const allMoves = this.utilService.loadFromStorage('moves');
        if (!allMoves)
            return;
        const userMoves = allMoves.filter(move => move.from === this.loggedinUser.name);
        const sortedMoves = userMoves.sort((moveA, moveB) => (moveA.at < moveB.at) ? 1 : -1);
        return sortedMoves.slice(0, 4);
    }
    ngOnInit() {
        if (this.loggedinUser) {
            this.bitcoinService.getRate(this.loggedinUser.currency).subscribe((data) => {
                this.value = this.loggedinUser.coins / data;
                this.rate = 1 / data;
            });
        }
        else {
            this.router.navigate([`signup`]);
        }
        // console.log(this.bitcoinService.getMarketPrice());
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utilService_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bitcoinService_bitcoin_service__WEBPACK_IMPORTED_MODULE_4__["BitcoinService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "home", "container"], ["class", "user-details flex column ", 4, "ngIf"], [3, "moves", 4, "ngIf"], [1, "user-details", "flex", "column"], [1, "white", "name", "title"], [1, "detail", "coins"], [1, "white"], [1, "bitcoins"], [1, "detail"], ["class", "rate", 4, "ngIf"], [1, "currency"], [1, "rate"], [3, "moves"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 19, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_moves_list_2_Template, 1, 1, "app-moves-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedinUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedinUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_6__["MovesListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".user-details[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.user-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.detail[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.detail[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75px;\n}\n.detail[_ngcontent-%COMP%]   .bitcoins[_ngcontent-%COMP%], .detail[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%], .detail[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #aab5c5;\n  width: 300px;\n}\n.detail[_ngcontent-%COMP%]   .bitcoins[_ngcontent-%COMP%] {\n  color: #3b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBSUE7RUFDSSxlQUFBO0FBREo7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQURSO0FBSUk7OztFQUdJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0ksV0FBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgIC53aGl0ZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iaXRjb2lucyxcclxuICAgIC5yYXRlLFxyXG4gICAgLmN1cnJlbmN5IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICNhYWI1YzU7IC8vY2xyMlxyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYml0Y29pbnMge1xyXG4gICAgICAgIGNvbG9yOiAjM2IzO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_utilService_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }, { type: _services_bitcoinService_bitcoin_service__WEBPACK_IMPORTED_MODULE_4__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_userService_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/userService/user.service */ "./src/app/services/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function SignupComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_3_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_form_3_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signup($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_form_3_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.login($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.password);
} }
class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            name: '',
            password: '',
            coins: ''
        };
    }
    get loggedinUser() {
        return this.userService.getLoggedinUser();
    }
    signup(ev) {
        ev.preventDefault();
        this.userService.signup(this.user);
        this.router.navigate([``]);
    }
    login(ev) {
        ev.preventDefault();
        this.userService.login(this.user);
        console.log(this.loggedinUser);
        if (this.loggedinUser) {
            this.router.navigate([``]);
        }
        else {
            console.log('name or password are wrong');
        }
    }
    ngOnInit() {
        if (this.loggedinUser) {
            this.router.navigate([``]);
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 4, vars: 1, consts: [[1, "signup-page", "flex", "container"], [1, "title"], ["class", "signup-form", 4, "ngIf"], [1, "signup-form"], [1, "name"], ["name", "name", "placeholder", "name", "type", "text", 1, "bitcoin-input", 3, "ngModel", "ngModelChange"], [1, "password"], ["placeholder", "password", "name", "password", "type", "text", 1, "bitcoin-input", 3, "ngModel", "ngModelChange"], [1, "btns", "flex"], [1, "bitcoin-btn", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "welcome Guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_3_Template, 10, 2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedinUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".signup-page[_ngcontent-%COMP%] {\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.signup-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.signup-form[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFFUjtBQUtJO0VBQ0ksOEJBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXBhZ2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLnNpZ251cC1mb3JtIHtcclxuICAgIC5idG5zIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _services_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/statistic/statistic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.ts ***!
  \********************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_bitcoinService_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bitcoinService/bitcoin.service */ "./src/app/services/bitcoinService/bitcoin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_chart_trade_volume_chart_trade_volume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/chart-trade-volume/chart-trade-volume.component */ "./src/app/components/chart-trade-volume/chart-trade-volume.component.ts");
/* harmony import */ var _components_chart_block_size_chart_block_size_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/chart-block-size/chart-block-size.component */ "./src/app/components/chart-block-size/chart-block-size.component.ts");
/* harmony import */ var _components_chart_market_price_chart_market_price_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/chart-market-price/chart-market-price.component */ "./src/app/components/chart-market-price/chart-market-price.component.ts");







function StatisticComponent_app_chart_trade_volume_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chart-trade-volume", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx_r0.data.tradeVolume);
} }
function StatisticComponent_app_chart_block_size_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chart-block-size", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx_r1.data.blockSize);
} }
function StatisticComponent_app_chart_market_price_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chart-market-price", 2);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx_r2.data.marketPrice);
} }
class StatisticComponent {
    constructor(bitcoinService) {
        this.bitcoinService = bitcoinService;
        this.data = {
            tradeVolume: null,
            blockSize: null,
            marketPrice: null
        };
    }
    organizeData(data, key) {
        const { values } = data;
        const updatedData = values.map(value => {
            const arr = [];
            for (const property in value) {
                if (property === 'x') {
                    arr.push(new Date(value[property] * 1000).getDate() + '/' + (new Date(value[property] * 1000).getMonth() + 1));
                }
                else {
                    arr.push(value[property]);
                }
            }
            return arr;
        });
        this.data[key] = updatedData;
    }
    getTradeVolume() {
        this.bitcoinService.getTradeVolume().subscribe(data => {
            this.organizeData(data, 'tradeVolume');
        });
    }
    getBlockSize() {
        this.bitcoinService.getBlockSize().subscribe(data => {
            this.organizeData(data, 'blockSize');
        });
    }
    getMarketPrice() {
        this.bitcoinService.getMarketPrice().subscribe(data => {
            this.organizeData(data, 'marketPrice');
        });
    }
    ngOnInit() {
        this.getTradeVolume();
        this.getBlockSize();
        this.getMarketPrice();
    }
}
StatisticComponent.ɵfac = function StatisticComponent_Factory(t) { return new (t || StatisticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bitcoinService_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"])); };
StatisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticComponent, selectors: [["app-statistic"]], decls: 4, vars: 3, consts: [[1, "statistic", "container", "flex", "column"], ["class", "chart-container", 3, "values", 4, "ngIf"], [1, "chart-container", 3, "values"]], template: function StatisticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatisticComponent_app_chart_trade_volume_1_Template, 1, 1, "app-chart-trade-volume", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatisticComponent_app_chart_block_size_2_Template, 1, 1, "app-chart-block-size", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatisticComponent_app_chart_market_price_3_Template, 1, 1, "app-chart-market-price", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.tradeVolume);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.blockSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.marketPrice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_chart_trade_volume_chart_trade_volume_component__WEBPACK_IMPORTED_MODULE_3__["ChartTradeVolumeComponent"], _components_chart_block_size_chart_block_size_component__WEBPACK_IMPORTED_MODULE_4__["ChartBlockSizeComponent"], _components_chart_market_price_chart_market_price_component__WEBPACK_IMPORTED_MODULE_5__["ChartMarketPriceComponent"]], styles: [".statistic[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdGlzdGljL3N0YXRpc3RpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxVQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0aXN0aWMvc3RhdGlzdGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpc3RpYyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistic',
                templateUrl: './statistic.component.html',
                styleUrls: ['./statistic.component.scss']
            }]
    }], function () { return [{ type: _services_bitcoinService_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/bitcoinService/bitcoin.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/bitcoinService/bitcoin.service.ts ***!
  \************************************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BitcoinService {
    constructor(http) {
        this.http = http;
    }
    getRate(currency = 'usd') {
        console.log('currency:', currency);
        return this.http.get(`https://blockchain.info/tobtc?currency=${currency}&value=1`);
    }
    getTradeVolume() {
        return this.http.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true');
    }
    getBlockSize() {
        return this.http.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true');
    }
    getMarketPrice() {
        return this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitcoinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/contactService/contact.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/contactService/contact.model.ts ***!
  \**********************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _utilService_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilService/util.service */ "./src/app/services/utilService/util.service.ts");

class Contact {
    // utilService: UtilService
    constructor(name = '', email = '', phone = '', _id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this._id = _id;
    }
    setId() {
        // Implement your own set Id
        const utilService = new _utilService_util_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"];
        this._id = utilService.makeId(8);
    }
}


/***/ }),

/***/ "./src/app/services/contactService/contact.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/contactService/contact.service.ts ***!
  \************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.model */ "./src/app/services/contactService/contact.model.ts");


// import { of } from 'rxjs/observable/of'


const CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181"
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629"
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812"
    }
];
class ContactService {
    constructor() {
        //mock the server
        this._contacts = CONTACTS;
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
    }
    loadContacts(filterBy = null) {
        console.log(filterBy);
        let contacts = this._contacts;
        if (filterBy && filterBy.term) {
            contacts = this._filter(filterBy.term, contacts);
        }
        this._contacts$.next(this._sort(contacts));
    }
    getContactById(id) {
        //mock the server work
        const contact = this._contacts.find(contact => contact._id === id);
        //return an observable
        return contact ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact) : rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(`Contact id ${id} not found!`);
    }
    deleteContact(id) {
        //mock the server work
        this._contacts = this._contacts.filter(contact => contact._id !== id);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._contacts);
    }
    saveContact(contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    _updateContact(contact) {
        //mock the server work
        this._contacts = this._contacts.map(c => contact._id === c._id ? contact : c);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(this._contacts));
    }
    _addContact(contact) {
        //mock the server work
        const newContact = new _contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"](contact.name, contact.email, contact.phone);
        newContact.setId();
        this._contacts.push(newContact);
        this._contacts$.next(this._sort(this._contacts));
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    _filter(term, contacts) {
        term = term.toLocaleLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/moveService/move.model.ts":
/*!****************************************************!*\
  !*** ./src/app/services/moveService/move.model.ts ***!
  \****************************************************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
class Move {
    constructor(from = '', to = '', at, amount) {
        this.from = from;
        this.to = to;
        this.at = at;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/app/services/moveService/move.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/moveService/move.service.ts ***!
  \******************************************************/
/*! exports provided: MoveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveService", function() { return MoveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _move_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move.model */ "./src/app/services/moveService/move.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utilService_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilService/util.service */ "./src/app/services/utilService/util.service.ts");





const moves = [
    {
        from: 'adi',
        to: 'Holder Bean',
        at: 54354354435,
        amount: 4,
    }
];
class MoveService {
    constructor(utilService) {
        this.utilService = utilService;
        this._moves = this.loadMoves() || moves;
        this._moves$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.moves$ = this._moves$.asObservable();
    }
    saveMove(from, to, amount) {
        const at = Date.now();
        const newMove = new _move_model__WEBPACK_IMPORTED_MODULE_1__["Move"](from, to, at, amount);
        console.log('moves:', this._moves);
        this._moves.push(newMove);
        // this._moves$.next(this._moves)
        this.utilService.storeToStorage('moves', this._moves);
    }
    getMoves() {
        return this.utilService.loadFromStorage('moves');
    }
    loadMoves() {
        return this.utilService.loadFromStorage('moves');
    }
}
MoveService.ɵfac = function MoveService_Factory(t) { return new (t || MoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utilService_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
MoveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoveService, factory: MoveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utilService_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/userService/user.model.ts":
/*!****************************************************!*\
  !*** ./src/app/services/userService/user.model.ts ***!
  \****************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name = '', password = '', coins = 100, currency = 'USD') {
        this.name = name;
        this.password = password;
        this.coins = coins;
        this.currency = currency;
    }
}


/***/ }),

/***/ "./src/app/services/userService/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/userService/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/services/userService/user.model.ts");
/* harmony import */ var _moveService_move_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moveService/move.service */ "./src/app/services/moveService/move.service.ts");
/* harmony import */ var _utilService_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilService/util.service */ "./src/app/services/utilService/util.service.ts");






const users = [
    {
        name: "Ochoa Hyde",
        password: '123',
        coins: 6,
        moves: [],
        currency: 'GBP'
    },
    {
        name: "adi",
        password: '222',
        coins: 777,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Ochoa Hyde",
        password: '564',
        coins: 12,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Hallie Mclean",
        password: '123',
        coins: 55,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Parsons Norris",
        password: '978',
        coins: 65,
        moves: [],
        currency: 'GBP'
    },
    {
        name: "Rachel Lowe",
        password: '789',
        coins: 99,
        moves: [],
        currency: 'GBP'
    },
    {
        name: "Dominique Soto",
        password: '789',
        coins: 140,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Shana Pope",
        password: '789',
        coins: 2,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Faulkner Flores",
        password: '789',
        coins: 17,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Holder Bean",
        password: '789',
        coins: 33,
        moves: [],
        currency: 'USD'
    },
    {
        name: "Rosanne Shelton",
        password: '123',
        coins: 77,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Pamela Nolan",
        password: '789',
        coins: 234,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Roy Cantu",
        password: '546',
        coins: 34,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Ollie Christian",
        password: '879',
        coins: 123,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Nguyen Walls",
        password: '234',
        coins: 12,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Glenna Santana",
        password: '234',
        coins: 24,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Malone Clark",
        password: '546',
        coins: 345,
        moves: [],
        currency: 'GBP'
    },
    {
        "name": "Floyd Rutledge",
        password: '456',
        coins: 3,
        moves: [],
        currency: 'GBP'
    },
    {
        name: "Grace James",
        password: '234',
        coins: 77,
        moves: [],
        currency: 'GBP'
    },
    {
        name: "Tanner Gates",
        password: '543',
        coins: 6,
        moves: [],
        currency: 'GBP'
    },
    {
        name: "Lilly Conner",
        password: '654',
        coins: 54,
        moves: [],
        currency: 'GBP'
    }
];
class UserService {
    constructor(moveService, utilService) {
        this.moveService = moveService;
        this.utilService = utilService;
        this._users = users;
        this._users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.users$ = this._users$.asObservable();
        this.loggedinUser = this.getLoggedinUser();
    }
    signup(user) {
        const newUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](user.name, user.password);
        this._users.push(newUser);
        // this._users$.next(this._sort(this._users))
        // this._users$.next(this._users)
        this.utilService.storeToStorage('loggedUser', newUser);
        this.utilService.storeToStorage('users', this._users);
    }
    getLoggedinUser() {
        return this.utilService.loadFromStorage('loggedUser');
    }
    logout() {
        this.loggedinUser = null;
        this.utilService.storeToStorage('loggedUser', null);
    }
    login(user) {
        var loggedUser = this._users.find(_user => _user.name === user.name);
        if (!loggedUser)
            return;
        if (loggedUser.password === user.password) {
            this.utilService.storeToStorage('loggedUser', loggedUser);
        }
    }
    transferFunds(transfer, contact) {
        const user = this.getUserByContact(contact);
        console.log('logged:', this.loggedinUser);
        console.log('user:', user);
        if (this.loggedinUser.coins >= transfer.amount) {
            this.loggedinUser.coins -= transfer.amount;
            user.coins += transfer.amount;
            this.moveService.saveMove(this.loggedinUser.name, user.name, transfer.amount);
            this._updateUser(this.loggedinUser);
            this.utilService.storeToStorage('loggedUser', this.loggedinUser);
            this.utilService.storeToStorage('users', this._users);
        }
        else {
            console.log('u dont have enoght amount');
        }
    }
    _updateUser(currUser) {
        const idx = this._users.findIndex(user => user.name === currUser.name);
        this._users.splice(idx, 1, currUser);
    }
    getUserByContact(contact) {
        return this._users.find(user => user.name === contact.name);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_moveService_move_service__WEBPACK_IMPORTED_MODULE_3__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utilService_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _moveService_move_service__WEBPACK_IMPORTED_MODULE_3__["MoveService"] }, { type: _utilService_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/utilService/util.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/utilService/util.service.ts ***!
  \******************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilService {
    constructor() { }
    storeToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value || null));
    }
    loadFromStorage(key) {
        let data = localStorage.getItem(key);
        return (data) ? JSON.parse(data) : undefined;
    }
    makeId(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adipeled\Desktop\bitcoin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map