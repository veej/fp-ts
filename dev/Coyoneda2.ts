// import { identity } from '../src/function'
// import { Functor, Functor1 } from '../src/Functor'
// import { HKT, Type, URIS } from '../src/HKT'

// class CoyonedaF<F, A, I> {
//   constructor(readonly fi: HKT<F, I>, readonly f: (i: I) => A) {}
//   map<B>(f: (a: A) => B): Coyoneda<F, B> {
//     return new CoyonedaF(this.fi, i => f(this.f(i)))
//   }
//   lower<F extends URIS>(this: CoyonedaF<F, A, I>, F: Functor1<F>): Type<F, A>
//   lower(F: Functor<F>): HKT<F, A> {
//     return F.map(this.fi, this.f)
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

// //
// // Usage
// //

// import { array } from '../src/Array'

// const x = Coyoneda.lift([1, 2, 3])
//   .map(n => n + 1)
//   .map(n => n + 2)
//   .lower(array)
// // tslint:disable-next-line:no-console
// console.log(x) // => [ 4, 5, 6 ]
