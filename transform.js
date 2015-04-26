var through = require('through2');
var addon = 'process.argv = JSON.parse(\''+JSON.stringify(process.argv)+'\')\n'

module.exports = function (file) {
    return through(function (buf, enc, next) {
        var file = buf.toString('utf8')
        file = addon + file
        this.push(file);
        next();
    });
};
