import {Injectable} from '@angular/core';

@Injectable()
export class VoteService {

    downVote(topicId: string): void {

    }

    upVote(topicId: string): void {

    }
}

export var VOTE_PROVIDERS: Array<any> = [
    {provide: VoteService, useClass: VoteService}
];