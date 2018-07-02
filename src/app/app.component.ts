import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Topic } from './topic/topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics: Topic[];
  
  // form for creating new topic 
  titleControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255)
  ]);

  topicForm: FormGroup = this.builder.group({
    titleControl : this.titleControl
  });

  constructor(private builder: FormBuilder) {
    this.topics = [];
    for(let i = 1; i < 10; i ++) {
      this.topics.push(new Topic('Topic'+i, 0));
    }
  }
  
  // sorted by number of likes and only list top 20 topics
  topiclist(): Topic[] {    
    let sortedTopics: Topic[] = this.topics.sort((a: Topic, b: Topic) => b.likes-a.likes);
    if (sortedTopics.length <= 20) {  
      return sortedTopics;
    } else {
      return sortedTopics.slice(0, 20);
    }
  }

  // add a topic
  addTopic(form: any): void {

    console.log(`Successfully add a topic:`, form.titleControl);
    this.topics.push(new Topic(form.titleControl, 0));
    
  }
}
