System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var HelloService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HelloService = (function () {
                // private headers: Headers;
                function HelloService(http) {
                    this.http = http;
                    this.url = "http://localhost:57386/api/hello/";
                }
                HelloService.prototype.greet = function (name) {
                    return this.http
                        .get("/api/hello?name=" + name)
                        .map(function (res) {
                        return res.text();
                    });
                };
                HelloService.prototype.greetcore = function (name) {
                    //this.headers = new Headers();
                    //this.headers.append("Content-Type", "application/json");
                    //this.headers.append("Access-Control-Allow-Origin", "*");
                    // const headers = new Headers({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
                    var headers = new http_2.Headers({ "Content-Type": "application/json" });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return (this.http.get(this.url + JSON.stringify(name), options)
                        .map(function (res) { return res.text(); }));
                    //return (this.http.get(this.url + JSON.stringify(name), { headers: this.headers })
                    //    .map(res => { return res.text() as string; }));
                };
                HelloService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HelloService);
                return HelloService;
            }());
            exports_1("HelloService", HelloService);
        }
    }
});
//# sourceMappingURL=hello.service.js.map