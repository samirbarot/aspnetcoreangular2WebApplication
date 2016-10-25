System.register(["@angular/core", "./nav.component", "@angular/common", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, nav_component_1, common_1, router_1;
    var SharedModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SharedModule = (function () {
                function SharedModule() {
                }
                SharedModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            nav_component_1.NavComponent
                        ],
                        imports: [
                            common_1.CommonModule,
                            router_1.RouterModule
                        ],
                        exports: [
                            common_1.CommonModule,
                            nav_component_1.NavComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SharedModule);
                return SharedModule;
            }());
            exports_1("SharedModule", SharedModule);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9TaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtnQkFBNEIsQ0FBQztnQkFiN0I7b0JBQUMsZUFBUSxDQUFDO3dCQUNOLFlBQVksRUFBRTs0QkFDViw0QkFBWTt5QkFDZjt3QkFDRCxPQUFPLEVBQUU7NEJBQ0wscUJBQVk7NEJBQ1oscUJBQVk7eUJBQ2Y7d0JBQ0QsT0FBTyxFQUFFOzRCQUNMLHFCQUFZOzRCQUNaLDRCQUFZO3lCQUNmO3FCQUNKLENBQUM7O2dDQUFBO2dCQUMwQixtQkFBQztZQUFELENBQTVCLEFBQTZCLElBQUE7WUFBN0IsdUNBQTZCLENBQUEiLCJmaWxlIjoiYXBwL1NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE5hdkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXZDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH0iXX0=
