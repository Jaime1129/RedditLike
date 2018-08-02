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
var RedditService_1 = require("./RedditService");
var http_1 = require("@angular/http");
var VoteService = /** @class */ (function () {
    function VoteService(url, http) {
        this.url = url;
        this.http = http;
    }
    VoteService.prototype.voteById = function (topicId, type) {
        var status;
        var adjust = type ? 1 : -1;
        this.http.get(this.url + "/votes?id=" + topicId + "&type=" + adjust)
            .subscribe(function (res) {
            status = res.json().status;
        });
        return status;
    };
    VoteService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(RedditService_1.API_URL)),
        __metadata("design:paramtypes", [String, http_1.Http])
    ], VoteService);
    return VoteService;
}());
exports.VoteService = VoteService;
exports.VOTE_PROVIDERS = [
    { provide: VoteService, useClass: VoteService }
];
//# sourceMappingURL=VoteService.js.map