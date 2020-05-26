type User = { user: string }

import * as E from '../src/Either'
import * as TE from '../src/TaskEither'
import { pipe } from '../src/pipeable'

declare function parseString(s: string): E.Either<string, number>
declare function fetchUser(id: number): TE.TaskEither<Error, User>

// this raises an error because: Type 'string' is not assignable to type 'Error'
const program_ = (s: string) => pipe(s, TE.fromEitherK(parseString), TE.chain(fetchUser))

// const program: (s: string) => TE.TaskEither<string | Error, User>
const program = (s: string) => pipe(s, TE.fromEitherK(parseString), TE.chainW(fetchUser))
