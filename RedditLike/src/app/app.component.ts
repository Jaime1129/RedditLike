import { Component } from '@angular/core';
import { Topic } from './topic/topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics: Topic[];

  constructor() {
    this.topics = [];
    for(let i = 1; i < 25; i ++) {
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
  addTopic(title: HTMLInputElement): boolean {
    console.log(`Successfully add a topic: ${title.value}`);
    this.topics.push(new Topic(title.value, 0));
    return false;
  }
}
