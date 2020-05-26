/**
 * @since 2.0.0
 */
import { Alt3, Alt3C } from './Alt'
import { Bifunctor3 } from './Bifunctor'
import { Either } from './Either'
import { Predicate, Refinement } from './function'
import { IO } from './IO'
import { IOEither } from './IOEither'
import { Monad3, Monad3C } from './Monad'
import { MonadTask3, MonadTask3C } from './MonadTask'
import { MonadThrow3, MonadThrow3C } from './MonadThrow'
import { Monoid } from './Monoid'
import { Option } from './Option'
import { Reader } from './Reader'
import { ReaderEither } from './ReaderEither'
import { ReaderTask } from './ReaderTask'
import { Semigroup } from './Semigroup'
import { Task } from './Task'
import * as TE from './TaskEither'
import TaskEither = TE.TaskEither
declare module './HKT' {
  interface URItoKind3<R, E, A> {
    readonly ReaderTaskEither: ReaderTaskEither<R, E, A>
  }
}
/**
 * @since 2.0.0
 */
export declare const URI = 'ReaderTaskEither'
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI
/**
 * @since 2.0.0
 */
export interface ReaderTaskEither<R, E, A> {
  (r: R): TaskEither<E, A>
}
/**
 * @since 2.0.0
 */
export declare function run<R, E, A>(ma: ReaderTaskEither<R, E, A>, r: R): Promise<Either<E, A>>
/**
 * @since 2.0.0
 */
