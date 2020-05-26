import { identity } from './function';
/**
 * @since 2.0.0
 */
export var URI = 'IO';
/**
 * @since 2.0.0
 */
export function getSemigroup(S) {
    return {
        concat: function (x, y) { return function () { return S.concat(x(), y()); }; }
    };
}
/**
 * @since 2.0.0
 */
export function getMonoid(M) {
    return {
        concat: getSemigroup(M).concat,
        empty: of(M.empty)
    };
}
/**
 * @since 2.0.0
 */
export var of = function (a) { return function () { return a; }; };
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
var map_ = function (ma, f) { return function () { return f(ma()); }; };
var ap_ = function (mab, ma) { return function () { return mab()(ma()); }; };
var chain_ = function (ma, f) { return function () { return f(ma())(); }; };
/**
 * @since 2.0.0
 */
export var ap = function (fa) { return function (fab) { return ap_(fab, fa); }; };
/**
 * @since 2.0.0
 */
export var apFirst = function (fb) { return function (fa) {
    return ap_(map_(fa, function (a) { return function () { return a; }; }), fb);
}; };
/**
 * @since 2.0.0
 */
export var apSecond = function (fb) { return function (fa) {
    return ap_(map_(fa, function () { return function (b) { return b; }; }), fb);
}; };
/**
 * @since 2.0.0
 */
export var chain = function (f) { return function (ma) { return chain_(ma, f); }; };
/**
 * @since 2.0.0
 */
export var chainFirst = function (f) { return function (ma) {
    return chain_(ma, function (a) { return map_(f(a), function () { return a; }); });
}; };
/**
 * @since 2.0.0
 */
export var flatten = function (mma) { return chain_(mma, identity); };
/**
 * @since 2.0.0
 */
export var map = function (f) { return function (fa) { return map_(fa, f); }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
export var monadIO = {
    URI: URI,
    map: map_,
    of: of,
    ap: ap_,
    chain: chain_
};
/**
 * @since 2.0.0
 */
export var io = {
    URI: URI,
    map: map_,
    of: of,
    ap: ap_,
    chain: chain_,
    fromIO: identity,
    chainRec: function (a, f) { return function () {
        var e = f(a)();
        while (e._tag === 'Left') {
            e = f(e.left)();
        }
        return e.right;
    }; }
};
