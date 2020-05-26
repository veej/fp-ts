import { map_ } from '../src/Map'

const x = new Map<'a' | 'b', number>([['a', 1], ['b', 2]])

const result = map_.filter(x, a => a > 1)

const xx = result.get('a')
