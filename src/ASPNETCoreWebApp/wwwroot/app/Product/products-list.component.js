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
                    __metadata('design:paramtypes', [(typeof (_a = typeof products_service_1.ProductsService !== 'undefined' && products_service_1.ProductsService) === 'function' && _a) || Object])
                ], ProductsListComponent);
                return ProductsListComponent;
                var _a;
            }());
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Qcm9kdWN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0ksK0JBQW9CLGVBQWdDO29CQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7Z0JBRXBELENBQUM7Z0JBSUQsd0NBQVEsR0FBUjtvQkFBQSxpQkFFQztvQkFERyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQ047d0JBQ0ksUUFBUSxFQUFFLDBNQUtUO3FCQUNKLENBQUM7O3lDQUFBO2dCQVdOLDRCQUFDOztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQseURBVUMsQ0FBQSIsImZpbGUiOiJhcHAvUHJvZHVjdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvZHVjdHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiLi9wcm9kdWN0Lm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KFxyXG4gICAge1xyXG4gICAgICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxoMj5Qcm9kdWN0cyBsaXN0PC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzXCI+PGEgW3JvdXRlckxpbmtdPVwicHJvZHVjdC5pZFwiPnt7cHJvZHVjdC5uYW1lfX08L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD4gICAgXHJcbiAgICAgICAgYFxyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RNb2RlbFtdO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RzKCkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wcm9kdWN0cyA9IGRhdGEpO1xyXG4gICAgfVxyXG59Il19
