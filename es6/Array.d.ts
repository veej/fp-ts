/**
 * @since 2.0.0
 */
import { Alternative1 } from './Alternative'
import { Compactable1, Separated } from './Compactable'
import { Either } from './Either'
import { Eq } from './Eq'
import { Extend1 } from './Extend'
import { FilterableWithIndex1, PredicateWithIndex, RefinementWithIndex } from './FilterableWithIndex'
import { Foldable1 } from './Foldable'
import { FoldableWithIndex1 } from './FoldableWithIndex'
import { Predicate, Refinement } from './function'
import { FunctorWithIndex1 } from './FunctorWithIndex'
import { Monad1 } from './Monad'
import { Monoid } from './Monoid'
import { NonEmptyArray } from './NonEmptyArray'
import { Option } from './Option'
import { Ord } from './Ord'
import { Show } from './Show'
import { TraversableWithIndex1 } from './TraversableWithIndex'
import { Unfoldable1 } from './Unfoldable'
import { Witherable1 } from './Witherable'
declare module './HKT' {
  interface URItoKind<A> {
    readonly Array: Array<A>
  }
}
/**
 * @since 2.0.0
 */
export declare const URI = 'Array'
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI
/**
 * @since 2.0.0
 */
export declare const getShow: <A>(S: Show<A>) => Show<Array<A>>
/**
 * Returns a `Monoid` for `Array<A>`
 *
 * @example
 * import { getMonoid } from 'fp-ts/lib/Array'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */
export declare const getMonoid: <A = never>() => Monoid<Array<A>>
/**
 * Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import { eqString } from 'fp-ts/lib/Eq'
 * import { getEq } from 'fp-ts/lib/Array'
 *
 * const E = getEq(eqString)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @since 2.0.0
 */
export declare const getEq: <A>(E: Eq<A>) => Eq<Array<A>>
/**
 * Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/lib/Array'
 * import { ordString } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordString)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @since 2.0.0
 */
export declare const getOrd: <A>(O: Ord<A>) => Ord<Array<A>>
/**
 * An empty array
 *
 * @since 2.0.0
 */
export declare const empty: Array<never>
/**
 * Return a list of length `n` with element `i` initialized with `f(i)`
 *
 * @example
 * import { makeBy } from 'fp-ts/lib/Array'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @since 2.0.0
 */
export declare const makeBy: <A>(n: number, f: (i: number) => A) => Array<A>
/**
 * Create an array containing a range of integers, including both endpoints
 *
 * @example
 * import { range } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @since 2.0.0
 */
export declare const range: (start: number, end: number) => Array<number>
/**
 * Create an array containing a value repeated the specified number of times
 *
 * @example
 * import { replicate } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @since 2.0.0
 */
export declare const replicate: <A>(n: number, a: A) => Array<A>
/**
 * Removes one level of nesting
 *
 * @example
 * import { flatten } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3])
 *
 * @since 2.0.0
 */
export declare const flatten: <A>(mma: Array<Array<A>>) => Array<A>
/**
 * Break an array into its first element and remaining elements
 *
 * @example
 * import { foldLeft } from 'fp-ts/lib/Array'
 *
 * const len: <A>(as: Array<A>) => number = foldLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @since 2.0.0
 */
export declare const foldLeft: <A, B>(onNil: () => B, onCons: (head: A, tail: Array<A>) => B) => (as: Array<A>) => B
/**
 * Break an array into its initial elements and the last element
 *
 * @since 2.0.0
 */
export declare const foldRight: <A, B>(onNil: () => B, onCons: (init: Array<A>, last: A) => B) => (as: Array<A>) => B
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * ```ts
 * import { scanLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 * ```
 *
 * @since 2.0.0
 */
export declare const scanLeft: <A, B>(b: B, f: (b: B, a: A) => B) => (as: Array<A>) => Array<B>
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @since 2.0.0
 */
