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
    this.voteService.upVote(this.topic.id);
    this.update.next(true);
  }

  downvote() {
    this.voteService.downVote(this.topic.id);
    this.update.next(true);
  }

  ngOnInit() {
  }

}
