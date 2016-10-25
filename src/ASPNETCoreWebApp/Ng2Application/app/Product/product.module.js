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
//# sourceMappingURL=product.module.js.map