export declare function left<R, E = never, A = never>(e: E): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const right: <R, E = never, A = never>(a: A) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function rightTask<R, E = never, A = never>(ma: Task<A>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function leftTask<R, E = never, A = never>(me: Task<E>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const fromTaskEither: <R, E, A>(ma: TaskEither<E, A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const rightReader: <R, E = never, A = never>(ma: Reader<R, A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.5.0
 */
export declare function leftReaderTask<R, E = never, A = never>(me: ReaderTask<R, E>): ReaderTaskEither<R, E, A>
/**
 * @since 2.5.0
 */
export declare function rightReaderTask<R, E = never, A = never>(ma: ReaderTask<R, A>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function leftReader<R, E = never, A = never>(me: Reader<R, E>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function fromIOEither<R, E, A>(ma: IOEither<E, A>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function fromReaderEither<R, E, A>(ma: ReaderEither<R, E, A>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function rightIO<R, E = never, A = never>(ma: IO<A>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function leftIO<R, E = never, A = never>(me: IO<E>): ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function fold<R, E, A, B>(
  onLeft: (e: E) => ReaderTask<R, B>,
  onRight: (a: A) => ReaderTask<R, B>
): (ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B>
/**
 * @since 2.0.0
 */
export declare function getOrElse<R, E, A>(
  onLeft: (e: E) => ReaderTask<R, A>
): (ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, A>
/**
 * @since 2.6.0
 */
export declare const getOrElseW: <Q, E, B>(
  onLeft: (e: E) => ReaderTask<Q, B>
) => <R, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTask<R & Q, A | B>
/**
 * @since 2.0.0
 */
export declare function orElse<R, E, A, M>(
  onLeft: (e: E) => ReaderTaskEither<R, M, A>
): (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, M, A>
/**
 * @since 2.0.0
 */
export declare function swap<R, E, A>(ma: ReaderTaskEither<R, E, A>): ReaderTaskEither<R, A, E>
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
export declare function getSemigroup<R, E, A>(S: Semigroup<A>): Semigroup<ReaderTaskEither<R, E, A>>
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
export declare function getApplySemigroup<R, E, A>(S: Semigroup<A>): Semigroup<ReaderTaskEither<R, E, A>>
/**
 * @since 2.0.0
 */
export declare function getApplyMonoid<R, E, A>(M: Monoid<A>): Monoid<ReaderTaskEither<R, E, A>>
/**
 * @since 2.0.0
 */
export declare const ask: <R, E = never>() => ReaderTaskEither<R, E, R>
/**
 * @since 2.0.0
 */
export declare const asks: <R, E = never, A = never>(f: (r: R) => A) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare function local<Q, R>(f: (f: Q) => R): <E, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<Q, E, A>
/**
 * Make sure that a resource is cleaned up in the event of an exception (*). The release action is called regardless of
 * whether the body action throws (*) or returns.
 *
 * (*) i.e. returns a `Left`
 *
 * @since 2.0.4
 */
export declare function bracket<R, E, A, B>(
  aquire: ReaderTaskEither<R, E, A>,
  use: (a: A) => ReaderTaskEither<R, E, B>,
  release: (a: A, e: Either<E, B>) => ReaderTaskEither<R, E, void>
): ReaderTaskEither<R, E, B>
/**
 * @since 2.3.0
 */
export declare function getReaderTaskValidation<E>(
  S: Semigroup<E>
): Monad3C<URI, E> & Bifunctor3<URI> & Alt3C<URI, E> & MonadTask3C<URI, E> & MonadThrow3C<URI, E>
/**
 * @since 2.4.0
 */
export declare function fromEitherK<E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Either<E, B>
): <R>(...a: A) => ReaderTaskEither<R, E, B>
/**
 * @since 2.4.0
 */
export declare function chainEitherK<E, A, B>(
  f: (a: A) => Either<E, B>
): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.4.0
 */
export declare function fromIOEitherK<E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IOEither<E, B>
): <R>(...a: A) => ReaderTaskEither<R, E, B>
/**
 * @since 2.4.0
 */
export declare function chainIOEitherK<E, A, B>(
  f: (a: A) => IOEither<E, B>
): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.4.0
 */
export declare function fromTaskEitherK<E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => TaskEither<E, B>
): <R>(...a: A) => ReaderTaskEither<R, E, B>
/**
 * @since 2.4.0
 */
export declare function chainTaskEitherK<E, A, B>(
  f: (a: A) => TaskEither<E, B>
): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.0.0
 */
export declare const alt: <R, E, A>(
  that: () => ReaderTaskEither<R, E, A>
) => (fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const ap: <R, E, A>(
  fa: ReaderTaskEither<R, E, A>
) => <B>(fab: ReaderTaskEither<R, E, (a: A) => B>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.0.0
 */
export declare const apFirst: <R, E, B>(
  fb: ReaderTaskEither<R, E, B>
) => <A>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const apSecond: <R, E, B>(
  fb: ReaderTaskEither<R, E, B>
) => <A>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.0.0
 */
export declare const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B
) => <R>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, B>
/**
 * @since 2.0.0
 */
export declare const chain: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.0.0
 */
export declare const chainFirst: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const flatten: <R, E, A>(
  mma: ReaderTaskEither<R, E, ReaderTaskEither<R, E, A>>
) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
/**
 * @since 2.0.0
 */
export declare const mapLeft: <E, G>(
  f: (e: E) => G
) => <R, A>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, A>
/**
 * @since 2.0.0
 */
export declare const fromEither: <R, E, A>(ma: Either<E, A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const fromOption: <E>(onNone: () => E) => <R, A>(ma: Option<A>) => ReaderTaskEither<R, E, A>
/**
 * @since 2.0.0
 */
export declare const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <U>(a: A) => ReaderTaskEither<U, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(a: A) => ReaderTaskEither<R, E, A>
}
/**
 * @since 2.0.0
 */
export declare const filterOrElse: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R>(
    ma: ReaderTaskEither<R, E, A>
  ) => ReaderTaskEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
}
/**
 * @since 2.0.0
 */
export declare const readerTaskEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadTask3<URI> & MonadThrow3<URI>
/**
 * Like `readerTaskEither` but `ap` is sequential
 * @since 2.0.0
 */
export declare const readerTaskEitherSeq: typeof readerTaskEither
/**
 * @since 2.6.0
 */
export declare const chainW: <Q, D, A, B>(
  f: (a: A) => ReaderTaskEither<Q, D, B>
) => <R, E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R & Q, E | D, B>
/**
 * @since 2.6.1
 */
export declare const chainEitherKW: <D, A, B>(
  f: (a: A) => Either<D, B>
) => <R, E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E | D, B>
/**
 * @since 2.6.1
 */
export declare const chainTaskEitherKW: <D, A, B>(
  f: (a: A) => TaskEither<D, B>
) => <R, E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E | D, B>
/**
 * @since 2.6.1
 */
export declare const chainIOEitherKW: <D, A, B>(
  f: (a: A) => IOEither<D, B>
) => <R, E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E | D, B>
