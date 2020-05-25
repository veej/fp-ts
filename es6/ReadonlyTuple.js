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
import { identity } from './function';
/**
 * @since 2.5.0
 */
export var URI = 'ReadonlyTuple';
/**
 * @since 2.5.0
 */
export function fst(sa) {
    return sa[0];
}
/**
 * @since 2.5.0
 */
export function snd(sa) {
    return sa[1];
}
/**
 * @since 2.5.0
 */
export function swap(sa) {
    return [snd(sa), fst(sa)];
}
/**
 * @since 2.5.0
 */
export function getApply(S) {
    return {
        URI: URI,
        _E: undefined,
        map: map_,
        ap: function (fab, fa) { return [fst(fab)(fst(fa)), S.concat(snd(fab), snd(fa))]; }
    };
}
var of = function (M) { return function (a) {
    return [a, M.empty];
}; };
/**
 * @since 2.5.0
 */
export function getApplicative(M) {
    return __assign(__assign({}, getApply(M)), { of: of(M) });
}
/**
 * @since 2.5.0
 */
export function getChain(S) {
    return __assign(__assign({}, getApply(S)), { chain: function (fa, f) {
            var _a = f(fst(fa)), b = _a[0], s = _a[1];
            return [b, S.concat(snd(fa), s)];
        } });
}
/**
 * @since 2.5.0
 */
export function getMonad(M) {
    return __assign(__assign({}, getChain(M)), { of: of(M) });
}
/**
 * @since 2.5.0
 */
export function getChainRec(M) {
    var chainRec = function (a, f) {
        var result = f(a);
        var acc = M.empty;
        var s = fst(result);
        while (s._tag === 'Left') {
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [s.right, M.concat(acc, snd(result))];
    };
    return __assign(__assign({}, getChain(M)), { chainRec: chainRec });
}
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
var compose_ = function (ba, ae) { return [fst(ba), snd(ae)]; };
var map_ = function (ae, f) { return [f(fst(ae)), snd(ae)]; };
var bimap_ = function (fea, f, g) { return [
    g(fst(fea)),
    f(snd(fea))
]; };
var mapLeft_ = function (fea, f) { return [fst(fea), f(snd(fea))]; };
var extend_ = function (ae, f) { return [
    f(ae),
    snd(ae)
]; };
var reduce_ = function (ae, b, f) { return f(b, fst(ae)); };
var foldMap_ = function (_) { return function (ae, f) { return f(fst(ae)); }; };
var reduceRight_ = function (ae, b, f) { return f(fst(ae), b); };
/**
 * @since 2.5.0
 */
export var bimap = function (f, g) { return function (fa) { return bimap_(fa, f, g); }; };
/**
 * @since 2.5.0
 */
export var compose = function (la) { return function (ab) {
    return compose_(ab, la);
}; };
/**
 * @since 2.5.0
 */
export var duplicate = function (ma) { return extend_(ma, identity); };
/**
 * @since 2.5.0
 */
export var extend = function (f) { return function (ma) { return extend_(ma, f); }; };
/**
 * @since 2.6.2
 */
export var extract = fst;
/**
 * @since 2.5.0
 */
export var foldMap = function (M) {
    var foldMapM = foldMap_(M);
    return function (f) { return function (fa) { return foldMapM(fa, f); }; };
};
/**
 * @since 2.5.0
 */
export var map = function (f) { return function (fa) { return map_(fa, f); }; };
/**
 * @since 2.5.0
 */
export var mapLeft = function (f) { return function (fa) {
    return mapLeft_(fa, f);
}; };
/**
 * @since 2.5.0
 */
export var reduce = function (b, f) { return function (fa) {
    return reduce_(fa, b, f);
}; };
/**
 * @since 2.5.0
 */
export var reduceRight = function (b, f) { return function (fa) {
    return reduceRight_(fa, b, f);
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.5.0
 */
export var readonlyTuple = {
    URI: URI,
    compose: compose_,
    map: map_,
    bimap: bimap_,
    mapLeft: mapLeft_,
    extract: extract,
    extend: extend_,
    reduce: reduce_,
    foldMap: foldMap_,
    reduceRight: reduceRight_,
    traverse: function (F) { return function (as, f) {
        return F.map(f(fst(as)), function (b) { return [b, snd(as)]; });
    }; },
    sequence: function (F) { return function (fas) {
        return F.map(fst(fas), function (a) { return [a, snd(fas)]; });
    }; }
};
