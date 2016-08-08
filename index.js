(function(){

  'use strict';

  var m = new Map();

  console.info('set 1 => 100');
  m.set(1, 100);
  console.log(m);

  console.info('has 1 => true');
  console.log(m.has(1));

  console.info('get 1 => 100');
  console.log(m.get(1));

  console.info('delete 1');
  m.delete(1);
  console.log(m);

}());
