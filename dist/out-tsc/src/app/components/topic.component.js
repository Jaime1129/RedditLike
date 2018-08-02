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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VoteService_1 = require("../services/VoteService");
var TopicComponent = /** @class */ (function () {
    function TopicComponent(voteService) {
        this.voteService = voteService;
        this.update = new core_1.EventEmitter();
    }
    TopicComponent.prototype.upvote = function () {
        this.voteService.voteById(this.topic.id, true);
        this.update.next(true);
    };
    TopicComponent.prototype.downvote = function () {
        this.voteService.voteById(this.topic.id, false);
        this.update.next(true);
    };
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent = __decorate([
        core_1.Component({
            selector: 'topic',
            templateUrl: './topic.component.html',
            styleUrls: ['./topic.component.css'],
            inputs: ['topic'],
            host: {
                class: 'row card'
            }
        }),
        __metadata("design:paramtypes", [VoteService_1.VoteService])
    ], TopicComponent);
    return TopicComponent;
}());
exports.TopicComponent = TopicComponent;
//# sourceMappingURL=topic.component.js.map