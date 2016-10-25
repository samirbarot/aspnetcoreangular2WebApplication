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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLFFBQVEsQ0FBQyxpQkFBaUIsRUFDdEI7Z0JBRUksSUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ2xDLElBQUksWUFBdUIsQ0FBQztnQkFFNUIsVUFBVSxDQUFDO29CQUVQLFlBQVksR0FBRzt3QkFDWCxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzFFLENBQUM7b0JBRUYsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDM0IsWUFBWSxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxDQUFDO3dCQUMzQyxTQUFTLEVBQUU7NEJBQ1A7Z0NBQ0ksT0FBTyxFQUFFLDRCQUFZO2dDQUNyQixRQUFRLEVBQUUsWUFBWTs2QkFDekI7NEJBQ0QsOEJBQWE7eUJBQ2hCO3FCQUNKLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQ2YsZUFBSyxDQUFDO29CQUNFLGlCQUFPLENBQUMsaUJBQWlCLEVBQUU7eUJBQ3RCLElBQUksQ0FBQzt3QkFDRixJQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw4QkFBYSxDQUFDLENBQUM7d0JBQ3ZELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQ3RDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQzt3QkFFNUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUV4QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUVqQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7d0JBRTlDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFFekQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUMsQ0FBQyxDQUNMLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvSG9tZS9ob21lLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFRlc3RCZWQsIGFzeW5jIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvdGVzdGluZ1wiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGVsbG9TZXJ2aWNlIH0gZnJvbSBcIi4vaGVsbG8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tIFwiLi4vU2hhcmVkL25hdi5jb21wb25lbnRcIjtcclxuXHJcbmRlc2NyaWJlKFwiSGVsbG8gQ29tcG9uZW50XCIsXHJcbiAgICAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyZWV0ID0gXCJIZWxsbyBTYW1pciBCYXJvdFwiO1xyXG4gICAgICAgIGxldCBoZWxsb1NlcnZpY2U6IHsgZ3JlZXQgfTtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBoZWxsb1NlcnZpY2UgPSB7XHJcbiAgICAgICAgICAgICAgICBncmVldDogamFzbWluZS5jcmVhdGVTcHkoXCJncmVldFwiKS5hbmQucmV0dXJuVmFsdWUoT2JzZXJ2YWJsZS5vZihncmVldCkpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xyXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudCwgTmF2Q29tcG9uZW50XSxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogWyBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEhlbGxvU2VydmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGhlbGxvU2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJjYW4gaW5pdGlhbGl6ZVwiLFxyXG4gICAgICAgICAgICBhc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChIb21lQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmaXh0dXJlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50LmNvbXBvbmVudEluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChlbGVtZW50KS5ub3QudG9CZU51bGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChjb21wb25lbnQpLm5vdC50b0JlTnVsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChoZWxsb1NlcnZpY2UuZ3JlZXQpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChoZWFkZXIpLm5vdC50b0JlTnVsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGhlYWRlci50ZXh0Q29udGVudCkubm90LnRvQmVOdWxsKFwiR3JlZXRpbmcgdGVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVldGluZyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmVldGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChncmVldGluZykubm90LnRvQmVOdWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoZ3JlZXRpbmcudGV4dENvbnRlbnQpLnRvQmUoZ3JlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9KTsiXX0=
