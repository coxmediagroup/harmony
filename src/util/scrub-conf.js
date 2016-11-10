/**
 * # Configuration Scrubber
 * Ensures a slot's name and id are unique in the page. If a
 * container has content, it is assumed that an ad call has already
 * been made.
 * @param {Object} conf Configuration for a single ad slot.
 * @return {Object} Clean slot configuration.
 * @throws When div id is not found in the DOM.
 */

var ids = require('./id-factory.js'),
    masterGroup = require('../modules/master-group.js');

module.exports = function (conf) {
    var el = global.document.getElementById(conf.id),
        newId;

    if (el) {
        newId = ids.next();
        conf.id = el.id = 'h-ad-' + newId;
        return conf;
    }
    throw Error('Ad slot ' + conf.name + ' container #' + conf.id + ' was not found!');
};