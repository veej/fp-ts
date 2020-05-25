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
import * as E from './Either';
import { getEitherM } from './EitherT';
import { identity } from './function';
import { getSemigroup as getReaderSemigroup, monadReader } from './Reader';
import { getValidationM } from './ValidationT';
var T = /*#__PURE__*/ getEitherM(monadReader);
/**
 * @since 2.0.0
 */
export var URI = 'ReaderEither';
/**
 * @since 2.0.0
 */
export var left = T.left;
/**
 * @since 2.0.0
 */
export var right = T.of;
/**
 * @since 2.0.0
 */
export var rightReader = T.rightM;
/**
 * @since 2.0.0
 */
export var leftReader = T.leftM;
/**
 * @since 2.0.0
 */
export function fold(onLeft, onRight) {
    return function (ma) { return T.fold(ma, onLeft, onRight); };
}
/**
 * @since 2.0.0
 */
export function getOrElse(onLeft) {
    return function (ma) { return T.getOrElse(ma, onLeft); };
}
/**
 * @since 2.6.0
 */
export var getOrElseW = getOrElse;
/**
 * @since 2.0.0
 */
export function orElse(onLeft) {
    return function (ma) { return T.orElse(ma, onLeft); };
}
/**
 * @since 2.0.0
 */
export var swap = T.swap;
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
export function getSemigroup(S) {
    return getReaderSemigroup(E.getSemigroup(S));
}
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
export function getApplySemigroup(S) {
    return getReaderSemigroup(E.getApplySemigroup(S));
}
/**
 * @since 2.0.0
 */
export function getApplyMonoid(M) {
    return {
        concat: getApplySemigroup(M).concat,
        empty: right(M.empty)
    };
}
/**
 * @since 2.0.0
 */
export function ask() {
    return E.right;
}
/**
 * @since 2.0.0
 */
export function asks(f) {
    return function (r) { return E.right(f(r)); };
}
/**
 * @since 2.0.0
 */
export function local(f) {
    return function (ma) { return function (q) { return ma(f(q)); }; };
}
/**
 * @since 2.3.0
 */
export function getReaderValidation(S) {
    var T = getValidationM(S, monadReader);
    return __assign(__assign({ _E: undefined }, readerEither), T);
}
/**
 * @since 2.4.0
 */
export function fromEitherK(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return fromEither(f.apply(void 0, a));
    };
}
/**
 * @since 2.4.0
 */
export function chainEitherK(f) {
    return chain(fromEitherK(f));
}
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var alt = function (that) { return function (fa) { return T.alt(fa, that); }; };
/**
 * @since 2.0.0
 */
export var ap = function (fa) { return function (fab) { return T.ap(fab, fa); }; };
/**
 * @since 2.0.0
 */
export var apFirst = function (fb) { return function (fa) {
    return T.ap(T.map(fa, function (a) { return function () { return a; }; }), fb);
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
export var bimap = function (f, g) { return function (fa) { return T.bimap(fa, f, g); }; };
/**
 * @since 2.0.0
 */
export var chain = function (f) { return function (ma) { return T.chain(ma, f); }; };
/**
 * @since 2.6.0
 */
export var chainW = chain;
/**
 * @since 2.6.1
 */
export var chainEitherKW = chainEitherK;
/**
 * @since 2.0.0
 */
export var chainFirst = function (f) { return function (ma) { return T.chain(ma, function (a) { return T.map(f(a), function () { return a; }); }); }; };
/**
 * @since 2.0.0
 */
export var flatten = function (mma) {
    return T.chain(mma, identity);
};
/**
 * @since 2.0.0
 */
export var map = function (f) { return function (fa) {
    return T.map(fa, f);
}; };
/**
 * @since 2.0.0
 */
export var mapLeft = function (f) { return function (fa) { return T.mapLeft(fa, f); }; };
/**
 * @since 2.0.0
 */
export var fromEither = function (ma) {
    return E.isLeft(ma) ? left(ma.left) : right(ma.right);
};
/**
 * @since 2.0.0
 */
export var fromOption = function (onNone) { return function (ma) {
    return ma._tag === 'None' ? left(onNone()) : right(ma.value);
}; };
/**
 * @since 2.0.0
 */
export var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? right(a) : left(onFalse(a))); }; };
/**
 * @since 2.0.0
 */
export var filterOrElse = function (predicate, onFalse) { return function (ma) {
    return T.chain(ma, function (a) { return (predicate(a) ? right(a) : left(onFalse(a))); });
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var readerEither = {
    URI: URI,
    bimap: T.bimap,
    mapLeft: T.mapLeft,
    map: T.map,
    of: right,
    ap: T.ap,
    chain: T.chain,
    alt: T.alt,
    throwError: left
};
