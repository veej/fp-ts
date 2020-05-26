import { Monad2 } from './Monad'
declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly State: State<E, A>
  }
}
/**
 * @since 2.0.0
 */
export declare const URI = 'State'
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI
/**
 * @since 2.0.0
 */
export interface State<S, A> {
  (s: S): [A, S]
}
/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @since 2.0.0
 */
export declare const evalState: <S, A>(ma: State<S, A>, s: S) => A
/**
 * Run a computation in the `State` monad discarding the result
 *
 * @since 2.0.0
 */
export declare const execState: <S, A>(ma: State<S, A>, s: S) => S
/**
 * Get the current state
 *
 * @since 2.0.0
 */
export declare const get: <S>() => State<S, S>
/**
 * Set the state
 *
 * @since 2.0.0
 */
export declare const put: <S>(s: S) => State<S, void>
/**
 * Modify the state by applying a function to the current state
 *
 * @since 2.0.0
 */
export declare const modify: <S>(f: (s: S) => S) => State<S, void>
/**
 * Get a value which depends on the current state
 *
 * @since 2.0.0
 */
export declare const gets: <S, A>(f: (s: S) => A) => State<S, A>
/**
 * @since 2.0.0
 */
export declare const of: <S, A>(a: A) => State<S, A>
/**
 * @since 2.0.0
 */
export declare const ap: <E, A>(fa: State<E, A>) => <B>(fab: State<E, (a: A) => B>) => State<E, B>
/**
 * @since 2.0.0
 */
export declare const apFirst: <E, B>(fb: State<E, B>) => <A>(fa: State<E, A>) => State<E, A>
/**
 * @since 2.0.0
 */
export declare const apSecond: <E, B>(fb: State<E, B>) => <A>(fa: State<E, A>) => State<E, B>
/**
 * @since 2.0.0
 */
export declare const chain: <E, A, B>(f: (a: A) => State<E, B>) => (ma: State<E, A>) => State<E, B>
/**
 * @since 2.0.0
 */
export declare const chainFirst: <E, A, B>(f: (a: A) => State<E, B>) => (ma: State<E, A>) => State<E, A>
/**
 * @since 2.0.0
 */
export declare const flatten: <E, A>(mma: State<E, State<E, A>>) => State<E, A>
/**
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: State<E, A>) => State<E, B>
/**
 * @since 2.0.0
 */
export declare const state: Monad2<URI>