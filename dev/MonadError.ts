// import { Applicative } from '../src/Applicative'
// import { HKT, HKT2, URIS2, URIS, Type2, Type } from '../src/HKT'
// import { MonadThrow, MonadThrow2 } from '../src/MonadThrow'
// import {} from '../src/Identity'

// export interface MonadError<M, F> extends MonadThrow<M> {
//   readonly accept: <A>(fa: HKT<F, A>) => HKT2<M, never, A>
//   readonly catchError: <L, A>(mla: HKT2<M, L, A>, f: (l: L) => HKT<F, A>) => HKT<F, A>
//   // derived
//   readonly fold: <L, A, R>(mla: HKT2<M, L, A>, onLeft: (l: L) => HKT<F, R>, onRight: (a: A) => HKT<F, R>) => HKT<F, R>
//   // readonly endeavor: <L, A>(mla: HKT2<M, L, A>) => HKT<F, Either<L, A>>
//   // readonly absolve: <L, A>(fla: HKT<F, Either<L, A>>) => HKT2<M, L, A>
//   // readonly getOrElse: <L, A>(mla: HKT2<M, L, A>, f: (l: L) => A) => HKT<F, A>
// }

// interface MinimalDefinition<M, F> extends MonadThrow<M> {
//   readonly accept: <A>(fa: HKT<F, A>) => HKT2<M, never, A>
//   readonly catchError: <L, A>(mla: HKT2<M, L, A>, f: (l: L) => HKT<F, A>) => HKT<F, A>
// }

// export function getMonadError<M, F>(I: MinimalDefinition<M, F>, F: Applicative<F>): MonadError<M, F> {
//   return {
//     ...I,
//     fold: (mla, onLeft, onRight) => {
//       return I.catchError(I.chain(mla, a => I.accept(onRight(a))), onLeft)
//     }
//     // endeavor: <L, A>(mla: HKT2<M, L, A>) => {
//     //   return I.catchError(I.map<L, A, Either<L, A>>(mla, right), l => F.of(left(l)))
//     // },
//     // absolve: <L, A>(fla: HKT<F, Either<L, A>>) => {
//     //   return I.chain(I.accept(fla), e => fold<L, A, HKT2<M, L, A>>(e, I.throwError, I.of))
//     // },
//     // getOrElse: (mla, f) => I.catchError(mla, l => F.of(f(l)))
//   }
// }

// export interface MonadError2<M extends URIS2, F extends URIS> extends MonadThrow2<M> {
//   readonly accept: <A>(fa: Type<F, A>) => Type2<M, never, A>
//   readonly catchError: <L, A>(mla: Type2<M, L, A>, f: (l: L) => Type<F, A>) => Type<F, A>
//   readonly fold: <L, A, R>(
//     mla: Type2<M, L, A>,
//     onLeft: (l: L) => Type<F, R>,
//     onRight: (a: A) => Type<F, R>
//   ) => Type<F, R>
// }

// import { right, either, getOrElse, fold } from '../src/Either'

// const monadErrorEither: MonadError2<'Either', 'Identity'> = {
//   ...either,
//   accept: right,
//   catchError: getOrElse,
//   fold
// }
