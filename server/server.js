const express = require("express");
const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();
const app = require("./next");
const mode = process.env.NODE_ENV

const handle = app.getRequestHandler();

app.prepare().then(() => {
  /*server.get('/a', (req, res) => {
      return app.render(req, res, '/b', req.query)
    })
  
    server.get('/b', (req, res) => {
      return app.render(req, res, '/a', req.query)
    })
  
    server.get('/posts/:id', (req, res) => {
      return app.render(req, res, '/posts', { id: req.params.id })
    })*/

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} Run in ${mode} Mode`);
  });
});
module.exports = server;
