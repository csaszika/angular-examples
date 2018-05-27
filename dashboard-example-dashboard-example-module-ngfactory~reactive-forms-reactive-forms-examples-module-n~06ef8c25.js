(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-example-dashboard-example-module-ngfactory~reactive-forms-reactive-forms-examples-module-n~06ef8c25"], {

    /***/ "./node_modules/@angular/cdk/esm5/text-field.es5.js":
    /*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/text-field.es5.js ***!
  \**********************************************************/
    /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
            return AutofillMonitor;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
            return CdkAutofill;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
            return CdkTextareaAutosize;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
            return TextFieldModule;
        });
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Options to pass to the animationstart listener.
         */
        var /** @type {?} */ listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["supportsPassiveEventListeners"])() ? {passive: true} : false;
        /**
         * An injectable service that can be used to monitor the autofill state of an input.
         * Based on the following blog post:
         * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
         */
        var AutofillMonitor = /** @class */ (function () {
            function AutofillMonitor(_platform, _ngZone) {
                this._platform = _platform;
                this._ngZone = _ngZone;
                this._monitoredElements = new Map();
            }

            /**
             * Monitor for changes in the autofill state of the given input element.
             * @param element The element to monitor.
             * @return A stream of autofill state changes.
             */
            /**
             * Monitor for changes in the autofill state of the given input element.
             * @param {?} element The element to monitor.
             * @return {?} A stream of autofill state changes.
             */
            AutofillMonitor.prototype.monitor = /**
             * Monitor for changes in the autofill state of the given input element.
             * @param {?} element The element to monitor.
             * @return {?} A stream of autofill state changes.
             */
            function (element) {
                if (!this._platform.isBrowser) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                }
                var /** @type {?} */ info = this._monitoredElements.get(element);
                if (info) {
                    return info.subject.asObservable();
                }
                var /** @type {?} */ result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                var /** @type {?} */ listener = function (event) {
                    if (event.animationName === 'cdk-text-field-autofill-start') {
                        element.classList.add('cdk-text-field-autofilled');
                        result.next({target: /** @type {?} */ (event.target), isAutofilled: true});
                    }
                    else if (event.animationName === 'cdk-text-field-autofill-end') {
                        element.classList.remove('cdk-text-field-autofilled');
                        result.next({target: /** @type {?} */ (event.target), isAutofilled: false});
                    }
                };
                this._ngZone.runOutsideAngular(function () {
                    element.addEventListener('animationstart', listener, listenerOptions);
                    element.classList.add('cdk-text-field-autofill-monitored');
                });
                this._monitoredElements.set(element, {
                    subject: result,
                    unlisten: function () {
                        element.removeEventListener('animationstart', listener, listenerOptions);
                    }
                });
                return result.asObservable();
            };
            /**
             * Stop monitoring the autofill state of the given input element.
             * @param element The element to stop monitoring.
             */
            /**
             * Stop monitoring the autofill state of the given input element.
             * @param {?} element The element to stop monitoring.
             * @return {?}
             */
            AutofillMonitor.prototype.stopMonitoring = /**
             * Stop monitoring the autofill state of the given input element.
             * @param {?} element The element to stop monitoring.
             * @return {?}
             */
            function (element) {
                var /** @type {?} */ info = this._monitoredElements.get(element);
                if (info) {
                    info.unlisten();
                    info.subject.complete();
                    element.classList.remove('cdk-text-field-autofill-monitored');
                    element.classList.remove('cdk-text-field-autofilled');
                    this._monitoredElements.delete(element);
                }
            };
            /**
             * @return {?}
             */
            AutofillMonitor.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._monitoredElements.forEach(function (_info, element) {
                    return _this.stopMonitoring(element);
                });
            };
            AutofillMonitor.decorators = [
                {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{providedIn: 'root'},]},
            ];
            /** @nocollapse */
            AutofillMonitor.ctorParameters = function () {
                return [
                    {type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],},
                ];
            };
            /** @nocollapse */ AutofillMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({
                factory: function AutofillMonitor_Factory() {
                    return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
                }, token: AutofillMonitor, providedIn: "root"
            });
            return AutofillMonitor;
        }());
        /**
         * A directive that can be used to monitor the autofill state of an input.
         */
        var CdkAutofill = /** @class */ (function () {
            function CdkAutofill(_elementRef, _autofillMonitor) {
                this._elementRef = _elementRef;
                this._autofillMonitor = _autofillMonitor;
                /**
                 * Emits when the autofill state of the element changes.
                 */
                this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            /**
             * @return {?}
             */
            CdkAutofill.prototype.ngOnInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._autofillMonitor
                    .monitor(this._elementRef.nativeElement)
                    .subscribe(function (event) {
                        return _this.cdkAutofill.emit(event);
                    });
            };
            /**
             * @return {?}
             */
            CdkAutofill.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
            };
            CdkAutofill.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                        selector: '[cdkAutofill]',
                    },]
                },
            ];
            /** @nocollapse */
            CdkAutofill.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],},
                    {type: AutofillMonitor,},
                ];
            };
            CdkAutofill.propDecorators = {
                "cdkAutofill": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]},],
            };
            return CdkAutofill;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Directive to automatically resize a textarea to fit its content.
         */
        var CdkTextareaAutosize = /** @class */ (function () {
            function CdkTextareaAutosize(_elementRef, _platform, _ngZone) {
                this._elementRef = _elementRef;
                this._platform = _platform;
                this._ngZone = _ngZone;
                this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                this._enabled = true;
                this._textareaElement = /** @type {?} */ (this._elementRef.nativeElement);
            }

            Object.defineProperty(CdkTextareaAutosize.prototype, "minRows", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this._minRows;
                },
                set: /**
                 * Minimum amount of rows in the textarea.
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._minRows = value;
                    this._setMinHeight();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CdkTextareaAutosize.prototype, "maxRows", {
                get: /**
                 * Maximum amount of rows in the textarea.
                 * @return {?}
                 */
                function () {
                    return this._maxRows;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._maxRows = value;
                    this._setMaxHeight();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CdkTextareaAutosize.prototype, "enabled", {
                get: /**
                 * Whether autosizing is enabled or not
                 * @return {?}
                 */
                function () {
                    return this._enabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    // Only act if the actual value changed. This specifically helps to not run
                    // resizeToFitContent too early (i.e. before ngAfterViewInit)
                    if (this._enabled !== value) {
                        (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /** Sets the minimum height of the textarea as determined by minRows. */
            /**
             * Sets the minimum height of the textarea as determined by minRows.
             * @return {?}
             */
            CdkTextareaAutosize.prototype._setMinHeight = /**
             * Sets the minimum height of the textarea as determined by minRows.
             * @return {?}
             */
            function () {
                var /** @type {?} */ minHeight = this.minRows && this._cachedLineHeight ?
                    this.minRows * this._cachedLineHeight + "px" : null;
                if (minHeight) {
                    this._setTextareaStyle('minHeight', minHeight);
                }
            };
            /** Sets the maximum height of the textarea as determined by maxRows. */
            /**
             * Sets the maximum height of the textarea as determined by maxRows.
             * @return {?}
             */
            CdkTextareaAutosize.prototype._setMaxHeight = /**
             * Sets the maximum height of the textarea as determined by maxRows.
             * @return {?}
             */
            function () {
                var /** @type {?} */ maxHeight = this.maxRows && this._cachedLineHeight ?
                    this.maxRows * this._cachedLineHeight + "px" : null;
                if (maxHeight) {
                    this._setTextareaStyle('maxHeight', maxHeight);
                }
            };
            /**
             * @return {?}
             */
            CdkTextareaAutosize.prototype.ngAfterViewInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._platform.isBrowser) {
                    // Remember the height which we started with in case autosizing is disabled
                    this._initialHeight = this._textareaElement.style.height;
                    this.resizeToFitContent();
                    this._ngZone.runOutsideAngular(function () {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._destroyed))
                            .subscribe(function () {
                                return _this.resizeToFitContent(true);
                            });
                    });
                }
            };
            /**
             * @return {?}
             */
            CdkTextareaAutosize.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this._destroyed.next();
                this._destroyed.complete();
            };
            /**
             * Sets a style property on the textarea element.
             * @param {?} property
             * @param {?} value
             * @return {?}
             */
            CdkTextareaAutosize.prototype._setTextareaStyle = /**
             * Sets a style property on the textarea element.
             * @param {?} property
             * @param {?} value
             * @return {?}
             */
            function (property, value) {
                this._textareaElement.style[property] = value;
            };
            /**
             * Cache the height of a single-row textarea if it has not already been cached.
             *
             * We need to know how large a single "row" of a textarea is in order to apply minRows and
             * maxRows. For the initial version, we will assume that the height of a single line in the
             * textarea does not ever change.
             * @return {?}
             */
            CdkTextareaAutosize.prototype._cacheTextareaLineHeight = /**
             * Cache the height of a single-row textarea if it has not already been cached.
             *
             * We need to know how large a single "row" of a textarea is in order to apply minRows and
             * maxRows. For the initial version, we will assume that the height of a single line in the
             * textarea does not ever change.
             * @return {?}
             */
            function () {
                if (this._cachedLineHeight) {
                    return;
                }
                // Use a clone element because we have to override some styles.
                var /** @type {?} */ textareaClone = /** @type {?} */ (this._textareaElement.cloneNode(false));
                textareaClone.rows = 1;
                // Use `position: absolute` so that this doesn't cause a browser layout and use
                // `visibility: hidden` so that nothing is rendered. Clear any other styles that
                // would affect the height.
                textareaClone.style.position = 'absolute';
                textareaClone.style.visibility = 'hidden';
                textareaClone.style.border = 'none';
                textareaClone.style.padding = '0';
                textareaClone.style.height = '';
                textareaClone.style.minHeight = '';
                textareaClone.style.maxHeight = '';
                // In Firefox it happens that textarea elements are always bigger than the specified amount
                // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
                // As a workaround that removes the extra space for the scrollbar, we can just set overflow
                // to hidden. This ensures that there is no invalid calculation of the line height.
                // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
                textareaClone.style.overflow = 'hidden';
                /** @type {?} */
                ((this._textareaElement.parentNode)).appendChild(textareaClone);
                this._cachedLineHeight = textareaClone.clientHeight;
                /** @type {?} */
                ((this._textareaElement.parentNode)).removeChild(textareaClone);
                // Min and max heights have to be re-calculated if the cached line height changes
                this._setMinHeight();
                this._setMaxHeight();
            };
            /**
             * @return {?}
             */
            CdkTextareaAutosize.prototype.ngDoCheck = /**
             * @return {?}
             */
            function () {
                if (this._platform.isBrowser) {
                    this.resizeToFitContent();
                }
            };
            /**
             * Resize the textarea to fit its content.
             * @param force Whether to force a height recalculation. By default the height will be
             *    recalculated only if the value changed since the last call.
             */
            /**
             * Resize the textarea to fit its content.
             * @param {?=} force Whether to force a height recalculation. By default the height will be
             *    recalculated only if the value changed since the last call.
             * @return {?}
             */
            CdkTextareaAutosize.prototype.resizeToFitContent = /**
             * Resize the textarea to fit its content.
             * @param {?=} force Whether to force a height recalculation. By default the height will be
             *    recalculated only if the value changed since the last call.
             * @return {?}
             */
            function (force) {
                var _this = this;
                if (force === void 0) {
                    force = false;
                }
                // If autosizing is disabled, just skip everything else
                if (!this._enabled) {
                    return;
                }
                this._cacheTextareaLineHeight();
                // If we haven't determined the line-height yet, we know we're still hidden and there's no point
                // in checking the height of the textarea.
                if (!this._cachedLineHeight) {
                    return;
                }
                var /** @type {?} */ textarea = /** @type {?} */ (this._elementRef.nativeElement);
                var /** @type {?} */ value = textarea.value;
                // Only resize of the value changed since these calculations can be expensive.
                if (value === this._previousValue && !force) {
                    return;
                }
                var /** @type {?} */ placeholderText = textarea.placeholder;
                // Reset the textarea height to auto in order to shrink back to its default size.
                // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
                // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
                // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
                // need to be removed temporarily.
                textarea.classList.add('cdk-textarea-autosize-measuring');
                textarea.placeholder = '';
                // The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
                // Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
                var /** @type {?} */ height = textarea.scrollHeight - 4;
                // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
                textarea.style.height = height + "px";
                textarea.classList.remove('cdk-textarea-autosize-measuring');
                textarea.placeholder = placeholderText;
                // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
                // We need to re-set the selection in order for it to scroll to the proper position.
                if (typeof requestAnimationFrame !== 'undefined') {
                    this._ngZone.runOutsideAngular(function () {
                        return requestAnimationFrame(function () {
                            var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                            // IE will throw an "Unspecified error" if we try to set the selection range after the
                            // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                            // between the time we requested the animation frame and when it was executed.
                            if (!_this._destroyed.isStopped) {
                                textarea.setSelectionRange(selectionStart, selectionEnd);
                            }
                        });
                    });
                }
                this._previousValue = value;
            };
            /**
             * Resets the textarea to it's original size
             */
            /**
             * Resets the textarea to it's original size
             * @return {?}
             */
            CdkTextareaAutosize.prototype.reset = /**
             * Resets the textarea to it's original size
             * @return {?}
             */
            function () {
                // Do not try to change the textarea, if the initialHeight has not been determined yet
                // This might potentially remove styles when reset() is called before ngAfterViewInit
                if (this._initialHeight === undefined) {
                    return;
                }
                this._textareaElement.style.height = this._initialHeight;
            };
            /**
             * @return {?}
             */
            CdkTextareaAutosize.prototype._noopInputHandler = /**
             * @return {?}
             */
            function () {
                // no-op handler that ensures we're running change detection on input events.
            };
            CdkTextareaAutosize.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                        selector: 'textarea[cdkTextareaAutosize]',
                        exportAs: 'cdkTextareaAutosize',
                        host: {
                            'class': 'cdk-textarea-autosize',
                            // Textarea elements that have the directive applied should have a single row by default.
                            // Browsers normally show two rows by default and therefore this limits the minRows binding.
                            'rows': '1',
                            '(input)': '_noopInputHandler()',
                        },
                    },]
                },
            ];
            /** @nocollapse */
            CdkTextareaAutosize.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],},
                    {type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],},
                ];
            };
            CdkTextareaAutosize.propDecorators = {
                "minRows": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
                    args: ['cdkAutosizeMinRows',]
                },],
                "maxRows": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
                    args: ['cdkAutosizeMaxRows',]
                },],
                "enabled": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
                    args: ['cdkTextareaAutosize',]
                },],
            };
            return CdkTextareaAutosize;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var TextFieldModule = /** @class */ (function () {
            function TextFieldModule() {
            }

            TextFieldModule.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                        declarations: [CdkAutofill, CdkTextareaAutosize],
                        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                        exports: [CdkAutofill, CdkTextareaAutosize],
                    },]
                },
            ];
            return TextFieldModule;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */


