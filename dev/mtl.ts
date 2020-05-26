import { Either, fold$ } from '../src/Either'
import { HKT, URIS, Type } from '../src/HKT'
import { Monad1 } from '../src/Monad'
import { augment } from '../src/augment'
import { log } from '../src/Console'
import { io } from '../src/IO'

interface Effect<M, A> extends HKT<M, Either<string, A>> {}

interface MonadStorage<M, V> extends MonadIO<M> {
  read: (s: string) => Effect<M, V>
  write: (s: string, n: V) => Effect<M, void>
}

interface MonadStorage1<M extends URIS, V> extends Monad1<M> {
  read: (s: string) => Type<M, Either<string, V>>
  write: (s: string, n: V) => Type<M, Either<string, void>>
}

function program<M>(M: MonadStorage<M, number>): Effect<M, void> {
  const _ = augment(M)
  const x = pipeOp(
    M.read('a'),
    _.chain$(fold$(() => M.write('a', 1), n => M.write('a', n * 2))),
    _.chain$(e => pipeOp(log('hello'), x => io.map(x, () => e), M.fromIO))
  )
  return x
}

import { task } from '../src/Task'
import { fromOption, rightIO } from '../src/TaskEither'
import { lookup } from '../src/Record'
import { MonadTask } from '../src/MonadTask'
import { MonadIO } from '../src/MonadIO'
import { pipeOp } from '../src/function'

const storage: Record<string, number> = {}

// since TaskEither<L, A> = Task<Either<L, A>> I can reuse TaskEither's functions
// to build an instance for Task
const monadStorageTask: MonadStorage1<'Task', number> = {
  ...task,
  read: s => fromOption(lookup(s, storage), () => 'not found'),
  write: (s, n) =>
    rightIO(() => {
      storage[s] = n
    })
}
