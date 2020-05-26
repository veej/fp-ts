import { createInterface } from 'readline'
import { Task } from '../src/Task'

export const getLine: Task<string> = () =>
  new Promise(resolve => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question('', answer => {
      rl.close()
      resolve(answer)
    })
  })

export const putStrLn = (message: string): Task<void> => () =>
  new Promise(res => {
    res(console.log(message))
  })
