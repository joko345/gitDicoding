const fs = require("fs");
try {
  const data = fs.readFileSync("todo.txt", "UTF-8");
  console.log(data);
} catch (error) {
  console.log("Gagal membaca berkas");
  return;
}
