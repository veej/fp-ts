/**
 * @since 2.0.0
 */
import { Alt1 } from './Alt'
import { ChainRec1 } from './ChainRec'
import { Comonad1 } from './Comonad'
import { Eq } from './Eq'
import { Foldable1 } from './Foldable'
import { Monad1 } from './Monad'
import { Monoid } from './Monoid'
import { Show } from './Show'
import { Traversable1 } from './Traversable'
declare module './HKT' {
  interface URItoKind<A> {
    readonly Identity: Identity<A>
  }
}
/**
 * @since 2.0.0
 */
export declare const URI = 'Identity'
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI
/**
 * @since 2.0.0
 */
export declare type Identity<A> = A
/**
 * @since 2.0.0
 */
export declare const getShow: <A>(S: Show<A>) => Show<Identity<A>>
/**
 * @since 2.0.0
 */
export declare const getEq: <A>(E: Eq<A>) => Eq<Identity<A>>
/**
 * @since 2.0.0
 */
export declare const alt: <A>(that: () => Identity<A>) => (fa: Identity<A>) => Identity<A>
/**
 * @since 2.0.0
 */
export declare const ap: <A>(fa: Identity<A>) => <B>(fab: Identity<(a: A) => B>) => Identity<B>
/**
 * @since 2.0.0
 */
export declare const apFirst: <B>(fb: Identity<B>) => <A>(fa: Identity<A>) => Identity<A>
/**
 * @since 2.0.0
 */
export declare const apSecond: <B>(fb: B) => <A>(fa: A) => B
/**
 * @since 2.0.0
 */
export declare const chain: <A, B>(f: (a: A) => Identity<B>) => (ma: Identity<A>) => Identity<B>
/**
 * @since 2.0.0
 */
export declare const chainFirst: <A, B>(f: (a: A) => Identity<B>) => (ma: Identity<A>) => Identity<A>
/**
 * @since 2.0.0
 */
export declare const duplicate: <A>(ma: Identity<A>) => Identity<Identity<A>>
/**
 * @since 2.6.2
 */
export declare const extract: <A>(wa: Identity<A>) => A
/**
 * @since 2.0.0
 */
export declare const extend: <A, B>(f: (wa: Identity<A>) => B) => (wa: Identity<A>) => Identity<B>
/**
 * @since 2.0.0
 */
export declare const flatten: <A>(mma: Identity<Identity<A>>) => Identity<A>
/**
 * @since 2.0.0
 */
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Identity<A>) => M
/**
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => (fa: Identity<A>) => Identity<B>
/**
 * @since 2.0.0
 */
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Identity<A>) => B
/**
 * @since 2.0.0
 */
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Identity<A>) => B
/**
 * @since 2.0.0
 */
export declare const identity: Monad1<URI> &
  Foldable1<URI> &
  Traversable1<URI> &
  Alt1<URI> &
  Comonad1<URI> &
  ChainRec1<URI>
