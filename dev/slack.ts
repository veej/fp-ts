import { Option, isNone } from '../src/Option'

function reduce<A, B>(fa: Option<A>, b: B, f: (acc: B, a: A) => B): B {
  return isNone(fa) ? b : f(b, fa.value)
}
