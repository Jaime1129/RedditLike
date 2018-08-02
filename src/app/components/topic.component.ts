import { Component, OnInit, EventEmitter } from '@angular/core';
import { VoteService } from '../services/VoteService';
import { Topic } from './topic.model';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  inputs: ['topic'],
  outputs: ['update'],
  host: {
    class: 'row card'
  }
})
export class TopicComponent implements OnInit {
  topic: Topic;
  update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private voteService: VoteService) {

  }

  upvote() {
    this.voteService.voteById(this.topic.id, true).subscribe(res => {
      this.update.next(true);
      console.log(`votes of ${this.topic.id} + 1`);
    });
  }

  downvote() {
    this.voteService.voteById(this.topic.id, false).subscribe(res => {
      this.update.next(true);
      console.log(`votes of ${this.topic.id} - 1`);
    });
  }

  ngOnInit() {
  }

}
