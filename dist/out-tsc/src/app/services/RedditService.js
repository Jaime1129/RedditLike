"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var topic_model_1 = require("../components/topic.model");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
// Value of url will be injected in app.module
exports.API_URL = 'API_URL';
var RedditService = /** @class */ (function () {
    function RedditService(apiUrl, http) {
        this.apiUrl = apiUrl;
        this.http = http;
    }
    // Send titile as parameter to server to create a new topic
    RedditService.prototype.newTopic = function (tt) {
        var status = false;
        this.http.post(this.apiUrl + "/newtopic", JSON.stringify({
            title: tt
        })).subscribe(function (res) {
            status = res.json().status;
        });
        return status;
    };
    // Request the sorted topic list (including top 20 topics) from server
    RedditService.prototype.getTopics = function () {
        return this.http.get(this.apiUrl + "/topics")
            .pipe(operators_1.map(function (res) {
            return res.json().items.map(function (item) {
                return new topic_model_1.Topic(item.id, item.title, item.votes);
            });
        }));
    };
    RedditService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(exports.API_URL)),
        __metadata("design:paramtypes", [String, http_1.Http])
    ], RedditService);
    return RedditService;
}());
exports.RedditService = RedditService;
exports.REDDIT_PROVIDERS = [
    { provide: RedditService, useClass: RedditService }
];
//# sourceMappingURL=RedditService.js.map