export declare const scanRight: <A, B>(b: B, f: (a: A, b: B) => B) => (as: Array<A>) => Array<B>
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/lib/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.0.0
 */
export declare const isEmpty: <A>(as: Array<A>) => boolean
/**
 * Test whether an array is non empty narrowing down the type to `NonEmptyArray<A>`
 *
 * @since 2.0.0
 */
export declare const isNonEmpty: <A>(as: Array<A>) => as is NonEmptyArray<A>
/**
 * Test whether an array contains a particular index
 *
 * @since 2.0.0
 */
export declare const isOutOfBound: <A>(i: number, as: Array<A>) => boolean
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(lookup(1, [1, 2, 3]), some(2))
 * assert.deepStrictEqual(lookup(3, [1, 2, 3]), none)
 *
 * @since 2.0.0
 */
export declare const lookup: <A>(i: number, as: Array<A>) => Option<A>
/**
 * Attaches an element to the front of an array, creating a new non empty array
 *
 * @example
 * import { cons } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(cons(0, [1, 2, 3]), [0, 1, 2, 3])
 *
 * @since 2.0.0
 */
export declare const cons: <A>(head: A, tail: Array<A>) => NonEmptyArray<A>
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */
export declare const snoc: <A>(init: Array<A>, end: A) => NonEmptyArray<A>
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.0.0
 */
export declare const head: <A>(as: Array<A>) => Option<A>
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.0.0
 */
export declare const last: <A>(as: Array<A>) => Option<A>
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.0.0
 */
export declare const tail: <A>(as: Array<A>) => Option<Array<A>>
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.0.0
 */
export declare const init: <A>(as: Array<A>) => Option<Array<A>>
/**
 * Keep only a number of elements from the start of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(takeLeft(2)([1, 2, 3]), [1, 2])
 *
 * @since 2.0.0
 */
export declare const takeLeft: (n: number) => <A>(as: Array<A>) => Array<A>
/**
 * Keep only a number of elements from the end of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeRight } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5])
 *
 * @since 2.0.0
 */
export declare const takeRight: (n: number) => <A>(as: Array<A>) => Array<A>
/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { takeLeftWhile } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])
 *
 * @since 2.0.0
 */
export declare function takeLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Array<B>
export declare function takeLeftWhile<A>(predicate: Predicate<A>): (as: Array<A>) => Array<A>
/**
 * Split an array into two parts:
 * 1. the longest initial subarray for which all elements satisfy the specified predicate
 * 2. the remaining elements
 *
 * @example
 * import { spanLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(spanLeft((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), { init: [1, 3], rest: [2, 4, 5] })
 *
 * @since 2.0.0
 */
export declare function spanLeft<A, B extends A>(
  refinement: Refinement<A, B>
): (
  as: Array<A>
) => {
  init: Array<B>
  rest: Array<A>
}
export declare function spanLeft<A>(
  predicate: Predicate<A>
): (
  as: Array<A>
) => {
  init: Array<A>
  rest: Array<A>
}
/**
 * Drop a number of elements from the start of an array, creating a new array
 *
 * @example
 * import { dropLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3])
 *
 * @since 2.0.0
 */
export declare const dropLeft: (n: number) => <A>(as: Array<A>) => Array<A>
/**
 * Drop a number of elements from the end of an array, creating a new array
 *
 * @example
 * import { dropRight } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(dropRight(2)([1, 2, 3, 4, 5]), [1, 2, 3])
 *
 * @since 2.0.0
 */
export declare const dropRight: (n: number) => <A>(as: Array<A>) => Array<A>
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @since 2.0.0
 */
export declare const dropLeftWhile: <A>(predicate: Predicate<A>) => (as: Array<A>) => Array<A>
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.0.0
 */
