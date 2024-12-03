const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "homepage";
    },
  },
  {
    method: "*", // menangani semua metode yang tidak sesuai untuk path ini
    path: "/",
    handler: (request, h) => {
      return "Method not exist";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "about page";
    },
  },
  {
    method: "*", // menangani semua metode yang tidak sesuai untuk path ini
    path: "/about",
    handler: (request, h) => {
      return "Method not exist";
    },
  },
  {
    method: "GET",
    path: "/hello/{name}",
    handler: (request, h) => {
      const { lang } = request.query;
      const { name } = request.params;

      if (lang === "id") {
        return `Halo ${name}, dari bahasa ${lang}`;
      } else {
        return `Hello ${name}, from language ${lang || "unknown"}`;
      }
    },
  },
  {
    method: "POST",
    path: "/hello/{name}",
    handler: (request, h) => {
      const { username, password } = request.payload; // Body payload (POST)

      // Validasi username dan password
      if (username === "joko" && password === "1234") {
        const response = h.response(`Halo ${username}`);
        response.type("text/plain");
        response.header("Custom-Header", "some-value");
        return response;
      } else {
        return `Akses ditolak untuk ${username || "tidak diketahui"}`;
      }
    },
  },
  {
    method: "*", // menangani semua metode yang tidak sesuai untuk path ini
    path: "/{any*}",
    handler: (request, h) => {
      return "Page not exist";
    },
  },
];
module.exports = routes;
