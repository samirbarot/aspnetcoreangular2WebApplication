System.register(["@angular/router", "./product.component", "./products-list.component", "./product-details.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, product_component_1, products_list_component_1, product_details_component_1;
    var routes, productRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (products_list_component_1_1) {
                products_list_component_1 = products_list_component_1_1;
            },
            function (product_details_component_1_1) {
                product_details_component_1 = product_details_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: "", component: product_component_1.ProductComponent, children: [
                        { path: "", component: products_list_component_1.ProductsListComponent },
                        { path: ":id", component: product_details_component_1.ProductDetailsComponent }
                    ]
                }
            ];
            exports_1("productRoutes", productRoutes = router_1.RouterModule.forChild(routes));
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Qcm9kdWN0L3Byb2R1Y3Qucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFLTSxNQUFNLEVBU0MsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztZQVRwQixNQUFNLEdBQUc7Z0JBQ1g7b0JBQ0ksSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsUUFBUSxFQUFFO3dCQUM3QyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO3dCQUM3QyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFDO3FCQUNyRDtpQkFDSjthQUNKLENBQUM7WUFFVywyQkFBQSxhQUFhLEdBQUcscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvUHJvZHVjdC9wcm9kdWN0LnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiXCIsIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCI6aWRcIiwgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFJvdXRlcyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpOyJdfQ==
