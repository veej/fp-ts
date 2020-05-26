import { TaskEither, taskEither } from '../src/TaskEither'

type PasswordError = { type: 'TooShort'; minLength: number } | { type: 'DoesNotContain'; chars: string }
type LoginError = { type: 'TooLong'; maxLength: number } | { type: 'BadFormat' }

declare function validateLogin(login: string): TaskEither<LoginError, void>
declare function validatePassword(password: string): TaskEither<PasswordError, void>

interface User {
  login: string
  password: string
}

import { augment } from '../src/augment'
import { pipeOp } from '../src/function'

const TE = augment(taskEither)

function widenLeft<M>(): <L extends M, A>(ma: TaskEither<L, A>) => TaskEither<M, A> {
  return ma => ma
}

const widen = widenLeft<LoginError | PasswordError>()

function validateUser(user: User): TaskEither<LoginError | PasswordError, User> {
  return pipeOp(validateLogin(user.login), TE.apSecond$(widen(validatePassword(user.password))), TE.map$(_ => user))
}
