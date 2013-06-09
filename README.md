raise
=====

Send a signal to the current process (see `raise(3)`)

Installation
------------

    npm install raise

Usage
-----

``` js
var raise = require('raise');

// unceremoniously end this process
raise('SIGKILL');
```

Uses
----

This can be useful for debugging purposes.  A lot of times I've used DTrace
to pause a process when it hits a certain code path so I can inspect its
memory.  With this module, you can simply add a `raise` statement where
you would like to send a signal to the process.

``` js
var raise = require('raise');

var a = [];
for (var i = 0; i < 100; i++) {
  a.push(a); // obvious bug

  // say you thought this function was a problem, but you couldn't identify why,
  // pause the process on the 10th iteration to coredump and inspect the memory
  if (i === 10) raise('SIGSTOP');
}
```

License
-------

MIT
