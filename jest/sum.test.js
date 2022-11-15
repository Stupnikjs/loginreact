const sum = require("./sum")
describe(
    'test sum', () => {
        test('test 1 + 2 = 3', () => {
            expect(sum(1, 2)).toBe(3)
        })
        test('test -1 + -2 = -3', () => {
            expect(sum(-1, -2)).toBe(-3)
        })
    }
    )
