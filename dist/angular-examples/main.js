(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/ "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        var map = {
            "./dashboard-example/dashboard-example.module.ngfactory": [
                "./src/app/dashboard-example/dashboard-example.module.ngfactory.js",
                "dashboard-example-dashboard-example-module-ngfactory~reactive-forms-reactive-forms-examples-module-n~06ef8c25",
                "dashboard-example-dashboard-example-module-ngfactory"
            ],
            "./reactive-forms/reactive-forms-examples.module.ngfactory": [
                "./src/app/reactive-forms/reactive-forms-examples.module.ngfactory.js",
                "dashboard-example-dashboard-example-module-ngfactory~reactive-forms-reactive-forms-examples-module-n~06ef8c25",
                "reactive-forms-reactive-forms-examples-module-ngfactory"
            ]
        };

        function webpackAsyncContext(req) {
            var ids = map[req];
            if (!ids) {
                return Promise.resolve().then(function () {
                    var e = new Error('Cannot find module "' + req + '".');
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                var module = __webpack_require__(ids[0]);
                return module;
            });
        }

        webpackAsyncContext.keys = function webpackAsyncContextKeys() {
            return Object.keys(map);
        };
        webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
        module.exports = webpackAsyncContext;

        /***/
    }),

    /***/ "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/
    /*! exports provided: AppRoutingModule, ɵ0 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
            return ɵ0;
        });
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _main_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/shell/shell.component */ "./src/app/main/shell/shell.component.ts");
        /* harmony import */
        var _main_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
        /* harmony import */
        var _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/page-not-found/page-not-found.component */ "./src/app/main/page-not-found/page-not-found.component.ts");


        var ɵ0 = {state: 'home'};
        var appRoutes = [
            {
                path: '',
                component: _main_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"],
                children: [
                    {
                        path: 'home',
                        component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                        data: ɵ0
                    },
                    {
                        path: 'reactive-forms',
                        loadChildren: './reactive-forms/reactive-forms-examples.module#ReactiveFormsExamplesModule'
                    },
                    {
                        path: 'dashboard-example',
                        loadChildren: './dashboard-example/dashboard-example.module#DashboardExampleModule'
                    },
                    {path: '', pathMatch: 'full', redirectTo: 'home'}
                ]
            },
            {
                path: '**',
                component: _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            }
        ];
        var AppRoutingModule = /** @class */ (function () {
            function AppRoutingModule() {
            }

            return AppRoutingModule;
        }());


        /***/
    }),

    /***/ "./src/app/app.component.css.shim.ngstyle.js":
    /*!***************************************************!*\
      !*** ./src/app/app.component.css.shim.ngstyle.js ***!
      \***************************************************/
    /*! exports provided: styles */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "styles", function () {
            return styles;
        });
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */
        var styles = [""];


        /***/
    }),

    /***/ "./src/app/app.component.ngfactory.js":
    /*!********************************************!*\
      !*** ./src/app/app.component.ngfactory.js ***!
      \********************************************/
    /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
            return RenderType_AppComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
            return View_AppComponent_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
            return View_AppComponent_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
            return AppComponentNgFactory;
        });
        /* harmony import */
        var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */




        var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
        var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
            encapsulation: 0,
            styles: styles_AppComponent,
            data: {}
        });

        function View_AppComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
                _ck(_v, 1, 0);
            }, null);
        }

        function View_AppComponent_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null);
        }

        var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);


        /***/
    }),

    /***/ "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/
    /*! exports provided: AppComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        var AppComponent = /** @class */ (function () {
            function AppComponent() {
                this.title = 'app';
            }

            return AppComponent;
        }());


        /***/
    }),

    /***/ "./src/app/app.module.ngfactory.js":
    /*!*****************************************!*\
      !*** ./src/app/app.module.ngfactory.js ***!
      \*****************************************/
    /*! exports provided: AppModuleNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
            return AppModuleNgFactory;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
        /* harmony import */
        var _main_shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/shell/shell.component.ngfactory */ "./src/app/main/shell/shell.component.ngfactory.js");
        /* harmony import */
        var _main_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/home/home.component.ngfactory */ "./src/app/main/home/home.component.ngfactory.js");
        /* harmony import */
        var _main_page_not_found_page_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/page-not-found/page-not-found.component.ngfactory */ "./src/app/main/page-not-found/page-not-found.component.ngfactory.js");
        /* harmony import */
        var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
        /* harmony import */
        var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
        /* harmony import */
        var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
        /* harmony import */
        var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
        /* harmony import */
        var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
        /* harmony import */
        var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
        /* harmony import */
        var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
        /* harmony import */
        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
        /* harmony import */
        var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
        /* harmony import */
        var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
        /* harmony import */
        var _main_shell_shell_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main/shell/shell.component */ "./src/app/main/shell/shell.component.ts");
        /* harmony import */
        var _main_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
        /* harmony import */
        var _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/page-not-found/page-not-found.component */ "./src/app/main/page-not-found/page-not-found.component.ts");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */
































        var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_main_shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ShellComponentNgFactory"], _main_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _main_page_not_found_page_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_l"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_e"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
                return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2)];
            }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_11__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
                return [p0_0];
            }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_h"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_f"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_g"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtools"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtools"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_g"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerObservable"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ScannedActionsSubject"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["INITIAL_STATE"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_a"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_b"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
                return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()];
            }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
                return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_h"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"](p1_0)];
            }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () {
                return [[{
                    path: "",
                    component: _main_shell_shell_component__WEBPACK_IMPORTED_MODULE_28__["ShellComponent"],
                    children: [{
                        path: "home",
                        component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
                        data: _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["ɵ0"]
                    }, {
                        path: "reactive-forms",
                        loadChildren: "./reactive-forms/reactive-forms-examples.module#ReactiveFormsExamplesModule"
                    }, {
                        path: "dashboard-example",
                        loadChildren: "./dashboard-example/dashboard-example.module#DashboardExampleModule"
                    }, {path: "", pathMatch: "full", redirectTo: "home"}]
                }, {
                    path: "**",
                    component: _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_31__["PageNotFoundComponent"]
                }]];
            }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManagerDispatcher"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_INITIAL_STATE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_initialStateFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_INITIAL_REDUCERS"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_STORE_REDUCERS"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_INITIAL_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_createStoreReducers"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_STORE_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["combineReducers"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["META_REDUCERS"], [], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["createReducerFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["_REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["META_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManager"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManagerDispatcher"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["REDUCER_FACTORY"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ScannedActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["State"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["State"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StateObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["State"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["Store"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StateObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_i"], {maxAge: 50}, [])]);
        });


        /***/
    }),

    /***/ "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /*! exports provided: AppModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        var AppModule = /** @class */ (function () {
            function AppModule() {
            }

            return AppModule;
        }());


        /***/
    }),

    /***/ "./src/app/main/home/home.component.css.shim.ngstyle.js":
    /*!**************************************************************!*\
      !*** ./src/app/main/home/home.component.css.shim.ngstyle.js ***!
      \**************************************************************/
    /*! exports provided: styles */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "styles", function () {
            return styles;
        });
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */
        var styles = [""];


        /***/
    }),

    /***/ "./src/app/main/home/home.component.ngfactory.js":
    /*!*******************************************************!*\
      !*** ./src/app/main/home/home.component.ngfactory.js ***!
      \*******************************************************/
    /*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function () {
            return RenderType_HomeComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function () {
            return View_HomeComponent_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function () {
            return View_HomeComponent_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function () {
            return HomeComponentNgFactory;
        });
        /* harmony import */
        var _home_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/main/home/home.component.css.shim.ngstyle.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/main/home/home.component.ts");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */



        var styles_HomeComponent = [_home_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
        var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
            encapsulation: 0,
            styles: styles_HomeComponent,
            data: {}
        });

        function View_HomeComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" home works!\n"]))], null, null);
        }

        function View_HomeComponent_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [], null, null)], function (_ck, _v) {
                _ck(_v, 1, 0);
            }, null);
        }

        var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);


        /***/
    }),

    /***/ "./src/app/main/home/home.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/main/home/home.component.ts ***!
      \*********************************************/
    /*! exports provided: HomeComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
            return HomeComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

        var HomeComponent = /** @class */ (function () {
            function HomeComponent() {
            }

            HomeComponent.prototype.ngOnInit = function () {
            };
            return HomeComponent;
        }());


        /***/
    }),

    /***/ "./src/app/main/main-nav/main-nav.component.css.shim.ngstyle.js":
    /*!**********************************************************************!*\
      !*** ./src/app/main/main-nav/main-nav.component.css.shim.ngstyle.js ***!
      \**********************************************************************/
    /*! exports provided: styles */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "styles", function () {
            return styles;
        });
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */
        var styles = [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n}"];


        /***/
    }),

    /***/ "./src/app/main/main-nav/main-nav.component.ngfactory.js":
    /*!***************************************************************!*\
      !*** ./src/app/main/main-nav/main-nav.component.ngfactory.js ***!
      \***************************************************************/
    /*! exports provided: RenderType_MainNavComponent, View_MainNavComponent_0, View_MainNavComponent_Host_0, MainNavComponentNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_MainNavComponent", function () {
            return RenderType_MainNavComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_MainNavComponent_0", function () {
            return View_MainNavComponent_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_MainNavComponent_Host_0", function () {
            return View_MainNavComponent_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MainNavComponentNgFactory", function () {
            return MainNavComponentNgFactory;
        });
        /* harmony import */
        var _main_nav_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav.component.css.shim.ngstyle */ "./src/app/main/main-nav/main-nav.component.css.shim.ngstyle.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
        /* harmony import */
        var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
        /* harmony import */
        var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
        /* harmony import */
        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
        /* harmony import */
        var _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sidenav/typings/index.ngfactory */ "./node_modules/@angular/material/sidenav/typings/index.ngfactory.js");
        /* harmony import */
        var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /* harmony import */
        var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
        /* harmony import */
        var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
        /* harmony import */
        var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
        /* harmony import */
        var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _main_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-nav.component */ "./src/app/main/main-nav/main-nav.component.ts");
        /* harmony import */
        var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */




















        var styles_MainNavComponent = [_main_nav_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
        var RenderType_MainNavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
            encapsulation: 0,
            styles: styles_MainNavComponent,
            data: {
                "animation": [{
                    type: 7,
                    name: "routerTransition",
                    definitions: [{
                        type: 1,
                        expr: "* <=> *",
                        animation: [{
                            type: 11,
                            selector: ":enter, :leave",
                            animation: {type: 6, styles: {position: "fixed", width: "100%"}, offset: null},
                            options: {optional: true}
                        }, {
                            type: 3,
                            steps: [{
                                type: 11,
                                selector: ":enter",
                                animation: [{type: 6, styles: {transform: "translateX(100%)"}, offset: null}, {
                                    type: 4,
                                    styles: {type: 6, styles: {transform: "translateX(0%)"}, offset: null},
                                    timings: "0.5s ease-in-out"
                                }],
                                options: {optional: true}
                            }, {
                                type: 11,
                                selector: ":leave",
                                animation: [{type: 6, styles: {transform: "translateX(0%)"}, offset: null}, {
                                    type: 4,
                                    styles: {type: 6, styles: {transform: "translateX(-100%)"}, offset: null},
                                    timings: "0.5s ease-in-out"
                                }],
                                options: {optional: true}
                            }],
                            options: null
                        }],
                        options: null
                    }],
                    options: {}
                }]
            }
        });

        function View_MainNavComponent_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["aria-label", "Toggle sidenav"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;
                if (("click" === en)) {
                    var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 5).toggle() !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["aria-label", "Side nav toggle icon"], ["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"]))], function (_ck, _v) {
                _ck(_v, 3, 0);
            }, function (_ck, _v) {
                var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null);
                _ck(_v, 0, 0, currVal_0);
                var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline;
                _ck(_v, 2, 0, currVal_1);
            });
        }

        function View_MainNavComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 47, "mat-sidenav-container", [["class", "sidenav-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {_drawers: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {_content: 0}), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 30, "mat-sidenav", [["class", "sidenav mat-drawer mat-sidenav"], ["fixedInViewport", "true"], ["tabIndex", "-1"]], [[1, "role", 0], [40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
                var ad = true;
                if (("component:@transform.start" === en)) {
                    var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._onAnimationStart($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (("component:@transform.done" === en)) {
                    var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._onAnimationEnd($event) !== false);
                    ad = (pd_1 && ad);
                }
                return ad;
            }, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 3325952, [[1, 4], ["drawer", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]], {
                mode: [0, "mode"],
                opened: [1, "opened"],
                fixedInViewport: [2, "fixedInViewport"]
            }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 3, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], {color: [0, "color"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {_toolbarRows: 1}), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 22, "mat-nav-list", [["class", "mat-nav-list"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatNavList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 6, "a", [["class", "mat-list-item"], ["mat-list-item", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
                var ad = true;
                if (("focus" === en)) {
                    var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleFocus() !== false);
                    ad = (pd_0 && ad);
                }
                if (("blur" === en)) {
                    var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleBlur() !== false);
                    ad = (pd_1 && ad);
                }
                if (("click" === en)) {
                    var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 1097728, null, 2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {_lines: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, {_avatar: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]], {routerLink: [0, "routerLink"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 6, "a", [["class", "mat-list-item"], ["mat-list-item", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
                var ad = true;
                if (("focus" === en)) {
                    var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleFocus() !== false);
                    ad = (pd_0 && ad);
                }
                if (("blur" === en)) {
                    var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleBlur() !== false);
                    ad = (pd_1 && ad);
                }
                if (("click" === en)) {
                    var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1097728, null, 2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {_lines: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, {_avatar: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]], {routerLink: [0, "routerLink"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](26, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Reactive forms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 6, "a", [["class", "mat-list-item"], ["mat-list-item", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
                var ad = true;
                if (("focus" === en)) {
                    var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleFocus() !== false);
                    ad = (pd_0 && ad);
                }
                if (("blur" === en)) {
                    var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleBlur() !== false);
                    ad = (pd_1 && ad);
                }
                if (("click" === en)) {
                    var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 1097728, null, 2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {_lines: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, {_avatar: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]], {routerLink: [0, "routerLink"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](33, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Ngrx dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 1, 12, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 1097728, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 7, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], {color: [0, "color"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {_toolbarRows: 1}), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_MainNavComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Angular examples"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 2, "div", [], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0);
                var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform(_co.isHandset)).matches ? "over" : "side");
                var currVal_12 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform(_co.isHandset)).matches;
                var currVal_13 = "true";
                _ck(_v, 5, 0, currVal_11, currVal_12, currVal_13);
                var currVal_16 = "primary";
                _ck(_v, 9, 0, currVal_16);
                var currVal_21 = _ck(_v, 19, 0, "/home");
                _ck(_v, 18, 0, currVal_21);
                var currVal_26 = _ck(_v, 26, 0, "/reactive-forms");
                _ck(_v, 25, 0, currVal_26);
                var currVal_31 = _ck(_v, 33, 0, "/dashboard-example");
                _ck(_v, 32, 0, currVal_31);
                var currVal_36 = "primary";
                _ck(_v, 38, 0, currVal_36);
                var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform(_co.isHandset)).matches;
                _ck(_v, 41, 0, currVal_37);
                _ck(_v, 47, 0);
            }, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._backdropOverride;
                _ck(_v, 0, 0, currVal_0);
                var currVal_1 = (_co.isHandset ? "dialog" : "navigation");
                var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationState;
                var currVal_3 = null;
                var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).position === "end");
                var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).mode === "over");
                var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).mode === "push");
                var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).mode === "side");
                var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fixedInViewport;
                var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fixedTopGap : null);
                var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fixedBottomGap : null);
                _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);
                var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._toolbarRows.length;
                var currVal_15 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._toolbarRows.length;
                _ck(_v, 8, 0, currVal_14, currVal_15);
                var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._avatar;
                var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._avatar;
                var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).target;
                var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).href;
                _ck(_v, 14, 0, currVal_17, currVal_18, currVal_19, currVal_20);
                var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._avatar;
                var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._avatar;
                var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).target;
                var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).href;
                _ck(_v, 21, 0, currVal_22, currVal_23, currVal_24, currVal_25);
                var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._avatar;
                var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._avatar;
                var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).target;
                var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).href;
                _ck(_v, 28, 0, currVal_27, currVal_28, currVal_29, currVal_30);
                var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._container._contentMargins.left;
                var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._container._contentMargins.right;
                _ck(_v, 35, 0, currVal_32, currVal_33);
                var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._toolbarRows.length;
                var currVal_35 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._toolbarRows.length;
                _ck(_v, 37, 0, currVal_34, currVal_35);
                var currVal_38 = _co.detectRoutingState(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47));
                _ck(_v, 45, 0, currVal_38);
            });
        }

        function View_MainNavComponent_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "main-nav", [], null, null, null, View_MainNavComponent_0, RenderType_MainNavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _main_nav_component__WEBPACK_IMPORTED_MODULE_18__["MainNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]], null, null)], null, null);
        }

        var MainNavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("main-nav", _main_nav_component__WEBPACK_IMPORTED_MODULE_18__["MainNavComponent"], View_MainNavComponent_Host_0, {}, {}, []);


        /***/
    }),

    /***/ "./src/app/main/main-nav/main-nav.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/main/main-nav/main-nav.component.ts ***!
      \*****************************************************/
    /*! exports provided: MainNavComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
            return MainNavComponent;
        });
        /* harmony import */
        var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


        var MainNavComponent = /** @class */ (function () {
            function MainNavComponent(breakpointObserver, route) {
                this.breakpointObserver = breakpointObserver;
                this.route = route;
                this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset);
            }

            MainNavComponent.prototype.detectRoutingState = function (outlet) {
                return outlet.activatedRouteData.state;
            };
            return MainNavComponent;
        }());


        /***/
    }),

    /***/ "./src/app/main/page-not-found/page-not-found.component.css.shim.ngstyle.js":
    /*!**********************************************************************************!*\
      !*** ./src/app/main/page-not-found/page-not-found.component.css.shim.ngstyle.js ***!
      \**********************************************************************************/
    /*! exports provided: styles */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "styles", function () {
            return styles;
        });
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */
        var styles = [""];


        /***/
    }),

    /***/ "./src/app/main/page-not-found/page-not-found.component.ngfactory.js":
    /*!***************************************************************************!*\
      !*** ./src/app/main/page-not-found/page-not-found.component.ngfactory.js ***!
      \***************************************************************************/
    /*! exports provided: RenderType_PageNotFoundComponent, View_PageNotFoundComponent_0, View_PageNotFoundComponent_Host_0, PageNotFoundComponentNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_PageNotFoundComponent", function () {
            return RenderType_PageNotFoundComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_PageNotFoundComponent_0", function () {
            return View_PageNotFoundComponent_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_PageNotFoundComponent_Host_0", function () {
            return View_PageNotFoundComponent_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PageNotFoundComponentNgFactory", function () {
            return PageNotFoundComponentNgFactory;
        });
        /* harmony import */
        var _page_not_found_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component.css.shim.ngstyle */ "./src/app/main/page-not-found/page-not-found.component.css.shim.ngstyle.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/main/page-not-found/page-not-found.component.ts");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */



        var styles_PageNotFoundComponent = [_page_not_found_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
        var RenderType_PageNotFoundComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
            encapsulation: 0,
            styles: styles_PageNotFoundComponent,
            data: {}
        });

        function View_PageNotFoundComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Page Not Found 404\n"]))], null, null);
        }

        function View_PageNotFoundComponent_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-page-not-found", [], null, null, null, View_PageNotFoundComponent_0, RenderType_PageNotFoundComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], [], null, null)], function (_ck, _v) {
                _ck(_v, 1, 0);
            }, null);
        }

        var PageNotFoundComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-page-not-found", _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], View_PageNotFoundComponent_Host_0, {}, {}, []);


        /***/
    }),

    /***/ "./src/app/main/page-not-found/page-not-found.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/main/page-not-found/page-not-found.component.ts ***!
      \*****************************************************************/
    /*! exports provided: PageNotFoundComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
            return PageNotFoundComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

        var PageNotFoundComponent = /** @class */ (function () {
            function PageNotFoundComponent() {
            }

            PageNotFoundComponent.prototype.ngOnInit = function () {
            };
            return PageNotFoundComponent;
        }());


        /***/
    }),

    /***/ "./src/app/main/shell/shell.component.css.shim.ngstyle.js":
    /*!****************************************************************!*\
      !*** ./src/app/main/shell/shell.component.css.shim.ngstyle.js ***!
      \****************************************************************/
    /*! exports provided: styles */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "styles", function () {
            return styles;
        });
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */
        var styles = [""];


        /***/
    }),

    /***/ "./src/app/main/shell/shell.component.ngfactory.js":
    /*!*********************************************************!*\
      !*** ./src/app/main/shell/shell.component.ngfactory.js ***!
      \*********************************************************/
    /*! exports provided: RenderType_ShellComponent, View_ShellComponent_0, View_ShellComponent_Host_0, ShellComponentNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_ShellComponent", function () {
            return RenderType_ShellComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_ShellComponent_0", function () {
            return View_ShellComponent_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_ShellComponent_Host_0", function () {
            return View_ShellComponent_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ShellComponentNgFactory", function () {
            return ShellComponentNgFactory;
        });
        /* harmony import */
        var _shell_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell.component.css.shim.ngstyle */ "./src/app/main/shell/shell.component.css.shim.ngstyle.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _main_nav_main_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-nav/main-nav.component.ngfactory */ "./src/app/main/main-nav/main-nav.component.ngfactory.js");
        /* harmony import */
        var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main/main-nav/main-nav.component.ts");
        /* harmony import */
        var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shell.component */ "./src/app/main/shell/shell.component.ts");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */







        var styles_ShellComponent = [_shell_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
        var RenderType_ShellComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
            encapsulation: 0,
            styles: styles_ShellComponent,
            data: {}
        });

        function View_ShellComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "main-nav", [], null, null, null, _main_nav_main_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MainNavComponent_0"], _main_nav_main_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MainNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], null, null)], null, null);
        }

        function View_ShellComponent_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shell", [], null, null, null, View_ShellComponent_0, RenderType_ShellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shell_component__WEBPACK_IMPORTED_MODULE_6__["ShellComponent"], [], null, null)], function (_ck, _v) {
                _ck(_v, 1, 0);
            }, null);
        }

        var ShellComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shell", _shell_component__WEBPACK_IMPORTED_MODULE_6__["ShellComponent"], View_ShellComponent_Host_0, {}, {}, []);


        /***/
    }),

    /***/ "./src/app/main/shell/shell.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/main/shell/shell.component.ts ***!
      \***********************************************/
    /*! exports provided: ShellComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ShellComponent", function () {
            return ShellComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

        var ShellComponent = /** @class */ (function () {
            function ShellComponent() {
            }

            ShellComponent.prototype.ngOnInit = function () {
            };
            return ShellComponent;
        }());


        /***/
    }),

    /***/ "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /*! exports provided: environment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
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


        /***/
    }),

    /***/ "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
        /* harmony import */
        var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
            .catch(function (err) {
                return console.log(err);
            });


        /***/
    }),

    /***/ 0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! /home/csaszika/folder/work/angular-examples/src/main.ts */"./src/main.ts");


        /***/
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map