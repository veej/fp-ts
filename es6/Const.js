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
import { identity, unsafeCoerce } from './function';
/**
 * @since 2.0.0
 */
export var URI = 'Const';
/**
 * @since 2.0.0
 */
export var make = unsafeCoerce;
/**
 * @since 2.0.0
 */
export function getShow(S) {
    return {
        show: function (c) { return "make(" + S.show(c) + ")"; }
    };
}
/**
 * @since 2.0.0
 */
export var getEq = identity;
/**
 * @since 2.6.0
 */
export var getOrd = identity;
/**
 * @since 2.6.0
 */
export var getBounded = identity;
/**
 * @since 2.6.0
 */
export var getSemigroup = identity;
/**
 * @since 2.6.0
 */
export var getMonoid = identity;
/**
 * @since 2.6.0
 */
export var getSemiring = identity;
/**
 * @since 2.6.0
 */
export var getRing = identity;
/**
 * @since 2.6.0
 */
export var getHeytingAlgebra = identity;
/**
 * @since 2.6.0
 */
export var getBooleanAlgebra = identity;
/**
 * @since 2.0.0
 */
export function getApply(S) {
    return {
        URI: URI,
        _E: undefined,
        map: map_,
        ap: function (fab, fa) { return make(S.concat(fab, fa)); }
    };
}
/**
 * @since 2.0.0
 */
export function getApplicative(M) {
    return __assign(__assign({}, getApply(M)), { of: function () { return make(M.empty); } });
}
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
var contramap_ = unsafeCoerce;
var map_ = unsafeCoerce;
var bimap_ = function (fea, f) { return make(f(fea)); };
var mapLeft_ = function (fea, f) { return make(f(fea)); };
/**
 * @since 2.0.0
 */
export var contramap = function (f) { return function (fa) { return contramap_(fa, f); }; };
/**
 * @since 2.0.0
 */
export var map = function (f) { return function (fa) { return map_(fa, f); }; };
/**
 * @since 2.6.2
 */
export var bimap = function (f, g) { return function (fa) {
    return bimap_(fa, f, g);
}; };
/**
 * @since 2.6.2
 */
export var mapLeft = function (f) { return function (fa) { return mapLeft_(fa, f); }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var const_ = {
    URI: URI,
    map: map_,
    contramap: contramap_,
    bimap: bimap_,
    mapLeft: mapLeft_
};
