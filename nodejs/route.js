module.exports = [
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
    method: "*", // menangani semua metode yang tidak sesuai untuk path ini
    path: "/{any*}",
    handler: (request, h) => {
      return "Page not exist";
    },
  },
];
