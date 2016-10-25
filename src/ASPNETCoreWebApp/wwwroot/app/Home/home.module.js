System.register(["@angular/core", "./home.component", "./hello.service", "../shared/shared.module", "./home.routes"], function(exports_1, context_1) {
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
    var core_1, home_component_1, hello_service_1, shared_module_1, home_routes_1;
    var HomeModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (home_routes_1_1) {
                home_routes_1 = home_routes_1_1;
            }],
        execute: function() {
            HomeModule = (function () {
                function HomeModule() {
                }
                HomeModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            home_component_1.HomeComponent
                        ],
                        imports: [
                            shared_module_1.SharedModule, home_routes_1.homeRoutes
                        ],
                        providers: [
                            hello_service_1.HelloService
                        ],
                        exports: [
                            home_component_1.HomeComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeModule);
                return HomeModule;
            }());
            exports_1("HomeModule", HomeModule);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUFBO2dCQUEwQixDQUFDO2dCQWQzQjtvQkFBQyxlQUFRLENBQUM7d0JBQ04sWUFBWSxFQUFFOzRCQUNWLDhCQUFhO3lCQUNoQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ0wsNEJBQVksRUFBRSx3QkFBVTt5QkFDM0I7d0JBQ0QsU0FBUyxFQUFFOzRCQUNQLDRCQUFZO3lCQUNmO3dCQUNELE9BQU8sRUFBRTs0QkFDTCw4QkFBYTt5QkFDaEI7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBQ3dCLGlCQUFDO1lBQUQsQ0FBMUIsQUFBMkIsSUFBQTtZQUEzQixtQ0FBMkIsQ0FBQSIsImZpbGUiOiJhcHAvSG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIZWxsb1NlcnZpY2V9IGZyb20gXCIuL2hlbGxvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IGhvbWVSb3V0ZXMgfSBmcm9tIFwiLi9ob21lLnJvdXRlc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLCBob21lUm91dGVzXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSGVsbG9TZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9Il19
