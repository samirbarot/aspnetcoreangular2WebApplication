System.register(["@angular/core", "rxjs/Rx", "./product.model"], function(exports_1, context_1) {
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
    var core_1, Rx_1, product_model_1;
    var ProductsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (product_model_1_1) {
                product_model_1 = product_model_1_1;
            }],
        execute: function() {
            ProductsService = (function () {
                function ProductsService() {
                    this.products = [
                        new product_model_1.ProductModel(0, "Product 0"),
                        new product_model_1.ProductModel(1, "Product 1"),
                        new product_model_1.ProductModel(2, "Product 2"),
                        new product_model_1.ProductModel(3, "Product 3"),
                        new product_model_1.ProductModel(4, "Product 4")
                    ];
                }
                ProductsService.prototype.getProducts = function () {
                    return Rx_1.Observable.of(this.products);
                };
                ProductsService.prototype.getProduct = function (id) {
                    return Rx_1.Observable.of(this.products[id]);
                };
                ProductsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProductsService);
                return ProductsService;
            }());
            exports_1("ProductsService", ProductsService);
        }
    }
});
//# sourceMappingURL=products.service.js.map