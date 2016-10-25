System.register(["@angular/core", "./hello.service"], function(exports_1, context_1) {
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
    var core_1, hello_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(helloService) {
                    this.helloService = helloService;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.greet("Samir Barot");
                };
                HomeComponent.prototype.greet = function (name) {
                    var _this = this;
                    this.helloService
                        .greet(name) // For Testing
                        .subscribe(function (data) { return _this.greeting = data; }, function (error) { return _this.errorMessage = error; });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        template: "\n        <my-nav></my-nav>\n        <h1>Greeting test</h1>\n        <p id=\"greeting\">{{greeting}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof hello_service_1.HelloService !== 'undefined' && hello_service_1.HelloService) === 'function' && _a) || Object])
                ], HomeComponent);
                return HomeComponent;
                var _a;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBSUksdUJBQW9CLFlBQTBCO29CQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFDOUMsQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBSUQsNkJBQUssR0FBTCxVQUFNLElBQVk7b0JBQWxCLGlCQUtDO29CQUpHLElBQUksQ0FBQyxZQUFZO3lCQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjO3lCQUUxQixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBcEIsQ0FBb0IsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUF6QixDQUF5QixDQUFDLENBQUM7Z0JBQ3JGLENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdIQUlUO3FCQUNKLENBQUM7O2lDQUFBO2dCQW9CRixvQkFBQzs7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHlDQW1CQyxDQUFBIiwiZmlsZSI6ImFwcC9Ib21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIZWxsb1NlcnZpY2V9IGZyb20gXCIuL2hlbGxvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bXktbmF2PjwvbXktbmF2PlxyXG4gICAgICAgIDxoMT5HcmVldGluZyB0ZXN0PC9oMT5cclxuICAgICAgICA8cCBpZD1cImdyZWV0aW5nXCI+e3tncmVldGluZ319PC9wPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbGxvU2VydmljZTogSGVsbG9TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ncmVldChcIlNhbWlyIEJhcm90XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdyZWV0aW5nOiBzdHJpbmc7XHJcblxyXG4gICAgZ3JlZXQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWxsb1NlcnZpY2VcclxuICAgICAgICAgICAgLmdyZWV0KG5hbWUpIC8vIEZvciBUZXN0aW5nXHJcbiAgICAgICAgICAgIC8vLmdyZWV0Y29yZShuYW1lKSAvLyBGb3IgUnVubmluZyBBcHBcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZ3JlZXRpbmcgPSBkYXRhLCBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=
