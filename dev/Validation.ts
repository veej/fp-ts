import * as E from '../src/Either'
import { semigroupString } from '../src/Semigroup'
import { pipeable } from '../src/pipeable'

const a = pipeable(E.getValidation(semigroupString))

const V = {
  ...E,
  ...a
}
