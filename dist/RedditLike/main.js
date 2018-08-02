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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding-right: 15px;\n    padding-left: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-top: 10px; \n}\n\n.self-intro {\n    height: auto;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\n  <h1>RedditLike</h1>\n  <p>This is for coding challenge</p> \n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 \">\n      <div class=\"card self-intro\">\n        <p class=\"card-title\" style=\"text-align: center\">It is not enough to do your best: you must know what to do, and <b>THEN</b> do your best.</p> \n        <p style=\"text-align:right\">-- W. Edwards Deming</p>\n        <p class=\"card-text\"></p>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"row card\">\n          <h3 class=\"card-title\">Add a Topic</h3>\n          <form role=\"form\" [formGroup]=\"topicForm\" (ngSubmit)=\"addTopic(topicForm.value)\">           \n            <div class=\"form-group\">\n              <div>\n                <label for=\"title\">Title:</label>\n                <input type=\"text\" class=\"form-control\" id=\"title\" [formControl]=\"titleControl\"\n                  placeholder=\"Please enter the title\">\n                <div [hidden]=\"titleControl.valid || titleControl.untouched\">\n            \n                  <div [hidden]=\"!titleControl.hasError('maxlength')\">\n                    Title can not be longer than 255 characters.\n                  </div>\n                  <div [hidden]=\"!titleControl.hasError('required')\">\n                    Title is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!topicForm.valid\">\n              Submit\n            </button>\n          </form>\n      </div>\n      \n      <!-- Topic list -->\n      <div> \n        <topic *ngFor=\"let topic of topics\" [topic]=\"topic\" (update)=\"updateTopics($event)\">\n          Topic List is Loading..\n        </topic>\n      </div>  \n\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_RedditService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/RedditService */ "./src/app/services/RedditService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(builder, redditService) {
        this.builder = builder;
        this.redditService = redditService;
        // form for creating new topic 
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)
        ]);
        this.topicForm = this.builder.group({
            titleControl: this.titleControl
        });
    }
    // sorted by number of likes and only list top 20 topics
    AppComponent.prototype.updateTopics = function (update) {
        var _this = this;
        //   let sortedtopics: topic[] = this.topics.sort((a: topic, b: topic) => b.likes-a.likes);
        //   if (sortedtopics.length <= 20) {  
        //     return sortedtopics;
        //   } else {
        //     return sortedtopics.slice(0, 20);
        //   }
        this.topics = null;
        this.redditService.getTopics()
            .subscribe(function (res) {
            console.log("topics: ", res);
            if (res && res.length > 0) {
                _this.topics = res;
            }
        });
    };
    // add a topic
    AppComponent.prototype.addTopic = function (form) {
        var _this = this;
        this.redditService.newTopic(form.titleControl).subscribe(function (res) {
            console.log("Successfully add a topic:", form.titleControl);
            // Refresh topic list
            _this.updateTopics();
        });
    };
    // Query the topic list when initializing this component
    AppComponent.prototype.ngOnInit = function () {
        this.updateTopics();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_RedditService__WEBPACK_IMPORTED_MODULE_2__["RedditService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/topic.component */ "./src/app/components/topic.component.ts");
/* harmony import */ var _services_RedditService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/RedditService */ "./src/app/services/RedditService.ts");
/* harmony import */ var _services_VoteService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/VoteService */ "./src/app/services/VoteService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Angular
 */





/**
 * Components
 */


/**
 * Services
 */


/**
 * Value of url is determined by whether it's under production environment
 */
var isProduction = false;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_topic_component__WEBPACK_IMPORTED_MODULE_6__["TopicComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [
                _services_RedditService__WEBPACK_IMPORTED_MODULE_7__["REDDIT_PROVIDERS"],
                _services_VoteService__WEBPACK_IMPORTED_MODULE_8__["VOTE_PROVIDERS"],
                {
                    provide: _services_RedditService__WEBPACK_IMPORTED_MODULE_7__["API_URL"],
                    useValue: isProduction ?
                        "https://" :
                        "http://localhost:8080"
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/topic.component.css":
/*!************************************************!*\
  !*** ./src/app/components/topic.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upvote {\n    color: white;\n    background-color: #CC6666;\n    border-color: black;\n    border: 1px;\n    margin-right: 2px;\n}\n\n.downvote {\n    color: white;\n    background-color: #B8B8B8;\n    border-color: black;\n    border: 1px;\n    margin-right: 2px;\n}"

/***/ }),

/***/ "./src/app/components/topic.component.html":
/*!*************************************************!*\
  !*** ./src/app/components/topic.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"card-title\"> {{ topic.title }} </h3>\n  <p> {{ topic.votes }} likes this topic</p>\n  <div>\n    <button type=\"button\" class=\"btn upvote\" (click)=\"upvote()\">\n      <span class=\"glyphicon glyphicon-arrow-up\">upvote</span>\n    </button>\n    <button type=\"button\" class=\"btn downvote\" (click)=\"downvote()\">\n      <span class=\"glyphicon glyphicon-arrow-down\">downvote</span>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/topic.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/topic.component.ts ***!
  \***********************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_VoteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/VoteService */ "./src/app/services/VoteService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicComponent = /** @class */ (function () {
    function TopicComponent(voteService) {
        this.voteService = voteService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TopicComponent.prototype.upvote = function () {
        var _this = this;
        this.voteService.voteById(this.topic.id, true).subscribe(function (res) {
            _this.update.next(true);
            console.log("votes of " + _this.topic.id + " + 1");
        });
    };
    TopicComponent.prototype.downvote = function () {
        var _this = this;
        this.voteService.voteById(this.topic.id, false).subscribe(function (res) {
            _this.update.next(true);
            console.log("votes of " + _this.topic.id + " - 1");
        });
    };
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'topic',
            template: __webpack_require__(/*! ./topic.component.html */ "./src/app/components/topic.component.html"),
            styles: [__webpack_require__(/*! ./topic.component.css */ "./src/app/components/topic.component.css")],
            inputs: ['topic'],
            outputs: ['update'],
            host: {
                class: 'row card'
            }
        }),
        __metadata("design:paramtypes", [_services_VoteService__WEBPACK_IMPORTED_MODULE_1__["VoteService"]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "./src/app/components/topic.model.ts":
/*!*******************************************!*\
  !*** ./src/app/components/topic.model.ts ***!
  \*******************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic(id, title, votes) {
        this.id = id;
        this.title = title;
        this.votes = votes;
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/services/RedditService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/RedditService.ts ***!
  \*******************************************/
/*! exports provided: API_URL, RedditService, REDDIT_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditService", function() { return RedditService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDDIT_PROVIDERS", function() { return REDDIT_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_topic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/topic.model */ "./src/app/components/topic.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// Value of url will be injected in app.module
var API_URL = 'API_URL';
var RedditService = /** @class */ (function () {
    function RedditService(apiUrl, http) {
        this.apiUrl = apiUrl;
        this.http = http;
    }
    // Send titile as parameter to server to create a new topic
    RedditService.prototype.newTopic = function (tt) {
        console.log(tt);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var opts = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(this.apiUrl + "/newtopic", JSON.stringify({
            title: tt
        }), opts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json().status;
        }));
    };
    // Request the sorted topic list (including top 20 topics) from server
    RedditService.prototype.getTopics = function () {
        return this.http.get(this.apiUrl + "/topics")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json().items.map(function (item) {
                console.log("item : ", item);
                return new _components_topic_model__WEBPACK_IMPORTED_MODULE_1__["Topic"](Number(item.id), item.title, Number(item.votes));
            });
        }));
    };
    RedditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(API_URL)),
        __metadata("design:paramtypes", [String, _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], RedditService);
    return RedditService;
}());

var REDDIT_PROVIDERS = [
    { provide: RedditService, useClass: RedditService }
];


/***/ }),

/***/ "./src/app/services/VoteService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/VoteService.ts ***!
  \*****************************************/
/*! exports provided: VoteService, VOTE_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_PROVIDERS", function() { return VOTE_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _RedditService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedditService */ "./src/app/services/RedditService.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var VoteService = /** @class */ (function () {
    function VoteService(url, http) {
        this.url = url;
        this.http = http;
    }
    VoteService.prototype.voteById = function (topicId, type) {
        var adjust = type ? 1 : -1;
        return this.http.get(this.url + "/votes?id=" + topicId + "&type=" + adjust)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json().status;
        }));
    };
    VoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_RedditService__WEBPACK_IMPORTED_MODULE_1__["API_URL"])),
        __metadata("design:paramtypes", [String, _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], VoteService);
    return VoteService;
}());

var VOTE_PROVIDERS = [
    { provide: VoteService, useClass: VoteService }
];


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

module.exports = __webpack_require__(/*! /Users/MyCrown/Workspaces/github/RedditLike/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map