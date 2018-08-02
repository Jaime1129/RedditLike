"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var topic_component_1 = require("./topic.component");
var topic_model_1 = require("./topic.model");
describe('TopicComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [topic_component_1.TopicComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(topic_component_1.TopicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.topic = new topic_model_1.Topic(1, 'testing', 0);
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    // test downvote()
    it('should decrease the likes by 1', function () {
        component.downvote();
        expect(component.topic.votes).toBe(-1);
    });
    // test upvote()
    it('should increase the likes by 1', function () {
        component.upvote();
        expect(component.topic.votes).toBe(1);
    });
});
//# sourceMappingURL=topic.component.spec.js.map