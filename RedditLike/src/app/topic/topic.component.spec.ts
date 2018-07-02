import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicComponent } from './topic.component';
import { Topic } from './topic.model';

describe('TopicComponent', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.topic = new Topic('Testing', 0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test downvote()
  it('should decrease the likes by 1', () => {
    component.downvote();
    expect(component.topic.likes).toBe(-1);
  });
  
  // test upvote()
  it('should increase the likes by 1', () => {
    component.upvote();
    expect(component.topic.likes).toBe(1);
  })
});
