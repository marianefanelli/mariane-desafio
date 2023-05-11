const boardManager = require('../src/boards');

beforeAll(() => {
    boardManager.create({ name: "Lateral", w: 2, h: 1, d: 1 });
    boardManager.create({ name: "Superior", w: 5, h: 1, d: 10 });
    boardManager.create({ name: "Bottom", w: 5, h: 1, d: 10 });

});

test('Check if beforeEach Run', () => {
    expect(boardManager.get().length).toBe(3)
});

test('Remove an existing board', () => {
    boardManager.remove("Bottom")
    expect(boardManager.get().length).toBe(2)
})
