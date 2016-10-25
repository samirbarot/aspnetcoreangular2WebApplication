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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Qcm9kdWN0L3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtvQkFDSSxhQUFRLEdBQW1CO3dCQUN2QixJQUFJLDRCQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQzt3QkFDaEMsSUFBSSw0QkFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7d0JBQ2hDLElBQUksNEJBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDO3dCQUNoQyxJQUFJLDRCQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQzt3QkFDaEMsSUFBSSw0QkFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7cUJBQ25DLENBQUM7Z0JBU04sQ0FBQztnQkFQRyxxQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxlQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVTtvQkFDakIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQWhCTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFpQmIsc0JBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELDZDQWdCQyxDQUFBIiwiZmlsZSI6ImFwcC9Qcm9kdWN0L3Byb2R1Y3RzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFByb2R1Y3RNb2RlbCB9IGZyb20gXCIuL3Byb2R1Y3QubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSB7XHJcbiAgICBwcm9kdWN0czogUHJvZHVjdE1vZGVsW10gPSBbXHJcbiAgICAgICAgbmV3IFByb2R1Y3RNb2RlbCgwLCBcIlByb2R1Y3QgMFwiKSxcclxuICAgICAgICBuZXcgUHJvZHVjdE1vZGVsKDEsIFwiUHJvZHVjdCAxXCIpLFxyXG4gICAgICAgIG5ldyBQcm9kdWN0TW9kZWwoMiwgXCJQcm9kdWN0IDJcIiksXHJcbiAgICAgICAgbmV3IFByb2R1Y3RNb2RlbCgzLCBcIlByb2R1Y3QgM1wiKSxcclxuICAgICAgICBuZXcgUHJvZHVjdE1vZGVsKDQsIFwiUHJvZHVjdCA0XCIpXHJcbiAgICBdO1xyXG5cclxuICAgIGdldFByb2R1Y3RzKCk6IE9ic2VydmFibGU8UHJvZHVjdE1vZGVsW10+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLnByb2R1Y3RzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb2R1Y3RNb2RlbD4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMucHJvZHVjdHNbaWRdKTtcclxuICAgIH1cclxufVxyXG4iXX0=