export declare const findIndex: <A>(predicate: Predicate<A>) => (as: Array<A>) => Option<number>
/**
 * Find the first element which satisfies a predicate (or a refinement) function
 *
 * @example
 * import { findFirst } from 'fp-ts/lib/Array'
 * import { some } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(findFirst((x: { a: number, b: number }) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), some({ a: 1, b: 1 }))
 *
 * @since 2.0.0
 */
export declare function findFirst<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Option<B>
export declare function findFirst<A>(predicate: Predicate<A>): (as: Array<A>) => Option<A>
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface Person {
 *   name: string
 *   age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.0.0
 */
export declare const findFirstMap: <A, B>(f: (a: A) => Option<B>) => (as: Array<A>) => Option<B>
/**
 * Find the last element which satisfies a predicate function
 *
 * @example
 * import { findLast } from 'fp-ts/lib/Array'
 * import { some } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(findLast((x: { a: number, b: number }) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), some({ a: 1, b: 2 }))
 *
 * @since 2.0.0
 */
export declare function findLast<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Option<B>
export declare function findLast<A>(predicate: Predicate<A>): (as: Array<A>) => Option<A>
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface Person {
 *   name: string
 *   age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.0.0
 */
export declare const findLastMap: <A, B>(f: (a: A) => Option<B>) => (as: Array<A>) => Option<B>
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface X {
 *   a: number
 *   b: number
 * }
 * const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.0.0
 */
export declare const findLastIndex: <A>(predicate: Predicate<A>) => (as: Array<A>) => Option<number>
/**
 * @since 2.0.0
 */
export declare const copy: <A>(as: Array<A>) => Array<A>
/**
 * @since 2.0.0
 */
export declare const unsafeInsertAt: <A>(i: number, a: A, as: Array<A>) => Array<A>
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/lib/Array'
 * import { some } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.0.0
 */
export declare const insertAt: <A>(i: number, a: A) => (as: Array<A>) => Option<Array<A>>
/**
 * @since 2.0.0
 */
export declare const unsafeUpdateAt: <A>(i: number, a: A, as: Array<A>) => Array<A>
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.0.0
 */
export declare const updateAt: <A>(i: number, a: A) => (as: Array<A>) => Option<Array<A>>
/**
 * @since 2.0.0
 */
export declare const unsafeDeleteAt: <A>(i: number, as: Array<A>) => Array<A>
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.0.0
 */
export declare const deleteAt: (i: number) => <A>(as: Array<A>) => Option<Array<A>>
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.0.0
 */
export declare const modifyAt: <A>(i: number, f: (a: A) => A) => (as: Array<A>) => Option<Array<A>>
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @since 2.0.0
 */
export declare const reverse: <A>(as: Array<A>) => Array<A>
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/lib/Array'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @since 2.0.0
 */
export declare const rights: <E, A>(as: Array<Either<E, A>>) => Array<A>
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/lib/Array'
 * import { left, right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @since 2.0.0
 */
export declare const lefts: <E, A>(as: Array<Either<E, A>>) => Array<E>
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/lib/Array'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepStrictEqual(sort(ordNumber)([3, 2, 1]), [1, 2, 3])
 *
 * @since 2.0.0
 */
export declare const sort: <A>(O: Ord<A>) => (as: Array<A>) => Array<A>
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @since 2.0.0
 */
export declare const zipWith: <A, B, C>(fa: Array<A>, fb: Array<B>, f: (a: A, b: B) => C) => Array<C>
/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(zip([1, 2, 3], ['a', 'b', 'c', 'd']), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 * @since 2.0.0
 */
export declare const zip: <A, B>(fa: Array<A>, fb: Array<B>) => Array<[A, B]>
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @since 2.0.0
 */
export declare const unzip: <A, B>(as: Array<[A, B]>) => [Array<A>, Array<B>]
/**
 * Rotate an array to the right by `n` steps
 *
 * @example
 * import { rotate } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @since 2.0.0
 */
export declare const rotate: (n: number) => <A>(as: Array<A>) => Array<A>
/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `Array<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.strictEqual(elem(eqNumber)(1, [1, 2, 3]), true)
 * assert.strictEqual(elem(eqNumber)(4, [1, 2, 3]), false)
 *
 * @since 2.0.0
 */
export declare const elem: <A>(E: Eq<A>) => (a: A, as: Array<A>) => boolean
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(uniq(eqNumber)([1, 2, 1]), [1, 2])
 *
 * @since 2.0.0
 */
export declare const uniq: <A>(E: Eq<A>) => (as: Array<A>) => Array<A>
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/lib/Array'
 * import { ord, ordString, ordNumber } from 'fp-ts/lib/Ord'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 * const byName = ord.contramap(ordString, (p: Person) => p.name)
 * const byAge = ord.contramap(ordNumber, (p: Person) => p.age)
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @since 2.0.0
 */
export declare const sortBy: <A>(ords: Array<Ord<A>>) => (as: Array<A>) => Array<A>
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Eq, eqNumber } from 'fp-ts/lib/Eq'
 * import { chop, spanLeft } from 'fp-ts/lib/Array'
 *
 * const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
 *   return chop(as => {
 *     const { init, rest } = spanLeft((a: A) => S.equals(a, as[0]))(as)
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @since 2.0.0
 */
export declare const chop: <A, B>(f: (as: NonEmptyArray<A>) => [B, Array<A>]) => (as: Array<A>) => Array<B>
/**
 * Splits an array into two pieces, the first piece has `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @since 2.0.0
 */
export declare const splitAt: (n: number) => <A>(as: Array<A>) => [Array<A>, Array<A>]
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 *
 * @since 2.0.0
 */
export declare const chunksOf: (n: number) => <A>(as: Array<A>) => Array<Array<A>>
/**
 * Array comprehension
 *
 * ```
 * [ f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) ]
 * ```
 *
 * @example
 * import { comprehension } from 'fp-ts/lib/Array'
 * import { tuple } from 'fp-ts/lib/function'
 *
 * assert.deepStrictEqual(comprehension([[1, 2, 3], ['a', 'b']], tuple, (a, b) => (a + b.length) % 2 === 0), [
 *   [1, 'a'],
 *   [1, 'b'],
 *   [3, 'a'],
 *   [3, 'b']
 * ])
 *
 * @since 2.0.0
 */
export declare function comprehension<A, B, C, D, R>(
  input: [Array<A>, Array<B>, Array<C>, Array<D>],
  f: (a: A, b: B, c: C, d: D) => R,
  g?: (a: A, b: B, c: C, d: D) => boolean
): Array<R>
export declare function comprehension<A, B, C, R>(
  input: [Array<A>, Array<B>, Array<C>],
  f: (a: A, b: B, c: C) => R,
  g?: (a: A, b: B, c: C) => boolean
): Array<R>
export declare function comprehension<A, R>(input: [Array<A>], f: (a: A) => R, g?: (a: A) => boolean): Array<R>
export declare function comprehension<A, B, R>(
  input: [Array<A>, Array<B>],
  f: (a: A, b: B) => R,
  g?: (a: A, b: B) => boolean
): Array<R>
export declare function comprehension<A, R>(input: [Array<A>], f: (a: A) => boolean, g?: (a: A) => R): Array<R>
/**
 * Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons
 *
 * @example
 * import { union } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(union(eqNumber)([1, 2], [2, 3]), [1, 2, 3])
 *
 * @since 2.0.0
 */
export declare const union: <A>(E: Eq<A>) => (xs: Array<A>, ys: Array<A>) => Array<A>
/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { intersection } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(intersection(eqNumber)([1, 2], [2, 3]), [2])
 *
 * @since 2.0.0
 */
export declare const intersection: <A>(E: Eq<A>) => (xs: Array<A>, ys: Array<A>) => Array<A>
/**
 * Creates an array of array values not included in the other given array using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { difference } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(difference(eqNumber)([1, 2], [2, 3]), [1])
 *
 * @since 2.0.0
 */
export declare const difference: <A>(E: Eq<A>) => (xs: Array<A>, ys: Array<A>) => Array<A>
/**
 * @since 2.0.0
 */
export declare const of: <A>(a: A) => Array<A>
/**
 * @since 2.0.0
 */
export declare const map: <A, B>(f: (a: A) => B) => (fa: Array<A>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const ap: <A>(fa: Array<A>) => <B>(fab: Array<(a: A) => B>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const apFirst: <B>(fb: Array<B>) => <A>(fa: Array<A>) => Array<A>
/**
 * @since 2.0.0
 */
export declare const apSecond: <B>(fb: Array<B>) => <A>(fa: Array<A>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const chain: <A, B>(f: (a: A) => Array<B>) => (ma: Array<A>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const chainFirst: <A, B>(f: (a: A) => Array<B>) => (ma: Array<A>) => Array<A>
/**
 * @since 2.0.0
 */
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (fa: Array<A>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const compact: <A>(fa: Array<Option<A>>) => Array<A>
/**
 * @since 2.0.0
 */
export declare const separate: <A, B>(fa: Array<Either<A, B>>) => Separated<Array<A>, Array<B>>
/**
 * @since 2.0.0
 */
export declare const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Array<A>) => Array<B>
  <A>(predicate: Predicate<A>): (fa: Array<A>) => Array<A>
}
/**
 * @since 2.0.0
 */
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Array<A>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Array<A>) => Separated<Array<A>, Array<B>>
  <A>(predicate: Predicate<A>): (fa: Array<A>) => Separated<Array<A>, Array<A>>
}
/**
 * @since 2.0.0
 */
export declare const partitionWithIndex: {
  <A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (
    fa: Array<A>
  ) => Separated<Array<A>, Array<B>>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): (fa: Array<A>) => Separated<Array<A>, Array<A>>
}
/**
 * @since 2.0.0
 */
export declare const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>
) => (fa: Array<A>) => Separated<Array<B>, Array<C>>
/**
 * @since 2.0.0
 */
export declare const partitionMapWithIndex: <A, B, C>(
  f: (i: number, a: A) => Either<B, C>
) => (fa: Array<A>) => Separated<Array<B>, Array<C>>
/**
 * @since 2.0.0
 */
export declare const alt: <A>(that: () => Array<A>) => (fa: Array<A>) => Array<A>
/**
 * @since 2.0.0
 */
export declare const filterMapWithIndex: <A, B>(f: (i: number, a: A) => Option<B>) => (fa: Array<A>) => Array<B>
/**
 * @since 2.0.0
 */
export declare const filterWithIndex: {
  <A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (fa: Array<A>) => Array<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): (fa: Array<A>) => Array<A>
}
/**
 * @since 2.0.0
 */
export declare const extend: <A, B>(f: (fa: Array<A>) => B) => (wa: Array<A>) => ReadonlyArray<B>
/**
 * @since 2.0.0
 */
export declare const duplicate: <A>(wa: Array<A>) => Array<Array<A>>
/**
 * @since 2.0.0
 */
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Array<A>) => M
/**
 * @since 2.0.0
 */
export declare const foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: number, a: A) => M) => (fa: Array<A>) => M
/**
 * @since 2.0.0
 */
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Array<A>) => B
/**
 * @since 2.0.0
 */
export declare const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: Array<A>) => B
/**
 * @since 2.0.0
 */
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Array<A>) => B
/**
 * @since 2.0.0
 */
export declare const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: Array<A>) => B
/**
 * @since 2.0.0
 */
export declare const array: Monad1<URI> &
  Foldable1<URI> &
  Unfoldable1<URI> &
  TraversableWithIndex1<URI, number> &
  Alternative1<URI> &
  Extend1<URI> &
  Compactable1<URI> &
  FilterableWithIndex1<URI, number> &
  Witherable1<URI> &
  FunctorWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number>