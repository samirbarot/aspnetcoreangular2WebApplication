System.register(["@angular/core", "./about.component", "../shared/shared.module", "./about.routes"], function(exports_1, context_1) {
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
    var core_1, about_component_1, shared_module_1, about_routes_1;
    var AboutModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (about_routes_1_1) {
                about_routes_1 = about_routes_1_1;
            }],
        execute: function() {
            AboutModule = (function () {
                function AboutModule() {
                }
                AboutModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            about_component_1.AboutComponent
                        ],
                        imports: [
                            shared_module_1.SharedModule, about_routes_1.aboutRoutes
                        ],
                        exports: [
                            about_component_1.AboutComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutModule);
                return AboutModule;
            }());
            exports_1("AboutModule", AboutModule);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9BYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBQTJCLENBQUM7Z0JBWDVCO29CQUFDLGVBQVEsQ0FBQzt3QkFDTixZQUFZLEVBQUU7NEJBQ1YsZ0NBQWM7eUJBQ2pCO3dCQUNELE9BQU8sRUFBRTs0QkFDTCw0QkFBWSxFQUFFLDBCQUFXO3lCQUM1Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ0wsZ0NBQWM7eUJBQ2pCO3FCQUNKLENBQUM7OytCQUFBO2dCQUN5QixrQkFBQztZQUFELENBQTNCLEFBQTRCLElBQUE7WUFBNUIscUNBQTRCLENBQUEiLCJmaWxlIjoiYXBwL0Fib3V0L2Fib3V0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IGFib3V0Um91dGVzIH0gZnJvbSBcIi4vYWJvdXQucm91dGVzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQWJvdXRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLCBhYm91dFJvdXRlc1xyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBBYm91dENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRNb2R1bGUgeyB9Il19
