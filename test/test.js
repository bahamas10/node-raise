var raise = require('../');

process.on('SIGUSR1', function() {
  console.log('SIGUSR1 caught.');
  process.exit(0);
});

raise('SIGUSR1');

setTimeout(function() {
  throw new Error('failed to catch signal');
}, 1000);
