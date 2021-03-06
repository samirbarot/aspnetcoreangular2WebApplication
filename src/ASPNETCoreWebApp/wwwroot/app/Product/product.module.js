System.register(["@angular/core", "./product.routes", "../shared/shared.module", "./product.component", "./products-list.component", "./product-details.component", "./products.service"], function(exports_1, context_1) {
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
    var core_1, product_routes_1, shared_module_1, product_component_1, products_list_component_1, product_details_component_1, products_service_1;
    var ProductModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_routes_1_1) {
                product_routes_1 = product_routes_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (products_list_component_1_1) {
                products_list_component_1 = products_list_component_1_1;
            },
            function (product_details_component_1_1) {
                product_details_component_1 = product_details_component_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            }],
        execute: function() {
            ProductModule = (function () {
                function ProductModule() {
                }
                ProductModule = __decorate([
                    core_1.NgModule({
                        declarations: [product_component_1.ProductComponent, products_list_component_1.ProductsListComponent, product_details_component_1.ProductDetailsComponent],
                        imports: [shared_module_1.SharedModule, product_routes_1.productRoutes],
                        providers: [products_service_1.ProductsService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductModule);
                return ProductModule;
            }());
            exports_1("ProductModule", ProductModule);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Qcm9kdWN0L3Byb2R1Y3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7Z0JBQTZCLENBQUM7Z0JBTDlCO29CQUFDLGVBQVEsQ0FBQzt3QkFDTixZQUFZLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSwrQ0FBcUIsRUFBRSxtREFBdUIsQ0FBQzt3QkFDaEYsT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSw4QkFBYSxDQUFDO3dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUMvQixDQUFDOztpQ0FBQTtnQkFDMkIsb0JBQUM7WUFBRCxDQUE3QixBQUE4QixJQUFBO1lBQTlCLHlDQUE4QixDQUFBIiwiZmlsZSI6ImFwcC9Qcm9kdWN0L3Byb2R1Y3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0Um91dGVzIH0gZnJvbSBcIi4vcHJvZHVjdC5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0cy1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvZHVjdHMuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RDb21wb25lbnQsIFByb2R1Y3RzTGlzdENvbXBvbmVudCwgUHJvZHVjdERldGFpbHNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgcHJvZHVjdFJvdXRlc10sXHJcbiAgICBwcm92aWRlcnM6IFtQcm9kdWN0c1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHsgfVxyXG4iXX0=
