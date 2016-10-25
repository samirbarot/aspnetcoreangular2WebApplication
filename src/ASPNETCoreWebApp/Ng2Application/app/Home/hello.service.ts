import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { Headers, RequestOptions } from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class HelloService {

    private url = "http://localhost:57386/api/hello/";
    // private headers: Headers;

    constructor(private http: Http) {

    }

    greet(name: string): Observable<string> {
        return this.http
            .get(`/api/hello?name=${name}`)
            .map(res => {
                return res.text() as string;
            });
    }

    greetcore(name: string): Observable<string> {

        //this.headers = new Headers();
        //this.headers.append("Content-Type", "application/json");
        //this.headers.append("Access-Control-Allow-Origin", "*");

        // const headers = new Headers({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
        const headers = new Headers({ "Content-Type": "application/json" });
        const options = new RequestOptions({ headers: headers });

        return (this.http.get(this.url + JSON.stringify(name), options)
            .map(res => { return res.text() as string; }));

        //return (this.http.get(this.url + JSON.stringify(name), { headers: this.headers })
        //    .map(res => { return res.text() as string; }));
    }
}
