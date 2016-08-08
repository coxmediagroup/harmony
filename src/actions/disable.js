/**
 * # Disable Action
 * Disable a single slot or group of slots.
 */

var SlotFactory = require('../modules/slot-factory.js'),
    GroupFactory = require('../modules/group-factory.js');

module.exports = {
    /**
     * ## harmony.disable.slot(name)
     * Marks this slot as ineligible to make ad calls.
     * @param {string} name
     */
    slot: function (name) {
        SlotFactory.get(name).enabled = false;
    },
    /**
     * ## harmony.disable.group(name)
     * Marks each slot in this group as ineligible to make ad calls.
     * @param {string} name
     */
    group: function (name) {
        var group = GroupFactory.create(name);
        group.forEach(function (slot) {
            slot.enabled = false;
        });
    }
};
