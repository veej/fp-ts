import * as E from './Either';
import { identity } from './function';
import { monadIdentity } from './Identity';
import { getReaderM } from './ReaderT';
var T = /*#__PURE__*/ getReaderM(monadIdentity);
/**
 * @since 2.0.0
 */
export var URI = 'Reader';
/**
 * Reads the current context
 *
 * @since 2.0.0
 */
export var ask = T.ask;
/**
 * Projects a value from the global context in a Reader
 *
 * @since 2.0.0
 */
export var asks = T.asks;
/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @since 2.0.0
 */
export function local(f) {
    return function (ma) { return T.local(ma, f); };
}
/**
 * @since 2.0.0
 */
export function getSemigroup(S) {
    return {
        concat: function (x, y) { return function (e) { return S.concat(x(e), y(e)); }; }
    };
}
/**
 * @since 2.0.0
 */
export function getMonoid(M) {
    return {
        concat: getSemigroup(M).concat,
        empty: function () { return M.empty; }
    };
}
/**
 * @since 2.0.0
 */
export var of = T.of;
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
var compose_ = function (ab, la) { return function (l) { return ab(la(l)); }; };
var promap_ = function (mbc, f, g) { return function (a) {
    return g(mbc(f(a)));
}; };
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
 * @since 2.6.0
 */
export var chainW = chain;
/**
 * @since 2.0.0
 */
export var flatten = function (mma) { return T.chain(mma, identity); };
/**
 * @since 2.0.0
 */
export var map = function (f) { return function (fa) { return T.map(fa, f); }; };
/**
 * @since 2.0.0
 */
export var compose = function (la) { return function (ab) {
    return compose_(ab, la);
}; };
/**
 * @since 2.0.0
 */
export var promap = function (f, g) { return function (fbc) { return promap_(fbc, f, g); }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
export var monadReader = {
    URI: URI,
    map: T.map,
    of: of,
    ap: T.ap,
    chain: T.chain
};
/**
 * @since 2.0.0
 */
export var reader = {
    URI: URI,
    map: T.map,
    of: of,
    ap: T.ap,
    chain: T.chain,
    promap: promap_,
    compose: compose_,
    id: function () { return identity; },
    first: function (pab) { return function (_a) {
        var a = _a[0], c = _a[1];
        return [pab(a), c];
    }; },
    second: function (pbc) { return function (_a) {
        var a = _a[0], b = _a[1];
        return [a, pbc(b)];
    }; },
    left: function (pab) {
        return E.fold(function (a) { return E.left(pab(a)); }, E.right);
    },
    right: function (pbc) {
        return E.fold(E.left, function (b) { return E.right(pbc(b)); });
    }
};
