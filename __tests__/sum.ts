import { describe, it } from "node:test"

describe('Only one test', () => {
  it('Sum 1 + 1 = 2', () => {
    expect(1 + 1).toBe(2)
  })
})

function expect(arg0: number) {
  throw new Error("Function not implemented.")
}
