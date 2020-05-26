import * as E from '../src/Either'
import { pipeOp as pipe } from '../src/function'
import { eqNumber } from '../src/Eq'

const result = pipe(
  E.right(1),
  E.map(n => n * 1),
  E.mapLeft((s: string) => s.length),
  E.elem(eqNumber)(2)
)
