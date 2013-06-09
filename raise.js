module.exports = raise;

function raise(signal) {
  return process.kill(process.pid, signal);
}
