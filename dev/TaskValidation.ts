import * as E from '../src/Either'
import { semigroupString } from '../src/Semigroup'
import { getApplicativeComposition } from '../src/Applicative'
import { task } from '../src/Task'
import { augment } from '../src/augment'

const validation = {
  ...E,
  ...augment(E.getValidation(semigroupString))
}

const TV = getApplicativeComposition(task, validation)
