import { tailRec } from './ChainRec';
import { identity as id } from './function';
/**
 * @since 2.0.0
 */
export var URI = 'Identity';
/**
 * @since 2.0.0
 */
export var getShow = id;
/**
 * @since 2.0.0
 */
export var getEq = id;
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
var alt_ = id;
var extend_ = function (wa, f) { return f(wa); };
var map_ = function (ma, f) { return f(ma); };
var ap_ = function (mab, ma) { return mab(ma); };
var chain_ = function (ma, f) { return f(ma); };
var reduce_ = function (fa, b, f) { return f(b, fa); };
var foldMap_ = function (_) { return function (fa, f) { return f(fa); }; };
var reduceRight_ = function (fa, b, f) { return f(fa, b); };
var traverse_ = function (F) { return function (ta, f) {
    return F.map(f(ta), id);
}; };
var sequence_ = function (F) { return function (ta) {
    return F.map(ta, id);
}; };
/**
 * @since 2.0.0
 */
export var alt = function (that) { return function (fa) { return alt_(fa, that); }; };
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
export var duplicate = function (wa) { return extend_(wa, id); };
/**
 * @since 2.6.2
 */
export var extract = id;
/**
 * @since 2.0.0
 */
export var extend = function (f) { return function (ma) {
    return extend_(ma, f);
}; };
/**
 * @since 2.0.0
 */
export var flatten = function (mma) { return chain_(mma, id); };
/**
 * @since 2.0.0
 */
export var foldMap = function (M) {
    var foldMapM = foldMap_(M);
    return function (f) { return function (fa) { return foldMapM(fa, f); }; };
};
/**
 * @since 2.0.0
 */
export var map = function (f) { return function (fa) { return map_(fa, f); }; };
/**
 * @since 2.0.0
 */
export var reduce = function (b, f) { return function (fa) { return reduce_(fa, b, f); }; };
/**
 * @since 2.0.0
 */
export var reduceRight = function (b, f) { return function (fa) {
    return reduceRight_(fa, b, f);
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
export var monadIdentity = {
    URI: URI,
    map: map_,
    of: id,
    ap: ap_,
    chain: chain_
};
/**
 * @since 2.0.0
 */
export var identity = {
    URI: URI,
    map: map_,
    of: id,
    ap: ap_,
    chain: chain_,
    reduce: reduce_,
    foldMap: foldMap_,
    reduceRight: reduceRight_,
    traverse: traverse_,
    sequence: sequence_,
    alt: alt_,
    extract: extract,
    extend: extend_,
    chainRec: tailRec
};
