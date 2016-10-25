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
//# sourceMappingURL=product.routes.js.map