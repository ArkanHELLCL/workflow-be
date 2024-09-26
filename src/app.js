import fs from 'fs';
const text = "Hola mundo";

fs.writeFile('./file.txt', text, (err) => {
  if (err) throw err;
});

console.log(process.env.PORT);