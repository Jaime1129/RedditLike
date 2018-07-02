import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  host: {
    class: 'row'
  }
})
export class TopicComponent implements OnInit {

  title: string; // less than 255 characters
  likes: number; // upvotes minus downvotes


  constructor() {
    this.title = 'RedditTopic';
    this.likes = 0;
   }

  upvote() {
    this.likes++;
  }

  downvote() {
    this.likes--;
  }

  ngOnInit() {
  }

}
