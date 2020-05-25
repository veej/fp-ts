/**
 * @since 2.0.0
 */
import { IO } from './IO'
import { Eq } from './Eq'
/**
 * Returns the current `Date`
 *
 * @since 2.0.0
 */
export declare const create: IO<Date>
/**
 * Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 *
 * @since 2.0.0
 */
export declare const now: IO<number>
/**
 * @since 2.6.0
 */
export declare const eqDate: Eq<Date>
/**
 * @since 2.6.0
 */
export declare const eqMonth: Eq<Date>
/**
 * @since 2.6.0
 */
export declare const eqYear: Eq<Date>
