System.register(["@angular/core/testing", "@angular/http/testing", "./hello.service", "@angular/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, hello_service_1, http_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            describe("Hello Service", function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [
                            {
                                provide: http_1.Http,
                                useFactory: function (backend, defaultOptions) {
                                    return new http_1.Http(backend, defaultOptions);
                                },
                                deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                            },
                            hello_service_1.HelloService,
                            testing_2.MockBackend,
                            http_1.BaseRequestOptions
                        ]
                    });
                });
                it("call the greet url", testing_1.inject([hello_service_1.HelloService, testing_2.MockBackend], testing_1.fakeAsync(function (helloService, mockBackend) {
                    var name = "Samir Barot";
                    var response;
                    mockBackend.connections.subscribe(function (c) {
                        expect(c.request.url).toBe("/api/hello?name=" + name);
                        c.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: "Hello " + name })));
                    });
                    helloService.greet(name)
                        .subscribe(function (data) {
                        response = data;
                    });
                    testing_1.tick();
                    expect(response).toBe("Hello " + name);
                })));
            });
        }
    }
});
//# sourceMappingURL=hello.service.spec.js.map