import { Applicative2C } from '../src/Applicative'
import * as A from '../src/Array'
import { Bifunctor2 } from '../src/Bifunctor'
import { Kind2, URIS2 } from '../src/HKT'
import * as NEA from '../src/NonEmptyArray'

export function allErrors<F extends URIS2, E>(
  F: Applicative2C<F, NEA.NonEmptyArray<E>> & Bifunctor2<F>
): <A, B>(as: Array<A>, f: (a: A) => Kind2<F, E, B>) => Kind2<F, NEA.NonEmptyArray<E>, Array<B>> {
  const traverseF = A.array.traverse(F)
  return (as, f) => traverseF(as, a => F.mapLeft(f(a), NEA.of))
}

import * as E from '../src/Either'
import * as TE from '../src/TaskEither'
import * as IE from '../src/IOEither'

const S = NEA.getSemigroup<Error>()
export const allErrorsEither = allErrors(E.getValidation(S))
export const allErrorsTaskEither = allErrors(TE.getTaskValidation(S))
export const allErrorsIOEither = allErrors(IE.getIOValidation(S))
