import { Component } from "@angular/core";
import {HelloService} from "./hello.service";

@Component({
    template: `
        <my-nav></my-nav>
        <h1>Greeting test</h1>
        <p id="greeting">{{greeting}}</p>
    `
})
export class HomeComponent {

    private errorMessage: string;

    constructor(private helloService: HelloService) {
    }

    ngOnInit() {
        this.greet("Samir Barot");
    }

    greeting: string;

    greet(name: string): void {
        this.helloService
            //.greet(name) // For Testing
            .greetcore(name) // For Running App
            .subscribe(data => this.greeting = data, error => this.errorMessage = error);
    }
}
