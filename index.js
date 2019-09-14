const robot = require('robotjs');
const express = require('express');
const app = express();
const port = 8080;

robot.setKeyboardDelay(3);

function macro(command) {
  console.log(`> ${command}`);
  robot.keyTap('enter');
  for(var i = 0; i < command.length; i++) {
    robot.keyTap(command[i]);
  }
  robot.keyTap('enter');
}

function registerMacro(path, command) {
  app.get(path, function(req, res) {
    macro(command);
    res.send('OK');
  });
}

registerMacro('/hello', '/me dances around crazily, bones creaking and cracking, eyes aglow!');

app.listen(port, () => console.log(`wow macro mapper listening on http://localhost:${port}!`))
