#!/usr/bin/env node
var nunjucks = require('nunjucks');


var file = process.argv[2];

if (! file) {
    console.error("Usage: render.js <input file>")
    process.exit(1)
}

var output = nunjucks.render(file);

console.log(output)
process.exit(0)
