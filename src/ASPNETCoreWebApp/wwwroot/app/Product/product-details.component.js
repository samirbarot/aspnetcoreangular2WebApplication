System.register(["@angular/core", "@angular/router", "./products.service"], function(exports_1, context_1) {
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
    var core_1, router_1, products_service_1;
    var ProductDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            }],
        execute: function() {
            ProductDetailsComponent = (function () {
                function ProductDetailsComponent(route, productsService) {
                    this.route = route;
                    this.productsService = productsService;
                }
                ProductDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // let id = parseInt(this.route.snapshot.params["id"], 10);
                    // this.productsService.getProduct(id).subscribe(data => this.product = data);
                    this.route.params.pluck("id").subscribe(function (id) { return _this.productsService.getProduct(id).subscribe(function (data) { return _this.product = data; }); });
                };
                ProductDetailsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h2>Product Details</h2>\n        <b>Id: </b>{{product.id}}<br>\n        <b>Name: </b>{{product.name}}\n        "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof products_service_1.ProductsService !== 'undefined' && products_service_1.ProductsService) === 'function' && _b) || Object])
                ], ProductDetailsComponent);
                return ProductDetailsComponent;
                var _a, _b;
            }());
            exports_1("ProductDetailsComponent", ProductDetailsComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Qcm9kdWN0L3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDSSxpQ0FBb0IsS0FBcUIsRUFBVSxlQUFnQztvQkFBL0QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO2dCQUVuRixDQUFDO2dCQUlELDBDQUFRLEdBQVI7b0JBQUEsaUJBSUM7b0JBSEcsMkRBQTJEO29CQUMzRCw4RUFBOEU7b0JBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBbkIsQ0FBbUIsQ0FBQyxFQUExRSxDQUEwRSxDQUFDLENBQUM7Z0JBQ3RJLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQ047d0JBQ0ksUUFBUSxFQUFFLDRIQUlUO3FCQUNKLENBQUM7OzJDQUFBO2dCQWFOLDhCQUFDOztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsNkRBWUMsQ0FBQSIsImZpbGUiOiJhcHAvUHJvZHVjdC9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvZHVjdHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWx9ICBmcm9tIFwiLi9wcm9kdWN0Lm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KFxyXG4gICAge1xyXG4gICAgICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgyPlByb2R1Y3QgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPGI+SWQ6IDwvYj57e3Byb2R1Y3QuaWR9fTxicj5cclxuICAgICAgICA8Yj5OYW1lOiA8L2I+e3twcm9kdWN0Lm5hbWV9fVxyXG4gICAgICAgIGBcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y3Q6IFByb2R1Y3RNb2RlbDtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgaWQgPSBwYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdLCAxMCk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0UHJvZHVjdChpZCkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wcm9kdWN0ID0gZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMucGx1Y2s8bnVtYmVyPihcImlkXCIpLnN1YnNjcmliZShpZCA9PiB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0KGlkKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnByb2R1Y3QgPSBkYXRhKSk7XHJcbiAgICB9XHJcbn0iXX0=