//# sourceMappingURL=text-field.es5.js.map


        /***/
    }),

    /***/ "./node_modules/@angular/material/esm5/chips.es5.js":
    /*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/chips.es5.js ***!
  \**********************************************************/
    /*! exports provided: MatChipsModule, MatChipListBase, _MatChipListMixinBase, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipBase, _MatChipMixinBase, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
            return MatChipsModule;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipListBase", function () {
            return MatChipListBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatChipListMixinBase", function () {
            return _MatChipListMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
            return MatChipListChange;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
            return MatChipList;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
            return MatChipSelectionChange;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipBase", function () {
            return MatChipBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatChipMixinBase", function () {
            return _MatChipMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
            return MatChipAvatar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
            return MatChipTrailingIcon;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChip", function () {
            return MatChip;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
            return MatChipRemove;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
            return MatChipInput;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
            return MAT_CHIPS_DEFAULT_OPTIONS;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
        /* harmony import */
        var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Event object emitted by MatChip when selected or deselected.
         */
        var /**
         * Event object emitted by MatChip when selected or deselected.
         */
        MatChipSelectionChange = /** @class */ (function () {
            function MatChipSelectionChange(source, selected, isUserInput) {
                if (isUserInput === void 0) {
                    isUserInput = false;
                }
                this.source = source;
                this.selected = selected;
                this.isUserInput = isUserInput;
            }

            return MatChipSelectionChange;
        }());
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatChipBase = /** @class */ (function () {
            function MatChipBase(_elementRef) {
                this._elementRef = _elementRef;
            }

            return MatChipBase;
        }());
        var /** @type {?} */ _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatChipBase)), 'primary');
        var /** @type {?} */ CHIP_ATTRIBUTE_NAMES = ['mat-basic-chip'];
        /**
         * Dummy directive to add CSS class to chip avatar.
         * \@docs-private
         */
        var MatChipAvatar = /** @class */ (function () {
            function MatChipAvatar() {
            }

            MatChipAvatar.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                        selector: 'mat-chip-avatar, [matChipAvatar]',
                        host: {'class': 'mat-chip-avatar'}
                    },]
                },
            ];
            return MatChipAvatar;
        }());
        /**
         * Dummy directive to add CSS class to chip trailing icon.
         * \@docs-private
         */
        var MatChipTrailingIcon = /** @class */ (function () {
            function MatChipTrailingIcon() {
            }

            MatChipTrailingIcon.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                        selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                        host: {'class': 'mat-chip-trailing-icon'}
                    },]
                },
            ];
            return MatChipTrailingIcon;
        }());
        /**
         * Material design styled Chip component. Used inside the MatChipList component.
         */
        var MatChip = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatChip, _super);

            function MatChip(_elementRef, ngZone, platform, globalOptions) {
                var _this = _super.call(this, _elementRef) || this;
                _this._elementRef = _elementRef;
                /**
                 * Ripple configuration for ripples that are launched on pointer down.
                 * \@docs-private
                 */
                _this.rippleConfig = {};
                /**
                 * Whether the chip has focus.
                 */
                _this._hasFocus = false;
                /**
                 * Whether the chip list is selectable
                 */
                _this.chipListSelectable = true;
                _this._selected = false;
                _this._selectable = true;
                _this._removable = true;
                /**
                 * Emits when the chip is focused.
                 */
                _this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                /**
                 * Emits when the chip is blured.
                 */
                _this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                /**
                 * Emitted when the chip is selected or deselected.
                 */
                _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                /**
                 * Emitted when the chip is destroyed.
                 */
                _this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                /**
                 * Emitted when a chip is to be removed.
                 */
                _this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                _this._addHostClassName();
                _this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_this, ngZone, _elementRef, platform);
                _this._chipRipple.setupTriggerEvents(_elementRef.nativeElement);
                if (globalOptions) {
                    _this.rippleConfig = {
                        speedFactor: globalOptions.baseSpeedFactor,
                        animation: globalOptions.animation,
                        terminateOnPointerUp: globalOptions.terminateOnPointerUp,
                    };
                }
                return _this;
            }

            Object.defineProperty(MatChip.prototype, "rippleDisabled", {
                /**
                 * Whether ripples are disabled on interaction
                 * @docs-private
                 */
                get: /**
                 * Whether ripples are disabled on interaction
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this.disabled || this.disableRipple;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChip.prototype, "selected", {
                get: /**
                 * Whether the chip is selected.
                 * @return {?}
                 */
                function () {
                    return this._selected;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._selected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    this.selectionChange.emit({
                        source: this,
                        isUserInput: false,
                        selected: value
                    });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChip.prototype, "value", {
                get: /**
                 * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
                 * @return {?}
                 */
                function () {
                    return this._value != undefined
                        ? this._value
                        : this._elementRef.nativeElement.textContent;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChip.prototype, "selectable", {
                get: /**
                 * Whether or not the chip is selectable. When a chip is not selectable,
                 * changes to it's selected state are always ignored. By default a chip is
                 * selectable, and it becomes non-selectable if it's parent chip list is
                 * not selectable.
                 * @return {?}
                 */
                function () {
                    return this._selectable && this.chipListSelectable;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChip.prototype, "removable", {
                get: /**
                 * Determines whether or not the chip displays the remove styling and emits (removed) events.
                 * @return {?}
                 */
                function () {
                    return this._removable;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChip.prototype, "ariaSelected", {
                /** The ARIA selected applied to the chip. */
                get: /**
                 * The ARIA selected applied to the chip.
                 * @return {?}
                 */
                function () {
                    return this.selectable ? this.selected.toString() : null;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            MatChip.prototype._addHostClassName = /**
             * @return {?}
             */
            function () {
                // Add class for the different chips
                for (var _i = 0, CHIP_ATTRIBUTE_NAMES_1 = CHIP_ATTRIBUTE_NAMES; _i < CHIP_ATTRIBUTE_NAMES_1.length; _i++) {
                    var attr = CHIP_ATTRIBUTE_NAMES_1[_i];
                    if (this._elementRef.nativeElement.hasAttribute(attr) ||
                        this._elementRef.nativeElement.tagName.toLowerCase() === attr) {
                        (/** @type {?} */ (this._elementRef.nativeElement)).classList.add(attr);
                        return;
                    }
                }
                (/** @type {?} */ (this._elementRef.nativeElement)).classList.add('mat-standard-chip');
            };
            /**
             * @return {?}
             */
            MatChip.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this.destroyed.emit({chip: this});
                this._chipRipple._removeTriggerEvents();
            };
            /** Selects the chip. */
            /**
             * Selects the chip.
             * @return {?}
             */
            MatChip.prototype.select = /**
             * Selects the chip.
             * @return {?}
             */
            function () {
                this._selected = true;
                this.selectionChange.emit({
                    source: this,
                    isUserInput: false,
                    selected: true
                });
            };
            /** Deselects the chip. */
            /**
             * Deselects the chip.
             * @return {?}
             */
            MatChip.prototype.deselect = /**
             * Deselects the chip.
             * @return {?}
             */
            function () {
                this._selected = false;
                this.selectionChange.emit({
                    source: this,
                    isUserInput: false,
                    selected: false
                });
            };
            /** Select this chip and emit selected event */
            /**
             * Select this chip and emit selected event
             * @return {?}
             */
            MatChip.prototype.selectViaInteraction = /**
             * Select this chip and emit selected event
             * @return {?}
             */
            function () {
                this._selected = true;
                // Emit select event when selected changes.
                this.selectionChange.emit({
                    source: this,
                    isUserInput: true,
                    selected: true
                });
            };
            /** Toggles the current selected state of this chip. */
            /**
             * Toggles the current selected state of this chip.
             * @param {?=} isUserInput
             * @return {?}
             */
            MatChip.prototype.toggleSelected = /**
             * Toggles the current selected state of this chip.
             * @param {?=} isUserInput
             * @return {?}
             */
            function (isUserInput) {
                if (isUserInput === void 0) {
                    isUserInput = false;
                }
                this._selected = !this.selected;
                this.selectionChange.emit({
                    source: this,
                    isUserInput: isUserInput,
                    selected: this._selected
                });
                return this.selected;
            };
            /** Allows for programmatic focusing of the chip. */
            /**
             * Allows for programmatic focusing of the chip.
             * @return {?}
             */
            MatChip.prototype.focus = /**
             * Allows for programmatic focusing of the chip.
             * @return {?}
             */
            function () {
                if (!this._hasFocus) {
                    this._elementRef.nativeElement.focus();
                    this._onFocus.next({chip: this});
                }
                this._hasFocus = true;
            };
            /**
             * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
             * BACKSPACE keys are pressed.
             *
             * Informs any listeners of the removal request. Does not remove the chip from the DOM.
             */
            /**
             * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
             * BACKSPACE keys are pressed.
             *
             * Informs any listeners of the removal request. Does not remove the chip from the DOM.
             * @return {?}
             */
            MatChip.prototype.remove = /**
             * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
             * BACKSPACE keys are pressed.
             *
             * Informs any listeners of the removal request. Does not remove the chip from the DOM.
             * @return {?}
             */
            function () {
                if (this.removable) {
                    this.removed.emit({chip: this});
                }
            };
            /** Ensures events fire properly upon click. */
            /**
             * Ensures events fire properly upon click.
             * @param {?} event
             * @return {?}
             */
            MatChip.prototype._handleClick = /**
             * Ensures events fire properly upon click.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // Check disabled
                if (this.disabled) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
            };
            /** Handle custom key presses. */
            /**
             * Handle custom key presses.
             * @param {?} event
             * @return {?}
             */
            MatChip.prototype._handleKeydown = /**
             * Handle custom key presses.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (this.disabled) {
                    return;
                }
                switch (event.keyCode) {
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DELETE"]:
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["BACKSPACE"]:
                        // If we are removable, remove the focused chip
                        this.remove();
                        // Always prevent so page navigation does not occur
                        event.preventDefault();
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["SPACE"]:
                        // If we are selectable, toggle the focused chip
                        if (this.selectable) {
                            this.toggleSelected(true);
                        }
                        // Always prevent space from scrolling the page since the list has focus
                        event.preventDefault();
                        break;
                }
            };
            /**
             * @return {?}
             */
            MatChip.prototype._blur = /**
             * @return {?}
             */
            function () {
                this._hasFocus = false;
                this._onBlur.next({chip: this});
            };
            MatChip.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                        selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
                        inputs: ['color', 'disabled', 'disableRipple'],
                        exportAs: 'matChip',
                        host: {
                            'class': 'mat-chip',
                            '[attr.tabindex]': 'disabled ? null : -1',
                            'role': 'option',
                            '[class.mat-chip-selected]': 'selected',
                            '[class.mat-chip-with-avatar]': 'avatar',
                            '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                            '[class.mat-chip-disabled]': 'disabled',
                            '[attr.disabled]': 'disabled || null',
                            '[attr.aria-disabled]': 'disabled.toString()',
                            '[attr.aria-selected]': 'ariaSelected',
                            '(click)': '_handleClick($event)',
                            '(keydown)': '_handleKeydown($event)',
                            '(focus)': 'focus()',
                            '(blur)': '_blur()',
                        },
                    },]
                },
            ];
            /** @nocollapse */
            MatChip.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],},
                    {type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"],},
                    {
                        type: undefined,
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]}, {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],]
                        },]
                    },
                ];
            };
            MatChip.propDecorators = {
                "avatar": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatChipAvatar,]},],
                "trailingIcon": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
                    args: [MatChipTrailingIcon,]
                },],
                "removeIcon": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
                    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                        return MatChipRemove;
                    }),]
                },],
                "selected": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "value": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "selectable": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "removable": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "selectionChange": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
                "destroyed": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
                "removed": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
            };
            return MatChip;
        }(_MatChipMixinBase));
        /**
         * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
         * available at https://material.io/icons/#ic_cancel.
         *
         * Example:
         *
         *     `<mat-chip>
         *       <mat-icon matChipRemove>cancel</mat-icon>
         *     </mat-chip>`
         *
         * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
         * styles to properly center the icon within the chip.
         */
        var MatChipRemove = /** @class */ (function () {
            function MatChipRemove(_parentChip) {
                this._parentChip = _parentChip;
            }

            /** Calls the parent chip's public `remove()` method if applicable. */
            /**
             * Calls the parent chip's public `remove()` method if applicable.
             * @return {?}
             */
            MatChipRemove.prototype._handleClick = /**
             * Calls the parent chip's public `remove()` method if applicable.
             * @return {?}
             */
            function () {
                if (this._parentChip.removable) {
                    this._parentChip.remove();
                }
            };
            MatChipRemove.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                        selector: '[matChipRemove]',
                        host: {
                            'class': 'mat-chip-remove mat-chip-trailing-icon',
                            '(click)': '_handleClick()',
                        }
                    },]
                },
            ];
            /** @nocollapse */
            MatChipRemove.ctorParameters = function () {
                return [
                    {type: MatChip,},
                ];
            };
            return MatChipRemove;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Injection token to be used to override the default options for the chips module.
         */
        var /** @type {?} */ MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-chips-default-options');

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatChipListBase = /** @class */ (function () {
            function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
                this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
                this._parentForm = _parentForm;
                this._parentFormGroup = _parentFormGroup;
                this.ngControl = ngControl;
            }

            return MatChipListBase;
        }());
        var /** @type {?} */ _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
        var /** @type {?} */ nextUniqueId = 0;
        /**
         * Change event object that is emitted when the chip list value has changed.
         */
        var /**
         * Change event object that is emitted when the chip list value has changed.
         */
        MatChipListChange = /** @class */ (function () {
            function MatChipListChange(source, value) {
                this.source = source;
                this.value = value;
            }

            return MatChipListChange;
        }());
        /**
         * A material design chips component (named ChipList for it's similarity to the List component).
         */
        var MatChipList = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatChipList, _super);

            function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, /** @docs-private */
                                 ngControl) {
                var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
                _this._elementRef = _elementRef;
                _this._changeDetectorRef = _changeDetectorRef;
                _this._dir = _dir;
                _this.ngControl = ngControl;
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 */
                _this.controlType = 'mat-chip-list';
                /**
                 * When a chip is destroyed, we track the index so we can focus the appropriate next chip.
                 */
                _this._lastDestroyedIndex = null;
                /**
                 * Track which chips we're listening to for focus/destruction.
                 */
                _this._chipSet = new WeakMap();
                /**
                 * Subscription to tabbing out from the chip list.
                 */
                _this._tabOutSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"].EMPTY;
                /**
                 * Uid of the chip list
                 */
                _this._uid = "mat-chip-list-" + nextUniqueId++;
                /**
                 * Tab index for the chip list.
                 */
                _this._tabIndex = 0;
                /**
                 * User defined tab index.
                 * When it is not null, use user defined tab index. Otherwise use _tabIndex
                 */
                _this._userTabIndex = null;
                /**
                 * Function when touched
                 */
                _this._onTouched = function () {
                };
                /**
                 * Function when changed
                 */
                _this._onChange = function () {
                };
                _this._multiple = false;
                _this._compareWith = function (o1, o2) {
                    return o1 === o2;
                };
                _this._required = false;
                _this._disabled = false;
                /**
                 * Orientation of the chip list.
                 */
                _this.ariaOrientation = 'horizontal';
                _this._selectable = true;
                /**
                 * Event emitted when the selected chip list value has been changed by the user.
                 */
                _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                /**
                 * Event that emits whenever the raw value of the chip-list changes. This is here primarily
                 * to facilitate the two-way binding for the `value` input.
                 * \@docs-private
                 */
                _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                if (_this.ngControl) {
                    _this.ngControl.valueAccessor = _this;
                }
                return _this;
            }

            Object.defineProperty(MatChipList.prototype, "selected", {
                /** The array of selected chips inside chip list. */
                get: /**
                 * The array of selected chips inside chip list.
                 * @return {?}
                 */
                function () {
                    return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "role", {
                /** The ARIA role applied to the chip list. */
                get: /**
                 * The ARIA role applied to the chip list.
                 * @return {?}
                 */
                function () {
                    return this.empty ? null : 'listbox';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "multiple", {
                get: /**
                 * Whether the user should be allowed to select multiple chips.
                 * @return {?}
                 */
                function () {
                    return this._multiple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "compareWith", {
                get: /**
                 * A function to compare the option values with the selected values. The first argument
                 * is a value from an option. The second is a value from the selection. A boolean
                 * should be returned.
                 * @return {?}
                 */
                function () {
                    return this._compareWith;
                },
                set: /**
                 * @param {?} fn
                 * @return {?}
                 */
                function (fn) {
                    this._compareWith = fn;
                    if (this._selectionModel) {
                        // A different comparator means the selection could change.
                        this._initializeSelection();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "value", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._value;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this.writeValue(value);
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "id", {
                /**
                 * Implemented as part of MatFormFieldControl.
                 * @docs-private
                 */
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._chipInput ? this._chipInput.id : this._uid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "required", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._required;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    this.stateChanges.next();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "placeholder", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._chipInput ? this._chipInput.placeholder : this._placeholder;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._placeholder = value;
                    this.stateChanges.next();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "focused", {
                /** Whether any chips or the matChipInput inside of this chip-list has focus. */
                get: /**
                 * Whether any chips or the matChipInput inside of this chip-list has focus.
                 * @return {?}
                 */
                function () {
                    return this.chips.some(function (chip) {
                            return chip._hasFocus;
                        }) ||
                        (this._chipInput && this._chipInput.focused);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "empty", {
                /**
                 * Implemented as part of MatFormFieldControl.
                 * @docs-private
                 */
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "shouldLabelFloat", {
                /**
                 * Implemented as part of MatFormFieldControl.
                 * @docs-private
                 */
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return !this.empty || this.focused;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "disabled", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "selectable", {
                get: /**
                 * Whether or not this chip list is selectable. When a chip list is not selectable,
                 * the selected states for all the chips inside the chip list are always ignored.
                 * @return {?}
                 */
                function () {
                    return this._selectable;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    var _this = this;
                    this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    if (this.chips) {
                        this.chips.forEach(function (chip) {
                            return chip.chipListSelectable = _this._selectable;
                        });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "tabIndex", {
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._userTabIndex = value;
                    this._tabIndex = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "chipSelectionChanges", {
                /** Combined stream of all of the child chips' selection change events. */
                get: /**
                 * Combined stream of all of the child chips' selection change events.
                 * @return {?}
                 */
                function () {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map(function (chip) {
                        return chip.selectionChange;
                    }));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "chipFocusChanges", {
                /** Combined stream of all of the child chips' focus change events. */
                get: /**
                 * Combined stream of all of the child chips' focus change events.
                 * @return {?}
                 */
                function () {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map(function (chip) {
                        return chip._onFocus;
                    }));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "chipBlurChanges", {
                /** Combined stream of all of the child chips' blur change events. */
                get: /**
                 * Combined stream of all of the child chips' blur change events.
                 * @return {?}
                 */
                function () {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map(function (chip) {
                        return chip._onBlur;
                    }));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipList.prototype, "chipRemoveChanges", {
                /** Combined stream of all of the child chips' remove change events. */
                get: /**
                 * Combined stream of all of the child chips' remove change events.
                 * @return {?}
                 */
                function () {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map(function (chip) {
                        return chip.destroyed;
                    }));
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            MatChipList.prototype.ngAfterContentInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusKeyManager"](this.chips)
                    .withWrap()
                    .withVerticalOrientation()
                    .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
                // Prevents the chip list from capturing focus and redirecting
                // it back to the first chip when the user tabs out.
                this._tabOutSubscription = this._keyManager.tabOut.subscribe(function () {
                    _this._tabIndex = -1;
                    setTimeout(function () {
                        return _this._tabIndex = _this._userTabIndex || 0;
                    });
                });
                // When the list changes, re-subscribe
                this._changeSubscription = this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
                    _this._resetChips();
                    // Reset chips selected/deselected status
                    // Reset chips selected/deselected status
                    _this._initializeSelection();
                    // Check to see if we need to update our tab index
                    // Check to see if we need to update our tab index
                    _this._updateTabIndex();
                    // Check to see if we have a destroyed chip and need to refocus
                    // Check to see if we have a destroyed chip and need to refocus
                    _this._updateFocusForDestroyedChips();
                    _this.stateChanges.next();
                });
            };
            /**
             * @return {?}
             */
            MatChipList.prototype.ngOnInit = /**
             * @return {?}
             */
            function () {
                this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple, undefined, false);
                this.stateChanges.next();
            };
            /**
             * @return {?}
             */
            MatChipList.prototype.ngDoCheck = /**
             * @return {?}
             */
            function () {
                if (this.ngControl) {
                    // We need to re-evaluate this on every change detection cycle, because there are some
                    // error triggers that we can't subscribe to (e.g. parent form submissions). This means
                    // that whatever logic is in here has to be super lean or we risk destroying the performance.
                    this.updateErrorState();
                }
            };
            /**
             * @return {?}
             */
            MatChipList.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this._tabOutSubscription.unsubscribe();
                if (this._changeSubscription) {
                    this._changeSubscription.unsubscribe();
                }
                if (this._chipRemoveSubscription) {
                    this._chipRemoveSubscription.unsubscribe();
                }
                this._dropSubscriptions();
                this.stateChanges.complete();
            };
            /** Associates an HTML input element with this chip list. */
            /**
             * Associates an HTML input element with this chip list.
             * @param {?} inputElement
             * @return {?}
             */
            MatChipList.prototype.registerInput = /**
             * Associates an HTML input element with this chip list.
             * @param {?} inputElement
             * @return {?}
             */
            function (inputElement) {
                this._chipInput = inputElement;
            };
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @param {?} ids
             * @return {?}
             */
            MatChipList.prototype.setDescribedByIds = /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @param {?} ids
             * @return {?}
             */
            function (ids) {
                this._ariaDescribedby = ids.join(' ');
            };
            // Implemented as part of ControlValueAccessor.
            /**
             * @param {?} value
             * @return {?}
             */
            MatChipList.prototype.writeValue = /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this.chips) {
                    this._setSelectionByValue(value, false);
                }
            };
            // Implemented as part of ControlValueAccessor.
            /**
             * @param {?} fn
             * @return {?}
             */
            MatChipList.prototype.registerOnChange = /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this._onChange = fn;
            };
            // Implemented as part of ControlValueAccessor.
            /**
             * @param {?} fn
             * @return {?}
             */
            MatChipList.prototype.registerOnTouched = /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this._onTouched = fn;
            };
            // Implemented as part of ControlValueAccessor.
            /**
             * @param {?} isDisabled
             * @return {?}
             */
            MatChipList.prototype.setDisabledState = /**
             * @param {?} isDisabled
             * @return {?}
             */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._elementRef.nativeElement.disabled = isDisabled;
                this.stateChanges.next();
            };
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @return {?}
             */
            MatChipList.prototype.onContainerClick = /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @return {?}
             */
            function () {
                this.focus();
            };
            /**
             * Focuses the the first non-disabled chip in this chip list, or the associated input when there
             * are no eligible chips.
             */
            /**
             * Focuses the the first non-disabled chip in this chip list, or the associated input when there
             * are no eligible chips.
             * @return {?}
             */
            MatChipList.prototype.focus = /**
             * Focuses the the first non-disabled chip in this chip list, or the associated input when there
             * are no eligible chips.
             * @return {?}
             */
            function () {
                // TODO: ARIA says this should focus the first `selected` chip if any are selected.
                // Focus on first element if there's no chipInput inside chip-list
                if (this._chipInput && this._chipInput.focused) {
                    // do nothing
                }
                else if (this.chips.length > 0) {
                    this._keyManager.setFirstItemActive();
                    this.stateChanges.next();
                }
                else {
                    this._focusInput();
                    this.stateChanges.next();
                }
            };
            /** Attempt to focus an input if we have one. */
            /**
             * Attempt to focus an input if we have one.
             * @return {?}
             */
            MatChipList.prototype._focusInput = /**
             * Attempt to focus an input if we have one.
             * @return {?}
             */
            function () {
                if (this._chipInput) {
                    this._chipInput.focus();
                }
            };
            /**
             * Pass events to the keyboard manager. Available here for tests.
             */
            /**
             * Pass events to the keyboard manager. Available here for tests.
             * @param {?} event
             * @return {?}
             */
            MatChipList.prototype._keydown = /**
             * Pass events to the keyboard manager. Available here for tests.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                var /** @type {?} */ target = /** @type {?} */ (event.target);
                // If they are on an empty input and hit backspace, focus the last chip
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["BACKSPACE"] && this._isInputEmpty(target)) {
                    this._keyManager.setLastItemActive();
                    event.preventDefault();
                }
                else if (target && target.classList.contains('mat-chip')) {
                    this._keyManager.onKeydown(event);
                    this.stateChanges.next();
                }
            };
            /**
             * Check the tab index as you should not be allowed to focus an empty list.
             */
            /**
             * Check the tab index as you should not be allowed to focus an empty list.
             * @return {?}
             */
            MatChipList.prototype._updateTabIndex = /**
             * Check the tab index as you should not be allowed to focus an empty list.
             * @return {?}
             */
            function () {
                // If we have 0 chips, we should not allow keyboard focus
                this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
            };
            /**
             * Update key manager's active item when chip is deleted.
             * If the deleted chip is the last chip in chip list, focus the new last chip.
             * Otherwise focus the next chip in the list.
             * Save `_lastDestroyedIndex` so we can set the correct focus.
             */
            /**
             * Update key manager's active item when chip is deleted.
             * If the deleted chip is the last chip in chip list, focus the new last chip.
             * Otherwise focus the next chip in the list.
             * Save `_lastDestroyedIndex` so we can set the correct focus.
             * @param {?} chip
             * @return {?}
             */
            MatChipList.prototype._updateKeyManager = /**
             * Update key manager's active item when chip is deleted.
             * If the deleted chip is the last chip in chip list, focus the new last chip.
             * Otherwise focus the next chip in the list.
             * Save `_lastDestroyedIndex` so we can set the correct focus.
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                var /** @type {?} */ chipIndex = this.chips.toArray().indexOf(chip);
                if (this._isValidIndex(chipIndex)) {
                    if (chip._hasFocus) {
                        // Check whether the chip is not the last item
                        if (chipIndex < this.chips.length - 1) {
                            this._keyManager.setActiveItem(chipIndex);
                        }
                        else if (chipIndex - 1 >= 0) {
                            this._keyManager.setActiveItem(chipIndex - 1);
                        }
                    }
                    if (this._keyManager.activeItemIndex === chipIndex) {
                        this._lastDestroyedIndex = chipIndex;
                    }
                }
            };
            /**
             * Checks to see if a focus chip was recently destroyed so that we can refocus the next closest
             * one.
             */
            /**
             * Checks to see if a focus chip was recently destroyed so that we can refocus the next closest
             * one.
             * @return {?}
             */
            MatChipList.prototype._updateFocusForDestroyedChips = /**
             * Checks to see if a focus chip was recently destroyed so that we can refocus the next closest
             * one.
             * @return {?}
             */
            function () {
                var /** @type {?} */ chipsArray = this.chips;
                if (this._lastDestroyedIndex != null && chipsArray.length > 0 && this.focused) {
                    // Check whether the destroyed chip was the last item
                    var /** @type {?} */ newFocusIndex = Math.min(this._lastDestroyedIndex, chipsArray.length - 1);
                    this._keyManager.setActiveItem(newFocusIndex);
                    var /** @type {?} */ focusChip = this._keyManager.activeItem;
                    // Focus the chip
                    if (focusChip) {
                        focusChip.focus();
                    }
                }
                // Reset our destroyed index
                this._lastDestroyedIndex = null;
            };
            /**
             * Utility to ensure all indexes are valid.
             *
             * @param {?} index The index to be checked.
             * @return {?} True if the index is valid for our list of chips.
             */
            MatChipList.prototype._isValidIndex = /**
             * Utility to ensure all indexes are valid.
             *
             * @param {?} index The index to be checked.
             * @return {?} True if the index is valid for our list of chips.
             */
            function (index) {
                return index >= 0 && index < this.chips.length;
            };
            /**
             * @param {?} element
             * @return {?}
             */
            MatChipList.prototype._isInputEmpty = /**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element && element.nodeName.toLowerCase() === 'input') {
                    var /** @type {?} */ input = /** @type {?} */ (element);
                    return !input.value;
                }
                return false;
            };
            /**
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?}
             */
            MatChipList.prototype._setSelectionByValue = /**
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?}
             */
            function (value, isUserInput) {
                var _this = this;
                if (isUserInput === void 0) {
                    isUserInput = true;
                }
                this._clearSelection();
                this.chips.forEach(function (chip) {
                    return chip.deselect();
                });
                if (Array.isArray(value)) {
                    value.forEach(function (currentValue) {
                        return _this._selectValue(currentValue, isUserInput);
                    });
                    this._sortValues();
                }
                else {
                    var /** @type {?} */ correspondingChip = this._selectValue(value, isUserInput);
                    // Shift focus to the active item. Note that we shouldn't do this in multiple
                    // mode, because we don't know what chip the user interacted with last.
                    if (correspondingChip) {
                        if (isUserInput) {
                            this._keyManager.setActiveItem(correspondingChip);
                        }
                    }
                }
            };
            /**
             * Finds and selects the chip based on its value.
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?} Chip that has the corresponding value.
             */
            MatChipList.prototype._selectValue = /**
             * Finds and selects the chip based on its value.
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?} Chip that has the corresponding value.
             */
            function (value, isUserInput) {
                var _this = this;
                if (isUserInput === void 0) {
                    isUserInput = true;
                }
                var /** @type {?} */ correspondingChip = this.chips.find(function (chip) {
                    return chip.value != null && _this._compareWith(chip.value, value);
                });
                if (correspondingChip) {
                    isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
                    this._selectionModel.select(correspondingChip);
                }
                return correspondingChip;
            };
            /**
             * @return {?}
             */
            MatChipList.prototype._initializeSelection = /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Defer setting the value in order to avoid the "Expression
                // has changed after it was checked" errors from Angular.
                Promise.resolve().then(function () {
                    if (_this.ngControl || _this._value) {
                        _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value, false);
                        _this.stateChanges.next();
                    }
                });
            };
            /**
             * Deselects every chip in the list.
             * @param {?=} skip Chip that should not be deselected.
             * @return {?}
             */
            MatChipList.prototype._clearSelection = /**
             * Deselects every chip in the list.
             * @param {?=} skip Chip that should not be deselected.
             * @return {?}
             */
            function (skip) {
                this._selectionModel.clear();
                this.chips.forEach(function (chip) {
                    if (chip !== skip) {
                        chip.deselect();
                    }
                });
                this.stateChanges.next();
            };
            /**
             * Sorts the model values, ensuring that they keep the same
             * order that they have in the panel.
             * @return {?}
             */
            MatChipList.prototype._sortValues = /**
             * Sorts the model values, ensuring that they keep the same
             * order that they have in the panel.
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._multiple) {
                    this._selectionModel.clear();
                    this.chips.forEach(function (chip) {
                        if (chip.selected) {
                            _this._selectionModel.select(chip);
                        }
                    });
                    this.stateChanges.next();
                }
            };
            /**
             * Emits change event to set the model value.
             * @param {?=} fallbackValue
             * @return {?}
             */
            MatChipList.prototype._propagateChanges = /**
             * Emits change event to set the model value.
             * @param {?=} fallbackValue
             * @return {?}
             */
            function (fallbackValue) {
                var /** @type {?} */ valueToEmit = null;
                if (Array.isArray(this.selected)) {
                    valueToEmit = this.selected.map(function (chip) {
                        return chip.value;
                    });
                }
                else {
                    valueToEmit = this.selected ? this.selected.value : fallbackValue;
                }
                this._value = valueToEmit;
                this.change.emit(new MatChipListChange(this, valueToEmit));
                this.valueChange.emit(valueToEmit);
                this._onChange(valueToEmit);
                this._changeDetectorRef.markForCheck();
            };
            /** When blurred, mark the field as touched when focus moved outside the chip list. */
            /**
             * When blurred, mark the field as touched when focus moved outside the chip list.
             * @return {?}
             */
            MatChipList.prototype._blur = /**
             * When blurred, mark the field as touched when focus moved outside the chip list.
             * @return {?}
             */
            function () {
                var _this = this;
                this._keyManager.setActiveItem(-1);
                if (!this.disabled) {
                    if (this._chipInput) {
                        // If there's a chip input, we should check whether the focus moved to chip input.
                        // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                        // to chip input, do nothing.
                        // Timeout is needed to wait for the focus() event trigger on chip input.
                        setTimeout(function () {
                            if (!_this.focused) {
                                _this._markAsTouched();
                            }
                        });
                    }
                    else {
                        // If there's no chip input, then mark the field as touched.
                        this._markAsTouched();
                    }
                }
            };
            /** Mark the field as touched */
            /**
             * Mark the field as touched
             * @return {?}
             */
            MatChipList.prototype._markAsTouched = /**
             * Mark the field as touched
             * @return {?}
             */
            function () {
                this._onTouched();
                this._changeDetectorRef.markForCheck();
                this.stateChanges.next();
            };
            /**
             * @return {?}
             */
            MatChipList.prototype._resetChips = /**
             * @return {?}
             */
            function () {
                this._dropSubscriptions();
                this._listenToChipsFocus();
                this._listenToChipsSelection();
                this._listenToChipsRemoved();
            };
            /**
             * @return {?}
             */
            MatChipList.prototype._dropSubscriptions = /**
             * @return {?}
             */
            function () {
                if (this._chipFocusSubscription) {
                    this._chipFocusSubscription.unsubscribe();
                    this._chipFocusSubscription = null;
                }
                if (this._chipBlurSubscription) {
                    this._chipBlurSubscription.unsubscribe();
                    this._chipBlurSubscription = null;
                }
                if (this._chipSelectionSubscription) {
                    this._chipSelectionSubscription.unsubscribe();
                    this._chipSelectionSubscription = null;
                }
            };
            /**
             * Listens to user-generated selection events on each chip.
             * @return {?}
             */
            MatChipList.prototype._listenToChipsSelection = /**
             * Listens to user-generated selection events on each chip.
             * @return {?}
             */
            function () {
                var _this = this;
                this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
                    event.source.selected
                        ? _this._selectionModel.select(event.source)
                        : _this._selectionModel.deselect(event.source);
                    // For single selection chip list, make sure the deselected value is unselected.
                    if (!_this.multiple) {
                        _this.chips.forEach(function (chip) {
                            if (!_this._selectionModel.isSelected(chip) && chip.selected) {
                                chip.deselect();
                            }
                        });
                    }
                    if (event.isUserInput) {
                        _this._propagateChanges();
                    }
                });
            };
            /**
             * Listens to user-generated selection events on each chip.
             * @return {?}
             */
            MatChipList.prototype._listenToChipsFocus = /**
             * Listens to user-generated selection events on each chip.
             * @return {?}
             */
            function () {
                var _this = this;
                this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
                    var /** @type {?} */ chipIndex = _this.chips.toArray().indexOf(event.chip);
                    if (_this._isValidIndex(chipIndex)) {
                        _this._keyManager.updateActiveItemIndex(chipIndex);
                    }
                    _this.stateChanges.next();
                });
                this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
                    _this._blur();
                    _this.stateChanges.next();
                });
            };
            /**
             * @return {?}
             */
            MatChipList.prototype._listenToChipsRemoved = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
                    _this._updateKeyManager(event.chip);
                });
            };
            MatChipList.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                        selector: 'mat-chip-list',
                        template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
                        exportAs: 'matChipList',
                        host: {
                            '[attr.tabindex]': '_tabIndex',
                            '[attr.aria-describedby]': '_ariaDescribedby || null',
                            '[attr.aria-required]': 'required.toString()',
                            '[attr.aria-disabled]': 'disabled.toString()',
                            '[attr.aria-invalid]': 'errorState',
                            '[attr.aria-multiselectable]': 'multiple',
                            '[attr.role]': 'role',
                            '[class.mat-chip-list-disabled]': 'disabled',
                            '[class.mat-chip-list-invalid]': 'errorState',
                            '[class.mat-chip-list-required]': 'required',
                            '[attr.aria-orientation]': 'ariaOrientation',
                            'class': 'mat-chip-list',
                            '(focus)': 'focus()',
                            '(blur)': '_blur()',
                            '(keydown)': '_keydown($event)',
                            '[id]': '_uid',
                        },
                        providers: [{
                            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
                            useExisting: MatChipList
                        }],
                        styles: [".mat-chip{position:relative;overflow:hidden;box-sizing:border-box}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:24px;align-items:center;cursor:default}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip:focus{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);outline:0}@media screen and (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:7px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:7px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:7px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:7px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:32px;height:32px;margin-right:8px;margin-left:0}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:0}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:7px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:7px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden}input.mat-chip-input{width:150px;margin:3px;flex:1 0 150px}"],
                        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
                    },]
                },
            ];
            /** @nocollapse */
            MatChipList.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],},
                    {
                        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]},]
                    },
                    {type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],},
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]}, {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]},]
                    },
                ];
            };
            MatChipList.propDecorators = {
                "errorStateMatcher": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "multiple": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "compareWith": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "value": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "required": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "placeholder": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "disabled": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "ariaOrientation": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
                    args: ['aria-orientation',]
                },],
                "selectable": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "tabIndex": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "change": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
                "valueChange": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
                "chips": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatChip,]},],
            };
            return MatChipList;
        }(_MatChipListMixinBase));

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
// Increasing integer for generating unique ids.
        var /** @type {?} */ nextUniqueId$1 = 0;
        /**
         * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
         * May be placed inside or outside of an `<mat-chip-list>`.
         */
        var MatChipInput = /** @class */ (function () {
            function MatChipInput(_elementRef, _defaultOptions) {
                this._elementRef = _elementRef;
                this._defaultOptions = _defaultOptions;
                /**
                 * Whether the control is focused.
                 */
                this.focused = false;
                this._addOnBlur = false;
                /**
                 * The list of key codes that will trigger a chipEnd event.
                 *
                 * Defaults to `[ENTER]`.
                 */
                this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
                /**
                 * Emitted when a chip is to be added.
                 */
                this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                /**
                 * The input's placeholder text.
                 * @deprecated Bind to the `placeholder` attribute directly.
                 * \@deletion-target 7.0.0
                 */
                this.placeholder = '';
                /**
                 * Unique id for the input.
                 */
                this.id = "mat-chip-list-input-" + nextUniqueId$1++;
                this._inputElement = /** @type {?} */ (this._elementRef.nativeElement);
            }

            Object.defineProperty(MatChipInput.prototype, "chipList", {
                set: /**
                 * Register input for chip list
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (value) {
                        this._chipList = value;
                        this._chipList.registerInput(this);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipInput.prototype, "addOnBlur", {
                get: /**
                 * Whether or not the chipEnd event will be emitted when the input is blurred.
                 * @return {?}
                 */
                function () {
                    return this._addOnBlur;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatChipInput.prototype, "empty", {
                /** Whether the input is empty. */
                get: /**
                 * Whether the input is empty.
                 * @return {?}
                 */
                function () {
                    return !this._inputElement.value;
                },
                enumerable: true,
                configurable: true
            });
            /** Utility method to make host definition/tests more clear. */
            /**
             * Utility method to make host definition/tests more clear.
             * @param {?=} event
             * @return {?}
             */
            MatChipInput.prototype._keydown = /**
             * Utility method to make host definition/tests more clear.
             * @param {?=} event
             * @return {?}
             */
            function (event) {
                this._emitChipEnd(event);
            };
            /** Checks to see if the blur should emit the (chipEnd) event. */
            /**
             * Checks to see if the blur should emit the (chipEnd) event.
             * @return {?}
             */
            MatChipInput.prototype._blur = /**
             * Checks to see if the blur should emit the (chipEnd) event.
             * @return {?}
             */
            function () {
                if (this.addOnBlur) {
                    this._emitChipEnd();
                }
                this.focused = false;
                // Blur the chip list if it is not focused
                if (!this._chipList.focused) {
                    this._chipList._blur();
                }
                this._chipList.stateChanges.next();
            };
            /**
             * @return {?}
             */
            MatChipInput.prototype._focus = /**
             * @return {?}
             */
            function () {
                this.focused = true;
                this._chipList.stateChanges.next();
            };
            /** Checks to see if the (chipEnd) event needs to be emitted. */
            /**
             * Checks to see if the (chipEnd) event needs to be emitted.
             * @param {?=} event
             * @return {?}
             */
            MatChipInput.prototype._emitChipEnd = /**
             * Checks to see if the (chipEnd) event needs to be emitted.
             * @param {?=} event
             * @return {?}
             */
            function (event) {
                if (!this._inputElement.value && !!event) {
                    this._chipList._keydown(event);
                }
                if (!event || this.separatorKeyCodes.indexOf(event.keyCode) > -1) {
                    this.chipEnd.emit({input: this._inputElement, value: this._inputElement.value});
                    if (event) {
                        event.preventDefault();
                    }
                }
            };
            /**
             * @return {?}
             */
            MatChipInput.prototype._onInput = /**
             * @return {?}
             */
            function () {
                // Let chip list know whenever the value changes.
                this._chipList.stateChanges.next();
            };
            /** Focuses the input. */
            /**
             * Focuses the input.
             * @return {?}
             */
            MatChipInput.prototype.focus = /**
             * Focuses the input.
             * @return {?}
             */
            function () {
                this._inputElement.focus();
            };
            MatChipInput.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                        selector: 'input[matChipInputFor]',
                        exportAs: 'matChipInput, matChipInputFor',
                        host: {
                            'class': 'mat-chip-input mat-input-element',
                            '(keydown)': '_keydown($event)',
                            '(blur)': '_blur()',
                            '(focus)': '_focus()',
                            '(input)': '_onInput()',
                            '[id]': 'id',
                            '[attr.placeholder]': 'placeholder || null',
                        }
                    },]
                },
            ];
            /** @nocollapse */
            MatChipInput.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],},
                    {
                        type: undefined,
                        decorators: [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                            args: [MAT_CHIPS_DEFAULT_OPTIONS,]
                        },]
                    },
                ];
            };
            MatChipInput.propDecorators = {
                "chipList": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputFor',]},],
                "addOnBlur": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
                    args: ['matChipInputAddOnBlur',]
                },],
                "separatorKeyCodes": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
                    args: ['matChipInputSeparatorKeyCodes',]
                },],
                "chipEnd": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
                    args: ['matChipInputTokenEnd',]
                },],
                "placeholder": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "id": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
            };
            return MatChipInput;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var /** @type {?} */ CHIP_DECLARATIONS = [
            MatChipList,
            MatChip,
            MatChipInput,
            MatChipRemove,
            MatChipAvatar,
            MatChipTrailingIcon,
        ];
        var ɵ0 = {
            separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"]]
        };
        var MatChipsModule = /** @class */ (function () {
            function MatChipsModule() {
            }

            MatChipsModule.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                        exports: CHIP_DECLARATIONS,
                        declarations: CHIP_DECLARATIONS,
                        providers: [
                            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
                            {
                                provide: MAT_CHIPS_DEFAULT_OPTIONS,
                                useValue: /** @type {?} */ ((ɵ0))
                            }
                        ]
                    },]
                },
            ];
            return MatChipsModule;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */


