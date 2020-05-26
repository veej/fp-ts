import { TaskEither, right, taskEither } from '../src/TaskEither'
import { fold } from '../src/Either'
import { pipe } from '../src/pipeable'

const add1000000 = function self(x: number): TaskEither<never, number> {
  const mx = right(x + 1)
  return x < 10000000 ? taskEither.chain(mx, self) : mx
}

add1000000(1)().then(e =>
  pipe(
    e,
    fold(console.error, console.log)
  )
)
