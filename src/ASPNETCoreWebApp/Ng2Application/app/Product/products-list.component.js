System.register(["@angular/core", "./products.service"], function(exports_1, context_1) {
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
    var core_1, products_service_1;
    var ProductsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            }],
        execute: function() {
            ProductsListComponent = (function () {
                function ProductsListComponent(productsService) {
                    this.productsService = productsService;
                }
                ProductsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productsService.getProducts().subscribe(function (data) { return _this.products = data; });
                };
                ProductsListComponent = __decorate([
                    core_1.Component({
                        template: "\n            <h2>Products list</h2>\n            <ul>\n                <li *ngFor=\"let product of products\"><a [routerLink]=\"product.id\">{{product.name}}</a></li>\n            </ul>    \n        "
                    }), 
                    __metadata('design:paramtypes', [products_service_1.ProductsService])
                ], ProductsListComponent);
                return ProductsListComponent;
            }());
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=products-list.component.js.map