//# sourceMappingURL=chips.es5.js.map


        /***/
    }),

    /***/ "./node_modules/@angular/material/esm5/form-field.es5.js":
    /*!***************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/form-field.es5.js ***!
  \***************************************************************/
    /*! exports provided: MatFormFieldModule, MatError, MatFormFieldBase, _MatFormFieldMixinBase, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
            return MatFormFieldModule;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatError", function () {
            return MatError;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatFormFieldBase", function () {
            return MatFormFieldBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatFormFieldMixinBase", function () {
            return _MatFormFieldMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
            return MAT_FORM_FIELD_DEFAULT_OPTIONS;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
            return MatFormField;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
            return MatFormFieldControl;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
            return getMatFormFieldPlaceholderConflictError;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
            return getMatFormFieldDuplicatedHintError;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
            return getMatFormFieldMissingControlError;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatHint", function () {
            return MatHint;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
            return MatPlaceholder;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
            return MatPrefix;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
            return MatSuffix;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
            return MatLabel;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
            return matFormFieldAnimations;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var /** @type {?} */ nextUniqueId = 0;
        /**
         * Single error message to be shown underneath the form field.
         */
        var MatError = /** @class */ (function () {
            function MatError() {
                this.id = "mat-error-" + nextUniqueId++;
            }

            MatError.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                        selector: 'mat-error',
                        host: {
                            'class': 'mat-error',
                            'role': 'alert',
                            '[attr.id]': 'id',
                        }
                    },]
                },
            ];
            /** @nocollapse */
            MatError.propDecorators = {
                "id": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
            };
            return MatError;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Animations used by the MatFormField.
         */
        var /** @type {?} */ matFormFieldAnimations = {
            /** Animation that transitions the form field's error and hint messages. */
            transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [
                // TODO(mmalerba): Use angular animations for label animation as well.
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1,
                    transform: 'translateY(0%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
                ]),
            ])
        };

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * An interface which allows a control to work inside of a `MatFormField`.
         * @abstract
         * @template T
         */
        var /**
         * An interface which allows a control to work inside of a `MatFormField`.
         * @abstract
         * @template T
         */
        MatFormFieldControl = /** @class */ (function () {
            function MatFormFieldControl() {
            }

            return MatFormFieldControl;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * \@docs-private
         * @return {?}
         */
        function getMatFormFieldPlaceholderConflictError() {
            return Error('Placeholder attribute and child element were both specified.');
        }

        /**
         * \@docs-private
         * @param {?} align
         * @return {?}
         */
        function getMatFormFieldDuplicatedHintError(align) {
            return Error("A hint was already declared for 'align=\"" + align + "\"'.");
        }

        /**
         * \@docs-private
         * @return {?}
         */
        function getMatFormFieldMissingControlError() {
            return Error('mat-form-field must contain a MatFormFieldControl.');
        }

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var /** @type {?} */ nextUniqueId$1 = 0;
        /**
         * Hint text to be shown underneath the form field control.
         */
        var MatHint = /** @class */ (function () {
            function MatHint() {
                /**
                 * Whether to align the hint label at the start or end of the line.
                 */
                this.align = 'start';
                /**
                 * Unique ID for the hint. Used for the aria-describedby on the form field control.
                 */
                this.id = "mat-hint-" + nextUniqueId$1++;
            }

            MatHint.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                        selector: 'mat-hint',
                        host: {
                            'class': 'mat-hint',
                            '[class.mat-right]': 'align == "end"',
                            '[attr.id]': 'id',
                            // Remove align attribute to prevent it from interfering with layout.
                            '[attr.align]': 'null',
                        }
                    },]
                },
            ];
            /** @nocollapse */
            MatHint.propDecorators = {
                "align": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
                "id": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
            };
            return MatHint;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * The floating label for a `mat-form-field`.
         */
        var MatLabel = /** @class */ (function () {
            function MatLabel() {
            }

            MatLabel.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                        selector: 'mat-label'
                    },]
                },
            ];
            return MatLabel;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * The placeholder text for an `MatFormField`.
         * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
         *     placeholder.
         * \@deletion-target 8.0.0
         */
        var MatPlaceholder = /** @class */ (function () {
            function MatPlaceholder() {
            }

            MatPlaceholder.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                        selector: 'mat-placeholder'
                    },]
                },
            ];
            return MatPlaceholder;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Prefix to be placed the the front of the form field.
         */
        var MatPrefix = /** @class */ (function () {
            function MatPrefix() {
            }

            MatPrefix.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                        selector: '[matPrefix]',
                    },]
                },
            ];
            return MatPrefix;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Suffix to be placed at the end of the form field.
         */
        var MatSuffix = /** @class */ (function () {
            function MatSuffix() {
            }

            MatSuffix.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                        selector: '[matSuffix]',
                    },]
                },
            ];
            return MatSuffix;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var /** @type {?} */ nextUniqueId$2 = 0;
        var /** @type {?} */ floatingLabelScale = 0.75;
        var /** @type {?} */ outlineGapPadding = 5;
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatFormFieldBase = /** @class */ (function () {
            function MatFormFieldBase(_elementRef) {
                this._elementRef = _elementRef;
            }

            return MatFormFieldBase;
        }());
        var /** @type {?} */ _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatFormFieldBase, 'primary');
        var /** @type {?} */ MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
        /**
         * Container for form controls that applies Material Design styling and behavior.
         */
        var MatFormField = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatFormField, _super);

            function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaultOptions, _platform) {
                var _this = _super.call(this, _elementRef) || this;
                _this._elementRef = _elementRef;
                _this._changeDetectorRef = _changeDetectorRef;
                _this._dir = _dir;
                _this._defaultOptions = _defaultOptions;
                _this._platform = _platform;
                /**
                 * Override for the logic that disables the label animation in certain cases.
                 */
                _this._showAlwaysAnimate = false;
                /**
                 * State of the mat-hint and mat-error animations.
                 */
                _this._subscriptAnimationState = '';
                _this._hintLabel = '';
                // Unique id for the hint label.
                _this._hintLabelId = "mat-hint-" + nextUniqueId$2++;
                _this._outlineGapWidth = 0;
                _this._outlineGapStart = 0;
                _this._initialGapCalculated = false;
                _this._labelOptions = labelOptions ? labelOptions : {};
                _this.floatLabel = _this._labelOptions.float || 'auto';
                return _this;
            }

            Object.defineProperty(MatFormField.prototype, "appearance", {
                get: /**
                 * The form-field appearance style.
                 * @return {?}
                 */
                function () {
                    return this._appearance || this._defaultOptions && this._defaultOptions.appearance || 'legacy';
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._appearance = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatFormField.prototype, "hideRequiredMarker", {
                get: /**
                 * Whether the required marker should be hidden.
                 * @return {?}
                 */
                function () {
                    return this._hideRequiredMarker;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatFormField.prototype, "_shouldAlwaysFloat", {
                /** Whether the floating label should always float or not. */
                get: /**
                 * Whether the floating label should always float or not.
                 * @return {?}
                 */
                function () {
                    return this.floatLabel === 'always' && !this._showAlwaysAnimate;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatFormField.prototype, "_canLabelFloat", {
                /** Whether the label can float or not. */
                get: /**
                 * Whether the label can float or not.
                 * @return {?}
                 */
                function () {
                    return this.floatLabel !== 'never';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatFormField.prototype, "hintLabel", {
                get: /**
                 * Text for the form field hint.
                 * @return {?}
                 */
                function () {
                    return this._hintLabel;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._hintLabel = value;
                    this._processHints();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatFormField.prototype, "floatLabel", {
                get: /**
                 * Whether the label should always float, never float or float as the user types.
                 *
                 * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
                 * way to make the floating label emulate the behavior of a standard input placeholder. However
                 * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
                 * appearances the `never` option has been disabled in favor of just using the placeholder.
                 * @return {?}
                 */
                function () {
                    return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (value !== this._floatLabel) {
                        this._floatLabel = value || this._labelOptions.float || 'auto';
                        this._changeDetectorRef.markForCheck();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Gets an ElementRef for the element that a overlay attached to the form-field should be
             * positioned relative to.
             */
            /**
             * Gets an ElementRef for the element that a overlay attached to the form-field should be
             * positioned relative to.
             * @return {?}
             */
            MatFormField.prototype.getConnectedOverlayOrigin = /**
             * Gets an ElementRef for the element that a overlay attached to the form-field should be
             * positioned relative to.
             * @return {?}
             */
            function () {
                return this._connectionContainerRef || this._elementRef;
            };
            /**
             * @return {?}
             */
            MatFormField.prototype.ngAfterContentInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._validateControlChild();
                if (this._control.controlType) {
                    this._elementRef.nativeElement.classList
                        .add("mat-form-field-type-" + this._control.controlType);
                }
                // Subscribe to changes in the child control state in order to update the form field UI.
                this._control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(/** @type {?} */ ((null)))).subscribe(function () {
                    _this._validatePlaceholders();
                    _this._syncDescribedByIds();
                    _this._changeDetectorRef.markForCheck();
                });
                // Run change detection if the value, prefix, or suffix changes.
                var /** @type {?} */ valueChanges = this._control.ngControl && this._control.ngControl.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(valueChanges, this._prefixChildren.changes, this._suffixChildren.changes)
                    .subscribe(function () {
                        return _this._changeDetectorRef.markForCheck();
                    });
                // Re-validate when the number of hints changes.
                this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
                    _this._processHints();
                    _this._changeDetectorRef.markForCheck();
                });
                // Update the aria-described by when the number of errors changes.
                this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
                    _this._syncDescribedByIds();
                    _this._changeDetectorRef.markForCheck();
                });
            };
            /**
             * @return {?}
             */
            MatFormField.prototype.ngAfterContentChecked = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._validateControlChild();
                if (!this._initialGapCalculated) {
                    Promise.resolve().then(function () {
                        return _this.updateOutlineGap();
                    });
                }
            };
            /**
             * @return {?}
             */
            MatFormField.prototype.ngAfterViewInit = /**
             * @return {?}
             */
            function () {
                // Avoid animations on load.
                this._subscriptAnimationState = 'enter';
                this._changeDetectorRef.detectChanges();
            };
            /** Determines whether a class from the NgControl should be forwarded to the host element. */
            /**
             * Determines whether a class from the NgControl should be forwarded to the host element.
             * @param {?} prop
             * @return {?}
             */
            MatFormField.prototype._shouldForward = /**
             * Determines whether a class from the NgControl should be forwarded to the host element.
             * @param {?} prop
             * @return {?}
             */
            function (prop) {
                var /** @type {?} */ ngControl = this._control ? this._control.ngControl : null;
                return ngControl && (/** @type {?} */ (ngControl))[prop];
            };
            /**
             * @return {?}
             */
            MatFormField.prototype._hasPlaceholder = /**
             * @return {?}
             */
            function () {
                return !!(this._control && this._control.placeholder || this._placeholderChild);
            };
            /**
             * @return {?}
             */
            MatFormField.prototype._hasLabel = /**
             * @return {?}
             */
            function () {
                return !!this._labelChild;
            };
            /**
             * @return {?}
             */
            MatFormField.prototype._shouldLabelFloat = /**
             * @return {?}
             */
            function () {
                return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
            };
            /**
             * @return {?}
             */
            MatFormField.prototype._hideControlPlaceholder = /**
             * @return {?}
             */
            function () {
                // In the legacy appearance the placeholder is promoted to a label if no label is given.
                return this.appearance === 'legacy' && !this._hasLabel() ||
                    this._hasLabel() && !this._shouldLabelFloat();
            };
            /**
             * @return {?}
             */
            MatFormField.prototype._hasFloatingLabel = /**
             * @return {?}
             */
            function () {
                // In the legacy appearance the placeholder is promoted to a label if no label is given.
                return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
            };
            /** Determines whether to display hints or errors. */
            /**
             * Determines whether to display hints or errors.
             * @return {?}
             */
            MatFormField.prototype._getDisplayedMessages = /**
             * Determines whether to display hints or errors.
             * @return {?}
             */
            function () {
                return (this._errorChildren && this._errorChildren.length > 0 &&
                    this._control.errorState) ? 'error' : 'hint';
            };
            /** Animates the placeholder up and locks it in position. */
            /**
             * Animates the placeholder up and locks it in position.
             * @return {?}
             */
            MatFormField.prototype._animateAndLockLabel = /**
             * Animates the placeholder up and locks it in position.
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._hasFloatingLabel() && this._canLabelFloat) {
                    this._showAlwaysAnimate = true;
                    this.floatLabel = 'always';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                        _this._showAlwaysAnimate = false;
                    });
                    this._changeDetectorRef.markForCheck();
                }
            };
            /**
             * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
             * or child element with the `mat-placeholder` directive).
             * @return {?}
             */
            MatFormField.prototype._validatePlaceholders = /**
             * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
             * or child element with the `mat-placeholder` directive).
             * @return {?}
             */
            function () {
                if (this._control.placeholder && this._placeholderChild) {
                    throw getMatFormFieldPlaceholderConflictError();
                }
            };
            /**
             * Does any extra processing that is required when handling the hints.
             * @return {?}
             */
            MatFormField.prototype._processHints = /**
             * Does any extra processing that is required when handling the hints.
             * @return {?}
             */
            function () {
                this._validateHints();
                this._syncDescribedByIds();
            };
            /**
             * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
             * attribute being considered as `align="start"`.
             * @return {?}
             */
            MatFormField.prototype._validateHints = /**
             * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
             * attribute being considered as `align="start"`.
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._hintChildren) {
                    var /** @type {?} */ startHint_1;
                    var /** @type {?} */ endHint_1;
                    this._hintChildren.forEach(function (hint) {
                        if (hint.align === 'start') {
                            if (startHint_1 || _this.hintLabel) {
                                throw getMatFormFieldDuplicatedHintError('start');
                            }
                            startHint_1 = hint;
                        }
                        else if (hint.align === 'end') {
                            if (endHint_1) {
                                throw getMatFormFieldDuplicatedHintError('end');
                            }
                            endHint_1 = hint;
                        }
                    });
                }
            };
            /**
             * Sets the list of element IDs that describe the child control. This allows the control to update
             * its `aria-describedby` attribute accordingly.
             * @return {?}
             */
            MatFormField.prototype._syncDescribedByIds = /**
             * Sets the list of element IDs that describe the child control. This allows the control to update
             * its `aria-describedby` attribute accordingly.
             * @return {?}
             */
            function () {
                if (this._control) {
                    var /** @type {?} */ ids = [];
                    if (this._getDisplayedMessages() === 'hint') {
                        var /** @type {?} */ startHint = this._hintChildren ?
                            this._hintChildren.find(function (hint) {
                                return hint.align === 'start';
                            }) : null;
                        var /** @type {?} */ endHint = this._hintChildren ?
                            this._hintChildren.find(function (hint) {
                                return hint.align === 'end';
                            }) : null;
                        if (startHint) {
                            ids.push(startHint.id);
                        }
                        else if (this._hintLabel) {
                            ids.push(this._hintLabelId);
                        }
                        if (endHint) {
                            ids.push(endHint.id);
                        }
                    }
                    else if (this._errorChildren) {
                        ids = this._errorChildren.map(function (error) {
                            return error.id;
                        });
                    }
                    this._control.setDescribedByIds(ids);
                }
            };
            /** Throws an error if the form field's control is missing. */
            /**
             * Throws an error if the form field's control is missing.
             * @return {?}
             */
            MatFormField.prototype._validateControlChild = /**
             * Throws an error if the form field's control is missing.
             * @return {?}
             */
            function () {
                if (!this._control) {
                    throw getMatFormFieldMissingControlError();
                }
            };
            /**
             * Updates the width and position of the gap in the outline. Only relevant for the outline
             * appearance.
             */
            /**
             * Updates the width and position of the gap in the outline. Only relevant for the outline
             * appearance.
             * @return {?}
             */
            MatFormField.prototype.updateOutlineGap = /**
             * Updates the width and position of the gap in the outline. Only relevant for the outline
             * appearance.
             * @return {?}
             */
            function () {
                if (this.appearance === 'outline' && this._label && this._label.nativeElement.children.length) {
                    if (this._platform && !this._platform.isBrowser) {
                        // getBoundingClientRect isn't available on the server.
                        this._initialGapCalculated = true;
                        return;
                    }
                    if (!document.documentElement.contains(this._elementRef.nativeElement)) {
                        return;
                    }
                    var /** @type {?} */ containerStart = this._getStartEnd(this._connectionContainerRef.nativeElement.getBoundingClientRect());
                    var /** @type {?} */ labelStart = this._getStartEnd(this._label.nativeElement.children[0].getBoundingClientRect());
                    var /** @type {?} */ labelWidth = 0;
                    for (var _i = 0, _a = this._label.nativeElement.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        labelWidth += child.offsetWidth;
                    }
                    this._outlineGapStart = labelStart - containerStart - outlineGapPadding;
                    this._outlineGapWidth = labelWidth * floatingLabelScale + outlineGapPadding * 2;
                }
                else {
                    this._outlineGapStart = 0;
                    this._outlineGapWidth = 0;
                }
                this._initialGapCalculated = true;
                this._changeDetectorRef.markForCheck();
            };
            /**
             * Gets the start end of the rect considering the current directionality.
             * @param {?} rect
             * @return {?}
             */
            MatFormField.prototype._getStartEnd = /**
             * Gets the start end of the rect considering the current directionality.
             * @param {?} rect
             * @return {?}
             */
            function (rect) {
                return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
            };
            MatFormField.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                        selector: 'mat-form-field',
                        exportAs: 'matFormField',
                        template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content>{{_control.placeholder}}</ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&nbsp;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\" [style.width.px]=\"_outlineGapStart\"></div><div class=\"mat-form-field-outline-gap\" [style.width.px]=\"_outlineGapWidth\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\" [style.width.px]=\"_outlineGapStart\"></div><div class=\"mat-form-field-outline-gap\" [style.width.px]=\"_outlineGapWidth\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
                        // MatInput is a directive and can't have styles, so we need to include its styles here.
                        // The MatInput styles are fairly minimal so it shouldn't be a big deal for people who
                        // aren't using MatInput.
                        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:0;left:0;right:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}"],
                        animations: [matFormFieldAnimations.transitionMessages],
                        host: {
                            'class': 'mat-form-field',
                            '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                            '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                            '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                            '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                            '[class.mat-form-field-invalid]': '_control.errorState',
                            '[class.mat-form-field-can-float]': '_canLabelFloat',
                            '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                            '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                            '[class.mat-form-field-disabled]': '_control.disabled',
                            '[class.mat-form-field-autofilled]': '_control.autofilled',
                            '[class.mat-focused]': '_control.focused',
                            '[class.mat-accent]': 'color == "accent"',
                            '[class.mat-warn]': 'color == "warn"',
                            '[class.ng-untouched]': '_shouldForward("untouched")',
                            '[class.ng-touched]': '_shouldForward("touched")',
                            '[class.ng-pristine]': '_shouldForward("pristine")',
                            '[class.ng-dirty]': '_shouldForward("dirty")',
                            '[class.ng-valid]': '_shouldForward("valid")',
                            '[class.ng-invalid]': '_shouldForward("invalid")',
                            '[class.ng-pending]': '_shouldForward("pending")',
                        },
                        inputs: ['color'],
                        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    },]
                },
            ];
            /** @nocollapse */
            MatFormField.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],},
                    {
                        type: undefined,
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}, {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"],]
                        },]
                    },
                    {
                        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},]
                    },
                    {
                        type: undefined,
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}, {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,]
                        },]
                    },
                    {type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"],},
                ];
            };
            MatFormField.propDecorators = {
                "appearance": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
                "hideRequiredMarker": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
                "hintLabel": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
                "floatLabel": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]},],
                "underlineRef": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                    args: ['underline',]
                },],
                "_connectionContainerRef": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                    args: ['connectionContainer',]
                },],
                "_inputContainerRef": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                    args: ['inputContainer',]
                },],
                "_label": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['label',]},],
                "_control": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
                    args: [MatFormFieldControl,]
                },],
                "_placeholderChild": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
                    args: [MatPlaceholder,]
                },],
                "_labelChild": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel,]},],
                "_errorChildren": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
                    args: [MatError,]
                },],
                "_hintChildren": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
                    args: [MatHint,]
                },],
                "_prefixChildren": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
                    args: [MatPrefix,]
                },],
                "_suffixChildren": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
                    args: [MatSuffix,]
                },],
            };
            return MatFormField;
        }(_MatFormFieldMixinBase));

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var MatFormFieldModule = /** @class */ (function () {
            function MatFormFieldModule() {
            }

            MatFormFieldModule.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                        declarations: [
                            MatError,
                            MatFormField,
                            MatHint,
                            MatLabel,
                            MatPlaceholder,
                            MatPrefix,
                            MatSuffix,
                        ],
                        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
                        exports: [
                            MatError,
                            MatFormField,
                            MatHint,
                            MatLabel,
                            MatPlaceholder,
                            MatPrefix,
                            MatSuffix,
                        ],
                    },]
                },
            ];
            return MatFormFieldModule;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */


