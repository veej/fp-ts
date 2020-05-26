/*
some(1)
  .map(n => n * 2)
  .chain(n => (n > 2 ? some(n) : none))
  .map(n => n + 1)
  .foldL(() => 'none', a => `some(${a})`)
*/

const double = (n: number) => n * 2
const increment = (n: number) => n + 1

// without pipeline operator
double(increment(double(double(5)))) // 42

// with pipeline operator
// 5 |> double |> double |> increment |> double; // 42

// with pipe
pipeOp(5, double, double, increment, double) // 42

import * as O from '../src/Option'
import { pipeOp } from '../src/function'

const xxx = pipeOp(
  O.some(1),
  O.map$(n => n * 2),
  O.chain$(n => (n > 2 ? O.some(n) : O.none)),
  O.map$(n => n + 1),
  O.fold$(() => 'none', a => `some(${a})`)
)

const add = (a: number) => (b: number): number => a + b

const x = pipeOp(O.some(add), O.ap$(O.some(1)), O.ap$(O.some(2)))
