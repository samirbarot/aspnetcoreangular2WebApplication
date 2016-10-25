import { TestBed, fakeAsync, inject, tick } from "@angular/core/testing";
import { MockBackend } from "@angular/http/testing";
import { HelloService } from "./hello.service";
import { Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Response } from "@angular/http";

describe("Hello Service",
    () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: Http,
                        useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backend, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    HelloService,
                    MockBackend,
                    BaseRequestOptions
                ]
            });
        });

        it("call the greet url",
            inject([HelloService, MockBackend], fakeAsync((helloService: HelloService, mockBackend: MockBackend) => {
                const name = "Samir Barot";
                let response: string;

                mockBackend.connections.subscribe(c => {
                    expect(c.request.url).toBe(`/api/hello?name=${name}`);
                    c.mockRespond(new Response(new ResponseOptions({ body: `Hello ${name}` })));
                });

                helloService.greet(name)
                    .subscribe(data => {
                        response = data;
                    });

                tick();
                expect(response).toBe(`Hello ${name}`);
            }))
          );
    });
