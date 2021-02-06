// without clustering (clustering managed by Pm2 -> process manager)
const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send({ name: "Sarang Choudhary", age: 24 });
});

app.get("/api/:n", (req, res) => {
  let n = parseInt(req.params.n);
  let count = 0;

  n = (n > 5000000000 && 5000000000) || n;

  for (let i = 0; i <= n; i++) {
    count += i;
  }

  res.send(`Final count is ${count}`);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

// with clustering
// const express = require("express");
// const cluster = require("cluster");
// const totalCPUs = require("os").cpus().length;

// const port = process.env.PORT || 8000;

// if (cluster.isMaster) {
//   console.log(`Number of CPUs is ${totalCPUs}`);
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < totalCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//     console.log("Let's fork another worker!");
//     cluster.fork();
//   });
// } else {
//   const app = express();
//   console.log(`Worker ${process.pid} started`);

//   app.get("/", (req, res) => {
//     res.send({ name: "Sarang Choudhary", age: 24 });
//   });

//   app.get("/api/:n", function (req, res) {
//     let n = parseInt(req.params.n);
//     let count = 0;

//     if (n > 5000000000) n = 5000000000;

//     for (let i = 0; i <= n; i++) {
//       count += i;
//     }

//     res.send(`Final count is ${count}`);
//   });

//   app.listen(port, () => {
//     console.log(`App listening on port http://localhost:${port}`);
//   });
// }
