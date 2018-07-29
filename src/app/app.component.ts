import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Topic } from './components/topic.model';
import { RedditService } from './services/RedditService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  topics: Object;
  
  // form for creating new topic 
  titleControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255)
  ]);

  topicForm: FormGroup = this.builder.group({
    titleControl : this.titleControl
  });

  constructor(
    private builder: FormBuilder, 
    private redditService: RedditService ) {

  }
  
  // sorted by number of likes and only list top 20 topics
  updateTopics(update?: boolean): void {    
  //   let sortedtopics: topic[] = this.topics.sort((a: topic, b: topic) => b.likes-a.likes);
  //   if (sortedtopics.length <= 20) {  
  //     return sortedtopics;
  //   } else {
  //     return sortedtopics.slice(0, 20);
  //   }
    this.topics = null;
    let results: any = this.redditService.getTopics();
    if (results) {
      this.topics = results;
    }
  }

  // add a topic
  addTopic(form: any): void {
    this.redditService.newTopic(form.titleControl);    
    console.log(`Successfully add a topic:`, form.titleControl);
    // Refresh topic list
    this.updateTopics();
  }

  // Render the topic list when initializing this component
  ngOnInit(): void {
    this.updateTopics();
  }
}
