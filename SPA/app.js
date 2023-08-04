// 1. what viw show to user based on route
function router(params) {
  // dashboard,products,orders
  const routes = [
    // { path: "/SPA/index.html", view: () => console.log("main") },
    { path: "/SPA/dashboard", view: () => console.log("dashboard") },
    { path: "/SPA/products", view: () => console.log("products") },
    { path: "/SPA/orders", view: () => console.log("orders") },
  ];
  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoutes.find((route) => route.isMatch);
  if (!match) {
    match = {
      route: {
        path: "/SPA/not-found",
        view: () => console.log("not-found page"),
      },
      isMatch: true,
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});
