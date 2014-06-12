var fs = require('fs')
var map = require('lodash.map')
var template = require('lodash.template')

var file = fs.readFileSync('./template.js', 'utf8')
var tmpl = template(file)

module.exports = Compile

function Compile(conversions) {
  var async = false
  map(conversions, function(c) {
    async = async || c.async
  })

  return tmpl({
    conversions: conversions,
    async: !!async,
    map: map,
  })
}
