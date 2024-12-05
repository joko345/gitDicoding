const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  constserver = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  server.route(routes);
  console.log(`server berjalan ${server.info.url}`);
};
init();
