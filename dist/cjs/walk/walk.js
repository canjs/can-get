/*can-key@0.3.0#walk/walk*/
var canReflect = require('can-reflect');
var utils = require('../utils.js');
module.exports = function walk(obj, name, keyCallback) {
    var parts = utils.parts(name);
    var length = parts.length, current, i, container, part;
    if (!length) {
        return;
    }
    current = obj;
    for (i = 0; i < length; i++) {
        container = current;
        part = parts[i];
        current = utils.isContainer(container) && canReflect.getKeyValue(container, part);
        var result = keyCallback({
            parent: container,
            key: part,
            value: current
        }, i);
        if (result !== undefined) {
            current = result;
        }
    }
};