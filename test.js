var gitCommit = require('./')

gitCommit('dat', function (err, commit) {
  if(err) console.error(err)
  console.log(commit)
})

gitCommit('dat', '5.0.0', function (err, commit) {
  if(err) console.error(err)
  console.log(commit)
})