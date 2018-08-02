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
var forms_1 = require("@angular/forms");
var RedditService_1 = require("./services/RedditService");
var AppComponent = /** @class */ (function () {
    function AppComponent(builder, redditService) {
        this.builder = builder;
        this.redditService = redditService;
        // form for creating new topic 
        this.titleControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.maxLength(255)
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
            if (res && res.length > 0) {
                _this.topics = res;
            }
        });
    };
    // add a topic
    AppComponent.prototype.addTopic = function (form) {
        this.redditService.newTopic(form.titleControl);
        console.log("Successfully add a topic:", form.titleControl);
        // Refresh topic list
        this.updateTopics();
    };
    // Query the topic list when initializing this component
    AppComponent.prototype.ngOnInit = function () {
        this.updateTopics();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            RedditService_1.RedditService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map