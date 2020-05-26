import * as S from '../src/Set'
import { pipeOp as pipe } from '../src/function'
import { eqNumber, eqString } from '../src/Eq'
import * as O from '../src/Option'

const x = pipe(
  new Set([1, 2, 3]),
  S.map(eqNumber)(n => n + 1),
  S.filterMap(eqString)(() => O.some('a'))
)
