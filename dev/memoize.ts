import { IO } from 'fp-ts/lib/IO'

export function memoize<A = void, B = unknown>(f: (a: A) => B): (a: A) => B {
  let cache: B
  let done: boolean = false
  return a => {
    if (!done) {
      cache = f(a)
      done = true
    }
    return cache
  }
}

export function memoizeIO<A>(ma: IO<A>): IO<A> {
  let cache: A
  let done: boolean = false
  return () => {
    if (!done) {
      cache = ma()
      done = true
    }
    return cache
  }
}

let counter = 0

const ma = () => Promise.resolve(counter++)

const mma = memoize(ma)

ma().then(console.log)
ma().then(console.log)
mma().then(console.log)
mma().then(console.log)
