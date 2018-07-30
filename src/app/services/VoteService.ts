import {Injectable, Inject} from '@angular/core';
import { API_URL } from './RedditService';
import { Http, Response } from '@angular/http';

@Injectable()
export class VoteService {

    constructor(
        @Inject(API_URL) private url: string,
        private http: Http
    ){}

    voteById(topicId: number, type: boolean): boolean {
        let status: boolean;
        let adjust: number = type?1:-1;
        this.http.get(`${this.url}/votes?id=${topicId}&type=${adjust}`)
            .subscribe((res: Response) => {
                status = <any>res.json().status;
            });

        return status;
    }
}

export var VOTE_PROVIDERS: Array<any> = [
    {provide: VoteService, useClass: VoteService}
];