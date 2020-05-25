var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @since 2.3.0
 */
import { identity } from './function';
import { getSemigroup as getReaderSemigroup } from './Reader';
import { getReaderM } from './ReaderT';
import * as TA from './Task';
var T = /*#__PURE__*/ getReaderM(TA.monadTask);
/**
 * @since 2.3.0
 */
export var URI = 'ReaderTask';
/**
 * @since 2.4.0
 */
export function run(ma, r) {
    return ma(r)();
}
/**
 * @since 2.3.0
 */
export var fromTask = T.fromM;
/**
 * @since 2.3.0
 */
export var fromReader = T.fromReader;
/**
 * @since 2.3.0
 */
export function fromIO(ma) {
    return fromTask(TA.fromIO(ma));
}
/**
 * @since 2.3.0
 */
export var of = T.of;
/**
 * @since 2.3.0
 */
export function getSemigroup(S) {
    return getReaderSemigroup(TA.getSemigroup(S));
}
/**
 * @since 2.3.0
 */
export function getMonoid(M) {
    return {
        concat: getSemigroup(M).concat,
        empty: of(M.empty)
    };
}
/**
 * @since 2.3.0
 */
export var ask = T.ask;
/**
 * @since 2.3.0
 */
export var asks = T.asks;
/**
 * @since 2.3.0
 */
export function local(f) {
    return function (ma) { return T.local(ma, f); };
}
/**
 * @since 2.4.0
 */
export function fromIOK(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return fromIO(f.apply(void 0, a));
    };
}
/**
 * @since 2.4.0
 */
export function chainIOK(f) {
    return chain(fromIOK(f));
}
/**
 * @since 2.4.0
 */
export function fromTaskK(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return fromTask(f.apply(void 0, a));
    };
}
/**
 * @since 2.4.0
 */
export function chainTaskK(f) {
    return chain(fromTaskK(f));
}
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @since 2.3.0
 */
export var ap = function (fa) { return function (fab) { return T.ap(fab, fa); }; };
/**
 * @since 2.3.0
 */
export var apFirst = function (fb) { return function (fa) {
    return T.ap(T.map(fa, function (a) { return function (_) { return a; }; }), fb);
}; };
/**
 * @since 2.3.0
 */
export var apSecond = function (fb) { return function (fa) {
    return T.ap(T.map(fa, function () { return function (b) { return b; }; }), fb);
}; };
/**
 * @since 2.3.0
 */
export var chain = function (f) { return function (ma) { return T.chain(ma, f); }; };
/**
 * @since 2.3.0
 */
export var chainFirst = function (f) { return function (ma) { return T.chain(ma, function (a) { return T.map(f(a), function () { return a; }); }); }; };
/**
 * @since 2.3.0
 */
export var flatten = function (mma) { return T.chain(mma, identity); };
/**
 * @since 2.3.0
 */
export var map = function (f) { return function (fa) { return T.map(fa, f); }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
export var monadReaderTask = {
    URI: URI,
    map: T.map,
    of: of,
    ap: T.ap,
    chain: T.chain
};
/**
 * @since 2.3.0
 */
export var readerTask = {
    URI: URI,
    map: T.map,
    of: of,
    ap: T.ap,
    chain: T.chain,
    fromIO: fromIO,
    fromTask: fromTask
};
/**
 * Like `readerTask` but `ap` is sequential
 * @since 2.3.0
 */
export var readerTaskSeq = 
/*#__PURE__*/
(function () {
    return __assign(__assign({}, readerTask), { ap: function (mab, ma) { return T.chain(mab, function (f) { return T.map(ma, f); }); } });
})();
