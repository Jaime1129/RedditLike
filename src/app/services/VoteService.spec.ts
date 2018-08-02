import {inject, fakeAsync, tick, TestBed} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import { VoteService } from './VoteService';
import { API_URL } from './RedditService';

describe('VoteService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                VoteService,
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
        })
    });

    describe('voteById', () => {
        it('retrieves the response containing status',
        inject([VoteService, MockBackend], fakeAsync((svc, mockbackend) => {
            var res;
            mockbackend.connections.subscribe(c => {
                expect(c.request.url).toBe('http://localhost:8080/votes?id=1&type=1');
                let response = new ResponseOptions({body: '{"status":"true"}'});
                c.mockRespond(new Response(response));
            });
            svc.voteById(1,true).subscribe((_res) => {
                res = _res;
            });
            tick();
            expect(res).toBe('true');
        })))
    })
});