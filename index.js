const robot = require('robotjs');
const express = require('express');
const app = express();
const port = 8080;

robot.setKeyboardDelay(40);

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

registerMacro('/amaze', '/amaze');
registerMacro('/bye', '/bye');
registerMacro('/drool', '/drool');
registerMacro('/blow', '/blow');
registerMacro('/hug', '/hug');
registerMacro('/help', '/yell HELP!!!!!!');
registerMacro('/np', '/me says it\'s no problem!');
registerMacro('/apologize', '/apologize');
registerMacro('/trade', '/trade');
registerMacro('/bark', '/bark');
registerMacro('/flirt', '/flirt');
registerMacro('/growl', '/growl');
registerMacro('/grin', '/grin');
registerMacro('/incoming', '/incoming');
registerMacro('/sleep', '/sleep');
registerMacro('/lol', '/lol');
registerMacro('/moan', '/moan');
registerMacro('/pur', '/purr');
registerMacro('/roar', '/roar');
registerMacro('/slap', '/slap');
registerMacro('/wink', '/wink');
registerMacro('/growl', '/growl');
registerMacro('/tickle', '/tickle');
registerMacro('/wink', '/wink');
registerMacro('/cry', '/cry');
registerMacro('/laugh', '/laugh');
registerMacro('/wave', '/wave');
registerMacro('/blow', '/blow');
registerMacro('/cheer', '/cheer');
registerMacro('/oom-warning', '/me has low mana');
registerMacro('/oom', '/yell (warning) out of mana!');
registerMacro('/thank', '/thank');
registerMacro('/bow', '/bow');
registerMacro('/yes', '/yes');
registerMacro('/no', '/no');
registerMacro('/train', '/train');
registerMacro('/sit', '/sit');
registerMacro('/spit', '/spit');
registerMacro('/dance', '/dance');
registerMacro('/shake', '/shake');
registerMacro('/beg', '/beg');
registerMacro('/gasp', '/gasp');

app.listen(port, () => console.log(`wow macro mapper listening on http://localhost:${port}!`))
