const robot = require('robotjs');
const express = require('express');
const app = express();
const port = 8080;

function macro(command) {
  console.log(`> ${command}`);
  robot.keyTap('enter');
  robot.typeString(command);
  robot.keyTap('enter');
}

function registerMacro(path, command) {
  app.get(path, function(req, res) {
    macro(command);
    res.send('OK');
  });
}

registerMacro('/hello', '/s hello world!');

app.listen(port, () => console.log(`wow macro mapper listening on http://localhost:${port}!`))