//# sourceMappingURL=form-field.es5.js.map


        /***/
    }),

    /***/ "./node_modules/@angular/material/esm5/input.es5.js":
    /*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/input.es5.js ***!
  \**********************************************************/
    /*! exports provided: MatTextareaAutosize, MatInputBase, _MatInputMixinBase, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
            return MatTextareaAutosize;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatInputBase", function () {
            return MatInputBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatInputMixinBase", function () {
            return _MatInputMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatInput", function () {
            return MatInput;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
            return getMatInputUnsupportedTypeError;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
            return MatInputModule;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
            return MAT_INPUT_VALUE_ACCESSOR;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Directive to automatically resize a textarea to fit its content.
         * \@deletion-target 7.0.0 deprecate in favor of `cdkTextareaAutosize`.
         */
        var MatTextareaAutosize = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatTextareaAutosize, _super);

            function MatTextareaAutosize() {
                return _super !== null && _super.apply(this, arguments) || this;
            }

            Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMinRows", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this.minRows;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this.minRows = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMaxRows", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this.maxRows;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this.maxRows = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatTextareaAutosize.prototype, "matAutosize", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this.enabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this.enabled = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatTextareaAutosize.prototype, "matTextareaAutosize", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this.enabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this.enabled = value;
                },
                enumerable: true,
                configurable: true
            });
            MatTextareaAutosize.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                        selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                        exportAs: 'matTextareaAutosize',
                        inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                        host: {
                            'class': 'cdk-textarea-autosize mat-autosize',
                            // Textarea elements that have the directive applied should have a single row by default.
                            // Browsers normally show two rows by default and therefore this limits the minRows binding.
                            'rows': '1',
                            '(input)': '_noopInputHandler()',
                        },
                    },]
                },
            ];
            /** @nocollapse */
            MatTextareaAutosize.propDecorators = {
                "matAutosizeMinRows": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "matAutosizeMaxRows": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "matAutosize": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-autosize',]},],
                "matTextareaAutosize": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
            };
            return MatTextareaAutosize;
        }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["CdkTextareaAutosize"]));

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * \@docs-private
         * @param {?} type
         * @return {?}
         */
        function getMatInputUnsupportedTypeError(type) {
            return Error("Input type \"" + type + "\" isn't supported by matInput.");
        }

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * This token is used to inject the object whose value should be set into `MatInput`. If none is
         * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
         * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
         * value to them.
         */
        var /** @type {?} */ MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
        var /** @type {?} */ MAT_INPUT_INVALID_TYPES = [
            'button',
            'checkbox',
            'file',
            'hidden',
            'image',
            'radio',
            'range',
            'reset',
            'submit'
        ];
        var /** @type {?} */ nextUniqueId = 0;
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatInputBase = /** @class */ (function () {
            function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
                this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
                this._parentForm = _parentForm;
                this._parentFormGroup = _parentFormGroup;
                this.ngControl = ngControl;
            }

            return MatInputBase;
        }());
        var /** @type {?} */ _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinErrorState"])(MatInputBase);
        /**
         * Directive that allows a native input to work inside a `MatFormField`.
         */
        var MatInput = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatInput, _super);

            function MatInput(_elementRef, _platform, /** @docs-private */
                              ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
                var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
                _this._elementRef = _elementRef;
                _this._platform = _platform;
                _this.ngControl = ngControl;
                _this._autofillMonitor = _autofillMonitor;
                _this._uid = "mat-input-" + nextUniqueId++;
                /**
                 * Whether the component is being rendered on the server.
                 */
                _this._isServer = false;
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 */
                _this.focused = false;
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 */
                _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 */
                _this.controlType = 'mat-input';
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 */
                _this.autofilled = false;
                _this._disabled = false;
                _this._required = false;
                _this._type = 'text';
                _this._readonly = false;
                _this._neverEmptyInputTypes = [
                    'date',
                    'datetime',
                    'datetime-local',
                    'month',
                    'time',
                    'week'
                ].filter(function (t) {
                    return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getSupportedInputTypes"])().has(t);
                });
                // If no input value accessor was explicitly specified, use the element as the input value
                // accessor.
                // If no input value accessor was explicitly specified, use the element as the input value
                // accessor.
                _this._inputValueAccessor = inputValueAccessor || _this._elementRef.nativeElement;
                _this._previousNativeValue = _this.value;
                // Force setter to be called in case id was not specified.
                // Force setter to be called in case id was not specified.
                _this.id = _this.id;
                // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
                // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
                // exists on iOS, we only bother to install the listener on iOS.
                if (_platform.IOS) {
                    ngZone.runOutsideAngular(function () {
                        _elementRef.nativeElement.addEventListener('keyup', function (event) {
                            var /** @type {?} */ el = /** @type {?} */ (event.target);
                            if (!el.value && !el.selectionStart && !el.selectionEnd) {
                                // Note: Just setting `0, 0` doesn't fix the issue. Setting
                                // `1, 1` fixes it for the first time that you type text and
                                // then hold delete. Toggling to `1, 1` and then back to
                                // `0, 0` seems to completely fix it.
                                el.setSelectionRange(1, 1);
                                el.setSelectionRange(0, 0);
                            }
                        });
                    });
                }
                _this._isServer = !_this._platform.isBrowser;
                return _this;
            }

            Object.defineProperty(MatInput.prototype, "disabled", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    if (this.ngControl && this.ngControl.disabled !== null) {
                        return this.ngControl.disabled;
                    }
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    // Browsers may not fire the blur event if the input is disabled too quickly.
                    // Reset from here to ensure that the element doesn't become stuck.
                    if (this.focused) {
                        this.focused = false;
                        this.stateChanges.next();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatInput.prototype, "id", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._id;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._id = value || this._uid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatInput.prototype, "required", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._required;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatInput.prototype, "type", {
                get: /**
                 * Input type of the element.
                 * @return {?}
                 */
                function () {
                    return this._type;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._type = value || 'text';
                    this._validateType();
                    // When using Angular inputs, developers are no longer able to set the properties on the native
                    // input element. To ensure that bindings for `type` work, we need to sync the setter
                    // with the native property. Textarea elements don't support the type property or attribute.
                    if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getSupportedInputTypes"])().has(this._type)) {
                        this._elementRef.nativeElement.type = this._type;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatInput.prototype, "value", {
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._inputValueAccessor.value;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (value !== this.value) {
                        this._inputValueAccessor.value = value;
                        this.stateChanges.next();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatInput.prototype, "readonly", {
                get: /**
                 * Whether the element is readonly.
                 * @return {?}
                 */
                function () {
                    return this._readonly;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            MatInput.prototype.ngOnInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                    _this.autofilled = event.isAutofilled;
                    _this.stateChanges.next();
                });
            };
            /**
             * @return {?}
             */
            MatInput.prototype.ngOnChanges = /**
             * @return {?}
             */
            function () {
                this.stateChanges.next();
            };
            /**
             * @return {?}
             */
            MatInput.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this.stateChanges.complete();
                this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
            };
            /**
             * @return {?}
             */
            MatInput.prototype.ngDoCheck = /**
             * @return {?}
             */
            function () {
                if (this.ngControl) {
                    // We need to re-evaluate this on every change detection cycle, because there are some
                    // error triggers that we can't subscribe to (e.g. parent form submissions). This means
                    // that whatever logic is in here has to be super lean or we risk destroying the performance.
                    this.updateErrorState();
                }
                // We need to dirty-check the native element's value, because there are some cases where
                // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
                // updating the value using `emitEvent: false`).
                this._dirtyCheckNativeValue();
            };
            /** Focuses the input. */
            /**
             * Focuses the input.
             * @return {?}
             */
            MatInput.prototype.focus = /**
             * Focuses the input.
             * @return {?}
             */
            function () {
                this._elementRef.nativeElement.focus();
            };
            /** Callback for the cases where the focused state of the input changes. */
            /**
             * Callback for the cases where the focused state of the input changes.
             * @param {?} isFocused
             * @return {?}
             */
            MatInput.prototype._focusChanged = /**
             * Callback for the cases where the focused state of the input changes.
             * @param {?} isFocused
             * @return {?}
             */
            function (isFocused) {
                if (isFocused !== this.focused && !this.readonly) {
                    this.focused = isFocused;
                    this.stateChanges.next();
                }
            };
            /**
             * @return {?}
             */
            MatInput.prototype._onInput = /**
             * @return {?}
             */
            function () {
                // This is a noop function and is used to let Angular know whenever the value changes.
                // Angular will run a new change detection each time the `input` event has been dispatched.
                // It's necessary that Angular recognizes the value change, because when floatingLabel
                // is set to false and Angular forms aren't used, the placeholder won't recognize the
                // value changes and will not disappear.
                // Listening to the input event wouldn't be necessary when the input is using the
                // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
            };
            /** Does some manual dirty checking on the native input `value` property. */
            /**
             * Does some manual dirty checking on the native input `value` property.
             * @return {?}
             */
            MatInput.prototype._dirtyCheckNativeValue = /**
             * Does some manual dirty checking on the native input `value` property.
             * @return {?}
             */
            function () {
                var /** @type {?} */ newValue = this.value;
                if (this._previousNativeValue !== newValue) {
                    this._previousNativeValue = newValue;
                    this.stateChanges.next();
                }
            };
            /** Make sure the input is a supported type. */
            /**
             * Make sure the input is a supported type.
             * @return {?}
             */
            MatInput.prototype._validateType = /**
             * Make sure the input is a supported type.
             * @return {?}
             */
            function () {
                if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
                    throw getMatInputUnsupportedTypeError(this._type);
                }
            };
            /** Checks whether the input type is one of the types that are never empty. */
            /**
             * Checks whether the input type is one of the types that are never empty.
             * @return {?}
             */
            MatInput.prototype._isNeverEmpty = /**
             * Checks whether the input type is one of the types that are never empty.
             * @return {?}
             */
            function () {
                return this._neverEmptyInputTypes.indexOf(this._type) > -1;
            };
            /** Checks whether the input is invalid based on the native validation. */
            /**
             * Checks whether the input is invalid based on the native validation.
             * @return {?}
             */
            MatInput.prototype._isBadInput = /**
             * Checks whether the input is invalid based on the native validation.
             * @return {?}
             */
            function () {
                // The `validity` property won't be present on platform-server.
                var /** @type {?} */ validity = (/** @type {?} */ (this._elementRef.nativeElement)).validity;
                return validity && validity.badInput;
            };
            /** Determines if the component host is a textarea. */
            /**
             * Determines if the component host is a textarea.
             * @return {?}
             */
            MatInput.prototype._isTextarea = /**
             * Determines if the component host is a textarea.
             * @return {?}
             */
            function () {
                return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
            };
            Object.defineProperty(MatInput.prototype, "empty", {
                /**
                 * Implemented as part of MatFormFieldControl.
                 * @docs-private
                 */
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
                        !this.autofilled;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatInput.prototype, "shouldLabelFloat", {
                /**
                 * Implemented as part of MatFormFieldControl.
                 * @docs-private
                 */
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this.focused || !this.empty;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @param {?} ids
             * @return {?}
             */
            MatInput.prototype.setDescribedByIds = /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @param {?} ids
             * @return {?}
             */
            function (ids) {
                this._ariaDescribedby = ids.join(' ');
            };
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @return {?}
             */
            MatInput.prototype.onContainerClick = /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @return {?}
             */
            function () {
                this.focus();
            };
            MatInput.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                        selector: "input[matInput], textarea[matInput]",
                        exportAs: 'matInput',
                        host: {
                            /**
                             * @deletion-target 7.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                             */
                            'class': 'mat-input-element mat-form-field-autofill-control',
                            '[class.mat-input-server]': '_isServer',
                            // Native input properties that are overwritten by Angular inputs need to be synced with
                            // the native input element. Otherwise property bindings for those don't work.
                            '[attr.id]': 'id',
                            '[attr.placeholder]': 'placeholder',
                            '[disabled]': 'disabled',
                            '[required]': 'required',
                            '[readonly]': 'readonly',
                            '[attr.aria-describedby]': '_ariaDescribedby || null',
                            '[attr.aria-invalid]': 'errorState',
                            '[attr.aria-required]': 'required.toString()',
                            '(blur)': '_focusChanged(false)',
                            '(focus)': '_focusChanged(true)',
                            '(input)': '_onInput()',
                        },
                        providers: [{
                            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldControl"],
                            useExisting: MatInput
                        }],
                    },]
                },
            ];
            /** @nocollapse */
            MatInput.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],},
                    {type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"],},
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]}, {type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]},]
                    },
                    {type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"],},
                    {
                        type: undefined,
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]}, {type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]}, {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                            args: [MAT_INPUT_VALUE_ACCESSOR,]
                        },]
                    },
                    {type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["AutofillMonitor"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],},
                ];
            };
            MatInput.propDecorators = {
                "disabled": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "id": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "placeholder": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "required": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "type": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "errorStateMatcher": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "value": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
                "readonly": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]},],
            };
            return MatInput;
        }(_MatInputMixinBase));

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var MatInputModule = /** @class */ (function () {
            function MatInputModule() {
            }

            MatInputModule.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                        declarations: [MatInput, MatTextareaAutosize],
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["TextFieldModule"],
                            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        ],
                        exports: [
                            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["TextFieldModule"],
                            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                            MatInput,
                            MatTextareaAutosize,
                        ],
                        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"]],
                    },]
                },
            ];
            return MatInputModule;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */


