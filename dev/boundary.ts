// import { TaskEither, rightTask } from '../src/TaskEither'
// import { Task } from '../src/Task'

// export const nextTick: Task<void> = new Task(() => new Promise(resolve => process.nextTick(() => resolve(undefined))))

// export const taskEitherNextTick = <L, R>(te: TaskEither<L, R>): TaskEither<L, R> =>
//   rightTask<L, void>(nextTick).chain(() => te)
