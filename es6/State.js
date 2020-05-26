/**
 * The `State` monad is a synonym for the `StateT` monad transformer, applied to the `Identity` monad.
 *
 * @since 2.0.0
 */
import { monadIdentity } from './Identity';
import { getStateM } from './StateT';
import { identity } from './function';
var T = /*#__PURE__*/ getStateM(monadIdentity);
/**
 * @since 2.0.0
 */
export var URI = 'State';
/* tslint:enable:readonly-array */
/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @since 2.0.0
 */
export var evalState = T.evalState;
/**
 * Run a computation in the `State` monad discarding the result
 *
 * @since 2.0.0
 */
export var execState = T.execState;
/**
 * Get the current state
 *
 * @since 2.0.0
 */
export var get = T.get;
/**
 * Set the state
 *
 * @since 2.0.0
 */
export var put = T.put;
/**
 * Modify the state by applying a function to the current state
 *
 * @since 2.0.0
 */
export var modify = T.modify;
/**
 * Get a value which depends on the current state
 *
 * @since 2.0.0
 */
export var gets = T.gets;
/**
 * @since 2.0.0
 */
export var of = T.of;
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var ap = function (fa) { return function (fab) {
    return T.ap(fab, fa);
}; };
/**
 * @since 2.0.0
 */
export var apFirst = function (fb) { return function (fa) {
    return T.ap(T.map(fa, function (a) { return function (_) { return a; }; }), fb);
}; };
/**
 * @since 2.0.0
 */
export var apSecond = function (fb) { return function (fa) {
    return T.ap(T.map(fa, function () { return function (b) { return b; }; }), fb);
}; };
/**
 * @since 2.0.0
 */
export var chain = function (f) { return function (ma) {
    return T.chain(ma, f);
}; };
/**
 * @since 2.0.0
 */
export var chainFirst = function (f) { return function (ma) {
    return T.chain(ma, function (a) { return T.map(f(a), function () { return a; }); });
}; };
/**
 * @since 2.0.0
 */
export var flatten = function (mma) { return T.chain(mma, identity); };
/**
 * @since 2.0.0
 */
export var map = function (f) { return function (fa) { return T.map(fa, f); }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var state = {
    URI: URI,
    map: T.map,
    of: of,
    ap: T.ap,
    chain: T.chain
};
