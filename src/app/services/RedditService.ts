import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../components/topic.model';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

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
    newTopic(tt: string): boolean {
        let status: boolean = false;
        this.http.post(
            `${this.apiUrl}/newtopic`,
            JSON.stringify({
                title : tt
            })
        ).subscribe(
            (res: Response) => {
                status = (<any>res.json()).status;
            }
        );
        
        return status;
    } 

    // Request the sorted topic list (including top 20 topics) from server
    getTopics(): Observable <Topic[]> {
        return this.http.get(`${this.apiUrl}/topics`)
            .pipe(map((res: Response) => {
                return (<any>res.json()).items.map(item => {
                    return new Topic(item.id, item.title, item.votes);
                });
            }));
            
    }
}

export var REDDIT_PROVIDERS: Array<any> = [
    {provide: RedditService, useClass: RedditService}
];