/**
 * Returns the current `Date`
 *
 * @since 2.0.0
 */
export var create = function () { return new Date(); };
/**
 * Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 *
 * @since 2.0.0
 */
export var now = function () { return new Date().getTime(); };
/**
 * @since 2.6.0
 */
export var eqDate = {
    equals: function (x, y) { return x.getDate() === y.getDate(); }
};
/**
 * @since 2.6.0
 */
export var eqMonth = {
    equals: function (x, y) { return x.getMonth() === y.getMonth(); }
};
/**
 * @since 2.6.0
 */
export var eqYear = {
    equals: function (x, y) { return x.getFullYear() === y.getFullYear(); }
};
