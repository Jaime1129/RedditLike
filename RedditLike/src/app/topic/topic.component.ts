import { Component, OnInit, Input } from '@angular/core';
import { Topic } from './topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  host: {
    class: 'row'
  }
})
export class TopicComponent implements OnInit {

  @Input() topic: Topic;

  upvote() {
    this.topic.likes++;
  }

  downvote() {
    this.topic.likes--;
  }

  ngOnInit() {
  }

}
