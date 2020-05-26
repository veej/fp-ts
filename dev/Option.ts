import * as O from '../src/Option'
import { pipe } from '../src/pipeable'
import * as E from '../src/Either'

const x = pipe(
  O.some(1),
  O.map(n => E.right(n + 1)),
  O.option.separate
)
