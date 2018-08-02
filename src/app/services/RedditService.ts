import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../components/topic.model';
import { map } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Value of url will be injected in app.module
export const API_URL:string = 'API_URL';


@Injectable()
export class RedditService {

    constructor(
        @Inject(API_URL) private apiUrl: string,
        private http : Http
    ) {
        
    }

    // Send titile as parameter to server to create a new topic
    newTopic(tt: string): Observable<boolean> {
        console.log(tt);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let opts = new RequestOptions({headers: headers});
        return this.http.post(
            `${this.apiUrl}/newtopic`,
            JSON.stringify({
                title : tt
            }), opts
        ).pipe(map((res: Response) => {
            return <any>res.json().status;
        }));
    } 

    // Request the sorted topic list (including top 20 topics) from server
    getTopics(): Observable <Topic[]> {
        return this.http.get(`${this.apiUrl}/topics`)
            .pipe(map((res: Response) => {
                return (<any>res.json()).items.map(item => {
                    console.log("item : ", item);
                    return new Topic(Number(item.id), item.title, Number(item.votes));
                });
            }));
    }
}

export var REDDIT_PROVIDERS: Array<any> = [
    {provide: RedditService, useClass: RedditService}
];