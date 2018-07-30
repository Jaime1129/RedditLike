import { Component, OnInit, EventEmitter } from '@angular/core';
import { VoteService } from '../services/VoteService';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  inputs: ['topic'],
  host: {
    class: 'row card'
  }
})
export class TopicComponent implements OnInit {
  topic: any;
  update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private voteService: VoteService) {

  }

  upvote() {
    this.voteService.voteById(this.topic.id, true);
    this.update.next(true);
  }

  downvote() {
    this.voteService.voteById(this.topic.id, false);
    this.update.next(true);
  }

  ngOnInit() {
  }

}
