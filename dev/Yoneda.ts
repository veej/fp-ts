// import { HKT, URIS, Type, URIS2, Type2 } from '../src/HKT'
// import { Functor2, Functor, Functor1 } from '../src/Functor'
// import { identity } from '../src/function'

// export const URI = 'Yoneda'

// export type URI = typeof URI

// declare module '../src/HKT' {
//   interface URI2HKT2<L, A> {
//     Yoneda: Yoneda<L, A>
//   }
// }

// export class Yoneda<F, A> {
//   readonly _A!: A
//   readonly _L!: F
//   readonly _URI!: URI
//   constructor(readonly run: <X>(ax: (a: A) => X) => HKT<F, X>) {}
//   map<B>(ab: (a: A) => B): Yoneda<F, B> {
//     return new Yoneda(bx => this.run(a => bx(ab(a))))
//   }
//   lower<F extends URIS2, L>(this: Yoneda<F, A>): Type2<F, L, A>
//   lower<F extends URIS>(this: Yoneda<F, A>): Type<F, A>
//   lower(): HKT<F, A>
//   lower(): HKT<F, A> {
//     return this.run(identity)
//   }
// }

// export function lift<F extends URIS2>(F: Functor2<F>): <L, A>(fa: Type2<F, L, A>) => Yoneda<F, A>
// export function lift<F extends URIS>(F: Functor1<F>): <A>(fa: Type<F, A>) => Yoneda<F, A>
// export function lift<F>(F: Functor<F>): <A>(fa: HKT<F, A>) => Yoneda<F, A> {
//   return fa => new Yoneda(f => F.map(fa, f))
// }

// const map = <F, A, B>(fa: Yoneda<F, A>, f: (a: A) => B): Yoneda<F, B> => {
//   return fa.map(f)
// }

// export const yoneda: Functor2<URI> = {
//   URI,
//   map
// }

// import { array } from '../src/Array'

// const liftArray = lift(array)

// const fa = liftArray([1, 2, 3])
//   .map(n => n + 1)
//   .map(n => n + 2)
//   .lower()

// // tslint:disable-next-line:no-console
// console.log(fa)
