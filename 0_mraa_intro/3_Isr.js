/*eslint no-console:0*/

var m = require('mraa');
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

function isrUpdate() {
  if(l.read()){
    c ++;
  }

  if(r.read()){
    c --;
  }

  console.log(c);
}

var l = new m.Gpio(6);
var r = new m.Gpio(7);
var c = 0;

l.dir(m.DIR_IN);
l.mode(m.MODE_PULLUP);
r.dir(m.DIR_IN);
r.mode(m.MODE_PULLUP);

l.isr(m.EDGE_BOTH, isrUpdate);
r.isr(m.EDGE_BOTH, isrUpdate);

setInterval(function(){
  /* nop */
},1000);
