var request = require('request')
var registry = 'https://registry.npmjs.org/'

module.exports = function (module, version, cb) {
  if(!module) throw new Error('no module specified')
  if(typeof version == 'function') {
    cb = version
    version = null
  }
  version = version || 'latest'
  request(registry + module + '/' + version, {json: true}, function (err, res, pkg) {
    if(err) return cb(err)
    if(pkg.error) return cb(new Error(pkg.error))
    if(!pkg.gitHead) return cb(new Error('No gitHead information available'))
    cb(null, pkg.gitHead)
  })
}

