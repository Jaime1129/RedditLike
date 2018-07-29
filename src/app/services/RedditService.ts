import {Injectable} from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

// Value of url will be injected in app.module
export const API_URL:string = 'API_URL';

@Injectable()
export class RedditService {

    constructor() {

    }

    // Send titile as parameter to server to create a new topic
    newTopic(title: string): void {

    } 

    // Request the sorted topic list (including top 20 topics) from server
    getTopics(): Observable <any[]> {
        
        return null;
    }
}

export var REDDIT_PROVIDERS: Array<any> = [
    {provide: RedditService, useClass: RedditService}
];