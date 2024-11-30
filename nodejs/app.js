const http = require("http");
const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
};

const memoryInformation = process.memoryUsage();
console.log(memoryInformation);

const firstName = process.argv[2];
const lastName = process.argv[3]; //argv untuk menyimpan value env sementara dari input cli
// TODO 1: Isi dengan nilai heapUsed dari instance process.memoryUsage.
const initialMemoryUsage = process.memoryUsage().heapUsed;

// TODO 2: Isi dengan nilai index ke-2 dari process.argv.
const yourName = process.argv[2];

// TODO 3: Isi dengan nilai NODE_ENV dari process.env.
const environment = process.env.NODE_ENV || "development";

// Proses looping untuk meningkatkan penggunaan memori
for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

// TODO 4: Isi dengan nilai heapUsed dari instance process.memoryUsage.
const currentMemoryUsage = process.memoryUsage().heapUsed;

// Menampilkan hasil
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);

console.log(`Hello ${firstName} ${lastName}`);
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});
