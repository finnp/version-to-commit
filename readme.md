# version-to-commit
[![NPM](https://nodei.co/npm/version-to-commit.png)](https://nodei.co/npm/version-to-commit/)

cli and function for returning the git sha commit hash for a certain npm module and
version.

Works by checking the `gitHead` attribute on the registry. This is not available
on all packages and versions. If you have an idea how to deal with it otherwise,
let me know.

## usage

```js
var toCommit = require('version-to-commit')

toCommit('dat', '5.0.0', 'https://registry.npmjs.org', function (err, commit) {
  console.log(commit) // returns 60c535343b30eb7aa93f754f7c73ebd61ca94ee4
})

```

The second and the third parameter are optional and will default to `latest` and `https://registry.npmjs.org`.

## cli
```
usage: version-to-commit [modulename] [version]
```

Defaults to the module in the current working directory and the `latest` version.
