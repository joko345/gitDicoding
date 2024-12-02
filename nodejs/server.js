const Hapi = require("@hapi/hapi");
const ruter = require("./route");

console.log("Halo, kita akan belajar membuat server menggunakan Hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(ruter);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
