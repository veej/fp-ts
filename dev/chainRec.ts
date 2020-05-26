import { IO, of } from '../src/IO'
import { Either, isLeft, left, right } from '../src/Either'

function chainRec<A, B>(a: A, f: (a: A) => IO<Either<A, B>>): IO<B> {
  return () => {
    let e = f(a)()
    while (isLeft(e)) {
      e = f(e.left)()
    }
    return e.right
  }
}

const f = (n: number) => (n < 10000000 ? of(left(n + 1)) : of(right('ok ' + n)))

console.log(chainRec(0, f)())

// import { Either, fold, left, right, isLeft } from '../src/Either'
// import { Task, chain, of } from '../src/Task'
// import { pipe } from '../src/pipeable'

// function chainRec<A, B>(a: A, f: (a: A) => Task<Either<A, B>>): Task<B> {
//   const go = (e: Either<A, B>): Task<B> =>
//     pipe(
//       e,
//       fold(a => pipe(f(a), chain(go)), of)
//     )
//   return go(left(a))
// }

// chainRec(0, f)().then(x => console.log(x))

// function chainRec2<A, B>(a: A, f: (a: A) => Task<Either<A, B>>): Task<B> {
//   return () => {
//     const e = f(a)()
//     return null as any
//   }
// }
