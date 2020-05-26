// import { identity } from '../src/function'
// import { Functor, Functor1, Functor2 } from '../src/Functor'
// import { HKT, Type, Type2, URIS, URIS2 } from '../src/HKT'

// export const URI = 'Coyoneda'

// export type URI = typeof URI

// declare module '../src/HKT' {
//   interface URI2HKT2<L, A> {
//     Coyoneda: Coyoneda<L, A>
//   }
// }

// class CoyonedaF<F, A, I> {
//   readonly _A!: A
//   readonly _L!: F
//   readonly _URI!: URI
//   constructor(readonly fi: HKT<F, I>, readonly f: (i: I) => A) {}
//   map<B>(f: (a: A) => B): Coyoneda<F, B> {
//     return new CoyonedaF(this.fi, i => f(this.f(i)))
//   }
//   lower<F extends URIS2, L>(this: CoyonedaF<F, A, I>, F: Functor2<F>): Type2<F, L, A>
//   lower<F extends URIS>(this: CoyonedaF<F, A, I>, F: Functor1<F>): Type<F, A>
//   lower(F: Functor<F>): HKT<F, A>
//   lower(F: Functor<F>): HKT<F, A> {
//     if (this.f === identity) {
//       // optimization
//       return this.fi as any
//     } else {
//       return F.map(this.fi, this.f)
//     }
//   }
// }

// export class Coyoneda<F, A> extends CoyonedaF<F, A, any> {
//   private constructor(f: (i: any) => A, fi: HKT<F, any>) {
//     super(fi, f)
//   }
//   static lift<F, A>(fa: HKT<F, A>): Coyoneda<F, A> {
//     return new CoyonedaF(fa, identity)
//   }
// }

// export const URI2 = 'MyArray'

// export type URI2 = typeof URI2

// declare module '../src/HKT' {
//   interface URI2HKT<A> {
//     MyArray: MyArray<A>
//   }
// }

// class MyArray<A> {
//   readonly _A!: A
//   readonly _URI!: URI2
//   constructor(readonly value: Array<A>) {}
//   map<B>(f: (a: A) => B): MyArray<B> {
//     return new MyArray(
//       this.value.map(a => {
//         log.push(`mapping element ${a}`)
//         return f(a)
//       })
//     )
//   }
// }

// const log: Array<string> = []

// const functorMyArray: Functor1<URI2> = {
//   URI: URI2,
//   map: <A, B>(fa: MyArray<A>, f: (a: A) => B): MyArray<B> => {
//     return fa.map(f)
//   }
// }

// const x = new MyArray([1, 2, 3])
// const g = (n: number) => n + 1
// const f = (n: number) => n + 2

// const y = Coyoneda.lift(x)
//   .map(g)
//   .map(f)
//   .lower(functorMyArray)
// // tslint:disable-next-line:no-console
// console.log(y, log)

// const x = [1, 2, 3].map(g).map(f)

// const x = Coyoneda.lift([1, 2, 3])
//   .map(g)
//   .map(f)
//   .lower(array)

// const x = [1, 2, 3].map(
//   compose(
//     f,
//     g
//   )
// )
