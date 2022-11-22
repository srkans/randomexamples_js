const siparisler = document.querySelectorAll('.order-row__summary__price');

var regex = /[+-]?\d+(\.\d+ )?/g;

let allValues= new Array();

for(let i = 0; i<siparisler.length; i++){ allValues[i] = siparisler[i].innerHTML.match(regex).map(function(v) { return parseFloat(v); }); } ;

let sum= 0 ;

for(let i = 0 ; i<allValues.length; i ++) {if(allValues[i].length ===2){sum = sum + allValues[i][0]} if(allValues[i].length ===3){sum = sum + allValues[i][0]*1000 + allValues[i][1] } }

console.log(sum);