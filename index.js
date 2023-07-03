import chalk from "chalk";
import express from "express";
const app = express();

function listRoutes() {
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push({
        path: middleware.route.path,
        methods: Object.keys(middleware.route.methods),
      });
    }
  });

  return routes;
}

app.get("/", (req, res) => {
  const routes = listRoutes();

  res.send(routes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.green(`Express Route Lister is running on port ${PORT}`));
});
