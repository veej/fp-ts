import * as assert from 'assert'

import { fold, make } from '../src/Tree'

const t = make(1, [make(2), make(3)])

const sum = (as: Array<number>) => as.reduce((a, acc) => a + acc, 0)

// Sum the values in a tree:
assert.deepStrictEqual(fold((a: number, bs: Array<number>) => a + sum(bs))(t), 6)

// Find the maximum value in the tree:
assert.deepStrictEqual(fold((a: number, bs: Array<number>) => bs.reduce((b, acc) => Math.max(b, acc), a))(t), 3)

// Count the number of leaves in the tree:
assert.deepStrictEqual(fold((_: number, bs: Array<number>) => (bs.length === 0 ? 1 : sum(bs)))(t), 2)