//# sourceMappingURL=input.es5.js.map


        /***/
    }),

    /***/ "./node_modules/@angular/material/esm5/radio.es5.js":
    /*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/radio.es5.js ***!
  \**********************************************************/
    /*! exports provided: MatRadioModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroupBase, _MatRadioGroupMixinBase, MatRadioGroup, MatRadioButtonBase, _MatRadioButtonMixinBase, MatRadioButton */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatRadioModule", function () {
            return MatRadioModule;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function () {
            return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatRadioChange", function () {
            return MatRadioChange;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatRadioGroupBase", function () {
            return MatRadioGroupBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatRadioGroupMixinBase", function () {
            return _MatRadioGroupMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function () {
            return MatRadioGroup;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatRadioButtonBase", function () {
            return MatRadioButtonBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatRadioButtonMixinBase", function () {
            return _MatRadioButtonMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatRadioButton", function () {
            return MatRadioButton;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
        /* harmony import */
        var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
        /* harmony import */
        var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
// Increasing integer for generating unique ids for radio components.
        var /** @type {?} */ nextUniqueId = 0;
        /**
         * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
         * allows it to support [(ngModel)] and ngControl.
         * \@docs-private
         */
        var /** @type {?} */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return MatRadioGroup;
            }),
            multi: true
        };
        /**
         * Change event object emitted by MatRadio and MatRadioGroup.
         */
        var /**
         * Change event object emitted by MatRadio and MatRadioGroup.
         */
        MatRadioChange = /** @class */ (function () {
            function MatRadioChange(source, value) {
                this.source = source;
                this.value = value;
            }

            return MatRadioChange;
        }());
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatRadioGroupBase = /** @class */ (function () {
            function MatRadioGroupBase() {
            }

            return MatRadioGroupBase;
        }());
        var /** @type {?} */ _MatRadioGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatRadioGroupBase);
        /**
         * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
         */
        var MatRadioGroup = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRadioGroup, _super);

            function MatRadioGroup(_changeDetector) {
                var _this = _super.call(this) || this;
                _this._changeDetector = _changeDetector;
                /**
                 * Selected value for group. Should equal the value of the selected radio button if there *is*
                 * a corresponding radio button with a matching value. If there is *not* such a corresponding
                 * radio button, this value persists to be applied in case a new radio button is added with a
                 * matching value.
                 */
                _this._value = null;
                /**
                 * The HTML name attribute applied to radio buttons in this group.
                 */
                _this._name = "mat-radio-group-" + nextUniqueId++;
                /**
                 * The currently selected radio button. Should match value.
                 */
                _this._selected = null;
                /**
                 * Whether the `value` has been set to its initial value.
                 */
                _this._isInitialized = false;
                /**
                 * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
                 */
                _this._labelPosition = 'after';
                /**
                 * Whether the radio group is disabled.
                 */
                _this._disabled = false;
                /**
                 * Whether the radio group is required.
                 */
                _this._required = false;
                /**
                 * The method to be called in order to update ngModel
                 */
                _this._controlValueAccessorChangeFn = function () {
                };
                /**
                 * onTouch function registered via registerOnTouch (ControlValueAccessor).
                 * \@docs-private
                 */
                _this.onTouched = function () {
                };
                /**
                 * Event emitted when the group value changes.
                 * Change events are only emitted when the value changes due to user interaction with
                 * a radio button (the same behavior as `<input type-"radio">`).
                 */
                _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                return _this;
            }

            Object.defineProperty(MatRadioGroup.prototype, "name", {
                get: /**
                 * Name of the radio button group. All radio buttons inside this group will use this name.
                 * @return {?}
                 */
                function () {
                    return this._name;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._name = value;
                    this._updateRadioButtonNames();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioGroup.prototype, "labelPosition", {
                get: /**
                 * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
                 * @return {?}
                 */
                function () {
                    return this._labelPosition;
                },
                set: /**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    this._labelPosition = v === 'before' ? 'before' : 'after';
                    this._markRadiosForCheck();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioGroup.prototype, "value", {
                get: /**
                 * Value of the radio button.
                 * @return {?}
                 */
                function () {
                    return this._value;
                },
                set: /**
                 * @param {?} newValue
                 * @return {?}
                 */
                function (newValue) {
                    if (this._value !== newValue) {
                        // Set this before proceeding to ensure no circular loop occurs with selection.
                        this._value = newValue;
                        this._updateSelectedRadioFromValue();
                        this._checkSelectedRadioButton();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            MatRadioGroup.prototype._checkSelectedRadioButton = /**
             * @return {?}
             */
            function () {
                if (this._selected && !this._selected.checked) {
                    this._selected.checked = true;
                }
            };
            Object.defineProperty(MatRadioGroup.prototype, "selected", {
                get: /**
                 * Whether the radio button is selected.
                 * @return {?}
                 */
                function () {
                    return this._selected;
                },
                set: /**
                 * @param {?} selected
                 * @return {?}
                 */
                function (selected) {
                    this._selected = selected;
                    this.value = selected ? selected.value : null;
                    this._checkSelectedRadioButton();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioGroup.prototype, "disabled", {
                get: /**
                 * Whether the radio group is disabled
                 * @return {?}
                 */
                function () {
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    this._markRadiosForCheck();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioGroup.prototype, "required", {
                get: /**
                 * Whether the radio group is required
                 * @return {?}
                 */
                function () {
                    return this._required;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    this._markRadiosForCheck();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Initialize properties once content children are available.
             * This allows us to propagate relevant attributes to associated buttons.
             */
            /**
             * Initialize properties once content children are available.
             * This allows us to propagate relevant attributes to associated buttons.
             * @return {?}
             */
            MatRadioGroup.prototype.ngAfterContentInit = /**
             * Initialize properties once content children are available.
             * This allows us to propagate relevant attributes to associated buttons.
             * @return {?}
             */
            function () {
                // Mark this component as initialized in AfterContentInit because the initial value can
                // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
                // NgModel occurs *after* the OnInit of the MatRadioGroup.
                this._isInitialized = true;
            };
            /**
             * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
             * radio buttons upon their blur.
             */
            /**
             * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
             * radio buttons upon their blur.
             * @return {?}
             */
            MatRadioGroup.prototype._touch = /**
             * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
             * radio buttons upon their blur.
             * @return {?}
             */
            function () {
                if (this.onTouched) {
                    this.onTouched();
                }
            };
            /**
             * @return {?}
             */
            MatRadioGroup.prototype._updateRadioButtonNames = /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._radios) {
                    this._radios.forEach(function (radio) {
                        radio.name = _this.name;
                    });
                }
            };
            /**
             * Updates the `selected` radio button from the internal _value state.
             * @return {?}
             */
            MatRadioGroup.prototype._updateSelectedRadioFromValue = /**
             * Updates the `selected` radio button from the internal _value state.
             * @return {?}
             */
            function () {
                var _this = this;
                // If the value already matches the selected radio, do nothing.
                var /** @type {?} */ isAlreadySelected = this._selected !== null && this._selected.value === this._value;
                if (this._radios && !isAlreadySelected) {
                    this._selected = null;
                    this._radios.forEach(function (radio) {
                        radio.checked = _this.value === radio.value;
                        if (radio.checked) {
                            _this._selected = radio;
                        }
                    });
                }
            };
            /** Dispatch change event with current selection and group value. */
            /**
             * Dispatch change event with current selection and group value.
             * @return {?}
             */
            MatRadioGroup.prototype._emitChangeEvent = /**
             * Dispatch change event with current selection and group value.
             * @return {?}
             */
            function () {
                if (this._isInitialized) {
                    this.change.emit(new MatRadioChange(/** @type {?} */ ((this._selected)), this._value));
                }
            };
            /**
             * @return {?}
             */
            MatRadioGroup.prototype._markRadiosForCheck = /**
             * @return {?}
             */
            function () {
                if (this._radios) {
                    this._radios.forEach(function (radio) {
                        return radio._markForCheck();
                    });
                }
            };
            /**
             * Sets the model value. Implemented as part of ControlValueAccessor.
             * @param value
             */
            /**
             * Sets the model value. Implemented as part of ControlValueAccessor.
             * @param {?} value
             * @return {?}
             */
            MatRadioGroup.prototype.writeValue = /**
             * Sets the model value. Implemented as part of ControlValueAccessor.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.value = value;
                this._changeDetector.markForCheck();
            };
            /**
             * Registers a callback to be triggered when the model value changes.
             * Implemented as part of ControlValueAccessor.
             * @param fn Callback to be registered.
             */
            /**
             * Registers a callback to be triggered when the model value changes.
             * Implemented as part of ControlValueAccessor.
             * @param {?} fn Callback to be registered.
             * @return {?}
             */
            MatRadioGroup.prototype.registerOnChange = /**
             * Registers a callback to be triggered when the model value changes.
             * Implemented as part of ControlValueAccessor.
             * @param {?} fn Callback to be registered.
             * @return {?}
             */
            function (fn) {
                this._controlValueAccessorChangeFn = fn;
            };
            /**
             * Registers a callback to be triggered when the control is touched.
             * Implemented as part of ControlValueAccessor.
             * @param fn Callback to be registered.
             */
            /**
             * Registers a callback to be triggered when the control is touched.
             * Implemented as part of ControlValueAccessor.
             * @param {?} fn Callback to be registered.
             * @return {?}
             */
            MatRadioGroup.prototype.registerOnTouched = /**
             * Registers a callback to be triggered when the control is touched.
             * Implemented as part of ControlValueAccessor.
             * @param {?} fn Callback to be registered.
             * @return {?}
             */
            function (fn) {
                this.onTouched = fn;
            };
            /**
             * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
             * @param isDisabled Whether the control should be disabled.
             */
            /**
             * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
             * @param {?} isDisabled Whether the control should be disabled.
             * @return {?}
             */
            MatRadioGroup.prototype.setDisabledState = /**
             * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
             * @param {?} isDisabled Whether the control should be disabled.
             * @return {?}
             */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._changeDetector.markForCheck();
            };
            MatRadioGroup.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                        selector: 'mat-radio-group',
                        exportAs: 'matRadioGroup',
                        providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                        host: {
                            'role': 'radiogroup',
                            'class': 'mat-radio-group',
                        },
                        inputs: ['disabled'],
                    },]
                },
            ];
            /** @nocollapse */
            MatRadioGroup.ctorParameters = function () {
                return [
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],},
                ];
            };
            MatRadioGroup.propDecorators = {
                "change": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
                "_radios": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
                    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                        return MatRadioButton;
                    }), {descendants: true},]
                },],
                "name": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "labelPosition": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "value": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "selected": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "disabled": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "required": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
            };
            return MatRadioGroup;
        }(_MatRadioGroupMixinBase));
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatRadioButtonBase = /** @class */ (function () {
            function MatRadioButtonBase(_elementRef) {
                this._elementRef = _elementRef;
            }

            return MatRadioButtonBase;
        }());
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
        var /** @type {?} */ _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinTabIndex"])(MatRadioButtonBase)), 'accent');
        /**
         * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
         */
        var MatRadioButton = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRadioButton, _super);

            function MatRadioButton(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode) {
                var _this = _super.call(this, elementRef) || this;
                _this._changeDetector = _changeDetector;
                _this._focusMonitor = _focusMonitor;
                _this._radioDispatcher = _radioDispatcher;
                _this._animationMode = _animationMode;
                _this._uniqueId = "mat-radio-" + ++nextUniqueId;
                /**
                 * The unique ID for the radio button.
                 */
                _this.id = _this._uniqueId;
                /**
                 * Event emitted when the checked state of this radio button changes.
                 * Change events are only emitted when the value changes due to user interaction with
                 * the radio button (the same behavior as `<input type-"radio">`).
                 */
                _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                /**
                 * Whether this radio is checked.
                 */
                _this._checked = false;
                /**
                 * Value assigned to this radio.
                 */
                _this._value = null;
                /**
                 * Unregister function for _radioDispatcher
                 */
                _this._removeUniqueSelectionListener = function () {
                };
                // Assertions. Ideally these should be stripped out by the compiler.
                // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
                // Assertions. Ideally these should be stripped out by the compiler.
                // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
                _this.radioGroup = radioGroup;
                _this._removeUniqueSelectionListener =
                    _radioDispatcher.listen(function (id, name) {
                        if (id !== _this.id && name === _this.name) {
                            _this.checked = false;
                        }
                    });
                return _this;
            }

            Object.defineProperty(MatRadioButton.prototype, "checked", {
                get: /**
                 * Whether this radio button is checked.
                 * @return {?}
                 */
                function () {
                    return this._checked;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    var /** @type {?} */ newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    if (this._checked !== newCheckedState) {
                        this._checked = newCheckedState;
                        if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                            this.radioGroup.selected = this;
                        }
                        else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                            // When unchecking the selected radio button, update the selected radio
                            // property on the group.
                            this.radioGroup.selected = null;
                        }
                        if (newCheckedState) {
                            // Notify all radio buttons with the same name to un-check.
                            this._radioDispatcher.notify(this.id, this.name);
                        }
                        this._changeDetector.markForCheck();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioButton.prototype, "value", {
                get: /**
                 * The value of this radio button.
                 * @return {?}
                 */
                function () {
                    return this._value;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (this._value !== value) {
                        this._value = value;
                        if (this.radioGroup !== null) {
                            if (!this.checked) {
                                // Update checked when the value changed to match the radio group's value
                                this.checked = this.radioGroup.value === value;
                            }
                            if (this.checked) {
                                this.radioGroup.selected = this;
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioButton.prototype, "labelPosition", {
                get: /**
                 * Whether the label should appear after or before the radio button. Defaults to 'after'
                 * @return {?}
                 */
                function () {
                    return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._labelPosition = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioButton.prototype, "disabled", {
                get: /**
                 * Whether the radio button is disabled.
                 * @return {?}
                 */
                function () {
                    return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    var /** @type {?} */ newDisabledState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    if (this._disabled !== newDisabledState) {
                        this._disabled = newDisabledState;
                        this._changeDetector.markForCheck();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioButton.prototype, "required", {
                get: /**
                 * Whether the radio button is required.
                 * @return {?}
                 */
                function () {
                    return this._required || (this.radioGroup && this.radioGroup.required);
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatRadioButton.prototype, "inputId", {
                /** ID of the native input element inside `<mat-radio-button>` */
                get: /**
                 * ID of the native input element inside `<mat-radio-button>`
                 * @return {?}
                 */
                function () {
                    return (this.id || this._uniqueId) + "-input";
                },
                enumerable: true,
                configurable: true
            });
            /** Focuses the radio button. */
            /**
             * Focuses the radio button.
             * @return {?}
             */
            MatRadioButton.prototype.focus = /**
             * Focuses the radio button.
             * @return {?}
             */
            function () {
                this._focusMonitor.focusVia(this._inputElement.nativeElement, 'keyboard');
            };
            /**
             * Marks the radio button as needing checking for change detection.
             * This method is exposed because the parent radio group will directly
             * update bound properties of the radio button.
             */
            /**
             * Marks the radio button as needing checking for change detection.
             * This method is exposed because the parent radio group will directly
             * update bound properties of the radio button.
             * @return {?}
             */
            MatRadioButton.prototype._markForCheck = /**
             * Marks the radio button as needing checking for change detection.
             * This method is exposed because the parent radio group will directly
             * update bound properties of the radio button.
             * @return {?}
             */
            function () {
                // When group value changes, the button will not be notified. Use `markForCheck` to explicit
                // update radio button's status
                this._changeDetector.markForCheck();
            };
            /**
             * @return {?}
             */
            MatRadioButton.prototype.ngOnInit = /**
             * @return {?}
             */
            function () {
                if (this.radioGroup) {
                    // If the radio is inside a radio group, determine if it should be checked
                    this.checked = this.radioGroup.value === this._value;
                    // Copy name from parent radio group
                    this.name = this.radioGroup.name;
                }
            };
            /**
             * @return {?}
             */
            MatRadioButton.prototype.ngAfterViewInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._focusMonitor
                    .monitor(this._inputElement.nativeElement)
                    .subscribe(function (focusOrigin) {
                        return _this._onInputFocusChange(focusOrigin);
                    });
            };
            /**
             * @return {?}
             */
            MatRadioButton.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this._focusMonitor.stopMonitoring(this._inputElement.nativeElement);
                this._removeUniqueSelectionListener();
            };
            /**
             * Dispatch change event with current value.
             * @return {?}
             */
            MatRadioButton.prototype._emitChangeEvent = /**
             * Dispatch change event with current value.
             * @return {?}
             */
            function () {
                this.change.emit(new MatRadioChange(this, this._value));
            };
            /**
             * @return {?}
             */
            MatRadioButton.prototype._isRippleDisabled = /**
             * @return {?}
             */
            function () {
                return this.disableRipple || this.disabled;
            };
            /**
             * @param {?} event
             * @return {?}
             */
            MatRadioButton.prototype._onInputClick = /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // We have to stop propagation for click events on the visual hidden input element.
                // By default, when a user clicks on a label element, a generated click event will be
                // dispatched on the associated input element. Since we are using a label element as our
                // root container, the click event on the `radio-button` will be executed twice.
                // The real click event will bubble up, and the generated click event also tries to bubble up.
                // This will lead to multiple click events.
                // Preventing bubbling for the second event will solve that issue.
                event.stopPropagation();
            };
            /**
             * Triggered when the radio button received a click or the input recognized any change.
             * Clicking on a label element, will trigger a change event on the associated input.
             */
            /**
             * Triggered when the radio button received a click or the input recognized any change.
             * Clicking on a label element, will trigger a change event on the associated input.
             * @param {?} event
             * @return {?}
             */
            MatRadioButton.prototype._onInputChange = /**
             * Triggered when the radio button received a click or the input recognized any change.
             * Clicking on a label element, will trigger a change event on the associated input.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // We always have to stop propagation on the change event.
                // Otherwise the change event, from the input element, will bubble up and
                // emit its event object to the `change` output.
                event.stopPropagation();
                var /** @type {?} */ groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
                this.checked = true;
                this._emitChangeEvent();
                if (this.radioGroup) {
                    this.radioGroup._controlValueAccessorChangeFn(this.value);
                    this.radioGroup._touch();
                    if (groupValueChanged) {
                        this.radioGroup._emitChangeEvent();
                    }
                }
            };
            /**
             * Function is called whenever the focus changes for the input element.
             * @param {?} focusOrigin
             * @return {?}
             */
            MatRadioButton.prototype._onInputFocusChange = /**
             * Function is called whenever the focus changes for the input element.
             * @param {?} focusOrigin
             * @return {?}
             */
            function (focusOrigin) {
                // TODO(paul): support `program`. See https://github.com/angular/material2/issues/9889
                if (!this._focusRipple && focusOrigin === 'keyboard') {
                    this._focusRipple = this._ripple.launch(0, 0, {persistent: true});
                }
                else if (!focusOrigin) {
                    if (this.radioGroup) {
                        this.radioGroup._touch();
                    }
                    if (this._focusRipple) {
                        this._focusRipple.fadeOut();
                        this._focusRipple = null;
                    }
                }
            };
            MatRadioButton.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                        selector: 'mat-radio-button',
                        template: "<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label><div class=\"mat-radio-container\"><div class=\"mat-radio-outer-circle\"></div><div class=\"mat-radio-inner-circle\"></div><div mat-ripple class=\"mat-radio-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"true\" [matRippleRadius]=\"23\" [matRippleAnimation]=\"{enterDuration: 150}\"></div></div><input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [tabIndex]=\"tabIndex\" [attr.name]=\"name\" [required]=\"required\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-describedby]=\"ariaDescribedby\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></div></label>",
                        styles: [".mat-radio-button{display:inline-block}.mat-radio-label{cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}@media screen and (-ms-high-contrast:active){.mat-radio-checked .mat-radio-inner-circle{border:solid 10px}}.mat-radio-label-content{display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-ripple{position:absolute;left:calc(50% - 25px);top:calc(50% - 25px);height:50px;width:50px;z-index:1;pointer-events:none}"],
                        inputs: ['color', 'disableRipple', 'tabIndex'],
                        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                        exportAs: 'matRadioButton',
                        host: {
                            'class': 'mat-radio-button',
                            '[class.mat-radio-checked]': 'checked',
                            '[class.mat-radio-disabled]': 'disabled',
                            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                            '[attr.id]': 'id',
                            // Note: under normal conditions focus shouldn't land on this element, however it may be
                            // programmatically set, for example inside of a focus trap, in this case we want to forward
                            // the focus to the native element.
                            '(focus)': '_inputElement.nativeElement.focus()',
                        },
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    },]
                },
            ];
            /** @nocollapse */
            MatRadioButton.ctorParameters = function () {
                return [
                    {
                        type: MatRadioGroup,
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]},]
                    },
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],},
                    {type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"],},
                    {type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"],},
                    {
                        type: undefined,
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]}, {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],]
                        },]
                    },
                ];
            };
            MatRadioButton.propDecorators = {
                "id": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "name": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "ariaLabel": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',]},],
                "ariaLabelledby": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
                    args: ['aria-labelledby',]
                },],
                "ariaDescribedby": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
                    args: ['aria-describedby',]
                },],
                "checked": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "value": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "labelPosition": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "disabled": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "required": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]},],
                "change": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]},],
                "_ripple": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
                    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"],]
                },],
                "_inputElement": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['input',]},],
            };
            return MatRadioButton;
        }(_MatRadioButtonMixinBase));

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var MatRadioModule = /** @class */ (function () {
            function MatRadioModule() {
            }

            MatRadioModule.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                        exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                        declarations: [MatRadioGroup, MatRadioButton],
                    },]
                },
            ];
            return MatRadioModule;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */


