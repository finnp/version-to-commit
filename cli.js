#!/usr/bin/env node

var toCommit = require('./')
var path = require('path')

if(process.argv[2] === '-h') {
  console.error('usage: version-to-commit [modulename] [version]')
  process.exit()
}

var module = process.argv[2] || require(path.join(process.cwd(), 'package.json')).name
var version = process.argv[3]

toCommit(module, version, function (err, commit) {
  if(err) return console.error(err)
  console.log(commit)
})
