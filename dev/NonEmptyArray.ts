import { NonEmptyArray, map } from '../src/NonEmptyArray'

declare function f<A>(as: NonEmptyArray<A>): void

const x = map(['a'], s => s.length)
