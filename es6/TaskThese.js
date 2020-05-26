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
import { getSemigroup as getTaskSemigroup, monadTask, fromIO as fromIOTask } from './Task';
import * as TH from './These';
import { getTheseM } from './TheseT';
var T = /*#__PURE__*/ getTheseM(monadTask);
/**
 * @since 2.4.0
 */
export var URI = 'TaskThese';
/**
 * @since 2.4.0
 */
export var left = T.left;
/**
 * @since 2.4.0
 */
export var right = T.right;
/**
 * @since 2.4.0
 */
export var both = T.both;
/**
 * @since 2.4.0
 */
export function rightIO(ma) {
    return rightTask(fromIOTask(ma));
}
/**
 * @since 2.4.0
 */
export function leftIO(me) {
    return leftTask(fromIOTask(me));
}
/**
 * @since 2.4.0
 */
export var leftTask = T.leftM;
/**
 * @since 2.4.0
 */
export var rightTask = T.rightM;
/**
 * @since 2.4.0
 */
export var fromIOEither = fromIOTask;
/**
 * @since 2.4.0
 */
export function fold(onLeft, onRight, onBoth) {
    return function (fa) { return T.fold(fa, onLeft, onRight, onBoth); };
}
/**
 * @since 2.4.0
 */
export var swap = T.swap;
/**
 * @since 2.4.0
 */
export function getSemigroup(SE, SA) {
    return getTaskSemigroup(TH.getSemigroup(SE, SA));
}
/**
 * @since 2.4.0
 */
export function getMonad(S) {
    return __assign(__assign({ URI: URI }, T.getMonad(S)), { fromIO: rightIO, fromTask: rightTask });
}
/* tslint:disable:readonly-array */
/**
 * @since 2.4.0
 */
export function toTuple(e, a) {
    return function (fa) { return T.toTuple(fa, e, a); };
}
/* tslint:enable:readonly-array */
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @since 2.4.0
 */
export var bimap = function (f, g) { return function (fa) { return T.bimap(fa, f, g); }; };
/**
 * @since 2.4.0
 */
export var map = function (f) { return function (fa) { return T.map(fa, f); }; };
/**
 * @since 2.4.0
 */
export var mapLeft = function (f) { return function (fa) {
    return T.mapLeft(fa, f);
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.4.0
 */
export var taskThese = {
    URI: URI,
    map: T.map,
    bimap: T.bimap,
    mapLeft: T.mapLeft
};
