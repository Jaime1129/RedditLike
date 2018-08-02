import {inject, fakeAsync, tick, TestBed} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';


import {RedditService, API_URL} from './RedditService';

describe('RedditService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [
                BaseRequestOptions,
                MockBackend,
                RedditService,
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, 
                                 defaultOptions: BaseRequestOptions) => {
                                     return new Http(backend, defaultOptions);
                                 }, deps: [MockBackend, BaseRequestOptions]
                },
                {
                    provide: API_URL,
                    useValue: 'http://localhost:8080'
                }
            ]
        });
    });

    describe('newTopic', () => {
        it('retrieves the response containing status',
            inject([RedditService, MockBackend], fakeAsync((svc, mockBackend) => {
                var res;
                mockBackend.connections.subscribe(c => {
                    expect(c.request.url).toBe('http://localhost:8080/newtopic');
                    expect(c.request.json().title).toBe('test');
                    let response = new ResponseOptions({body : '{"status":"true"}'});
                    c.mockRespond(new Response(response));
                });
                svc.newTopic('test').subscribe((_res) => {
                    res = _res;
                });
                tick();
                expect(res).toBe('true');
            }))
        );
    });

    describe('getTopics', () => {
        it('retrieves the response containing topic list', 
            inject([RedditService, MockBackend], fakeAsync((svc, mockBackend) => {
                var res;
                mockBackend.connections.subscribe(c => {
                    expect(c.request.url).toBe('http://localhost:8080/topics');
                    let response = new ResponseOptions({ body: `
                        {
                            "length" : "2",
                            "order" : "desc",
                            "items" : [
                                {
                                    "id" : "1",    
                                    "title" : "hello world",
                                    "votes" : "3"
                                },
                                {
                                    "id" : "2",
                                    "title" : "I like Carousell",
                                    "votes" : "99"
                                }
                            ]
                        }
                    `});
                    c.mockRespond(new Response(response));
                });
                svc.getTopics().subscribe((_res) => {
                    res = _res;
                });
                tick();
                expect(res.length).toBe(2);
                expect(res[0].id).toBe(1);
                expect(res[0].votes).toBe(3);
                expect(res[0].title).toBe('hello world');
            }))
        )
    });
});