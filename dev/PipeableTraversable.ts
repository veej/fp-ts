// import * as A from '../src/Array'
// import * as O from '../src/Option'
// import { pipeable, pipe } from '../src/pipeable'

// const P = pipeable(A.array)

// // tslint:disable-next-line: no-console
// console.log(
//   pipe(
//     A.replicate(10, 3),
//     P.traverse(O.option)(n => (n > 2 ? O.some(n) : O.none))
//   )
// )

// // tslint:disable-next-line: no-console
// console.log(A.array.traverse(O.option)(A.replicate(10, 3), n => (n > 2 ? O.some(n) : O.none)))