//# sourceMappingURL=radio.es5.js.map


        /***/
    }),

    /***/ "./node_modules/@angular/material/esm5/select.es5.js":
    /*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/select.es5.js ***!
  \***********************************************************/
    /*! exports provided: MatSelectModule, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectBase, _MatSelectMixinBase, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
            return MatSelectModule;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
            return SELECT_PANEL_MAX_HEIGHT;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
            return SELECT_PANEL_PADDING_X;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
            return SELECT_PANEL_INDENT_PADDING_X;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
            return SELECT_ITEM_HEIGHT_EM;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
            return SELECT_MULTIPLE_PANEL_PADDING_X;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
            return SELECT_PANEL_VIEWPORT_PADDING;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
            return MAT_SELECT_SCROLL_STRATEGY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
            return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
            return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
            return MatSelectChange;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelectBase", function () {
            return MatSelectBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_MatSelectMixinBase", function () {
            return _MatSelectMixinBase;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
            return MatSelectTrigger;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
            return MatSelect;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
            return matSelectAnimations;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "transformPanel", function () {
            return transformPanel;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "fadeInContent", function () {
            return fadeInContent;
        });
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
        /* harmony import */
        var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
        /* harmony import */
        var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
        /* harmony import */
        var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * The following are all the animations for the mat-select component, with each
         * const containing the metadata for one animation.
         *
         * The values below match the implementation of the AngularJS Material mat-select animation.
         */
        var /** @type {?} */ matSelectAnimations = {
            /**
             * This animation transforms the select's overlay panel on and off the page.
             *
             * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
             * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
             * side to ensure the option text correctly overlaps the trigger text.
             *
             * When the panel is removed from the DOM, it simply fades out linearly.
             */
            transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'scaleY(0)',
                    minWidth: '100%',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    minWidth: 'calc(100% + 32px)',
                    // 32px = 2 * 16px padding
                    transform: 'scaleY(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    minWidth: 'calc(100% + 64px)',
                    // 64px = 48px padding on the left + 16px padding on the right
                    transform: 'scaleY(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@fadeInContent', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
                ])),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms 100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({opacity: 0}))
                ])
            ]),
            /**
             * This animation fades in the background color and text content of the
             * select's options. It is time delayed to occur 100ms after the overlay
             * panel has transformed in.
             */
            fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({opacity: 1})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({opacity: 0}),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
                ])
            ])
        };
        /**
         * @deprecated
         * \@deletion-target 7.0.0
         */
        var /** @type {?} */ transformPanel = matSelectAnimations.transformPanel;
        /**
         * @deprecated
         * \@deletion-target 7.0.0
         */
        var /** @type {?} */ fadeInContent = matSelectAnimations.fadeInContent;

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * Returns an exception to be thrown when attempting to change a select's `multiple` option
         * after initialization.
         * \@docs-private
         * @return {?}
         */
        function getMatSelectDynamicMultipleError() {
            return Error('Cannot change `multiple` mode of select after initialization.');
        }

        /**
         * Returns an exception to be thrown when attempting to assign a non-array value to a select
         * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
         * resetting the value.
         * \@docs-private
         * @return {?}
         */
        function getMatSelectNonArrayValueError() {
            return Error('Value must be an array in multiple-selection mode.');
        }

        /**
         * Returns an exception to be thrown when assigning a non-function value to the comparator
         * used to determine if a value corresponds to an option. Note that whether the function
         * actually takes two values and returns a boolean is not checked.
         * @return {?}
         */
        function getMatSelectNonFunctionValueError() {
            return Error('`compareWith` must be a function.');
        }

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var /** @type {?} */ nextUniqueId = 0;
        /**
         * The max height of the select's overlay panel
         */
        var /** @type {?} */ SELECT_PANEL_MAX_HEIGHT = 256;
        /**
         * The panel's padding on the x-axis
         */
        var /** @type {?} */ SELECT_PANEL_PADDING_X = 16;
        /**
         * The panel's x axis padding if it is indented (e.g. there is an option group).
         */
        var /** @type {?} */ SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
        /**
         * The height of the select items in `em` units.
         */
        var /** @type {?} */ SELECT_ITEM_HEIGHT_EM = 3;
        /**
         * Distance between the panel edge and the option text in
         * multi-selection mode.
         *
         * (SELECT_PANEL_PADDING_X * 1.5) + 20 = 44
         * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
         * The checkbox width is 20px.
         */
        var /** @type {?} */ SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 20;
        /**
         * The select panel will only "fit" inside the viewport if it is positioned at
         * this value or more away from the viewport boundary.
         */
        var /** @type {?} */ SELECT_PANEL_VIEWPORT_PADDING = 8;
        /**
         * Injection token that determines the scroll handling while a select is open.
         */
        var /** @type {?} */ MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');

        /**
         * \@docs-private
         * @param {?} overlay
         * @return {?}
         */
        function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
            return function () {
                return overlay.scrollStrategies.reposition();
            };
        }

        /**
         * \@docs-private
         */
        var /** @type {?} */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
            provide: MAT_SELECT_SCROLL_STRATEGY,
            deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
            useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
        };
        /**
         * Change event object that is emitted when the select value has changed.
         */
        var /**
         * Change event object that is emitted when the select value has changed.
         */
        MatSelectChange = /** @class */ (function () {
            function MatSelectChange(source, value) {
                this.source = source;
                this.value = value;
            }

            return MatSelectChange;
        }());
        /**
         * \@docs-private
         */
        var /**
         * \@docs-private
         */
        MatSelectBase = /** @class */ (function () {
            function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
                this._elementRef = _elementRef;
                this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
                this._parentForm = _parentForm;
                this._parentFormGroup = _parentFormGroup;
                this.ngControl = ngControl;
            }

            return MatSelectBase;
        }());
        var /** @type {?} */ _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
        /**
         * Allows the user to customize the trigger that is displayed when the select has a value.
         */
        var MatSelectTrigger = /** @class */ (function () {
            function MatSelectTrigger() {
            }

            MatSelectTrigger.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"], args: [{
                        selector: 'mat-select-trigger'
                    },]
                },
            ];
            return MatSelectTrigger;
        }());
        var MatSelect = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSelect, _super);

            function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, _scrollStrategyFactory) {
                var _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
                _this._viewportRuler = _viewportRuler;
                _this._changeDetectorRef = _changeDetectorRef;
                _this._ngZone = _ngZone;
                _this._dir = _dir;
                _this._parentFormField = _parentFormField;
                _this.ngControl = ngControl;
                _this._scrollStrategyFactory = _scrollStrategyFactory;
                /**
                 * Whether or not the overlay panel is open.
                 */
                _this._panelOpen = false;
                /**
                 * Whether filling out the select is required in the form.
                 */
                _this._required = false;
                /**
                 * The scroll position of the overlay panel, calculated to center the selected option.
                 */
                _this._scrollTop = 0;
                /**
                 * Whether the component is in multiple selection mode.
                 */
                _this._multiple = false;
                /**
                 * Comparison function to specify which option is displayed. Defaults to object equality.
                 */
                _this._compareWith = function (o1, o2) {
                    return o1 === o2;
                };
                /**
                 * Unique id for this input.
                 */
                _this._uid = "mat-select-" + nextUniqueId++;
                /**
                 * Emits whenever the component is destroyed.
                 */
                _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
                /**
                 * The cached font-size of the trigger element.
                 */
                _this._triggerFontSize = 0;
                /**
                 * `View -> model callback called when value changes`
                 */
                _this._onChange = function () {
                };
                /**
                 * `View -> model callback called when select has been touched`
                 */
                _this._onTouched = function () {
                };
                /**
                 * The IDs of child options to be passed to the aria-owns attribute.
                 */
                _this._optionIds = '';
                /**
                 * The value of the select panel's transform-origin property.
                 */
                _this._transformOrigin = 'top';
                /**
                 * Whether the panel's animation is done.
                 */
                _this._panelDoneAnimating = false;
                /**
                 * Strategy that will be used to handle scrolling while the select panel is open.
                 */
                _this._scrollStrategy = _this._scrollStrategyFactory();
                /**
                 * The y-offset of the overlay panel in relation to the trigger's top start corner.
                 * This must be adjusted to align the selected option text over the trigger text.
                 * when the panel opens. Will change based on the y-position of the selected option.
                 */
                _this._offsetY = 0;
                /**
                 * This position config ensures that the top "start" corner of the overlay
                 * is aligned with with the top "start" of the origin by default (overlapping
                 * the trigger completely). If the panel cannot fit below the trigger, it
                 * will fall back to a position above the trigger.
                 */
                _this._positions = [
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'top',
                    },
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'bottom',
                    },
                ];
                /**
                 * Whether the component is disabling centering of the active option over the trigger.
                 */
                _this._disableOptionCentering = false;
                /**
                 * Whether the select is focused.
                 */
                _this.focused = false;
                /**
                 * A name for this control that can be used by `mat-form-field`.
                 */
                _this.controlType = 'mat-select';
                /**
                 * Aria label of the select. If not specified, the placeholder will be used as label.
                 */
                _this.ariaLabel = '';
                /**
                 * Combined stream of all of the child options' change events.
                 */
                _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(function () {
                    if (_this.options) {
                        return rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"].apply(void 0, _this.options.map(function (option) {
                            return option.onSelectionChange;
                        }));
                    }
                    return _this._ngZone.onStable
                        .asObservable()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
                            return _this.optionSelectionChanges;
                        }));
                });
                /**
                 * Event emitted when the select panel has been toggled.
                 */
                _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
                /**
                 * Event emitted when the select has been opened.
                 */
                _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
                    return o;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {
                }));
                /**
                 * Event emitted when the select has been closed.
                 */
                _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
                    return !o;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {
                }));
                /**
                 * Event emitted when the selected value has been changed by the user.
                 */
                _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
                /**
                 * Event that emits whenever the raw value of the select changes. This is here primarily
                 * to facilitate the two-way binding for the `value` input.
                 * \@docs-private
                 */
                _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
                if (_this.ngControl) {
                    // Note: we provide the value accessor through here, instead of
                    // the `providers` to avoid running into a circular import.
                    // Note: we provide the value accessor through here, instead of
                    // the `providers` to avoid running into a circular import.
                    _this.ngControl.valueAccessor = _this;
                }
                _this.tabIndex = parseInt(tabIndex) || 0;
                // Force setter to be called in case id was not specified.
                // Force setter to be called in case id was not specified.
                _this.id = _this.id;
                return _this;
            }

            Object.defineProperty(MatSelect.prototype, "placeholder", {
                get: /**
                 * Placeholder to be shown if no value has been selected.
                 * @return {?}
                 */
                function () {
                    return this._placeholder;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._placeholder = value;
                    this.stateChanges.next();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "required", {
                get: /**
                 * Whether the component is required.
                 * @return {?}
                 */
                function () {
                    return this._required;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
                    this.stateChanges.next();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "multiple", {
                get: /**
                 * Whether the user should be allowed to select multiple options.
                 * @return {?}
                 */
                function () {
                    return this._multiple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (this._selectionModel) {
                        throw getMatSelectDynamicMultipleError();
                    }
                    this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "disableOptionCentering", {
                get: /**
                 * Whether to center the active option over the trigger.
                 * @return {?}
                 */
                function () {
                    return this._disableOptionCentering;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "compareWith", {
                get: /**
                 * A function to compare the option values with the selected values. The first argument
                 * is a value from an option. The second is a value from the selection. A boolean
                 * should be returned.
                 * @return {?}
                 */
                function () {
                    return this._compareWith;
                },
                set: /**
                 * @param {?} fn
                 * @return {?}
                 */
                function (fn) {
                    if (typeof fn !== 'function') {
                        throw getMatSelectNonFunctionValueError();
                    }
                    this._compareWith = fn;
                    if (this._selectionModel) {
                        // A different comparator means the selection could change.
                        this._initializeSelection();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "value", {
                get: /**
                 * Value of the select control.
                 * @return {?}
                 */
                function () {
                    return this._value;
                },
                set: /**
                 * @param {?} newValue
                 * @return {?}
                 */
                function (newValue) {
                    if (newValue !== this._value) {
                        this.writeValue(newValue);
                        this._value = newValue;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "id", {
                get: /**
                 * Unique id of the element.
                 * @return {?}
                 */
                function () {
                    return this._id;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    this._id = value || this._uid;
                    this.stateChanges.next();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            MatSelect.prototype.ngOnInit = /**
             * @return {?}
             */
            function () {
                this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](this.multiple, undefined, false);
                this.stateChanges.next();
            };
            /**
             * @return {?}
             */
            MatSelect.prototype.ngAfterContentInit = /**
             * @return {?}
             */
            function () {
                var _this = this;
                this._initKeyManager();
                this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
                    _this._resetOptions();
                    _this._initializeSelection();
                });
            };
            /**
             * @return {?}
             */
            MatSelect.prototype.ngDoCheck = /**
             * @return {?}
             */
            function () {
                if (this.ngControl) {
                    this.updateErrorState();
                }
            };
            /**
             * @param {?} changes
             * @return {?}
             */
            MatSelect.prototype.ngOnChanges = /**
             * @param {?} changes
             * @return {?}
             */
            function (changes) {
                // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
                // the parent form field know to run change detection when the disabled state changes.
                if (changes["disabled"]) {
                    this.stateChanges.next();
                }
            };
            /**
             * @return {?}
             */
            MatSelect.prototype.ngOnDestroy = /**
             * @return {?}
             */
            function () {
                this._destroy.next();
                this._destroy.complete();
                this.stateChanges.complete();
            };
            /** Toggles the overlay panel open or closed. */
            /**
             * Toggles the overlay panel open or closed.
             * @return {?}
             */
            MatSelect.prototype.toggle = /**
             * Toggles the overlay panel open or closed.
             * @return {?}
             */
            function () {
                this.panelOpen ? this.close() : this.open();
            };
            /** Opens the overlay panel. */
            /**
             * Opens the overlay panel.
             * @return {?}
             */
            MatSelect.prototype.open = /**
             * Opens the overlay panel.
             * @return {?}
             */
            function () {
                var _this = this;
                if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
                    return;
                }
                this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
                // Note: The computed font-size will be a string pixel value (e.g. "16px").
                // `parseInt` ignores the trailing 'px' and converts this to a number.
                this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement)['font-size']);
                this._panelOpen = true;
                this._keyManager.withHorizontalOrientation(null);
                this._calculateOverlayPosition();
                this._highlightCorrectOption();
                this._changeDetectorRef.markForCheck();
                // Set the font size on the panel element once it exists.
                this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
                    if (_this._triggerFontSize && _this.overlayDir.overlayRef &&
                        _this.overlayDir.overlayRef.overlayElement) {
                        _this.overlayDir.overlayRef.overlayElement.style.fontSize = _this._triggerFontSize + "px";
                    }
                });
            };
            /** Closes the overlay panel and focuses the host element. */
            /**
             * Closes the overlay panel and focuses the host element.
             * @return {?}
             */
            MatSelect.prototype.close = /**
             * Closes the overlay panel and focuses the host element.
             * @return {?}
             */
            function () {
                if (this._panelOpen) {
                    this._panelOpen = false;
                    this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
                    this._changeDetectorRef.markForCheck();
                    this._onTouched();
                }
            };
            /**
             * Sets the select's value. Part of the ControlValueAccessor interface
             * required to integrate with Angular's core forms API.
             *
             * @param value New value to be written to the model.
             */
            /**
             * Sets the select's value. Part of the ControlValueAccessor interface
             * required to integrate with Angular's core forms API.
             *
             * @param {?} value New value to be written to the model.
             * @return {?}
             */
            MatSelect.prototype.writeValue = /**
             * Sets the select's value. Part of the ControlValueAccessor interface
             * required to integrate with Angular's core forms API.
             *
             * @param {?} value New value to be written to the model.
             * @return {?}
             */
            function (value) {
                if (this.options) {
                    this._setSelectionByValue(value);
                }
            };
            /**
             * Saves a callback function to be invoked when the select's value
             * changes from user input. Part of the ControlValueAccessor interface
             * required to integrate with Angular's core forms API.
             *
             * @param fn Callback to be triggered when the value changes.
             */
            /**
             * Saves a callback function to be invoked when the select's value
             * changes from user input. Part of the ControlValueAccessor interface
             * required to integrate with Angular's core forms API.
             *
             * @param {?} fn Callback to be triggered when the value changes.
             * @return {?}
             */
            MatSelect.prototype.registerOnChange = /**
             * Saves a callback function to be invoked when the select's value
             * changes from user input. Part of the ControlValueAccessor interface
             * required to integrate with Angular's core forms API.
             *
             * @param {?} fn Callback to be triggered when the value changes.
             * @return {?}
             */
            function (fn) {
                this._onChange = fn;
            };
            /**
             * Saves a callback function to be invoked when the select is blurred
             * by the user. Part of the ControlValueAccessor interface required
             * to integrate with Angular's core forms API.
             *
             * @param fn Callback to be triggered when the component has been touched.
             */
            /**
             * Saves a callback function to be invoked when the select is blurred
             * by the user. Part of the ControlValueAccessor interface required
             * to integrate with Angular's core forms API.
             *
             * @param {?} fn Callback to be triggered when the component has been touched.
             * @return {?}
             */
            MatSelect.prototype.registerOnTouched = /**
             * Saves a callback function to be invoked when the select is blurred
             * by the user. Part of the ControlValueAccessor interface required
             * to integrate with Angular's core forms API.
             *
             * @param {?} fn Callback to be triggered when the component has been touched.
             * @return {?}
             */
            function (fn) {
                this._onTouched = fn;
            };
            /**
             * Disables the select. Part of the ControlValueAccessor interface required
             * to integrate with Angular's core forms API.
             *
             * @param isDisabled Sets whether the component is disabled.
             */
            /**
             * Disables the select. Part of the ControlValueAccessor interface required
             * to integrate with Angular's core forms API.
             *
             * @param {?} isDisabled Sets whether the component is disabled.
             * @return {?}
             */
            MatSelect.prototype.setDisabledState = /**
             * Disables the select. Part of the ControlValueAccessor interface required
             * to integrate with Angular's core forms API.
             *
             * @param {?} isDisabled Sets whether the component is disabled.
             * @return {?}
             */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._changeDetectorRef.markForCheck();
                this.stateChanges.next();
            };
            Object.defineProperty(MatSelect.prototype, "panelOpen", {
                /** Whether or not the overlay panel is open. */
                get: /**
                 * Whether or not the overlay panel is open.
                 * @return {?}
                 */
                function () {
                    return this._panelOpen;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "selected", {
                /** The currently selected option. */
                get: /**
                 * The currently selected option.
                 * @return {?}
                 */
                function () {
                    return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatSelect.prototype, "triggerValue", {
                /** The value displayed in the trigger. */
                get: /**
                 * The value displayed in the trigger.
                 * @return {?}
                 */
                function () {
                    if (this.empty) {
                        return '';
                    }
                    if (this._multiple) {
                        var /** @type {?} */ selectedOptions = this._selectionModel.selected.map(function (option) {
                            return option.viewValue;
                        });
                        if (this._isRtl()) {
                            selectedOptions.reverse();
                        }
                        // TODO(crisbeto): delimiter should be configurable for proper localization.
                        return selectedOptions.join(', ');
                    }
                    return this._selectionModel.selected[0].viewValue;
                },
                enumerable: true,
                configurable: true
            });
            /** Whether the element is in RTL mode. */
            /**
             * Whether the element is in RTL mode.
             * @return {?}
             */
            MatSelect.prototype._isRtl = /**
             * Whether the element is in RTL mode.
             * @return {?}
             */
            function () {
                return this._dir ? this._dir.value === 'rtl' : false;
            };
            /** Handles all keydown events on the select. */
            /**
             * Handles all keydown events on the select.
             * @param {?} event
             * @return {?}
             */
            MatSelect.prototype._handleKeydown = /**
             * Handles all keydown events on the select.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (!this.disabled) {
                    this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
                }
            };
            /**
             * Handles keyboard events while the select is closed.
             * @param {?} event
             * @return {?}
             */
            MatSelect.prototype._handleClosedKeydown = /**
             * Handles keyboard events while the select is closed.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                var /** @type {?} */ keyCode = event.keyCode;
                var /** @type {?} */ isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] ||
                    keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"];
                var /** @type {?} */ isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"];
                // Open the select on ALT + arrow key to match the native <select>
                if (isOpenKey || ((this.multiple || event.altKey) && isArrowKey)) {
                    event.preventDefault(); // prevents the page from scrolling down when pressing space
                    this.open();
                }
                else if (!this.multiple) {
                    this._keyManager.onKeydown(event);
                }
            };
            /**
             * Handles keyboard events when the selected is open.
             * @param {?} event
             * @return {?}
             */
            MatSelect.prototype._handleOpenKeydown = /**
             * Handles keyboard events when the selected is open.
             * @param {?} event
             * @return {?}
             */
            function (event) {
                var /** @type {?} */ keyCode = event.keyCode;
                var /** @type {?} */ isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"];
                var /** @type {?} */ manager = this._keyManager;
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
                    event.preventDefault();
                    keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                }
                else if (isArrowKey && event.altKey) {
                    // Close the select on ALT + arrow key to match the native <select>
                    event.preventDefault();
                    this.close();
                }
                else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]) && manager.activeItem) {
                    event.preventDefault();
                    manager.activeItem._selectViaInteraction();
                }
                else {
                    var /** @type {?} */ previouslyFocusedIndex = manager.activeItemIndex;
                    manager.onKeydown(event);
                    if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                        manager.activeItemIndex !== previouslyFocusedIndex) {
                        manager.activeItem._selectViaInteraction();
                    }
                }
            };
            /**
             * When the panel element is finished transforming in (though not fading in), it
             * emits an event and focuses an option if the panel is open.
             */
            /**
             * When the panel element is finished transforming in (though not fading in), it
             * emits an event and focuses an option if the panel is open.
             * @return {?}
             */
            MatSelect.prototype._onPanelDone = /**
             * When the panel element is finished transforming in (though not fading in), it
             * emits an event and focuses an option if the panel is open.
             * @return {?}
             */
            function () {
                if (this.panelOpen) {
                    this._scrollTop = 0;
                    this.openedChange.emit(true);
                }
                else {
                    this.openedChange.emit(false);
                    this._panelDoneAnimating = false;
                    this.overlayDir.offsetX = 0;
                    this._changeDetectorRef.markForCheck();
                }
            };
            /**
             * When the panel content is done fading in, the _panelDoneAnimating property is
             * set so the proper class can be added to the panel.
             */
            /**
             * When the panel content is done fading in, the _panelDoneAnimating property is
             * set so the proper class can be added to the panel.
             * @return {?}
             */
            MatSelect.prototype._onFadeInDone = /**
             * When the panel content is done fading in, the _panelDoneAnimating property is
             * set so the proper class can be added to the panel.
             * @return {?}
             */
            function () {
                this._panelDoneAnimating = this.panelOpen;
                this._changeDetectorRef.markForCheck();
            };
            /**
             * @return {?}
             */
            MatSelect.prototype._onFocus = /**
             * @return {?}
             */
            function () {
                if (!this.disabled) {
                    this.focused = true;
                    this.stateChanges.next();
                }
            };
            /**
             * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
             * "blur" to the panel when it opens, causing a false positive.
             */
            /**
             * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
             * "blur" to the panel when it opens, causing a false positive.
             * @return {?}
             */
            MatSelect.prototype._onBlur = /**
             * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
             * "blur" to the panel when it opens, causing a false positive.
             * @return {?}
             */
            function () {
                this.focused = false;
                if (!this.disabled && !this.panelOpen) {
                    this._onTouched();
                    this._changeDetectorRef.markForCheck();
                    this.stateChanges.next();
                }
            };
            /**
             * Callback that is invoked when the overlay panel has been attached.
             */
            /**
             * Callback that is invoked when the overlay panel has been attached.
             * @return {?}
             */
            MatSelect.prototype._onAttached = /**
             * Callback that is invoked when the overlay panel has been attached.
             * @return {?}
             */
            function () {
                var _this = this;
                this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
                    _this._changeDetectorRef.detectChanges();
                    _this._calculateOverlayOffsetX();
                    _this.panel.nativeElement.scrollTop = _this._scrollTop;
                });
            };
            /** Returns the theme to be used on the panel. */
            /**
             * Returns the theme to be used on the panel.
             * @return {?}
             */
            MatSelect.prototype._getPanelTheme = /**
             * Returns the theme to be used on the panel.
             * @return {?}
             */
            function () {
                return this._parentFormField ? "mat-" + this._parentFormField.color : '';
            };
            Object.defineProperty(MatSelect.prototype, "empty", {
                /** Whether the select has a value. */
                get: /**
                 * Whether the select has a value.
                 * @return {?}
                 */
                function () {
                    return !this._selectionModel || this._selectionModel.isEmpty();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            MatSelect.prototype._initializeSelection = /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Defer setting the value in order to avoid the "Expression
                // has changed after it was checked" errors from Angular.
                Promise.resolve().then(function () {
                    _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value);
                });
            };
            /**
             * Sets the selected option based on a value. If no option can be
             * found with the designated value, the select trigger is cleared.
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?}
             */
            MatSelect.prototype._setSelectionByValue = /**
             * Sets the selected option based on a value. If no option can be
             * found with the designated value, the select trigger is cleared.
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?}
             */
            function (value, isUserInput) {
                var _this = this;
                if (isUserInput === void 0) {
                    isUserInput = false;
                }
                if (this.multiple && value) {
                    if (!Array.isArray(value)) {
                        throw getMatSelectNonArrayValueError();
                    }
                    this._clearSelection();
                    value.forEach(function (currentValue) {
                        return _this._selectValue(currentValue, isUserInput);
                    });
                    this._sortValues();
                }
                else {
                    this._clearSelection();
                    var /** @type {?} */ correspondingOption = this._selectValue(value, isUserInput);
                    // Shift focus to the active item. Note that we shouldn't do this in multiple
                    // mode, because we don't know what option the user interacted with last.
                    if (correspondingOption) {
                        this._keyManager.setActiveItem(correspondingOption);
                    }
                }
                this._changeDetectorRef.markForCheck();
            };
            /**
             * Finds and selects and option based on its value.
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?} Option that has the corresponding value.
             */
            MatSelect.prototype._selectValue = /**
             * Finds and selects and option based on its value.
             * @param {?} value
             * @param {?=} isUserInput
             * @return {?} Option that has the corresponding value.
             */
            function (value, isUserInput) {
                var _this = this;
                if (isUserInput === void 0) {
                    isUserInput = false;
                }
                var /** @type {?} */ correspondingOption = this.options.find(function (option) {
                    try {
                        // Treat null as a special reset value.
                        return option.value != null && _this._compareWith(option.value, value);
                    }
                    catch (/** @type {?} */ error) {
                        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["isDevMode"])()) {
                            // Notify developers of errors in their comparator.
                            console.warn(error);
                        }
                        return false;
                    }
                });
                if (correspondingOption) {
                    isUserInput ? correspondingOption._selectViaInteraction() : correspondingOption.select();
                    this._selectionModel.select(correspondingOption);
                    this.stateChanges.next();
                }
                return correspondingOption;
            };
            /**
             * Clears the select trigger and deselects every option in the list.
             * @param {?=} skip Option that should not be deselected.
             * @return {?}
             */
            MatSelect.prototype._clearSelection = /**
             * Clears the select trigger and deselects every option in the list.
             * @param {?=} skip Option that should not be deselected.
             * @return {?}
             */
            function (skip) {
                this._selectionModel.clear();
                this.options.forEach(function (option) {
                    if (option !== skip) {
                        option.deselect();
                    }
                });
                this.stateChanges.next();
            };
            /**
             * Sets up a key manager to listen to keyboard events on the overlay panel.
             * @return {?}
             */
            MatSelect.prototype._initKeyManager = /**
             * Sets up a key manager to listen to keyboard events on the overlay panel.
             * @return {?}
             */
            function () {
                var _this = this;
                this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["ActiveDescendantKeyManager"](this.options)
                    .withTypeAhead()
                    .withVerticalOrientation()
                    .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
                this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
                    // Restore focus to the trigger before closing. Ensures that the focus
                    // position won't be lost if the user got focus into the overlay.
                    // Restore focus to the trigger before closing. Ensures that the focus
                    // position won't be lost if the user got focus into the overlay.
                    _this.focus();
                    _this.close();
                });
                this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
                    if (_this._panelOpen && _this.panel) {
                        _this._scrollActiveOptionIntoView();
                    }
                    else if (!_this._panelOpen && !_this.multiple && _this._keyManager.activeItem) {
                        _this._keyManager.activeItem._selectViaInteraction();
                    }
                });
            };
            /**
             * Drops current option subscriptions and IDs and resets from scratch.
             * @return {?}
             */
            MatSelect.prototype._resetOptions = /**
             * Drops current option subscriptions and IDs and resets from scratch.
             * @return {?}
             */
            function () {
                var _this = this;
                var /** @type {?} */ changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
                this.optionSelectionChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (event) {
                        return event.isUserInput;
                    }))
                    .subscribe(function (event) {
                        _this._onSelect(event.source);
                        if (!_this.multiple && _this._panelOpen) {
                            _this.close();
                            _this.focus();
                        }
                    });
                // Listen to changes in the internal state of the options and react accordingly.
                // Handles cases like the labels of the selected options changing.
                rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"].apply(void 0, this.options.map(function (option) {
                    return option._stateChanges;
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed))
                    .subscribe(function () {
                        _this._changeDetectorRef.markForCheck();
                        _this.stateChanges.next();
                    });
                this._setOptionIds();
            };
            /**
             * Invoked when an option is clicked.
             * @param {?} option
             * @return {?}
             */
            MatSelect.prototype._onSelect = /**
             * Invoked when an option is clicked.
             * @param {?} option
             * @return {?}
             */
            function (option) {
                var /** @type {?} */ wasSelected = this._selectionModel.isSelected(option);
                // TODO(crisbeto): handle blank/null options inside multi-select.
                if (this.multiple) {
                    this._selectionModel.toggle(option);
                    this.stateChanges.next();
                    wasSelected ? option.deselect() : option.select();
                    this._keyManager.setActiveItem(option);
                    this._sortValues();
                    // In case the user select the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
                else {
                    this._clearSelection(option.value == null ? undefined : option);
                    if (option.value == null) {
                        this._propagateChanges(option.value);
                    }
                    else {
                        this._selectionModel.select(option);
                        this.stateChanges.next();
                    }
                }
                if (wasSelected !== this._selectionModel.isSelected(option)) {
                    this._propagateChanges();
                }
            };
            /**
             * Sorts the model values, ensuring that they keep the same
             * order that they have in the panel.
             * @return {?}
             */
            MatSelect.prototype._sortValues = /**
             * Sorts the model values, ensuring that they keep the same
             * order that they have in the panel.
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._multiple) {
                    this._selectionModel.clear();
                    this.options.forEach(function (option) {
                        if (option.selected) {
                            _this._selectionModel.select(option);
                        }
                    });
                    this.stateChanges.next();
                }
            };
            /**
             * Emits change event to set the model value.
             * @param {?=} fallbackValue
             * @return {?}
             */
            MatSelect.prototype._propagateChanges = /**
             * Emits change event to set the model value.
             * @param {?=} fallbackValue
             * @return {?}
             */
            function (fallbackValue) {
                var /** @type {?} */ valueToEmit = null;
                if (this.multiple) {
                    valueToEmit = (/** @type {?} */ (this.selected)).map(function (option) {
                        return option.value;
                    });
                }
                else {
                    valueToEmit = this.selected ? (/** @type {?} */ (this.selected)).value : fallbackValue;
                }
                this._value = valueToEmit;
                this.valueChange.emit(valueToEmit);
                this._onChange(valueToEmit);
                this.selectionChange.emit(new MatSelectChange(this, valueToEmit));
                this._changeDetectorRef.markForCheck();
            };
            /**
             * Records option IDs to pass to the aria-owns property.
             * @return {?}
             */
            MatSelect.prototype._setOptionIds = /**
             * Records option IDs to pass to the aria-owns property.
             * @return {?}
             */
            function () {
                this._optionIds = this.options.map(function (option) {
                    return option.id;
                }).join(' ');
            };
            /**
             * Highlights the selected item. If no option is selected, it will highlight
             * the first item instead.
             * @return {?}
             */
            MatSelect.prototype._highlightCorrectOption = /**
             * Highlights the selected item. If no option is selected, it will highlight
             * the first item instead.
             * @return {?}
             */
            function () {
                if (this._keyManager) {
                    if (this.empty) {
                        this._keyManager.setFirstItemActive();
                    }
                    else {
                        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
                    }
                }
            };
            /**
             * Scrolls the active option into view.
             * @return {?}
             */
            MatSelect.prototype._scrollActiveOptionIntoView = /**
             * Scrolls the active option into view.
             * @return {?}
             */
            function () {
                var /** @type {?} */ activeOptionIndex = this._keyManager.activeItemIndex || 0;
                var /** @type {?} */ labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
                this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
            };
            /** Focuses the select element. */
            /**
             * Focuses the select element.
             * @return {?}
             */
            MatSelect.prototype.focus = /**
             * Focuses the select element.
             * @return {?}
             */
            function () {
                this._elementRef.nativeElement.focus();
            };
            /**
             * Gets the index of the provided option in the option list.
             * @param {?} option
             * @return {?}
             */
            MatSelect.prototype._getOptionIndex = /**
             * Gets the index of the provided option in the option list.
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return this.options.reduce(function (result, current, index) {
                    return result === undefined ? (option === current ? index : undefined) : result;
                }, undefined);
            };
            /**
             * Calculates the scroll position and x- and y-offsets of the overlay panel.
             * @return {?}
             */
            MatSelect.prototype._calculateOverlayPosition = /**
             * Calculates the scroll position and x- and y-offsets of the overlay panel.
             * @return {?}
             */
            function () {
                var /** @type {?} */ itemHeight = this._getItemHeight();
                var /** @type {?} */ items = this._getItemCount();
                var /** @type {?} */ panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
                var /** @type {?} */ scrollContainerHeight = items * itemHeight;
                // The farthest the panel can be scrolled before it hits the bottom
                var /** @type {?} */ maxScroll = scrollContainerHeight - panelHeight;
                // If no value is selected we open the popup to the first item.
                var /** @type {?} */ selectedOptionOffset = this.empty ? 0 : /** @type {?} */ ((this._getOptionIndex(this._selectionModel.selected[0])));
                selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
                // We must maintain a scroll buffer so the selected option will be scrolled to the
                // center of the overlay panel rather than the top.
                var /** @type {?} */ scrollBuffer = panelHeight / 2;
                this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
                this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
                this._checkOverlayWithinViewport(maxScroll);
            };
            /**
             * Calculates the scroll position of the select's overlay panel.
             *
             * Attempts to center the selected option in the panel. If the option is
             * too high or too low in the panel to be scrolled to the center, it clamps the
             * scroll position to the min or max scroll positions respectively.
             */
            /**
             * Calculates the scroll position of the select's overlay panel.
             *
             * Attempts to center the selected option in the panel. If the option is
             * too high or too low in the panel to be scrolled to the center, it clamps the
             * scroll position to the min or max scroll positions respectively.
             * @param {?} selectedIndex
             * @param {?} scrollBuffer
             * @param {?} maxScroll
             * @return {?}
             */
            MatSelect.prototype._calculateOverlayScroll = /**
             * Calculates the scroll position of the select's overlay panel.
             *
             * Attempts to center the selected option in the panel. If the option is
             * too high or too low in the panel to be scrolled to the center, it clamps the
             * scroll position to the min or max scroll positions respectively.
             * @param {?} selectedIndex
             * @param {?} scrollBuffer
             * @param {?} maxScroll
             * @return {?}
             */
            function (selectedIndex, scrollBuffer, maxScroll) {
                var /** @type {?} */ itemHeight = this._getItemHeight();
                var /** @type {?} */ optionOffsetFromScrollTop = itemHeight * selectedIndex;
                var /** @type {?} */ halfOptionHeight = itemHeight / 2;
                // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
                // scroll container, then subtracts the scroll buffer to scroll the option down to
                // the center of the overlay panel. Half the option height must be re-added to the
                // scrollTop so the option is centered based on its middle, not its top edge.
                var /** @type {?} */ optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
                return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
            };
            Object.defineProperty(MatSelect.prototype, "_ariaLabel", {
                /** Returns the aria-label of the select component. */
                get: /**
                 * Returns the aria-label of the select component.
                 * @return {?}
                 */
                function () {
                    // If an ariaLabelledby value has been set, the select should not overwrite the
                    // `aria-labelledby` value by setting the ariaLabel to the placeholder.
                    return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
                },
                enumerable: true,
                configurable: true
            });
            /** Determines the `aria-activedescendant` to be set on the host. */
            /**
             * Determines the `aria-activedescendant` to be set on the host.
             * @return {?}
             */
            MatSelect.prototype._getAriaActiveDescendant = /**
             * Determines the `aria-activedescendant` to be set on the host.
             * @return {?}
             */
            function () {
                if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
                    return this._keyManager.activeItem.id;
                }
                return null;
            };
            /**
             * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
             * This must be adjusted to align the selected option text over the trigger text when
             * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
             * can't be calculated until the panel has been attached, because we need to know the
             * content width in order to constrain the panel within the viewport.
             * @return {?}
             */
            MatSelect.prototype._calculateOverlayOffsetX = /**
             * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
             * This must be adjusted to align the selected option text over the trigger text when
             * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
             * can't be calculated until the panel has been attached, because we need to know the
             * content width in order to constrain the panel within the viewport.
             * @return {?}
             */
            function () {
                var /** @type {?} */ overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
                var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
                var /** @type {?} */ isRtl = this._isRtl();
                var /** @type {?} */ paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
                    SELECT_PANEL_PADDING_X * 2;
                var /** @type {?} */ offsetX;
                // Adjust the offset, depending on the option padding.
                if (this.multiple) {
                    offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
                }
                else {
                    var /** @type {?} */ selected = this._selectionModel.selected[0] || this.options.first;
                    offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
                }
                // Invert the offset in LTR.
                if (!isRtl) {
                    offsetX *= -1;
                }
                // Determine how much the select overflows on each side.
                var /** @type {?} */ leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
                var /** @type {?} */ rightOverflow = overlayRect.right + offsetX - viewportSize.width
                    + (isRtl ? 0 : paddingWidth);
                // If the element overflows on either side, reduce the offset to allow it to fit.
                if (leftOverflow > 0) {
                    offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
                }
                else if (rightOverflow > 0) {
                    offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
                }
                // Set the offset directly in order to avoid having to go through change detection and
                // potentially triggering "changed after it was checked" errors.
                this.overlayDir.offsetX = offsetX;
                this.overlayDir.overlayRef.updatePosition();
            };
            /**
             * Calculates the y-offset of the select's overlay panel in relation to the
             * top start corner of the trigger. It has to be adjusted in order for the
             * selected option to be aligned over the trigger when the panel opens.
             * @param {?} selectedIndex
             * @param {?} scrollBuffer
             * @param {?} maxScroll
             * @return {?}
             */
            MatSelect.prototype._calculateOverlayOffsetY = /**
             * Calculates the y-offset of the select's overlay panel in relation to the
             * top start corner of the trigger. It has to be adjusted in order for the
             * selected option to be aligned over the trigger when the panel opens.
             * @param {?} selectedIndex
             * @param {?} scrollBuffer
             * @param {?} maxScroll
             * @return {?}
             */
            function (selectedIndex, scrollBuffer, maxScroll) {
                var /** @type {?} */ itemHeight = this._getItemHeight();
                var /** @type {?} */ optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
                var /** @type {?} */ maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
                var /** @type {?} */ optionOffsetFromPanelTop;
                // Disable offset if requested by user by returning 0 as value to offset
                if (this._disableOptionCentering) {
                    return 0;
                }
                if (this._scrollTop === 0) {
                    optionOffsetFromPanelTop = selectedIndex * itemHeight;
                }
                else if (this._scrollTop === maxScroll) {
                    var /** @type {?} */ firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
                    var /** @type {?} */ selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
                    // The first item is partially out of the viewport. Therefore we need to calculate what
                    // portion of it is shown in the viewport and account for it in our offset.
                    var /** @type {?} */ partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
                    // Because the panel height is longer than the height of the options alone,
                    // there is always extra padding at the top or bottom of the panel. When
                    // scrolled to the very bottom, this padding is at the top of the panel and
                    // must be added to the offset.
                    optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
                }
                else {
                    // If the option was scrolled to the middle of the panel using a scroll buffer,
                    // its offset will be the scroll buffer minus the half height that was added to
                    // center it.
                    optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
                }
                // The final offset is the option's offset from the top, adjusted for the height
                // difference, multiplied by -1 to ensure that the overlay moves in the correct
                // direction up the page.
                return optionOffsetFromPanelTop * -1 - optionHeightAdjustment;
            };
            /**
             * Checks that the attempted overlay position will fit within the viewport.
             * If it will not fit, tries to adjust the scroll position and the associated
             * y-offset so the panel can open fully on-screen. If it still won't fit,
             * sets the offset back to 0 to allow the fallback position to take over.
             * @param {?} maxScroll
             * @return {?}
             */
            MatSelect.prototype._checkOverlayWithinViewport = /**
             * Checks that the attempted overlay position will fit within the viewport.
             * If it will not fit, tries to adjust the scroll position and the associated
             * y-offset so the panel can open fully on-screen. If it still won't fit,
             * sets the offset back to 0 to allow the fallback position to take over.
             * @param {?} maxScroll
             * @return {?}
             */
            function (maxScroll) {
                var /** @type {?} */ itemHeight = this._getItemHeight();
                var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
                var /** @type {?} */ topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
                var /** @type {?} */ bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
                var /** @type {?} */ panelHeightTop = Math.abs(this._offsetY);
                var /** @type {?} */ totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
                var /** @type {?} */ panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
                if (panelHeightBottom > bottomSpaceAvailable) {
                    this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
                }
                else if (panelHeightTop > topSpaceAvailable) {
                    this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
                }
                else {
                    this._transformOrigin = this._getOriginBasedOnOption();
                }
            };
            /**
             * Adjusts the overlay panel up to fit in the viewport.
             * @param {?} panelHeightBottom
             * @param {?} bottomSpaceAvailable
             * @return {?}
             */
            MatSelect.prototype._adjustPanelUp = /**
             * Adjusts the overlay panel up to fit in the viewport.
             * @param {?} panelHeightBottom
             * @param {?} bottomSpaceAvailable
             * @return {?}
             */
            function (panelHeightBottom, bottomSpaceAvailable) {
                // Browsers ignore fractional scroll offsets, so we need to round.
                var /** @type {?} */ distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
                // Scrolls the panel up by the distance it was extending past the boundary, then
                // adjusts the offset by that amount to move the panel up into the viewport.
                this._scrollTop -= distanceBelowViewport;
                this._offsetY -= distanceBelowViewport;
                this._transformOrigin = this._getOriginBasedOnOption();
                // If the panel is scrolled to the very top, it won't be able to fit the panel
                // by scrolling, so set the offset to 0 to allow the fallback position to take
                // effect.
                if (this._scrollTop <= 0) {
                    this._scrollTop = 0;
                    this._offsetY = 0;
                    this._transformOrigin = "50% bottom 0px";
                }
            };
            /**
             * Adjusts the overlay panel down to fit in the viewport.
             * @param {?} panelHeightTop
             * @param {?} topSpaceAvailable
             * @param {?} maxScroll
             * @return {?}
             */
            MatSelect.prototype._adjustPanelDown = /**
             * Adjusts the overlay panel down to fit in the viewport.
             * @param {?} panelHeightTop
             * @param {?} topSpaceAvailable
             * @param {?} maxScroll
             * @return {?}
             */
            function (panelHeightTop, topSpaceAvailable, maxScroll) {
                // Browsers ignore fractional scroll offsets, so we need to round.
                var /** @type {?} */ distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
                // Scrolls the panel down by the distance it was extending past the boundary, then
                // adjusts the offset by that amount to move the panel down into the viewport.
                this._scrollTop += distanceAboveViewport;
                this._offsetY += distanceAboveViewport;
                this._transformOrigin = this._getOriginBasedOnOption();
                // If the panel is scrolled to the very bottom, it won't be able to fit the
                // panel by scrolling, so set the offset to 0 to allow the fallback position
                // to take effect.
                if (this._scrollTop >= maxScroll) {
                    this._scrollTop = maxScroll;
                    this._offsetY = 0;
                    this._transformOrigin = "50% top 0px";
                    return;
                }
            };
            /**
             * Sets the transform origin point based on the selected option.
             * @return {?}
             */
            MatSelect.prototype._getOriginBasedOnOption = /**
             * Sets the transform origin point based on the selected option.
             * @return {?}
             */
            function () {
                var /** @type {?} */ itemHeight = this._getItemHeight();
                var /** @type {?} */ optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
                var /** @type {?} */ originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
                return "50% " + originY + "px 0px";
            };
            /**
             * Calculates the amount of items in the select. This includes options and group labels.
             * @return {?}
             */
            MatSelect.prototype._getItemCount = /**
             * Calculates the amount of items in the select. This includes options and group labels.
             * @return {?}
             */
            function () {
                return this.options.length + this.optionGroups.length;
            };
            /**
             * Calculates the height of the select's options.
             * @return {?}
             */
            MatSelect.prototype._getItemHeight = /**
             * Calculates the height of the select's options.
             * @return {?}
             */
            function () {
                return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
            };
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @param {?} ids
             * @return {?}
             */
            MatSelect.prototype.setDescribedByIds = /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @param {?} ids
             * @return {?}
             */
            function (ids) {
                this._ariaDescribedby = ids.join(' ');
            };
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @return {?}
             */
            MatSelect.prototype.onContainerClick = /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             * @return {?}
             */
            function () {
                this.focus();
                this.open();
            };
            Object.defineProperty(MatSelect.prototype, "shouldLabelFloat", {
                /**
                 * Implemented as part of MatFormFieldControl.
                 * @docs-private
                 */
                get: /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                function () {
                    return this._panelOpen || !this.empty;
                },
                enumerable: true,
                configurable: true
            });
            MatSelect.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                        selector: 'mat-select',
                        exportAs: 'matSelect',
                        template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_onPanelDone()\" [style.transformOrigin]=\"_transformOrigin\" [class.mat-select-panel-done-animating]=\"_panelDoneAnimating\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><div class=\"mat-select-content\" [@fadeInContent]=\"'showing'\" (@fadeInContent.done)=\"_onFadeInDone()\"><ng-content></ng-content></div></div></ng-template>",
                        styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper,.mat-form-field-appearance-standard .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;transition:none;display:block}"],
                        inputs: ['disabled', 'disableRipple', 'tabIndex'],
                        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
                        host: {
                            'role': 'listbox',
                            '[attr.id]': 'id',
                            '[attr.tabindex]': 'tabIndex',
                            '[attr.aria-label]': '_ariaLabel',
                            '[attr.aria-labelledby]': 'ariaLabelledby',
                            '[attr.aria-required]': 'required.toString()',
                            '[attr.aria-disabled]': 'disabled.toString()',
                            '[attr.aria-invalid]': 'errorState',
                            '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
                            '[attr.aria-multiselectable]': 'multiple',
                            '[attr.aria-describedby]': '_ariaDescribedby || null',
                            '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                            '[class.mat-select-disabled]': 'disabled',
                            '[class.mat-select-invalid]': 'errorState',
                            '[class.mat-select-required]': 'required',
                            'class': 'mat-select',
                            '(keydown)': '_handleKeydown($event)',
                            '(focus)': '_onFocus()',
                            '(blur)': '_onBlur()',
                        },
                        animations: [
                            matSelectAnimations.transformPanel,
                            matSelectAnimations.fadeInContent
                        ],
                        providers: [
                            {
                                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
                                useExisting: MatSelect
                            },
                            {
                                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"],
                                useExisting: MatSelect
                            }
                        ],
                    },]
                },
            ];
            /** @nocollapse */
            MatSelect.ctorParameters = function () {
                return [
                    {type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"],},
                    {type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"],},
                    {type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"],},
                    {
                        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]},]
                    },
                    {
                        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]},]
                    },
                    {
                        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"],
                        decorators: [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]}, {type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]},]
                    },
                    {
                        type: undefined,
                        decorators: [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
                            args: ['tabindex',]
                        },]
                    },
                    {
                        type: undefined,
                        decorators: [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
                            args: [MAT_SELECT_SCROLL_STRATEGY,]
                        },]
                    },
                ];
            };
            MatSelect.propDecorators = {
                "trigger": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['trigger',]},],
                "panel": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['panel',]},],
                "overlayDir": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
                    args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"],]
                },],
                "options": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
                    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], {descendants: true},]
                },],
                "optionGroups": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
                    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"],]
                },],
                "panelClass": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "customTrigger": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
                    args: [MatSelectTrigger,]
                },],
                "placeholder": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "required": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "multiple": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "disableOptionCentering": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "compareWith": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "value": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "ariaLabel": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-label',]},],
                "ariaLabelledby": [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
                    args: ['aria-labelledby',]
                },],
                "errorStateMatcher": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "id": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]},],
                "openedChange": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]},],
                "_openedStream": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['opened',]},],
                "_closedStream": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['closed',]},],
                "selectionChange": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]},],
                "valueChange": [{type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]},],
            };
            return MatSelect;
        }(_MatSelectMixinBase));

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        var MatSelectModule = /** @class */ (function () {
            function MatSelectModule() {
            }

            MatSelectModule.decorators = [
                {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"],
                        ],
                        exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
                        declarations: [MatSelect, MatSelectTrigger],
                        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
                    },]
                },
            ];
            return MatSelectModule;
        }());

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */


