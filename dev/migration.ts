import * as O from '../src/Option'

const double = (n: number): number => n * 2
const inverse = (n: number): O.Option<number> => (n === 0 ? O.none : O.some(1 / n))
const gt1 = (n: number): boolean => n > 1

O.some(1)
  .map(double)
  .chain(inverse)
  .filter(gt1)
  .foldL(() => 'ko', () => 'ok')

import { pipeOp } from '../src/function'

pipeOp(O.some(1), O.map(double), O.chain(inverse), O.filter(gt1), O.fold(() => 'ko', () => 'ok'))
