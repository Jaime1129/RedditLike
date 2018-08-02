import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import { API_URL } from './RedditService';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class VoteService {

    constructor(
        @Inject(API_URL) private url: string,
        private http: Http
    ){}

    voteById(topicId: number, type: boolean): Observable<boolean> {
        let adjust: number = type?1:-1;
        return this.http.get(`${this.url}/votes?id=${topicId}&type=${adjust}`)
            .pipe(map((res: Response) => {
                return <any>res.json().status;
            }));
    }
}

export var VOTE_PROVIDERS: Array<any> = [
    {provide: VoteService, useClass: VoteService}
];