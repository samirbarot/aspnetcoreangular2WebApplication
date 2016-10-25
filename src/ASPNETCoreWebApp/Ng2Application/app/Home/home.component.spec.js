System.register(["rxjs/Rx", "@angular/core/testing", "./home.component", "./hello.service", "../Shared/nav.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, testing_1, home_component_1, hello_service_1, nav_component_1;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            }],
        execute: function() {
            describe("Hello Component", function () {
                var greet = "Hello Samir Barot";
                var helloService;
                beforeEach(function () {
                    helloService = {
                        greet: jasmine.createSpy("greet").and.returnValue(Rx_1.Observable.of(greet))
                    };
                    testing_1.TestBed.configureTestingModule({
                        declarations: [home_component_1.HomeComponent, nav_component_1.NavComponent],
                        providers: [
                            {
                                provide: hello_service_1.HelloService,
                                useValue: helloService
                            },
                            home_component_1.HomeComponent
                        ]
                    });
                });
                it("can initialize", testing_1.async(function () {
                    testing_1.TestBed.compileComponents()
                        .then(function () {
                        var fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
                        var element = fixture.nativeElement;
                        var component = element.componentInstance;
                        fixture.detectChanges();
                        expect(element).not.toBeNull();
                        expect(component).not.toBeNull();
                        expect(helloService.greet).toHaveBeenCalled();
                        var header = element.querySelector("h1");
                        expect(header).not.toBeNull();
                        expect(header.textContent).not.toBeNull("Greeting test");
                        var greeting = element.querySelector("#greeting");
                        expect(greeting).not.toBeNull();
                        expect(greeting.textContent).toBe(greet);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=home.component.spec.js.map