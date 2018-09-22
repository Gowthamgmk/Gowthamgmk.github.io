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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    min-height: 560px;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n          <h3>About component</h3>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/administartor/administartor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/administartor/administartor.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    min-height: 560px;\r\n}\r\ntd{\r\n    padding: 0px 1px 0px 0px;\r\n  }\r\n.toggle-check-input {\r\n    width: 1px;\r\n    height: 1px;\r\n    position: absolute;\r\n  }\r\n.toggle-check-text {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n    background: #CCC;\r\n    padding: 0px 4px 0px 32px;\r\n    border-radius: 1em;\r\n    min-width: 2em;\r\n    color: #FFF;\r\n    cursor: pointer;\r\n    transition: background-color 0.15s;\r\n  }\r\n.toggle-check-text:after {\r\n    content: ' ';\r\n    display: block;\r\n    background: #FFF;\r\n    width: 15px;\r\n    height: 12px;\r\n    border-radius: 1em;\r\n    position: absolute;\r\n    left: 0.3em;\r\n    top: 0.25em;\r\n    transition: left 0.15s, margin-left 0.15s;\r\n  }\r\n.toggle-check-text:before {\r\n    content: 'No';\r\n  }\r\n.toggle-check-input:checked ~ .toggle-check-text {\r\n    background: #8ad869;\r\n    padding-left: 0.5em;\r\n    padding-right: 2em;\r\n  }\r\n.toggle-check-input:checked ~ .toggle-check-text:before {\r\n    content: 'Yes';\r\n  }\r\n.toggle-check-input:checked ~ .toggle-check-text:after {\r\n    left: 100%;\r\n    margin-left: -1.4em;\r\n  }\r\ntable{\r\n    margin-left:17px;\r\n  }\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/administartor/administartor.component.html":
/*!************************************************************!*\
  !*** ./src/app/administartor/administartor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"userForm\" id=\"userForm\" class=\"css-form\" novalidate>\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- Profile tab starting-->\n\n      <ul class=\"nav nav-tabs \">\n        <li class=\"nav-item\"><a data-toggle=\"tab\" class=\"nav-link active\" href=\"#profile\">PROFILE</a></li>\n        <li class=\"nav-item\"><a data-toggle=\"tab\" class=\"nav-link \" href=\"#skill\">SKILLS</a></li>\n        <li class=\"nav-item\"><a data-toggle=\"tab\" class=\"nav-link \" href=\"#history_11\">HISTORY</a></li>\n      </ul>\n      <div class=\"tab-content\">\n        <div id=\"profile\" class=\"tab-pane fade show active\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <h4 style=\"text-decoration:underline\"><b>Personal Information</b></h4>\n            </div>\n\n            <!--Personal Information Starting-->\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n\n              <label>Full Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"1\" />\n\n              <label>Code</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"2\" />\n\n              <label>Age</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"3\" />\n\n              <label>Date Of Birth</label>\n              <input type=\"date\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"4\" />\n\n              <label>Place Of Birth</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"5\" />\n\n\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n\n              <label>Height</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"6\" />\n\n              <label>Weight</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"7\" />\n\n              <label>Nationality</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"8\" />\n\n              <label>Religion</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"9\" />\n\n              <label>Education level</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"10\" />\n\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n              <label>Marital status</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"11\" />\n\n              <label>No.of childrens</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"12\" />\n\n              <label>Name of Port/Airport</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"13\" />\n\n              <label>Contact number</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"14\" />\n\n              <label>Residential address</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"15\" />\n\n\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n              <div style=\"border-radius: 25px;border: 1px solid #000;padding: 10px;width:296px;height: 240px; \">\n                <img src=\"#\" width=\"130\" height=\"200\" id=\"IMAGE_ID\" class=\"img-rounded\" alt=\"Image preview...\">\n\n              </div>\n              <label>\n                <input type=\"file\" name=\"\" id=\"\" fileread=\"uploadme\" />\n              </label>\n              <label>No.of siblings</label>\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"16\" />\n            </div>\n\n            <!--Personal information ending-->\n            <!--Medical History/Dietary Restrictions starting-->\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <h4 style=\"text-decoration:underline\"><b>Medical History/Dietary Restrictions</b></h4>\n            </div>\n            <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n                  Allergies(if any)\n                </div>\n                <div class=\"form-group col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n                  <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"17\" />\n                </div>\n                <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Physical disabilities</div>\n                </div>\n\n                <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12 \">\n                  <label title=\"Physical disabilities\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"18\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Dietary restrictions</div>\n                </div>\n\n                <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12 \">\n                  <label title=\"Dietary restrictions\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"19\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  Food handling preferences:\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">No Pork</div>\n                </div>\n\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                  <label title=\"No pork\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"20\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">No beef</div>\n                </div>\n\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                  <label title=\"No beef\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"21\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Others</div>\n                </div>\n\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                  <label title=\"Others\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"22\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  18. Past and existing illnesses (including chronic aliments and illnesses requiring medication):\n                </div>\n              </div>\n              <div class=\"row top-left-side-org\" style=\"min-height:97px;\">\n\n\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Mental&nbsp; illness</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Mental illness\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Epilepsy</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Epilepsy\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Asthma</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Asthma\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\" ></div>\n\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Diabetes</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Diabetes\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Hypertension</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Hypertension\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Tuberculosis</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Tuberculosis\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\" ></div>\n\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Heart disease</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Heart disease\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Malaria</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Malaria\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Operations</div>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Operations\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\"></div>\n\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Others</div>\n                </div>\n\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"Others\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n\n              </div>\n            </div>\n            <!--Medical History/Dietary Restrictions ending -->\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <h4 style=\"text-decoration:underline\"><b>Others</b></h4>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <label>Preference for rest day</label>\n                  <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"\" />\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <label>Any other remarks</label>\n                  <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"\" />\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\">\n                </div>\n              </div>\n           </div>\n         </div>\n        </div>\n        <!--Profile tab ending-->\n        <!--Skills tab starting-->\n\n        <div id=\"skill\" class=\"tab-pane fade \">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <h4 style=\"text-decoration:underline\"><b>Method of Evaluation of Skills</b></h4>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              Please indicate the method(s) used to evaluate the FDW’s skills (can tick more than one):\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                      <label title=\"Others\" class=\"toggle-check\">\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                        <span class=\"toggle-check-text\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                      <div>Interviewed by Singapore EA</div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                      <label title=\"Others\" class=\"toggle-check\">\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                        <span class=\"toggle-check-text\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                      <div>Interviewed via telephone/teleconference</div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                      <label title=\"Others\" class=\"toggle-check\">\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                        <span class=\"toggle-check-text\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                      <div>Interviewed in person</div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                </div>\n                <div class=\"col-lg-8 col-md-8 col-xs-12 col-sm-12\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                      <label title=\"Others\" class=\"toggle-check\">\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                        <span class=\"toggle-check-text\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                      <div>Based on FDW’s declaration, no evaluation/observation by Singapore EA or overseas training centre/EA</div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                      <label title=\"Others\" class=\"toggle-check\">\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                        <span class=\"toggle-check-text\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                      <div>Interviewed via videoconference</div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                      <label title=\"Others\" class=\"toggle-check\">\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                        <span class=\"toggle-check-text\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                      <div>Interviewed in person and also made observation of FDW in the areas of work listed in table.</div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                </div>\n\n                <table class=\"table\">\n                  <thead style=\"border:1px solid #000\">\n                    <tr>\n                      <th style=\"width:5%;text-align:center;\">S/No</th>\n                      <th style=\"width:30%;text-align:center;\">Areas of Work</th>\n                      <th style=\"width:10%;text-align:center;\">Willingness Yes/No</th>\n                      <th style=\"width:10%;text-align:center;\">Experience Yes/No If yes, state the no. of years</th>\n                      <th style=\"width:60%;text-align:center;\">Assessment/Observation Please state qualitative observations of FDW and/or rate the FDW (Indicate N.A. of no evaluation was done) Poor....................................Excellent.....N.A 1 2 3 4 5 N.A</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"1\" readonly /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of infants/children. Please specify age range:\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"2\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of elderly\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"3\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of disabled\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"4\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"General housework\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"5\" /></td>\n                      <td>\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Cooking,\n\t\t\t\t\t\t\t\t\t\t\tPlease specify cuisines:\" />\n                      </td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"6\" /></td>\n                      <td>\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Language abilities (spoken),\n\t\t\t\t\t\t\t\t\t\t\tPlease specify\" />\n                      </td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"7\" /></td>\n                      <td>\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Other skills, if any\n\t\t\t\t\t\t\t\t\t\t\tPlease specify:\" />\n                      </td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">Interviewed by overseas training centre / EA (Please state name of foreign training centre / EA)</div>\n                </div>\n\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12 \">\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">State if the third party is certified (e.g. ISO 9001) or audited periodically by the EA:</div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                          <label title=\"Others\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                          <div>Interviewed via videoconference</div>\n                        </div>\n\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                          <label title=\"\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                          <div>Interviewed in person</div>\n                        </div>\n\n                      </div>\n                    </div>\n                    <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                          <label title=\"\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                          <div>Interviewed via telephone/teleconference</div>\n                        </div>\n\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                          <label title=\"\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                          <div>Interviewed in person and also made observation of FDW in the areas of work listed in table.</div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n                <table class=\"table\">\n                  <thead style=\"border:1px solid #000\">\n                    <tr>\n                      <th style=\"width:5%;text-align:center;\">S/No</th>\n                      <th style=\"width:30%;text-align:center;\">Areas of Work</th>\n                      <th style=\"width:10%;text-align:center;\">Willingness Yes/No</th>\n                      <th style=\"width:10%;text-align:center;\">Experience Yes/No If yes, state the no. of years</th>\n                      <th style=\"width:60%;text-align:center;\">Assessment/Observation Please state qualitative observations of FDW and/or rate the FDW (Indicate N.A. of no evaluation was done) Poor....................................Excellent.....N.A 1 2 3 4 5 N.A</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"1\" readonly /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of infants/children. Please specify age range:\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"2\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of elderly\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"3\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of disabled\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"4\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"General housework\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"5\" /></td>\n                      <td>\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Cooking,Please specify cuisines:\" />\n                      </td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"6\" /></td>\n                      <td>\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Language abilities (spoken),Please specify\" />\n                      </td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"7\" /></td>\n                      <td>\n                        <input type=\"text\" class=\"form-control\" name=\"\" disabled value=\"Other skills, if any\n\t\t\t\t\t\t\t\t\t\t\tPlease specify:\" />\n                      </td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                  </tbody>\n                </table>\n\n\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <!--Skills tab ending-->\n        <!--History tab strating-->\n\n        <div id=\"history_11\" class=\"tab-pane fade \">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <h4 style=\"text-decoration:underline\"><b>Employment History Overseas</b></h4>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n              <div class=\"row\">\n                <table class=\"table\">\n                  <thead style=\"border:1px solid #000\">\n                    <tr>\n                      <th style=\"width:9%;text-align:center;\">From</th>\n                      <th style=\"width:9%;text-align:center;\">To</th>\n                      <th style=\"width:25%;text-align:center;\">Country (includingFDW’s homecountry)</th>\n                      <th style=\"width:12%;text-align:center;\">Employer</th>\n                      <th style=\"width:30%;text-align:center;\">Work Duties</th>\n                      <th style=\"width:30%;text-align:center;\">Remarks</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <h4 style=\"text-decoration:underline\"><b>Employment History In Singapore</b></h4>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\n                  <div class=\"align-right\">\n                    Previous working experience in Singapore\n                  </div>\n                </div>\n\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                  <label title=\"\" class=\"toggle-check\">\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                    <span class=\"toggle-check-text\"></span>\n                  </label>\n                </div>\n                <div class=\"col-lg-8 col-md-8 col-xs-12 col-sm-12 \">\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <p>\n                    (The EA is required to obtain the FDW’s employment history from MOM and furnish the employer with the employment history of the FDW.\n                    The employer may also verify the FDW’s employment history in Singapore through WPOL using SingPass)\n                  </p>\n                </div>\n\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <h3 style=\"text-decoration:underline\"><b>Feedback from previous employer in Singapore</b></h3>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <p>Feedback was/was not obtained by the EA from the previous employers. If feedback was obtained (attach testimonial if possible),</p>\n                </div>\n\n                <table class=\"table\">\n                  <thead style=\"border:1px solid #000\">\n                    <tr>\n                      <th style=\"width:15%;text-align:center;\">No.</th>\n                      <th style=\"width:30%;text-align:center;\">Feedback</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"Employer 1\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                    </tr>\n                    <tr>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"Employer 2\" /></td>\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <h4 style=\"text-decoration:underline\"><b>Availability of FDW to be Interviewed By Prospective Employer</b></h4>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                          <label title=\"Others\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                          <div>FDW is not available for interview</div>\n                        </div>\n\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\n                          <label title=\"\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\n                          <div>FDW can be interviewed by phone</div>\n                        </div>\n\n                      </div>\n                    </div>\n                    <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                          <label title=\"Others\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                          <div>FDW can be interviewed by video-conference</div>\n                        </div>\n\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\n                          <label title=\"\" class=\"toggle-check\">\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\n                            <span class=\"toggle-check-text\"></span>\n                          </label>\n                        </div>\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\n                          <div>FDW can be interviewed in person</div>\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <h4 style=\"text-decoration:underline\"><b>Other Remarks</b></h4>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                  <textarea style=\"width:75%\" ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--History tab ending-->\n      </div>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/administartor/administartor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/administartor/administartor.component.ts ***!
  \**********************************************************/
/*! exports provided: AdministartorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministartorComponent", function() { return AdministartorComponent; });
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

var AdministartorComponent = /** @class */ (function () {
    function AdministartorComponent() {
    }
    AdministartorComponent.prototype.ngOnInit = function () {
    };
    AdministartorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administartor',
            template: __webpack_require__(/*! ./administartor.component.html */ "./src/app/administartor/administartor.component.html"),
            styles: [__webpack_require__(/*! ./administartor.component.css */ "./src/app/administartor/administartor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdministartorComponent);
    return AdministartorComponent;
}());



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
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _administartor_administartor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administartor/administartor.component */ "./src/app/administartor/administartor.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_0__["ServicesComponent"]
    },
    {
        path: 'admin',
        component: _administartor_administartor_component__WEBPACK_IMPORTED_MODULE_1__["AdministartorComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Navigation -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-red fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">Maid Portal</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"\">\n              Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"about\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"services\">Services</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"admin\">Admin</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- Footer -->\n  <footer class=\"py-5 bg-dark\">\n    <div class=\"container\">\n      <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2017</p>\n    </div>\n    <!-- /.container -->\n  </footer>\n\n"

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
        this.title = 'maidsite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _administartor_administartor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administartor/administartor.component */ "./src/app/administartor/administartor.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _administartor_administartor_component__WEBPACK_IMPORTED_MODULE_6__["AdministartorComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    min-height: 560px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <!-- Page Content -->\n\n <div class=\"row\">\n  <div class=\"col-lg-3\">\n    <div style=\"padding:10px;\">\n      <img src=\"/assets/img/logo.png\" />\n    </div>\n    <div class=\"list-group\">\n      <a href=\"#\" class=\"list-group-item\">All Maids</a>\n      <a href=\"#\" class=\"list-group-item\">Indian Maids</a>\n      <a href=\"#\" class=\"list-group-item\">Philip Maids</a>\n      <a href=\"#\" class=\"list-group-item\">Ex-Singapore Maids</a>\n      <a href=\"#\" class=\"list-group-item\">New Maids</a>\n    </div>\n  </div>\n  <!-- /.col-lg-3 -->\n  <div class=\"col-lg-9\">\n  <!--  <div id=\"carouselExampleIndicators\" class=\"carousel slide my-4\" data-ride=\"carousel\">\n      <ui-carousel [infinite]=\"true\" [fade]=\"true\" [speed]=\"500\" height=\"300px\" width=\"850px\">\n        <ui-carousel-item>\n          <img src=\"./assets/img/slide1.png\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n        <ui-carousel-item>\n          <img src=\"../assets/img/slide2.png\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n        <ui-carousel-item>\n          <img src=\"./assets/img/slide3.png\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n      </ui-carousel>\n     </div>-->\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a href=\"#\">Philp Maid - Exp(6)</a>\n            </h5>\n            <h6>Age - 25</h6>\n            <h6>Nationality - Myanmar</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"pull-right\">\n              <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a href=\"#\">Philp Maid - Exp(3)</a>\n            </h5>\n            <h6>Age - 25</h6>\n            <h6>Nationality - Myanmar</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"pull-right\">\n              <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a href=\"#\">Philp Maid - Exp(4)</a>\n            </h5>\n            <h6>Age - 25</h6>\n            <h6>Nationality - Myanmar</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"pull-right\">\n              <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a href=\"#\">Philp Maid - Exp(0)</a>\n            </h5>\n            <h6>Age - 25</h6>\n            <h6>Nationality - Myanmar</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"pull-right\">\n              <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a href=\"#\">Philp Maid - Exp(2)</a>\n            </h5>\n            <h6>Age - 25</h6>\n            <h6>Nationality - Myanmar</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"pull-right\">\n              <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a href=\"#\">Philp Maid - Exp(1)</a>\n            </h5>\n            <h6>Age - 25</h6>\n            <h6>Nationality - Myanmar</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"pull-right\">\n              <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.col-lg-9 -->\n</div>\n<!-- /.row -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    min-height: 560px;\r\n}"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n          <h3>Services component</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MAID\maidsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map