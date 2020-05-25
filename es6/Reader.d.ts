/**
 * @since 2.0.0
 */
import { Category2 } from './Category'
import { Choice2 } from './Choice'
import { Monad2 } from './Monad'
import { Monoid } from './Monoid'
import { Profunctor2 } from './Profunctor'
import { Semigroup } from './Semigroup'
import { Strong2 } from './Strong'
declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly Reader: Reader<E, A>
  }
}
/**
 * @since 2.0.0
 */
export declare const URI = 'Reader'
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI
/**
 * @since 2.0.0
 */
export interface Reader<R, A> {
  (r: R): A
}
/**
 * Reads the current context
 *
 * @since 2.0.0
 */
export declare const ask: <R>() => Reader<R, R>
/**
 * Projects a value from the global context in a Reader
 *
 * @since 2.0.0
 */
export declare const asks: <R, A>(f: (r: R) => A) => Reader<R, A>
/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @since 2.0.0
 */
export declare function local<Q, R>(f: (d: Q) => R): <A>(ma: Reader<R, A>) => Reader<Q, A>
/**
 * @since 2.0.0
 */
export declare function getSemigroup<R, A>(S: Semigroup<A>): Semigroup<Reader<R, A>>
/**
 * @since 2.0.0
 */
export declare function getMonoid<R, A>(M: Monoid<A>): Monoid<Reader<R, A>>
/**
 * @since 2.0.0
 */
export declare const of: <R, A>(a: A) => Reader<R, A>
/**
 * @since 2.0.0
 */
export declare const ap: <R, A>(fa: Reader<R, A>) => <B>(fab: Reader<R, (a: A) => B>) => Reader<R, B>
/**
 * @since 2.0.0
 */
export declare const apFirst: <R, B>(fb: Reader<R, B>) => <A>(fa: Reader<R, A>) => Reader<R, A>
/**
 * @since 2.0.0
 */
export declare const apSecond: <R, B>(fb: Reader<R, B>) => <A>(fa: Reader<R, A>) => Reader<R, B>
/**
 * @since 2.0.0
 */
export declare const chain: <R, A, B>(f: (a: A) => Reader<R, B>) => (ma: Reader<R, A>) => Reader<R, B>
/**
 * @since 2.0.0
 */
export declare const chainFirst: <R, A, B>(f: (a: A) => Reader<R, B>) => (ma: Reader<R, A>) => Reader<R, A>
/**
 * @since 2.6.0
 */
export declare const chainW: <Q, A, B>(f: (a: A) => Reader<Q, B>) => <R>(ma: Reader<R, A>) => Reader<R & Q, B>
/**
 * @since 2.0.0
 */
export declare const flatten: <R, A>(mma: Reader<R, Reader<R, A>>) => Reader<R, A>
/**
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => <R>(fa: Reader<R, A>) => Reader<R, B>
/**
 * @since 2.0.0
 */
export declare const compose: <E, A>(la: Reader<E, A>) => <B>(ab: Reader<A, B>) => Reader<E, B>
/**
 * @since 2.0.0
 */
export declare const promap: <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Reader<E, A>) => Reader<D, B>
/**
 * @since 2.0.0
 */
export declare const reader: Monad2<URI> & Profunctor2<URI> & Category2<URI> & Strong2<URI> & Choice2<URI>
