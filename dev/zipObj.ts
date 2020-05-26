export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type ZipObj<Keys extends ReadonlyArray<string>, Values extends ReadonlyArray<unknown>> = UnionToIntersection<
  { [K in keyof Keys]: { [K2 in Keys[K] & string]: K extends keyof Values ? Values[K] : never } }[keyof Keys & number]
>

declare function zipObj<Keys extends ReadonlyArray<string>, Values extends ReadonlyArray<unknown>>(
  keys: Keys,
  values: Values
): ZipObj<Keys, Values>

const result = zipObj(['name', 'value'] as const, ['myName', 7] as const)