//# sourceMappingURL=select.es5.js.map


        /***/
    }),

    /***/ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js":
    /*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/form-field/typings/index.ngfactory.js ***!
  \******************************************************************************/
    /*! exports provided: MatFormFieldModuleNgFactory, RenderType_MatFormField, View_MatFormField_0, View_MatFormField_Host_0, MatFormFieldNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatFormFieldModuleNgFactory", function () {
            return MatFormFieldModuleNgFactory;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_MatFormField", function () {
            return RenderType_MatFormField;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_MatFormField_0", function () {
            return View_MatFormField_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_MatFormField_Host_0", function () {
            return View_MatFormField_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatFormFieldNgFactory", function () {
            return MatFormFieldNgFactory;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */






        var MatFormFieldModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], [], function (_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], [])]);
        });

        var styles_MatFormField = [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:0;left:0;right:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}", ".mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}"];
        var RenderType_MatFormField = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
            encapsulation: 2,
            styles: styles_MatFormField,
            data: {
                "animation": [{
                    type: 7,
                    name: "transitionMessages",
                    definitions: [{
                        type: 0,
                        name: "enter",
                        styles: {type: 6, styles: {opacity: 1, transform: "translateY(0%)"}, offset: null},
                        options: undefined
                    }, {
                        type: 1,
                        expr: "void => enter",
                        animation: [{
                            type: 6,
                            styles: {opacity: 0, transform: "translateY(-100%)"},
                            offset: null
                        }, {type: 4, styles: null, timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)"}],
                        options: null
                    }],
                    options: {}
                }]
            }
        });

        function View_MatFormField_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-form-field-prefix"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
        }

        function View_MatFormField_3(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._control.placeholder;
                _ck(_v, 2, 0, currVal_0);
            });
        }

        function View_MatFormField_4(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
        }

        function View_MatFormField_5(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "mat-placeholder-required mat-form-field-required-marker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0*"]))], null, null);
        }

        function View_MatFormField_2(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[4, 0], ["label", 1]], null, 7, "label", [["class", "mat-form-field-label"]], [[1, "for", 0], [1, "aria-owns", 0], [2, "mat-empty", null], [2, "mat-form-field-empty", null], [2, "mat-accent", null], [2, "mat-warn", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {ngSwitch: [0, "ngSwitch"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null)], function (_ck, _v) {
                var _co = _v.component;
                var currVal_6 = _co._hasLabel();
                _ck(_v, 1, 0, currVal_6);
                var currVal_7 = false;
                _ck(_v, 3, 0, currVal_7);
                var currVal_8 = true;
                _ck(_v, 5, 0, currVal_8);
                var currVal_9 = ((!_co.hideRequiredMarker && _co._control.required) && !_co._control.disabled);
                _ck(_v, 7, 0, currVal_9);
            }, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._control.id;
                var currVal_1 = _co._control.id;
                var currVal_2 = (_co._control.empty && !_co._shouldAlwaysFloat);
                var currVal_3 = (_co._control.empty && !_co._shouldAlwaysFloat);
                var currVal_4 = (_co.color == "accent");
                var currVal_5 = (_co.color == "warn");
                _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
            });
        }

        function View_MatFormField_6(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-form-field-suffix"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 4)], null, null);
        }

        function View_MatFormField_7(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["underline", 1]], null, 1, "div", [["class", "mat-form-field-underline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "span", [["class", "mat-form-field-ripple"]], [[2, "mat-accent", null], [2, "mat-warn", null]], null, null, null, null))], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = (_co.color == "accent");
                var currVal_1 = (_co.color == "warn");
                _ck(_v, 1, 0, currVal_0, currVal_1);
            });
        }

        function View_MatFormField_8(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "mat-form-field-outline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "div", [["class", "mat-form-field-outline-start"]], [[4, "width", "px"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "mat-form-field-outline-gap"]], [[4, "width", "px"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "mat-form-field-outline-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "div", [["class", "mat-form-field-outline mat-form-field-outline-thick"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "div", [["class", "mat-form-field-outline-start"]], [[4, "width", "px"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "div", [["class", "mat-form-field-outline-gap"]], [[4, "width", "px"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "div", [["class", "mat-form-field-outline-end"]], null, null, null, null, null))], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._outlineGapStart;
                _ck(_v, 2, 0, currVal_0);
                var currVal_1 = _co._outlineGapWidth;
                _ck(_v, 3, 0, currVal_1);
                var currVal_2 = _co._outlineGapStart;
                _ck(_v, 6, 0, currVal_2);
                var currVal_3 = _co._outlineGapWidth;
                _ck(_v, 7, 0, currVal_3);
            });
        }

        function View_MatFormField_9(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], [[24, "@transitionMessages", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 5)], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._subscriptAnimationState;
                _ck(_v, 0, 0, currVal_0);
            });
        }

        function View_MatFormField_11(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-hint"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._hintLabelId;
                _ck(_v, 0, 0, currVal_0);
                var currVal_1 = _co.hintLabel;
                _ck(_v, 1, 0, currVal_1);
            });
        }

        function View_MatFormField_10(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "mat-form-field-hint-wrapper"]], [[24, "@transitionMessages", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 6), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "mat-form-field-hint-spacer"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 7)], function (_ck, _v) {
                var _co = _v.component;
                var currVal_1 = _co.hintLabel;
                _ck(_v, 2, 0, currVal_1);
            }, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._subscriptAnimationState;
                _ck(_v, 0, 0, currVal_0);
            });
        }

        function View_MatFormField_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {underlineRef: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {_connectionContainerRef: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, {_inputContainerRef: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 4, {_label: 0}), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 20, "div", [["class", "mat-form-field-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[2, 0], ["connectionContainer", 1]], null, 9, "div", [["class", "mat-form-field-flex"]], null, [[null, "click"]], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (("click" === en)) {
                    var pd_0 = ((_co._control.onContainerClick && _co._control.onContainerClick($event)) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, [[3, 0], ["inputContainer", 1]], null, 4, "div", [["class", "mat-form-field-infix"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "span", [["class", "mat-form-field-label-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {ngIf: [0, "ngIf"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 5, "div", [["class", "mat-form-field-subscript-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {ngSwitch: [0, "ngSwitch"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatFormField_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null)], function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co._prefixChildren.length;
                _ck(_v, 7, 0, currVal_0);
                var currVal_1 = _co._hasFloatingLabel();
                _ck(_v, 12, 0, currVal_1);
                var currVal_2 = _co._suffixChildren.length;
                _ck(_v, 14, 0, currVal_2);
                var currVal_3 = (_co.appearance != "outline");
                _ck(_v, 16, 0, currVal_3);
                var currVal_4 = (_co.appearance == "outline");
                _ck(_v, 18, 0, currVal_4);
                var currVal_5 = _co._getDisplayedMessages();
                _ck(_v, 20, 0, currVal_5);
                var currVal_6 = "error";
                _ck(_v, 22, 0, currVal_6);
                var currVal_7 = "hint";
                _ck(_v, 24, 0, currVal_7);
            }, null);
        }

        function View_MatFormField_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_MatFormField_0, RenderType_MatFormField)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, {_control: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, {_placeholderChild: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, {_labelChild: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {_errorChildren: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {_hintChildren: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {_prefixChildren: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, {_suffixChildren: 1})], null, function (_ck, _v) {
                var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).appearance == "standard");
                var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).appearance == "fill");
                var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).appearance == "outline");
                var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).appearance == "legacy");
                var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._control.errorState;
                var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._canLabelFloat;
                var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldLabelFloat();
                var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._hideControlPlaceholder();
                var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._control.disabled;
                var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._control.autofilled;
                var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._control.focused;
                var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color == "accent");
                var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color == "warn");
                var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("untouched");
                var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("touched");
                var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("pristine");
                var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("dirty");
                var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("valid");
                var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("invalid");
                var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._shouldForward("pending");
                _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);
            });
        }

        var MatFormFieldNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-form-field", _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], View_MatFormField_Host_0, {
            color: "color",
            appearance: "appearance",
            hideRequiredMarker: "hideRequiredMarker",
            hintLabel: "hintLabel",
            floatLabel: "floatLabel"
        }, {}, ["[matPrefix]", "*", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"]);


        /***/
    }),

    /***/ "./node_modules/@angular/material/select/typings/index.ngfactory.js":
    /*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/select/typings/index.ngfactory.js ***!
  \**************************************************************************/
    /*! exports provided: MatSelectModuleNgFactory, RenderType_MatSelect, View_MatSelect_0, View_MatSelect_Host_0, MatSelectNgFactory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelectModuleNgFactory", function () {
            return MatSelectModuleNgFactory;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RenderType_MatSelect", function () {
            return RenderType_MatSelect;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_MatSelect_0", function () {
            return View_MatSelect_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "View_MatSelect_Host_0", function () {
            return View_MatSelect_Host_0;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MatSelectNgFactory", function () {
            return MatSelectNgFactory;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /* harmony import */
        var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
        /* harmony import */
        var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
        /* harmony import */
        var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
        /* harmony import */
        var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
        /* harmony import */
        var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
        /* harmony import */
        var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
        /* harmony import */
        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /**
         * @fileoverview This file was generated by the Angular template compiler. Do not edit.
         *
         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
         * tslint:disable
         */











        var MatSelectModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], [], function (_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], [])]);
        });

        var styles_MatSelect = [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper,.mat-form-field-appearance-standard .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;transition:none;display:block}"];
        var RenderType_MatSelect = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
            encapsulation: 2,
            styles: styles_MatSelect,
            data: {
                "animation": [{
                    type: 7,
                    name: "transformPanel",
                    definitions: [{
                        type: 0,
                        name: "void",
                        styles: {type: 6, styles: {transform: "scaleY(0)", minWidth: "100%", opacity: 0}, offset: null},
                        options: undefined
                    }, {
                        type: 0,
                        name: "showing",
                        styles: {
                            type: 6,
                            styles: {opacity: 1, minWidth: "calc(100% + 32px)", transform: "scaleY(1)"},
                            offset: null
                        },
                        options: undefined
                    }, {
                        type: 0,
                        name: "showing-multiple",
                        styles: {
                            type: 6,
                            styles: {opacity: 1, minWidth: "calc(100% + 64px)", transform: "scaleY(1)"},
                            offset: null
                        },
                        options: undefined
                    }, {
                        type: 1,
                        expr: "void => *",
                        animation: {
                            type: 3,
                            steps: [{
                                type: 11,
                                selector: "@fadeInContent",
                                animation: {type: 9, options: null},
                                options: null
                            }, {type: 4, styles: null, timings: "150ms cubic-bezier(0.25, 0.8, 0.25, 1)"}],
                            options: null
                        },
                        options: null
                    }, {
                        type: 1,
                        expr: "* => void",
                        animation: [{
                            type: 4,
                            styles: {type: 6, styles: {opacity: 0}, offset: null},
                            timings: "250ms 100ms linear"
                        }],
                        options: null
                    }],
                    options: {}
                }, {
                    type: 7,
                    name: "fadeInContent",
                    definitions: [{
                        type: 0,
                        name: "showing",
                        styles: {type: 6, styles: {opacity: 1}, offset: null},
                        options: undefined
                    }, {
                        type: 1,
                        expr: "void => showing",
                        animation: [{type: 6, styles: {opacity: 0}, offset: null}, {
                            type: 4,
                            styles: null,
                            timings: "150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
                        }],
                        options: null
                    }],
                    options: {}
                }]
            }
        });

        function View_MatSelect_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "mat-select-placeholder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = (_co.placeholder || "\u00A0");
                _ck(_v, 1, 0, currVal_0);
            });
        }

        function View_MatSelect_3(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co.triggerValue;
                _ck(_v, 1, 0, currVal_0);
            });
        }

        function View_MatSelect_4(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
        }

        function View_MatSelect_2(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "span", [["class", "mat-select-value-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {ngSwitch: [0, "ngSwitch"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null)], function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = !!_co.customTrigger;
                _ck(_v, 1, 0, currVal_0);
                var currVal_1 = true;
                _ck(_v, 5, 0, currVal_1);
            }, null);
        }

        function View_MatSelect_5(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["panel", 1]], null, 3, "div", [], [[24, "@transformPanel", 0], [4, "transformOrigin", null], [2, "mat-select-panel-done-animating", null], [4, "font-size", "px"]], [[null, "@transformPanel.done"], [null, "keydown"]], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (("@transformPanel.done" === en)) {
                    var pd_0 = (_co._onPanelDone() !== false);
                    ad = (pd_0 && ad);
                }
                if (("keydown" === en)) {
                    var pd_1 = (_co._handleKeydown($event) !== false);
                    ad = (pd_1 && ad);
                }
                return ad;
            }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "mat-select-content"]], [[24, "@fadeInContent", 0]], [[null, "@fadeInContent.done"]], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (("@fadeInContent.done" === en)) {
                    var pd_0 = (_co._onFadeInDone() !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], function (_ck, _v) {
                var _co = _v.component;
                var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "mat-select-panel ", _co._getPanelTheme(), "");
                var currVal_5 = _co.panelClass;
                _ck(_v, 1, 0, currVal_4, currVal_5);
            }, function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = (_co.multiple ? "showing-multiple" : "showing");
                var currVal_1 = _co._transformOrigin;
                var currVal_2 = _co._panelDoneAnimating;
                var currVal_3 = _co._triggerFontSize;
                _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
                var currVal_6 = "showing";
                _ck(_v, 2, 0, currVal_6);
            });
        }

        function View_MatSelect_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {trigger: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {panel: 0}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, {overlayDir: 0}), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, [[1, 0], ["trigger", 1]], null, 9, "div", [["aria-hidden", "true"], ["cdk-overlay-origin", ""], ["class", "mat-select-trigger"]], null, [[null, "click"]], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (("click" === en)) {
                    var pd_0 = (_co.toggle() !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, [["origin", 4]], 0, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["CdkOverlayOrigin"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 5, "div", [["class", "mat-select-value"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {ngSwitch: [0, "ngSwitch"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "mat-select-arrow-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "div", [["class", "mat-select-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (("backdropClick" === en)) {
                    var pd_0 = (_co.close() !== false);
                    ad = (pd_0 && ad);
                }
                if (("attach" === en)) {
                    var pd_1 = (_co._onAttached() !== false);
                    ad = (pd_1 && ad);
                }
                if (("detach" === en)) {
                    var pd_2 = (_co.close() !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, View_MatSelect_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, [[3, 4]], 0, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["CdkConnectedOverlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵc"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]]], {
                origin: [0, "origin"],
                positions: [1, "positions"],
                offsetY: [2, "offsetY"],
                minWidth: [3, "minWidth"],
                backdropClass: [4, "backdropClass"],
                scrollStrategy: [5, "scrollStrategy"],
                open: [6, "open"],
                hasBackdrop: [7, "hasBackdrop"],
                lockPosition: [8, "lockPosition"]
            }, {backdropClick: "backdropClick", attach: "attach", detach: "detach"})], function (_ck, _v) {
                var _co = _v.component;
                var currVal_0 = _co.empty;
                _ck(_v, 6, 0, currVal_0);
                var currVal_1 = true;
                _ck(_v, 8, 0, currVal_1);
                var currVal_2 = false;
                _ck(_v, 10, 0, currVal_2);
                var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4);
                var currVal_4 = _co._positions;
                var currVal_5 = _co._offsetY;
                var currVal_6 = ((_co._triggerRect == null) ? null : _co._triggerRect.width);
                var currVal_7 = "cdk-overlay-transparent-backdrop";
                var currVal_8 = _co._scrollStrategy;
                var currVal_9 = _co.panelOpen;
                var currVal_10 = "";
                var currVal_11 = "";
                _ck(_v, 14, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);
            }, null);
        }

        function View_MatSelect_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
                var ad = true;
                if (("keydown" === en)) {
                    var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleKeydown($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (("focus" === en)) {
                    var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._onFocus() !== false);
                    ad = (pd_1 && ad);
                }
                if (("blur" === en)) {
                    var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._onBlur() !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, View_MatSelect_0, RenderType_MatSelect)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MAT_SELECT_SCROLL_STRATEGY"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {options: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {optionGroups: 1}), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, {customTrigger: 0})], function (_ck, _v) {
                _ck(_v, 3, 0);
            }, function (_ck, _v) {
                var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).id;
                var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).tabIndex;
                var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._ariaLabel;
                var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ariaLabelledby;
                var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).required.toString();
                var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled.toString();
                var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).errorState;
                var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._optionIds : null);
                var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).multiple;
                var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._ariaDescribedby || null);
                var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._getAriaActiveDescendant();
                var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled;
                var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).errorState;
                var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).required;
                _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]);
            });
        }

        var MatSelectNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-select", _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"], View_MatSelect_Host_0, {
            disabled: "disabled",
            disableRipple: "disableRipple",
            tabIndex: "tabIndex",
            panelClass: "panelClass",
            placeholder: "placeholder",
            required: "required",
            multiple: "multiple",
            disableOptionCentering: "disableOptionCentering",
            compareWith: "compareWith",
            value: "value",
            ariaLabel: "aria-label",
            ariaLabelledby: "aria-labelledby",
            errorStateMatcher: "errorStateMatcher",
            id: "id"
        }, {
            openedChange: "openedChange",
            _openedStream: "opened",
            _closedStream: "closed",
            selectionChange: "selectionChange",
            valueChange: "valueChange"
        }, ["mat-select-trigger", "*"]);


        /***/
    })

}]);
//# sourceMappingURL=dashboard-example-dashboard-example-module-ngfactory~reactive-forms-reactive-forms-examples-module-n~06ef8c25.js.map