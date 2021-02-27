const addon = require('bindings')('addon.node')

exports.factorial = addon.factorial

exports.factorial_tr = addon.factorial_tr