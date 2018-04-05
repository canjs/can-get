/*can-key@0.2.1#replace-with/replace-with*/
define([
    'require',
    'exports',
    'module',
    '../utils',
    '../get/get',
    '../delete/delete'
], function (require, exports, module) {
    var utils = require('../utils');
    var get = require('../get/get');
    var deleteKey = require('../delete/delete');
    module.exports = function (str, data, replacer, shouldRemoveMatchedPaths) {
        return str.replace(utils.strReplacer, function (whole, path) {
            var value = get(data, path);
            if (shouldRemoveMatchedPaths) {
                deleteKey(data, path);
            }
            return replacer ? replacer(path, value) : value;
        });
    };
});