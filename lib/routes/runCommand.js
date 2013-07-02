var sys = require('sys'),
    exec = require('child_process').exec;

module.exports = function (socket) {
    var self = this;

    var puts = function (error, stdout, stderr) {
        console.log('in here too!');
        if (!error) {
            sys.puts(stdout);
            self.emit('commandRan', { stdout: stdout});
        }
    }
    console.log('in here');
    exec("ls -la", puts);
}

