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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hlbGxvLnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0EsUUFBUSxDQUFDLGVBQWUsRUFDcEI7Z0JBQ0ksVUFBVSxDQUFDO29CQUNQLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7d0JBQzNCLFNBQVMsRUFBRTs0QkFDUDtnQ0FDSSxPQUFPLEVBQUUsV0FBSTtnQ0FDYixVQUFVLEVBQUUsVUFBQyxPQUEwQixFQUFFLGNBQWtDO29DQUN2RSxNQUFNLENBQUMsSUFBSSxXQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dDQUM3QyxDQUFDO2dDQUNELElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLENBQUM7NkJBQzFDOzRCQUNELDRCQUFZOzRCQUNaLHFCQUFXOzRCQUNYLHlCQUFrQjt5QkFDckI7cUJBQ0osQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFDbkIsZ0JBQU0sQ0FBQyxDQUFDLDRCQUFZLEVBQUUscUJBQVcsQ0FBQyxFQUFFLG1CQUFTLENBQUMsVUFBQyxZQUEwQixFQUFFLFdBQXdCO29CQUMvRixJQUFNLElBQUksR0FBRyxhQUFhLENBQUM7b0JBQzNCLElBQUksUUFBZ0IsQ0FBQztvQkFFckIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO3dCQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQW1CLElBQU0sQ0FBQyxDQUFDO3dCQUN0RCxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksZUFBUSxDQUFDLElBQUksc0JBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFTLElBQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRixDQUFDLENBQUMsQ0FBQztvQkFFSCxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt5QkFDbkIsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNwQixDQUFDLENBQUMsQ0FBQztvQkFFUCxjQUFJLEVBQUUsQ0FBQztvQkFDUCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVMsSUFBTSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDLENBQ0osQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9Ib21lL2hlbGxvLnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGZha2VBc3luYywgaW5qZWN0LCB0aWNrIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvdGVzdGluZ1wiO1xyXG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gXCJAYW5ndWxhci9odHRwL3Rlc3RpbmdcIjtcclxuaW1wb3J0IHsgSGVsbG9TZXJ2aWNlIH0gZnJvbSBcIi4vaGVsbG8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBDb25uZWN0aW9uQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zLCBSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmRlc2NyaWJlKFwiSGVsbG8gU2VydmljZVwiLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIGRlZmF1bHRPcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHM6IFtNb2NrQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgSGVsbG9TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIE1vY2tCYWNrZW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJjYWxsIHRoZSBncmVldCB1cmxcIixcclxuICAgICAgICAgICAgaW5qZWN0KFtIZWxsb1NlcnZpY2UsIE1vY2tCYWNrZW5kXSwgZmFrZUFzeW5jKChoZWxsb1NlcnZpY2U6IEhlbGxvU2VydmljZSwgbW9ja0JhY2tlbmQ6IE1vY2tCYWNrZW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gXCJTYW1pciBCYXJvdFwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9ja0JhY2tlbmQuY29ubmVjdGlvbnMuc3Vic2NyaWJlKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChjLnJlcXVlc3QudXJsKS50b0JlKGAvYXBpL2hlbGxvP25hbWU9JHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGMubW9ja1Jlc3BvbmQobmV3IFJlc3BvbnNlKG5ldyBSZXNwb25zZU9wdGlvbnMoeyBib2R5OiBgSGVsbG8gJHtuYW1lfWAgfSkpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGhlbGxvU2VydmljZS5ncmVldChuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aWNrKCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzcG9uc2UpLnRvQmUoYEhlbGxvICR7bmFtZX1gKTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICApO1xyXG4gICAgfSk7XHJcbiJdfQ==
