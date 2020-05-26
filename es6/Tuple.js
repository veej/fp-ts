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
import * as RT from './ReadonlyTuple';
/**
 * @since 2.0.0
 */
export var URI = 'Tuple';
/**
 * @since 2.0.0
 */
export var fst = RT.fst;
/**
 * @since 2.0.0
 */
export var snd = RT.snd;
/**
 * @since 2.0.0
 */
export var swap = RT.swap;
/**
 * @since 2.0.0
 */
export var getApply = RT.getApply;
/**
 * @since 2.0.0
 */
export var getApplicative = RT.getApplicative;
/**
 * @since 2.0.0
 */
export var getChain = RT.getChain;
/**
 * @since 2.0.0
 */
export var getMonad = RT.getMonad;
/**
 * @since 2.0.0
 */
export var getChainRec = RT.getChainRec;
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var bimap = RT.bimap;
/**
 * @since 2.0.0
 */
export var compose = RT.compose;
/**
 * @since 2.0.0
 */
export var duplicate = RT.duplicate;
/**
 * @since 2.0.0
 */
export var extend = RT.extend;
/**
 * @since 2.6.2
 */
export var extract = RT.extract;
/**
 * @since 2.0.0
 */
export var foldMap = RT.foldMap;
/**
 * @since 2.0.0
 */
export var map = RT.map;
/**
 * @since 2.0.0
 */
export var mapLeft = RT.mapLeft;
/**
 * @since 2.0.0
 */
export var reduce = RT.reduce;
/**
 * @since 2.0.0
 */
export var reduceRight = RT.reduceRight;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
export var tuple = 
/*#__PURE__*/
(function () {
    return __assign(__assign({}, RT.readonlyTuple), { URI: URI });
})();
