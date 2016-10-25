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
                        .greetcore(name) // For Running App
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBSUksdUJBQW9CLFlBQTBCO29CQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFDOUMsQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBSUQsNkJBQUssR0FBTCxVQUFNLElBQVk7b0JBQWxCLGlCQUtDO29CQUpHLElBQUksQ0FBQyxZQUFZO3lCQUVaLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0I7eUJBQ2xDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQXpCLENBQXlCLENBQUMsQ0FBQztnQkFDckYsQ0FBQztnQkF6Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0hBSVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBb0JGLG9CQUFDOztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQseUNBbUJDLENBQUEiLCJmaWxlIjoiYXBwL0hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0hlbGxvU2VydmljZX0gZnJvbSBcIi4vaGVsbG8uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxteS1uYXY+PC9teS1uYXY+XHJcbiAgICAgICAgPGgxPkdyZWV0aW5nIHRlc3Q8L2gxPlxyXG4gICAgICAgIDxwIGlkPVwiZ3JlZXRpbmdcIj57e2dyZWV0aW5nfX08L3A+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVsbG9TZXJ2aWNlOiBIZWxsb1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdyZWV0KFwiU2FtaXIgQmFyb3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JlZXRpbmc6IHN0cmluZztcclxuXHJcbiAgICBncmVldChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlbGxvU2VydmljZVxyXG4gICAgICAgICAgICAvLy5ncmVldChuYW1lKSAvLyBGb3IgVGVzdGluZ1xyXG4gICAgICAgICAgICAuZ3JlZXRjb3JlKG5hbWUpIC8vIEZvciBSdW5uaW5nIEFwcFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5ncmVldGluZyA9IGRhdGEsIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
