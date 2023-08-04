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
  //   console.log(match.route.view());
}

// 2. push user to new url
function navigateTo(url) {
  history.pushState(null, null, [url]);
  router();
}
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
