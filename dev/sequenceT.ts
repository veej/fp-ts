import { sequenceT as sequenceTApply } from '../src/Apply'
import { Applicative, Applicative1, Applicative2 } from '../src/Applicative'
import { HKT, URIS, Kind, URIS2, Kind2 } from '../src/HKT'

export function sequenceT<F extends URIS2>(
  F: Applicative2<F>
): <E, A extends ReadonlyArray<unknown>>(...components: { [K in keyof A]: Kind2<F, E, A[K]> }) => Kind2<F, E, A>
export function sequenceT<F extends URIS>(
  F: Applicative1<F>
): <A extends ReadonlyArray<unknown>>(...components: { [K in keyof A]: Kind<F, A[K]> }) => Kind<F, A>
export function sequenceT<F>(
  F: Applicative<F>
): <A extends ReadonlyArray<unknown>>(...components: { [K in keyof A]: HKT<F, A[K]> }) => HKT<F, A> {
  const sequenceTApplyF = sequenceTApply(F)
  return <A extends ReadonlyArray<unknown>>(...components: { [K in keyof A]: HKT<F, A[K]> }) =>
    components.length === 0 ? F.of([]) : (sequenceTApplyF(...(components as any)) as any)
}

import * as T from '../src/TaskEither'

// export declare function sequenceTTaskEither<E, T extends ReadonlyArray<T.TaskEither<E, any>>>(
//   ...t: T & { readonly 0: T.TaskEither<E, any> }
// ): T.TaskEither<E, { [K in keyof T]: [T[K]] extends [T.TaskEither<E, infer A>] ? A : never }>

export declare function sequenceTTaskEither<T extends ReadonlyArray<T.TaskEither<any, any>>>(
  ...t: T & { readonly 0: T.TaskEither<any, any> }
): T.TaskEither<
  { [K in keyof T]: [T[K]] extends [T.TaskEither<infer E, any>] ? E : never }[number],
  { [K in keyof T]: [T[K]] extends [T.TaskEither<any, infer A>] ? A : never }
>

const s = sequenceT(T.taskEither)

const result = sequenceTTaskEither(T.right<string, number>(1), T.right<boolean, string>('a'))
result().then(console.log)
// const xs = [T.of(1), T.of('a')]
// const result2 = s(...xs)
const result2 = s()
result2().then(console.log)
