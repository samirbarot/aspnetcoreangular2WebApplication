import { Observable } from "rxjs/Rx";
import { TestBed, async } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { HelloService } from "./hello.service";
import { NavComponent } from "../Shared/nav.component";

describe("Hello Component",
    () => {

        const greet = "Hello Samir Barot";
        let helloService: { greet };

        beforeEach(() => {

            helloService = {
                greet: jasmine.createSpy("greet").and.returnValue(Observable.of(greet))
            };

            TestBed.configureTestingModule({
                declarations: [HomeComponent, NavComponent],
                providers: [ 
                    {
                        provide: HelloService,
                        useValue: helloService
                    },
                    HomeComponent
                ]
            });
        });

        it("can initialize",
            async(() => {
                    TestBed.compileComponents()
                        .then(() => {
                            const fixture = TestBed.createComponent(HomeComponent);
                            const element = fixture.nativeElement;
                            const component = element.componentInstance;

                            fixture.detectChanges();

                            expect(element).not.toBeNull();
                            expect(component).not.toBeNull();

                            expect(helloService.greet).toHaveBeenCalled();

                            const header = element.querySelector("h1");
                            expect(header).not.toBeNull();
                            expect(header.textContent).not.toBeNull("Greeting test");

                            const greeting = element.querySelector("#greeting");
                            expect(greeting).not.toBeNull();
                            expect(greeting.textContent).toBe(greet);
                        });
                })
            );
    });