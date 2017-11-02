var request = require('request')

module.exports = function (module, version, registry, cb) {
  if(!module) throw new Error('no module specified')
  if(typeof version == 'function') {
    cb = version
    version = null
  }
  if (typeof registry === 'function') {
    cb = registry
    registry = null
  }
  if (module.charAt(0) === '@') {
    module = module.replace(/\//g, '%2f');
  }
  registry = registry || 'https://registry.npmjs.org/';
  version = version || 'latest';
  if (registry.charAt(registry.length - 1) !== '/') {
    registry += '/';
  }
  request(registry + module + '/' + version, {json: true}, function (err, res, pkg) {
    if(err) return cb(err)
    if(pkg.error) return cb(new Error(pkg.error))
    if(!pkg.gitHead) return cb(new Error('No gitHead information available'))
    cb(null, pkg.gitHead)
  })
}
