import * as option from '../src/Option'
import { augment } from '../src/augment'

export const O = Object.assign(augment(option.option), option)

import * as these from '../src/These'
import { semigroupString } from '../src/Semigroup'

export const T = Object.assign(augment(these.getMonad(semigroupString)), these)

import * as either from '../src/Either'
import { getMonad, getAlt } from '../src/Validation'

const validation = {
  ...augment(getMonad(semigroupString)),
  ...augment(getAlt(semigroupString))
}
const V = {
  ...either,
  ...validation,
  validation
}
// const V = augment(getMonad(semigroupString))
