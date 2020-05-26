import * as R from '../src/Record'
import { pipe } from '../src/pipeable'

declare const r1: Record<'a' | 'b', number>
declare const r2: Record<string, number>

const x1 = pipe(
  r1,
  R.map(n => n > 1)
)

const x2 = pipe(
  r2,
  R.map(n => n > 1)
)
